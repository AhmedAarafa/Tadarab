import React from "react";
import ReactDOM from 'react-dom';
import videojs from "video.js";
import VideoJS from "./Video"; // point to where the functional component is stored
import "videojs-playlist";
import "videojs-seek-buttons/dist/videojs-seek-buttons";
import "videojs-seek-buttons/dist/videojs-seek-buttons.css";
import "videojs-playlist";
import "videojs-playlist-ui";
//import "@silvermine/videojs-quality-selector/dist/css/quality-selector.css";
import playlistSrc from "./playlist.json";

const Button = videojs.getComponent("Button");
const ModalDialog = videojs.getComponent("ModalDialog");

/** dynamic server side variable **/
const isPurchased	= false;	// Is the course is purchased by the logged-in user 
const isUserLogin	= false;	// if user is logged-in, true elase false
const userId		= false;	// if user is logged-in, true elase false
const courseTitle	= '(اكسر قيدك (الناقد السلبي';	// the current course title

var tplayer;
//require('@silvermine/videojs-quality-selector')(videojs);

const TadarabVideoPlayer = (TPlayer) => {
	const overlayM=React.useRef(null);const errorM=React.useRef(null);const buynowM=React.useRef(null);
	var playbtn_on=false,free_limit=1,seconds_counter=0,wait_time=5;

	// lookup the options in the docs for more options
	const videoJsOptions = {
		autoplay:false,
		responsive:true,
		fluid:true,
		controlBar:{
			children:{
				prevButton:false,playToggle:true,nextButton:true,progressControl:true,currentTimeDisplay:true,timeDivider:true,durationDisplay:true,volumePanel:true,LiveDisplay:false,playbackRateMenuButton:true,displayCurrentQuality:false,qualitySelector:false,PictureInPictureToggle:true,fullscreenToggle:true
			}
		},
		playbackRates:[0.5,0.25,1,1.25,1.5,2],
		controls:true,
		muted:true,
	};

	const handlePlayerReady = (player) => {
		player.playlist(playlistSrc);player.bigPlayButton.show();
		player.playlist.autoadvance(5);
		player.autoplay(false);
		tplayer=player;
		tplayer.seekButtons({forward:8,forwardIndex:4,back:8,backIndex:5});
		//tplayer.bigPlayButton.show();
		// Modal variables
		var overlay ={
			label:'Click to play',
			head:'<h1>شاهد إعلان الدورة</h1>',
			body:'<p><button class="vjs-big-play-button tplayer-overlay-btn" type="button" title="Play Video" aria-disabled="false"><span aria-hidden="true" class="vjs-icon-placeholder"></span><span class="vjs-control-text" aria-live="polite">Play Video</span></button></p>',
		};
		var buynow={
			label:'Tadarab Popup',
			head:'<h1>واصل مشاهدة الدورة كاملة</h1>',
			buybtn:{
				text:'Please buy',
				class:'add_to_cart',
				attr:'data-id="123"',
			}
		};
		var error = {
			label:'TPlayer Error',
			head:'Unable to play media',
			body:'There was a problem playing this lession!<br><div>Click here to <a>Contact to support</a></div>',
			close:false,
		};

		/* NEXT Event */
		const NextButton = videojs.extend(Button,{
			constructor: function(){Button.apply(this,arguments);this.addClass("vjs-icon-next-item");},
			handleClick: function(props){
				var nid=(tplayer.playlist.currentItem()+1);
				if((tplayer.playlist()[nid])&&(tplayer.playlist()[nid].is_free)&&(nid>free_limit)&&(isUserLogin!==1)){free_lession(nid);}else{if(is_playable_next(nid)){pudate_playlist_active(document.querySelector('a[data-lession="'+nid+'"].lession'));tplayer_dialog('hide');tplayer.playlist.next();}else{tplayer_dialog('show');return false;}}
			}
		});

		/* PREVIOUS Event */
		const PrevButton = videojs.extend(Button, {
			constructor: function(){Button.apply(this,arguments);this.addClass("vjs-icon-previous-item");this.addClass("hide");},
			handleClick: function(props){
				var nid=(tplayer.playlist.currentItem()-1);
				if((tplayer.playlist()[nid])&&(tplayer.playlist()[nid].is_free)&&(nid>free_limit)&&(isUserLogin!==1)){free_lession(nid); }else{if(is_playable_next(nid)){pudate_playlist_active(document.querySelector('a[data-lession="'+nid+'"].lession'));tplayer_dialog('hide');tplayer.playlist.previous();}else{tplayer_dialog('show');return false;}}
			}
		});

		//videojs.registerComponent("PrevButton",PrevButton);
		videojs.registerComponent("NextButton",NextButton);

		tplayer.getChild("controlBar").addChild("PrevButton",{},0);
		tplayer.getChild("controlBar").addChild("NextButton",{},2);

		tplayer.on("play", startPlaying);
		tplayer.on("pause", pausePlaying);
		tplayer.on("error", handleOnError);
		tplayer.on('contextmenu',function(e){
			e.preventDefault();this.addClass('vjs-contextmenu-ui');
		});
		tplayer.on('touchend',function(e){
			if(playbtn_on){
				if(e.target.nodeName==='VIDEO'){
					player.bigPlayButton.show();
					/*if(tplayer.paused()){
						tplayer.play();
					}else{
						tplayer.pause();
					}*/
				}
			}
		});
		tplayer.on('ended',function(e){
			var nid=(tplayer.playlist.currentItem()+1);
			if((tplayer.playlist()[nid])&&(tplayer.playlist()[nid].is_free)&&(nid>free_limit)&&(isUserLogin!==1)){free_lession(nid);playbtn_on=true;}else{if(is_playable_next(nid)){tplayer_videotimeloader(nid);}else{tplayer.playlist.autoadvance(0);tplayer_dialog('show')}}
		});
		overlayM.current=overlay_modal(overlay,ModalDialog);
		buynowM.current=buynow_popup(buynow,ModalDialog);
		errorM.current=player_error(error,ModalDialog);
	};

	/** Start player playing **/
	function startPlaying(){playbtn_on=true;tplayer_video_progress('play');}

	/** pause player playing **/
	function pausePlaying(){if(playbtn_on){tplayer.bigPlayButton.show();}tplayer_video_progress('pause');}

	/** handle error **/
	function handleOnError() {const err=tplayer.error();if((err)&&(err.code===4)){tplayer.errorDisplay.hide();tplayer.bigPlayButton.hide();overlayM.current.close();buynowM.current.close();errorM.current.open();}}

	/** check the play source is able to play or not **/
	const is_playable_next = function(id){
		var is_able=false;
		if(tplayer.playlist()[id]){
			var play_src=((tplayer.playlist()[id].sources[0].src)?tplayer.playlist()[id].sources[0].src:''),
			isFree=((tplayer.playlist()[id].is_free)?tplayer.playlist()[id].is_free:false),
			is_play=((isPurchased===true)?true:isFree);
			if((play_src!=='')&&(is_play)){is_able=true;}
		}
		return is_able;
	}

	/** open tadarab dialog **/
	const tplayer_dialog = function(action){
		overlayM.current.close();errorM.current.close();
		if(action==='show'){buynowM.current.open();playbtn_on=true;tplayer.bigPlayButton.hide();}else if(action==='hide'){buynowM.current.close();playbtn_on=false;}
	}

	/** Overlay modal **/
	const overlay_modal = function(options,modal){
		var head='<div class="modal-header">'+options.head+'</div>',
		body='<div class="modal-body">'+options.body+'</div>',
		foot='<div class="modal-footer"></div>',
		overlay_html=body+head+foot,overlayEl=document.createElement('div');
		overlayEl.innerHTML=overlay_html;
		overlayEl.className='tplayer-dialog-el';
		var overlay_option={label:options.label,content:overlayEl,temporary:false},
		overlayM=new modal(tplayer,overlay_option);console.log("ASDFASDSADAD");
		overlayM.addClass('tplayer-dialog');if(options.close===true){overlayM.addClass('is_close_show');}overlayM.addClass('tplayer-overlay');tplayer.addChild(overlayM);overlayM.open();
		overlayM.on("click",function(e){overlayM.close();tplayer.play();});return overlayM;
	}

	/** Buy now popup **/
	const buynow_popup = function(options,modal){
		var buybtn=((options.buybtn)?('<a class="tadarab-btn '+options.buybtn.class+'" '+options.buybtn.attr+'>'+options.buybtn.text+'</a>'):''),
		closebtn=((options.clsbtn)?('<a class="tadarab-btn small secondary-btn tplayer-close '+options.clsbtn.class+'" id="tplayer-close">'+options.clsbtn.text+'</a>'):''),
		buynow_content=((options.head)?('<div class="modal-header">'+options.head+'</div>'):'')+((options.body)?('<div class="modal-body">'+options.body+'</div>'):'')+('<div class="modal-footer btn-box">'+buybtn+closebtn+'</div>'),
		buynowEl=document.createElement('div');
		buynowEl.innerHTML=buynow_content;
		buynowEl.className='tplayer-dialog-el';
		var buynow_option={label:options.label,content:buynowEl,temporary:false},buynowM=new modal(tplayer,buynow_option);
		buynowM.addClass('tplayer-dialog');if(options.close===true){buynowM.addClass('is_close_show');}tplayer.addChild(buynowM);if(options.clsbtn){document.getElementById('tplayer-close').addEventListener("click",function(e){buynowM.close();tplayer.play();});}return buynowM;
	}

	/** Play error popup **/
	const player_error = function(options,modal){
		var error_content=((options.head)?('<div class="modal-header">'+options.head+'</div>'):'')+((options.body)?('<div class="modal-body">'+options.body+'</div>'):'')+('<div class="modal-footer"></div>'),
		errorEl=document.createElement('div');
		errorEl.innerHTML=error_content;
		errorEl.className='tplayer-dialog-el';
		var error={label:'Tadarab Player Error',content:errorEl,temporary:true},errorM=new modal(tplayer,error);
		errorM.addClass('tplayer-dialog');if(options.close===true){errorM.addClass('is_close_show');}tplayer.addChild(errorM);return errorM;
	}

	/** Free lession limit alert **/
	const free_lession = function(id){
		tplayer.bigPlayButton.hide();alert("Login first");
	}

	/** play video **/
	function play_video(e){
		var playId=parseInt(e.currentTarget.getAttribute("data-lession"));

		console.log("playId :");
		console.log(playId);
		console.log(tplayer);

		//sel=document.scrollingElement||document.documentElement;scrollTo(sel,0,100);
		if((tplayer.playlist()[playId].is_free)&&(playId>free_limit)&&(isUserLogin!==1)){
			free_lession(playId);
		}else{
			if(is_playable_next(playId)){
				tplayer.playlist.currentItem(playId);tplayer_dialog('hide');tplayer.play();pudate_playlist_active(e.currentTarget);
			}else{
				tplayer_dialog('show');
			}
		}
	}

	/** update playlist activitys **/
	function pudate_playlist_active(e){
		var elems=Array.from(document.querySelectorAll('.active'));elems.forEach(node=>{node?.classList.remove('active');node?.classList.remove('play');});e.classList.add('active');e?.classList.add('play');
	}

	function tplayer_video_progress(type){
		var playbackInterval;
		if((playbackInterval)&&(typeof playbackInterval!==undefined)){clearInterval(playbackInterval);}
		if(type==='play'){
			var id=tplayer.playlist.currentItem(),
			//is_view=(tplayer.playlist()[id].sources[0].isView),
			//view_pr=(tplayer.playlist()[id].sources[0].viewPr),
			duration=tplayer.duration(),current=tplayer.currentTime(),
			perc=(current/duration*100).toFixed(2);
			if((Math.floor(perc)<=0)&&(tplayer.playlist()[id].viewPr<1)){
				tplayer.playlist()[id].viewPr=1;
				tplayer_viewed(id,tplayer.playlist()[id].title,tplayer.playlist()[id].is_free,0,current);
				console.log("0% start reached");
			}
			playbackInterval=setInterval(function(){
				id=tplayer.playlist.currentItem();current=tplayer.currentTime();perc=(current/duration*100).toFixed(2);
				if((Math.floor(perc)>=25)&&(tplayer.playlist()[id].viewPr<25)){
					tplayer.playlist()[id].viewPr=25;
					tplayer_viewed(id,tplayer.playlist()[id].title,tplayer.playlist()[id].is_free,25,current);
					console.log("25% reached");
				}
				if((Math.floor(perc)>=50)&&(tplayer.playlist()[id].viewPr<50)){
					tplayer.playlist()[id].viewPr=50;
					tplayer_viewed(id,tplayer.playlist()[id].title,tplayer.playlist()[id].is_free,50,current);
					console.log("50% reached");
				}
				if((Math.floor(perc)>=75)&&(tplayer.playlist()[id].viewPr<75)){
					tplayer.playlist()[id].viewPr=75;
					tplayer_viewed(id,tplayer.playlist()[id].title,tplayer.playlist()[id].is_free,75,current);
					console.log("75% reached");
				}
				if((Math.floor(perc)>=99)&&(tplayer.playlist()[id].viewPr<99)){
					tplayer.playlist()[id].viewPr=100;clearInterval(playbackInterval);
					tplayer_viewed(id,tplayer.playlist()[id].title,tplayer.playlist()[id].is_free,100,current);
					console.log("100% reached");
				}

				if((Math.floor(perc))%2===0){
					if(isUserLogin===1){
						if(seconds_counter<=0){seconds_counter=(Math.floor(current));}
						/**** Video Tracking code here... **/
						/* endpoint perameters.
						*	- courseId (corrent course id)
						*	- userId (logged-in user id)
						*	- id (the playlist item id integer (playlist index))
						*	- title (the playlist item title (you can use `tplayer.playlist()[id].title` ))
						*	- PR (percentage of the complete video (you can use `(Math.floor(perc))` ))
						*	- seconds (the complate viwed seconds (you can use `(Math.floor(current))` ))
						*	- counter (counter for the call each number of seconds (you can use `seconds_counter` ))
						*/
					}
				}
			},2000);
		}
		if(type==='pause'){
			clearInterval(playbackInterval);
		}
	}

	/** Video GA tracking **/
	function tplayer_viewed(id,title,isFree,pr,current){
		var type=((isFree)?'free':'paid'),action=((pr>0)?('progress-'+pr+'%'):'start'),
		vTitleEnglish=google_translate(title),courseTitleEnglish=google_translate(courseTitle);
		//tadarab_fire_traking_GA_code('video_tracking',{type:type,action:action,course_name:courseTitleEnglish,video_name:vTitleEnglish});
	}

	function google_translate(str){
		//var returnstr='',url="https://translation.googleapis.com/language/translate/v2",args={key:'AIzaSyBGhNG8VrjBatsKWpLVyDqhbdLDY6rF800',target:'en','source':'ar',q:str};
		var returnstr='',url="https://translation.googleapis.com/language/translate/v2",args={key:'AIzaSyBGhNG8VrjBatsKWpLVyDqhbdLDY6rF800',target:'en','source':'ar',q:str};
		url=(url+"?key=AIzaSyBGhNG8VrjBatsKWpLVyDqhbdLDY6rF800&source=ar&target=en&q="+str);
		try{
			//jQuery.ajax({url:url,type:'post',data:args,async:false,success:function(responce){returnstr=responce.data.translations[0].translatedText;}});
			/** here need to call the google api for translat arabic course title to english... **/
			fetch(url, {
				method: 'GET',
				headers: {
					"Content-Type": "application/json"
				}
			}).then(res => res.json()).then((response) => {
				console.log("response from google: ");
				console.log(response);
			}).catch(error => {
				/** error **/
				//console.log("There was an error with the translation request: ", error);
			});
		}catch(e){}
		return returnstr;
	}
	

	/** tadarab player 5 second loader on player before next video **/
	function tplayer_videotimeloader(id){
		var timeleft=wait_time,play_btn=document.getElementsByClassName('vjs-big-play-button');
		play_btn[0].innerHTML=play_btn[0].innerHTML+`<div class='tplay-timeload activering'><div id='halfclip'><div class='halfcircle' id='clipped'></div></div><div class='halfcircle' id='fixed'></div></div>`;
		var loadtime=setInterval(function(){timeleft--;if(timeleft<=0){clearInterval(loadtime);var elements=document.getElementsByClassName("tplay-timeload");if(elements.length>0){elements[0].parentNode.removeChild(elements[0]);}pudate_playlist_active(document.querySelector('a[data-lession="'+id+'"].lession'));}},1000);
	}

	function TPlayerPlayList(){
		if((TPlayer.dataPlaylist == true)){

			return(
				playlistSrc.map((item,index)=>{
					var isFree=((item.is_free)?item.is_free:false),
					//code=((item.share_code)?item.share_code:''),
					//is_paid=((isPurchased)?true:is_free),
					is_play=((isPurchased===true)?true:isFree),
					title=((item.title)?item.title:''),lession_class="lession ",
					unlock=((isFree&&!isPurchased)?`<div className="tmark"><span className="text" /><i className="unlock" /></div>`:`<div className="tmark"><i className="unlock" /></div>`),
					tmart=((!is_play)?`<div className="tmark"><i className="lock"></i></div>`:unlock);
					lession_class+=((!is_play)?'paid':'play');lession_class+=((isFree&&!isPurchased)?' free free-lession':'');

					return(

						<a key={index} className={lession_class} data-lession={index} data-play={is_play} onClick={play_video}>
							<i className="tadarab-icon play"></i><div className="ml10 lession-description"><span className="title">{title}</span></div><div dangerouslySetInnerHTML={{__html:tmart}}></div>
						</a>
						
					)
				})
			)

		}
	}

	return (
	<div style={{ display:"flex",flexDirection:"row",flexWrap:"wrap",width:"100%" }} className="tadarab-player">

		{/* TPlayer */}
		<VideoJS
			options={videoJsOptions}
			onReady={handlePlayerReady}
			onError={handleOnError}
		/>

		{/*TPlayer Playlist*/}
		{TPlayer.accessPlaylist ?
		<div className="vjs-playlist plist" width="50%">
			{TPlayerPlayList()}
		</div>
		:
		<></>
		}

	</div>
	)
};

export default TadarabVideoPlayer;
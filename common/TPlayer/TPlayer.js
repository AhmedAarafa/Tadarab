import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import videojs from "video.js";
import VideoJS from "./Video"; // point to where the functional component is stored
import "videojs-playlist";
import "videojs-seek-buttons/dist/videojs-seek-buttons";
import "videojs-seek-buttons/dist/videojs-seek-buttons.css";
import "videojs-playlist";
import "videojs-playlist-ui";
import { useDispatch, useSelector } from "react-redux";
import { Accordion } from "react-bootstrap";
import styles from "modules/Course details/Course content/course-content.module.css";
import { UnlockIcon,LessonPlayIcon,ClockIcon,LockIcon,AttachmentsIcon,FileDownloadIcon,CheckCircleIcon,ProgressBar } from "common/Icons/Icons";
import { setCourseDetailsData } from "configurations/redux/actions/courseDetailsData";
import Router from "next/router";
import { axiosInstance } from "configurations/axios/axiosConfig";
//import playlistSrc from "./playlist.json";
//import "@silvermine/videojs-quality-selector/dist/css/quality-selector.css";

require('@silvermine/videojs-quality-selector')(videojs);

/** dynamic server side variable **/
var playlistSrc 	= [];
const Button 		= videojs.getComponent("Button");
const ModalDialog	= videojs.getComponent("ModalDialog");

const userId		= false;	// if user is logged-in, true elase false
const wait_time		= 5;		// Wait for next video after end video.

var isPurchased	    = false;	// Is the course is purchased by the logged-in user 
var isUserLogin		= false;	// if user is logged-in, true elase false
var courseTitle		= ''; 			// the current course title
var courseId		= 0; 			// the current course id
var playbtn_on		= false;
var free_limit		= 1;		// free course limit after then signup popup
var seconds_counter = 0;
var tplayer;					// TADARAB PLAYER GLOBAL OBJECT
var overlayM,errorM,buynowM;	// player modal dilog 

/**
*	Start player playing
*/
function startPlaying(){
	const gradientLayer = document.getElementById("video-player-container");
	gradientLayer.classList.remove("course-advertisement_video-player-gradient__4ZVgD");
	playbtn_on=true;tplayer_video_progress('play');
}

/**
*	pause player playing
*/
function pausePlaying(){if(playbtn_on){tplayer.bigPlayButton.show();}tplayer_video_progress('pause');}

/** 
*	handle error
*/
function handleOnError() {const err=tplayer.error();if((err)&&(err.code===4)){tplayer.errorDisplay.hide();tplayer.bigPlayButton.hide();overlayM.current.close();buynowM.current.close();errorM.current.open();}}

/** 
*	play video
*/
function play_video(e){
	var playId=parseInt(e.currentTarget.getAttribute("data-lession"));
	window.scrollTo(0, 100);
	if((tplayer.playlist()[playId].is_free)&&(playId>free_limit)&&(isUserLogin!=true)){
		free_lession(playId);
	}else{
		if(is_playable_next(playId)){
			tplayer?.playlist?.currentItem(playId);tplayer_dialog('hide');tplayer.play();pudate_playlist_active(e.currentTarget);
		}else{
			tplayer_dialog('show');
		}
	}
}

/**
*	update playlist activitys
*/
function pudate_playlist_active(e){
	//var elems=Array.from(document.querySelectorAll('.active'));elems.forEach(node=>{node?.classList.remove('active');node?.classList.remove('play');});e.classList.add('active');e?.classList.add('play');
}

function tplayer_video_progress(type){
	var playbackInterval;
	if((playbackInterval)&&(typeof playbackInterval!==undefined)){clearInterval(playbackInterval);}
	if((type==='play')&&(tplayer?.playlist)){
		var id=tplayer?.playlist.currentItem(),
		//is_view=(tplayer.playlist()[id].sources[0].isView),
		//view_pr=(tplayer.playlist()[id].sources[0].viewPr),
		duration=tplayer?.duration(),current=tplayer?.currentTime(),
		perc=(current/duration*100).toFixed(2);
		
		if((Math.floor(perc)<=0)&&(tplayer?.playlist()[id].viewPr<1)){
			tplayer.playlist()[id].viewPr=1;
			tplayer_viewed(id,tplayer?.playlist()[id].title,tplayer?.playlist()[id].is_free,0,current);
			console.log("0% start reached");
		}
		playbackInterval=setInterval(function(){
			if((tplayer?.playlist?.currentItem())&&(tplayer?.currentTime())){
				id=tplayer?.playlist?.currentItem();
				current=tplayer?.currentTime();
				perc=(current/duration*100).toFixed(2);
				if((Math.floor(perc)>=25)&&(tplayer?.playlist()[id].viewPr<25)){
					tplayer.playlist()[id].viewPr=25;
					tplayer_viewed(id,tplayer.playlist()[id].title,tplayer.playlist()[id].is_free,25,current);
					console.log("25% reached");
				}
				if((Math.floor(perc)>=50)&&(tplayer?.playlist()[id].viewPr<50)){
					tplayer.playlist()[id].viewPr=50;
					tplayer_viewed(id,tplayer.playlist()[id].title,tplayer.playlist()[id].is_free,50,current);
					console.log("50% reached");
				}
				if((Math.floor(perc)>=75)&&(tplayer?.playlist()[id].viewPr<75)){
					tplayer.playlist()[id].viewPr=75;
					tplayer_viewed(id,tplayer.playlist()[id].title,tplayer.playlist()[id].is_free,75,current);
					console.log("75% reached");
				}
				if((Math.floor(perc)>=99)&&(tplayer?.playlist()[id].viewPr<99)){
					tplayer.playlist()[id].viewPr=100;clearInterval(playbackInterval);
					tplayer_viewed(id,tplayer.playlist()[id].title,tplayer.playlist()[id].is_free,100,current);
					console.log("100% reached");
				}

				if((Math.floor(perc))%2===0){
					if(isUserLogin==true){
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

						axiosInstance.post(`course/${courseId}/progress`, {
							"action": "web",
							"lecture_id":id,
							"title":tplayer.playlist()[id].title,
							"courseId":courseId,
							"percentage":(Math.floor(perc)),
							"seconds":(Math.floor(current)),
							"counter":seconds_counter,
						}).then((response) => {
							console.log(response);
							console.log("PLAYER Track: ",response);
						}).catch((error)=>{
							console.log("PLAYER Track ERROR: ",error);
						})


						//if(JSON.stringify(Router.query) == "{}"){
							/* axiosInstance
							.post(`course/${courseId}/progress`,{
								"action": "web",
								"lecture_id":id,
								"title":tplayer.playlist()[id].title,
								"courseId":courseId,
								"userId":userId,
								"percentage":(Math.floor(perc)),
								"seconds":(Math.floor(current)),
								"counter":seconds_counter,
							}).then(function (response) {
								console.log(response);
							}).catch((error)=>{
								console.log(error);
							}) */
						//}
					}
				}
			}
		},2000);
	}
	if(type==='pause'){
		clearInterval(playbackInterval);
	}
}

const handleSubscriptionBtn = () => {
    dispatch(setCheckoutType("subscription"));
    if(userStatus.isUserAuthenticated){
      Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}checkout/payment/?checkout_type=subscription`);
    }else{
      Router.push({
        pathname: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}sign-up`,
        query: { from_subscription: "checkout/payment/?checkout_type=subscription" }
      })
    }
  }
/**
*	Video GA tracking
*/
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

/**
*	tadarab player 5 second loader on player before next video
*/
function tplayer_videotimeloader(id){
	var timeleft=wait_time,play_btn=document.getElementsByClassName('vjs-big-play-button');
	play_btn[0].innerHTML=play_btn[0].innerHTML+`<div class='tplay-timeload activering'><div id='halfclip'><div class='halfcircle' id='clipped'></div></div><div class='halfcircle' id='fixed'></div></div>`;
	var loadtime=setInterval(function(){timeleft--;if(timeleft<=0){clearInterval(loadtime);var elements=document.getElementsByClassName("tplay-timeload");if(elements.length>0){elements[0].parentNode.removeChild(elements[0]);}pudate_playlist_active(document.querySelector('a[data-lession="'+id+'"].lession'));}},1000);
}

/* function tplayer_videotimeloader(id){
	var timeleft=wait_time,play_btn=document.getElementsByClassName('vjs-big-play-button');
	play_btn[0].innerHTML=play_btn[0].innerHTML+`<div class='tplay-timeload activering'><div id='halfclip'><div class='halfcircle' id='clipped'></div></div><div class='halfcircle' id='fixed'></div></div>`;
	var loadtime=setInterval(function(){
		timeleft--;
		if(timeleft<=0){
			clearInterval(loadtime);
			var elements=document.getElementsByClassName("tplay-timeload");
			if(elements.length>0){elements[0].parentNode.removeChild(elements[0]);}
			pudate_playlist_active(document.querySelector('a[data-lession="'+id+'"].lession'));
		}
	},1000);
} */

/**
*	check the play source is able to play or not
*/
function is_playable_next(id){
	var is_able=false;
	if(tplayer.playlist()[id]){
		var play_src=((tplayer.playlist()[id].sources[0]?.src)?tplayer.playlist()[id].sources[0].src:''),
		isFree=((tplayer.playlist()[id].is_free)?tplayer.playlist()[id].is_free:false),
		is_play=((isPurchased==true)?true:isFree);
		if((play_src!=='')&&(is_play)){is_able=true;}
	}
	return is_able;
}

/**
*	open tadarab dialog
*/
function tplayer_dialog(action){
	overlayM.current.close();errorM.current.close();
	if(action==='show'){buynowM.current.open();playbtn_on=true;tplayer.bigPlayButton.hide();}else if(action==='hide'){buynowM.current.close();playbtn_on=false;}
}

/**
*	Duration calcculation
*/ 
function duration_calculator(time) {      
	time=Number(time);
	let h=(Math.floor(time/3600)),m=(Math.floor(time%3600/60)),s=(Math.floor(time%3600%60));
	return {h,m,s};
}

/** Free lession limit alert **/
function free_lession(id){
	tplayer.bigPlayButton.hide();alert("Login first");
}

function TPlayer(){
	return (
		<div></div>
	)
}

export function TPlayerPlayList (){
	const [courseDetails, setCourseDetails] = useState([]);var playlistHTML,freelistHtml;
    const courseDetailsData = useSelector((state) => state.courseDetailsData);
	useEffect(() => {setCourseDetails(courseDetailsData.data || []);return ()=>{}}, []);
	isUserLogin = useSelector((state) => state.userAuthentication?.isUserAuthenticated);
	isPurchased=(courseDetailsData?.data?.course_details?.is_purchased);
	courseId=(courseDetailsData.data?.course_details?.id);
	courseTitle=(courseDetailsData.data?.course_details?.title);
	if(typeof(courseDetailsData.data)!=='undefined'){
		var livePlayList = courseDetailsData.data?.syllabus,promoLecture=courseDetailsData.data?.promo,allLectures=[],freeLectures=[];
		if(promoLecture){promoLecture=Object.values(promoLecture);freeLectures=freeLectures.concat(promoLecture);}
		if(livePlayList){
			livePlayList=Object.values(livePlayList);
			promoLecture = promoLecture.filter(function(item){return item;});
			livePlayList = livePlayList.filter(function(item){return item.lectures!== undefined;}).map(function({id,name,total_duration,lectures}){return {id,name,total_duration,lectures};});
			if(typeof(livePlayList)){
				let lec_index;
				/** Free */
				freelistHtml=freeLectures.map(function(freelec,findex){
					allLectures.push(freelec);
					if(lec_index>0){lec_index++;}else{lec_index=0;}
					return (
						<a key={lec_index} className='lession play free free-lession' data-lession={lec_index} data-play={true} onClick={play_video}>
							<div key={lec_index} className={styles["course-content__accordion__body__list-item"]}>
								<div className={styles["course-content__accordion__body__list-item__lesson-details-box"]}>
									<div className={styles["course-content__accordion__body__list-item__icon"]}><LessonPlayIcon color="#be1622" opacity="1"/></div>
									<div className={styles["course-content__accordion__body__list-item__lesson-name-duration"]}>
										<div>{freelec.title}</div> {/* Lecture Title */}
										{/* Lecture time duration */}
										<div>
											{duration_calculator(freelec.duration).h !==0 && (duration_calculator(freelec.duration).h.toString().length == 1 ? `0${duration_calculator(freelec.duration).h}:`:`${duration_calculator(freelec.duration).h}:`)}
											{duration_calculator(freelec.duration).m !==0 && (duration_calculator(freelec.duration).m.toString().length == 1 ? `0${duration_calculator(freelec.duration).m}:` :`${duration_calculator(freelec.duration).m}:`)}
											{duration_calculator(freelec.duration).s !==0 && (duration_calculator(freelec.duration).s.toString().length == 1 ?`0${duration_calculator(freelec.duration).s}` :`${duration_calculator(freelec.duration).s}`)}
										</div>
									</div>
								</div>
								
								{/* Lecture access lock & unlock icon */}
								<div className={styles["course-content__accordion__body__list-item__watch-free"]}>
									{freelec.is_free && JSON.parse(freelec.is_free) == true ?<><span> شاهد مجاناً </span><UnlockIcon color="#af151f"/></>:<LockIcon/>}
								</div>
							</div>
						</a>
					);
				})

				/*** Paid */
				playlistHTML=livePlayList.map(function(items,sindex){
					
					var sid=items.id,s_duration=items.total_duration,lectures=(items.lectures);lectures=Object.values(lectures);
					return (
						<Accordion key={sindex} defaultActiveKey="" className={styles["course-content__accordion"]}>
							<Accordion.Item eventKey={JSON.stringify(sindex)}  className={styles["course-content__accordion__item"]}>
								
								{/* SECTION */}
								<Accordion.Header className={styles["course-content__accordion__header"]}>
									<div className={styles["course-content__accordion__header__details-box"]}>
										<div className={styles["course-content__accordion__header__group-number"]}>{items.name}</div> {/* Section Title */}
										<div className={styles["course-content__accordion__header__details"]}>
											<span className={styles["course-content__accordion__header__details__lessons-number"]}>
												<span> {items.lectures.length} </span><span> دروس </span> {/* Section Length */}
											</span>
											<span className={styles["course-content__accordion__header__details__duration"]}>
												(
													{/* Section time duration */}
													<span> {duration_calculator(s_duration).h !== 0 && duration_calculator(s_duration).h} </span>{duration_calculator(s_duration).h !== 0 && " س : "}
													<span> {duration_calculator(s_duration).m !== 0 && duration_calculator(s_duration).m} </span>{duration_calculator(s_duration).m !== 0 && " د "}
												)
											</span>
										</div>
									</div>
								</Accordion.Header>

								{/* LECTURE */}
								<Accordion.Body className={styles["course-content__accordion__body"]}>
									{
										lectures.map((lec, lindex)=>{
											var lid=lec.id,isFree=((lec.is_free)?lec.is_free:false),is_play=((isPurchased==true)?true:isFree),title=((lec.title)?lec.title:''),lession_class="lession ";
											lession_class+=((!is_play)?'paid':'play');lession_class+=((isFree&&!isPurchased)?' free free-lession':'');
											//if(lec.is_free){freeLectures.push(lec);}
											allLectures.push(lec);if(lec_index>0){lec_index++;}else{lec_index=0;}
											return (
												<a key={lec_index} className={lession_class} data-lession={lec_index} data-play={is_play} onClick={play_video}>
													<div key={lec_index} className={styles["course-content__accordion__body__list-item"]}>
														<div className={styles["course-content__accordion__body__list-item__lesson-details-box"]}>
															<div className={styles["course-content__accordion__body__list-item__icon"]}><LessonPlayIcon color="#be1622" opacity="1"/></div>
															<div className={styles["course-content__accordion__body__list-item__lesson-name-duration"]}>
																<div>{lec.title}</div> {/* Lecture Title */}
																{/* Lecture time duration */}
																<div>
																	{duration_calculator(lec.duration).h !==0 && (duration_calculator(lec.duration).h.toString().length == 1 ? `0${duration_calculator(lec.duration).h}:`:`${duration_calculator(lec.duration).h}:`)}
																	{duration_calculator(lec.duration).m !==0 && (duration_calculator(lec.duration).m.toString().length == 1 ? `0${duration_calculator(lec.duration).m}:` :`${duration_calculator(lec.duration).m}:`)}
																	{duration_calculator(lec.duration).s !==0 && (duration_calculator(lec.duration).s.toString().length == 1 ?`0${duration_calculator(lec.duration).s}` :`${duration_calculator(lec.duration).s}`)}
																</div>
															</div>
														</div>
														
														{/* Lecture access lock & unlock icon */}
														<div className={styles["course-content__accordion__body__list-item__watch-free"]}>
															{lec.is_free && JSON.parse(lec.is_free) == true ?<><span> شاهد مجاناً </span><UnlockIcon color="#af151f"/></>:<LockIcon/>}
														</div>
													</div>
												</a>
											)
										})
									}
								</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					)
				});

				playlistHTML=freelistHtml.concat(playlistHTML);playlistSrc=allLectures;
				return (
					<>{playlistHTML}</>
				)
			}
		}
	}
	return (
        <div></div>
    )
};

export function TPlayerPaidPlayList (){
	const [courseDetails, setCourseDetails] = useState([]);var playlistHTML,freelistHtml;
    const courseDetailsData = useSelector((state) => state.courseDetailsData);
	
	useEffect(() => {setCourseDetails(courseDetailsData.data || []);return ()=>{}}, []);
	isUserLogin = useSelector((state) => state.userAuthentication?.isUserAuthenticated);
	isPurchased=(courseDetailsData?.data?.course_details?.is_purchased);
	courseId=(courseDetailsData.data?.course_details?.id);
	courseTitle=(courseDetailsData.data?.course_details?.title);

	if(typeof(courseDetailsData.data)!=='undefined'){
		var livePlayList = courseDetailsData.data?.syllabus,promoLecture=courseDetailsData.data?.promo,allLectures=[],freeLectures=[];
		if(promoLecture){promoLecture=Object.values(promoLecture);freeLectures=freeLectures.concat(promoLecture);}
		if(livePlayList){
			livePlayList=Object.values(livePlayList);
			promoLecture = promoLecture.filter(function(item){return item;});
			livePlayList = livePlayList.filter(function(item){return item.lectures!== undefined;}).map(function({id,name,total_duration,lectures}){return {id,name,total_duration,lectures};});
			if(typeof(livePlayList)){
				let lec_index;
				/*** Paid */
				playlistHTML=livePlayList.map(function(items,sindex){
					var sid=items.id,s_duration=items.total_duration,lectures=(items.lectures);lectures=Object.values(lectures);
					return (
						<Accordion key={sindex} defaultActiveKey="" className={styles["course-content__accordion"]}>
							<Accordion.Item eventKey={JSON.stringify(sindex)}  className={styles["course-content__accordion__item"]}>
								
								{/* SECTION */}
								<Accordion.Header className={styles["purchased-course-content__accordion__header"]}>
                                    <div className={styles["course-content__accordion__header__details-box"]}>
                                        <div className={styles["purchased-course-content__accordion__header__group-number"]}>
                                        {items.name}
                                        <span>({lectures.length})</span>
                                        </div>
                                    </div>
                                </Accordion.Header>

								{/* LECTURE */}
								<Accordion.Body className={styles["purchased-course-content__accordion__body"]}>
									{
										lectures.map((lec, lindex)=>{
											var lid=lec.id,isFree=((lec.is_free)?lec.is_free:false),is_play=((isPurchased==true)?true:isFree),title=((lec.title)?lec.title:''),lession_class="lession ";
											lession_class+=((!is_play)?'paid':'play');/* lession_class+=((isFree&&!isPurchased)?' free free-lession':''); */
											//if(lec.is_free){freeLectures.push(lec);}
											allLectures.push(lec);if(lec_index>=0){lec_index++;}else{lec_index=0;}
											return (
												<a key={lec_index} className={lession_class} data-lession={lec_index} data-play={is_play} onClick={play_video}>
                                                   <div key={lec_index} className={styles["purchased-course-content__accordion__body__list-item"]}>
                                                        <div className={styles["course-content__accordion__body__list-item__lesson-details-box"]}>
                                                           <div className={styles["purchased-course-content__accordion__body__list-item__icon"]}>
                                                            <CheckCircleIcon color="#9E9DA4" />
                                                        </div>
                                                        <div className={styles["purchased-course-content__accordion__body__list-item__lesson-name"]}>
                                                            <div>{lec.title}</div>
                                                        </div>
                                                    </div>

                                                    <div className={styles["purchased-course-content__accordion__body__list-item__duration"]}>
													        {duration_calculator(lec.duration).h !==0 && (duration_calculator(lec.duration).h.toString().length == 1 ? `0${duration_calculator(lec.duration).h}:`:`${duration_calculator(lec.duration).h}:`)}
															{duration_calculator(lec.duration).m !==0 && (duration_calculator(lec.duration).m.toString().length == 1 ? `0${duration_calculator(lec.duration).m}:` :`${duration_calculator(lec.duration).m}:`)}
															{duration_calculator(lec.duration).s !==0 && (duration_calculator(lec.duration).s.toString().length == 1 ?`0${duration_calculator(lec.duration).s}` :`${duration_calculator(lec.duration).s}`)}
                                                    </div>
													</div>
												</a>
											)
										})
									}
								</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					)
				});

				//playlistHTML=freelistHtml.concat(playlistHTML);
				playlistSrc=allLectures;
				console.log("playlistSrc ",playlistSrc);
				return (
					<>{playlistHTML}</>
				)
			}
		}
	}
	return (
        <div />
    )
};

export function TadarabVideoPlayer (theDefaultOption){
	//if(!theDefaultOption.Source){
		const dispatch = useDispatch();
		const ioverlayM=React.useRef(null);const ierrorM=React.useRef(null);const ibuynowM=React.useRef(null);
		useEffect(() => {return ()=>{/* dispatch(setCourseDetailsData([])); */playlistSrc=[];}}, []);
		isUserLogin = useSelector((state) => state.userAuthentication?.isUserAuthenticated);
	//}
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
		muted:false,
	};

	if(theDefaultOption.Source){videoJsOptions.sources=theDefaultOption.Source;}
	if(theDefaultOption.Poster){videoJsOptions.poster=theDefaultOption.Poster;}

	const handlePlayerReady = (player) => {
		if(!theDefaultOption.Sources){
			if(playlistSrc.length===0){return}
			player.playlist(playlistSrc);
			player.playlist.autoadvance(wait_time);
		}
		player.bigPlayButton.show();
		player.autoplay(false);
		tplayer=player;
		overlayM=ioverlayM;errorM=ierrorM;buynowM=ibuynowM;
		tplayer.seekButtons({forward:8,forwardIndex:3});

		// Modal variables
		var overlay ={
			label:'Click to play',
			head:('<h1>'+courseTitle+'</h1>'),
			body:'<p><button class="vjs-big-play-button tplayer-overlay-btn" type="button" title="Play Video" aria-disabled="false"><span aria-hidden="true" class="vjs-icon-placeholder"></span><span class="vjs-control-text" aria-live="polite">Play Video</span></button></p>',
		};
		var buynow={
			label:'Tadarab Popup',
			head:'<h1>واصل مشاهدة الدورة كاملة</h1>',
			buybtn:{
				text:'',
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
				var nid=(tplayer?.playlist?.currentItem()+1);
				if((tplayer.playlist()[nid])&&(tplayer.playlist()[nid].is_free)&&(nid>free_limit)&&(isUserLogin!=true)){free_lession(nid);}else{if(is_playable_next(nid)){pudate_playlist_active(document.querySelector('a[data-lession="'+nid+'"].lession'));tplayer_dialog('hide');tplayer.playlist.next();}else{tplayer_dialog('show');return false;}}
			}
		});

		/* PREVIOUS Event */
		const PrevButton = videojs.extend(Button, {
			constructor: function(){Button.apply(this,arguments);this.addClass("vjs-icon-previous-item");this.addClass("hide");},
			handleClick: function(props){
				var nid=(tplayer?.playlist?.currentItem()-1);
				if((tplayer.playlist()[nid])&&(tplayer.playlist()[nid].is_free)&&(nid>free_limit)&&(isUserLogin!=true)){free_lession(nid); }else{if(is_playable_next(nid)){pudate_playlist_active(document.querySelector('a[data-lession="'+nid+'"].lession'));tplayer_dialog('hide');tplayer.playlist.previous();}else{tplayer_dialog('show');return false;}}
			}
		});

		//videojs.registerComponent("PrevButton",PrevButton);
		videojs.registerComponent("NextButton",NextButton);

		//tplayer.getChild("controlBar").addChild("PrevButton",{},0);
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
					//player.bigPlayButton.show();
					if(tplayer.paused()){
						tplayer.play();
					}else{
						tplayer.pause();
					}
				}
			}
		});
		tplayer.on('ended',function(e){
			var nid=(tplayer?.playlist?.currentItem()+1);
			if((tplayer.playlist()[nid])&&(tplayer.playlist()[nid].is_free)&&(nid>free_limit)&&(isUserLogin!=true)){free_lession(nid);playbtn_on=true;}else{if(is_playable_next(nid)){tplayer_videotimeloader(nid);}else{tplayer.playlist.autoadvance(0);tplayer_dialog('show')}}
		});
		overlayM.current=overlay_modal(overlay,ModalDialog);
		buynowM.current=buynow_popup(buynow,ModalDialog);
		errorM.current=player_error(error,ModalDialog);
	};

	/** Overlay modal **/
	const overlay_modal = function(options,modal){
		var head='<div class="modal-header">'+options.head+'</div>',
		body='<div class="modal-body">'+options.body+'</div>',
		foot='<div class="modal-footer"></div>',
		overlay_html=body+head+foot,overlayEl=document.createElement('div');
		overlayEl.innerHTML=overlay_html;
		overlayEl.className='tplayer-dialog-el';
		var overlay_option={label:options.label,content:overlayEl,temporary:false},
		overlayM=new modal(tplayer,overlay_option);
		overlayM.addClass('tplayer-dialog');if(options.close===true){overlayM.addClass('is_close_show');}overlayM.addClass('tplayer-overlay');tplayer.addChild(overlayM);overlayM.open();
		overlayM.on("click",function(e){overlayM.close();tplayer.play();});return overlayM;
	}

	/** Buy now popup **/
	const buynow_popup = function(options,modal){
		//var buybtn=((options.buybtn)?('<a class="tadarab-btn '+options.buybtn.class+'" '+options.buybtn.attr+'>'+options.buybtn.text+'</a>'):''),
		var buybtn=((options.buybtn)?('<button type="button" id="monthly-subscribe-btn" class="monthly-subscription-card_monthly-subscription__subscribe-btn-box__btn__yzr2X btn btn-primary" style="width:80%"><span class="monthly-subscription-card_monthly-subscription__subscribe-btn-box__btn__monthly-subscribe__rRgIg" onclick="handleSubscriptionBtn()">جرب تدرب بلا حدود مجاناَ</span></button>'):''),
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

	return (
		<div style={{ display:"flex",flexDirection:"row",flexWrap:"wrap",width:"100%" }} className="tadarab-player">
			{/* TPlayer */}
			{ ((theDefaultOption.Source)||(playlistSrc.length>0))? 
			/* ((playlistSrc.length>0))?*/
			<>
			<VideoJS
				options={videoJsOptions}
				onReady={handlePlayerReady}
				onError={handleOnError}
			/>
			</>
			:
			<></>
			}
		</div>
	)
}

export default TPlayer;
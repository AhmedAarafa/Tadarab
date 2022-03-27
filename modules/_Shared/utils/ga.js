export default class TadarabGA {
    constructor() {}
/** get google traking client id **/
/**
*	@type:			Google Analytics Tracking function
*	@discription: 	get Google Analytics CID (client id)
*	@param: 		void
*	@return: 		void
*	@since: 		3.0 (tadarab version) 25-September-2018
*	@modify: 		25-Nov-2021
*	@author: 		Sanket Sorathiya
*	@modify by: 	Sanket Sorathiya
*/
tadarab_get_traking_client(){try{return ga.getAll()[0].get('clientId');}catch(e){return '';}}
tadarab_get_traking_location(){try{return ga.getAll()[0].get('location');}catch(e){return '';}}

/**
*	@type: 			Google Analytics Tracking function
*	@discription: 	here Google Analytics tracking all events (funnel, optin, signup, coupon, addtocart, purchase, remarketing, invitation, product impression, payment etc...)
*	@param: 		string $tracking_type is argument of tracking type for event.
					array tracking_data is needed information for push GA event.
*	@return: 		void
*	@since: 		3.0 (tadarab version) 25-September-2018
*	@modify: 		25-Nov-2021
*	@author: 		Sanket Sorathiya
*	@modify by: 	Sanket Sorathiya
*/
tadarab_fire_traking_GA_code(traking_type,traking_data){
	var event_action;
	//var dataLayer=[];

	if(traking_type=='signup'){
		/** Normal signup **/
		dataLayer.push({
			'userId':traking_data.traking_uid,  /*** USDER ID ***/
			'event':'GTMevent',
			'eventCategory':'signup',
			'eventAction':'submit',
			'eventLabel':'',
			'user_email':traking_data.traking_email
		});

	}else if(traking_type=='course_signup'){ /** Course signup **/
		dataLayer.push({
			'userId':traking_data.traking_uid,	/*** USDER ID ***/
			'event':'GTMevent',
			'eventCategory':'signup',
			'eventAction':'submit',
			'eventLabel':'',
			'user_email':traking_data.traking_email,
			'google_tag_params':{
				'edu_pid':traking_data.product_id,
				'edu_pagetype':'lead'
			}
		});
	}else if(traking_type=='remarketing'){ /** Remarketing **/
		dataLayer.push({'event':'fireRemarketingTag','google_tag_params':{'edu_pid':traking_data.product_id,'edu_pagetype':traking_data.pagetype}});
	}else if(traking_type=='coupon_popup_viewed'){ /** Coupon popup view **/
		dataLayer=dataLayer||[];dataLayer.push({'event':'GTMevent','eventCategory':'coupon','eventAction':'pop-up-viewed','eventLabel':traking_data.coupon_name});
	}else if(traking_type=='coupon_activation'){ /** Coupon activate **/
		dataLayer=dataLayer||[];dataLayer.push({'event':'GTMevent','eventCategory':'coupon','eventAction':'activation','eventLabel':traking_data.coupon_name});
	}else if(traking_type=='link_click'){ /** Topbar link click **/
		dataLayer=dataLayer||[];dataLayer.push({'event':'GTMevent','eventCategory':'live-course-banner','eventAction':'link-click','eventLabel':traking_data.url});
	}else if(traking_type=='addtocart'){ /** Product added in to cart **/
		var page_action=((traking_data.page_name=='single')?'individual-course-page':((traking_data.page_name=='popup')?'popup-course-suggestions':traking_data.page_name));event_action=((page_action!='')?'add-to-cart|'+page_action:'add-to-cart');
		dataLayer=dataLayer||[];
		dataLayer.push({'event':'GTMecommerce','eventCategory':'enhanced-ecommerce','eventAction':event_action,'eventLabel':traking_data.course_id,'ecommerce':{'currencyCode':'USD','add':{'products':traking_data.products}}});
	}else if(traking_type=='invite_friend'){ /** Invite friend from user account **/
		dataLayer=dataLayer||[];dataLayer.push({'event':'GTMevent','eventCategory':'promo-form','eventAction':'form-submission','eventLabel':'invite-friend'});
	}else if(traking_type=='purchase'){ /** Product purchase sucess from account page **/
		dataLayer.push({
			'ecommerce':{
				'purchase':{
					'actionField':{
						'id':traking_data.id,
						'revenue':traking_data.revenue,
						'coupon':traking_data.coupon
					},
					'products':traking_data.products
				}
			},
			'event':'purchase',
			'userId':traking_data.uid,	/*** USDER ID ***/
			'CID':traking_data.cid,
			'user_email':traking_data.email,
			'google_tag_params':{
				'edu_pid':traking_data.course_id,
				'edu_pagetype':'complete'
			}
		});
	}else if(traking_type=='product_impressions'){ /** Product scroll and view from list page **/
		dataLayer=dataLayer||[];
		dataLayer.push({'event':'GTMecommerce','eventCategory':'enhanced-ecommerce','eventAction':'product-impressions','eventLabel':'','ecommerce':{'currencyCode':'USD','impressions':traking_data}});
	}else if(traking_type=='product_click'){ /** Product click from list page **/
		dataLayer=dataLayer||[];
		dataLayer.push({'event':'GTMecommerce','eventCategory':'enhanced-ecommerce','eventAction':'product-click','eventLabel':'','ecommerce':{'currencyCode':'USD','click':{'actionField':{'list':traking_data.list},'products':traking_data.products}}});
	}else if(traking_type=='product_details_views'){ /** Product view in single page **/
		dataLayer.push({'event':'GTMecommerce','eventCategory':'enhanced-ecommerce','eventAction':'product-details-views','eventLabel':'','ecommerce':{'detail':{
			'actionField':{'list':traking_data.list},'products':traking_data.products
		}}});
	}else if(traking_type=='remove_from_cart'){ /** Remove from cart **/
		dataLayer.push({'event':'GTMecommerce','eventCategory':'enhanced-ecommerce','eventAction':'remove-from-cart','eventLabel':'','ecommerce':{'remove':{'products':traking_data}}});
	}else if(traking_type=='view_cart'){ /** View cart **/
		dataLayer.push({'event':'GTMevent','eventCategory':'enhanced-ecommerce','eventAction':'view-cart','eventLabel':''});
	}else if(traking_type=='checkout_steps'){ /** Checkout step 1 and 2 **/
		dataLayer=dataLayer||[];dataLayer.push({'event':'GTMecommerce','eventCategory':'enhanced-ecommerce','eventAction':'checkout','eventLabel':traking_data.label,'ecommerce':{'currencyCode':'USD','checkout':{'actionField':{'step':traking_data.step},
			'products':traking_data.products
		}}});
	}else if(traking_type=='checkout_option'){ /** Checkout option **/
		dataLayer=dataLayer||[];dataLayer.push({event:'GTMecommerce','eventCategory':'enhanced-ecommerce','eventAction':'checkout-option','eventLabel':traking_data.label,ecommerce:{checkout_option:{actionField:{step:2,option:traking_data.option}}}});
	}else if(traking_type=='payment_fail'){ /** Checkout option **/
		dataLayer=dataLayer||[];dataLayer.push({'event':'GTMevent','eventCategory':'transaction-fail','eventAction':traking_data.type,'eventLabel':traking_data.reason});
	}else if(traking_type=='opt_in'){ /** Opt-in funnel option **/
		dataLayer=dataLayer||[];
		dataLayer.push({
			'event':'GTMevent',
			'eventCategory':traking_data.category,
			'eventAction':traking_data.action,
			'eventLabel':traking_data.label,
			'userId':traking_data.user_id,	/*** USDER ID ***/
		});
	}else if(traking_type=='sales_funnel'){ /** Sales funnel option **/
		dataLayer=dataLayer||[];
		dataLayer.push({
			'event':'GTMevent',
			'eventCategory':traking_data.category,
			'eventAction':traking_data.action,
			'eventLabel':traking_data.label,
		});
	}else if(traking_type=='got'){ /** Google optimize tracking option **/
		dataLayer.push({'event':'ServerExperiment','expId':traking_data.id,'expVar':traking_data.var});
	}else if(traking_type=='video_tracking'){ /** dataLayer for video tracking (free + paid) **/
		dataLayer=dataLayer||[];
		dataLayer.push({
			'event': 'GTMevent',
			'eventCategory':(traking_data.type+'-video'),
			'eventAction':traking_data.action, //'start',
			'eventLabel':(traking_data.course_name+'|'+traking_data.video_name) //'<course name>|<video name>'
		});
	}
}

/**
*	@type: 			Google Analytics Tracking function
*	@discription: 	scroll visible element passes the visibility position number of height
*	@param: 		object $elm is element of check visible
					string $type is name of element id/class
					string $val is name visible type
					number $offset is set offset for scroll visible height
*	@return: 		number position of element height
*	@since: 		3.0 (tadarab version) 25-September-2018
*	@modify: 		25-Nov-2021
*	@author: 		Sanket Sorathiya
*	@modify by: 	Sanket Sorathiya
*/
tadarab_scroll_visible_item(elm,type,val,offset){
	val=val||"object visible";offset=((offset)?offset:0); var viewportheight=(jQuery(type).height()+offset),scrolltop=(jQuery(type).scrollTop()-offset),y=(jQuery(elm).offset().top+offset),elementheight=jQuery(elm).height();
	if(val=="object visible"){return ((y<(viewportheight+scrolltop))&&(y>(scrolltop-elementheight)));}
	if(val=="above"){return ((y<(viewportheight+scrolltop)));}
}

}

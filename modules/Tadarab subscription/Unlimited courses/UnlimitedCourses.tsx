/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import styles from "./unlimited-courses.module.css";
import { Row,Col,Form,Button } from "react-bootstrap";
import { SearchIcon, ChevronLeftIcon } from "common/Icons/Icons";
import Router, { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";   
import { setCheckoutType } from "configurations/redux/actions/checkoutType";
import Image from 'next/image';

export default function UnlimitedCourses() {
  
  
  const dispatch = useDispatch();
  const Router = useRouter();
  const userStatus = useSelector((state:any) => state.userAuthentication.isUserAuthenticated);
  const [subscriptionTimer, setSubscriptionTimer] = useState(0);
  const [toDisplayValues, setToDisplayValues] = useState<any>({values:[] , visible:false});
  
  useEffect(() => {

    // setSubscriptionTimer
    document.cookie.split('; ').reduce((prev: any, current: any) => {
      const [name, ...value] = current.split('=');
     if(prev){
                prev[name] = value.join('=');
                if((prev.timer < (Math.floor(Date.now() / 1000))) || prev.timer == "NaN"){
          
                }else{
          
                  setSubscriptionTimer(  prev['subscription-countdown'] - ((Math.floor(Date.now() / 1000)))  );
                  return prev;
                }
            }
      
  }, {});
    
    
  }, [])

  useEffect(() => {
    if(subscriptionTimer !== 0){
      document.cookie.split('; ').reduce((prev: any, current: any) => {
        const [name, ...value] = current.split('=');
       if(prev){
                prev[name] = value.join('=');
                setSubscriptionTimer(  prev['subscription-countdown'] - ((Math.floor(Date.now() / 1000)))  );
                if(Math.sign( prev['subscription-countdown'] - ((Math.floor(Date.now() / 1000))) ) !== -1){
        
                  let interval =  setInterval(() => {
            
                        // get total seconds between the times
                        let delta: any = Math.sign( prev['subscription-countdown'] - ((Math.floor(Date.now() / 1000))) ) !== -1  ? 
                        Math.abs( prev['subscription-countdown'] - ((Math.floor(Date.now() / 1000))) )
                        :
                        clearInterval(interval);
                        ;
                  
                        // calculate (and subtract) whole days
                        let days: any = Math.floor(delta / 86400);
                        delta -= days * 86400;
                  
                        // calculate (and subtract) whole hours
                        let hours: any = Math.floor(delta / 3600) % 24;
                        delta -= hours * 3600;
                  
                        // calculate (and subtract) whole minutes
                        let minutes: any = Math.floor(delta / 60) % 60;
                        delta -= minutes * 60;
                  
                        // what's left is seconds
                        let seconds: any = delta; // in theory the modulus is not required
                  
                        // days > 0 ? (days < 10 ? days = "0" + days : days = days ) : days = "00";
                        // hours > 0 ? (hours < 10 ? hours = "0" + hours : hours = hours ) : hours = "00";
                        // minutes > 0 ? (minutes < 10 ? minutes = "0" + minutes : minutes = minutes ) : minutes = "00";
                        // seconds > 0 ? (seconds < 10 ? seconds = "0" + seconds : seconds = seconds ) : seconds = "00";
                  
                        days = days.toString().padStart(2, 0);
                        hours = hours.toString().padStart(2, 0);
                        minutes = minutes.toString().padStart(2, 0);
                        seconds = seconds.toString().padStart(2, 0);
              
                        if( days == '00' && hours == '00' && minutes == '00' && seconds == '00' ){
                          setToDisplayValues({values:[days, hours, minutes, seconds],visible:false});
                          clearInterval(interval);
                          
                        }else{
              
                          setToDisplayValues({values:[days, hours, minutes, seconds],visible:true});
                          return { days, hours, minutes, seconds }
                        }
            
                  
            
                  }, 1000);
        
                }
            }
        
        return prev;
    }, {});

    }
  
  }, [subscriptionTimer])

  const handleSubscriptionBtn = () => {
    dispatch(setCheckoutType("subscription"));
    if(userStatus){
      Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}subscription-plans`);
    }else{
      Router.push({
        pathname: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}sign-up`,
        query: { from_subscription: "checkout/payment/?checkout_type=subscription" }
      })
    }
  }

  return (
      <Row className={styles["unlimited-courses"]}>
          <Col xs={12}>
              <div className={styles["unlimited-courses__logo"]}>
                <img loading="lazy"   src={"/images/TadarabUnlimited.png"} alt="TadarabUnlimited" />
              </div>

              <div className={styles["unlimited-courses__title"]}>
                  <div>
              تعلم كل يوم مهارة جديدة في جميع المجالات باشتراك شهري واحد.
  
                  </div>
              </div> 
              <Button onClick={()=>{handleSubscriptionBtn()}} className={styles["unlimited-courses__subscribe-btn"]}  id="monthly-subscribe-btn" >
              <span className={styles["monthly-subscription__subscribe-btn-box__btn__monthly-subscribe"]}>
              ابدأ التعلم الآن
              </span>  
          

              </Button>
          </Col>
      </Row>
  )
}

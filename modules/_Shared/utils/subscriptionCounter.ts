import { axiosInstance } from "configurations/axios/axiosConfig";
import Router from "next/router";

export function subscriptionCounter() {
    if (document.cookie.indexOf('subscription-countdown') > -1) { 
    }else{
        let now = new Date();
        let time = now.getTime();
        time += 6 * 3600 * 1000;
        now.setTime(time);
        document.cookie =
        'subscription-countdown=' + ((Math.floor(Date.now() / 1000)) + (6 * 60 * 60)) +
        '; expires=' + 'Fri, 31 Dec 9999 23:59:59 GMT' +
        '; path=/';
        
        /* '; expires=' + (new Date(now)).toUTCString() +  */
    }
}
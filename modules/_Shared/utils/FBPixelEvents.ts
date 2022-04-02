import TadarabFBPixel from "modules/_Shared/utils/fbPixel";


export const FBPixelEventsHandler = (trackingEvents:any,customData:any):any =>{
    
    let tadarabFbPixel = new TadarabFBPixel();
<<<<<<< HEAD
    console.log("trackingEvents",trackingEvents);
    
    trackingEvents?.forEach((ev: any) => {
=======

    trackingEvents.forEach((ev: any) => {
>>>>>>> 1c8caf03f857f5d7a3351b36251988f381869fac
      tadarabFbPixel.setEventId(ev.event_id);
      tadarabFbPixel.eventHandler(ev.event_name, customData);
    });
    
}

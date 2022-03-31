import TadarabFBPixel from "modules/_Shared/utils/fbPixel";


export const FBPixelEventsHandler = (trackingEvents:any,customData:any):any =>{
    
    let tadarabFbPixel = new TadarabFBPixel();
<<<<<<< HEAD
    console.log("trackingEvents",trackingEvents);
    
    trackingEvents?.forEach((ev: any) => {
=======
    trackingEvents.forEach((ev: any) => {
>>>>>>> 45a9251f6a252fedf313679ad8dac7f2ee404309
      tadarabFbPixel.setEventId(ev.event_id);
      tadarabFbPixel.eventHandler(ev.event_name, customData);
    });
    
}

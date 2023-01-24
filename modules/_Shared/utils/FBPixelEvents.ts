import TadarabFBPixel from "modules/_Shared/utils/fbPixel";


export const FBPixelEventsHandler = (trackingEvents:any,customData:any):any =>{
    
    let tadarabFbPixel = new TadarabFBPixel();
    // console.log("trackingEvents",trackingEvents);
    // console.log("customData",customData);
    
    trackingEvents?.forEach((ev: any) => {
      // console.log("ev",ev);
      tadarabFbPixel.setEventId(ev && ev.event_id && ev.event_id);
      tadarabFbPixel.eventHandler(ev && ev.event_name && ev.event_name, customData);
    });
    
}

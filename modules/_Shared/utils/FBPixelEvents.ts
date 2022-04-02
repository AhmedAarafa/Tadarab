import TadarabFBPixel from "modules/_Shared/utils/fbPixel";


export const FBPixelEventsHandler = (trackingEvents:any,customData:any):any =>{
    
    let tadarabFbPixel = new TadarabFBPixel();
    console.log("trackingEvents",trackingEvents);
    
    trackingEvents?.forEach((ev: any) => {
      tadarabFbPixel.setEventId(ev.event_id);
      tadarabFbPixel.eventHandler(ev.event_name, customData);
    });
    
}

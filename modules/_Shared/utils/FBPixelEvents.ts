import TadarabFBPixel from "modules/_Shared/utils/fbPixel";


export const FBPixelEventsHandler = (trackingEvents:any,customData:any):any =>{
    
    let tadarabFbPixel = new TadarabFBPixel();
    trackingEvents.forEach((ev: any) => {
      trackingEvents.setEventId(ev.event_id);
      tadarabFbPixel.eventHandler(ev.event_name, customData);
    });
    
}

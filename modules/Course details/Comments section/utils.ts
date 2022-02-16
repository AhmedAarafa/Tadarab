export const commentsBorderHandler = ()=>{
    // to get all comments and related replies if exists
    const replies:any = document.querySelectorAll(`[id^="comment-box__replies"]`);
    const allComments:any = document.querySelectorAll(`[id^="comment-container"]`);
    // to loop through comments and check if comment has replies in order to apply (border-bottom) to it
    allComments.forEach((element:any) => {
        replies.forEach((elem:any) => {
            if (elem.parentNode == element) {
                // console.log(element.id);
              const relatedReply:any= document.querySelector(`#${element.id}  div[id^="comment-box"]  div#details`) ;
            //   console.log('relatedReply',relatedReply);
              
              relatedReply.style.cssText=`
              border-bottom: 0.05rem solid rgba(34, 34, 34, 0.1);
              `
             }
        });
    });
}
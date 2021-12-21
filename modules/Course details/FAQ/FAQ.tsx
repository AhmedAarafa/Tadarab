import React , {useEffect, useState} from "react";
import styles from "./faq.module.css";
import { Accordion } from "react-bootstrap";
import './utils';

export default function FAQ() {
  // const [arrowsController, setArrowsDirection] = useState<any>({
  //   "arrow-accordion-header1":true,
  //   "arrow-accordion-header2":false,
  //   "arrow-accordion-header3":false,
  // });

  useEffect(() => {
    // const accordionHeaders = document.querySelectorAll('[id^="accordion-header"]');
    // // console.log(arrowsController);

    // accordionHeaders.forEach((element:any)=>{
    //   const id:any = element.id;
    //   const arrow:any = document.getElementById(`arrow-${id}`);
    //   // console.log(element);
      
    //   // console.log("id",id);
    //   if(arrowsController[`${arrow.id}`] == true){
    //     arrow ? arrow.style.transform ="none" : null ;
    //   }else{
    //     arrow ? arrow.style.transform ="rotate(90deg)" : null ;
    //   }
      
    //   element.addEventListener('click', ()=>{
    //     // console.log("arrow", arrow);
    //     if(arrow){
    //       let newArrowsController:any = arrowsController;
    //       Object.keys(newArrowsController).forEach((k)=>{
    //         newArrowsController[k] = false;
    //       });
    //       console.log('ss',newArrowsController);
    //       let newArrowController:any = newArrowsController[`${arrow.id}`];
    //       newArrowController = !newArrowController;
    //       newArrowsController[`${arrow.id}`] = newArrowController;

    //       console.log("arrowsController",newArrowsController);
    //       setArrowsDirection(newArrowsController);

    //     }
    //     if(arrowsController[`${arrow.id}`] == true){
    //       arrow ? arrow.style.transform ="none" : null ;
    //     }else{
    //       arrow ? arrow.style.transform ="rotate(90deg)" : null ;
    //     }
    //   })
    // })
  }, [])
  return (
    <>
      <div className={styles["faq"]}>
        <div className={styles["faq__title"]}>الأسئلة الشائعة عن الدورة</div>
        <Accordion defaultActiveKey="0" className={styles["faq__accordion"]}>
          <Accordion.Item
            eventKey="0"
            className={styles["faq__accordion__item"]}
          >
            <Accordion.Header id="accordion-header1" className={styles["faq__accordion__header"]}>
            {/* <svg id="arrow-accordion-header1" xmlns="http://www.w3.org/2000/svg" width="1rem" height="1.25rem" viewBox="0 0 20 11.985">
              <g id="arrow2" transform="translate(0 11.985) rotate(-90)">
                <path id="Path_12841" data-name="Path 12841" d="M11.736,8.58a1.923,1.923,0,0,1,.327-.261L19.816.567a1.937,1.937,0,0,1,2.74,2.74L15.879,9.983l6.71,6.711a1.937,1.937,0,1,1-2.739,2.739l-7.787-7.786a2.01,2.01,0,0,1-.327-3.068Z" transform="translate(-11.171 -0.001)" fill="#ccc"/>
              </g>
          </svg> */}

              هل الدورة للمبتدئين فقط؟
            </Accordion.Header>
            <Accordion.Body  className={styles["faq__accordion__body"]}>
              هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
              سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات
              في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها
              تعطي توزيعاَ طبيعياَ
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item
            eventKey="1"
            className={styles["faq__accordion__item"]}
          >
            <Accordion.Header id="accordion-header2" className={styles["faq__accordion__header"]}>
            {/* <svg id="arrow-accordion-header2" xmlns="http://www.w3.org/2000/svg" width="1rem" height="1.25rem" viewBox="0 0 20 11.985">
              <g id="arrow2" transform="translate(0 11.985) rotate(-90)">
                <path id="Path_12841" data-name="Path 12841" d="M11.736,8.58a1.923,1.923,0,0,1,.327-.261L19.816.567a1.937,1.937,0,0,1,2.74,2.74L15.879,9.983l6.71,6.711a1.937,1.937,0,1,1-2.739,2.739l-7.787-7.786a2.01,2.01,0,0,1-.327-3.068Z" transform="translate(-11.171 -0.001)" fill="#ccc"/>
              </g>
          </svg> */}
            كيف اشترك في الدورة؟
            </Accordion.Header>
            <Accordion.Body className={styles["faq__accordion__body"]}>
              هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
              سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات
              في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها
              تعطي توزيعاَ طبيعياَ
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item
            eventKey="2"
            className={styles["faq__accordion__item"]}
          >
            <Accordion.Header id="accordion-header3" className={styles["faq__accordion__header"]}>
            {/* <svg id="arrow-accordion-header3" xmlns="http://www.w3.org/2000/svg" width="1rem" height="1.25rem" viewBox="0 0 20 11.985">
              <g id="arrow2" transform="translate(0 11.985) rotate(-90)">
                <path id="Path_12841" data-name="Path 12841" d="M11.736,8.58a1.923,1.923,0,0,1,.327-.261L19.816.567a1.937,1.937,0,0,1,2.74,2.74L15.879,9.983l6.71,6.711a1.937,1.937,0,1,1-2.739,2.739l-7.787-7.786a2.01,2.01,0,0,1-.327-3.068Z" transform="translate(-11.171 -0.001)" fill="#ccc"/>
              </g>
          </svg> */}
            هل يمكنني مشاهدة الدورة في أي وقت؟
            </Accordion.Header>
            <Accordion.Body className={styles["faq__accordion__body"]}>
              هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
              سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات
              في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها
              تعطي توزيعاَ طبيعياَ
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      
      </div>
    </>
  );
}

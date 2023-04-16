import React, { useEffect, useState, memo } from "react";
import styles from "./faq.module.css";
import { Accordion } from "react-bootstrap";
import { axiosInstance } from "configurations/axios/axiosConfig";
import { openSupportConvInNewTab, contactUsHandler } from "modules/_Shared/utils/contactUs";

function FAQ(props: any) {
  const [faqs, setFaqs] = useState<any>([]);

  useEffect(() => {
    let cancel: boolean = false;

    if (props.Cid !== "") {
      axiosInstance
        .get(`course/${props.Cid}/faqs`)
        .then(function (response: any) {
          if (cancel) return;
          setFaqs(response.data.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    return () => {
      cancel = true;
    }

  }, [props]);

  return (
    <>
      {
        faqs && faqs.length !== 0 &&
        <div className={styles["faq"]}>
          <div className={styles["faq__title"]}>الأسئلة الشائعة عن الدورة</div>
          <Accordion defaultActiveKey="" className={styles["faq__accordion"]}>

            {/* {console.log(faqs)} */}
            {faqs?.map((faq: any, i: any) => {
              return (

                <Accordion.Item
                  key={i}
                  eventKey={JSON.stringify(i)}
                  className={styles["faq__accordion__item"]}
                >
                  <Accordion.Header id={`accordion-header${i + 1}`} className={styles["faq__accordion__header"]}>
                    {/* <svg id="arrow-accordion-header1" xmlns="http://www.w3.org/2000/svg" width="1rem" height="1.25rem" viewBox="0 0 20 11.985">
                    <g id="arrow2" transform="translate(0 11.985) rotate(-90)">
                      <path id="Path_12841" data-name="Path 12841" d="M11.736,8.58a1.923,1.923,0,0,1,.327-.261L19.816.567a1.937,1.937,0,0,1,2.74,2.74L15.879,9.983l6.71,6.711a1.937,1.937,0,1,1-2.739,2.739l-7.787-7.786a2.01,2.01,0,0,1-.327-3.068Z" transform="translate(-11.171 -0.001)" fill="#ccc"/>
                    </g>
                </svg> */}

                    {`${faq.q} `}
                  </Accordion.Header>
                  <Accordion.Body className={styles["faq__accordion__body"]}>
                    {faq.a}
                  </Accordion.Body>
                </Accordion.Item>
              )
            })}

          </Accordion>

          <div className={styles["faq__contact-us"]}>
            <span> هل لديك سؤال؟ </span>
            <span onClick={() => { contactUsHandler() }}> تواصل معنا </span>
          </div>

        </div>
      }
    </>
  );
}

export default memo(FAQ);

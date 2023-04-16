import React, { useState, useEffect, memo } from "react";
import styles from "./join-us.module.css";
import { Row, Col, Button, Form } from "react-bootstrap";
import { axiosInstance } from "configurations/axios/axiosConfig";

function JoinUs() {
  const [error, setError] = useState({ status: false, msg: "" });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (e.target[0].value == "" || e.target[1].value == "" || e.target[2].value == "") {
      setError({ status: true, msg: "برجاء ادخال البريد الالكتروني" });

    } else {
      setError({ status: false, msg: "تم إرسال بريدك الالكتروني" });
      const form: any = document.getElementById("newsletter-form");
      form.reset();
      
      axiosInstance
        .post(`newsletters`,
          {
            "email": e.target[0].value,
          })
        .then((response: any) => {
          console.log(response);
          // if(JSON.stringify(response.status).startsWith("2")){

          //   setError({ status: false, msg: response?.data?.data?.message });
          //   const form:any = document.getElementById("newsletter-form");
          //   form.reset();

          // }else{
          //   setError({ status: true, msg:response?.data?.data?.message});
          // }

        })
        .catch((error: any) => {
          console.log(error);
        });

    }
  }

  useEffect(() => {

    if (error.msg !== "") {
      setTimeout(() => {
        setError({ status: false, msg: "" });
      }, 7000);
    }

  }, [error])


  return (
    <>
      <Row className={styles["join-us-row"]}>
        <Col xs={12} className={styles["join-us"]}>
          <div className={styles["join-us__title"]}>
            انضم لتستفيد من أكبر مكتبة إلكترونية في الخليج والوطن العربي
          </div>
          <div className="d-flex justify-content-center">
            <Form className={styles["join-us__newsletter-form"]} onSubmit={() => { handleSubmit(event) }} id="newsletter-form">
              <div className={styles["join-us__subscribe-bar-box"]}>
                <Form.Control
                  type="text"
                  placeholder="ادخل البريد الإلكتروني..."
                  className={styles["join-us__subscribe-bar-box__email-field"]}
                />
                <Button type="submit" className={styles["join-us__subscribe-bar-box__btn"]}>
                  اشترك
                </Button>
              </div>

              {error.msg !== "" &&
                <div className={`${error.status ? styles["join-us__info-msg--error"] : styles["join-us__info-msg--success"]}`}>
                  {error.msg}
                </div>
              }

            </Form>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default memo(JoinUs);

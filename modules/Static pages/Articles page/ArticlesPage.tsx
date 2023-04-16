import React, { useState, useEffect, memo } from 'react';
import { Row, Col } from "react-bootstrap";
import { axiosInstance } from "configurations/axios/axiosConfig";
import { toggleLoader } from "modules/_Shared/utils/toggleLoader";
import styles from "./articles-page.module.css";


function ArticlesPage(props: any) {
  const [article, setArticle] = useState("");
  const [articleTitle, setArticleTitle] = useState("");
  toggleLoader("show");

  useEffect(() => {
    axiosInstance
      .get(`article/${props.slug}`)
      .then(function (response: any) {
        setArticle(response?.data?.data?.page_html);
        setArticleTitle(response?.data?.data?.page_title);
        toggleLoader("hide");
      })
      .catch(function (error) {
        toggleLoader("hide");
        console.log(error);
      });


    return () => {

    }
  }, [])
  return (
    <>
      <Row className={styles["article"]}>
        <Col xs={12}>
          <h1 dangerouslySetInnerHTML={{ __html: articleTitle }}></h1>
        </Col>
        <Col xs={12}>
          <div dangerouslySetInnerHTML={{ __html: article }}></div>
        </Col>
      </Row>

    </>
  )
}

export default memo(ArticlesPage);
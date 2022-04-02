/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import styles from "./hero-section.module.css";
import  {SearchIcon}  from "common/Icons/Icons";
import Router from "next/router";

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");


  const handleSearchBarEntries = (e:any)=>{
    console.log(e.target.value);
    setSearchQuery(e.target.value);
  }

  const sendSearchQueryOnEnterClicked = (e:any)=>{

    if (e.key === 'Enter' || e.keyCode === 13 ) {
      if(searchQuery == ""){
        console.log("متخمش يسطا");
      }else{
        Router.push({
          pathname: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}search`,
          query: { q: searchQuery }
        });
        const searchBar:any = document.getElementById("search-field");
        const responsiveSearchBar:any = document.getElementById("responsive-search-field");
        searchBar.value = "";
        searchBar.blur();
        responsiveSearchBar.value = "";
        responsiveSearchBar.blur();
      }
  }
  }

  const sendSearchQuery = (tagsSearchQuery:{status:boolean,value:string})=>{
    if(tagsSearchQuery.status == true){
      
        Router.push({
          pathname: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}search`,
          query: { q: tagsSearchQuery.value }
        })

    }else if(tagsSearchQuery.status == false){

      if(searchQuery == ""){
        console.log("متخمش يسطا"); 
      }else{
        Router.push({
          pathname: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}search`,
          query: { q: searchQuery }
        })
      }
      const searchBar:any = document.getElementById("search-field");
      searchBar.value = "" ;
      searchBar.blur();

    }
  }

  return (
    <>
      <Row className={styles["hero-section"]}>
        <Col xs={0} sm={{ span: 2, order: 'first' }}></Col>
        <Col xs={12} sm={{ span: 5, order: 'first' }}>
          <div className={styles["hero-section__container"]}>
            <h4 className={styles["hero-section__title"]}>
            تعلم أونلاين مع منصة تدرب
            </h4>
            <p className={styles["hero-section__para"]}>
            أكبر منصة عربية متخصصة في التعلم عن بعد بالتعاون مع أفضل المدربين والخبراء
            </p>
            <div className={styles["hero-section__search-bar-container"]}>
              <div
                className={
                  styles["hero-section__search-bar-container__icon-wrapper"]
                }
              >
                <SearchIcon color="#777"/>

              </div>

                <Form.Control
                id="search-field"
                onChange={()=> handleSearchBarEntries(event)}
                onKeyUp={()=>{sendSearchQueryOnEnterClicked(event)}}
                  type="text"
                  placeholder="ماذا تريد أن تتعلم اليوم؟"
                  className={
                    styles["hero-section__search-bar-container__search-bar"]
                  }
                />
                <Button onClick={()=>{sendSearchQuery({status:false,value:""})}} className={styles["hero-section__search-bar__btn"]}>
                ابحث
                </Button>
            </div>
            <div className={styles["hero-section__chips-box"]}>
              <span onClick={()=>{
                sendSearchQuery({status:true,value:"تربية الأطفال"});
                }} className={styles["hero-section__chip"]}> تربية الأطفال </span>
              <span onClick={()=>{
                sendSearchQuery({status:true,value:"التصوير"});
                }} className={styles["hero-section__chip"]}>التصوير</span>
              <span onClick={()=>{
                sendSearchQuery({status:true,value:"تنمية بشرية"});
                }} className={styles["hero-section__chip"]}>تنمية بشرية</span>
              <span onClick={()=>{
                sendSearchQuery({status:true,value:"الزراعة الداخلية"});
                }} className={styles["hero-section__chip"]}> الزراعة الداخلية </span>
              <span onClick={()=>{
                sendSearchQuery({status:true,value:"تنمية بشرية"});
                }} className={styles["hero-section__chip"]}>تنمية بشرية</span>
              <span onClick={()=>{
                sendSearchQuery({status:true,value:"الزراعة الداخلية"});
                }} className={styles["hero-section__chip"]}> الزراعة الداخلية </span>
              <span onClick={()=>{
                sendSearchQuery({status:true,value:"تنظيم الوقت"});
                }} className={styles["hero-section__chip"]}>تنظيم الوقت</span>
            </div>
          </div>
        </Col>
        <Col xs={{ span: 12, order: 'first' }}  sm={5} className={styles["hero-section__col"]}>
          <img
            src="/images/Final Graphics- colored.png"
            alt="hero trainer"
            className={styles["hero-section__hero-img"]}
          />
          {/* <video autoPlay controls src="/images/final 22.mp4"></video> */}
        </Col>

        <Col xs={0} sm={12} className={styles["categories-cards-col"]}>
          <div className={styles["categories-cards-container"]}>
            <div className={styles["categories-cards-container__card"]}>
              <div className={styles["categories-cards-container__img-box"]}>
              <svg xmlns="http://www.w3.org/2000/svg" width="2.375rem" height="1.75rem" viewBox="0 0 37.956 28">
  <g id="courses" transform="translate(-3 -6)">
    <g id="_21-studying" data-name="21-studying" transform="translate(3 6)">
      <path id="Path_12972" data-name="Path 12972" d="M10.3,32.277H3V10.38H4.46V29.358a1.46,1.46,0,0,0,1.46,1.46H12.8a4.6,4.6,0,0,1,.774,0A7.3,7.3,0,0,1,18.4,33.956a18.759,18.759,0,0,0-8.1-1.679Zm10.219-.292-.131-.146A10.015,10.015,0,0,0,12.8,27.9H7.38V6H12.8c3.766,0,6.949,3.547,7.591,8.438a.526.526,0,0,0,0,.161,11.781,11.781,0,0,1,.131,1.62Zm3.051-.146-.131.146V16.219a11.781,11.781,0,0,1,.1-1.62.526.526,0,0,0,0-.161C24.212,9.547,27.394,6,31.161,6h5.416V27.9H31.161a8.526,8.526,0,0,0-1.066.073h-.336a10.044,10.044,0,0,0-6.19,3.869Zm17.387.438h-7.3A18.978,18.978,0,0,0,25.555,34a7.416,7.416,0,0,1,4.832-3.182,4.6,4.6,0,0,1,.774,0h6.876a1.46,1.46,0,0,0,1.46-1.46V10.38h1.46Z" transform="translate(-3 -6)" fill="#fff"/>
    </g>
  </g>
</svg>

              </div>
              <div className={styles["categories-cards-container__category"]}>
                الدورات التدريبية
              </div>
            </div>
            <div className={styles["categories-cards-container__card"]}>
              <div className={styles["categories-cards-container__img-box"]}>
              <svg xmlns="http://www.w3.org/2000/svg" width="2.375rem" height="1.75rem" viewBox="0 0 38.599 28">
  <g id="live" transform="translate(-77.398 1.591)">
    <path id="Path_12864" data-name="Path 12864" d="M212.717,90.529a3.146,3.146,0,1,1,0-4.444A3.153,3.153,0,0,1,212.717,90.529Zm0,0" transform="translate(-113.789 -75.898)" fill="#fff"/>
    <path id="Path_12865" data-name="Path 12865" d="M293.532,59.63a1.852,1.852,0,0,1-1.223-.445,1.385,1.385,0,0,1,0-2.141,5.789,5.789,0,0,0,0-8.959,1.385,1.385,0,0,1,0-2.141,1.905,1.905,0,0,1,2.444,0,8.559,8.559,0,0,1,0,13.246,1.854,1.854,0,0,1-1.221.442Zm0,0" transform="translate(-189.872 -40.155)" fill="#fff" stroke="#ff7900" strokeWidth="0.7"/>
    <path id="Path_12866" data-name="Path 12866" d="M328.728,28a2.038,2.038,0,0,1-1.395-.54,1.754,1.754,0,0,1,0-2.6,14.622,14.622,0,0,0,0-21.717,1.754,1.754,0,0,1,0-2.6,2.071,2.071,0,0,1,2.787,0,18.132,18.132,0,0,1,0,26.925,2.039,2.039,0,0,1-1.392.537Zm0,0" transform="translate(-220.11 -1.594)" fill="#fff"/>
    <path id="Path_12867" data-name="Path 12867" d="M137.761,59.629a1.856,1.856,0,0,1-1.221-.442,8.559,8.559,0,0,1,0-13.246,1.9,1.9,0,0,1,2.444,0,1.385,1.385,0,0,1,0,2.141,5.789,5.789,0,0,0,0,8.959,1.385,1.385,0,0,1,0,2.141,1.854,1.854,0,0,1-1.223.445Zm0,0" transform="translate(-48.027 -40.154)" fill="#fff" stroke="#ff7900" strokeWidth="0.7"/>
    <path id="Path_12868" data-name="Path 12868" d="M86.945,28a2.038,2.038,0,0,1-1.392-.538,18.132,18.132,0,0,1,0-26.925,2.071,2.071,0,0,1,2.787,0,1.754,1.754,0,0,1,0,2.6,14.623,14.623,0,0,0,0,21.717,1.754,1.754,0,0,1,0,2.6,2.038,2.038,0,0,1-1.394.54Zm0,0" transform="translate(-2.169 -1.592)" fill="#fff"/>
  </g>
              </svg>

              </div>
              <div className={styles["categories-cards-container__category"]}>
              مباشر علي تدرب
              </div>
            </div>
            <div className={styles["categories-cards-container__card"]}>
              <div className={styles["categories-cards-container__img-box"]}>
              <svg xmlns="http://www.w3.org/2000/svg" width="2.375rem" height="1.75rem" viewBox="0 0 30 30">
  <g id="consultations" transform="translate(-2 -2)">
    <g id="_64-Interview" data-name="64-Interview" transform="translate(2 2)">
      <path id="Path_12965" data-name="Path 12965" d="M5.214,18.071A4.286,4.286,0,1,1,9.5,22.357,4.286,4.286,0,0,1,5.214,18.071Zm7.5,5.357H6.286A4.286,4.286,0,0,0,2,27.714v3.214A1.071,1.071,0,0,0,3.071,32H15.929A1.071,1.071,0,0,0,17,30.929V27.714A4.286,4.286,0,0,0,12.714,23.429ZM32,5.214v6.429a3.214,3.214,0,0,1-3.214,3.214H24.854l-4,3A1.074,1.074,0,0,1,19.143,17V14.857H15.929a3.214,3.214,0,0,1-3.214-3.214V5.214A3.214,3.214,0,0,1,15.929,2H28.786A3.214,3.214,0,0,1,32,5.214ZM19.143,8.429A1.071,1.071,0,1,0,18.071,9.5,1.071,1.071,0,0,0,19.143,8.429Zm4.286,0A1.071,1.071,0,1,0,22.357,9.5,1.071,1.071,0,0,0,23.429,8.429Zm4.286,0A1.071,1.071,0,1,0,26.643,9.5,1.071,1.071,0,0,0,27.714,8.429Zm2.143,12.857A3.214,3.214,0,1,0,26.643,24.5a3.214,3.214,0,0,0,3.214-3.214Zm-1.071,4.286H24.5a3.214,3.214,0,0,0-3.214,3.214v2.143A1.071,1.071,0,0,0,22.357,32h8.571A1.071,1.071,0,0,0,32,30.929V28.786A3.214,3.214,0,0,0,28.786,25.571Z" transform="translate(-2 -2)" fill="#fff"/>
    </g>
  </g>
</svg>

              </div>
              <div className={styles["categories-cards-container__category"]}>
              الاستشارات
              </div>
            </div>
            <div className={styles["categories-cards-container__card"]}>
              <div className={styles["categories-cards-container__img-box"]}>
              <svg xmlns="http://www.w3.org/2000/svg" width="2.375rem" height="1.75rem" viewBox="0 0 29.558 30">
  <g id="offers" transform="translate(-3.2 -2.5)">
    <g id="Group_10871" data-name="Group 10871" transform="translate(3.2 2.5)">
      <path id="Path_12969" data-name="Path 12969" d="M30.863,9.1H28.274a4.683,4.683,0,0,0-4.295-6.6c-3.158,0-4.737,1.8-6,3.916C16.716,4.3,15.137,2.5,11.979,2.5A4.683,4.683,0,0,0,7.684,9.1H5.095A1.9,1.9,0,0,0,3.2,10.995v3.853a.916.916,0,0,0,.916.916H31.842a.916.916,0,0,0,.916-.916V10.995A1.9,1.9,0,0,0,30.863,9.1ZM23.979,5.311a1.895,1.895,0,1,1,0,3.789H19.684C21.074,6.542,21.895,5.311,23.979,5.311ZM10.084,7.205a1.9,1.9,0,0,1,1.895-1.895c2.084,0,2.905,1.232,4.295,3.789H11.979A1.9,1.9,0,0,1,10.084,7.205Z" transform="translate(-3.2 -2.5)" fill="#fff"/>
      <path id="Path_12970" data-name="Path 12970" d="M9.2,64.989a2.332,2.332,0,0,0,2.337,2.337h9.158V53.4H9.2Z" transform="translate(-7.305 -37.326)" fill="#fff"/>
      <path id="Path_12971" data-name="Path 12971" d="M54.4,67.326h9.158a2.332,2.332,0,0,0,2.337-2.337V53.4H54.4Z" transform="translate(-38.232 -37.326)" fill="#fff"/>
    </g>
  </g>
</svg>

              </div>
              <div className={styles["categories-cards-container__category"]}>
              العروض
              </div>
            </div>
          </div>
       
        </Col>
      </Row>
    </>
  );
}

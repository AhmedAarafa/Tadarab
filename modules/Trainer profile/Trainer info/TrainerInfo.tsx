/* eslint-disable @next/next/no-img-element */
import React , { useState , useEffect} from "react";
import styles from "./trainer-info.module.css";
import { Row, Col, Button, Form } from "react-bootstrap";
import TrainerCourses from "../Trainer courses/TrainerCourses";

export default function TrainerInfo() {
  const [showMore, setShowMore] = useState(true);
    
  function showMoreHandler(){
      const showMoreIcon:any = document.getElementById("read-more-icon2");
      const fadeOut:any = document.getElementById("fadeout2");
      const briefAboutTrainer:any = document.getElementById("brief-about-trainer");

      setShowMore(!showMore);
      if(showMore == true){
          showMoreIcon ? showMoreIcon.style.cssText=`transform:rotate(180deg) ; transition:all 0.4s ease`:null;
          fadeOut ? fadeOut.style.cssText ="display:none": null;
          briefAboutTrainer ? briefAboutTrainer.style.cssText=`height:fit-content ; overflow:visible `:null;
      } else{
          showMoreIcon ? showMoreIcon.style.cssText=`transform:none ; transition:all 0.4s ease`:null;
          fadeOut ? fadeOut.style.cssText ="display:block": null;
          if(screen.width <= 576){
              briefAboutTrainer ? briefAboutTrainer.style.cssText=`height:25.6rem ; overflow:hidden `:null;
          }else{
              briefAboutTrainer ? briefAboutTrainer.style.cssText=`height:16rem ; overflow:hidden `:null;
          }
      }
     window.addEventListener("resize" , ()=>{
      if(showMore == true){
          showMoreIcon ? showMoreIcon.style.cssText=`transform:rotate(180deg) ; transition:all 0.4s ease`:null;
          fadeOut ? fadeOut.style.cssText ="display:none": null;
          briefAboutTrainer ? briefAboutTrainer.style.cssText=`height:fit-content ; overflow:visible `:null;
      } else{
          showMoreIcon ? showMoreIcon.style.cssText=`transform:none ; transition:all 0.4s ease`:null;
          fadeOut ? fadeOut.style.cssText ="display:block": null;
          if(screen.width < 576){
              briefAboutTrainer ? briefAboutTrainer.style.cssText=`height:25.6rem ; overflow:hidden `:null;
          }else{
              briefAboutTrainer ? briefAboutTrainer.style.cssText=`height:16rem ; overflow:hidden `:null;
          }
      }
     })
  }

  useEffect(() => {
    return () => {
      window.removeEventListener("resize" , ()=>{
        return;
      })
    };
  }, []);
  
  return (
    <div className={styles["trainer-profile__trainer-info-col"]}>

        <div className={styles["trainer-profile__trainer-info-col__trainer-info-box"]}>

          <div className={styles["trainer-profile__trainer-info-col__trainer-info-box__trainer-img"]}>
            <img src="/images/trainer img.png" alt="trainer image" />
          </div>

          <div className={styles["trainer-profile__trainer-info-col__trainer-info-box__trainer-info"]}>
            <div>مدرب معتمد</div>
            <h1>د/ عبدالله القاضي</h1>
            <div>خبير التسويق الإلكتروني وإدارة الاعمال</div>
          </div>

        </div>

        <div className={styles["trainer-profile__trainer-info-col__stastics-box"]}>
          <div className={styles["trainer-profile__trainer-info-col__stastics-box__stastics"]}>
            <svg xmlns="http://www.w3.org/2000/svg" width="3.125rem" height="1.875rem" viewBox="0 0 26.666 16">
                <path id="courses_num" data-name="courses num" d="M25.935,67.714,14.313,64.143a3.328,3.328,0,0,0-1.95,0L.741,67.714a.981.981,0,0,0,0,1.9l2.026.622a3.283,3.283,0,0,0-.745,1.954A1.286,1.286,0,0,0,1.916,74.4L.852,79.186A.667.667,0,0,0,1.5,80H3.84a.667.667,0,0,0,.651-.811L3.427,74.4a1.282,1.282,0,0,0-.075-2.188,1.966,1.966,0,0,1,.862-1.53l8.149,2.5a3.332,3.332,0,0,0,1.95,0l11.623-3.571A.981.981,0,0,0,25.935,67.714ZM14.7,74.46a4.664,4.664,0,0,1-2.733,0L5.929,72.6l-.591,4.727c0,1.473,3.582,2.667,8,2.667s8-1.194,8-2.667L20.747,72.6Z" transform="translate(-0.005 -63.998)" fill="#AF151F"/>
              </svg>
            <div className={styles["trainer-profile__trainer-info-col__stastics-box__stastics__number-of-courses"]}>
                <div>عدد الدورات</div>
                <div>5</div>
            </div>
          </div>
          <div className={styles["trainer-profile__trainer-info-col__stastics-box__stastics"]}>
          <svg xmlns="http://www.w3.org/2000/svg" width="22.857" height="16" viewBox="0 0 22.857 16">
            <path id="students_num" data-name="students num" d="M3.429,38.857a2.286,2.286,0,1,0-2.286-2.286A2.288,2.288,0,0,0,3.429,38.857Zm16,0a2.286,2.286,0,1,0-2.286-2.286A2.288,2.288,0,0,0,19.429,38.857ZM20.571,40H18.286a2.279,2.279,0,0,0-1.611.664,5.224,5.224,0,0,1,2.682,3.907h2.357a1.142,1.142,0,0,0,1.143-1.143V42.286A2.288,2.288,0,0,0,20.571,40Zm-9.143,0a4,4,0,1,0-4-4A4,4,0,0,0,11.429,40Zm2.743,1.143h-.3a5.523,5.523,0,0,1-4.893,0h-.3a4.115,4.115,0,0,0-4.114,4.114v1.029A1.715,1.715,0,0,0,6.286,48H16.571a1.715,1.715,0,0,0,1.714-1.714V45.257A4.115,4.115,0,0,0,14.171,41.143Zm-7.989-.479A2.279,2.279,0,0,0,4.571,40H2.286A2.288,2.288,0,0,0,0,42.286v1.143a1.142,1.142,0,0,0,1.143,1.143H3.5a5.237,5.237,0,0,1,2.686-3.907Z" transform="translate(0 -32)" fill="#AF151F"/>
          </svg>

            <div className={styles["trainer-profile__trainer-info-col__stastics-box__stastics__number-of-learners"]}>
                <div>عدد المتعلمين</div>
                <div>340.721</div>
            </div>
          </div>


        </div>

        <div className={styles["trainer-profile__trainer-info-col__brief-about-trainer-box"]}>

          <div id="brief-about-trainer" className={styles["trainer-profile__trainer-info-col__brief-about-trainer-box__brief-about-trainer"]}>
          <div className={styles["trainer-profile__trainer-info-col__brief-about-trainer-box__brief-about-trainer__title"]}>نبذة عن المدرب</div>
          <p className={styles["trainer-profile__trainer-info-col__brief-about-trainer-box__brief-about-trainer__para"]}>
            تقدم لك منصة تدرب الإلكترونية دورة أسراري في التربية، بإِشراف الأستاذة
            عفاف محمد الجاسم، وهي المؤسس والرئيس التنفيذي لشركة إنسان للاستشارات
            والتدريب، خبرة أكثر من 30 عاماً في مجال الاستشارات الاجتماعية
            والتدريب. مدربة مدربين فئة A والمشرف العام لنادي إنسان للمدربين، وهي
            مستشار تدريب في معهد وليام جلاسر الدولي لنظرية الاختيار والعلاج
            الواقعي وعضو مجلس إدارة في جمعية الخدمة الاجتماعية الكويتية. بالإضافة
            إلى كونها عضو المجلس الاستشاري للجنة الطبية في جمعية صندوق إعانة
            المرضى وعضو مؤسس في جمعية الاختيار الكويتية. مقيم داخلي ومحكم دولي
            معتمد من المؤسسة الأوروبية لإدارة الجودة EFQM، وعضو في الجمعية
            البريطانية للتنويم الايحائي العلاجي UK Guild منذ عام 2000.
          </p>
          <div className={styles["trainer-profile__trainer-info-col__brief-about-trainer-box__brief-about-trainer__read-more"]} onClick={showMoreHandler}>
              
          <span>{ showMore ? "اقرأ المزيد" : "اقرأ أقل"}</span>
            <svg id="read-more-icon2" xmlns="http://www.w3.org/2000/svg" width="0.625rem" height="0.375rem" viewBox="0 0 10 5.993">
                <g id="more" transform="translate(0 5.993) rotate(-90)">
                    <path id="Path_12841" data-name="Path 12841" d="M11.454,4.29a.961.961,0,0,1,.164-.13L15.494.284a.969.969,0,0,1,1.37,1.37L13.525,4.992,16.88,8.347a.968.968,0,1,1-1.369,1.369L11.618,5.824a1.005,1.005,0,0,1-.164-1.534Z" transform="translate(-11.171 -0.001)" fill="#af151f"/>
                </g>
            </svg>
           

          </div>
          <div id="fadeout2" className={styles["trainer-profile__trainer-info-col__brief-about-trainer-box__brief-about-trainer--fadeout-effect"]}></div>
        </div>
        </div>




    </div>
  );
}

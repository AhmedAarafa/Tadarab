/* eslint-disable @next/next/no-img-element */
import React , { useState , useEffect} from "react";
import styles from "./trainer-info.module.css";
import { Row, Col, Button, Form } from "react-bootstrap";
import TrainerCourses from "../Trainer courses/TrainerCourses";
import { useDispatch, useSelector } from "react-redux";  
import { LearnersIcon, CoursesNumberIcon,DropDownIcon } from "common/Icons/Icons";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function TrainerInfo() {
  const trainerProfileData = useSelector((state:any) => state.trainerProfileData);
  const [trainerProfile, setTrainerProfile] = useState({});
  const [showMore, setShowMore] = useState(true);
  const [isTooMuchContent, setIsTooMuchContent] = useState(false);
  
  function showMoreHandler(){
      const showMoreIcon:any = document.querySelector("#read-more-icon2 > svg");
      const fadeOut:any = document.getElementById("fadeout2");
      const briefAboutTrainer:any = document.getElementById("brief-about-trainer");

      if(showMore == true){
        showMoreIcon ? showMoreIcon.style.cssText=`transform:rotate(180deg) ; transition:all 0.4s ease`:null;
        fadeOut ? fadeOut.style.cssText ="display:none": null;
        briefAboutTrainer ? briefAboutTrainer.style.cssText=`height:fit-content ; overflow:visible `:null;
        setShowMore(!showMore);
      } else{
        showMoreIcon ? showMoreIcon.style.cssText=`transform:none ; transition:all 0.4s ease`:null;
        fadeOut ? fadeOut.style.cssText ="display:block": null;
        if(screen.width <= 576){
          briefAboutTrainer ? briefAboutTrainer.style.cssText=`height:25.6rem ; overflow:hidden `:null;
        }else{
          briefAboutTrainer ? briefAboutTrainer.style.cssText=`height:16rem ; overflow:hidden `:null;
        }
        setShowMore(!showMore);
      }

  }

  useEffect(() => {

    const showMoreIcon:any = document.querySelector("#read-more-icon2 > svg");
    const fadeOut:any = document.getElementById("fadeout2");
    const briefAboutTrainer:any = document.getElementById("brief-about-trainer");
    let el:any = document.getElementById('bio');
    let divHeight = el?.offsetHeight;
    let lines = Math.ceil(divHeight / 24);

    window.addEventListener("resize" , ()=>{
      let el:any = document.getElementById('bio');
      let divHeight = el?.offsetHeight;
      // console.log("divHeight",divHeight);
      let lines = Math.ceil(divHeight / 24);
      // console.log("Lines: " + lines);
      
      if(lines > 9 ){
        setIsTooMuchContent(true);
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
      }else{
        setIsTooMuchContent(false);
        briefAboutTrainer ? briefAboutTrainer.style.cssText=`height:fit-content ; overflow:visible `:null;
      }
      
     });

     if(lines > 9 ){
      setIsTooMuchContent(true);
      if(showMore == false){
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
    }else{
      setIsTooMuchContent(false);
      briefAboutTrainer ? briefAboutTrainer.style.cssText=`height:fit-content ; overflow:visible `:null;
    }

    return () => {
      window.removeEventListener("resize" , ()=>{
        return;
      })
    };
  }, []);

  useEffect(() => {
    setTrainerProfile(trainerProfileData.data || {});
    const briefAboutTrainer:any = document.getElementById("brief-about-trainer");
    const showMoreIcon:any = document.querySelector("#read-more-icon2 > svg");
    const fadeOut:any = document.getElementById("fadeout2");
     // Function to count total
        // number of lines
  
          // const rootFontSize = parseFloat(
          //   window
          //   .getComputedStyle(document.getElementsByTagName("html")[0])
          //   .getPropertyValue("font-size")
          // );
          let el:any = document.getElementById('bio');
          let divHeight = el.offsetHeight;
          let lines = Math.ceil(divHeight / 24);
          // console.log("Lines: " + lines);
      // console.log("IsTooMuchContent",isTooMuchContent);

      if(lines > 9 ){
        setIsTooMuchContent(true);
        if(showMore == false){
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
      }else{
        setIsTooMuchContent(false);
        briefAboutTrainer ? briefAboutTrainer.style.cssText=`height:fit-content ; overflow:visible `:null;
      }


}, [trainerProfileData]);

  
  return (
    <div className={styles["trainer-profile__trainer-info-col"]} >

        <div className={styles["trainer-profile__trainer-info-col__trainer-info-box"]}>

          <div className={styles["trainer-profile__trainer-info-col__trainer-info-box__trainer-img"]}>
            <img src={trainerProfileData.data?.image} alt="trainer image" />
          </div>

          <div className={styles["trainer-profile__trainer-info-col__trainer-info-box__trainer-info"]}>
            <div>{trainerProfileData.data?.title}</div>
            <h1>{trainerProfileData.data?.name_ar }</h1>
            <div>{trainerProfileData.data?.designation}</div>
          </div>
        </div>

        <div className={styles["trainer-profile__trainer-info-col__stastics-box"]}>
          <div className={styles["trainer-profile__trainer-info-col__stastics-box__stastics"]}>
           <CoursesNumberIcon color="#af151f"/>
            <div className={styles["trainer-profile__trainer-info-col__stastics-box__stastics__number-of-courses"]}>
                <div>عدد الدورات</div>
                <div>{trainerProfileData.data?.courses?.length}</div>
            </div>
          </div>
          <div className={styles["trainer-profile__trainer-info-col__stastics-box__stastics"]}>
          <LearnersIcon color="#af151f"/>

            <div className={styles["trainer-profile__trainer-info-col__stastics-box__stastics__number-of-learners"]}>
                <div>عدد المتعلمين</div>
                <div>
                  {
                  trainerProfileData.data?.courses?.map((item:any)=> item.subscribers_count).reduce((prev:any, curr:any) => prev + curr, 0) +
                  parseInt(trainerProfileData.data?.buyers_count) 
                }
                </div>
            </div>
          </div>


        </div>

        <div className={styles["trainer-profile__trainer-info-col__brief-about-trainer-box"]}>

          <div id="brief-about-trainer" className={styles["trainer-profile__trainer-info-col__brief-about-trainer-box__brief-about-trainer"]}>
          <div className={styles["trainer-profile__trainer-info-col__brief-about-trainer-box__brief-about-trainer__title"]}>نبذة عن المدرب</div>
          <p id="bio" className={styles["trainer-profile__trainer-info-col__brief-about-trainer-box__brief-about-trainer__para"]}
          dangerouslySetInnerHTML={{__html: trainerProfileData.data?.bio}}>
          {/* {trainerProfileData.data?.bio} */}
          </p>
          { isTooMuchContent &&
          <>
              <div className={styles["trainer-profile__trainer-info-col__brief-about-trainer-box__brief-about-trainer__read-more"]} onClick={showMoreHandler}>
                  
                <span>{ showMore ? "اقرأ المزيد" : "اقرأ أقل"}</span>
              
                <span id="read-more-icon2">

                  <DropDownIcon  color="#af151f"/>
                </span>
              </div>
            </>
            }

           

          { isTooMuchContent && <div id="fadeout2" className={styles["trainer-profile__trainer-info-col__brief-about-trainer-box__brief-about-trainer--fadeout-effect"]}></div>}
        </div>
        </div>




    </div>
  );
}

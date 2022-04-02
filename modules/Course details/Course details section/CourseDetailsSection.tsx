import React,{ useState,useEffect } from "react";
import styles from "./course-details-section.module.css";
import { useDispatch, useSelector } from "react-redux";   
import {TadarabLogo,NextIcon,BackIcon,DarkModeIcon,DropDownIcon,SearchIcon,FavouriteIcon,CartIcon,AccountIcon} from "common/Icons/Icons";

export default function CourseDetailsSection() {
    const [showMore, setShowMore] = useState(true);
    const courseDetailsData = useSelector((state:any) => state.courseDetailsData);
    const userStatus = useSelector((state:any) => state.userAuthentication);
    const [courseDetails, setCourseDetails] = useState<any>([]);
    
    useEffect(() => {
        setCourseDetails(courseDetailsData.data || []);
      }, [courseDetailsData]);

    function showMoreHandler(){
        const showMoreIcon:any = document.getElementById("read-more-icon2");
        const fadeOut:any = document.getElementById("fadeout2");
        const courseDetails:any = document.getElementById("course-details");

        setShowMore(!showMore);
        if(showMore == true){
            showMoreIcon ? showMoreIcon.style.cssText=`transform:rotate(180deg) ; transition:all 0.4s ease`:null;
            fadeOut ? fadeOut.style.cssText ="display:none": null;
            courseDetails ? courseDetails.style.cssText=`height:fit-content ; overflow:visible `:null;
        } else{
            showMoreIcon ? showMoreIcon.style.cssText=`transform:none ; transition:all 0.4s ease`:null;
            fadeOut ? fadeOut.style.cssText ="display:block": null;
            if(screen.width <= 576){
                courseDetails ? courseDetails.style.cssText=`height:36rem ; overflow:hidden `:null;
            }else{
                courseDetails ? courseDetails.style.cssText=`height:16rem ; overflow:hidden `:null;
            }
        }
       window.addEventListener("resize" , ()=>{
        if(showMore == true){
            showMoreIcon ? showMoreIcon.style.cssText=`transform:rotate(180deg) ; transition:all 0.4s ease`:null;
            fadeOut ? fadeOut.style.cssText ="display:none": null;
            courseDetails ? courseDetails.style.cssText=`height:fit-content ; overflow:visible `:null;
        } else{
            showMoreIcon ? showMoreIcon.style.cssText=`transform:none ; transition:all 0.4s ease`:null;
            fadeOut ? fadeOut.style.cssText ="display:block": null;
            if(screen.width < 576){
                courseDetails ? courseDetails.style.cssText=`height:36rem ; overflow:hidden `:null;
            }else{
                courseDetails ? courseDetails.style.cssText=`height:16rem ; overflow:hidden `:null;
            }
        }
       })
    }
    
  return (
    <>
      <div id="course-details" className={styles["course-details-section"]}>
        <div className={styles["course-details-section__title"]}>تفاصيل الدورة</div>
        <p className={styles["course-details-section__para"]} 
        dangerouslySetInnerHTML={{__html: courseDetailsData.data?.course_details?.description}}  
        >
        </p>
        <div className={styles["course-details-section__read-more"]} onClick={showMoreHandler}>
            {
                showMore ? 
                <>
                    <span>اقرأ المزيد</span>
                    <div id="read-more-icon2">
                    <DropDownIcon color="#af151f"/>

                    </div>
               </>
            :
                 <>
                    <span>اقرأ أقل</span>
                    <div id="read-more-icon2">
                    <DropDownIcon color="#af151f"/>

                    </div>
                 </>
            }

        </div>
        <div id="fadeout2" className={styles["course-details-section--fadeout-effect"]}></div>
      </div>
    </>
  );
}

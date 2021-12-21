import React,{ useState } from "react";
import styles from "./course-details-section.module.css";

export default function CourseDetailsSection() {
    const [showMore, setShowMore] = useState(true);
    
    function showMoreHandler(){
        const showMoreIcon:any = document.getElementById("read-more-icon2");
        const fadeOut:any = document.getElementById("fadeout2");
        const courseDetails:any = document.getElementById("course-details");

        setShowMore(!showMore);
        if(showMore == true){
            showMoreIcon ? showMoreIcon.style.transform ="rotate(180deg)": null;
            showMoreIcon ? showMoreIcon.style.transition = " all 0.4s ease" : null;
            fadeOut ? fadeOut.style.display ="none": null;
            courseDetails ? courseDetails.style.height = "fit-content": null ;
            courseDetails ? courseDetails.style.overflow = "visible": null ;
        } else{
            showMoreIcon ? showMoreIcon.style.transform ="none": null;
            showMoreIcon ? showMoreIcon.style.transition = " all 0.4s ease" : null;
            fadeOut ? fadeOut.style.display ="block": null;
            courseDetails ? courseDetails.style.height = "16rem": null ;
            courseDetails ? courseDetails.style.overflow = "hidden": null ;

        }
    }
  return (
    <>
      <div id="course-details" className={styles["course-details-section"]}>
        <div className={styles["course-details-section__title"]}>تفاصيل الدورة</div>
        <p className={styles["course-details-section__para"]}>
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
        <div className={styles["course-details-section__read-more"]} onClick={showMoreHandler}>
            {
                showMore ? 
                <>
                    <span>اقرأ المزيد</span>
                    <svg id="read-more-icon2" xmlns="http://www.w3.org/2000/svg" width="0.625rem" height="0.375rem" viewBox="0 0 10 5.993">
                        <g id="more" transform="translate(0 5.993) rotate(-90)">
                            <path id="Path_12841" data-name="Path 12841" d="M11.454,4.29a.961.961,0,0,1,.164-.13L15.494.284a.969.969,0,0,1,1.37,1.37L13.525,4.992,16.88,8.347a.968.968,0,1,1-1.369,1.369L11.618,5.824a1.005,1.005,0,0,1-.164-1.534Z" transform="translate(-11.171 -0.001)" fill="#af151f"/>
                        </g>
                    </svg>
                </>
            :
                 <>
                    <span>اقرأ أقل</span>
                    <svg id="read-more-icon2" xmlns="http://www.w3.org/2000/svg" width="0.625rem" height="0.375rem" viewBox="0 0 10 5.993">
                        <g id="more" transform="translate(0 5.993) rotate(-90)">
                            <path id="Path_12841" data-name="Path 12841" d="M11.454,4.29a.961.961,0,0,1,.164-.13L15.494.284a.969.969,0,0,1,1.37,1.37L13.525,4.992,16.88,8.347a.968.968,0,1,1-1.369,1.369L11.618,5.824a1.005,1.005,0,0,1-.164-1.534Z" transform="translate(-11.171 -0.001)" fill="#af151f"/>
                        </g>
                    </svg>
                 </>
            }

        </div>
        <div id="fadeout2" className={styles["course-details-section--fadeout-effect"]}></div>
      </div>
    </>
  );
}

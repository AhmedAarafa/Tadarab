import React, { useState, useEffect } from "react";
import styles from "./course-content.module.css";
import { Accordion , Button , ProgressBar} from "react-bootstrap";
// import {scrollspyHandler} from "./utils"
import {scrollspyHandler} from "../../_Shared/utils/scrollSpy"
import { useDispatch, useSelector } from "react-redux";  
import { UnlockIcon,LessonPlayIcon,ClockIcon,LockIcon,AttachmentsIcon,FileDownloadIcon,CheckCircleIcon } from "common/Icons/Icons";
import playlistSrc from "common/TPlayer/playlist.json";


export default function CourseContent() {

    const [courseDetails, setCourseDetails] = useState<any>([]);
    const courseDetailsData = useSelector((state:any) => state.courseDetailsData);
    const userStatus = useSelector((state:any) => state.userAuthentication);

    useEffect(() => {
        setCourseDetails(courseDetailsData.data || []);
        // return () => {
        //     setCourseDetails([])
        //   }
      }, [courseDetailsData]);


    useEffect(() => {
       scrollspyHandler("course-content");
       return () => {
        window.removeEventListener("resize", () => {
          return;
        });
        setCourseDetails([])

      }
      }, []);

      function durationCalculator(time:any) {
        
        time = Number(time);
        let h = Math.floor(time / 3600);
        let m = Math.floor(time % 3600 / 60);
        let s = Math.floor(time % 3600 % 60);

    return {h, m, s};

    }
        /** dynamic server side variable **/
    // let isPurchased	= false;	// Is the """course""" is purchased by the logged-in user 
    // let isUserLogin	= false;	// if user is logged-in, true elase false
    // let userId		= false;	// if user is logged-in, true elase false
    // let courseTitle	= '(اكسر قيدك (الناقد السلبي';	// the current course title

    // function TPlayerPlayList(){
	// 	// if((TPlayer.dataPlaylist==true)){
	// 		return(
	// 			playlistSrc.map((item:any,index:any)=>{
	// 				var isFree=((item.is_free)?item.is_free:false),
	// 				//code=((item.share_code)?item.share_code:''),
	// 				//is_paid=((isPurchased)?true:is_free),
	// 				is_play=((isPurchased===true)?true:isFree),
	// 				title=((item.title)?item.title:''),lession_class="lession ",
	// 				unlock=((isFree&&!isPurchased)?`<div className="tmark"><span className="text" /><i className="unlock" /></div>`:`<div className="tmark"><i className="unlock" /></div>`),
	// 				tmart=((!is_play)?`<div className="tmark"><i className="lock"></i></div>`:unlock);
	// 				lession_class+=((!is_play)?'paid':'play');lession_class+=((isFree&&!isPurchased)?' free free-lession':'');
	// 				return(
	// 					<a key={index} className={lession_class} data-lession={index} data-play={is_play} onClick={play_video}>
	// 						<i className="tadarab-icon play"></i><div className="ml10 lession-description"><span className="title">{title}</span></div><div dangerouslySetInnerHTML={{__html:tmart}}></div>
	// 					</a>
	// 				)
	// 			})
	// 		)
	// 	// }
	// }
    

  return (
    <>
    <div  className={styles["course-content"]}>
    <div id="course-content" className={styles["course-content__scrollspy-helper"]}></div>

        <div className={styles["course-content__title"]}>
        محتوي الدورة التدريبية
        </div>
        <div className={styles["course-content__course-duration-box"]}>
            <div className={styles["course-content__course-duration-box__courses-number"]}>
                <LessonPlayIcon color="#999" opacity="0.7"/>
                <span> {courseDetailsData.data?.syllabus?.map((item:any)=> item.lectures.length).reduce((prev:any, curr:any) => prev + curr, 0)} </span>
                <span> درس </span>

            </div>
            -
            <div className={styles["course-content__course-duration-box__duration"]}>
               <ClockIcon color="#999" opacity="0.7"/>
                {
                    durationCalculator(
                        courseDetailsData.data?.syllabus?.map((item:any)=> item.total_duration).reduce((prev:any, curr:any) => prev + curr, 0)
                        ).h !== 0 &&
                        <>
                    <span> {durationCalculator(
                    courseDetailsData.data?.syllabus?.map((item:any)=> item.total_duration).reduce((prev:any, curr:any) => prev + curr, 0)
                    ).h
                    } </span>
                    <span> س: </span>
                    </>
                }
                {
                    durationCalculator(
                        courseDetailsData.data?.syllabus?.map((item:any)=> item.total_duration).reduce((prev:any, curr:any) => prev + curr, 0)
                        ).m !== 0 &&
                        <>
                    <span> {durationCalculator(
                    courseDetailsData.data?.syllabus?.map((item:any)=> item.total_duration).reduce((prev:any, curr:any) => prev + curr, 0)
                    ).m
                    } </span>
                    <span> د </span>
                    </>
                }
               

            </div>
        </div>

      <Accordion defaultActiveKey="" className={styles["course-content__accordion"]}>

          {
              courseDetailsData.data?.syllabus?.map((syl:any,i:number)=>{
                  return(

                    <Accordion.Item key={i} eventKey={JSON.stringify(i)}  className={styles["course-content__accordion__item"]}>
                    <Accordion.Header className={styles["course-content__accordion__header"]}>

                        <div className={styles["course-content__accordion__header__details-box"]}>
                            <div className={styles["course-content__accordion__header__group-number"]}>
                            {syl.title}
                            </div>
                            <div className={styles["course-content__accordion__header__details"]}>
                                <span className={styles["course-content__accordion__header__details__lessons-number"]}>
                                    <span> {syl.lectures.length} </span>
                                    <span> دروس </span>
                                </span>
                                <span className={styles["course-content__accordion__header__details__duration"]}>

                                    (
                                    <span> {durationCalculator(syl.total_duration).h !== 0 && durationCalculator(syl.total_duration).h} </span>  
                                       {durationCalculator(syl.total_duration).h !== 0 && " س : "}
                                        
                                        <span> {durationCalculator(syl.total_duration).m !== 0 && durationCalculator(syl.total_duration).m} </span>  
                                        {durationCalculator(syl.total_duration).m !== 0 && " د "}
                                    )
                                    
                                </span>
                            </div>
                        </div>
                    </Accordion.Header>
                    <Accordion.Body className={styles["course-content__accordion__body"]}>
                        {
                            syl.lectures?.map((lec:any,i:number)=>{
                                return(
                                    <div key={i} className={styles["course-content__accordion__body__list-item"]}>
                                        <div className={styles["course-content__accordion__body__list-item__lesson-details-box"]}>
                                            <div className={styles["course-content__accordion__body__list-item__icon"]}>
                                                <LessonPlayIcon color="#be1622" opacity="1"/>
                                                
                                            </div>
                                            <div className={styles["course-content__accordion__body__list-item__lesson-name-duration"]}>
                                                <div>{lec.title}</div>
                                                    <div>
                                                        {durationCalculator(lec.duration).h !==0 &&
                                                         (
                                                        durationCalculator(lec.duration).h.toString().length == 1 ?
                                                         `0${durationCalculator(lec.duration).h}:` 
                                                         :
                                                         `${durationCalculator(lec.duration).h}:`
                                                         ) 
                                                         }
                                                        {durationCalculator(lec.duration).m !==0 &&
                                                         (
                                                        durationCalculator(lec.duration).m.toString().length == 1 ?
                                                         `0${durationCalculator(lec.duration).m}:` 
                                                         :
                                                         `${durationCalculator(lec.duration).m}:`
                                                         ) 
                                                         }
                                                        {durationCalculator(lec.duration).s !==0 &&
                                                         (
                                                        durationCalculator(lec.duration).s.toString().length == 1 ?
                                                         `0${durationCalculator(lec.duration).s}` 
                                                         :
                                                         `${durationCalculator(lec.duration).s}`
                                                         ) 
                                                         }
                                                    
                                                    </div>
                                            </div>
                                        </div>

                                        <div className={styles["course-content__accordion__body__list-item__watch-free"]}>
                                           {
                                               syl.lectures.free && JSON.parse(syl.lectures.free) == true ?
                                               <>
                                               <span> شاهد مجاناً </span>
                                               <UnlockIcon color="#af151f"/>
                                               </>
                                               :
                                               <LockIcon/>
                                           }

                                        </div>
                                    </div>

                                )
                            })
                        }
                      
                    </Accordion.Body>
                    </Accordion.Item>

                  )

              })
          }

            {
                    <Accordion.Item  eventKey="20"  className={styles["course-content__accordion__item"]}>
                    <Accordion.Header className={styles["course-content__accordion__header"]}>

                        <div className={styles["course-content__accordion__header__details-box"]}>
                            <div style={{color:"#af151f"}} className={styles["course-content__accordion__header__group-number"]}>
                            ملفات شرح
                            </div>
                        </div>
                    </Accordion.Header>
                    <Accordion.Body className={styles["course-content__accordion__body"]}>
                        {
                            courseDetailsData.data?.attachments?.map((att:any,i:number)=>{
                                return(
                                    <div key={i} className={styles["course-content__accordion__body__list-item"]}>
                                        <div className={styles["course-content__accordion__body__list-item__lesson-details-box"]}>
                                          
                                            <div className={styles["course-content__accordion__body__list-item__icon"]}>
                                                <AttachmentsIcon />
                                            </div>
                                            
                                            <div className={styles["course-content__accordion__body__list-item__lesson-name-duration"]}>
                                                <div>{att.title}</div>
                                            </div>

                                        </div>

                                        <div style={{cursor:"pointer"}} className={styles["course-content__accordion__body__list-item__download"]}>
                                            <FileDownloadIcon color="#af151f"/>
                                        </div>
                                    </div>
                                )
                            })
                        }
                      
                    </Accordion.Body>
                    </Accordion.Item>
          }
       
      </Accordion>
 

          {/* <div className={styles["purchased-course-playlist"]}>
              <div className={styles["purchased-course-playlist__progress-box"]}>
                  <span>  منهج الدورة  </span>
                  <span>  ( 32% مكتمل )  </span>
                <div className={styles["purchased-course-playlist__progress-box__progress-bar"]}>

                    <ProgressBar now={80} />
                </div>
              </div>

            <Accordion defaultActiveKey="" className={styles["course-content__accordion"]}>
                {
                    courseDetailsData.data?.syllabus?.map((syl:any,i:number)=>{
                        return(

                            <Accordion.Item key={i} eventKey={JSON.stringify(i)}  className={styles["purchased-course-content__accordion__item"]}>
                            <Accordion.Header className={styles["purchased-course-content__accordion__header"]}>

                                <div className={styles["course-content__accordion__header__details-box"]}>
                                    <div className={styles["purchased-course-content__accordion__header__group-number"]}>
                                    {syl.title}
                                    <span>(3/5)</span>
                                    </div>
                                
                                </div>
                            </Accordion.Header>
                            <Accordion.Body className={styles["purchased-course-content__accordion__body"]}>
                                {
                                    syl.lectures.map((lec:any,i:number)=>{
                                        return(
                                            <div key={i} className={styles["purchased-course-content__accordion__body__list-item"]}>
                                                <div className={styles["course-content__accordion__body__list-item__lesson-details-box"]}>
                                                    <div className={styles["purchased-course-content__accordion__body__list-item__icon"]}>
                                                        <CheckCircleIcon color="#9E9DA4" />
                                                        
                                                    </div>
                                                    <div className={styles["purchased-course-content__accordion__body__list-item__lesson-name"]}>
                                                        <div>{lec.title}</div>
                                                    </div>
                                                </div>

                                                <div className={styles["purchased-course-content__accordion__body__list-item__duration"]}>
                                                01:34
                                                </div>
                                            </div>

                                        )
                                    })
                                }
                            
                            </Accordion.Body>
                            </Accordion.Item>

                        )

                    })
                }

            
            </Accordion>
          </div> */}

      <Button className={styles["course-content__show-more-btn"]}>
      أعرض المزيد من الدروس
      </Button>

    </div>
    </>
  );
}

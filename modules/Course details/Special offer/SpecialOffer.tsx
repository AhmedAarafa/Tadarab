/* eslint-disable @next/next/no-img-element */
import React ,{ useState , useEffect} from "react";
import styles from "./special-offer.module.css";
import { Button } from "react-bootstrap";
import { axiosInstance } from "configurations/axios/axiosConfig";
import { ReviewStartIcon, PlusIcon, GiftIcon, CartIcon } from "common/Icons/Icons";
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from "react-redux";  
import { setCartItems } from "configurations/redux/actions/cartItems"; 
import { handleCart } from "modules/_Shared/utils/handleCart";
import { setCheckoutType } from "configurations/redux/actions/checkoutType"; 

export default function SpecialOffer() {
    const [specialBundleData, setSpecialBundleData] = useState<any>();
    // const [dateToCompare, setDateToCompare] = useState(0);
    const [toDisplayValues, setToDisplayValues] = useState<any>([]);
    const [disabled, setDisabled] = useState(false);
    const dispatch = useDispatch();
    const Router = useRouter();
    const { slug } = Router.query;

    useEffect(() => {

            axiosInstance
            .get(`courses/35990/special-bundle/?country_code=${localStorage.getItem("countryCode")}`)
            .then(function (response:any) {
              setSpecialBundleData(response?.data?.data);

              response?.data?.data?.courses?.forEach((course:any)=>{
                if(course.is_in_cart || course.is_purchased){
                    setDisabled(true);
                    return;
                }
              })
              // console.log("response.data.courses",response?.data?.data);
            
              if (document.cookie.indexOf('timer') > -1 ) {
                document.cookie.split('; ').reduce((prev:any, current:any) => {
                    const [name, ...value] = current.split('=');
                    prev[name] = value.join('=');
                    
                    if(prev.timer < (Math.floor(Date.now() / 1000))){
                        
                        let now = new Date();
                        let time = now.getTime();
                          time += response?.data?.data.countdown * 3600 * 1000;
                          now.setTime(time);
                          document.cookie = 
                          'timer=' + ((Math.floor(Date.now() / 1000)) + (response?.data?.data?.countdown*60*60)) + 
                          '; expires=' + (new Date(now)).toUTCString() + 
                          '; path=/';
                          
                          timerHandler((Math.floor(Date.now() / 1000)) + (response?.data?.data?.countdown*60*60));
                   
                      }else{
                          if(prev.timer){
                             timerHandler(prev.timer);
                          } 
                      }
                      return prev;
                    }, {});
  
              }else{
                  
                  let now = new Date();
                  let time = now.getTime();
                  time += response?.data?.data.countdown * 3600 * 1000;
                  now.setTime(time);
                  document.cookie = 
                  'timer=' + ((Math.floor(Date.now() / 1000)) + (response?.data?.data?.countdown*60*60)) + 
                  '; expires=' + (new Date(now)).toUTCString() + 
                  '; path=/';
                  timerHandler((Math.floor(Date.now() / 1000)) + (response?.data?.data?.countdown*60*60));
              }
            })
            .catch(function (error) {
              console.log(error);
            });

        }, []);


    function timerHandler(dateAfter:any) {
        setInterval(() => {
            // get total seconds between the times
            let delta:any = Math.abs(dateAfter - (Math.floor(Date.now() / 1000)));
    
            // calculate (and subtract) whole days
            let days:any = Math.floor(delta / 86400);
            delta -= days * 86400;
    
            // calculate (and subtract) whole hours
            let hours:any = Math.floor(delta / 3600) % 24;
            delta -= hours * 3600;
    
            // calculate (and subtract) whole minutes
            let minutes:any = Math.floor(delta / 60) % 60;
            delta -= minutes * 60;
    
            // what's left is seconds
            let seconds:any = delta ; // in theory the modulus is not required
    
            // days > 0 ? (days < 10 ? days = "0" + days : days = days ) : days = "00";
            // hours > 0 ? (hours < 10 ? hours = "0" + hours : hours = hours ) : hours = "00";
            // minutes > 0 ? (minutes < 10 ? minutes = "0" + minutes : minutes = minutes ) : minutes = "00";
            // seconds > 0 ? (seconds < 10 ? seconds = "0" + seconds : seconds = seconds ) : seconds = "00";
            
            days = days.toString().padStart(2,0);
            hours = hours.toString().padStart(2,0);
            minutes = minutes.toString().padStart(2,0);
            seconds = seconds.toString().padStart(2,0);
            
            setToDisplayValues([days, hours , minutes ,seconds]);
            return {days, hours , minutes ,seconds}
        }, 1000);


    }

    const handleCartActionBtn = (courses:any):any =>{
    dispatch(setCheckoutType("cart"));

    
          const handleCartResponse:any =  handleCart(courses,`courses/35990/special-bundle/?country_code=${localStorage.getItem("countryCode")}`,true);
          handleCartResponse.then(function(firstresponse:any) {
            // console.log("handleCartResponse",firstresponse);
            firstresponse.resp.then(function(response:any){
                setDisabled(true);
              console.log("firstresponse",firstresponse);
              console.log("response,",response);
              setSpecialBundleData(response.data.data);
               dispatch(setCartItems(firstresponse.cartResponse));
            })
          })
       
      }
    
  return (
    <>
    {specialBundleData !== null &&
     JSON.stringify(specialBundleData) !== "{}" &&
     specialBundleData?.courses !== null &&
     JSON.stringify(specialBundleData?.courses) !== "[]" &&

       <div className={styles["special-offer"]}>
        <div className={styles["special-offer__title"]}>
       <GiftIcon/>
        <span>
        عرض خاص جدااا لفترة محدودة
        </span>

        </div>

        <div className={styles["special-offer__cards-outer-box"]}>

            {
                specialBundleData?.courses?.map((course:any,i:number)=>{
                    return(
                        <>
                            <div key={i} className={styles["special-offer__cards-outer-box__card"]}>
                                <div className={styles["special-offer__cards-outer-box__card__course-img"]}>
                                    <img src={course.image} alt="course image" />
                                    <div className={styles["special-offer__cards-outer-box__card__category-chip"]}>
                                        فنون
                                    </div>
                                </div>

                                <div className={styles["special-offer__cards-outer-box__card__trainer-info-box-container"]}>

                                    <div className={styles["special-offer__cards-outer-box__card__trainer-info-box"]}>
                                        <div className={styles["special-offer__cards-outer-box__card__trainer-info-box__trainer-img"]}>
                                            <img src={course.trainer.image} alt="trainer image" />
                                        </div>
                                        <div className={styles["special-offer__cards-outer-box__card__trainer-info-box__info"]}>
                                            <h1 className={styles["special-offer__cards-outer-box__card__trainer-info-box__course-name"]} title={course.title}>
                                           {course.title}
                                            </h1>
                                            <div className={styles["special-offer__cards-outer-box__card__trainer-info-box__trainer-name"]}>
                                            {course.trainer.name_ar}
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles["special-offer__cards-outer-box__card__rating-box"]}>
                                            <span> {course.reviews_average} </span>

                                            {
                                               [...Array(5)].map((review:any,i:number)=>{
                                                   if( i < Math.floor(course.reviews_average)){
                                                       return(
                                                        <ReviewStartIcon key={i}  color="#ffa120"/>
                                                       )
                                                    }else{
                                                       return(
                                                        <ReviewStartIcon key={i}  color="#ccc"/>
                                                       )
                                                   }
                                               })
                                            }
                                           

                                            <span> ({course.reviews_count} تقييم) </span>
                                        </div>
                                        <div className={styles["special-offer__cards-outer-box__card__price"]}>
                                            <span> {course.discounted_price} </span>
                                            <span>{course.currency_code} </span>
                                        </div>
                                        {
                                            course.price > course.discounted_price && 
                                        <div className={styles["special-offer__cards-outer-box__card__old-price"]}>
                                            <span> {course.price} </span>
                                            <span>{course.currency_code}</span>
                                        </div>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className={styles["special-offer__cards-outer-box__plus"]}>
                                <div>

                                <PlusIcon/>
                                </div>
                            </div>
                        </>
                    )
                })
            }
          
            
            <div className={styles["special-offer__cards-outer-box__card__checkout-box"]}>
                <div className={styles["special-offer__cards-outer-box__card__checkout-box__prices-box"]}>
                    <div className={styles["special-offer__cards-outer-box__card__checkout-box__prices-box__price"]}>
                        <span> 
                        { 
                           specialBundleData?.discounted_price
                          }
                             </span>
                        <span> {specialBundleData?.currency_code} </span>
                    </div>
                    {
                        specialBundleData?.price >
                        specialBundleData?.discounted_price
                        &&
                        <>
                     
                        <div className={styles["special-offer__cards-outer-box__card__checkout-box__prices-box__old-price"]}>
                    <span> بدلاً من </span>  
                        <span>
                        { 
                            specialBundleData?.price
                            }
                        </span>
                        <span> {specialBundleData?.currency_code} </span>
                        </div>

                        <div className={styles["special-offer__cards-outer-box__card__checkout-box__prices-box__discount"]}>
                        هتوفر
                        <span> {Math.ceil(100-((specialBundleData?.discounted_price/specialBundleData?.price)*100))} % </span>
                        من خلال العرض
                        </div>
                    </>
                    }
                </div>

                <div className={styles["special-offer__cards-outer-box__card__offer-duration-checkout-box"]}>
                    <div className={styles["special-offer__cards-outer-box__card__offer-duration-box"]}>
                        <div className={styles["special-offer__cards-outer-box__card__offer-duration-box__offer-available"]}>
                            <div>العرض</div>
                            <div>متاح خلال</div>
                        </div>
                        <div>
                            <div className={styles["special-offer__cards-outer-box__card__offer-duration-box__countdown-box"]}>
                                <div className={styles["special-offer__cards-outer-box__card__offer-duration-box__countdown-box__countdown"]}>
                                    <div>يوم</div>
                                    <div>{toDisplayValues[0]}</div>
                                </div>
                                <div className={styles["special-offer__cards-outer-box__card__offer-duration-box__countdown-box__separator"]}>
                                    :
                                </div>
                                <div className={styles["special-offer__cards-outer-box__card__offer-duration-box__countdown-box__countdown"]}>
                                    <div>ساعة</div>
                                    <div>
                                    {toDisplayValues[1]}
                                    </div>
                                </div>
                                <div className={styles["special-offer__cards-outer-box__card__offer-duration-box__countdown-box__separator"]}>
                                    :
                                </div>
                                <div className={styles["special-offer__cards-outer-box__card__offer-duration-box__countdown-box__countdown"]}>
                                    <div>دقيقة</div>
                                    <div>
                                    {toDisplayValues[2]}
                                    </div>
                                </div>
                                <div className={styles["special-offer__cards-outer-box__card__offer-duration-box__countdown-box__separator"]}>
                                    :
                                </div>
                                <div className={styles["special-offer__cards-outer-box__card__offer-duration-box__countdown-box__countdown"]}>
                                    <div>ثانية</div>
                                    <div>
                                    {toDisplayValues[3]} 
                                    </div> 
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="w-100">
                        <Button disabled={disabled} onClick={()=>{handleCartActionBtn(specialBundleData?.courses)}}
                         className={styles["special-offer__cards-outer-box__card__add-to-cart-btn"]}>
                        <CartIcon color="#fff"/>

                        <span>
                        احصل على العرض
                        </span>

                        </Button>
                    </div>
                </div>
            </div>
        </div>
       </div>
     }
    </>
  );
}

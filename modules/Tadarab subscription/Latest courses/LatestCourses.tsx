/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState, useRef } from "react";
import styles from "./latest-courses.module.css";
import {
  Row,
  Col,
  Button,
  Card
} from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import 'tippy.js/dist/tippy.css';
import Link from 'next/link';
import { axiosInstance } from "configurations/axios/axiosConfig";
import { ChevronLeftIcon, LearnersIcon, TickIcon, CartIcon, TvIcon, FavouriteIcon, AddedToCartIcon, AddedToFavouriteIcon } from "common/Icons/Icons";
import { useDispatch, useSelector } from "react-redux";
import Router from "next/router";
import { setCartItems } from "configurations/redux/actions/cartItems";
import withAuth from "configurations/auth guard/AuthGuard";
import { handleFav } from "modules/_Shared/utils/handleFav";
import { handleCart } from "modules/_Shared/utils/handleCart";
import { GAProductClickEventHandler } from "modules/_Shared/utils/GAEvents";
import { setCheckoutType } from "configurations/redux/actions/checkoutType";
import { toggleLoader } from "modules/_Shared/utils/toggleLoader";
import { setHomePageData } from "configurations/redux/actions/homePageData";
import { FBPixelEventsHandler } from 'modules/_Shared/utils/FBPixelEvents';

function LatestCourses() {
  SwiperCore.use([Navigation]);
  const homePageData = useSelector((state: any) => state.homePageData);
  const userStatus = useSelector((state: any) => state.userAuthentication);
  const cartItems = useSelector((state: any) => state.cartItems);

  const [localCartItems, setLocalCartItems] = useState<any>([]);
  const [isFnExecuted, setIsFnExecuted] = useState(false);
  const [latestCourses, setLatestCourses] = useState<any>([]);
  const [disabledCartBtns, setDisabledCartBtns] = useState<any>([]);
  const [filterType, setFilterType] = useState("best-seller");
  // const [cartItems, setCartItems] = useState<any>([]);
  const dispatch = useDispatch();
  const homePageCoursesRef = useRef([]);
  const themeState = useSelector((state: any) => state.themeState.theme);


  const handleFilterType = (type: string) => {
    setFilterType(type);
    axiosInstance
      .get(`home/courses/?type=${type}`)
      /* home/courses/?type=${type} */
      .then(function (response: any) {
        setLatestCourses(response.data.data);
        // console.log("response.data.data.courses",response.data.data.courses);
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  const handleFavActionBtn = (course: any): any => {
    if (userStatus.isUserAuthenticated == true) {
      const handleFavResponse: any = handleFav(course, `home`);
      handleFavResponse.then(function (response: any) {
        setLatestCourses(response.data.data.best_seller_courses);
      })
    } else {
      Router.push({
        pathname: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}sign-in`,
        query: { from: "subscription" }
      })
    }

  }

  const handleCartActionBtn = (course: any): any => {
    setDisabledCartBtns([...disabledCartBtns, course.id]);
    setTimeout(() => {
      setDisabledCartBtns(disabledCartBtns.filter((b: any) => b !== course.id));
    }, 5000);
    dispatch(setCheckoutType("cart"));

    // if(userStatus?.isUserAuthenticated == true){
    const handleCartResponse: any = handleCart([course], `home`, false);
    handleCartResponse.then(function (firstresponse: any) {
      firstresponse.resp.then(function (response: any) {
        setLatestCourses(response.data.data.best_seller_courses);
        dispatch(setCartItems(firstresponse.cartResponse));
      })
    })
  }

  useEffect(() => {

    setLatestCourses(homePageData.data?.best_seller_courses || []);
    const localStorageItems: any = localStorage.getItem("cart");

    if (localStorageItems !== "[]" && localStorageItems !== "null" && localStorageItems !== "undefined") {

      axiosInstance
        .get(`courses/?course_ids=${localStorageItems?.replace(/[\[\]']+/g, '')}`)
        .then(function (response: any) {
          // console.log(response);
          let newArray: any = homePageData?.data?.best_seller_courses || [];
          (response?.data?.data || []).forEach((element: any) => {
            newArray.forEach((ele: any) => {
              if (element.id === ele.id) {
                ele.is_in_cart = true;
                setLatestCourses([...newArray]);
              }
            });
          });

        })
        .catch(function (error) {
          console.log(error);
        });
    }

  }, [homePageData]);

  useEffect(() => {
    toggleLoader("show");

    axiosInstance
      .get(`home`)
      .then(function (response: any) {
        console.log("response", response);

        dispatch(setHomePageData(response.data.data));
        FBPixelEventsHandler(response.data.fb_tracking_events, null);
        toggleLoader("hide");
      })
      .catch(function (error: any) {
        toggleLoader("hide");
        console.log(error);
      });
  }, []);

  const handlePlacement = () => {

    if (!isFnExecuted) {
      // to capture all the carousel cards
      const trigger: any = document.querySelectorAll(
        '[id^="latest-courses-card"]'
      );

      // loop over them to control the hover effect per each card
      trigger.forEach((element: any) => {

        element.addEventListener("mouseover", function (event: any) {
          // event.stopPropagation();

          if (window.innerWidth > 1024) {
            // const observer = new MutationObserver((mutations, obs) => {
            let relatedPopover: any = document.getElementById(`popover-${element.id}`);
            let relatedWrapper: any = document.getElementById(`wrapper-${element.id}`);

            const cardRightBoundary =
              window.innerWidth - element.getClientRects()[0].left;
            const cardLeftBoundary =
              element.getClientRects()[0].left;

            if (cardRightBoundary > cardLeftBoundary) {
              console.log("right");
              relatedWrapper.style.cssText = `left: 100% ;
                   bottom: -${((relatedWrapper?.offsetHeight - element?.offsetHeight) / 2)}px`;
              relatedPopover.classList.remove(styles["latest-courses__popover-container--left"]);
              relatedPopover.classList.add(styles["latest-courses__popover-container--right"]);
            } else if (cardRightBoundary < cardLeftBoundary) {
              console.log("left");
              relatedWrapper.style.cssText = `right: 100%;
                   bottom: -${((relatedWrapper?.offsetHeight - element?.offsetHeight) / 2)}px`;
              relatedPopover.style.cssText = `left: 0%;`;
              relatedPopover.classList.remove(styles["latest-courses__popover-container--right"]);
              relatedPopover.classList.add(styles["latest-courses__popover-container--left"]);
            }
          }
        });

      });

      setIsFnExecuted(true);
    }
  }

  const handleZindex = (status: any) => {
    const seeMoreBtn: any = document.getElementById("see-more");
    const departmentsList: any = document.getElementById("departments-list");
    if (status == 'high') {
      seeMoreBtn.style.cssText = `z-index:5;`
      departmentsList.style.cssText = `z-index:5;`
    } else {
      seeMoreBtn.style.cssText = `z-index:1;`
      departmentsList.style.cssText = `z-index:1;`

    }
  }



  return (
    <>
      <Row className={styles["latest-courses"]}>
        <Col xs={12} className={styles["latest-courses__title"]}>
          <span>استكشف </span>
          <span>الدورات</span>
        </Col>
        <Col
          xs={{ span: 12, order: 1 }} sm={9}
          className="d-flex align-items-center justify-content-start"
        >
          <ul id="departments-list" className={styles["latest-courses__departments-list"]}>
            <li onClick={() => { handleFilterType("best-seller") }}
              className={`${styles["latest-courses__departments-list__item"]} ${filterType == "best-seller" && styles["latest-courses__departments-list__item--active"]}`}>
              الأكثر مبيعاً
            </li>
            <li onClick={() => { handleFilterType("latest") }}
              className={`${styles["latest-courses__departments-list__item"]} ${filterType == "latest" && styles["latest-courses__departments-list__item--active"]}`}>
              أحدث الدورات
            </li>
            <li onClick={() => { handleFilterType("free") }}
              className={`${styles["latest-courses__departments-list__item"]} ${filterType == "free" && styles["latest-courses__departments-list__item--active"]}`}>
              الدورات المجانية
            </li>
          </ul>
        </Col>

        <Col xs={{ span: 12, order: 3 }} sm={{ span: 3, order: 1 }} className={styles["latest-courses__see-more-btn-col"]}>
          <Button className={styles["latest-courses__see-more-btn"]} id="see-more"
            onClick={() => { Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}courses`) }}>
            اعرض المزيد
            <ChevronLeftIcon color={ themeState == "light" ? "#af151f" : "#f5f5f5"} />
          </Button>
        </Col>

        <Col xs={{ span: 12, order: 2 }} className={styles["latest-courses__cards-carousel"]}>

          <Swiper
            dir="rtl"
            slidesPerView={5}
            spaceBetween={0}
            navigation={true}
            pagination={{ clickable: true }}
            breakpoints={{

              "50": {
                slidesPerView: 1,
              },
              "576": {
                slidesPerView: 3,
              },
              "981": {
                slidesPerView: 4,
              },
              "1201": {
                slidesPerView: 5,
              },

            }}
            className="mySwiper">

            {
              latestCourses?.map((course: any, i: number) => {
                return (
                  <SwiperSlide key={i}>

                    <Card onMouseMove={() => {
                      handleZindex("low");
                      handlePlacement();
                    }} onMouseOut={() => { handleZindex("high") }}
                      id={`latest-courses-card${i}`}
                      className={
                        styles["latest-courses__cards-carousel__course-card"]
                      }>
                      <div className={
                        styles["popover-wrapper"]
                      }
                        id={`wrapper-latest-courses-card${i}`}
                        onMouseMove={() => { handleZindex("low") }} onMouseOut={() => { handleZindex("high") }}>

                        <div id={`popover-latest-courses-card${i}`}
                          className={styles["latest-courses__popover-container"]}
                        >

                          <div>
                            <Link href={`/course/${course.slug}`}>
                              <div
                                className={
                                  styles["latest-courses__popover-container__title"]
                                }
                                title={course.title}
                              >
                                {course.title}
                              </div>
                            </Link>

                            {course.subscribers_count !== null ?
                              <div className={styles["latest-courses__popover-container__learners"]}>
                                <LearnersIcon color="#777" />
                                <span>{course.subscribers_count}</span>
                                <span>دورة</span>
                              </div>
                              :
                              null
                            }
                            <div
                              className={
                                styles["latest-courses__popover-container__brief"]
                              }
                              title={course.details}>
                              {course.details}
                            </div>

                          </div>

                          <div>


                            <div
                              className={
                                styles[
                                "latest-courses__popover-container__what-you-will-learn-title"
                                ]
                              }
                            >
                              ماذا ستتعلم في الدورة؟
                            </div>
                            {course.key_points?.slice(0, 4).map((kp: string, i: number) => {
                              return (
                                <div key={i}
                                  className={
                                    styles[
                                    "latest-courses__popover-container__what-you-will-learn"
                                    ]
                                  }
                                >
                                  <div>

                                    <TickIcon />
                                  </div>


                                  <span>{kp}</span>
                                </div>

                              )
                            })
                            }

                          </div>

                          {
                            course.key_points.length > 4 ?
                              <Link href={`/course/${course.slug}`}>

                                <div className={styles["latest-courses__show-more-link"]}>
                                  اعرض المزيد
                                </div>
                              </Link>
                              :
                              null
                          }

                          <div className={styles["latest-courses__popover-container__btns"]}>

                            <Link href={`/course/${course.slug}`}>
                              <Button className={styles["latest-courses__popover-container__btns__details-btn"]}>التفاصيل</Button>
                            </Link>
                            <Button className={styles["latest-courses__popover-container__btns__add-to-cart-btn"]}>
                              {
                                course.discounted_price == 0 ?
                                  <TvIcon color="#fff" />
                                  :
                                  course.is_in_cart ?
                                    <AddedToCartIcon color="#fff" />
                                    :
                                    <CartIcon color="#fff" />
                              }
                              {
                                course.discounted_price == 0 ?
                                  <span>
                                    ابدأ الآن مجانًا
                                  </span>
                                  :
                                  course.is_in_cart ?
                                    <span> تمت الإضافة </span>
                                    :
                                    <>
                                      <span> أضف للسلة </span>
                                    </>
                              }
                            </Button>
                          </div>


                        </div>

                      </div>

                      {
                        course.categories[0] !== undefined && course.categories[0].title !== null && course.categories[0].title !== "" &&

                        <div
                          className={
                            styles[
                            "latest-courses__cards-carousel__course-card__category-chip"
                            ]
                          }
                          style={{ backgroundColor: `${course.categories[0] !== undefined && course.categories[0].color}` }}
                        >
                          {course.categories[0] !== undefined && course.categories[0].title}
                        </div>

                      }


                      <Link href={`/course/${course.slug}`}>
                        <a onClick={() => { GAProductClickEventHandler(course, i) }}>

                          <Card.Img
                            variant="top"
                            src={course.image}
                            alt="course image"
                            className={
                              styles[
                              "latest-courses__cards-carousel__course-card__course-img"
                              ]
                            }
                          />

                        </a>
                      </Link>

                      <Card.Body
                        className={
                          styles[
                          "latest-courses__cards-carousel__course-card__card-body"
                          ]
                        }
                      >
                        <div style={{ borderBottom: course.is_in_user_subscription && "none" }}
                          className={
                            styles[
                            "latest-courses__cards-carousel__course-card__card-body__card-header"
                            ]
                          }
                        >
                          <div
                            className={
                              styles[
                              "latest-courses__cards-carousel__course-card__card-body__card-header__trainer-img-box"
                              ]
                            }
                          >
                            <Link href={`/trainer/${course.trainer?.slug}`}>

                              <img loading="lazy"
                                src={course.trainer.image}
                                alt="trainer image"
                              />
                            </Link>
                          </div>
                          <div
                            className={
                              styles[
                              "latest-courses__cards-carousel__course-card__card-body__card-header__course-details"
                              ]
                            }
                          >
                            <Link href={`/course/${course.slug}`}>
                              <div onClick={() => { GAProductClickEventHandler(course, i) }}
                                title={course.title}
                                className={
                                  styles[
                                  "latest-courses__cards-carousel__course-card__card-body__card-header__course-details__title"
                                  ]
                                }
                              >
                                {course.title}
                              </div>
                            </Link>
                            <Link href={`/trainer/${course.trainer?.slug}`}>

                              <div title={course.trainer.name_ar}
                                className={
                                  styles[
                                  "latest-courses__cards-carousel__course-card__card-body__card-header__course-details__author"
                                  ]
                                }
                              >
                                {course.trainer.name_ar}
                              </div>
                            </Link>
                          </div>
                        </div>

                        <div
                          className={
                            styles[
                            "latest-courses__cards-carousel__course-card__card-body__checkout-details"
                            ]
                          }
                        >
                          <div >
                            <div
                              className={
                                styles[
                                "latest-courses__cards-carousel__course-card__card-body__checkout-details__price-container"
                                ]
                              }
                            >
                              {course.discounted_price !== 0 && !course.is_purchased && <span
                                className={
                                  styles[
                                  "latest-courses__cards-carousel__course-card__card-body__checkout-details__price-container__currency"
                                  ]
                                }
                              >
                                {!course.is_in_user_subscription && course.currency_symbol}
                              </span>}

                              <span
                                className={
                                  styles[
                                  "latest-courses__cards-carousel__course-card__card-body__checkout-details__price-container__price"
                                  ]
                                }
                              >
                                {course.is_purchased && !course.is_in_user_subscription && "تم الشراء"}
                                {
                                  !course.is_purchased && !course.is_in_user_subscription && (course.discounted_price == 0 ? "مجانًا" : course.discounted_price)
                                }
                                {
                                  course.is_in_user_subscription &&
                                  <Link href={`/course/${course.slug}`}>
                                    <span className={styles["watch-subscribed-course"]}>
                                      شاهد الدورة
                                    </span>
                                  </Link>

                                }
                              </span>

                            </div>
                            {
                              (course.price > course.discounted_price) && !course.is_purchased &&
                              <div
                                className={
                                  styles[
                                  "latest-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container"
                                  ]
                                }
                              >
                                <span
                                  className={
                                    styles[
                                    "latest-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__currency"
                                    ]
                                  }
                                >
                                  {course.currency_symbol}
                                </span>
                                <span
                                  className={
                                    styles[
                                    "latest-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__price"
                                    ]
                                  }
                                >
                                  {course.price}
                                </span>

                              </div>
                            }


                          </div>

                          <div >
                            {!course.is_purchased && !course.is_in_user_subscription && <Button disabled={course.is_in_cart || disabledCartBtns.includes(course.id)} variant={""}
                              className={
                                styles[
                                "latest-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                                ]
                              }
                            >
                              <div onClick={() => handleCartActionBtn(course)}
                                className={styles["latest-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn__cart-icon"]}>
                                {/* {
                                    // console.log(localCartItems.includes(course.id))
                                    console.log(cartItems.data?.map((item:any)=>{
                                     return item.id == course.id
                                    }))
                                    
                                  } */}
                                {
                                  course.discounted_price == 0 ?
                                    <TvIcon color="#222" />
                                    :
                                    course.is_in_cart || disabledCartBtns.includes(course.id) ?
                                      <AddedToCartIcon color="#222" />
                                      :
                                      <CartIcon color="#222" />
                                }
                              </div>

                            </Button>}
                            <Button
                              className={
                                styles[
                                "latest-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                                ]
                              }
                            >

                              <div onClick={() => handleFavActionBtn(course)}
                                className={styles["latest-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn__fav-icon"]}>
                                {
                                  course.is_in_favorites ?
                                    <AddedToFavouriteIcon color="#af151f" />
                                    :
                                    <FavouriteIcon color="#222" />
                                }

                              </div>


                            </Button>
                          </div>
                        </div>
                      </Card.Body>

                    </Card>

                  </SwiperSlide>
                );
              })
            }

          </Swiper>
        </Col>
      </Row>
    </>
  );
}


export default withAuth(LatestCourses);

/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState, useRef } from "react";
import styles from "./season-courses.module.css";
import Link from 'next/link';
import { Row, Col, Button, Card } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper';
import "swiper/css";
import { axiosInstance } from "configurations/axios/axiosConfig";
import { ChevronLeftIcon, LiveIcon, PlayIcon, CartIcon, FavouriteIcon, AddedToCartIcon, ContainedBellIcon, AddedToFavouriteIcon, BellIcon } from "common/Icons/Icons";
import { useDispatch, useSelector } from "react-redux";
import Router from "next/router";
import { handleFav } from "modules/_Shared/utils/handleFav";
import { handleCart } from "modules/_Shared/utils/handleCart";
import { setCartItems } from "configurations/redux/actions/cartItems";
import { setCheckoutType } from "configurations/redux/actions/checkoutType";
import { tokenValidationCheck } from "modules/_Shared/utils/tokenValidationCheck";
import { toggleLoader } from "modules/_Shared/utils/toggleLoader";

export default function SeasonCourses() {
    SwiperCore.use([Navigation]);
    const dispatch = useDispatch();

    const homePageData = useSelector((state: any) => state.homePageData);
    const [liveCourses, setLiveCourses] = useState<any>([]);
    const [disabledCartBtns, setDisabledCartBtns] = useState<any>([]);
    const userStatus = useSelector((state: any) => state.userAuthentication);
    const liveCoursesRef = useRef([]);


    const handleSubscribeBtn = (course: any): any => {
        if (userStatus.isUserAuthenticated == true) {

            if (course.is_subscribed_to == false) {
                axiosInstance
                    .post(`users/live-subscriptions`, { "course_id": course.id })
                    .then((response: any) => {
                        if (tokenValidationCheck(response)) {
                            console.log("Response", response);
                            axiosInstance
                                .get(`home`)
                                .then(function (response: any) {
                                    setLiveCourses(response.data.data.live_courses);
                                })
                                .catch(function (error) {
                                    console.log(error);
                                });

                        }
                    })
                    .catch((error: any) => {
                        console.log("error", error);
                    });
            } else {
                axiosInstance
                    .delete(`users/live-subscriptions`, { data: { "course_id": course.id } })
                    .then((response: any) => {
                        console.log("Response", response);
                        axiosInstance
                            .get(`home`)
                            .then(function (response: any) {
                                setLiveCourses(response.data.data.live_courses);
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    })
                    .catch((error: any) => {
                        console.log("error", error);
                    });

            }
        } else {
            Router.push({
                pathname: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}sign-in`,
                query: { from: "homepage" }
            })

        }
        setLiveCourses([...liveCourses]);
    }
    const handleCartActionBtn = (course: any): any => {
        setDisabledCartBtns([...disabledCartBtns, course.id]);
        setTimeout(() => {
            setDisabledCartBtns(disabledCartBtns.filter((b: any) => b !== course.id));
        }, 5000);
        dispatch(setCheckoutType("cart"));

        const handleCartResponse: any = handleCart([course], `home`, false);
        handleCartResponse.then(function (firstresponse: any) {
            firstresponse.resp.then(function (response: any) {
                setLiveCourses(response.data.data.live_courses);
                dispatch(setCartItems(firstresponse.cartResponse));
            })
        })
    }
    const liveCourseWatchingHandler = (slug: string, webinarType: any) => {
        if (webinarType == "soon") {
            Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}webinar/${slug}`);
        } else {
            if (userStatus.isUserAuthenticated) {
                Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}webinar/${slug}`);
            } else {
                Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}sign-up/?from=webinar/${slug}`);
            }
        }
    }

    // useEffect(() => {

    //     setLiveCourses(homePageData.data?.live_courses || []);
    //     console.log("homePageData.data?.live_courses  season",homePageData.data?.live_courses);

    //     const localStorageItems: any = localStorage.getItem("cart");
    //     if (localStorageItems !== "[]" && localStorageItems !== "null" && localStorageItems !== "undefined") {
    //       axiosInstance
    //         .get(`courses/?course_ids=${localStorageItems?.replace(/[\[\]']+/g, '')}`)
    //         .then(function (response: any) {
    //           let newArray: any = homePageData.data?.live_courses;
    //           response.data.data.forEach((element: any) => {
    //             newArray.forEach((ele: any) => {
    //               if (element.id === ele.id) {
    //                 ele.is_in_cart = true;
    //               }
    //             });
    //           });
    //           setLiveCourses([...newArray]);

    //         })
    //         .catch(function (error) {
    //           console.log(error);
    //         });
    //     }

    //   }, [homePageData]);

    useEffect(() => {
        toggleLoader("show");

        axiosInstance
            .get(`courses/?page=1&limit=20&type=live`)
            .then(function (response: any) {
                setLiveCourses(response?.data?.data?.courses);
                console.log("responseresponse", response);
                toggleLoader("hide");
            })
            .catch(function (error) {
                toggleLoader("hide");
                console.log(error);
            });

    }, []);

    return (
        <>
            {
                (liveCourses !== null && JSON.stringify(liveCourses) !== "[]") &&

                <Row className={styles["season-courses"]}>
                    <Col xs={{ span: 12, order: 1 }} sm={{ span: 9, order: 1 }} className={styles["season-courses__title"]}>
                        <h2>
                            <span> الدورات </span>
                            <span> المباشرة </span>
                        </h2>
                    </Col>
                    <Col xs={{ span: 12, order: 3 }} sm={{ span: 3, order: 1 }} className={styles["season-courses__see-more-btn-col"]}>

                        <Button className={styles["season-courses__see-more-btn"]}
                            onClick={() => { Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}courses/?type=live`) }}
                        >
                            اعرض المزيد
                            <ChevronLeftIcon color="#af151f" />

                        </Button>

                    </Col>

                    <Col xs={{ span: 12, order: 2 }} sm={{ span: 12, order: 2 }} className={styles["season-courses__cards-carousel"]}>
                        <Swiper dir="rtl" slidesPerView={4} navigation={true} pagination={{ "clickable": true }}
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
                            }} className="mySwiper">

                            {liveCourses?.map((lc: any, i: number) => {
                                return (
                                    <SwiperSlide key={i}>
                                        <Card className={`${lc.price == 0 ? styles["season-courses__cards-carousel__card"] : styles["season-courses__cards-carousel__card--paid"]} 
                    `}>
                                            {lc.categories[0] !== undefined && lc.categories[0].title !== null && lc.categories[0].title !== "" &&

                                                <div
                                                    className={
                                                        styles[
                                                        "season-courses__cards-carousel__course-card__category-chip"
                                                        ]
                                                    }
                                                    style={{ backgroundColor: `${lc.categories[0] !== undefined && lc.categories[0].color}` }}
                                                >
                                                    {lc.categories[0] !== undefined && lc.categories[0].title}
                                                </div>
                                            }
                                            <div
                                                className={
                                                    styles[
                                                    "season-courses__cards-carousel__course-card__duration-chip"
                                                    ]
                                                }
                                            >
                                                <div>
                                                    {lc.full_date == Math.floor(Date.now() / 1000) && <LiveIcon />}
                                                </div>
                                                <div>

                                                    {lc.full_date == Math.floor(Date.now() / 1000) ? <span>مباشر الآن</span> : <span>{lc.short_date}</span>}
                                                </div>
                                            </div>

                                            {/* <Link href={`/webinar/${lc.slug}`}> */}
                                            <Card.Img onClick={() => { liveCourseWatchingHandler(lc.slug, lc.webinar_type) }} variant="top" src="images/eman.png" alt='trainer image'
                                                className={styles["season-courses__cards-carousel__card__trainer-img"]} />
                                            {/* </Link> */}
                                    
                                            {(lc.webinar_type == "live" || lc.webinar_type == "replay") && <div className={styles["season-courses__cards-carousel__card__live-icon"]}>
                                                <PlayIcon />

                                            </div>}
                                        </Card>
                                    </SwiperSlide>

                                )
                            })
                            }
                        </Swiper>
                    </Col>
                </Row>
            }
        </>
    )
}

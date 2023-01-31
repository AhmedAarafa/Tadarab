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
import trainersList from './TrainersInfo.json';

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
                // (liveCourses !== null && JSON.stringify(liveCourses) !== "[]") &&

                <Row className={styles["season-courses"]}>
                    <Col xs={{ span: 12, order: 1 }} sm={{ span: 9, order: 1 }} className={styles["season-courses__title"]}>
                        <h2>
                            <span>دورات موسم تدرب  </span>
                            <div>
                                ابتداءً من 22 أكتوبر
                            </div>
                        </h2>
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
                                    slidesPerView: 3,
                                },
                                "1201": {
                                    slidesPerView: 3,
                                },
                            }} className="mySwiper">

                            {trainersList?.map((lc: any, i: number) => {
                                return (
                                    <>
                                        <SwiperSlide key={i}>
                                            <Card className={`${styles["season-courses__cards-carousel__card--paid"]}`}>

                                                <Card.Img variant="top" src={lc?.img_src} alt='trainer image'
                                                    className={styles["season-courses__cards-carousel__card__trainer-img"]} />

                                            </Card>
                                        </SwiperSlide>
                                    </>

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

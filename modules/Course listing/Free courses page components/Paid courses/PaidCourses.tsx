/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState, useRef } from "react";
import styles from "./paid-courses.module.css";
import {
    Row,
    Col,
    Button,
    Card
} from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import Link from 'next/link';
import { useDispatch, useSelector } from "react-redux";
import Router from "next/router";
import {
    ChevronLeftIcon, LearnersIcon, TickIcon, CartIcon, TvIcon,
    FavouriteIcon, AddedToCartIcon, AddedToFavouriteIcon
} from "common/Icons/Icons";
import { FBPixelEventsHandler } from 'modules/_Shared/utils/FBPixelEvents';
import { axiosInstance } from "configurations/axios/axiosConfig";
import { GAProductClickEventHandler } from "modules/_Shared/utils/GAEvents";

export default function PaidCourses() {
    SwiperCore.use([Navigation]);
    const [paidCourses, setPaidCourses] = useState<any>([]);
    const [isFnExecuted, setIsFnExecuted] = useState(false);
    const [disabledCartBtns, setDisabledCartBtns] = useState<any>([]);
    const userStatus = useSelector((state: any) => state.userAuthentication);
    const themeState = useSelector((state: any) => state.themeState.theme);
    const dispatch = useDispatch();


    useEffect(() => {
        axiosInstance
            .get(`home`)
            .then(function (response: any) {
                FBPixelEventsHandler(response.data.fb_tracking_events, null);
                setPaidCourses(response?.data?.data?.best_seller_courses);
                // toggleLoader("hide");
            })
            .catch(function (error: any) {
                // toggleLoader("hide");
                console.log(error);
            });
    }, []);

    const handlePlacement = () => {

        if (!isFnExecuted) {
            // to capture all the carousel cards
            const trigger: any = document.querySelectorAll(
                '[id^="paid-courses-card"]'
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
                            relatedWrapper.style.cssText = `left: 105% ;
                       bottom: -${((relatedWrapper?.offsetHeight - element?.offsetHeight) / 2)}px`;
                            relatedPopover.classList.remove(styles["paid-courses__popover-container--left"]);
                            relatedPopover.classList.add(styles["paid-courses__popover-container--right"]);
                        } else if (cardRightBoundary < cardLeftBoundary) {
                            console.log("left");
                            relatedWrapper.style.cssText = `right: 100%;
                       bottom: -${((relatedWrapper?.offsetHeight - element?.offsetHeight) / 2)}px`;
                            relatedPopover.style.cssText = `left: -3%;`;
                            relatedPopover.classList.remove(styles["paid-courses__popover-container--right"]);
                            relatedPopover.classList.add(styles["paid-courses__popover-container--left"]);
                        }
                    }
                });

            });

            setIsFnExecuted(true);
        }
    }

    const handleZindex = (status: any) => {
        const seeMoreBtn: any = document.getElementById("see-more");
        const titleText: any = document.getElementById("title");

        if (status == 'high') {
            seeMoreBtn.style.cssText = `z-index:5;`
            titleText.style.cssText = `z-index:5;`
        } else {
            seeMoreBtn.style.cssText = `z-index:1;`
            titleText.style.cssText = `z-index:1;`
        }
    }

    return (
        <>
            <Row className={styles["paid-courses"]}>
                <Col id="title" xs={{ span: 12, order: 1 }} sm={{ span: 9, order: 1 }} className={styles["paid-courses__title"]}>
                    <span>اكتشف أفضل الدورات المدفوعة</span>
                </Col>

                <Col xs={{ span: 12, order: 3 }} sm={{ span: 3, order: 2 }} className={styles["paid-courses__see-more-btn-col"]}>
                    <Button className={styles["paid-courses__see-more-btn"]} id="see-more"
                        onClick={() => { Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}courses`) }}>
                        اعرض المزيد
                        <ChevronLeftIcon color={themeState == "light" ? "#af151f" : "#f5f5f5"} />
                    </Button>
                </Col>

                <Col xs={{ span: 12, order: 2 }} className={styles["paid-courses__cards-carousel"]}>

                    <Swiper
                        dir="rtl"
                        initialSlide={1}
                        slidesPerView={5}
                        spaceBetween={0}
                        navigation={true}
                        pagination={{ clickable: true }}
                        breakpoints={{

                            "50": {
                                slidesPerView: 1.15,
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
                            paidCourses?.map((course: any, i: number) => {
                                return (
                                    <SwiperSlide key={i}>

                                        <Card onMouseMove={() => {
                                            handleZindex("low");
                                            handlePlacement();
                                        }} onMouseOut={() => { handleZindex("high") }}
                                            id={`paid-courses-card${i}`}
                                            className={
                                                styles["paid-courses__cards-carousel__course-card"]
                                            }>
                                            <div className={
                                                styles["popover-wrapper"]
                                            }
                                                id={`wrapper-paid-courses-card${i}`}
                                                onMouseMove={() => { handleZindex("low") }} onMouseOut={() => { handleZindex("high") }}>

                                                <div id={`popover-paid-courses-card${i}`}
                                                    className={styles["paid-courses__popover-container"]}
                                                >

                                                    <div>
                                                        <Link href={`/course/${course.slug}`}>
                                                            <div
                                                                className={
                                                                    styles["paid-courses__popover-container__title"]
                                                                }
                                                                title={course.title}
                                                            >
                                                                {course.title}
                                                            </div>
                                                        </Link>

                                                        {course.subscribers_count !== null ?
                                                            <div className={styles["paid-courses__popover-container__learners"]}>
                                                                <LearnersIcon color="#777" />
                                                                <span>{course.subscribers_count}</span>
                                                                <span>دورة</span>
                                                            </div>
                                                            :
                                                            null
                                                        }
                                                        <div
                                                            className={
                                                                styles["paid-courses__popover-container__brief"]
                                                            }
                                                            title={course.details}>
                                                            {course.details}
                                                        </div>

                                                    </div>

                                                    <div>


                                                        <div
                                                            className={
                                                                styles[
                                                                "paid-courses__popover-container__what-you-will-learn-title"
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
                                                                        "paid-courses__popover-container__what-you-will-learn"
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

                                                                <div className={styles["paid-courses__show-more-link"]}>
                                                                    اعرض المزيد
                                                                </div>
                                                            </Link>
                                                            :
                                                            null
                                                    }

                                                </div>

                                            </div>

                                            {
                                                course.categories[0] !== undefined && course.categories[0].title !== null && course.categories[0].title !== "" &&

                                                <div
                                                    className={
                                                        styles[
                                                        "paid-courses__cards-carousel__course-card__category-chip"
                                                        ]
                                                    }
                                                    style={{ backgroundColor: `${course.categories[0] !== undefined && course.categories[0].color}` }}>
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
                                                            "paid-courses__cards-carousel__course-card__course-img"
                                                            ]}
                                                    />

                                                </a>
                                            </Link>

                                            <Card.Body
                                                className={
                                                    styles[
                                                    "paid-courses__cards-carousel__course-card__card-body"
                                                    ]
                                                }
                                            >
                                                <div style={{ borderBottom: course.is_in_user_subscription && "none" }}
                                                    className={
                                                        styles[
                                                        "paid-courses__cards-carousel__course-card__card-body__card-header"
                                                        ]
                                                    }
                                                >
                                                    <div
                                                        className={
                                                            styles[
                                                            "paid-courses__cards-carousel__course-card__card-body__card-header__trainer-img-box"
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
                                                            "paid-courses__cards-carousel__course-card__card-body__card-header__course-details"
                                                            ]
                                                        }
                                                    >
                                                        <Link href={`/course/${course.slug}`}>
                                                            <div onClick={() => { GAProductClickEventHandler(course, i) }}
                                                                title={course.title}
                                                                className={
                                                                    styles[
                                                                    "paid-courses__cards-carousel__course-card__card-body__card-header__course-details__title"
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
                                                                    "paid-courses__cards-carousel__course-card__card-body__card-header__course-details__author"
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
                                                        "paid-courses__cards-carousel__course-card__card-body__checkout-details"
                                                        ]
                                                    }
                                                >
                                                    <div >
                                                        <div
                                                            className={
                                                                styles[
                                                                "paid-courses__cards-carousel__course-card__card-body__checkout-details__price-container"
                                                                ]
                                                            }
                                                        >
                                                            {course.discounted_price !== 0 && !course.is_purchased && <span
                                                                className={
                                                                    styles[
                                                                    "paid-courses__cards-carousel__course-card__card-body__checkout-details__price-container__currency"
                                                                    ]
                                                                }
                                                            >
                                                                {!course.is_in_user_subscription && course.currency_symbol}
                                                            </span>}

                                                            <span
                                                                className={
                                                                    styles[
                                                                    "paid-courses__cards-carousel__course-card__card-body__checkout-details__price-container__price"
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
                                                                    "paid-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container"
                                                                    ]
                                                                }
                                                            >
                                                                <span
                                                                    className={
                                                                        styles[
                                                                        "paid-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__currency"
                                                                        ]
                                                                    }
                                                                >
                                                                    {course.currency_symbol}
                                                                </span>
                                                                <span
                                                                    className={
                                                                        styles[
                                                                        "paid-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__price"
                                                                        ]
                                                                    }
                                                                >
                                                                    {course.price}
                                                                </span>

                                                            </div>
                                                        }
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
    )
}

/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState, useRef } from "react";
import styles from "./latest-courses.module.css";
import { Row, Col, Button, Card } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import Link from 'next/link';
import { axiosInstance } from "configurations/axios/axiosConfig";
import { ChevronLeftIcon, LearnersIcon, TickIcon, CartIcon, FavouriteIcon, AddedToCartIcon, AddedToFavouriteIcon, TvIcon } from "common/Icons/Icons";
import { useDispatch, useSelector } from "react-redux";
import Router from "next/router";
import { setCartItems } from "configurations/redux/actions/cartItems";
import withAuth from "configurations/auth guard/AuthGuard";
import { handleFav } from "modules/_Shared/utils/handleFav";
import { handleCart } from "modules/_Shared/utils/handleCart";
import { GAProductClickEventHandler } from "modules/_Shared/utils/GAEvents";
import { setCheckoutType } from "configurations/redux/actions/checkoutType";
import { handleFreeCourses } from "modules/_Shared/utils/handleFreeCourses";
import { FBPixelEventsHandler } from 'modules/_Shared/utils/FBPixelEvents';
import { setHomePageData } from "configurations/redux/actions/homePageData";
import { toggleLoader } from "modules/_Shared/utils/toggleLoader";

function LatestCourses(props:any) {
    SwiperCore.use([Navigation]);
    const homePageData = useSelector((state: any) => state.homePageData);
    const userStatus = useSelector((state: any) => state.userAuthentication);
    const cartItems = useSelector((state: any) => state.cartItems);
    // const [currencySymbol, setCurrencySymbol] = useState("");
    const [temporaryAddToCart, setTemporaryAddToCart] = useState<any>([]);
    const [localCartItems, setLocalCartItems] = useState<any>([]);
    const [isExecuted, setIsExecuted] = useState(false);
    const [latestCourses, setLatestCourses] = useState<any>([]);
    const [filterType, setFilterType] = useState("best-seller");
    const [disabledCartBtns, setDisabledCartBtns] = useState<any>([]);
    // const [cartItems, setCartItems] = useState<any>([]);
    const dispatch = useDispatch();
    const homePageCoursesRef = useRef([]);


    const handleFilterType = (type: string) => {
        setFilterType(type);
        axiosInstance
            .get(`home/courses/?type=${type}`)
            .then(function (response: any) {
                console.log("response//", response);
                setLatestCourses(response?.data?.data);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    useEffect(() => {
        homePageCoursesRef.current = homePageData?.data?.best_seller_courses;

        setLatestCourses(homePageData.data?.best_seller_courses || []);
        const localStorageItems: any = localStorage.getItem("cart");
    }, [homePageData]);

    useEffect(() => {
        toggleLoader("show");

        axiosInstance
            .get(`home`)
            .then(function (response: any) {
                props.handleCurrency({curr_symbol : response.data.data[`currency_symbol`] ,subscription_value: response.data.data.subscription_sale_price});
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
        if (!isExecuted) {
            // to capture all the carousel cards
            const trigger: any = document.querySelectorAll(
                '[id^="latest-courses-card"]'
            );

            // loop over them to control the hover effect per each card
            trigger.forEach((element: any) => {
                element.addEventListener("mouseover", function (event: any) {
                    if (window.innerWidth > 1024) {
                        // const observer = new MutationObserver((mutations, obs) => {
                        let relatedPopover: any = document.getElementById(`popover-${element.id}`);
                        let relatedWrapper: any = document.getElementById(`wrapper-${element.id}`);

                        const cardRightBoundary = window.innerWidth - element.getClientRects()[0].left;
                        const cardLeftBoundary = element.getClientRects()[0].left;

                        if (cardRightBoundary > cardLeftBoundary) {
                            // setPlacement("right");
                            if ((relatedWrapper?.offsetHeight - element?.offsetHeight) > 0) {

                                relatedWrapper.style.cssText = `left: 100%; top: -${((relatedWrapper?.offsetHeight - element?.offsetHeight) / 2)}px`
                            } else {
                                relatedWrapper.style.cssText = `left: 100%; top: -${((element?.offsetHeight - relatedWrapper?.offsetHeight) / 2)}px`;
                            }
                            relatedPopover.classList.remove(styles["latest-courses__popover-container--left"]);
                            relatedPopover.classList.add(styles["latest-courses__popover-container--right"]);
                        } else if (cardRightBoundary < cardLeftBoundary) {

                            if ((relatedWrapper?.offsetHeight - element?.offsetHeight) > 0) {
                                relatedWrapper.style.cssText = `right: 100%; top: -${((relatedWrapper?.offsetHeight - element?.offsetHeight) / 2)}px`;
                            } else {
                                relatedWrapper.style.cssText = `right: 100%; top: -${((element?.offsetHeight - relatedWrapper?.offsetHeight) / 2)}px`;
                            }

                            relatedPopover.style.cssText = `left: 0%;`;
                            relatedPopover.classList.remove(styles["latest-courses__popover-container--right"]);
                            relatedPopover.classList.add(styles["latest-courses__popover-container--left"]);
                        }
                    }
                });
            });
            setIsExecuted(true);
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
                    <h2>
                        <span>استكشف دورات </span>
                       <span>تدرب</span>
                    </h2>
                </Col>
                <Col
                    xs={{ span: 12, order: 1 }} sm={9}
                    className="d-flex align-items-center justify-content-start">
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
                    <Button className={styles["latest-courses__see-more-btn"]} id="see-more" onClick={() => { Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}courses/?type=${filterType}`) }}>
                        اعرض المزيد
                        <ChevronLeftIcon color="#af151f" />
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

                                        <Card data-isvisible={false} data-coursedetails={JSON.stringify({
                                            name: course?.title,
                                            id: course?.id,
                                            price: course?.discounted_price_usd,
                                            brand: "Tadarab",
                                            category: "Recorded Course",
                                            variant: "Single Course",
                                            list: "homepage",
                                            position: i + 1
                                        })}

                                            onMouseMove={() => {
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
                                                        <Link href={`/course/${course?.slug}`}>
                                                            <div
                                                                className={
                                                                    styles["latest-courses__popover-container__title"]
                                                                }
                                                                title={course?.title}
                                                            >
                                                                {course?.title}
                                                            </div>
                                                        </Link>

                                                        {course?.subscribers_count !== null ?
                                                            <div className={styles["latest-courses__popover-container__learners"]}>
                                                                <LearnersIcon color="#777" />
                                                                <span>{course?.subscribers_count}</span>
                                                                <span>متعلم</span>
                                                            </div>
                                                            :
                                                            null
                                                        }
                                                        <div
                                                            className={
                                                                styles["latest-courses__popover-container__brief"]
                                                            }
                                                            title={course?.details}>
                                                            {course?.details}
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
                                                        {course?.key_points?.slice(0, 4).map((kp: string, i: number) => {
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


                                                                    <span title={kp}>{kp}</span>
                                                                </div>

                                                            )
                                                        })
                                                        }

                                                    </div>

                                                    {
                                                        course?.key_points?.length > 4 ?
                                                            <Link href={`/course/${course?.slug}`}>

                                                                <div className={styles["latest-courses__show-more-link"]}>
                                                                    اعرض المزيد
                                                                </div>
                                                            </Link>
                                                            :
                                                            null
                                                    }

                                                </div>
                                            </div>
                                            {
                                                course?.categories[0] !== undefined && course?.categories[0].title !== null && course?.categories[0].title !== "" &&

                                                <div
                                                    className={
                                                        styles[
                                                        "latest-courses__cards-carousel__course-card__category-chip"
                                                        ]
                                                    }
                                                    style={{ backgroundColor: `${course?.categories[0] !== undefined && course?.categories[0].color}` }}
                                                >
                                                    {course?.categories[0] !== undefined && course?.categories[0].title}
                                                </div> 
                                            }

                                            <Link href={`/course/${course?.slug}`}>
                                                <a onClick={() => { GAProductClickEventHandler(course, i) }}>

                                                    <Card.Img
                                                        variant="top"
                                                        src={course?.image}
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
                                                <div style={{ borderBottom: course?.is_in_user_subscription && "none" }}
                                                    className={
                                                        styles[
                                                        "latest-courses__cards-carousel__course-card__card-body__card-header"
                                                        ]
                                                    }
                                                >
                                                    <div
                                                        className={
                                                            styles["latest-courses__cards-carousel__course-card__card-body__card-header__trainer-img-box"
                                                            ]
                                                        }
                                                    >
                                                        <Link href={`/trainer/${course?.trainer?.slug}`}>
                                                            <img loading="lazy"
                                                                src={course?.trainer?.image}
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
                                                        <Link href={`/course/${course?.slug}`}>
                                                            <h3 onClick={() => { GAProductClickEventHandler(course, i) }}
                                                                title={course?.title}
                                                                className={
                                                                    styles[
                                                                    "latest-courses__cards-carousel__course-card__card-body__card-header__course-details__title"
                                                                    ]
                                                                }
                                                            >
                                                                {course?.title}
                                                            </h3>
                                                        </Link>
                                                        <Link href={`/trainer/${course?.trainer?.slug}`}>
                                                            <div title={course?.trainer?.name_ar}
                                                                className={
                                                                    styles[
                                                                    "latest-courses__cards-carousel__course-card__card-body__card-header__course-details__author"
                                                                    ]
                                                                }
                                                            >
                                                                {course?.trainer?.name_ar}
                                                            </div>
                                                        </Link>
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

export default withAuth(LatestCourses);

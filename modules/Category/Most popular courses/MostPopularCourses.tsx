/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */
import React, { useEffect, useState, useRef } from "react";
import styles from "./most-popular-courses.module.css";
import { Row, Col, Button, Card } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import Link from 'next/link';
import { axiosInstance } from "configurations/axios/axiosConfig";
import { ChevronLeftIcon, LearnersIcon, TickIcon, CartIcon, FavouriteIcon, AddedToCartIcon, AddedToFavouriteIcon, TvIcon } from "common/Icons/Icons";
import { useDispatch, useSelector } from "react-redux";
import Router, { useRouter } from "next/router";
import { setCartItems } from "configurations/redux/actions/cartItems";
import withAuth from "configurations/auth guard/AuthGuard";
import { handleFav } from "modules/_Shared/utils/handleFav";
import { handleCart } from "modules/_Shared/utils/handleCart";
import { GAProductClickEventHandler } from "modules/_Shared/utils/GAEvents";
import { setCheckoutType } from "configurations/redux/actions/checkoutType";
import { handleFreeCourses } from "modules/_Shared/utils/handleFreeCourses";

export default function MostPopularCourses(props: any) {
    SwiperCore.use([Navigation]);
    const dispatch = useDispatch();
    const userStatus = useSelector((state: any) => state.userAuthentication);
    const cartItems = useSelector((state: any) => state.cartItems);
    const router = useRouter();
    const { slug } = router.query;


    const [mostPopularCourses, setMostPopularCourses] = useState([]);
    const [isExecuted, setIsExecuted] = useState(false);
    const [disabledCartBtns, setDisabledCartBtns] = useState<any>([]);

    useEffect(() => {
        setMostPopularCourses(props?.data?.most_popullar);
    }, [props]);


    const handlePlacement = () => {
        if (!isExecuted) {
            // to capture all the carousel cards
            const trigger: any = document.querySelectorAll(
                '[id^="most-popular-courses-card"]'
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

                                relatedWrapper.style.cssText = `left: 105%; top: -${((relatedWrapper?.offsetHeight - element?.offsetHeight) / 2)}px`
                            } else {
                                relatedWrapper.style.cssText = `left: 105%; top: -${((element?.offsetHeight - relatedWrapper?.offsetHeight) / 2)}px`;
                            }
                            relatedPopover.classList.remove(styles["most-popular-courses__popover-container--left"]);
                            relatedPopover.classList.add(styles["most-popular-courses__popover-container--right"]);
                        } else if (cardRightBoundary < cardLeftBoundary) {

                            if ((relatedWrapper?.offsetHeight - element?.offsetHeight) > 0) {
                                relatedWrapper.style.cssText = `right: 105%; top: -${((relatedWrapper?.offsetHeight - element?.offsetHeight) / 2)}px`;
                            } else {
                                relatedWrapper.style.cssText = `right: 105%; top: -${((element?.offsetHeight - relatedWrapper?.offsetHeight) / 2)}px`;
                            }

                            relatedPopover.style.cssText = `left: 0%;`;
                            relatedPopover.classList.remove(styles["most-popular-courses__popover-container--right"]);
                            relatedPopover.classList.add(styles["most-popular-courses__popover-container--left"]);
                        }
                    }
                });
            });
            setIsExecuted(true);
        }
    }

    const handleFavActionBtn = (course: any): any => {
        if (userStatus.isUserAuthenticated == true) {
            const handleFavResponse: any = handleFav(course, `categories/${slug}/?page=${props?.pagination?.current}&limit=12`);
            handleFavResponse.then(function (response: any) {
                console.log("firstresponse", response);
                setMostPopularCourses(response.data.data.most_popullar);
            })
        } else {
            router.push({
                pathname: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}sign-in`,
                query: { from: "homepage" }
            })
        }
    }

    const handleCartActionBtn = (course: any): any => {
        setDisabledCartBtns([...disabledCartBtns, course.id]);
        if (cartItems?.data) {
            dispatch(setCartItems([...(cartItems?.data), course]));
        }
        dispatch(setCheckoutType("cart"));

        const handleCartResponse: any = handleCart([course], `categories/${slug}/?page=${props?.pagination?.current}&limit=12`, false);
        handleCartResponse.then(function (firstresponse: any) {

            firstresponse.resp.then(function (response: any) {
                setMostPopularCourses(response.data.data.most_popullar);
                dispatch(setCartItems(firstresponse.cartResponse));
                setDisabledCartBtns(disabledCartBtns.filter((b: any) => b !== course.id));
            })
        })

    }

    const handleFreeCoursesActionBtn = (course: any): any => {
        if (userStatus.isUserAuthenticated == true) {
            handleFreeCourses(course);
        } else {
            router.push({
                pathname: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}sign-in`,
                query: { from: "/topic" }
            })
        }
    }

    const handleZindex = (status: any) => {
        const titleSection: any = document.getElementById("title-section");
        if (status == 'high') {
            titleSection.style.cssText = `z-index:5;`
        } else {
            titleSection.style.cssText = `z-index:1;`
        }
    }

    return (
        <>
            <Row>
                <Col xs={12} className={styles["most-popular-courses__title"]} id="title-section">
                    <h2 >
                        <span>اكتشف أفضل الدورات</span>
                        <div>
                            تخصص
                            {` ${props?.data?.title} `}
                        </div>
                    </h2>
                </Col>
                <Col xs={{ span: 12, order: 2 }} className={styles["most-popular-courses__cards-carousel"]}>
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
                            mostPopularCourses?.map((course: any, i: number) => {
                                return (
                                    <SwiperSlide key={i}>

                                        <Card data-isvisible={false} data-coursedetails={JSON.stringify({
                                            name: course.title,
                                            id: course.id,
                                            price: course.discounted_price_usd,
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
                                            id={`most-popular-courses-card${i}`}
                                            className={
                                                styles["most-popular-courses__cards-carousel__course-card"]
                                            }>

                                            <div className={
                                                styles["popover-wrapper"]
                                            }
                                                id={`wrapper-most-popular-courses-card${i}`}
                                                onMouseMove={() => { handleZindex("low") }} onMouseOut={() => { handleZindex("high") }}>

                                                <div id={`popover-most-popular-courses-card${i}`}
                                                    className={styles["most-popular-courses__popover-container"]}
                                                >

                                                    <div>
                                                        <Link href={`/course/${course.slug}`}>
                                                            <div
                                                                className={
                                                                    styles["most-popular-courses__popover-container__title"]
                                                                }
                                                                title={course.title}
                                                            >
                                                                {course.title}
                                                            </div>
                                                        </Link>

                                                        {course.subscribers_count !== null ?
                                                            <div className={styles["most-popular-courses__popover-container__learners"]}>
                                                                <LearnersIcon color="#777" />
                                                                <span>{course.subscribers_count}</span>
                                                                <span>متعلم</span>
                                                            </div>
                                                            :
                                                            null
                                                        }
                                                        <div
                                                            className={
                                                                styles["most-popular-courses__popover-container__brief"]
                                                            }
                                                            title={course.details}>
                                                            {course.details}
                                                        </div>

                                                    </div>

                                                    <div>


                                                        <div
                                                            className={
                                                                styles[
                                                                "most-popular-courses__popover-container__what-you-will-learn-title"
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
                                                                        "most-popular-courses__popover-container__what-you-will-learn"
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
                                                        course.key_points?.length > 4 ?
                                                            <Link href={`/course/${course.slug}`}>

                                                                <div className={styles["most-popular-courses__show-more-link"]}>
                                                                    اعرض المزيد
                                                                </div>
                                                            </Link>
                                                            :
                                                            null
                                                    }

                                                    <div className={styles["most-popular-courses__popover-container__btns"]}>

                                                        <Link href={`/course/${course.slug}`}>
                                                            <Button style={{ width: course.is_in_user_subscription ? "100%" : "50%" }}
                                                                className={styles["most-popular-courses__popover-container__btns__details-btn"]}>تفاصيل الدورة</Button>
                                                        </Link>
                                                        {!course.is_in_user_subscription &&
                                                            <Button className={styles["most-popular-courses__popover-container__btns__add-to-cart-btn"]}
                                                                onClick={() =>
                                                                    course?.discounted_price == 0 ?
                                                                        handleFreeCoursesActionBtn(course)
                                                                        :
                                                                        handleCartActionBtn(course)} disabled={course.is_in_cart || disabledCartBtns.includes(course.id)}>
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
                                                        }
                                                    </div>


                                                </div>
                                            </div>
                                            {
                                                course.categories[0] !== undefined && course.categories[0].title !== null && course.categories[0].title !== "" &&

                                                <div
                                                    className={
                                                        styles[
                                                        "most-popular-courses__cards-carousel__course-card__category-chip"
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
                                                            "most-popular-courses__cards-carousel__course-card__course-img"
                                                            ]
                                                        }
                                                    />
                                                </a>
                                            </Link>

                                            <Card.Body
                                                className={
                                                    styles[
                                                    "most-popular-courses__cards-carousel__course-card__card-body"
                                                    ]
                                                }
                                            >
                                                <div style={{ borderBottom: course.is_in_user_subscription && "none" }}
                                                    className={
                                                        styles[
                                                        "most-popular-courses__cards-carousel__course-card__card-body__card-header"
                                                        ]
                                                    }
                                                >
                                                    <div
                                                        className={
                                                            styles["most-popular-courses__cards-carousel__course-card__card-body__card-header__trainer-img-box"
                                                            ]
                                                        }
                                                    >
                                                        <Link href={`/trainer/${course.trainer?.slug}`}>
                                                            <img loading="lazy"
                                                                src={course.trainer?.image}
                                                                alt="trainer image"
                                                            />
                                                        </Link>
                                                    </div>
                                                    <div
                                                        className={
                                                            styles[
                                                            "most-popular-courses__cards-carousel__course-card__card-body__card-header__course-details"
                                                            ]
                                                        }
                                                    >
                                                        <Link href={`/course/${course.slug}`}>
                                                            <h3 onClick={() => { GAProductClickEventHandler(course, i) }}
                                                                title={course.title}
                                                                className={
                                                                    styles[
                                                                    "most-popular-courses__cards-carousel__course-card__card-body__card-header__course-details__title"
                                                                    ]
                                                                }
                                                            >
                                                                {course.title}
                                                            </h3>
                                                        </Link>
                                                        <Link href={`/trainer/${course.trainer?.slug}`}>
                                                            <div title={course.trainer?.name_ar}
                                                                className={
                                                                    styles[
                                                                    "most-popular-courses__cards-carousel__course-card__card-body__card-header__course-details__author"
                                                                    ]
                                                                }
                                                            >
                                                                {course.trainer?.name_ar}
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>

                                                <div
                                                    className={
                                                        styles[
                                                        "most-popular-courses__cards-carousel__course-card__card-body__checkout-details"
                                                        ]
                                                    }
                                                >
                                                    <div >
                                                        <div
                                                            className={
                                                                styles[
                                                                "most-popular-courses__cards-carousel__course-card__card-body__checkout-details__price-container"
                                                                ]
                                                            }
                                                        >
                                                            {course.discounted_price !== 0 && !course.is_purchased && <span
                                                                className={
                                                                    styles[
                                                                    "most-popular-courses__cards-carousel__course-card__card-body__checkout-details__price-container__currency"
                                                                    ]
                                                                }
                                                            >
                                                                {!course.is_in_user_subscription && course.currency_symbol}
                                                            </span>}

                                                            <span
                                                                className={
                                                                    styles[
                                                                    "most-popular-courses__cards-carousel__course-card__card-body__checkout-details__price-container__price"
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
                                                                    "most-popular-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container"
                                                                    ]
                                                                }
                                                            >
                                                                <span
                                                                    className={
                                                                        styles[
                                                                        "most-popular-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__currency"
                                                                        ]
                                                                    }
                                                                >
                                                                    {course.currency_symbol}
                                                                </span>
                                                                <span
                                                                    className={
                                                                        styles[
                                                                        "most-popular-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__price"
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
                                                                "most-popular-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                                                                ]
                                                            }
                                                        >
                                                            <div onClick={() =>
                                                                course?.discounted_price == 0 ?
                                                                    handleFreeCoursesActionBtn(course)
                                                                    :
                                                                    handleCartActionBtn(course)}
                                                                className={styles["most-popular-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn__cart-icon"]}>

                                                                {
                                                                    course.discounted_price == 0 ?
                                                                        <TvIcon color="#222" />
                                                                        :
                                                                        (course.is_in_cart) || disabledCartBtns.includes(course.id) ?
                                                                            <AddedToCartIcon color="#222" />
                                                                            :
                                                                            <CartIcon color="#222" />
                                                                }
                                                            </div>

                                                        </Button>}

                                                        <Button
                                                            className={
                                                                styles[
                                                                "most-popular-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                                                                ]
                                                            }
                                                        >

                                                            <div onClick={() => handleFavActionBtn(course)}
                                                                className={styles["most-popular-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn__fav-icon"]}>
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
    )
}

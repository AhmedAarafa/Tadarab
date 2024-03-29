/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState, useRef, memo } from 'react';
import { Row, Col, Button, Card, Pagination } from "react-bootstrap";
import styles from "./course-listing.module.css";
import Router, { useRouter } from "next/router";
import { axiosInstance } from "configurations/axios/axiosConfig";
import { GAProductClickEventHandler } from "modules/_Shared/utils/GAEvents";
import {
    AddedToCartIcon, AddedToFavouriteIcon, CartIcon, FavouriteIcon,
    PlayIcon, LiveIcon, ContainedBellIcon, BellIcon, TvIcon
} from "common/Icons/Icons";
import Link from 'next/link';
import { handleFav } from "modules/_Shared/utils/handleFav";
import { handleCart } from "modules/_Shared/utils/handleCart";
import { useDispatch, useSelector } from "react-redux";
import { setCheckoutType } from "configurations/redux/actions/checkoutType";
import { setCartItems } from "configurations/redux/actions/cartItems";
import MetaTagsGenerator from "modules/_Shared/utils/MetaTagsGenerator";
import { toggleLoader } from "modules/_Shared/utils/toggleLoader";
import { tokenValidationCheck } from "modules/_Shared/utils/tokenValidationCheck";
import { handleFreeCourses } from "modules/_Shared/utils/handleFreeCourses";
import CoverPhotoSection from "./Free courses page components/Cover photo section/CoverPhotoSection";
import DiscoverFreeCourses from "./Free courses page components/Discover free courses/DiscoverFreeCourses";
import LiveCourses from "./Free courses page components/Live courses/LiveCourses";
import Books from "./Free courses page components/Books/Books";
import Trainers from "./Free courses page components/Trainers/Trainers";
import PaidCourses from "./Free courses page components/Paid courses/PaidCourses";
import AboutFreeCourses from "./Free courses page components/About free courses/AboutFreeCourses";
import Testimonials from "./Free courses page components/Testimonials/Testimonials";
import Statistics from "common/Statistics/Statistics";
import Categories from "./Free courses page components/Categories/Categories";
import Faqs from "./Free courses page components/FAQs/Faqs";
import Faqs2 from "common/Subscription faqs/FAQ/Faq";
import StickySignupBar from './Free courses page components/Sticky signup bar/StickySignupBar';
import CoverPhotoSection2 from './All courses page components/Cover photot section/CoverPhotoSection';
import BestCoursesInCategory from './All courses page components/Best courses in category/BestCoursesInCategory';
import LatestCourses from './All courses page components/Latest courses/LatestCourses';
import BestSellerCourses from './All courses page components/Best seller courses/BestSellerCourses';
import Trainers2 from './All courses page components/Trainers/Trainers';
import TadarabUnlimited from "./All courses page components/Tadarab unlimited/TadarabUnlimited";
import TadarabForBusiness from "common/Tadarab for business/TadarabForBusiness";
import Testimonials2 from "common/Testimonials/Testimonials";
import StickySignupBar2 from "./All courses page components/Sticky signup bar/StickySignupBar";

function CourseListing() {
    const [courseListing, setCourseListing] = useState<any>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pagesArray, setPagesArray] = useState<any>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const [disabledCartBtns, setDisabledCartBtns] = useState<any>([]);
    const userStatus = useSelector((state: any) => state.userAuthentication);
    const dispatch = useDispatch();
    const router = useRouter();
    const themeState = useSelector((state: any) => state.themeState.theme);

    const handleFavActionBtn = (course: any): any => {
        if (userStatus.isUserAuthenticated == true) {
            const handleFavResponse: any = handleFav(
                course, `courses/?page=${currentPage}&limit=20&type=${Router.query.type}`);
            handleFavResponse.then(function (response: any) {
                setCourseListing(response?.data);
            })
        } else {
            Router.push({
                pathname: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}sign-in`,
                query: { from: "courses" }
            })
        }
    }

    const handleCartActionBtn = (course: any): any => {

        setDisabledCartBtns([...disabledCartBtns, course.id]);
        setTimeout(() => {
            setDisabledCartBtns(disabledCartBtns.filter((b: any) => b !== course.id));
        }, 5000);
        dispatch(setCheckoutType("cart"));

        const handleCartResponse: any = handleCart(
            [course], `courses/?page=${currentPage}&limit=20&type=${Router.query.type}`, false);
        handleCartResponse.then(function (firstresponse: any) {
            firstresponse.resp.then(function (response: any) {
                setCourseListing(response?.data);
                dispatch(setCartItems(firstresponse.cartResponse));
            })
        })

    }

    const handleSubscribeBtn = (course: any): any => {
        if (userStatus.isUserAuthenticated == true) {

            if (course.is_subscribed_to == false) {
                axiosInstance
                    .post(`users/live-subscriptions`, { "course_id": course.id })
                    .then((response: any) => {
                        if (tokenValidationCheck(response)) {
                            axiosInstance
                                .get(`home`)
                                .then(function (response: any) {
                                    setCourseListing(response.data.data.live_courses);
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
                        axiosInstance
                            .get(`home`)
                            .then(function (response: any) {
                                setCourseListing(response.data.data.live_courses);
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
                query: { from: "courses" }
            })

        }
        setCourseListing([...courseListing]);
    }

    const handleFreeCoursesActionBtn = (course: any): any => {
        if (userStatus.isUserAuthenticated == true) {
            handleFreeCourses(course);
        } else {
            Router.push({
                pathname: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}sign-in`,
                query: { from: "/courses" }
            })
        }
    }

    const handlePageClick = (pgNo: any) => {

        toggleLoader("show");
        window.scrollTo({ top: 0, behavior: "smooth" });
        setCurrentPage(pgNo);
        setPagesArray([]);
        let startIndex: any = 0, endIndex: any = 0;
        axiosInstance
            .get(`courses/?page=${pgNo}&limit=20&type=${router.query.type}`)
            .then(function (response: any) {
                setCourseListing(response?.data);
                let totalPages = response?.data.pagination.pages;

                if (totalPages <= 10) {
                    // less than 10 total pages so show all
                    startIndex = 1;
                    endIndex = totalPages;
                } else {
                    // more than 10 total pages so calculate start and end pages
                    if (pgNo <= 6) {
                        startIndex = 1;
                        endIndex = 10;
                    } else if (pgNo + 4 >= totalPages) {
                        startIndex = totalPages - 9;
                        endIndex = totalPages;

                    } else {
                        startIndex = pgNo - 5;
                        endIndex = pgNo + 4;
                    }
                }

                // create an array of pages to ng-repeat in the pager control
                setPagesArray([...Array((endIndex + 1) - startIndex).keys()].map(i => startIndex + i));
                toggleLoader("hide");
            })
            .catch(function (error) {
                console.log(error);
                toggleLoader("hide");
            });

    }

    useEffect(() => {
        toggleLoader("show");
    }, []);

    useEffect(() => {
        axiosInstance
            .get(`courses/?page=1&limit=20&type=${(router?.query && router?.query?.type) ? router?.query?.type : "all"}`)
            .then(function (response: any) {
                setCourseListing(response?.data);
                toggleLoader("hide");
            })
            .catch(function (error) {
                toggleLoader("hide");
                console.log(error);
            });
    }, [router.query]);

    return (
        <>
            <MetaTagsGenerator title={courseListing?.data?.seo_title}
                description={courseListing?.data?.seo_metadesc}
                img={courseListing?.data?.seo_image} />
            <Row className={styles["course-listing-row"]}>
                {router?.query && router?.query?.type == "free" &&
                    <>
                        <CoverPhotoSection />
                        <DiscoverFreeCourses />
                        <Trainers />
                        <LiveCourses />
                        <Books />
                        <AboutFreeCourses />
                        <Testimonials />
                        <Statistics />
                        <PaidCourses />
                        <Categories />
                        <Faqs />
                        <StickySignupBar />
                    </>
                }
                {
                    // (JSON.stringify(router?.query) == "{}" || (router?.query && (router?.query?.type == "all" || router?.query?.aid)))
                    ((router?.query.type && router?.query?.type == "all")
                        ||
                        (router?.query.type && router?.query?.type !== "best-seller" &&
                            router?.query?.type !== "live" &&
                            router?.query?.type !== "latest")
                        ||
                        (JSON.stringify(router?.query) == "{}")
                        ||
                        !router?.query.type)
                    &&
                    <>
                        <CoverPhotoSection2 />
                        <div className={styles["course-listing__categories-section"]}>
                            <BestSellerCourses />
                        </div>
                        <Categories />
                        <BestCoursesInCategory title="business" />
                        <TadarabUnlimited />
                        <BestCoursesInCategory title="family-and-educational-skills" />
                        <Statistics />
                        <BestCoursesInCategory title="family" />
                        <LatestCourses />
                        <Testimonials2 />
                        <Trainers2 />
                        <DiscoverFreeCourses />
                        <TadarabForBusiness />
                        <Faqs2 />
                        <StickySignupBar2 />
                    </>
                }
                {
                    router?.query && (router?.query?.type == "best-seller" || router?.query?.type == "live" || router?.query?.type == "latest")
                    &&
                    <>
                        <Col xs={12} className={styles["course-listing__title"]}>
                            النتائج
                        </Col>

                        <Col xs={12} className={styles["course-listing"]}>
                            {courseListing?.data?.courses?.map((course: any, i: number) => {

                                return (
                                    router.query.type == "live" ?
                                        <Card className={`${course.price == 0 ? styles["course-listing__cards-carousel__card"] : styles["course-listing__cards-carousel__card--paid"]} 
                            `}>
                                            {
                                                course.categories[0] !== undefined && course.categories[0].title !== null && course.categories[0].title !== "" &&

                                                <div
                                                    className={
                                                        styles[
                                                        "course-listing__cards-carousel__course-card__category-chip"
                                                        ]
                                                    }
                                                    style={{ backgroundColor: `${course.categories[0] !== undefined && course.categories[0].color}` }}
                                                >
                                                    {course.categories[0] !== undefined && course.categories[0].title}
                                                </div>
                                            }
                                            <div
                                                className={
                                                    styles[
                                                    "course-listing__cards-carousel__course-card__duration-chip"
                                                    ]
                                                }
                                            >
                                                <div>
                                                    {course.full_date == Math.floor(Date.now() / 1000) && <LiveIcon />}
                                                </div>
                                                <div>

                                                    {course.full_date == Math.floor(Date.now() / 1000) ? <span>مباشر الآن</span> : <span>{course.short_date}</span>}
                                                </div>
                                            </div>
                                            <Link href={`/webinar/${course.slug}`}>
                                                <Card.Img variant="top" src={course.image} alt='trainer image'
                                                    className={styles["course-listing__cards-carousel__card__trainer-img"]} />
                                            </Link>
                                            <Card.Body className={styles["course-listing__cards-carousel__card__card-body"]}>
                                                <div className={styles["course-listing__cards-carousel__card__card-body__card-header"]}>
                                                    <div className={styles["course-listing__cards-carousel__card__card-body__card-header__course-details"]}>
                                                        <Link href={`/webinar/${course.slug}`}>
                                                            <h1 title={course.title} className={styles["course-listing__cards-carousel__card__card-body__card-header__course-details__title"]}>{course.title}</h1>
                                                        </Link>
                                                        <Link href={`/trainer/${course.trainer?.slug}`}>
                                                            <div title={course.trainer?.name_ar} className={styles["course-listing__cards-carousel__card__card-body__card-header__course-details__author"]}>{course.trainer?.name_ar}</div>
                                                        </Link>
                                                    </div>
                                                    <div className={styles["course-listing__cards-carousel__card__card-body__card-header__course-details__para"]}>
                                                        {course.details}
                                                    </div>
                                                </div>


                                                <div className={styles["course-listing__cards-carousel__card__card-body__checkout-details"]}>
                                                    <div>
                                                        <div
                                                            className={
                                                                styles[
                                                                "course-listing__cards-carousel__course-card__card-body__checkout-details__price-container"
                                                                ]
                                                            }
                                                        >
                                                            {course.discounted_price !== 0 && !course.is_purchased && <span
                                                                className={
                                                                    styles[
                                                                    "course-listing__cards-carousel__course-card__card-body__checkout-details__price-container__currency"
                                                                    ]
                                                                }
                                                            >
                                                                {course.currency_symbol}
                                                            </span>}

                                                            <span
                                                                className={
                                                                    styles[
                                                                    "course-listing__cards-carousel__course-card__card-body__checkout-details__price-container__price"
                                                                    ]
                                                                }
                                                            >
                                                                {course.is_purchased && "تم الشراء"}

                                                                {!course.is_purchased && (course.discounted_price == 0 ? "مجانًا" : course.discounted_price)}
                                                            </span>

                                                        </div>
                                                        {(course.price > course.discounted_price) && !course.is_purchased &&
                                                            <div
                                                                className={
                                                                    styles[
                                                                    "course-listing__cards-carousel__course-card__card-body__checkout-details__old-price-container"
                                                                    ]
                                                                }
                                                            >
                                                                <span
                                                                    className={
                                                                        styles[
                                                                        "course-listing__cards-carousel__course-card__card-body__checkout-details__old-price-container__currency"
                                                                        ]
                                                                    }
                                                                >
                                                                    {course.currency_symbol}
                                                                </span>
                                                                <span
                                                                    className={
                                                                        styles[
                                                                        "course-listing__cards-carousel__course-card__card-body__checkout-details__old-price-container__price"
                                                                        ]
                                                                    }
                                                                >
                                                                    {course.price}
                                                                </span>

                                                            </div>
                                                        }
                                                    </div>
                                                    {!course.is_purchased && <Button className={styles["course-listing__cards-carousel__card__card-body__checkout-details__btn-box"]} disabled={course.is_in_cart || disabledCartBtns.includes(course.id)} variant={""}>
                                                        {course.price == 0 ? <div onClick={() => handleSubscribeBtn(course)}> {course.is_subscribed_to ? <ContainedBellIcon color={themeState == 'light' ? "#222" : "#f5f5f5"} /> : <BellIcon color={themeState == 'light' ? "#222" : "#f5f5f5"} />} </div>
                                                            :
                                                            <div onClick={() =>
                                                                course?.discounted_price == 0 ?
                                                                    handleFreeCoursesActionBtn(course)
                                                                    :
                                                                    handleCartActionBtn(course)}> {(course.discounted_price == 0 ?
                                                                        <TvIcon color={themeState == 'light' ? "#222" : "#f5f5f5"} />
                                                                        : course.is_in_cart || disabledCartBtns.includes(course.id) ? <AddedToCartIcon color={themeState == 'light' ? "#222" : "#f5f5f5"} /> : <CartIcon color={themeState == 'light' ? "#222" : "#f5f5f5"} />)} </div>}
                                                    </Button>}
                                                </div>
                                            </Card.Body>
                                            {course.full_date == Math.floor(Date.now() / 1000) && <div className={styles["course-listing__cards-carousel__card__live-icon"]}>
                                                <PlayIcon />

                                            </div>}
                                        </Card>
                                        :
                                        <Card key={i} className={styles["course-listing__course-card"]}>
                                            {
                                                course.categories[0] !== undefined && course.categories[0].title !== null && course.categories[0].title !== "" &&
                                                <div
                                                    className={
                                                        styles["course-listing__course-card__category-chip"]
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
                                                            "course-listing__course-card__course-img"
                                                            ]
                                                        }
                                                    />

                                                </a>
                                            </Link>

                                            <Card.Body
                                                className={
                                                    styles[
                                                    "course-listing__course-card__card-body"
                                                    ]
                                                }
                                            >
                                                <div style={{ borderBottom: course.is_in_user_subscription && "none" }}
                                                    className={
                                                        styles[
                                                        "course-listing__course-card__card-body__card-header"
                                                        ]
                                                    }
                                                >
                                                    <div
                                                        className={
                                                            styles[
                                                            "course-listing__course-card__card-body__card-header__trainer-img-box"
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
                                                            "course-listing__course-card__card-body__card-header__course-details"
                                                            ]
                                                        }
                                                    >
                                                        <Link href={`/course/${course.slug}`}>
                                                            <h1 onClick={() => { GAProductClickEventHandler(course, i) }}
                                                                title={course.title}
                                                                className={
                                                                    styles[
                                                                    "course-listing__course-card__card-body__card-header__course-details__title"
                                                                    ]
                                                                }
                                                            >
                                                                {course.title}
                                                            </h1>
                                                        </Link>

                                                        <Link href={`/trainer/${course.trainer?.slug}`}>

                                                            <div title={course.trainer?.name_ar}
                                                                className={
                                                                    styles[
                                                                    "course-listing__course-card__card-body__card-header__course-details__author"
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
                                                        "course-listing__course-card__card-body__checkout-details"
                                                        ]
                                                    }
                                                >
                                                    <div >
                                                        <div
                                                            className={
                                                                styles[
                                                                "course-listing__course-card__card-body__checkout-details__price-container"
                                                                ]
                                                            }
                                                        >
                                                            {course.discounted_price !== 0 && !course.is_purchased && <span
                                                                className={
                                                                    styles[
                                                                    "course-listing__course-card__card-body__checkout-details__price-container__currency"
                                                                    ]
                                                                }
                                                            >
                                                                {!course.is_in_user_subscription && course.currency_symbol}
                                                            </span>}

                                                            <span
                                                                className={
                                                                    styles[
                                                                    "course-listing__course-card__card-body__checkout-details__price-container__price"
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
                                                                    "course-listing__course-card__card-body__checkout-details__old-price-container"
                                                                    ]
                                                                }
                                                            >
                                                                <span
                                                                    className={
                                                                        styles[
                                                                        "course-listing__course-card__card-body__checkout-details__old-price-container__currency"
                                                                        ]
                                                                    }
                                                                >
                                                                    {course.currency_symbol}
                                                                </span>
                                                                <span
                                                                    className={
                                                                        styles[
                                                                        "course-listing__course-card__card-body__checkout-details__old-price-container__price"
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
                                                                "course-listing__course-card__card-body__checkout-details__icon-btn"
                                                                ]
                                                            }
                                                        >
                                                            <div onClick={() =>
                                                                course?.discounted_price == 0 ?
                                                                    handleFreeCoursesActionBtn(course)
                                                                    :
                                                                    handleCartActionBtn(course)}
                                                                className={styles["course-listing__course-card__card-body__checkout-details__icon-btn__cart-icon"]}>
                                                                {
                                                                    course.discounted_price == 0 ?
                                                                        <TvIcon color={themeState == 'light' ? "#222" : "#f5f5f5"} />
                                                                        :
                                                                        course.is_in_cart || disabledCartBtns.includes(course.id) ?
                                                                            <AddedToCartIcon color={themeState == 'light' ? "#222" : "#f5f5f5"} />
                                                                            :
                                                                            <CartIcon color={themeState == 'light' ? "#222" : "#f5f5f5"} />
                                                                }
                                                            </div>

                                                        </Button>}

                                                        <Button
                                                            className={
                                                                styles[
                                                                "course-listing__course-card__card-body__checkout-details__icon-btn"
                                                                ]
                                                            }
                                                        >

                                                            <div onClick={() => handleFavActionBtn(course)}
                                                                className={styles["course-listing__course-card__card-body__checkout-details__icon-btn__fav-icon"]}>
                                                                {
                                                                    course.is_in_favorites ?
                                                                        <AddedToFavouriteIcon color="#af151f" />
                                                                        :
                                                                        <FavouriteIcon color={themeState == 'light' ? "#222" : "#f5f5f5"} />
                                                                }

                                                            </div>


                                                        </Button>
                                                    </div>
                                                </div>
                                            </Card.Body>

                                        </Card>
                                )
                            })}
                        </Col>

                        <Col xs={12} className={styles["course-listing__pagination"]}>

                            {!(courseListing?.pagination?.count < 20) &&
                                <Pagination>
                                    <Pagination.Prev
                                        onClick={() => {
                                            handlePageClick(courseListing?.pagination?.current - 1)
                                        }}
                                        className={`${Number(currentPage) == 1 && styles["disabled"]}`} />
                                    {
                                        pagesArray.map((page: any, index: any) => {
                                            return (
                                                page <= courseListing?.pagination?.pages &&
                                                page >= 1 &&
                                                <Pagination.Item key={index}
                                                    active={currentPage == page}
                                                    onClick={() => {
                                                        handlePageClick(page);
                                                    }}>
                                                    {page}
                                                </Pagination.Item>
                                            )
                                        })
                                    }

                                    <Pagination.Next
                                        onClick={() => {
                                            handlePageClick(courseListing?.pagination?.current + 1)
                                        }}
                                        className={`${currentPage == courseListing?.pagination?.pages && styles["disabled"]}`} />
                                </Pagination>
                            }

                        </Col>
                    </>
                }
            </Row>
        </>
    )
}

export default memo(CourseListing);

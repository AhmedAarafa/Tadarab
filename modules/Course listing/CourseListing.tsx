/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { Row, Col, Button, Card, Pagination } from "react-bootstrap";
import styles from "./course-listing.module.css";
import Router, { useRouter } from "next/router";
import { axiosInstance } from "configurations/axios/axiosConfig";
import { GAProductClickEventHandler } from "modules/_Shared/utils/GAEvents";
import { AddedToCartIcon, AddedToFavouriteIcon, CartIcon, FavouriteIcon, PlayIcon, LiveIcon, ContainedBellIcon, BellIcon } from "common/Icons/Icons";
import Link from 'next/link';
import { handleFav } from "modules/_Shared/utils/handleFav";
import { handleCart } from "modules/_Shared/utils/handleCart";
import { useDispatch, useSelector } from "react-redux";
import { setCheckoutType } from "configurations/redux/actions/checkoutType";
import { setCartItems } from "configurations/redux/actions/cartItems";
import MetaTagsGenerator from "modules/_Shared/utils/MetaTagsGenerator";
import { toggleLoader } from "modules/_Shared/utils/toggleLoader";
import { tokenValidationCheck } from "modules/_Shared/utils/tokenValidationCheck";
import Image from 'next/image';


export default function CourseListing() {
    const [courseListing, setCourseListing] = useState<any>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const userStatus = useSelector((state: any) => state.userAuthentication);
    const dispatch = useDispatch();
    const router = useRouter();

    const handleFavActionBtn = (course: any): any => {
        if (userStatus.isUserAuthenticated == true) {
            const handleFavResponse: any = handleFav(
                course, `courses/?country_code=null&page=${currentPage}&limit=16&type=${Router.query.type}`);
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
        dispatch(setCheckoutType("cart"));

        const handleCartResponse: any = handleCart(
            [course], `courses/?country_code=null&page=${currentPage}&limit=16&type=${Router.query.type}`, false);
        handleCartResponse.then(function (firstresponse: any) {
            firstresponse.resp.then(function (response: any) {
                console.log("response,", response);
                console.log("firstresponse", firstresponse);

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

                            console.log("Response", response);
                            axiosInstance
                                .get(`home/?country_code=null`)
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
                        console.log("Response", response);
                        axiosInstance
                            .get(`home/?country_code=null`)
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

    const handlePageClick = (pgNo: any) => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setCurrentPage(pgNo);
        axiosInstance
            .get(`courses/?country_code=null&page=${pgNo}&limit=16&type=${router.query.type}`)
            .then(function (response: any) {
                setCourseListing(response?.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {
        toggleLoader("show");

    }, [])




    useEffect(() => {
            axiosInstance
                .get(`courses/?country_code=null&page=1&limit=16&type=${ (router?.query && router?.query?.type) ? router?.query?.type  : "all"  }`)
                .then(function (response: any) {
                    console.log(response);
                    
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
            <Row>
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
                                    <Card.Img variant="top" src={course.image} alt='trainer image'
                                        className={styles["course-listing__cards-carousel__card__trainer-img"]} />
                                    <Card.Body className={styles["course-listing__cards-carousel__card__card-body"]}>
                                        <div className={styles["course-listing__cards-carousel__card__card-body__card-header"]}>
                                            <div className={styles["course-listing__cards-carousel__card__card-body__card-header__course-details"]}>
                                                <h1 title={course.title} className={styles["course-listing__cards-carousel__card__card-body__card-header__course-details__title"]}>{course.title}</h1>
                                                <div title={course.trainer?.name_ar} className={styles["course-listing__cards-carousel__card__card-body__card-header__course-details__author"]}>{course.trainer?.name_ar}</div>
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
                                                        {course.currency_code}
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
                                                            {course.currency_code}
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
                                            {!course.is_purchased && <Button className={styles["course-listing__cards-carousel__card__card-body__checkout-details__btn-box"]} disabled={course.is_in_cart} variant={""}>
                                                {course.price == 0 ? <div onClick={() => handleSubscribeBtn(course)}> {course.is_subscribed_to ? <ContainedBellIcon /> : <BellIcon />} </div>
                                                    :
                                                    <div onClick={() => handleCartActionBtn(course)}> {(course.is_in_cart ? <AddedToCartIcon color="#222" /> : <CartIcon color="#222" />)} </div>}
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
                                                    <Image
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
                                                <Link href="/course">
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
                                                        {!course.is_in_user_subscription && course.currency_code}
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
                                                            {course.currency_code}
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
                                                {!course.is_purchased && !course.is_in_user_subscription && <Button disabled={course.is_in_cart} variant={""}
                                                    className={
                                                        styles[
                                                        "course-listing__course-card__card-body__checkout-details__icon-btn"
                                                        ]
                                                    }
                                                >
                                                    <div onClick={() => handleCartActionBtn(course)}
                                                        className={styles["course-listing__course-card__card-body__checkout-details__icon-btn__cart-icon"]}>
                                                        {
                                                            course.is_in_cart ?
                                                                <AddedToCartIcon color="#222" />
                                                                :
                                                                <CartIcon color="#222" />
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
                                                                <FavouriteIcon color="#222" />
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


                    {!(courseListing?.pagination?.count < 16) && 
                    <Pagination>
                        <Pagination.Prev
                            onClick={() => {
                                handlePageClick(courseListing?.pagination?.current - 1)
                            }}
                            className={`${currentPage == 1 && styles["disabled"]}`} />



                        <Pagination.Item
                            style={{ display: courseListing?.pagination?.previous ? "" : "none" }}
                            active={currentPage == courseListing?.pagination?.previous}
                            onClick={() => {
                                handlePageClick(courseListing?.pagination?.previous)
                            }}>
                            {courseListing?.pagination?.previous}
                        </Pagination.Item>
                        <Pagination.Item
                            active={currentPage == courseListing?.pagination?.current}
                            onClick={() => {
                                handlePageClick(courseListing?.pagination?.current);
                            }}>
                            {courseListing?.pagination?.current}
                        </Pagination.Item>
                        <Pagination.Item
                            style={{ display: courseListing?.pagination?.next ? "" : "none" }}
                            active={currentPage == courseListing?.pagination?.next}
                            onClick={() => {
                                handlePageClick(courseListing?.pagination?.next)
                            }}>
                            {courseListing?.pagination?.next}
                        </Pagination.Item>



                        <Pagination.Next
                            onClick={() => {
                                handlePageClick(courseListing?.pagination?.current + 1)
                            }}
                            className={`${currentPage == courseListing?.pagination?.pages && styles["disabled"]}`} />
                    </Pagination>}

                </Col>
            </Row>
        </>
    )
}

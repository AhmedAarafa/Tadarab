/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import styles from "./search-results-page.module.css";
import { Row, Col, Button, Card, Pagination } from "react-bootstrap";
import { handleFav } from "modules/_Shared/utils/handleFav";
import { handleCart } from "modules/_Shared/utils/handleCart";
import { AddedToCartIcon, AddedToFavouriteIcon, CartIcon, FavouriteIcon } from "common/Icons/Icons";
import Link from 'next/link';
import { useDispatch, useSelector } from "react-redux";
import { axiosInstance } from "configurations/axios/axiosConfig";
import Router, { useRouter } from "next/router";
import { setCartItems } from "configurations/redux/actions/cartItems";
import { GAProductClickEventHandler } from "modules/_Shared/utils/GAEvents";
import { setCheckoutType } from "configurations/redux/actions/checkoutType";
import MetaTagsGenerator from "modules/_Shared/utils/MetaTagsGenerator";
import { toggleLoader } from "modules/_Shared/utils/toggleLoader";

export default function SearchResultsPage() {
    const [searchResults, setSearchResults] = useState<any>([]);
    const userStatus = useSelector((state: any) => state.userAuthentication);
    const [currentPage, setCurrentPage] = useState("1");
    const dispatch = useDispatch();
    const router = useRouter();

    const handleFavActionBtn = (course: any): any => {
        if (userStatus.isUserAuthenticated == true) {
            const handleFavResponse: any = handleFav(course, `courses/?country_code=null&keyword=${router.query.q}&page=${currentPage}&limit=16`);
            handleFavResponse.then(function (response: any) {
                setSearchResults(response?.data);
            })
        } else {
            Router.push({
                pathname: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}sign-in`,
                query: { from: "search" }
            })
        }
    }

    const handleCartActionBtn = (course: any): any => {
        dispatch(setCheckoutType("cart"));

        // if(userStatus?.isUserAuthenticated == true){
        const handleCartResponse: any = handleCart([course], `courses/?country_code=null&keyword=${router.query.q}&page=${currentPage}&limit=16`, false);
        handleCartResponse.then(function (firstresponse: any) {
            firstresponse.resp.then(function (response: any) {
                setSearchResults(response?.data);
                dispatch(setCartItems(firstresponse.cartResponse));
            })
            //  setLocalCartItems(response.totalItems);
        })
        // }
        // else{
        //   const handleCartResponse:any =  handleCart([course],`home/?country_code=null`,false);
        //   handleCartResponse.then(function(response:any) {
        //     // console.log(response.data.data);
        //       dispatch(setCartItems(response.data.data));
        //       let newArray:any = searchResults; 
        //      response.data.data?.forEach((element:any) => {
        //       newArray.forEach((ele:any) => {
        //           if(element.id === ele.id){
        //             // console.log(ele);
        //             ele.is_in_cart = true;
        //         }
        //     });
        // });
        // setSearchResults([...newArray]);

        //   })
        // }
    }

    useEffect(() => {
        toggleLoader("show");
    }, [])

    useEffect(() => {
        setCurrentPage("1");
        if (router.query && router.query.q) {
            // console.log("router.query.q",router.query.q);

            axiosInstance
                .get(`courses/?country_code=null&keyword=${router.query.q}&page=1&limit=16`)
                .then(function (response: any) {
                    console.log(response);
                    setSearchResults(response?.data);
                    toggleLoader("hide");
                    
                    
                })
                .catch(function (error) {
                    toggleLoader("hide");
                    console.log(error);
                });
        }

    }, [router.query]);

    const handlePageClick = (pgNo: any) => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setCurrentPage(pgNo);
        axiosInstance
            .get(`courses/?country_code=null&keyword=${router?.query?.q}&page=${pgNo}&limit=16`)
            .then(function (response: any) {
                console.log(response);
                setSearchResults(response?.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <>
            <MetaTagsGenerator title={searchResults?.data?.seo_title}
                description={searchResults?.data?.seo_metadesc}
                img={searchResults?.data?.seo_image} />
            <Row >
                <Col xs={12} className={styles["search-results__total-search-results"]}>
                    <div>
                        نتائج البحث
                        (
                        <span>
                            {searchResults?.pagination?.count}
                        </span>
                        )
                    </div>
                    {searchResults?.data?.are_results_best_sellers && <div className={styles["search-results__invalid-search-query"]}>
                        لم يتم العثور على نتائج بحث، تصفح الدورات التدريبية المحببة من قبل مستخدمين آخرين.
                    </div>}
                </Col>
                <Col xs={12} className={styles["search-results"]}>

                    {searchResults?.data?.courses?.map((course: any, i: number) => {
                        return (

                            <Card key={i} className={styles["search-results__course-card"]}>
                                {
                                    course.categories[0] !== undefined && course.categories[0].title !== null && course.categories[0].title !== "" &&

                                    <div
                                        className={
                                            styles["search-results__course-card__category-chip"]
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
                                                "search-results__course-card__course-img"
                                                ]
                                            }
                                        />
                                    </a>
                                </Link>

                                <Card.Body
                                    className={
                                        styles[
                                        "search-results__course-card__card-body"
                                        ]
                                    }
                                >
                                    <div style={{ borderBottom: course.is_in_user_subscription && "none" }}
                                        className={
                                            styles[
                                            "search-results__course-card__card-body__card-header"
                                            ]
                                        }
                                    >
                                        <div
                                            className={
                                                styles[
                                                "search-results__course-card__card-body__card-header__trainer-img-box"
                                                ]
                                            }
                                        >
                                            <Link href={`/trainer/${course.trainer?.slug}`}>
                                                <img
                                                    src={course.trainer?.image}
                                                    alt="trainer image"
                                                />
                                            </Link>
                                        </div>
                                        <div
                                            className={
                                                styles[
                                                "search-results__course-card__card-body__card-header__course-details"
                                                ]
                                            }
                                        >
                                            <Link href={`/course/${course.slug}`}>
                                                <h1 onClick={() => { GAProductClickEventHandler(course, i) }}
                                                    title={course.title}
                                                    className={
                                                        styles[
                                                        "search-results__course-card__card-body__card-header__course-details__title"
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
                                                        "search-results__course-card__card-body__card-header__course-details__author"
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
                                            "search-results__course-card__card-body__checkout-details"
                                            ]
                                        }
                                    >
                                        <div >
                                            <div
                                                className={
                                                    styles[
                                                    "search-results__course-card__card-body__checkout-details__price-container"
                                                    ]
                                                }
                                            >
                                                {course.discounted_price !== 0 && !course.is_purchased && <span
                                                    className={
                                                        styles[
                                                        "search-results__course-card__card-body__checkout-details__price-container__currency"
                                                        ]
                                                    }
                                                >
                                                    {!course.is_in_user_subscription && course.currency_code}
                                                </span>}

                                                <span
                                                    className={
                                                        styles[
                                                        "search-results__course-card__card-body__checkout-details__price-container__price"
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
                                                        "search-results__course-card__card-body__checkout-details__old-price-container"
                                                        ]
                                                    }
                                                >
                                                    <span
                                                        className={
                                                            styles[
                                                            "search-results__course-card__card-body__checkout-details__old-price-container__currency"
                                                            ]
                                                        }
                                                    >
                                                        {course.currency_code}
                                                    </span>
                                                    <span
                                                        className={
                                                            styles[
                                                            "search-results__course-card__card-body__checkout-details__old-price-container__price"
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
                                                    "search-results__course-card__card-body__checkout-details__icon-btn"
                                                    ]
                                                }
                                            >
                                                <div onClick={() => handleCartActionBtn(course)}
                                                    className={styles["search-results__course-card__card-body__checkout-details__icon-btn__cart-icon"]}>
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
                                                    "search-results__course-card__card-body__checkout-details__icon-btn"
                                                    ]
                                                }
                                            >

                                                <div onClick={() => handleFavActionBtn(course)}
                                                    className={styles["search-results__course-card__card-body__checkout-details__icon-btn__fav-icon"]}>
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
                <Col xs={12} className={styles["search-results__pagination"]}>

                    {searchResults?.pagination?.count > 16 && <Pagination>
                        <Pagination.Prev
                            onClick={() => {
                                handlePageClick(searchResults?.pagination?.current - 1)
                            }}
                            className={`${currentPage == "1" && styles["disabled"]}`} />
                        <Pagination.Item
                            style={{ display: searchResults?.pagination?.previous ? "" : "none" }}
                            active={currentPage == searchResults?.pagination?.previous}
                            onClick={() => {
                                handlePageClick(searchResults?.pagination?.previous)
                            }}>
                            {searchResults?.pagination?.previous}
                        </Pagination.Item>
                        <Pagination.Item
                            active={currentPage == searchResults?.pagination?.current}
                            onClick={() => {
                                handlePageClick(searchResults?.pagination?.current);
                            }}>
                            {searchResults?.pagination?.current}
                        </Pagination.Item>
                        <Pagination.Item
                            style={{ display: searchResults?.pagination?.next ? "" : "none" }}
                            active={currentPage == searchResults?.pagination?.next}
                            onClick={() => {
                                handlePageClick(searchResults?.pagination?.next)
                            }}>
                            {searchResults?.pagination?.next}
                        </Pagination.Item>
                        <Pagination.Next
                            onClick={() => {
                                handlePageClick(searchResults?.pagination?.current + 1)
                            }}
                            className={`${currentPage == searchResults?.pagination?.pages && styles["disabled"]}`} />
                    </Pagination>}

                </Col>
            </Row>
        </>
    )
}

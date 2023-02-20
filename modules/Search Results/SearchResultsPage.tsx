/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import styles from "./search-results-page.module.css";
import { Row, Col, Button, Card, Pagination } from "react-bootstrap";
import { handleFav } from "modules/_Shared/utils/handleFav";
import { handleCart } from "modules/_Shared/utils/handleCart";
import { AddedToCartIcon, AddedToFavouriteIcon, CartIcon, TvIcon, FavouriteIcon } from "common/Icons/Icons";
import Link from 'next/link';
import { useDispatch, useSelector } from "react-redux";
import { axiosInstance } from "configurations/axios/axiosConfig";
import Router, { useRouter } from "next/router";
import { setCartItems } from "configurations/redux/actions/cartItems";
import { GAProductClickEventHandler } from "modules/_Shared/utils/GAEvents";
import { setCheckoutType } from "configurations/redux/actions/checkoutType";
import MetaTagsGenerator from "modules/_Shared/utils/MetaTagsGenerator";
import { toggleLoader } from "modules/_Shared/utils/toggleLoader";
import { handleFreeCourses } from "modules/_Shared/utils/handleFreeCourses";

export default function SearchResultsPage() {
    const [searchResults, setSearchResults] = useState<any>([]);
    const userStatus = useSelector((state: any) => state.userAuthentication);
    const [currentPage, setCurrentPage] = useState("1");
    const [disabledCartBtns, setDisabledCartBtns] = useState<any>([]);
    const dispatch = useDispatch();
    const router = useRouter();
    const themeState = useSelector((state: any) => state.themeState.theme);

    const handleCartActionBtn = (course: any): any => {
        setDisabledCartBtns([...disabledCartBtns, course?.id]);
        setTimeout(() => {
            setDisabledCartBtns(disabledCartBtns.filter((b: any) => b !== course?.id));
        }, 5000);
        dispatch(setCheckoutType("cart"));

        const handleCartResponse: any = handleCart([course], `courses/?keyword=${router.query.q}&page=${currentPage}&limit=16`, false);
        handleCartResponse.then(function (firstresponse: any) {
            firstresponse.resp.then(function (response: any) {
                setSearchResults(response?.data);
                dispatch(setCartItems(firstresponse.cartResponse));
            })
        })
    
    }

    useEffect(() => {
        toggleLoader("show");

        return () => {
            const searchBar: any = document.getElementById("search-field");
            const responsiveSearchBar: any = document.getElementById("responsive-search-field");
            if (searchBar) {
                searchBar.value = "";
                searchBar.blur();
            }
            if (responsiveSearchBar) {
                responsiveSearchBar.value = "";
                responsiveSearchBar.blur();
            }
        }
    }, []);

    useEffect(() => {
        setCurrentPage("1");
        if (router.query && router.query.q) {
            axiosInstance
                .get(`courses/?keyword=${router.query.q}&page=1&limit=16`)
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
        toggleLoader("show");
        window.scrollTo({ top: 0, behavior: "smooth" });
        setCurrentPage(pgNo);
        axiosInstance
            .get(`courses/?keyword=${router?.query?.q}&page=${pgNo}&limit=16`)
            .then(function (response: any) {
                console.log(response);
                setSearchResults(response?.data);
                toggleLoader("hide");
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
            <Row className={styles["search-results-row"]}>
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
                                    course?.categories[0] !== undefined && course?.categories[0].title !== null && course?.categories[0].title !== "" &&

                                    <div
                                        className={
                                            styles["search-results__course-card__category-chip"]
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
                                                "search-results__course-card__course-img"
                                                ]} />
                                    </a>
                                </Link>

                                <Card.Body
                                    className={
                                        styles[
                                        "search-results__course-card__card-body"
                                        ]}>
                                    <div style={{ borderBottom: course?.is_in_user_subscription && "none" }}
                                        className={
                                            styles[
                                            "search-results__course-card__card-body__card-header"
                                            ]}>
                                        <div
                                            className={
                                                styles[
                                                "search-results__course-card__card-body__card-header__trainer-img-box"
                                                ]}>
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
                                                "search-results__course-card__card-body__card-header__course-details"
                                                ]}>
                                            <Link href={`/course/${course?.slug}`}>
                                                <h1 onClick={() => { GAProductClickEventHandler(course, i) }}
                                                    title={course?.title}
                                                    className={
                                                        styles[
                                                        "search-results__course-card__card-body__card-header__course-details__title"
                                                        ]
                                                    }
                                                >
                                                    {course?.title}
                                                </h1>
                                            </Link>
                                            <Link href={`/trainer/${course?.trainer?.slug}`}>
                                                <div title={course?.trainer?.name_ar}
                                                    className={
                                                        styles[
                                                        "search-results__course-card__card-body__card-header__course-details__author"
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
                        )
                    })}

                </Col>
                <Col xs={12} className={styles["search-results__pagination"]}>
                    {searchResults?.pagination?.count > 16 &&
                        <Pagination>
                            <Pagination.Prev
                                onClick={() => {
                                    handlePageClick(searchResults?.pagination?.current - 1)
                                }}
                                className={`${Number(currentPage) == 1 && styles["disabled"]}`} />
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
                        </Pagination>
                    }

                </Col>
            </Row>
        </>
    )
}

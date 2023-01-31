/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Button, Card, Pagination } from "react-bootstrap";
import styles from "./training-courses.module.css";
import { CartIcon, FavouriteIcon, AddedToCartIcon, AddedToFavouriteIcon, TvIcon } from "common/Icons/Icons";
import Link from 'next/link';
import Router from "next/router";
import { setCheckoutType } from "configurations/redux/actions/checkoutType";
import { setCartItems } from "configurations/redux/actions/cartItems";
import { handleFav } from "modules/_Shared/utils/handleFav";
import { handleCart } from "modules/_Shared/utils/handleCart";
import { useRouter } from 'next/router';
import { GAProductClickEventHandler } from "modules/_Shared/utils/GAEvents";
import { axiosInstance } from "configurations/axios/axiosConfig";
import Image from 'next/image';
import { handleFreeCourses } from "modules/_Shared/utils/handleFreeCourses";
import { toggleLoader } from "modules/_Shared/utils/toggleLoader";

export default function TrainingCourses(props: any) {
    const [currentPage, setCurrentPage] = useState("1");
    const [pageNumber, setPageNumber] = useState(1);
    const [disabledCartBtns, setDisabledCartBtns] = useState<any>([]);
    const [pagesArray, setPagesArray] = useState<any>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const userStatus = useSelector((state: any) => state.userAuthentication);
    const dispatch = useDispatch();
    const Router = useRouter();
    const { slug } = Router.query;
    const themeState = useSelector((state: any) => state.themeState.theme);

    const [showMore, setShowMore] = useState<any>({
        first: true,
        second: true,
        third: true,
        fourth: true
    });

    const [filteredCourses, setFilteredCourses] = useState<any>(null);

    useEffect(() => {
        setFilteredCourses(props);
    }, [props])

    const showMoreHandler = (order: any) => {
        switch (order) {
            case "first":
                setShowMore({ ...showMore, first: !showMore[`${order}`] });
                break;
            case "second":
                setShowMore({ ...showMore, second: !showMore[`${order}`] });
                break;
            case "third":
                setShowMore({ ...showMore, third: !showMore[`${order}`] });
                break;
            case "fourth":
                setShowMore({ ...showMore, fourth: !showMore[`${order}`] });
                break;
            default:
                break;
        }

    }

    const [FilterSidebarShow, setFilterSidebarShow] = useState(false);
    const handleFilterSidebarShow = (status: boolean) => {
        setFilterSidebarShow(status);
    }
    const handleFilters = (filterType: any, text: any, value: any, elementId: any): any => {
 
        let checkedElement: any = document.getElementById(elementId);

        switch (filterType) {
            case "orderby":
                //Update UI
                setFilters({ ...filters, orderby: text });
                //Arrange or re-render the courses
            
                break;
            case "level":
                //Update UI
                setFilters({ ...filters, level: text });
                //Filter the courses
                setFilteredCourses(props.data.courses.filter(function (course: any) {
                    return course.level == value;
                })
                );
                break;
            case "topics":
                //Update UI
                setFilters({ ...filters, topics: text });
                //Filter the courses
                if (checkedElement == null || (checkedElement != null && checkedElement.checked)) {//if checking a filter for the first time
                    setFilteredCourses(props.data.courses.filter(function (course: any) {
                        let result = course.categories.filter((o: any) => o.id == value);

                        return result.length > 0;
                    })
                    );
                }
                else if (checkedElement != null && !checkedElement.checked) { //if checking a previously-checked filter
                    setFilteredCourses(props.data.courses);
                }

                break;
            case "price":
                //Update UI
                setFilters({ ...filters, price: text });
                //Filter the courses
                setFilteredCourses(props.data.courses.filter(function (course: any) {
                    if (value == "free") {
                        return course.discounted_price == 0;
                    }
                    else if (value == "paid") {
                        return course.discounted_price > 0;
                    }
                })
                );

                break;
            default:
                break;
        }

    }

    const [filters, setFilters] = useState({
        orderby: "الأكثر مبيعاً",
        level: "جميع المستويات",
        topics: "إختر الموضوع",
        price: "الكل"
    });

    const handlePageClick = (pgNo: any) => {
        toggleLoader("show");
        window.scrollTo({ top: 0, behavior: "smooth" });
        setCurrentPage(pgNo);
        setPagesArray([]);
        let startIndex: any = 0, endIndex: any = 0;

        axiosInstance
            .get(`categories/${slug}/?page=${pgNo}&limit=12`)
            .then(function (response: any) {
                console.log(response.data);
                setFilteredCourses(response?.data);
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
            .catch(function (error: any) {
                toggleLoader("hide");
                console.log(error);
            });
    }

    return (
        <>
            <Row className={styles["training-courses"]}>

                <Col xs={12} className={styles["training-courses__title-col"]}>
                    <div className="d-flex align-items-center justify-content-between">

                        <div>
                            <div className={styles["training-courses__title"]}> الدورات التدريبية </div>
                        </div>
                    </div>
                </Col>

                <Col xs={12} className={styles["training-courses__filtered-courses"]}>
                    {
                        filteredCourses?.data?.courses?.map((course: any, i: number) => {
                            return (

                                <Card className={styles["training-courses__course-card"]} key={i}
                                >
                                    {course.categories[0] !== undefined && course.categories[0].title !== null && course.categories[0].title !== "" &&
                                        <div
                                            className={
                                                styles[
                                                "training-courses__course-card__category-chip"
                                                ]
                                            }
                                            style={{ backgroundColor: `${(props?.data?.color)}` }}
                                        >
                                            {props?.data?.title}
                                        </div>}
                                    <Link href={`/course/${course.slug}`}>
                                        <a onClick={() => { GAProductClickEventHandler(course, i) }}>

                                            <Card.Img
                                                variant="top"
                                                src={course?.image}
                                                alt="course image"
                                                className={
                                                    styles[
                                                    "training-courses__course-card__course-img"
                                                    ]
                                                }
                                            />
                                        </a>
                                    </Link>
                                    <Card.Body
                                        className={
                                            styles[
                                            "training-courses__course-card__card-body"
                                            ]
                                        }
                                    >
                                        <div style={{ borderBottom: course.is_in_user_subscription && "none" }}
                                            className={
                                                styles[
                                                "training-courses__course-card__card-body__card-header"
                                                ]
                                            }
                                        >
                                            <div
                                                className={
                                                    styles[
                                                    "training-courses__course-card__card-body__card-header__trainer-img-box"
                                                    ]
                                                }
                                            >
                                                <Link href={`/trainer/${course.trainer?.slug}`}>

                                                    <img loading="lazy"
                                                        src={course.trainer?.image}
                                                        alt={course.trainer?.name_ar}
                                                    />
                                                </Link>
                                            </div>
                                            <div
                                                className={
                                                    styles[
                                                    "training-courses__course-card__card-body__card-header__course-details"
                                                    ]
                                                }
                                            >
                                                <Link href={`/course/${course.slug}`}>
                                                    <div onClick={() => { GAProductClickEventHandler(course, i) }}
                                                        className={
                                                            styles[
                                                            "training-courses__course-card__card-body__card-header__course-details__title"
                                                            ]
                                                        }
                                                        title={course.title}
                                                    >
                                                        {course.title}
                                                    </div>
                                                </Link>
                                                <Link href={`/trainer/${course.trainer?.slug}`}>

                                                    <div
                                                        className={
                                                            styles[
                                                            "training-courses__course-card__card-body__card-header__course-details__author"
                                                            ]
                                                        }
                                                    >
                                                        {course.trainer?.name_ar}
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            )
                        })
                    }
                </Col>

                <Col xs={12} className={styles["training-courses__pagination"]}>

                    {
                        filteredCourses?.pagination?.count > 12 && <Pagination>
                            <Pagination.Prev
                                onClick={() => {
                                    setPageNumber(filteredCourses?.pagination?.current - 1);
                                    handlePageClick(filteredCourses?.pagination?.current - 1)
                                }}
                                className={`${currentPage == "1" && styles["disabled"]}`} />

                            {
                                pagesArray.map((page: any, index: any) => {
                                    return (
                                        page <= filteredCourses?.pagination?.pages &&
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
                                    setPageNumber(filteredCourses?.pagination?.current + 1);
                                    handlePageClick(filteredCourses?.pagination?.current + 1)
                                }}
                                className={`${currentPage == filteredCourses?.pagination?.pages && styles["disabled"]}`} />
                        </Pagination>
                    }

                </Col>

            </Row>

        </>
    )
}
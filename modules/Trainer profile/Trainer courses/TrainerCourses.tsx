/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { Row, Col, Button, Form, Card, Pagination } from "react-bootstrap";
import styles from "./trainer-courses.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
    CartIcon,
    FavouriteIcon,
    AddedToCartIcon,
    AddedToFavouriteIcon,
    TvIcon
} from "common/Icons/Icons";
import { handleFav } from "modules/_Shared/utils/handleFav";
import { handleCart } from "modules/_Shared/utils/handleCart";
import Router, { useRouter } from "next/router";
import { setCartItems } from "configurations/redux/actions/cartItems";
import { setCheckoutType } from "configurations/redux/actions/checkoutType";
import Link from 'next/link';
import { axiosInstance } from "configurations/axios/axiosConfig";
import Image from 'next/image';
import { handleFreeCourses } from "modules/_Shared/utils/handleFreeCourses";
import { toggleLoader } from "modules/_Shared/utils/toggleLoader";

export default function TrainerCourses() {
    const dispatch = useDispatch();
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState("1");
    const [pageNumber, setPageNumber] = useState(1);
    const Router = useRouter();
    const { slug } = Router.query;

    const trainerProfileData = useSelector((state: any) => state.trainerProfileData);
    const [trainerProfile, setTrainerProfile] = useState<any>({});
    const [disabledCartBtns, setDisabledCartBtns] = useState<any>([]);
    const userStatus = useSelector((state: any) => state.userAuthentication);
    const [trainerSlug, setTrainerSlug] = useState<any>("");
    const themeState = useSelector((state: any) => state.themeState.theme);

    useEffect(() => {
        setTrainerProfile(trainerProfileData?.data || {});
        
    }, [trainerProfileData]);

    useEffect(() => {
        const { slug } = router.query;
        if (router.query.slug) {
            setTrainerSlug(router.query.slug);
        }

    }, [router.query])

    const handlePageClick = (pgNo: any) => {
        toggleLoader("show");
        setCurrentPage(pgNo);
        axiosInstance
            .get(`trainers/${trainerSlug}/?page=${pgNo}&limit=10`)
            .then(function (response: any) {
                console.log(response.data);
                setTrainerProfile(response?.data);
                toggleLoader("hide");

            })
            .catch(function (error: any) {
                console.log(error);
            });
    }

    return (
        <>
            <div className={styles["trainer-courses-box"]}>
                <h2 className={styles["trainer-courses-box__title"]}>
                    <span>عدد الدورات </span>
                    <span>{`(${trainerProfile?.pagination?.count})`}</span>
                </h2>

                <div className={styles["trainer-courses-box__trainer-courses"]}>
                    {trainerProfile?.data !== undefined && trainerProfile?.data?.courses?.map((course: any, i: number) => {
                        return (
                            <Card data-isvisible={false} data-coursedetails={JSON.stringify({
                                name: course?.title,
                                id: course?.id,
                                price: course?.discounted_price_usd,
                                brand: "Tadarab",
                                category: "Recorded Course",
                                variant: "Single Course",
                                list: "suggetion",
                                position: i + 1
                            })}
                                key={i}
                                id={`trainer-courses__course-card${i}`}
                                className={
                                    styles["trainer-courses-box__trainer-courses__course-card"]
                                }
                            >
                                {
                                    (course?.categories[0]) !== undefined && course.categories[0].title !== null && course.categories[0].title !== "" &&


                                    <div
                                        className={
                                            styles[
                                            "trainer-courses-box__trainer-courses__course-card__category-chip"
                                            ]
                                        } style={{ backgroundColor: `${(course?.categories[0]) !== undefined && course?.categories[0].color}` }}
                                    >
                                        {(course?.categories[0]) !== undefined && course.categories[0].title}
                                    </div>
                                }
                                <Link href={`/course/${course.slug}`}>
                                    <a>
                                        <Card.Img
                                            variant="top"
                                            src={course.image}
                                            alt="course image"
                                            className={
                                                styles[
                                                "trainer-courses-box__trainer-courses__course-card__course-img"
                                                ]
                                            }
                                        />
                                    </a>
                                </Link>
                                <Card.Body
                                    className={
                                        styles[
                                        "trainer-courses-box__trainer-courses__course-card__card-body"
                                        ]
                                    }
                                >
                                    <div style={{ borderBottom: course.is_in_user_subscription && "none" }}
                                        className={
                                            styles[
                                            "trainer-courses-box__trainer-courses__course-card__card-body__card-header"
                                            ]
                                        }
                                    >
                                        <div
                                            className={
                                                styles[
                                                "trainer-courses-box__trainer-courses__course-card__card-body__card-header__trainer-img-box"
                                                ]
                                            }
                                        >
                                            <Link href={`/trainer/${course.trainer?.slug}`}>

                                                <img loading="lazy" src={course?.trainer?.image} alt="trainer image" />

                                            </Link>
                                        </div>
                                        <div
                                            className={
                                                styles[
                                                "trainer-courses-box__trainer-courses__course-card__card-body__card-header__course-details"
                                                ]
                                            }
                                        >
                                            <Link href={`/course/${course.slug}`}>
                                                <h3
                                                    className={
                                                        styles[
                                                        "trainer-courses-box__trainer-courses__course-card__card-body__card-header__course-details__title"
                                                        ]
                                                    }
                                                    title={course.title}
                                                >
                                                    {course.title}
                                                </h3>
                                            </Link>
                                            <div title={course.trainer?.name_ar}
                                                className={
                                                    styles[
                                                    "trainer-courses-box__trainer-courses__course-card__card-body__card-header__course-details__author"
                                                    ]
                                                }
                                            >
                                                {course.trainer?.name_ar}
                                            </div>
                                        </div>
                                    </div>

                                </Card.Body>
                            </Card>
                        );
                    })}
                </div>
                {trainerProfile?.pagination?.count > 10 && <div className={styles["trainer-courses-box__pagination"]}>
                    <Pagination>
                        <Pagination.Prev
                            onClick={() => {
                                setPageNumber(trainerProfile?.pagination?.current - 1);
                                handlePageClick(trainerProfile?.pagination?.current - 1)
                            }}
                            className={`${currentPage == "1" && styles["disabled"]}`} />

                        <Pagination.Item
                            style={{ display: trainerProfile?.pagination?.previous ? "" : "none" }}
                            active={currentPage == trainerProfile?.pagination?.previous}
                            onClick={() => {
                                setPageNumber(trainerProfile?.pagination?.previous);
                                handlePageClick(trainerProfile?.pagination?.previous)
                            }}>
                            {trainerProfile?.pagination?.previous}
                        </Pagination.Item>
                        <Pagination.Item
                            active={currentPage == trainerProfile?.pagination?.current}
                            onClick={() => {
                                setPageNumber(trainerProfile?.pagination?.current);
                                handlePageClick(trainerProfile?.pagination?.current);
                            }}>
                            {trainerProfile?.pagination?.current}
                        </Pagination.Item>
                        <Pagination.Item
                            style={{ display: trainerProfile?.pagination?.next ? "" : "none" }}
                            active={currentPage == trainerProfile?.pagination?.next}
                            onClick={() => {
                                setPageNumber(trainerProfile?.pagination?.next);
                                handlePageClick(trainerProfile?.pagination?.next)
                            }}>
                            {trainerProfile?.pagination?.next}
                        </Pagination.Item>

                        <Pagination.Next
                            onClick={() => {
                                setPageNumber(trainerProfile?.pagination?.current + 1);
                                handlePageClick(trainerProfile?.pagination?.current + 1)
                            }}
                            className={`${currentPage == trainerProfile?.pagination?.pages && styles["disabled"]}`} />
                    </Pagination>

                </div>}
            </div>


        </>
    );
}

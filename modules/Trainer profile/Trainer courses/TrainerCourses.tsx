/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { Row, Col, Button, Form, Card } from "react-bootstrap";
import styles from "./trainer-courses.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
    CartIcon,
    FavouriteIcon,
    AddedToCartIcon,
    AddedToFavouriteIcon
} from "common/Icons/Icons";
import { handleFav } from "modules/_Shared/utils/handleFav";
import { handleCart } from "modules/_Shared/utils/handleCart";
import Router from "next/router";
import { setCartItems } from "configurations/redux/actions/cartItems"; 


export default function TrainerCourses() {
    const dispatch = useDispatch();

    const trainerProfileData = useSelector((state: any) => state.trainerProfileData);
    const [trainerProfile, setTrainerProfile] = useState<any>({});
    const userStatus = useSelector((state:any) => state.userAuthentication);

    useEffect(() => {
        setTrainerProfile(trainerProfileData.data || {});
    }, [trainerProfileData]);

    const handleFavActionBtn = (course: any): any => {
        if (userStatus.isUserAuthenticated == true) {
            const handleFavResponse: any = handleFav(course, "trainers/10253/?country_code=eg");
            handleFavResponse.then(function (response: any) {
                setTrainerProfile(response.data.data);
                console.log("response.data.data",response.data.data);
            })
        } else {
            Router.push({
                pathname: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}SignIn`,
                query: { from: "/TrainerProfile" }
            })
        }
    }

    const handleCartActionBtn = (course: any): any => {

        if (userStatus?.isUserAuthenticated == true) {
            const handleCartResponse: any = handleCart(course, "trainers/10253/?country_code=eg", true);
            handleCartResponse.then(function (firstresponse: any) {
                firstresponse.resp.then(function (response: any) {
                    setTrainerProfile(response.data.data);
                // console.log("response.data.data",response.data.data);
                dispatch(setCartItems(firstresponse.cartResponse));
                // console.log("firstresponse.totalItems",firstresponse.cartResponse);
                })
                //  setLocalCartItems(response.totalItems);
            })
        }
        else {
            const handleCartResponse: any = handleCart(course, "trainers/10253/?country_code=eg", false);
            handleCartResponse.then(function (response: any) {
                dispatch(setCartItems(response.data.data));
                let newArray:any = trainerProfile.courses;
                response.data.data?.forEach((element:any) => {
                newArray.forEach((ele:any) => {
                    if(element.id === ele.id){
                        // console.log(ele);
                        ele.is_in_cart = true;
                    }
                });
            });
            setTrainerProfile({...trainerProfile,courses:newArray});
            
            })

        }
        // setLatestCourses([...latestCourses]);
    }

    return (
        <>
            <div className={styles["trainer-courses-box"]}>
                <div className={styles["trainer-courses-box__title"]}>
                    <span>عدد الدورات </span>
                    <span>({trainerProfile !== undefined && trainerProfile.courses?.length})</span>
                </div>

                <div className={styles["trainer-courses-box__trainer-courses"]}>
                    {trainerProfile !== undefined && trainerProfile.courses?.map((course: any, i: number) => {
                        return (
                            <Card
                                key={i}
                                className={
                                    styles["trainer-courses-box__trainer-courses__course-card"]
                                }
                            >
                                <div
                                    className={
                                        styles[
                                        "trainer-courses-box__trainer-courses__course-card__category-chip"
                                        ]
                                    } style={{ backgroundColor: `${course.categories[0].color}` }}
                                >
                                    {course.categories[0].title}
                                </div>
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
                                <Card.Body
                                    className={
                                        styles[
                                        "trainer-courses-box__trainer-courses__course-card__card-body"
                                        ]
                                    }
                                >
                                    <div
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
                                            <img src={course.trainer.image} alt="trainer image" />
                                        </div>
                                        <div
                                            className={
                                                styles[
                                                "trainer-courses-box__trainer-courses__course-card__card-body__card-header__course-details"
                                                ]
                                            }
                                        >
                                            <h1
                                                className={
                                                    styles[
                                                    "trainer-courses-box__trainer-courses__course-card__card-body__card-header__course-details__title"
                                                    ]
                                                }
                                                title={course.title}
                                            >
                                                {course.title}
                                            </h1>
                                            <div title={course.trainer.name_ar}
                                                className={
                                                    styles[
                                                    "trainer-courses-box__trainer-courses__course-card__card-body__card-header__course-details__author"
                                                    ]
                                                }
                                            >
                                                {course.trainer.name_ar}
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className={
                                            styles[
                                            "trainer-courses-box__trainer-courses__course-card__card-body__checkout-details"
                                            ]
                                        }
                                    >
                                        <div className="d-inline-block">
                                            <div
                                                className={
                                                    styles[
                                                    "trainer-courses-box__trainer-courses__course-card__card-body__checkout-details__price-container"
                                                    ]
                                                }
                                            >
                                                <span
                                                    className={
                                                        styles[
                                                        "trainer-courses-box__trainer-courses__course-card__card-body__checkout-details__price-container__price"
                                                        ]
                                                    }
                                                >
                                                    {course.is_purchased && "تم الشراء"}
                                                    {
                                                        !course.is_purchased && (course.discounted_price == 0 ? "مجانًا" : course.discounted_price)
                                                    }
                                                </span>
                                                {
                                                    course.discounted_price !== 0 && !course.is_purchased &&
                                                <span
                                                    className={
                                                        styles[
                                                        "trainer-courses-box__trainer-courses__course-card__card-body__checkout-details__price-container__currency"
                                                        ]
                                                    }
                                                >
                                                    {course.currency_code}
                                                </span>
                                                }


                                            </div>
                                            {
                                                (course.price > course.discounted_price) && !course.is_purchased &&
                                                <div
                                                    className={
                                                        styles[
                                                        "trainer-courses-box__trainer-courses__course-card__card-body__checkout-details__old-price-container"
                                                        ]
                                                    }
                                                >
                                                    <span
                                                        className={
                                                            styles[
                                                            "trainer-courses-box__trainer-courses__course-card__card-body__checkout-details__old-price-container__price"
                                                            ]
                                                        }
                                                    >
                                                        {course.price}
                                                    </span>
                                                    <span
                                                        className={
                                                            styles[
                                                            "trainer-courses-box__trainer-courses__course-card__card-body__checkout-details__old-price-container__currency"
                                                            ]
                                                        }
                                                    >
                                                        {course.currency_code}
                                                    </span>
                                                </div>
                                            }
                                        </div>

                                        <div className="d-inline-block">
                                            { !course.is_purchased && <Button disabled={course.is_in_cart} variant={""}
                                                className={
                                                    styles[
                                                    "trainer-courses-box__trainer-courses__course-card__card-body__checkout-details__icon-btn"
                                                    ]
                                                }
                                            >
                                                <div onClick={() => handleCartActionBtn(course)}
                                                    className={styles["trainer-courses-box__trainer-courses__course-card__card-body__checkout-details__icon-btn__cart-icon"]}>

                                                    {
                                                    course.is_in_cart ?
                                                    <AddedToCartIcon color="#222"/>
                                                    : 
                                                    <CartIcon color="#222"/>
                                                    }
                                                </div>
                                            </Button>}
                                            <Button
                                                className={
                                                    styles[
                                                    "trainer-courses-box__trainer-courses__course-card__card-body__checkout-details__icon-btn"
                                                    ]
                                                }
                                            >
                                                <div onClick={() => handleFavActionBtn(course)}
                                                    className={styles["trainer-courses-box__trainer-courses__course-card__card-body__checkout-details__icon-btn__fav-icon"]}>

                                                    {
                                                    course.is_in_favorites ?
                                                    <AddedToFavouriteIcon />
                                                    : 
                                                    <FavouriteIcon color="#222"/>
                                                    }
                                                </div>
                                            </Button>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

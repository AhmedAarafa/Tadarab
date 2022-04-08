/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { Row, Col, Button, Card, Pagination } from "react-bootstrap";
import styles from "./my-account-page.module.css";
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
import { FBPixelEventsHandler } from 'modules/_Shared/utils/FBPixelEvents';
import { toggleLoader } from "modules/_Shared/utils/toggleLoader";

export default function MyAccountPage() {
  const [courseListing, setCourseListing] = useState<any>([]);
  const userStatus = useSelector((state: any) => state.userAuthentication);
  const dispatch = useDispatch();
  const router = useRouter();


  const handleFavActionBtn = (course: any): any => {
    if (userStatus.isUserAuthenticated == true) {
      const handleFavResponse: any = handleFav(course, `users/purchased/?country_code=eg`);
      handleFavResponse.then(function (response: any) {
        setCourseListing(response?.data);
      })
    } else {
      Router.push({
        pathname: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}sign-in`,
        query: { from: "my-account" }
      })
    }
  }

  const handleCartActionBtn = (course: any): any => {
    dispatch(setCheckoutType("cart"));

    const handleCartResponse: any = handleCart([course], `users/purchased/?country_code=eg`, false);
    handleCartResponse.then(function (firstresponse: any) {
      firstresponse.resp.then(function (response: any) {
        console.log("response,", response);
        console.log("firstresponse", firstresponse);

        setCourseListing(response?.data);
        dispatch(setCartItems(firstresponse.cartResponse));
      })
    })

  }

  useEffect(() => {
    toggleLoader("show");

    axiosInstance
      .get(`users/purchased/?country_code=eg`)
      .then(function (response: any) {
        setCourseListing(response?.data);
        FBPixelEventsHandler(response.data.fb_tracking_events, null);
        toggleLoader("hide");
        
      })
      .catch(function (error) {
        toggleLoader("hide");
        console.log(error);
      });

  }, []);



  return (
    <>
      <Row>
        <Col xs={12} className={styles["my-account"]}>
          {console.log(courseListing?.data)
          }
          {courseListing?.data?.length == 0 &&
            <div className={styles["my-account__you-have-no-courses"]}>
              لا يوجد دورات في حسابك
            </div>
          }
          {courseListing?.data?.map((course: any, i: number) => {

            return (
              <Card key={i} className={styles["my-account__course-card"]}>
                {
                  course.categories[0] !== undefined && course.categories[0].title !== null && course.categories[0].title !== "" &&
                  <div
                    className={
                      styles["my-account__course-card__category-chip"]
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
                        "my-account__course-card__course-img"
                        ]
                      }
                    />

                  </a>
                </Link>

                <Card.Body
                  className={
                    styles[
                    "my-account__course-card__card-body"
                    ]
                  }
                >
                  <div
                    className={
                      styles[
                      "my-account__course-card__card-body__card-header"
                      ]
                    }
                  >
                    <div
                      className={
                        styles[
                        "my-account__course-card__card-body__card-header__trainer-img-box"
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
                        "my-account__course-card__card-body__card-header__course-details"
                        ]
                      }
                    >
                      <Link href="/course">
                        <h1 onClick={() => { GAProductClickEventHandler(course, i) }}
                          title={course.title}
                          className={
                            styles[
                            "my-account__course-card__card-body__card-header__course-details__title"
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
                            "my-account__course-card__card-body__card-header__course-details__author"
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
                      "my-account__course-card__card-body__checkout-details"
                      ]
                    }
                  >
                    <div >
                      <div
                        className={
                          styles[
                          "my-account__course-card__card-body__checkout-details__price-container"
                          ]
                        }
                      >
                        {course.discounted_price !== 0 && !course.is_purchased && <span
                          className={
                            styles[
                            "my-account__course-card__card-body__checkout-details__price-container__currency"
                            ]
                          }
                        >
                          {!course.is_in_user_subscription && course.currency_code}
                        </span>}

                        <span
                          className={
                            styles[
                            "my-account__course-card__card-body__checkout-details__price-container__price"
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
                            "my-account__course-card__card-body__checkout-details__old-price-container"
                            ]
                          }
                        >
                          <span
                            className={
                              styles[
                              "my-account__course-card__card-body__checkout-details__old-price-container__currency"
                              ]
                            }
                          >
                            {course.currency_code}
                          </span>
                          <span
                            className={
                              styles[
                              "my-account__course-card__card-body__checkout-details__old-price-container__price"
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
                          "my-account__course-card__card-body__checkout-details__icon-btn"
                          ]
                        }
                      >
                        <div onClick={() => handleCartActionBtn(course)}
                          className={styles["my-account__course-card__card-body__checkout-details__icon-btn__cart-icon"]}>
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
                          "my-account__course-card__card-body__checkout-details__icon-btn"
                          ]
                        }
                      >

                        <div onClick={() => handleFavActionBtn(course)}
                          className={styles["my-account__course-card__card-body__checkout-details__icon-btn__fav-icon"]}>
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


      </Row>

    </>
  )
}

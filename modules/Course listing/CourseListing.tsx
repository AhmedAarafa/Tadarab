/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { Row, Col, Button, Card } from "react-bootstrap";
import styles from "./course-listing.module.css";
import Router,{useRouter} from "next/router";
import { axiosInstance } from "configurations/axios/axiosConfig";
import { GAProductClickEventHandler } from "modules/_Shared/utils/GAEvents";
import { AddedToCartIcon, AddedToFavouriteIcon, CartIcon, FavouriteIcon } from "common/Icons/Icons";
import Link from 'next/link';
import { handleFav } from "modules/_Shared/utils/handleFav";
import { handleCart } from "modules/_Shared/utils/handleCart";
import { useDispatch, useSelector } from "react-redux";  
import { setCheckoutType } from "configurations/redux/actions/checkoutType"; 
import { setCartItems } from "configurations/redux/actions/cartItems"; 

export default function CourseListing() {
    const [courseListing, setCourseListing] = useState<any>([]);
    const userStatus = useSelector((state:any) => state.userAuthentication);
    const dispatch = useDispatch();
    const router = useRouter();

    const handleFavActionBtn = (course:any):any =>{
        if(userStatus.isUserAuthenticated == true){
        const handleFavResponse:any =  handleFav(
            course,`courses/?country_code=${localStorage.getItem("countryCode")}&page=1&limit=999&type=${Router.query.filter_type}`);
        handleFavResponse.then(function(response:any) {
            setCourseListing(response.data.data.best_seller_courses);
        })
        }else{
          Router.push({
            pathname: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}signin`,
            query: { from: "/HomePage" }
          })
        }
      }
    
      const handleCartActionBtn = (course:any):any =>{
        dispatch(setCheckoutType("cart"));
        
          const handleCartResponse:any =  handleCart(
              [course],`courses/?country_code=${localStorage.getItem("countryCode")}&page=1&limit=999&type=${Router.query.filter_type}`,false);
          handleCartResponse.then(function(firstresponse:any) {
            firstresponse.resp.then(function(response:any){
                console.log("response,",response);
                console.log("firstresponse",firstresponse);
                
                setCourseListing(response.data.data);
               dispatch(setCartItems(firstresponse.cartResponse));
            })
          })
     
      }

    useEffect(() => {
        if (router.query && router.query.filter_type) {
            console.log("router.query.filter_type",router.query.filter_type);
            
            axiosInstance
              .get(`courses/?country_code=${localStorage.getItem("countryCode")}&page=1&limit=999&type=${router.query.filter_type}`)
              .then(function (response:any) {
             console.log(response);
             setCourseListing(response?.data.data);
             
            })
            .catch(function (error) {
              console.log(error); 
            });
         }
    
    }, [router.query]);

  return (
    <>
    <Row>
        <Col xs={12} className={styles["course-listing"]}>
            {console.log(courseListing)
            }
        {courseListing?.courses?.map((course:any , i:number)=>{
                            return(

                                <Card onClick={()=>{GAProductClickEventHandler(course,i)}} key={i} className={styles["course-listing__course-card"]}>
                                    {course.categories !== undefined &&
                                        <div
                                            className={
                                                styles["course-listing__course-card__category-chip"]
                                            }
                                            style={{ backgroundColor: course?.categories[0]?.color }}
                                        >
                                            {course?.categories[0]?.title}
                                        </div>}

                                    <Link href={`/course/${course.slug}`}>

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
                                    </Link>

                                    <Card.Body
                                        className={
                                            styles[
                                            "course-listing__course-card__card-body"
                                            ]
                                        }
                                    >
                                        <div
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
                                                    <img
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
                                                    <h1
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
                                                        {course.currency_code}
                                                    </span>}

                                                    <span
                                                        className={
                                                            styles[
                                                            "course-listing__course-card__card-body__checkout-details__price-container__price"
                                                            ]
                                                        }
                                                    >
                                                        {course.is_purchased && "تم الشراء"}
                                                        {
                                                            !course.is_purchased && (course.discounted_price == 0 ? "مجانًا" : course.discounted_price)
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
                                                {!course.is_purchased && <Button disabled={course.is_in_cart} variant={""}
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
                                                                <AddedToFavouriteIcon color="af151f"/>
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

/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Row, Col, Button,Card } from "react-bootstrap";
import styles from "./category-courses.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";

export default function CategoryCourses() {
  SwiperCore.use([Navigation]);
  
    return (
        <>
        <Row className={styles["category-courses"]}>


            <Col xs={12} className={styles["category-courses__title"]}>
            الدورات في الفنون
            </Col>


            <Col xs={12} className={styles["category-courses__filter-list-col"]}>
            <ul className={styles["category-courses__filter-list"]}>
                <li
                className={
                    styles["category-courses__filter-list__item--active"]
                }
                >
               كل الدورات
                </li>
                <li className={styles["category-courses__filter-list__item"]}>
                الأكثر مبيعاً
                </li>
                <li className={styles["category-courses__filter-list__item"]}>
                أشهر الدورات
                </li>
                
            </ul>
            </Col>

            <Col xs={12} className={styles["category-courses__cards-carousel"]}>
        <Swiper dir="rtl" slidesPerView={3.8} navigation={true} 
        breakpoints={{
            "50": {
                slidesPerView: 1,
              },
              "576": {
                slidesPerView: 2.8,
              },
              "981": {
                slidesPerView: 3.8,
              },
              "1201": {
                slidesPerView: 4.8,
              },
        }} className="mySwiper">
            <SwiperSlide>
                <Card
                    className={
                        styles["category-courses__cards-carousel__course-card"]
                    }
                    >
                    <div
                        className={
                        styles[
                            "category-courses__cards-carousel__course-card__category-chip"
                        ]
                        }
                    > 
                        الفنون 
                    </div>
                    <Card.Img
                        variant="top"
                        src="/images/course2cropped.png"
                        alt="course image"
                        className={
                        styles[
                            "category-courses__cards-carousel__course-card__course-img"
                        ]
                        }
                    />
                    <Card.Body
                        className={
                        styles[
                            "category-courses__cards-carousel__course-card__card-body"
                        ]
                        }
                    >
                        <div
                        className={
                            styles[
                            "category-courses__cards-carousel__course-card__card-body__card-header"
                            ]
                        }
                        >
                        <div
                            className={
                            styles[
                                "category-courses__cards-carousel__course-card__card-body__card-header__trainer-img-box"
                            ]
                            }
                        >
                            <img
                            src="/images/trainer img.png"
                            alt="trainer image"
                            />
                        </div>
                        <div
                            className={
                            styles[
                                "category-courses__cards-carousel__course-card__card-body__card-header__course-details"
                            ]
                            }
                        >
                            <h1
                            className={
                                styles[
                                "category-courses__cards-carousel__course-card__card-body__card-header__course-details__title"
                                ]
                            }
                            >
                            إحتراف التصوير بالكاميرا
                            </h1>
                            <div
                            className={
                                styles[
                                "category-courses__cards-carousel__course-card__card-body__card-header__course-details__author"
                                ]
                            }
                            >
                            م. محمد مصطفي
                            </div>
                        </div>
                        </div>

                        <div
                        className={
                            styles[
                            "category-courses__cards-carousel__course-card__card-body__checkout-details"
                            ]
                        }
                        >
                        <div className="d-flex flex-column">
                            <div
                            className={
                                styles[
                                "category-courses__cards-carousel__course-card__card-body__checkout-details__price-container"
                                ]
                            }
                            >
                            <span
                                className={
                                styles[
                                    "category-courses__cards-carousel__course-card__card-body__checkout-details__price-container__price"
                                ]
                                }
                            >
                                850
                            </span>
                            <span
                                className={
                                styles[
                                    "category-courses__cards-carousel__course-card__card-body__checkout-details__price-container__currency"
                                ]
                                }
                            >
                                جنية مصري
                            </span>
                            </div>
                            <div
                            className={
                                styles[
                                "category-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container"
                                ]
                            }
                            >
                            <span
                                className={
                                styles[
                                    "category-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__price"
                                ]
                                }
                            >
                                950
                            </span>
                            <span
                                className={
                                styles[
                                    "category-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__currency"
                                ]
                                }
                            >
                                جنية مصري
                            </span>
                            </div>
                        </div>

                        <div className="d-inline-block">
                            <Button
                            className={
                                styles[
                                "category-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                                ]
                            }
                            >
                            <svg className={styles["category-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn__cart-icon"]}  
                            xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 25 22.135">
                            <g id="add_to_cart" data-name="add to cart" transform="translate(-989 -650)">
                                <g id="Group_10771" data-name="Group 10771" transform="translate(1003.676 664.648)">
                                <g id="Group_9975" data-name="Group 9975" transform="translate(0 0)">
                                    <path id="Path_12759" data-name="Path 12759" d="M344.29,362.612a2.743,2.743,0,1,0,2.743,2.743A2.746,2.746,0,0,0,344.29,362.612Zm0,3.84a1.1,1.1,0,1,1,1.1-1.1A1.1,1.1,0,0,1,344.29,366.452Z" transform="translate(-341.547 -362.612)" fill="#222"/>
                                </g>
                                </g>
                                <g id="Group_10770" data-name="Group 10770" transform="translate(989 650)">
                                <g id="Group_9977" data-name="Group 9977" transform="translate(0 0)">
                                    <path id="Path_12760" data-name="Path 12760" d="M21.825,25.751a.822.822,0,0,0-.648-.316H5.08l-.741-3.1a.823.823,0,0,0-.8-.632H.823a.823.823,0,1,0,0,1.646H2.889L5.564,34.542a.823.823,0,0,0,.8.632H19.175a.823.823,0,0,0,.8-.625l2-8.092A.824.824,0,0,0,21.825,25.751Zm-3.294,7.776H7.014L5.473,27.082H20.126Z" transform="translate(0 -21.705)" fill="#222"/>
                                </g>
                                </g>
                                <g id="Group_10772" data-name="Group 10772" transform="translate(993.719 664.648)">
                                <g id="Group_9979" data-name="Group 9979" transform="translate(0 0)">
                                    <path id="Path_12761" data-name="Path 12761" d="M112.549,362.612a2.743,2.743,0,1,0,2.743,2.743A2.746,2.746,0,0,0,112.549,362.612Zm0,3.84a1.1,1.1,0,1,1,1.1-1.1A1.1,1.1,0,0,1,112.549,366.452Z" transform="translate(-109.806 -362.612)" fill="#222"/>
                                </g>
                                </g>
                            </g>
                            </svg>

                            </Button>
                            <Button
                            className={
                                styles[
                                "category-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                                ]
                            }
                            >
                            
                            <svg className={styles["category-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn__fav-icon"]} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20.571 18">
    <g id="favorite" transform="translate(0.012 -31.967)" fill="none">
        <path d="M18.562,33.2a5.494,5.494,0,0,0-7.5.546l-.792.816-.792-.816a5.494,5.494,0,0,0-7.5-.546,5.769,5.769,0,0,0-.4,8.353l7.774,8.028a1.26,1.26,0,0,0,1.82,0l7.774-8.028A5.766,5.766,0,0,0,18.562,33.2Z" stroke="none"/>
        <path d="M 5.35462474822998 33.66680526733398 C 4.504674911499023 33.66680526733398 3.720794677734375 33.95197296142578 3.088695526123047 34.49063491821289 C 2.242284774780273 35.21304321289062 1.746435165405273 36.23271560668945 1.692474365234375 37.36181259155273 C 1.638875961303711 38.48357391357422 2.045904159545898 39.57950592041016 2.80848503112793 40.36787414550781 L 10.27174949645996 48.07412719726562 L 17.7353458404541 40.36752319335938 C 18.49968528747559 39.5787353515625 18.90761566162109 38.48318481445312 18.85453414916992 37.36177444458008 C 18.80109596252441 36.23286437988281 18.30541610717773 35.21321487426758 17.45979499816895 34.49146270751953 C 16.82672500610352 33.95196533203125 16.04329490661621 33.66680526733398 15.19420528411865 33.66680526733398 C 14.12225532531738 33.66680526733398 13.06226539611816 34.12616348266602 12.28523540496826 34.92791366577148 L 10.2737455368042 37.00065231323242 L 8.26032543182373 34.92589569091797 C 7.48636531829834 34.12572479248047 6.427274703979492 33.66680526733398 5.35462474822998 33.66680526733398 M 5.354625701904297 31.96680068969727 C 6.852423667907715 31.96680068969727 8.36213493347168 32.58594131469727 9.482254981994629 33.74399566650391 L 10.27375507354736 34.55960464477539 L 11.06526470184326 33.74399566650391 C 13.08620452880859 31.65876007080078 16.36069488525391 31.32126617431641 18.56244468688965 33.19757461547852 C 21.08560562133789 35.35110473632812 21.21819496154785 39.21621322631836 18.95618438720703 41.55054473876953 L 11.18177509307861 49.57808685302734 C 10.67955589294434 50.09637069702148 9.863945960998535 50.09637451171875 9.361715316772461 49.57808685302734 L 1.587305068969727 41.55054473876953 C -0.670684814453125 39.21621322631836 -0.5381050109863281 35.35110473632812 1.985065460205078 33.19757461547852 C 2.964054107666016 32.3632926940918 4.155433654785156 31.96680068969727 5.354625701904297 31.96680068969727 Z" stroke="none" fill="#222"/>
    </g>
    </svg>

                            </Button>
                        </div>
                        </div>
                    </Card.Body>
                </Card>
            </SwiperSlide>
            <SwiperSlide>
                <Card
                    className={
                        styles["category-courses__cards-carousel__course-card"]
                    }
                    >
                    <div
                        className={
                        styles[
                            "category-courses__cards-carousel__course-card__category-chip"
                        ]
                        }
                    > 
                        الفنون 
                    </div>
                    <Card.Img
                        variant="top"
                        src="/images/course2cropped.png"
                        alt="course image"
                        className={
                        styles[
                            "category-courses__cards-carousel__course-card__course-img"
                        ]
                        }
                    />
                    <Card.Body
                        className={
                        styles[
                            "category-courses__cards-carousel__course-card__card-body"
                        ]
                        }
                    >
                        <div
                        className={
                            styles[
                            "category-courses__cards-carousel__course-card__card-body__card-header"
                            ]
                        }
                        >
                        <div
                            className={
                            styles[
                                "category-courses__cards-carousel__course-card__card-body__card-header__trainer-img-box"
                            ]
                            }
                        >
                            <img
                            src="/images/trainer img.png"
                            alt="trainer image"
                            />
                        </div>
                        <div
                            className={
                            styles[
                                "category-courses__cards-carousel__course-card__card-body__card-header__course-details"
                            ]
                            }
                        >
                            <h1
                            className={
                                styles[
                                "category-courses__cards-carousel__course-card__card-body__card-header__course-details__title"
                                ]
                            }
                            >
                            إحتراف التصوير بالكاميرا
                            </h1>
                            <div
                            className={
                                styles[
                                "category-courses__cards-carousel__course-card__card-body__card-header__course-details__author"
                                ]
                            }
                            >
                            م. محمد مصطفي
                            </div>
                        </div>
                        </div>

                        <div
                        className={
                            styles[
                            "category-courses__cards-carousel__course-card__card-body__checkout-details"
                            ]
                        }
                        >
                        <div className="d-inline-block">
                            <div
                            className={
                                styles[
                                "category-courses__cards-carousel__course-card__card-body__checkout-details__price-container"
                                ]
                            }
                            >
                            <span
                                className={
                                styles[
                                    "category-courses__cards-carousel__course-card__card-body__checkout-details__price-container__price"
                                ]
                                }
                            >
                                850
                            </span>
                            <span
                                className={
                                styles[
                                    "category-courses__cards-carousel__course-card__card-body__checkout-details__price-container__currency"
                                ]
                                }
                            >
                                جنية مصري
                            </span>
                            </div>
                            <div
                            className={
                                styles[
                                "category-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container"
                                ]
                            }
                            >
                            <span
                                className={
                                styles[
                                    "category-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__price"
                                ]
                                }
                            >
                                950
                            </span>
                            <span
                                className={
                                styles[
                                    "category-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__currency"
                                ]
                                }
                            >
                                جنية مصري
                            </span>
                            </div>
                        </div>

                        <div className="d-inline-block">
                            <Button
                            className={
                                styles[
                                "category-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                                ]
                            }
                            >
                            <svg className={styles["category-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn__cart-icon"]}  
                            xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 25 22.135">
                            <g id="add_to_cart" data-name="add to cart" transform="translate(-989 -650)">
                                <g id="Group_10771" data-name="Group 10771" transform="translate(1003.676 664.648)">
                                <g id="Group_9975" data-name="Group 9975" transform="translate(0 0)">
                                    <path id="Path_12759" data-name="Path 12759" d="M344.29,362.612a2.743,2.743,0,1,0,2.743,2.743A2.746,2.746,0,0,0,344.29,362.612Zm0,3.84a1.1,1.1,0,1,1,1.1-1.1A1.1,1.1,0,0,1,344.29,366.452Z" transform="translate(-341.547 -362.612)" fill="#222"/>
                                </g>
                                </g>
                                <g id="Group_10770" data-name="Group 10770" transform="translate(989 650)">
                                <g id="Group_9977" data-name="Group 9977" transform="translate(0 0)">
                                    <path id="Path_12760" data-name="Path 12760" d="M21.825,25.751a.822.822,0,0,0-.648-.316H5.08l-.741-3.1a.823.823,0,0,0-.8-.632H.823a.823.823,0,1,0,0,1.646H2.889L5.564,34.542a.823.823,0,0,0,.8.632H19.175a.823.823,0,0,0,.8-.625l2-8.092A.824.824,0,0,0,21.825,25.751Zm-3.294,7.776H7.014L5.473,27.082H20.126Z" transform="translate(0 -21.705)" fill="#222"/>
                                </g>
                                </g>
                                <g id="Group_10772" data-name="Group 10772" transform="translate(993.719 664.648)">
                                <g id="Group_9979" data-name="Group 9979" transform="translate(0 0)">
                                    <path id="Path_12761" data-name="Path 12761" d="M112.549,362.612a2.743,2.743,0,1,0,2.743,2.743A2.746,2.746,0,0,0,112.549,362.612Zm0,3.84a1.1,1.1,0,1,1,1.1-1.1A1.1,1.1,0,0,1,112.549,366.452Z" transform="translate(-109.806 -362.612)" fill="#222"/>
                                </g>
                                </g>
                            </g>
                            </svg>

                            </Button>
                            <Button
                            className={
                                styles[
                                "category-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                                ]
                            }
                            >
                            
                            <svg className={styles["category-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn__fav-icon"]} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20.571 18">
    <g id="favorite" transform="translate(0.012 -31.967)" fill="none">
        <path d="M18.562,33.2a5.494,5.494,0,0,0-7.5.546l-.792.816-.792-.816a5.494,5.494,0,0,0-7.5-.546,5.769,5.769,0,0,0-.4,8.353l7.774,8.028a1.26,1.26,0,0,0,1.82,0l7.774-8.028A5.766,5.766,0,0,0,18.562,33.2Z" stroke="none"/>
        <path d="M 5.35462474822998 33.66680526733398 C 4.504674911499023 33.66680526733398 3.720794677734375 33.95197296142578 3.088695526123047 34.49063491821289 C 2.242284774780273 35.21304321289062 1.746435165405273 36.23271560668945 1.692474365234375 37.36181259155273 C 1.638875961303711 38.48357391357422 2.045904159545898 39.57950592041016 2.80848503112793 40.36787414550781 L 10.27174949645996 48.07412719726562 L 17.7353458404541 40.36752319335938 C 18.49968528747559 39.5787353515625 18.90761566162109 38.48318481445312 18.85453414916992 37.36177444458008 C 18.80109596252441 36.23286437988281 18.30541610717773 35.21321487426758 17.45979499816895 34.49146270751953 C 16.82672500610352 33.95196533203125 16.04329490661621 33.66680526733398 15.19420528411865 33.66680526733398 C 14.12225532531738 33.66680526733398 13.06226539611816 34.12616348266602 12.28523540496826 34.92791366577148 L 10.2737455368042 37.00065231323242 L 8.26032543182373 34.92589569091797 C 7.48636531829834 34.12572479248047 6.427274703979492 33.66680526733398 5.35462474822998 33.66680526733398 M 5.354625701904297 31.96680068969727 C 6.852423667907715 31.96680068969727 8.36213493347168 32.58594131469727 9.482254981994629 33.74399566650391 L 10.27375507354736 34.55960464477539 L 11.06526470184326 33.74399566650391 C 13.08620452880859 31.65876007080078 16.36069488525391 31.32126617431641 18.56244468688965 33.19757461547852 C 21.08560562133789 35.35110473632812 21.21819496154785 39.21621322631836 18.95618438720703 41.55054473876953 L 11.18177509307861 49.57808685302734 C 10.67955589294434 50.09637069702148 9.863945960998535 50.09637451171875 9.361715316772461 49.57808685302734 L 1.587305068969727 41.55054473876953 C -0.670684814453125 39.21621322631836 -0.5381050109863281 35.35110473632812 1.985065460205078 33.19757461547852 C 2.964054107666016 32.3632926940918 4.155433654785156 31.96680068969727 5.354625701904297 31.96680068969727 Z" stroke="none" fill="#222"/>
    </g>
    </svg>

                            </Button>
                        </div>
                        </div>
                    </Card.Body>
                </Card>
            </SwiperSlide>
            <SwiperSlide>
                <Card
                    className={
                        styles["category-courses__cards-carousel__course-card"]
                    }
                    >
                    <div
                        className={
                        styles[
                            "category-courses__cards-carousel__course-card__category-chip"
                        ]
                        }
                    > 
                        الفنون 
                    </div>
                    <Card.Img
                        variant="top"
                        src="/images/course2cropped.png"
                        alt="course image"
                        className={
                        styles[
                            "category-courses__cards-carousel__course-card__course-img"
                        ]
                        }
                    />
                    <Card.Body
                        className={
                        styles[
                            "category-courses__cards-carousel__course-card__card-body"
                        ]
                        }
                    >
                        <div
                        className={
                            styles[
                            "category-courses__cards-carousel__course-card__card-body__card-header"
                            ]
                        }
                        >
                        <div
                            className={
                            styles[
                                "category-courses__cards-carousel__course-card__card-body__card-header__trainer-img-box"
                            ]
                            }
                        >
                            <img
                            src="/images/trainer img.png"
                            alt="trainer image"
                            />
                        </div>
                        <div
                            className={
                            styles[
                                "category-courses__cards-carousel__course-card__card-body__card-header__course-details"
                            ]
                            }
                        >
                            <h1
                            className={
                                styles[
                                "category-courses__cards-carousel__course-card__card-body__card-header__course-details__title"
                                ]
                            }
                            >
                            إحتراف التصوير بالكاميرا
                            </h1>
                            <div
                            className={
                                styles[
                                "category-courses__cards-carousel__course-card__card-body__card-header__course-details__author"
                                ]
                            }
                            >
                            م. محمد مصطفي
                            </div>
                        </div>
                        </div>

                        <div
                        className={
                            styles[
                            "category-courses__cards-carousel__course-card__card-body__checkout-details"
                            ]
                        }
                        >
                        <div className="d-inline-block">
                            <div
                            className={
                                styles[
                                "category-courses__cards-carousel__course-card__card-body__checkout-details__price-container"
                                ]
                            }
                            >
                            <span
                                className={
                                styles[
                                    "category-courses__cards-carousel__course-card__card-body__checkout-details__price-container__price"
                                ]
                                }
                            >
                                850
                            </span>
                            <span
                                className={
                                styles[
                                    "category-courses__cards-carousel__course-card__card-body__checkout-details__price-container__currency"
                                ]
                                }
                            >
                                جنية مصري
                            </span>
                            </div>
                            <div
                            className={
                                styles[
                                "category-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container"
                                ]
                            }
                            >
                            <span
                                className={
                                styles[
                                    "category-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__price"
                                ]
                                }
                            >
                                950
                            </span>
                            <span
                                className={
                                styles[
                                    "category-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__currency"
                                ]
                                }
                            >
                                جنية مصري
                            </span>
                            </div>
                        </div>

                        <div className="d-inline-block">
                            <Button
                            className={
                                styles[
                                "category-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                                ]
                            }
                            >
                            <svg className={styles["category-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn__cart-icon"]}  
                            xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 25 22.135">
                            <g id="add_to_cart" data-name="add to cart" transform="translate(-989 -650)">
                                <g id="Group_10771" data-name="Group 10771" transform="translate(1003.676 664.648)">
                                <g id="Group_9975" data-name="Group 9975" transform="translate(0 0)">
                                    <path id="Path_12759" data-name="Path 12759" d="M344.29,362.612a2.743,2.743,0,1,0,2.743,2.743A2.746,2.746,0,0,0,344.29,362.612Zm0,3.84a1.1,1.1,0,1,1,1.1-1.1A1.1,1.1,0,0,1,344.29,366.452Z" transform="translate(-341.547 -362.612)" fill="#222"/>
                                </g>
                                </g>
                                <g id="Group_10770" data-name="Group 10770" transform="translate(989 650)">
                                <g id="Group_9977" data-name="Group 9977" transform="translate(0 0)">
                                    <path id="Path_12760" data-name="Path 12760" d="M21.825,25.751a.822.822,0,0,0-.648-.316H5.08l-.741-3.1a.823.823,0,0,0-.8-.632H.823a.823.823,0,1,0,0,1.646H2.889L5.564,34.542a.823.823,0,0,0,.8.632H19.175a.823.823,0,0,0,.8-.625l2-8.092A.824.824,0,0,0,21.825,25.751Zm-3.294,7.776H7.014L5.473,27.082H20.126Z" transform="translate(0 -21.705)" fill="#222"/>
                                </g>
                                </g>
                                <g id="Group_10772" data-name="Group 10772" transform="translate(993.719 664.648)">
                                <g id="Group_9979" data-name="Group 9979" transform="translate(0 0)">
                                    <path id="Path_12761" data-name="Path 12761" d="M112.549,362.612a2.743,2.743,0,1,0,2.743,2.743A2.746,2.746,0,0,0,112.549,362.612Zm0,3.84a1.1,1.1,0,1,1,1.1-1.1A1.1,1.1,0,0,1,112.549,366.452Z" transform="translate(-109.806 -362.612)" fill="#222"/>
                                </g>
                                </g>
                            </g>
                            </svg>

                            </Button>
                            <Button
                            className={
                                styles[
                                "category-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                                ]
                            }
                            >
                            
                            <svg className={styles["category-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn__fav-icon"]} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20.571 18">
    <g id="favorite" transform="translate(0.012 -31.967)" fill="none">
        <path d="M18.562,33.2a5.494,5.494,0,0,0-7.5.546l-.792.816-.792-.816a5.494,5.494,0,0,0-7.5-.546,5.769,5.769,0,0,0-.4,8.353l7.774,8.028a1.26,1.26,0,0,0,1.82,0l7.774-8.028A5.766,5.766,0,0,0,18.562,33.2Z" stroke="none"/>
        <path d="M 5.35462474822998 33.66680526733398 C 4.504674911499023 33.66680526733398 3.720794677734375 33.95197296142578 3.088695526123047 34.49063491821289 C 2.242284774780273 35.21304321289062 1.746435165405273 36.23271560668945 1.692474365234375 37.36181259155273 C 1.638875961303711 38.48357391357422 2.045904159545898 39.57950592041016 2.80848503112793 40.36787414550781 L 10.27174949645996 48.07412719726562 L 17.7353458404541 40.36752319335938 C 18.49968528747559 39.5787353515625 18.90761566162109 38.48318481445312 18.85453414916992 37.36177444458008 C 18.80109596252441 36.23286437988281 18.30541610717773 35.21321487426758 17.45979499816895 34.49146270751953 C 16.82672500610352 33.95196533203125 16.04329490661621 33.66680526733398 15.19420528411865 33.66680526733398 C 14.12225532531738 33.66680526733398 13.06226539611816 34.12616348266602 12.28523540496826 34.92791366577148 L 10.2737455368042 37.00065231323242 L 8.26032543182373 34.92589569091797 C 7.48636531829834 34.12572479248047 6.427274703979492 33.66680526733398 5.35462474822998 33.66680526733398 M 5.354625701904297 31.96680068969727 C 6.852423667907715 31.96680068969727 8.36213493347168 32.58594131469727 9.482254981994629 33.74399566650391 L 10.27375507354736 34.55960464477539 L 11.06526470184326 33.74399566650391 C 13.08620452880859 31.65876007080078 16.36069488525391 31.32126617431641 18.56244468688965 33.19757461547852 C 21.08560562133789 35.35110473632812 21.21819496154785 39.21621322631836 18.95618438720703 41.55054473876953 L 11.18177509307861 49.57808685302734 C 10.67955589294434 50.09637069702148 9.863945960998535 50.09637451171875 9.361715316772461 49.57808685302734 L 1.587305068969727 41.55054473876953 C -0.670684814453125 39.21621322631836 -0.5381050109863281 35.35110473632812 1.985065460205078 33.19757461547852 C 2.964054107666016 32.3632926940918 4.155433654785156 31.96680068969727 5.354625701904297 31.96680068969727 Z" stroke="none" fill="#222"/>
    </g>
    </svg>

                            </Button>
                        </div>
                        </div>
                    </Card.Body>
                </Card>
            </SwiperSlide>
            <SwiperSlide>
                <Card
                    className={
                        styles["category-courses__cards-carousel__course-card"]
                    }
                    >
                    <div
                        className={
                        styles[
                            "category-courses__cards-carousel__course-card__category-chip"
                        ]
                        }
                    > 
                        الفنون 
                    </div>
                    <Card.Img
                        variant="top"
                        src="/images/course2cropped.png"
                        alt="course image"
                        className={
                        styles[
                            "category-courses__cards-carousel__course-card__course-img"
                        ]
                        }
                    />
                    <Card.Body
                        className={
                        styles[
                            "category-courses__cards-carousel__course-card__card-body"
                        ]
                        }
                    >
                        <div
                        className={
                            styles[
                            "category-courses__cards-carousel__course-card__card-body__card-header"
                            ]
                        }
                        >
                        <div
                            className={
                            styles[
                                "category-courses__cards-carousel__course-card__card-body__card-header__trainer-img-box"
                            ]
                            }
                        >
                            <img
                            src="/images/trainer img.png"
                            alt="trainer image"
                            />
                        </div>
                        <div
                            className={
                            styles[
                                "category-courses__cards-carousel__course-card__card-body__card-header__course-details"
                            ]
                            }
                        >
                            <h1
                            className={
                                styles[
                                "category-courses__cards-carousel__course-card__card-body__card-header__course-details__title"
                                ]
                            }
                            >
                            إحتراف التصوير بالكاميرا
                            </h1>
                            <div
                            className={
                                styles[
                                "category-courses__cards-carousel__course-card__card-body__card-header__course-details__author"
                                ]
                            }
                            >
                            م. محمد مصطفي
                            </div>
                        </div>
                        </div>

                        <div
                        className={
                            styles[
                            "category-courses__cards-carousel__course-card__card-body__checkout-details"
                            ]
                        }
                        >
                        <div className="d-inline-block">
                            <div
                            className={
                                styles[
                                "category-courses__cards-carousel__course-card__card-body__checkout-details__price-container"
                                ]
                            }
                            >
                            <span
                                className={
                                styles[
                                    "category-courses__cards-carousel__course-card__card-body__checkout-details__price-container__price"
                                ]
                                }
                            >
                                850
                            </span>
                            <span
                                className={
                                styles[
                                    "category-courses__cards-carousel__course-card__card-body__checkout-details__price-container__currency"
                                ]
                                }
                            >
                                جنية مصري
                            </span>
                            </div>
                            <div
                            className={
                                styles[
                                "category-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container"
                                ]
                            }
                            >
                            <span
                                className={
                                styles[
                                    "category-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__price"
                                ]
                                }
                            >
                                950
                            </span>
                            <span
                                className={
                                styles[
                                    "category-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__currency"
                                ]
                                }
                            >
                                جنية مصري
                            </span>
                            </div>
                        </div>

                        <div className="d-inline-block">
                            <Button
                            className={
                                styles[
                                "category-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                                ]
                            }
                            >
                            <svg className={styles["category-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn__cart-icon"]}  
                            xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 25 22.135">
                            <g id="add_to_cart" data-name="add to cart" transform="translate(-989 -650)">
                                <g id="Group_10771" data-name="Group 10771" transform="translate(1003.676 664.648)">
                                <g id="Group_9975" data-name="Group 9975" transform="translate(0 0)">
                                    <path id="Path_12759" data-name="Path 12759" d="M344.29,362.612a2.743,2.743,0,1,0,2.743,2.743A2.746,2.746,0,0,0,344.29,362.612Zm0,3.84a1.1,1.1,0,1,1,1.1-1.1A1.1,1.1,0,0,1,344.29,366.452Z" transform="translate(-341.547 -362.612)" fill="#222"/>
                                </g>
                                </g>
                                <g id="Group_10770" data-name="Group 10770" transform="translate(989 650)">
                                <g id="Group_9977" data-name="Group 9977" transform="translate(0 0)">
                                    <path id="Path_12760" data-name="Path 12760" d="M21.825,25.751a.822.822,0,0,0-.648-.316H5.08l-.741-3.1a.823.823,0,0,0-.8-.632H.823a.823.823,0,1,0,0,1.646H2.889L5.564,34.542a.823.823,0,0,0,.8.632H19.175a.823.823,0,0,0,.8-.625l2-8.092A.824.824,0,0,0,21.825,25.751Zm-3.294,7.776H7.014L5.473,27.082H20.126Z" transform="translate(0 -21.705)" fill="#222"/>
                                </g>
                                </g>
                                <g id="Group_10772" data-name="Group 10772" transform="translate(993.719 664.648)">
                                <g id="Group_9979" data-name="Group 9979" transform="translate(0 0)">
                                    <path id="Path_12761" data-name="Path 12761" d="M112.549,362.612a2.743,2.743,0,1,0,2.743,2.743A2.746,2.746,0,0,0,112.549,362.612Zm0,3.84a1.1,1.1,0,1,1,1.1-1.1A1.1,1.1,0,0,1,112.549,366.452Z" transform="translate(-109.806 -362.612)" fill="#222"/>
                                </g>
                                </g>
                            </g>
                            </svg>

                            </Button>
                            <Button
                            className={
                                styles[
                                "category-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                                ]
                            }
                            >
                            
                            <svg className={styles["category-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn__fav-icon"]} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20.571 18">
    <g id="favorite" transform="translate(0.012 -31.967)" fill="none">
        <path d="M18.562,33.2a5.494,5.494,0,0,0-7.5.546l-.792.816-.792-.816a5.494,5.494,0,0,0-7.5-.546,5.769,5.769,0,0,0-.4,8.353l7.774,8.028a1.26,1.26,0,0,0,1.82,0l7.774-8.028A5.766,5.766,0,0,0,18.562,33.2Z" stroke="none"/>
        <path d="M 5.35462474822998 33.66680526733398 C 4.504674911499023 33.66680526733398 3.720794677734375 33.95197296142578 3.088695526123047 34.49063491821289 C 2.242284774780273 35.21304321289062 1.746435165405273 36.23271560668945 1.692474365234375 37.36181259155273 C 1.638875961303711 38.48357391357422 2.045904159545898 39.57950592041016 2.80848503112793 40.36787414550781 L 10.27174949645996 48.07412719726562 L 17.7353458404541 40.36752319335938 C 18.49968528747559 39.5787353515625 18.90761566162109 38.48318481445312 18.85453414916992 37.36177444458008 C 18.80109596252441 36.23286437988281 18.30541610717773 35.21321487426758 17.45979499816895 34.49146270751953 C 16.82672500610352 33.95196533203125 16.04329490661621 33.66680526733398 15.19420528411865 33.66680526733398 C 14.12225532531738 33.66680526733398 13.06226539611816 34.12616348266602 12.28523540496826 34.92791366577148 L 10.2737455368042 37.00065231323242 L 8.26032543182373 34.92589569091797 C 7.48636531829834 34.12572479248047 6.427274703979492 33.66680526733398 5.35462474822998 33.66680526733398 M 5.354625701904297 31.96680068969727 C 6.852423667907715 31.96680068969727 8.36213493347168 32.58594131469727 9.482254981994629 33.74399566650391 L 10.27375507354736 34.55960464477539 L 11.06526470184326 33.74399566650391 C 13.08620452880859 31.65876007080078 16.36069488525391 31.32126617431641 18.56244468688965 33.19757461547852 C 21.08560562133789 35.35110473632812 21.21819496154785 39.21621322631836 18.95618438720703 41.55054473876953 L 11.18177509307861 49.57808685302734 C 10.67955589294434 50.09637069702148 9.863945960998535 50.09637451171875 9.361715316772461 49.57808685302734 L 1.587305068969727 41.55054473876953 C -0.670684814453125 39.21621322631836 -0.5381050109863281 35.35110473632812 1.985065460205078 33.19757461547852 C 2.964054107666016 32.3632926940918 4.155433654785156 31.96680068969727 5.354625701904297 31.96680068969727 Z" stroke="none" fill="#222"/>
    </g>
    </svg>

                            </Button>
                        </div>
                        </div>
                    </Card.Body>
                </Card>
            </SwiperSlide>
            <SwiperSlide>
                <Card
                    className={
                        styles["category-courses__cards-carousel__course-card"]
                    }
                    >
                    <div
                        className={
                        styles[
                            "category-courses__cards-carousel__course-card__category-chip"
                        ]
                        }
                    > 
                        الفنون 
                    </div>
                    <Card.Img
                        variant="top"
                        src="/images/course2cropped.png"
                        alt="course image"
                        className={
                        styles[
                            "category-courses__cards-carousel__course-card__course-img"
                        ]
                        }
                    />
                    <Card.Body
                        className={
                        styles[
                            "category-courses__cards-carousel__course-card__card-body"
                        ]
                        }
                    >
                        <div
                        className={
                            styles[
                            "category-courses__cards-carousel__course-card__card-body__card-header"
                            ]
                        }
                        >
                        <div
                            className={
                            styles[
                                "category-courses__cards-carousel__course-card__card-body__card-header__trainer-img-box"
                            ]
                            }
                        >
                            <img
                            src="/images/trainer img.png"
                            alt="trainer image"
                            />
                        </div>
                        <div
                            className={
                            styles[
                                "category-courses__cards-carousel__course-card__card-body__card-header__course-details"
                            ]
                            }
                        >
                            <h1
                            className={
                                styles[
                                "category-courses__cards-carousel__course-card__card-body__card-header__course-details__title"
                                ]
                            }
                            >
                            إحتراف التصوير بالكاميرا
                            </h1>
                            <div
                            className={
                                styles[
                                "category-courses__cards-carousel__course-card__card-body__card-header__course-details__author"
                                ]
                            }
                            >
                            م. محمد مصطفي
                            </div>
                        </div>
                        </div>

                        <div
                        className={
                            styles[
                            "category-courses__cards-carousel__course-card__card-body__checkout-details"
                            ]
                        }
                        >
                        <div className="d-inline-block">
                            <div
                            className={
                                styles[
                                "category-courses__cards-carousel__course-card__card-body__checkout-details__price-container"
                                ]
                            }
                            >
                            <span
                                className={
                                styles[
                                    "category-courses__cards-carousel__course-card__card-body__checkout-details__price-container__price"
                                ]
                                }
                            >
                                850
                            </span>
                            <span
                                className={
                                styles[
                                    "category-courses__cards-carousel__course-card__card-body__checkout-details__price-container__currency"
                                ]
                                }
                            >
                                جنية مصري
                            </span>
                            </div>
                            <div
                            className={
                                styles[
                                "category-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container"
                                ]
                            }
                            >
                            <span
                                className={
                                styles[
                                    "category-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__price"
                                ]
                                }
                            >
                                950
                            </span>
                            <span
                                className={
                                styles[
                                    "category-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__currency"
                                ]
                                }
                            >
                                جنية مصري
                            </span>
                            </div>
                        </div>

                        <div className="d-inline-block">
                            <Button
                            className={
                                styles[
                                "category-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                                ]
                            }
                            >
                            <svg className={styles["category-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn__cart-icon"]}  
                            xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 25 22.135">
                            <g id="add_to_cart" data-name="add to cart" transform="translate(-989 -650)">
                                <g id="Group_10771" data-name="Group 10771" transform="translate(1003.676 664.648)">
                                <g id="Group_9975" data-name="Group 9975" transform="translate(0 0)">
                                    <path id="Path_12759" data-name="Path 12759" d="M344.29,362.612a2.743,2.743,0,1,0,2.743,2.743A2.746,2.746,0,0,0,344.29,362.612Zm0,3.84a1.1,1.1,0,1,1,1.1-1.1A1.1,1.1,0,0,1,344.29,366.452Z" transform="translate(-341.547 -362.612)" fill="#222"/>
                                </g>
                                </g>
                                <g id="Group_10770" data-name="Group 10770" transform="translate(989 650)">
                                <g id="Group_9977" data-name="Group 9977" transform="translate(0 0)">
                                    <path id="Path_12760" data-name="Path 12760" d="M21.825,25.751a.822.822,0,0,0-.648-.316H5.08l-.741-3.1a.823.823,0,0,0-.8-.632H.823a.823.823,0,1,0,0,1.646H2.889L5.564,34.542a.823.823,0,0,0,.8.632H19.175a.823.823,0,0,0,.8-.625l2-8.092A.824.824,0,0,0,21.825,25.751Zm-3.294,7.776H7.014L5.473,27.082H20.126Z" transform="translate(0 -21.705)" fill="#222"/>
                                </g>
                                </g>
                                <g id="Group_10772" data-name="Group 10772" transform="translate(993.719 664.648)">
                                <g id="Group_9979" data-name="Group 9979" transform="translate(0 0)">
                                    <path id="Path_12761" data-name="Path 12761" d="M112.549,362.612a2.743,2.743,0,1,0,2.743,2.743A2.746,2.746,0,0,0,112.549,362.612Zm0,3.84a1.1,1.1,0,1,1,1.1-1.1A1.1,1.1,0,0,1,112.549,366.452Z" transform="translate(-109.806 -362.612)" fill="#222"/>
                                </g>
                                </g>
                            </g>
                            </svg>

                            </Button>
                            <Button
                            className={
                                styles[
                                "category-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                                ]
                            }
                            >
                            
                            <svg className={styles["category-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn__fav-icon"]} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20.571 18">
    <g id="favorite" transform="translate(0.012 -31.967)" fill="none">
        <path d="M18.562,33.2a5.494,5.494,0,0,0-7.5.546l-.792.816-.792-.816a5.494,5.494,0,0,0-7.5-.546,5.769,5.769,0,0,0-.4,8.353l7.774,8.028a1.26,1.26,0,0,0,1.82,0l7.774-8.028A5.766,5.766,0,0,0,18.562,33.2Z" stroke="none"/>
        <path d="M 5.35462474822998 33.66680526733398 C 4.504674911499023 33.66680526733398 3.720794677734375 33.95197296142578 3.088695526123047 34.49063491821289 C 2.242284774780273 35.21304321289062 1.746435165405273 36.23271560668945 1.692474365234375 37.36181259155273 C 1.638875961303711 38.48357391357422 2.045904159545898 39.57950592041016 2.80848503112793 40.36787414550781 L 10.27174949645996 48.07412719726562 L 17.7353458404541 40.36752319335938 C 18.49968528747559 39.5787353515625 18.90761566162109 38.48318481445312 18.85453414916992 37.36177444458008 C 18.80109596252441 36.23286437988281 18.30541610717773 35.21321487426758 17.45979499816895 34.49146270751953 C 16.82672500610352 33.95196533203125 16.04329490661621 33.66680526733398 15.19420528411865 33.66680526733398 C 14.12225532531738 33.66680526733398 13.06226539611816 34.12616348266602 12.28523540496826 34.92791366577148 L 10.2737455368042 37.00065231323242 L 8.26032543182373 34.92589569091797 C 7.48636531829834 34.12572479248047 6.427274703979492 33.66680526733398 5.35462474822998 33.66680526733398 M 5.354625701904297 31.96680068969727 C 6.852423667907715 31.96680068969727 8.36213493347168 32.58594131469727 9.482254981994629 33.74399566650391 L 10.27375507354736 34.55960464477539 L 11.06526470184326 33.74399566650391 C 13.08620452880859 31.65876007080078 16.36069488525391 31.32126617431641 18.56244468688965 33.19757461547852 C 21.08560562133789 35.35110473632812 21.21819496154785 39.21621322631836 18.95618438720703 41.55054473876953 L 11.18177509307861 49.57808685302734 C 10.67955589294434 50.09637069702148 9.863945960998535 50.09637451171875 9.361715316772461 49.57808685302734 L 1.587305068969727 41.55054473876953 C -0.670684814453125 39.21621322631836 -0.5381050109863281 35.35110473632812 1.985065460205078 33.19757461547852 C 2.964054107666016 32.3632926940918 4.155433654785156 31.96680068969727 5.354625701904297 31.96680068969727 Z" stroke="none" fill="#222"/>
    </g>
    </svg>

                            </Button>
                        </div>
                        </div>
                    </Card.Body>
                </Card>
            </SwiperSlide>
            <SwiperSlide>
                <Card
                    className={
                        styles["category-courses__cards-carousel__course-card"]
                    }
                    >
                    <div
                        className={
                        styles[
                            "category-courses__cards-carousel__course-card__category-chip"
                        ]
                        }
                    > 
                        الفنون 
                    </div>
                    <Card.Img
                        variant="top"
                        src="/images/course2cropped.png"
                        alt="course image"
                        className={
                        styles[
                            "category-courses__cards-carousel__course-card__course-img"
                        ]
                        }
                    />
                    <Card.Body
                        className={
                        styles[
                            "category-courses__cards-carousel__course-card__card-body"
                        ]
                        }
                    >
                        <div
                        className={
                            styles[
                            "category-courses__cards-carousel__course-card__card-body__card-header"
                            ]
                        }
                        >
                        <div
                            className={
                            styles[
                                "category-courses__cards-carousel__course-card__card-body__card-header__trainer-img-box"
                            ]
                            }
                        >
                            <img
                            src="/images/trainer img.png"
                            alt="trainer image"
                            />
                        </div>
                        <div
                            className={
                            styles[
                                "category-courses__cards-carousel__course-card__card-body__card-header__course-details"
                            ]
                            }
                        >
                            <h1
                            className={
                                styles[
                                "category-courses__cards-carousel__course-card__card-body__card-header__course-details__title"
                                ]
                            }
                            >
                            إحتراف التصوير بالكاميرا
                            </h1>
                            <div
                            className={
                                styles[
                                "category-courses__cards-carousel__course-card__card-body__card-header__course-details__author"
                                ]
                            }
                            >
                            م. محمد مصطفي
                            </div>
                        </div>
                        </div>

                        <div
                        className={
                            styles[
                            "category-courses__cards-carousel__course-card__card-body__checkout-details"
                            ]
                        }
                        >
                        <div className="d-inline-block">
                            <div
                            className={
                                styles[
                                "category-courses__cards-carousel__course-card__card-body__checkout-details__price-container"
                                ]
                            }
                            >
                            <span
                                className={
                                styles[
                                    "category-courses__cards-carousel__course-card__card-body__checkout-details__price-container__price"
                                ]
                                }
                            >
                                850
                            </span>
                            <span
                                className={
                                styles[
                                    "category-courses__cards-carousel__course-card__card-body__checkout-details__price-container__currency"
                                ]
                                }
                            >
                                جنية مصري
                            </span>
                            </div>
                            <div
                            className={
                                styles[
                                "category-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container"
                                ]
                            }
                            >
                            <span
                                className={
                                styles[
                                    "category-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__price"
                                ]
                                }
                            >
                                950
                            </span>
                            <span
                                className={
                                styles[
                                    "category-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__currency"
                                ]
                                }
                            >
                                جنية مصري
                            </span>
                            </div>
                        </div>

                        <div className="d-inline-block">
                            <Button
                            className={
                                styles[
                                "category-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                                ]
                            }
                            >
                            <svg className={styles["category-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn__cart-icon"]}  
                            xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 25 22.135">
                            <g id="add_to_cart" data-name="add to cart" transform="translate(-989 -650)">
                                <g id="Group_10771" data-name="Group 10771" transform="translate(1003.676 664.648)">
                                <g id="Group_9975" data-name="Group 9975" transform="translate(0 0)">
                                    <path id="Path_12759" data-name="Path 12759" d="M344.29,362.612a2.743,2.743,0,1,0,2.743,2.743A2.746,2.746,0,0,0,344.29,362.612Zm0,3.84a1.1,1.1,0,1,1,1.1-1.1A1.1,1.1,0,0,1,344.29,366.452Z" transform="translate(-341.547 -362.612)" fill="#222"/>
                                </g>
                                </g>
                                <g id="Group_10770" data-name="Group 10770" transform="translate(989 650)">
                                <g id="Group_9977" data-name="Group 9977" transform="translate(0 0)">
                                    <path id="Path_12760" data-name="Path 12760" d="M21.825,25.751a.822.822,0,0,0-.648-.316H5.08l-.741-3.1a.823.823,0,0,0-.8-.632H.823a.823.823,0,1,0,0,1.646H2.889L5.564,34.542a.823.823,0,0,0,.8.632H19.175a.823.823,0,0,0,.8-.625l2-8.092A.824.824,0,0,0,21.825,25.751Zm-3.294,7.776H7.014L5.473,27.082H20.126Z" transform="translate(0 -21.705)" fill="#222"/>
                                </g>
                                </g>
                                <g id="Group_10772" data-name="Group 10772" transform="translate(993.719 664.648)">
                                <g id="Group_9979" data-name="Group 9979" transform="translate(0 0)">
                                    <path id="Path_12761" data-name="Path 12761" d="M112.549,362.612a2.743,2.743,0,1,0,2.743,2.743A2.746,2.746,0,0,0,112.549,362.612Zm0,3.84a1.1,1.1,0,1,1,1.1-1.1A1.1,1.1,0,0,1,112.549,366.452Z" transform="translate(-109.806 -362.612)" fill="#222"/>
                                </g>
                                </g>
                            </g>
                            </svg>

                            </Button>
                            <Button
                            className={
                                styles[
                                "category-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                                ]
                            }
                            >
                            
                            <svg className={styles["category-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn__fav-icon"]} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20.571 18">
    <g id="favorite" transform="translate(0.012 -31.967)" fill="none">
        <path d="M18.562,33.2a5.494,5.494,0,0,0-7.5.546l-.792.816-.792-.816a5.494,5.494,0,0,0-7.5-.546,5.769,5.769,0,0,0-.4,8.353l7.774,8.028a1.26,1.26,0,0,0,1.82,0l7.774-8.028A5.766,5.766,0,0,0,18.562,33.2Z" stroke="none"/>
        <path d="M 5.35462474822998 33.66680526733398 C 4.504674911499023 33.66680526733398 3.720794677734375 33.95197296142578 3.088695526123047 34.49063491821289 C 2.242284774780273 35.21304321289062 1.746435165405273 36.23271560668945 1.692474365234375 37.36181259155273 C 1.638875961303711 38.48357391357422 2.045904159545898 39.57950592041016 2.80848503112793 40.36787414550781 L 10.27174949645996 48.07412719726562 L 17.7353458404541 40.36752319335938 C 18.49968528747559 39.5787353515625 18.90761566162109 38.48318481445312 18.85453414916992 37.36177444458008 C 18.80109596252441 36.23286437988281 18.30541610717773 35.21321487426758 17.45979499816895 34.49146270751953 C 16.82672500610352 33.95196533203125 16.04329490661621 33.66680526733398 15.19420528411865 33.66680526733398 C 14.12225532531738 33.66680526733398 13.06226539611816 34.12616348266602 12.28523540496826 34.92791366577148 L 10.2737455368042 37.00065231323242 L 8.26032543182373 34.92589569091797 C 7.48636531829834 34.12572479248047 6.427274703979492 33.66680526733398 5.35462474822998 33.66680526733398 M 5.354625701904297 31.96680068969727 C 6.852423667907715 31.96680068969727 8.36213493347168 32.58594131469727 9.482254981994629 33.74399566650391 L 10.27375507354736 34.55960464477539 L 11.06526470184326 33.74399566650391 C 13.08620452880859 31.65876007080078 16.36069488525391 31.32126617431641 18.56244468688965 33.19757461547852 C 21.08560562133789 35.35110473632812 21.21819496154785 39.21621322631836 18.95618438720703 41.55054473876953 L 11.18177509307861 49.57808685302734 C 10.67955589294434 50.09637069702148 9.863945960998535 50.09637451171875 9.361715316772461 49.57808685302734 L 1.587305068969727 41.55054473876953 C -0.670684814453125 39.21621322631836 -0.5381050109863281 35.35110473632812 1.985065460205078 33.19757461547852 C 2.964054107666016 32.3632926940918 4.155433654785156 31.96680068969727 5.354625701904297 31.96680068969727 Z" stroke="none" fill="#222"/>
    </g>
    </svg>

                            </Button>
                        </div>
                        </div>
                    </Card.Body>
                </Card>
            </SwiperSlide>
            <SwiperSlide>
                <Card
                    className={
                        styles["category-courses__cards-carousel__course-card"]
                    }
                    >
                    <div
                        className={
                        styles[
                            "category-courses__cards-carousel__course-card__category-chip"
                        ]
                        }
                    > 
                        الفنون 
                    </div>
                    <Card.Img
                        variant="top"
                        src="/images/course2cropped.png"
                        alt="course image"
                        className={
                        styles[
                            "category-courses__cards-carousel__course-card__course-img"
                        ]
                        }
                    />
                    <Card.Body
                        className={
                        styles[
                            "category-courses__cards-carousel__course-card__card-body"
                        ]
                        }
                    >
                        <div
                        className={
                            styles[
                            "category-courses__cards-carousel__course-card__card-body__card-header"
                            ]
                        }
                        >
                        <div
                            className={
                            styles[
                                "category-courses__cards-carousel__course-card__card-body__card-header__trainer-img-box"
                            ]
                            }
                        >
                            <img
                            src="/images/trainer img.png"
                            alt="trainer image"
                            />
                        </div>
                        <div
                            className={
                            styles[
                                "category-courses__cards-carousel__course-card__card-body__card-header__course-details"
                            ]
                            }
                        >
                            <h1
                            className={
                                styles[
                                "category-courses__cards-carousel__course-card__card-body__card-header__course-details__title"
                                ]
                            }
                            >
                            إحتراف التصوير بالكاميرا
                            </h1>
                            <div
                            className={
                                styles[
                                "category-courses__cards-carousel__course-card__card-body__card-header__course-details__author"
                                ]
                            }
                            >
                            م. محمد مصطفي
                            </div>
                        </div>
                        </div>

                        <div
                        className={
                            styles[
                            "category-courses__cards-carousel__course-card__card-body__checkout-details"
                            ]
                        }
                        >
                        <div className="d-inline-block">
                            <div
                            className={
                                styles[
                                "category-courses__cards-carousel__course-card__card-body__checkout-details__price-container"
                                ]
                            }
                            >
                            <span
                                className={
                                styles[
                                    "category-courses__cards-carousel__course-card__card-body__checkout-details__price-container__price"
                                ]
                                }
                            >
                                850
                            </span>
                            <span
                                className={
                                styles[
                                    "category-courses__cards-carousel__course-card__card-body__checkout-details__price-container__currency"
                                ]
                                }
                            >
                                جنية مصري
                            </span>
                            </div>
                            <div
                            className={
                                styles[
                                "category-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container"
                                ]
                            }
                            >
                            <span
                                className={
                                styles[
                                    "category-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__price"
                                ]
                                }
                            >
                                950
                            </span>
                            <span
                                className={
                                styles[
                                    "category-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__currency"
                                ]
                                }
                            >
                                جنية مصري
                            </span>
                            </div>
                        </div>

                        <div className="d-inline-block">
                            <Button
                            className={
                                styles[
                                "category-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                                ]
                            }
                            >
                            <svg className={styles["category-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn__cart-icon"]}  
                            xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 25 22.135">
                            <g id="add_to_cart" data-name="add to cart" transform="translate(-989 -650)">
                                <g id="Group_10771" data-name="Group 10771" transform="translate(1003.676 664.648)">
                                <g id="Group_9975" data-name="Group 9975" transform="translate(0 0)">
                                    <path id="Path_12759" data-name="Path 12759" d="M344.29,362.612a2.743,2.743,0,1,0,2.743,2.743A2.746,2.746,0,0,0,344.29,362.612Zm0,3.84a1.1,1.1,0,1,1,1.1-1.1A1.1,1.1,0,0,1,344.29,366.452Z" transform="translate(-341.547 -362.612)" fill="#222"/>
                                </g>
                                </g>
                                <g id="Group_10770" data-name="Group 10770" transform="translate(989 650)">
                                <g id="Group_9977" data-name="Group 9977" transform="translate(0 0)">
                                    <path id="Path_12760" data-name="Path 12760" d="M21.825,25.751a.822.822,0,0,0-.648-.316H5.08l-.741-3.1a.823.823,0,0,0-.8-.632H.823a.823.823,0,1,0,0,1.646H2.889L5.564,34.542a.823.823,0,0,0,.8.632H19.175a.823.823,0,0,0,.8-.625l2-8.092A.824.824,0,0,0,21.825,25.751Zm-3.294,7.776H7.014L5.473,27.082H20.126Z" transform="translate(0 -21.705)" fill="#222"/>
                                </g>
                                </g>
                                <g id="Group_10772" data-name="Group 10772" transform="translate(993.719 664.648)">
                                <g id="Group_9979" data-name="Group 9979" transform="translate(0 0)">
                                    <path id="Path_12761" data-name="Path 12761" d="M112.549,362.612a2.743,2.743,0,1,0,2.743,2.743A2.746,2.746,0,0,0,112.549,362.612Zm0,3.84a1.1,1.1,0,1,1,1.1-1.1A1.1,1.1,0,0,1,112.549,366.452Z" transform="translate(-109.806 -362.612)" fill="#222"/>
                                </g>
                                </g>
                            </g>
                            </svg>

                            </Button>
                            <Button
                            className={
                                styles[
                                "category-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                                ]
                            }
                            >
                            
                            <svg className={styles["category-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn__fav-icon"]} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20.571 18">
    <g id="favorite" transform="translate(0.012 -31.967)" fill="none">
        <path d="M18.562,33.2a5.494,5.494,0,0,0-7.5.546l-.792.816-.792-.816a5.494,5.494,0,0,0-7.5-.546,5.769,5.769,0,0,0-.4,8.353l7.774,8.028a1.26,1.26,0,0,0,1.82,0l7.774-8.028A5.766,5.766,0,0,0,18.562,33.2Z" stroke="none"/>
        <path d="M 5.35462474822998 33.66680526733398 C 4.504674911499023 33.66680526733398 3.720794677734375 33.95197296142578 3.088695526123047 34.49063491821289 C 2.242284774780273 35.21304321289062 1.746435165405273 36.23271560668945 1.692474365234375 37.36181259155273 C 1.638875961303711 38.48357391357422 2.045904159545898 39.57950592041016 2.80848503112793 40.36787414550781 L 10.27174949645996 48.07412719726562 L 17.7353458404541 40.36752319335938 C 18.49968528747559 39.5787353515625 18.90761566162109 38.48318481445312 18.85453414916992 37.36177444458008 C 18.80109596252441 36.23286437988281 18.30541610717773 35.21321487426758 17.45979499816895 34.49146270751953 C 16.82672500610352 33.95196533203125 16.04329490661621 33.66680526733398 15.19420528411865 33.66680526733398 C 14.12225532531738 33.66680526733398 13.06226539611816 34.12616348266602 12.28523540496826 34.92791366577148 L 10.2737455368042 37.00065231323242 L 8.26032543182373 34.92589569091797 C 7.48636531829834 34.12572479248047 6.427274703979492 33.66680526733398 5.35462474822998 33.66680526733398 M 5.354625701904297 31.96680068969727 C 6.852423667907715 31.96680068969727 8.36213493347168 32.58594131469727 9.482254981994629 33.74399566650391 L 10.27375507354736 34.55960464477539 L 11.06526470184326 33.74399566650391 C 13.08620452880859 31.65876007080078 16.36069488525391 31.32126617431641 18.56244468688965 33.19757461547852 C 21.08560562133789 35.35110473632812 21.21819496154785 39.21621322631836 18.95618438720703 41.55054473876953 L 11.18177509307861 49.57808685302734 C 10.67955589294434 50.09637069702148 9.863945960998535 50.09637451171875 9.361715316772461 49.57808685302734 L 1.587305068969727 41.55054473876953 C -0.670684814453125 39.21621322631836 -0.5381050109863281 35.35110473632812 1.985065460205078 33.19757461547852 C 2.964054107666016 32.3632926940918 4.155433654785156 31.96680068969727 5.354625701904297 31.96680068969727 Z" stroke="none" fill="#222"/>
    </g>
    </svg>

                            </Button>
                        </div>
                        </div>
                    </Card.Body>
                </Card>
            </SwiperSlide>
            <SwiperSlide>
                <Card
                    className={
                        styles["category-courses__cards-carousel__course-card"]
                    }
                    >
                    <div
                        className={
                        styles[
                            "category-courses__cards-carousel__course-card__category-chip"
                        ]
                        }
                    > 
                        الفنون 
                    </div>
                    <Card.Img
                        variant="top"
                        src="/images/course2cropped.png"
                        alt="course image"
                        className={
                        styles[
                            "category-courses__cards-carousel__course-card__course-img"
                        ]
                        }
                    />
                    <Card.Body
                        className={
                        styles[
                            "category-courses__cards-carousel__course-card__card-body"
                        ]
                        }
                    >
                        <div
                        className={
                            styles[
                            "category-courses__cards-carousel__course-card__card-body__card-header"
                            ]
                        }
                        >
                        <div
                            className={
                            styles[
                                "category-courses__cards-carousel__course-card__card-body__card-header__trainer-img-box"
                            ]
                            }
                        >
                            <img
                            src="/images/trainer img.png"
                            alt="trainer image"
                            />
                        </div>
                        <div
                            className={
                            styles[
                                "category-courses__cards-carousel__course-card__card-body__card-header__course-details"
                            ]
                            }
                        >
                            <h1
                            className={
                                styles[
                                "category-courses__cards-carousel__course-card__card-body__card-header__course-details__title"
                                ]
                            }
                            >
                            إحتراف التصوير بالكاميرا
                            </h1>
                            <div
                            className={
                                styles[
                                "category-courses__cards-carousel__course-card__card-body__card-header__course-details__author"
                                ]
                            }
                            >
                            م. محمد مصطفي
                            </div>
                        </div>
                        </div>

                        <div
                        className={
                            styles[
                            "category-courses__cards-carousel__course-card__card-body__checkout-details"
                            ]
                        }
                        >
                        <div className="d-inline-block">
                            <div
                            className={
                                styles[
                                "category-courses__cards-carousel__course-card__card-body__checkout-details__price-container"
                                ]
                            }
                            >
                            <span
                                className={
                                styles[
                                    "category-courses__cards-carousel__course-card__card-body__checkout-details__price-container__price"
                                ]
                                }
                            >
                                850
                            </span>
                            <span
                                className={
                                styles[
                                    "category-courses__cards-carousel__course-card__card-body__checkout-details__price-container__currency"
                                ]
                                }
                            >
                                جنية مصري
                            </span>
                            </div>
                            <div
                            className={
                                styles[
                                "category-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container"
                                ]
                            }
                            >
                            <span
                                className={
                                styles[
                                    "category-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__price"
                                ]
                                }
                            >
                                950
                            </span>
                            <span
                                className={
                                styles[
                                    "category-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__currency"
                                ]
                                }
                            >
                                جنية مصري
                            </span>
                            </div>
                        </div>

                        <div className="d-inline-block">
                            <Button
                            className={
                                styles[
                                "category-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                                ]
                            }
                            >
                            <svg className={styles["category-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn__cart-icon"]}  
                            xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 25 22.135">
                            <g id="add_to_cart" data-name="add to cart" transform="translate(-989 -650)">
                                <g id="Group_10771" data-name="Group 10771" transform="translate(1003.676 664.648)">
                                <g id="Group_9975" data-name="Group 9975" transform="translate(0 0)">
                                    <path id="Path_12759" data-name="Path 12759" d="M344.29,362.612a2.743,2.743,0,1,0,2.743,2.743A2.746,2.746,0,0,0,344.29,362.612Zm0,3.84a1.1,1.1,0,1,1,1.1-1.1A1.1,1.1,0,0,1,344.29,366.452Z" transform="translate(-341.547 -362.612)" fill="#222"/>
                                </g>
                                </g>
                                <g id="Group_10770" data-name="Group 10770" transform="translate(989 650)">
                                <g id="Group_9977" data-name="Group 9977" transform="translate(0 0)">
                                    <path id="Path_12760" data-name="Path 12760" d="M21.825,25.751a.822.822,0,0,0-.648-.316H5.08l-.741-3.1a.823.823,0,0,0-.8-.632H.823a.823.823,0,1,0,0,1.646H2.889L5.564,34.542a.823.823,0,0,0,.8.632H19.175a.823.823,0,0,0,.8-.625l2-8.092A.824.824,0,0,0,21.825,25.751Zm-3.294,7.776H7.014L5.473,27.082H20.126Z" transform="translate(0 -21.705)" fill="#222"/>
                                </g>
                                </g>
                                <g id="Group_10772" data-name="Group 10772" transform="translate(993.719 664.648)">
                                <g id="Group_9979" data-name="Group 9979" transform="translate(0 0)">
                                    <path id="Path_12761" data-name="Path 12761" d="M112.549,362.612a2.743,2.743,0,1,0,2.743,2.743A2.746,2.746,0,0,0,112.549,362.612Zm0,3.84a1.1,1.1,0,1,1,1.1-1.1A1.1,1.1,0,0,1,112.549,366.452Z" transform="translate(-109.806 -362.612)" fill="#222"/>
                                </g>
                                </g>
                            </g>
                            </svg>

                            </Button>
                            <Button
                            className={
                                styles[
                                "category-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                                ]
                            }
                            >
                            
                            <svg className={styles["category-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn__fav-icon"]} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20.571 18">
    <g id="favorite" transform="translate(0.012 -31.967)" fill="none">
        <path d="M18.562,33.2a5.494,5.494,0,0,0-7.5.546l-.792.816-.792-.816a5.494,5.494,0,0,0-7.5-.546,5.769,5.769,0,0,0-.4,8.353l7.774,8.028a1.26,1.26,0,0,0,1.82,0l7.774-8.028A5.766,5.766,0,0,0,18.562,33.2Z" stroke="none"/>
        <path d="M 5.35462474822998 33.66680526733398 C 4.504674911499023 33.66680526733398 3.720794677734375 33.95197296142578 3.088695526123047 34.49063491821289 C 2.242284774780273 35.21304321289062 1.746435165405273 36.23271560668945 1.692474365234375 37.36181259155273 C 1.638875961303711 38.48357391357422 2.045904159545898 39.57950592041016 2.80848503112793 40.36787414550781 L 10.27174949645996 48.07412719726562 L 17.7353458404541 40.36752319335938 C 18.49968528747559 39.5787353515625 18.90761566162109 38.48318481445312 18.85453414916992 37.36177444458008 C 18.80109596252441 36.23286437988281 18.30541610717773 35.21321487426758 17.45979499816895 34.49146270751953 C 16.82672500610352 33.95196533203125 16.04329490661621 33.66680526733398 15.19420528411865 33.66680526733398 C 14.12225532531738 33.66680526733398 13.06226539611816 34.12616348266602 12.28523540496826 34.92791366577148 L 10.2737455368042 37.00065231323242 L 8.26032543182373 34.92589569091797 C 7.48636531829834 34.12572479248047 6.427274703979492 33.66680526733398 5.35462474822998 33.66680526733398 M 5.354625701904297 31.96680068969727 C 6.852423667907715 31.96680068969727 8.36213493347168 32.58594131469727 9.482254981994629 33.74399566650391 L 10.27375507354736 34.55960464477539 L 11.06526470184326 33.74399566650391 C 13.08620452880859 31.65876007080078 16.36069488525391 31.32126617431641 18.56244468688965 33.19757461547852 C 21.08560562133789 35.35110473632812 21.21819496154785 39.21621322631836 18.95618438720703 41.55054473876953 L 11.18177509307861 49.57808685302734 C 10.67955589294434 50.09637069702148 9.863945960998535 50.09637451171875 9.361715316772461 49.57808685302734 L 1.587305068969727 41.55054473876953 C -0.670684814453125 39.21621322631836 -0.5381050109863281 35.35110473632812 1.985065460205078 33.19757461547852 C 2.964054107666016 32.3632926940918 4.155433654785156 31.96680068969727 5.354625701904297 31.96680068969727 Z" stroke="none" fill="#222"/>
    </g>
    </svg>

                            </Button>
                        </div>
                        </div>
                    </Card.Body>
                </Card>
            </SwiperSlide>
            <SwiperSlide>
                <Card
                    className={
                        styles["category-courses__cards-carousel__course-card"]
                    }
                    >
                    <div
                        className={
                        styles[
                            "category-courses__cards-carousel__course-card__category-chip"
                        ]
                        }
                    > 
                        الفنون 
                    </div>
                    <Card.Img
                        variant="top"
                        src="/images/course2cropped.png"
                        alt="course image"
                        className={
                        styles[
                            "category-courses__cards-carousel__course-card__course-img"
                        ]
                        }
                    />
                    <Card.Body
                        className={
                        styles[
                            "category-courses__cards-carousel__course-card__card-body"
                        ]
                        }
                    >
                        <div
                        className={
                            styles[
                            "category-courses__cards-carousel__course-card__card-body__card-header"
                            ]
                        }
                        >
                        <div
                            className={
                            styles[
                                "category-courses__cards-carousel__course-card__card-body__card-header__trainer-img-box"
                            ]
                            }
                        >
                            <img
                            src="/images/trainer img.png"
                            alt="trainer image"
                            />
                        </div>
                        <div
                            className={
                            styles[
                                "category-courses__cards-carousel__course-card__card-body__card-header__course-details"
                            ]
                            }
                        >
                            <h1
                            className={
                                styles[
                                "category-courses__cards-carousel__course-card__card-body__card-header__course-details__title"
                                ]
                            }
                            >
                            إحتراف التصوير بالكاميرا
                            </h1>
                            <div
                            className={
                                styles[
                                "category-courses__cards-carousel__course-card__card-body__card-header__course-details__author"
                                ]
                            }
                            >
                            م. محمد مصطفي
                            </div>
                        </div>
                        </div>

                        <div
                        className={
                            styles[
                            "category-courses__cards-carousel__course-card__card-body__checkout-details"
                            ]
                        }
                        >
                        <div className="d-inline-block">
                            <div
                            className={
                                styles[
                                "category-courses__cards-carousel__course-card__card-body__checkout-details__price-container"
                                ]
                            }
                            >
                            <span
                                className={
                                styles[
                                    "category-courses__cards-carousel__course-card__card-body__checkout-details__price-container__price"
                                ]
                                }
                            >
                                850
                            </span>
                            <span
                                className={
                                styles[
                                    "category-courses__cards-carousel__course-card__card-body__checkout-details__price-container__currency"
                                ]
                                }
                            >
                                جنية مصري
                            </span>
                            </div>
                            <div
                            className={
                                styles[
                                "category-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container"
                                ]
                            }
                            >
                            <span
                                className={
                                styles[
                                    "category-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__price"
                                ]
                                }
                            >
                                950
                            </span>
                            <span
                                className={
                                styles[
                                    "category-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__currency"
                                ]
                                }
                            >
                                جنية مصري
                            </span>
                            </div>
                        </div>

                        <div className="d-inline-block">
                            <Button
                            className={
                                styles[
                                "category-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                                ]
                            }
                            >
                            <svg className={styles["category-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn__cart-icon"]}  
                            xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 25 22.135">
                            <g id="add_to_cart" data-name="add to cart" transform="translate(-989 -650)">
                                <g id="Group_10771" data-name="Group 10771" transform="translate(1003.676 664.648)">
                                <g id="Group_9975" data-name="Group 9975" transform="translate(0 0)">
                                    <path id="Path_12759" data-name="Path 12759" d="M344.29,362.612a2.743,2.743,0,1,0,2.743,2.743A2.746,2.746,0,0,0,344.29,362.612Zm0,3.84a1.1,1.1,0,1,1,1.1-1.1A1.1,1.1,0,0,1,344.29,366.452Z" transform="translate(-341.547 -362.612)" fill="#222"/>
                                </g>
                                </g>
                                <g id="Group_10770" data-name="Group 10770" transform="translate(989 650)">
                                <g id="Group_9977" data-name="Group 9977" transform="translate(0 0)">
                                    <path id="Path_12760" data-name="Path 12760" d="M21.825,25.751a.822.822,0,0,0-.648-.316H5.08l-.741-3.1a.823.823,0,0,0-.8-.632H.823a.823.823,0,1,0,0,1.646H2.889L5.564,34.542a.823.823,0,0,0,.8.632H19.175a.823.823,0,0,0,.8-.625l2-8.092A.824.824,0,0,0,21.825,25.751Zm-3.294,7.776H7.014L5.473,27.082H20.126Z" transform="translate(0 -21.705)" fill="#222"/>
                                </g>
                                </g>
                                <g id="Group_10772" data-name="Group 10772" transform="translate(993.719 664.648)">
                                <g id="Group_9979" data-name="Group 9979" transform="translate(0 0)">
                                    <path id="Path_12761" data-name="Path 12761" d="M112.549,362.612a2.743,2.743,0,1,0,2.743,2.743A2.746,2.746,0,0,0,112.549,362.612Zm0,3.84a1.1,1.1,0,1,1,1.1-1.1A1.1,1.1,0,0,1,112.549,366.452Z" transform="translate(-109.806 -362.612)" fill="#222"/>
                                </g>
                                </g>
                            </g>
                            </svg>

                            </Button>
                            <Button
                            className={
                                styles[
                                "category-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                                ]
                            }
                            >
                            
                            <svg className={styles["category-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn__fav-icon"]} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20.571 18">
    <g id="favorite" transform="translate(0.012 -31.967)" fill="none">
        <path d="M18.562,33.2a5.494,5.494,0,0,0-7.5.546l-.792.816-.792-.816a5.494,5.494,0,0,0-7.5-.546,5.769,5.769,0,0,0-.4,8.353l7.774,8.028a1.26,1.26,0,0,0,1.82,0l7.774-8.028A5.766,5.766,0,0,0,18.562,33.2Z" stroke="none"/>
        <path d="M 5.35462474822998 33.66680526733398 C 4.504674911499023 33.66680526733398 3.720794677734375 33.95197296142578 3.088695526123047 34.49063491821289 C 2.242284774780273 35.21304321289062 1.746435165405273 36.23271560668945 1.692474365234375 37.36181259155273 C 1.638875961303711 38.48357391357422 2.045904159545898 39.57950592041016 2.80848503112793 40.36787414550781 L 10.27174949645996 48.07412719726562 L 17.7353458404541 40.36752319335938 C 18.49968528747559 39.5787353515625 18.90761566162109 38.48318481445312 18.85453414916992 37.36177444458008 C 18.80109596252441 36.23286437988281 18.30541610717773 35.21321487426758 17.45979499816895 34.49146270751953 C 16.82672500610352 33.95196533203125 16.04329490661621 33.66680526733398 15.19420528411865 33.66680526733398 C 14.12225532531738 33.66680526733398 13.06226539611816 34.12616348266602 12.28523540496826 34.92791366577148 L 10.2737455368042 37.00065231323242 L 8.26032543182373 34.92589569091797 C 7.48636531829834 34.12572479248047 6.427274703979492 33.66680526733398 5.35462474822998 33.66680526733398 M 5.354625701904297 31.96680068969727 C 6.852423667907715 31.96680068969727 8.36213493347168 32.58594131469727 9.482254981994629 33.74399566650391 L 10.27375507354736 34.55960464477539 L 11.06526470184326 33.74399566650391 C 13.08620452880859 31.65876007080078 16.36069488525391 31.32126617431641 18.56244468688965 33.19757461547852 C 21.08560562133789 35.35110473632812 21.21819496154785 39.21621322631836 18.95618438720703 41.55054473876953 L 11.18177509307861 49.57808685302734 C 10.67955589294434 50.09637069702148 9.863945960998535 50.09637451171875 9.361715316772461 49.57808685302734 L 1.587305068969727 41.55054473876953 C -0.670684814453125 39.21621322631836 -0.5381050109863281 35.35110473632812 1.985065460205078 33.19757461547852 C 2.964054107666016 32.3632926940918 4.155433654785156 31.96680068969727 5.354625701904297 31.96680068969727 Z" stroke="none" fill="#222"/>
    </g>
    </svg>

                            </Button>
                        </div>
                        </div>
                    </Card.Body>
                </Card>
            </SwiperSlide>
           
        </Swiper>
        </Col>
        </Row>
            
        </>
    )
}

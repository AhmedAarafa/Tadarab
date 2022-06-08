/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { Row, Col, Button, Card, Pagination, Offcanvas, ProgressBar } from "react-bootstrap";
import styles from "./my-account-page.module.css";
import Router, { useRouter } from "next/router";
import { axiosInstance } from "configurations/axios/axiosConfig";
import { GAProductClickEventHandler } from "modules/_Shared/utils/GAEvents";
import { AddedToCartIcon, AddedToFavouriteIcon, CartIcon, FavouriteIcon, TvIcon, FilterIcon } from "common/Icons/Icons";
import Link from 'next/link';
import { handleFav } from "modules/_Shared/utils/handleFav";
import { handleCart } from "modules/_Shared/utils/handleCart";
import { useDispatch, useSelector } from "react-redux";
import { setCheckoutType } from "configurations/redux/actions/checkoutType";
import { setCartItems } from "configurations/redux/actions/cartItems";
import { FBPixelEventsHandler } from 'modules/_Shared/utils/FBPixelEvents';
import { toggleLoader } from "modules/_Shared/utils/toggleLoader";
import { tokenValidationCheck } from "modules/_Shared/utils/tokenValidationCheck";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper';
import "swiper/css";
import Image from 'next/image';
import { handleFreeCourses } from "modules/_Shared/utils/handleFreeCourses";
import BrowseThroughCategories from "modules/My account page/Browse through categories/BrowseThroughCategories";
import LatestCourses from "modules/My account page/Latest courses/LatestCourses";
import WatchedCourses from "modules/My account page/Watched courses/WatchedCourses";

export default function MyAccountPage() {
  SwiperCore.use([Navigation]);
  const [courseListing, setCourseListing] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState("1");
  const [pageNumber, setPageNumber] = useState(1);
  const userStatus = useSelector((state: any) => state.userAuthentication);
  const [categoriesSlicer, setCategoriesSlicer] = useState<any>(4);
  const dispatch = useDispatch();
  const router = useRouter();
  const [FilterSidebarShow, setFilterSidebarShow] = useState(false);


  const handleFavActionBtn = (course: any): any => {
    if (userStatus.isUserAuthenticated == true) {
      const handleFavResponse: any = handleFav(course, `users/purchased/?country_code=eg&limit=9&page=${pageNumber}`);
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

    const handleCartResponse: any = handleCart([course], `users/purchased/?country_code=eg&limit=9&page=${pageNumber}`, false);
    handleCartResponse.then(function (firstresponse: any) {
      firstresponse.resp.then(function (response: any) {
        console.log("response,", response);
        console.log("firstresponse", firstresponse);

        setCourseListing(response?.data);
        dispatch(setCartItems(firstresponse.cartResponse));
      })
    })

  }

  const handleFreeCoursesActionBtn = (course: any): any => {
    if (userStatus.isUserAuthenticated == true) {
      handleFreeCourses(course);
    } else {
      Router.push({
        pathname: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}sign-in`,
        query: { from: "/my-account" }
      })
    }
  }

  const handlePageClick = (pgNo: any) => {
    toggleLoader("show");
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurrentPage(pgNo);
    axiosInstance
      .get(`users/purchased/?country_code=eg&limit=9&page=${pgNo}`)
      .then(function (response: any) {
        console.log(response);
        setCourseListing(response?.data);
        toggleLoader("hide");

      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const [showMore, setShowMore] = useState<any>({
    first: true,
    second: true,
    third: true,
    fourth: true
  });

  const showMoreHandler = (order: any) => {
    switch (order) {
      case "first":
        setShowMore({ ...showMore, first: !showMore[`${order}`] });
        categoriesSlicer == 4 ? setCategoriesSlicer(20) : setCategoriesSlicer(4);
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

  const [filters, setFilters] = useState<any>({
    categories: [],
    price: []
  });

  const handleCategoriesFilters = (categoryId: any) => {

    setFilters({
      ...filters, categories:
        filters.categories.includes(categoryId) ? filters.categories.filter((e: any) => e !== categoryId) : [...filters.categories, categoryId]
    })
  }

  const handlePriceFilters = (type: any) => {

    setFilters({
      ...filters, price:
        filters.price.includes(type) ? filters.price.filter((e: any) => e !== type) : [...filters.price, type]
    })

  }

  const handleFilterSidebarShow = (status: boolean) => {
    setFilterSidebarShow(status);
  }

  const checkBoxesHandler = () => {

    filters.categories.forEach((catId: any) => {
      // let markedCategory: any = document.getElementById(`cat-${catId}`);
      let markedCategory: any = document.querySelectorAll(`[id="cat-${catId}"]`);
      markedCategory.forEach((cat: any) => {
        console.log("markedCategory", cat);
        cat.checked = true;
      })
    });

    filters.price.forEach((priceType: any) => {
      // let markedPriceCB: any = document.getElementById(`prices-${priceType}`);
      let markedPriceCB: any = document.querySelectorAll(`[id="prices-${priceType}"]`);
      markedPriceCB.forEach((priceCB: any) => {
        console.log("markedPriceCB", priceCB);
        priceCB.checked = true;
      })
    });

  }

  useEffect(() => {
    console.log(filters);
  }, [filters]);


  useEffect(() => {
    toggleLoader("show");

    axiosInstance
      .get(`users/purchased/?country_code=eg&limit=9&page=1`)
      .then(function (response: any) {
        if (tokenValidationCheck(response)) {

          setCourseListing(response?.data);
          FBPixelEventsHandler(response.data.fb_tracking_events, null);
          toggleLoader("hide");
        }
        toggleLoader("hide");

      })
      .catch(function (error) {
        toggleLoader("hide");
        console.log(error);
      });

  }, []);


  return (
    <>
      <Row className={styles["my-account__row"]}>

        {
          JSON.stringify(courseListing?.data?.courses) !== '[]' && courseListing?.data?.courses !== null &&
          <>
            <Col sm={{ span: 3, order: 2 }} className={styles["my-account__filter"]}>

              <div className={styles["filter-sidebar__title-box"]}>

                <div className={styles["filter-sidebar__title-box__icon"]}>
                  <FilterIcon />
                </div>

                <div className={styles["filter-sidebar__title-box__title"]}>
                  <div>تصنيف الدورات</div>
                  <div>مسح النتائج</div>
                </div>

              </div>
              <div className={styles["filter-sidebar__filter-list-container"]}>

                <ul className={styles["filter-sidebar__filter-list"]}>
                  <div>التخصصات</div>
                  {
                    courseListing?.data?.categories?.slice(0, categoriesSlicer).map((cat: any, i: number) => {
                      return (
                        <li key={i}>
                          <input className="form-check-input" type="checkbox"
                            onChange={() => { handleCategoriesFilters(cat.id) }}
                            id={`cat-${cat.id}`} name={cat.slug} />
                          <span>
                            {cat.title}
                          </span>
                        </li>
                      )
                    })
                  }
                  <div onClick={() => { showMoreHandler("first") }}>
                    <span>
                      {
                        showMore.first == true ?
                          "اعرض المزيد"
                          :
                          "اعرض اقل"
                      }
                    </span>
                    <svg className={`${showMore.first == false
                      ? styles["show-less"]
                      : styles["show-more"]
                      }`} xmlns="http://www.w3.org/2000/svg" width="10" height="5.993" viewBox="0 0 10 5.993">
                      <g id="dropdown" transform="translate(0 5.993) rotate(-90)">
                        <path id="Path_12841" data-name="Path 12841" d="M11.454,4.29a.961.961,0,0,1,.164-.13L15.494.284a.969.969,0,0,1,1.37,1.37L13.525,4.992,16.88,8.347a.968.968,0,1,1-1.369,1.369L11.618,5.824a1.005,1.005,0,0,1-.164-1.534Z" transform="translate(-11.171 -0.001)" fill="#AF151F" />
                      </g>
                    </svg>
                  </div>

                </ul>
                <ul className={styles["filter-sidebar__filter-list"]}>
                  <div>السعر</div>
                  <li>
                    <input className="form-check-input" type="checkbox"
                      onChange={() => { handlePriceFilters("paid") }}
                      id="prices-paid" name="prices-paid" />
                    <span >
                      مدفوع
                    </span>
                  </li>
                  <li>
                    <input className="form-check-input" type="checkbox"
                      onChange={() => { handlePriceFilters("free") }}
                      id="prices-free" name="prices-free" />
                    <span >
                      مجاني
                    </span>
                  </li>

                </ul>
                <ul className={styles["filter-sidebar__filter-list"]}>
                  <div>المستوي</div>

                  <li>
                    <input className="form-check-input" type="checkbox"
                      name="level-beginner" />
                    <span >
                      مبتدئ
                    </span>
                  </li>
                  <li>
                    <input className="form-check-input" type="checkbox"
                      name="level-intermediate" />
                    <span >
                      متوسط
                    </span>
                  </li>
                  <li>
                    <input className="form-check-input" type="checkbox"
                      name="level-professional" />
                    <span >
                      محترف
                    </span>
                  </li>
                  <li>
                    <input className="form-check-input" type="checkbox"
                      name="level-all" />
                    <span >
                      كل المستويات
                    </span>
                  </li>


                </ul>

              </div>

            </Col>

            <Col xs={{ span: 12, order: 2 }} className={styles["my-account__filter-icon-col"]} >
              <div onClick={() => { handleFilterSidebarShow(true) }}>
                <FilterIcon />
              </div>
            </Col>
          </>
        }
        {
          JSON.stringify(courseListing?.data?.courses) !== '[]' && courseListing?.data?.courses !== null &&
          <Offcanvas id="offcanvasNavbar3" aria-labelledby="offcanvasNavbarLabel3" placement="end" show={FilterSidebarShow}
            onEntered={() => { checkBoxesHandler() }}
            onHide={() => { handleFilterSidebarShow(false) }}>
            <Offcanvas.Header className={styles["filter-sidebar"]} closeButton>
              <Offcanvas.Title className={styles["filter-sidebar__title-box"]}>
                <div className={styles["filter-sidebar__title-box__icon"]}>
                  <FilterIcon />
                </div>
                <div className={styles["filter-sidebar__title-box__title"]}>
                  <div>تصنيف الدورات</div>
                  <div>مسح النتائج</div>
                </div>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>

              <ul className={styles["filter-sidebar__filter-list"]}>
                <div>التخصصات</div>
                {
                  courseListing?.data?.categories?.slice(0, categoriesSlicer).map((cat: any, i: number) => {
                    return (
                      <li key={i}>
                        <input className="form-check-input" type="checkbox"
                          onChange={() => { handleCategoriesFilters(cat.id) }}
                          id={`cat-${cat.id}`} name={cat.slug} />
                        <span>
                          {cat.title}
                        </span>
                      </li>
                    )
                  })
                }
                <div onClick={() => { showMoreHandler("first") }}>
                  <span>
                    {
                      showMore.first == true ?
                        "اعرض المزيد"
                        :
                        "اعرض اقل"
                    }
                  </span>
                  <svg className={`${showMore.first == false
                    ? styles["show-less"]
                    : styles["show-more"]
                    }`} xmlns="http://www.w3.org/2000/svg" width="10" height="5.993" viewBox="0 0 10 5.993">
                    <g id="dropdown" transform="translate(0 5.993) rotate(-90)">
                      <path id="Path_12841" data-name="Path 12841" d="M11.454,4.29a.961.961,0,0,1,.164-.13L15.494.284a.969.969,0,0,1,1.37,1.37L13.525,4.992,16.88,8.347a.968.968,0,1,1-1.369,1.369L11.618,5.824a1.005,1.005,0,0,1-.164-1.534Z" transform="translate(-11.171 -0.001)" fill="#AF151F" />
                    </g>
                  </svg>
                </div>

              </ul>
              <ul className={styles["filter-sidebar__filter-list"]}>
                <div>السعر</div>
                <li>
                  <input className="form-check-input" type="checkbox"
                    onChange={() => { handlePriceFilters("paid") }}
                    id="prices-paid" name="prices-paid" />
                  <span >
                    مدفوع
                  </span>
                </li>
                <li>
                  <input className="form-check-input" type="checkbox"
                    onChange={() => { handlePriceFilters("free") }}
                    id="prices-free" name="prices-free" />
                  <span >
                    مجاني
                  </span>
                </li>

              </ul>
              <ul className={styles["filter-sidebar__filter-list"]}>
                <div>المستوي</div>

                <li>
                  <input className="form-check-input" type="checkbox"
                    name="level-beginner" />
                  <span >
                    مبتدئ
                  </span>
                </li>
                <li>
                  <input className="form-check-input" type="checkbox"
                    name="level-intermediate" />
                  <span >
                    متوسط
                  </span>
                </li>
                <li>
                  <input className="form-check-input" type="checkbox"
                    name="level-professional" />
                  <span >
                    محترف
                  </span>
                </li>
                <li>
                  <input className="form-check-input" type="checkbox"
                    name="level-all" />
                  <span >
                    كل المستويات
                  </span>
                </li>

              </ul>

            </Offcanvas.Body>

          </Offcanvas>
        }

        <Col sm={courseListing?.data?.courses?.length == 0 ? { span: 12, order: 3 } : { span: 9, order: 3 }}
          xs={{ span: 12, order: 2 }} className={styles["my-account"]}>
          {courseListing?.data?.courses?.length == 0 &&
            <div className={styles["my-account__you-have-no-courses"]}>
              لا يوجد دورات في حسابك
            </div>
          }

          {courseListing?.data?.courses?.map((course: any, i: number) => {

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
                        <img loading="lazy"
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
                      <Link href={`/course/${course.slug}`}>
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

                  <div className={styles['my-account__course-card__card-body__progress-bar']}>
                    <ProgressBar now={32} />
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
                        <div onClick={() =>
                          course?.discounted_price == 0 ?
                            handleFreeCoursesActionBtn(course)
                            :
                            handleCartActionBtn(course)}
                          className={styles["my-account__course-card__card-body__checkout-details__icon-btn__cart-icon"]}>
                          {
                            course.discounted_price == 0 ?
                              <TvIcon color="#222" />
                              :
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
          {
            JSON.stringify(courseListing?.data?.courses) !== '[]' && courseListing?.data?.courses !== null &&
            <>
              <Col sm={courseListing?.data?.courses?.length == 0 ? 12 : 9} xs={12} className={styles["my-account__pagination"]}>
                {
                  courseListing?.pagination?.count > 9 && <Pagination>
                    <Pagination.Prev
                      onClick={() => {
                        setPageNumber(courseListing?.pagination?.current - 1);
                        handlePageClick(courseListing?.pagination?.current - 1)
                      }}
                      className={`${currentPage == "1" && styles["disabled"]}`} />

                    <Pagination.Item
                      style={{ display: courseListing?.pagination?.previous ? "" : "none" }}
                      active={currentPage == courseListing?.pagination?.previous}
                      onClick={() => {
                        setPageNumber(courseListing?.pagination?.previous);
                        handlePageClick(courseListing?.pagination?.previous)
                      }}>
                      {courseListing?.pagination?.previous}
                    </Pagination.Item>
                    <Pagination.Item
                      active={currentPage == courseListing?.pagination?.current}
                      onClick={() => {
                        setPageNumber(courseListing?.pagination?.current);
                        handlePageClick(courseListing?.pagination?.current);
                      }}>
                      {courseListing?.pagination?.current}
                    </Pagination.Item>
                    <Pagination.Item
                      style={{ display: courseListing?.pagination?.next ? "" : "none" }}
                      active={currentPage == courseListing?.pagination?.next}
                      onClick={() => {
                        setPageNumber(courseListing?.pagination?.next);
                        handlePageClick(courseListing?.pagination?.next)
                      }}>
                      {courseListing?.pagination?.next}
                    </Pagination.Item>

                    <Pagination.Next
                      onClick={() => {
                        setPageNumber(courseListing?.pagination?.current + 1);
                        handlePageClick(courseListing?.pagination?.current + 1)
                      }}
                      className={`${currentPage == courseListing?.pagination?.pages && styles["disabled"]}`} />
                  </Pagination>
                }

              </Col>
            </>
          }
        </Col>

        <Col xs={{ span: 12, order: 1 }} sm={{ span: 12, order: 1 }}>
          <BrowseThroughCategories data={courseListing?.data?.categories} />
          {
            JSON.stringify(courseListing?.data?.courses) !== '[]' && courseListing?.data?.courses !== null &&
            <WatchedCourses data={courseListing?.data?.courses} />
          }
        </Col>

        <Col xs={{ span: 12, order: 4 }} sm={{ span: 12, order: 4 }}>
          <LatestCourses data={courseListing?.data?.best_seller_courses} />
        </Col>

      </Row>

    </>
  )
}

/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { Row, Col, Button, Card, Spinner, Offcanvas, ProgressBar } from "react-bootstrap";
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
//import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
//import 'react-loading-skeleton/dist/skeleton.css';

export default function MyAccountPage() {
  SwiperCore.use([Navigation]);
  const [myAccountData, setMyAccountData] = useState<any>({});
  const [isUserPurchasedAnyCourses, setIsUserPurchasedAnyCourses] = useState(false);
  const [currentPage, setCurrentPage] = useState("1");
  const [pageNumber, setPageNumber] = useState(1);
  const [isShowMoreBtnDisabled, setIsShowMoreBtnDisabled] = useState(false);
  const [isBlurryLayerDisabled, setIsBlurryLayerDisabled] = useState(false);
  const [disabledCartBtns, setDisabledCartBtns] = useState<any>([]);
  const userStatus = useSelector((state: any) => state.userAuthentication);
  const [categoriesSlicer, setCategoriesSlicer] = useState<any>(4);
  const dispatch = useDispatch();
  const router = useRouter();
  const [FilterSidebarShow, setFilterSidebarShow] = useState(false);
  const [purchasedCoursesSlicer, setPurchasedCoursesSlicer] = useState<any>(9);
  const [filters, setFilters] = useState<any>({
    categories: [],
    price: [],
    levels: []
  });

  const handleFavActionBtn = (course: any): any => {
    if (userStatus.isUserAuthenticated == true) {
      const handleFavResponse: any = handleFav(course, `course/filter/?country_code=eg&
      page=${pageNumber}&
      limit=${purchasedCoursesSlicer}&
      category_ids=${filters?.categories.toString()}&
      types=${filters.price.toString()}&
      levels=${filters.levels.toString()}
      `);
      handleFavResponse.then(function (response: any) {
        setMyAccountData(response?.data);
      })
    } else {
      Router.push({
        pathname: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}sign-in`,
        query: { from: "my-account" }
      })
    }
  }

  const handleCartActionBtn = (course: any): any => {
    setDisabledCartBtns([...disabledCartBtns,course.id]);
    setTimeout(() => {
      setDisabledCartBtns(disabledCartBtns.filter((b:any) => b !== course.id));
    }, 5000);
    dispatch(setCheckoutType("cart"));

    const handleCartResponse: any = handleCart([course], `course/filter/?country_code=eg&
    page=${pageNumber}&
    limit=${purchasedCoursesSlicer}&
    category_ids=${filters?.categories.toString()}&
    types=${filters.price.toString()}&
    levels=${filters.levels.toString()}
    `, false);
    handleCartResponse.then(function (firstresponse: any) {
      firstresponse.resp.then(function (response: any) {
        console.log("response,", response);
        console.log("firstresponse", firstresponse);

        setMyAccountData(response?.data);
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
      .get(`course/filter/?country_code=eg&
      page=${pgNo}&
      limit=${purchasedCoursesSlicer}&
      category_ids=${filters?.categories.toString()}&
      types=${filters.price.toString()}&
      levels=${filters.levels.toString()}
      `)
      .then(function (response: any) {
        console.log(response);
        setMyAccountData(response?.data);
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

  useEffect(() => {
    filters?.categories.forEach((catId: any) => {
      // let markedCategory: any = document.getElementById(`cat-${catId}`);
      let markedCategory: any = document.querySelectorAll(`[id="cat-${catId}"]`);
      console.log("markedCategory", markedCategory);
      console.log("filters", filters);
      markedCategory.forEach((cat: any) => {
        console.log("markedCategory", cat);
        cat.checked = true;
      })
    });
  }, [showMore])




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



  const handleCategoriesFilters = (categoryId: any) => {

    setFilters({
      ...filters, categories:
        filters?.categories.includes(categoryId) ? filters?.categories.filter((f: any) => f !== categoryId) : [...filters?.categories, categoryId]
    })
  }

  const handlePriceFilters = (type: any) => {

    setFilters({
      ...filters, price:
        filters.price.includes(type) ? filters.price.filter((f: any) => f !== type) : [...filters.price, type]
    })

  }

  const handleLevelsFilters = (type: any) => {

    setFilters({
      ...filters, levels:
        filters.levels.includes(type) ? filters.levels.filter((f: any) => f !== type) : [...filters.levels, type]
    })

  }

  const handleFilterSidebarShow = (status: boolean) => {
    setFilterSidebarShow(status);
  }

  const checkBoxesHandler = () => {
    filters?.categories.forEach((catId: any) => {
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

    filters.levels.forEach((level: any) => {
      let markedLevelCB: any = document.querySelectorAll(`[id="level-${level}"]`);
      markedLevelCB.forEach((levelCB: any) => {
        console.log("levelCB", levelCB);
        levelCB.checked = true;
      })
    });

  }

  useEffect(() => {
    // setIsShowMoreBtnDisabled(true);
    axiosInstance
      .get(`course/filter/?country_code=eg&
      page=${pageNumber}&
      limit=${purchasedCoursesSlicer}&
      category_ids=${filters?.categories.toString()}&
      types=${filters.price.toString()}&
      levels=${filters.levels.toString()}
      `)
      .then(function (response: any) {

        if (tokenValidationCheck(response)) {

          setMyAccountData(response?.data);
          FBPixelEventsHandler(response.data.fb_tracking_events, null);
          toggleLoader("hide");
          setIsShowMoreBtnDisabled(false);
          setIsBlurryLayerDisabled(false);
        }
        toggleLoader("hide");

      })
      .catch(function (error) {
        toggleLoader("hide");
        console.log(error);
      });
  }, [filters, pageNumber, purchasedCoursesSlicer]);

  useEffect(() => {
    setPurchasedCoursesSlicer(9);
    setIsBlurryLayerDisabled(true);
    setIsShowMoreBtnDisabled(false);
  }, [filters]);

  useEffect(() => {
    setIsShowMoreBtnDisabled(true);
  }, [purchasedCoursesSlicer]);


  useEffect(() => {
    toggleLoader("show");

    axiosInstance
      .get(`course/filter/?country_code=eg&page=1&limit=${purchasedCoursesSlicer}`)
      .then(function (response: any) {
        if (tokenValidationCheck(response)) {

          setMyAccountData(response?.data);
          if (response?.data?.data?.courses.length !== 0) {
            setIsUserPurchasedAnyCourses(true);
          }

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
          (!isUserPurchasedAnyCourses &&
            myAccountData?.data?.courses?.length !== 0 &&
            myAccountData?.data?.courses !== null) ||
          myAccountData?.data?.is_user_subscription &&
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

                {/** Categories filter **/}
                <ul className={styles["filter-sidebar__filter-list"]}>
                  <div>التخصصات</div>
                  {
                    myAccountData?.data?.categories?.slice(0, categoriesSlicer).map((cat: any, i: number) => {
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
                {/** Categories filter end **/}

                {/** Free/Paid filter */}
                {/* <ul className={styles["filter-sidebar__filter-list"]}>
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
                </ul> */}
                {/** Free/Paid filter end */}

                {/** Trainer level filter **/}
                <ul className={styles["filter-sidebar__filter-list"]}>
                  <div>المستوي</div>

                  <li>
                    <input className="form-check-input" type="checkbox" onChange={() => { handleLevelsFilters("beginner") }}
                      id="level-beginner" name="level-beginner" />
                    <span >
                      مبتدئ
                    </span>
                  </li>
                  <li>
                    <input className="form-check-input" type="checkbox" onChange={() => { handleLevelsFilters("intermediate") }}
                      id="level-intermediate" name="level-intermediate" />
                    <span >
                      متوسط
                    </span>
                  </li>
                  <li>
                    <input className="form-check-input" type="checkbox" onChange={() => { handleLevelsFilters("professional") }}
                      id="level-professional" name="level-professional" />
                    <span >
                      محترف
                    </span>
                  </li>
                  <li>
                    <input className="form-check-input" type="checkbox" onChange={() => { handleLevelsFilters("all") }}
                      id="level-all" name="level-all" />
                    <span >
                      كل المستويات
                    </span>
                  </li>


                </ul>
                {/** Trainer level filter end **/}

              </div>

            </Col>

            <Col xs={{ span: 12, order: 2 }} className={styles["my-account__filter-icon-col"]} >
              <div onClick={() => { handleFilterSidebarShow(true) }}>
                <FilterIcon />
              </div>
              <div>
                <span>تصنيف الدورات</span>
                <span>مسح النتائج</span>
              </div>

            </Col>
          </>
        }
        {
          JSON.stringify(myAccountData?.data?.courses) !== '[]' && myAccountData?.data?.courses !== null &&
          myAccountData?.data?.is_user_subscription &&
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
            <Offcanvas.Body className={styles["filter-sidebar__offcanvas-body"]}>

              {/** Categories filter **/}
              <ul className={styles["filter-sidebar__filter-list"]}>
                <div>التخصصات</div>
                {
                  myAccountData?.data?.categories?.slice(0, categoriesSlicer).map((cat: any, i: number) => {
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
              {/** Categories filter end **/}

              {/** Free/Paid filter **/}
              {/* <ul className={styles["filter-sidebar__filter-list"]}>
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
              </ul> */}
              {/** Free/Paid filter end **/}

              {/** Trainer level filter **/}
              <ul className={styles["filter-sidebar__filter-list"]}>
                <div>المستوي</div>

                <li>
                  <input className="form-check-input" type="checkbox" onChange={() => { handleLevelsFilters("beginner") }}
                    id="level-beginner" name="level-beginner" />
                  <span >
                    مبتدئ
                  </span>
                </li>
                <li>
                  <input className="form-check-input" type="checkbox" onChange={() => { handleLevelsFilters("intermediate") }}
                    id="level-intermediate" name="level-intermediate" />
                  <span >
                    متوسط
                  </span>
                </li>
                <li>
                  <input className="form-check-input" type="checkbox" onChange={() => { handleLevelsFilters("professional") }}
                    id="level-professional" name="level-professional" />
                  <span >
                    محترف
                  </span>
                </li>
                <li>
                  <input className="form-check-input" type="checkbox" onChange={() => { handleLevelsFilters("all") }}
                    id="level-all" name="level-all" />
                  <span >
                    كل المستويات
                  </span>
                </li>

              </ul>
              {/** Trainer level filter end **/}

              <div className={styles["filter-sidebar__show-results"]}>
                <Button id="show-results" onClick={() => { handleFilterSidebarShow(false) }}>
                  نتائج البحث
                </Button>

              </div>

            </Offcanvas.Body>

          </Offcanvas>

        }

        <Col sm={(!isUserPurchasedAnyCourses || myAccountData?.data?.courses?.length == 0 || !myAccountData?.data?.is_user_subscription) ? { span: 12, order: 3 } : { span: 9, order: 3 }}
          xs={{ span: 12, order: 2 }} className={styles["my-account"]}>
          {
            isBlurryLayerDisabled &&
            <>
              <div className={styles["blurry-overlay"]}></div>
              <div className={styles["filters-spinner-loader"]}>
                <Spinner animation="border" />
              </div>
            </>
          }
          {!isUserPurchasedAnyCourses && myAccountData?.data?.courses?.length == 0 &&
            <div className={styles["my-account__you-have-no-courses"]}>
              لا يوجد دورات في حسابك
            </div>
          }

          {isUserPurchasedAnyCourses && myAccountData?.data?.courses?.slice(0, purchasedCoursesSlicer).map((course: any, i: number) => {
            return (
              <Card key={i} className={styles["my-account__course-card"]}>
                {
                  course?.categories[0] !== undefined && course?.categories[0].title !== null && course?.categories[0].title !== "" &&
                  <div
                    className={
                      styles["my-account__course-card__category-chip"]
                    }
                    style={{ backgroundColor: `${course?.categories[0] !== undefined && course?.categories[0].color}` }}
                  >
                    {course?.categories[0] !== undefined && course?.categories[0].title}
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
                        <div onClick={() => { GAProductClickEventHandler(course, i) }}
                          title={course.title}
                          className={
                            styles[
                            "my-account__course-card__card-body__card-header__course-details__title"
                            ]
                          }
                        >
                          {course.title}
                        </div>
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
                    {
                      course?.progress_percentage == 0 ? <></> : <ProgressBar now={Math.ceil(course?.progress_percentage)} />
                    }

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
                      {!course.is_purchased && !course.is_in_user_subscription && <Button disabled={course.is_in_cart || disabledCartBtns.includes(course.id)} variant={""}
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
                              course.is_in_cart || disabledCartBtns.includes(course.id) ?
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
            JSON.stringify(myAccountData?.data?.courses) !== '[]' && myAccountData?.data?.courses !== null &&
            <>
              <Col sm={myAccountData?.data?.courses?.length == 0 ? 12 : 9} xs={12} className={styles["my-account__pagination"]}>
                {/*   {
                  myAccountData?.pagination?.count > 9 && <Pagination>
                    <Pagination.Prev
                      onClick={() => {
                        setPageNumber(myAccountData?.pagination?.current - 1);
                        handlePageClick(myAccountData?.pagination?.current - 1)
                      }}
                      className={`${currentPage == "1" && styles["disabled"]}`} />

                    <Pagination.Item
                      style={{ display: myAccountData?.pagination?.previous ? "" : "none" }}
                      active={currentPage == myAccountData?.pagination?.previous}
                      onClick={() => {
                        setPageNumber(myAccountData?.pagination?.previous);
                        handlePageClick(myAccountData?.pagination?.previous)
                      }}>
                      {myAccountData?.pagination?.previous}
                    </Pagination.Item>
                    <Pagination.Item
                      active={currentPage == myAccountData?.pagination?.current}
                      onClick={() => {
                        setPageNumber(myAccountData?.pagination?.current);
                        handlePageClick(myAccountData?.pagination?.current);
                      }}>
                      {myAccountData?.pagination?.current}
                    </Pagination.Item>
                    <Pagination.Item
                      style={{ display: myAccountData?.pagination?.next ? "" : "none" }}
                      active={currentPage == myAccountData?.pagination?.next}
                      onClick={() => {
                        setPageNumber(myAccountData?.pagination?.next);
                        handlePageClick(myAccountData?.pagination?.next)
                      }}>
                      {myAccountData?.pagination?.next}
                    </Pagination.Item>

                    <Pagination.Next
                      onClick={() => {
                        setPageNumber(myAccountData?.pagination?.current + 1);
                        handlePageClick(myAccountData?.pagination?.current + 1)
                      }}
                      className={`${currentPage == myAccountData?.pagination?.pages && styles["disabled"]}`} />
                  </Pagination>
                } */}
                {
                  (purchasedCoursesSlicer < myAccountData?.pagination?.count) && myAccountData?.pagination?.count > 9 &&

                  <Button disabled={isShowMoreBtnDisabled} onClick={() => setPurchasedCoursesSlicer(purchasedCoursesSlicer + 9)} className={styles["show-all-purchased-courses-btn"]}>
                    {
                      isShowMoreBtnDisabled ?
                        <>
                          <Spinner as="span" animation="border" />
                          جاري التحميل
                        </>
                        :
                        "تصفح المزيد"
                    }
                  </Button>
                }

              </Col>
            </>
          }
        </Col>

        <Col xs={{ span: 12, order: 1 }} sm={{ span: 12, order: 1 }}>
          {/* <BrowseThroughCategories data={myAccountData?.data?.categories} /> */}
          {
            JSON.stringify(myAccountData?.data?.courses) !== '[]' && myAccountData?.data?.courses !== null &&
            <WatchedCourses data={myAccountData?.data?.watched_courses} />
          }
        </Col>

        {/* <Col xs={{ span: 12, order: 4 }} sm={{ span: 12, order: 4 }}>
          <LatestCourses data={myAccountData?.data?.best_seller_courses} />
        </Col> */}

      </Row>

    </>
  )
}

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
        console.log('filterType', filterType);
        console.log('text', text);
        console.log('value', value);
        let checkedElement: any = document.getElementById(elementId);

        switch (filterType) {
            case "orderby":
                //Update UI
                setFilters({ ...filters, orderby: text });
                //Arrange or re-render the courses
                /*
                if(value = 'asc'){
                    let sorted = props.data.courses.sort(function(a:any, b:any) {
                        console.log('a', a);
                        return parseFloat(a.id) - parseFloat(b.id);
                    });
                    console.log('sorted', sorted);

                    setFilteredCourses(sorted);
                }
                else if(value = 'desc'){
                    let sorted = props.data.courses.sort(function(a:any, b:any) {
                        return parseFloat(b.id) - parseFloat(a.id);
                    });

                    setFilteredCourses(sorted);

                }
                else if(value = 'best-seller'){

                }
                */
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


    const handleFavActionBtn = (course: any): any => {
        if (userStatus.isUserAuthenticated == true) {
            const handleFavResponse: any = handleFav(course, `categories/${slug}/?page=${pageNumber}&limit=12`);
            handleFavResponse.then(function (response: any) {
                setFilteredCourses(response.data);
            })
        } else {
            Router.push({
                pathname: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}signin`,
                query: { from: `/topic/${slug}` }
            })
        }
    }



    const handleCartActionBtn = (course: any): any => {
        setDisabledCartBtns([...disabledCartBtns, course.id]);
        setTimeout(() => {
            setDisabledCartBtns(disabledCartBtns.filter((b: any) => b !== course.id));
        }, 5000);
        dispatch(setCheckoutType("cart"));

        const handleCartResponse: any = handleCart([course], `categories/${slug}/?page=${pageNumber}&limit=12`, false);
        handleCartResponse.then(function (firstresponse: any) {
            firstresponse.resp.then(function (response: any) {
                setFilteredCourses(response.data);
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
                query: { from: "/topic" }
            })
        }
    }

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
                    {/* <Offcanvas id="offcanvasNavbar3" aria-labelledby="offcanvasNavbarLabel3" placement="end" show={FilterSidebarShow} onHide={()=>{handleFilterSidebarShow(false)}}> 
              <Offcanvas.Header className={styles["filter-sidebar"]} closeButton>
                <Offcanvas.Title className={styles["filter-sidebar__title-box"]}> 
                 <div className={styles["filter-sidebar__title-box__icon"]}>
                 <svg xmlns="http://www.w3.org/2000/svg" width=" 1.5625rem" height="1.6875rem" viewBox="0 0 24.648 27.208">
                        <g id="filter" transform="translate(86.252 -109.198) rotate(90)">
                            <path id="Path_34330" data-name="Path 34330" d="M274.632,73.455V84.894a1.356,1.356,0,0,0,1.39,1.359,1.376,1.376,0,0,0,1.39-1.359V73.455a4.341,4.341,0,0,0,0-8.279V62.964a1.356,1.356,0,0,0-1.39-1.359,1.376,1.376,0,0,0-1.39,1.359v2.212a4.4,4.4,0,0,0-3.034,4.14A4.489,4.489,0,0,0,274.632,73.455Zm-.253-4.14a1.643,1.643,0,1,1,1.643,1.643A1.632,1.632,0,0,1,274.379,69.315Z" transform="translate(-153.236 -0.001)"/>
                            <path id="Path_34331" data-name="Path 34331" d="M112.232,82.586v2.307a1.391,1.391,0,0,0,2.781,0V82.586a4.341,4.341,0,0,0,0-8.279V62.963a1.391,1.391,0,0,0-2.781,0V74.307a4.341,4.341,0,0,0,0,8.279Zm-.284-4.14a1.643,1.643,0,1,1,1.643,1.643A1.7,1.7,0,0,1,111.947,78.446Z"/>
                            <path id="Path_34332" data-name="Path 34332" d="M437.592,82.586v2.307a1.356,1.356,0,0,0,1.39,1.359,1.376,1.376,0,0,0,1.39-1.359V82.586a4.341,4.341,0,0,0,0-8.279V62.963a1.356,1.356,0,0,0-1.39-1.359,1.376,1.376,0,0,0-1.39,1.359V74.307a4.341,4.341,0,0,0,0,8.279Zm-.284-4.14a1.643,1.643,0,1,1,1.643,1.643A1.632,1.632,0,0,1,437.307,78.446Z" transform="translate(-307)"/>
                        </g>
                    </svg>
                 </div>
                 <div className={styles["filter-sidebar__title-box__title"]}>
                     <div>تصنيف الدورات</div>
                     <div>مسح النتائج</div>
                 </div>
                  </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                
                <ul className={styles["filter-sidebar__filter-list"]}>
                    <div>المواضيع</div>
                    <li>
                        <input className="form-check-input" type="checkbox" id="topics" name="topics" />
                        <span >
                                        كل المواضيع
                        </span>
                    </li>

                    {
                    props.data.subcategories?.map((subcategory:any, i:number)=>{
                    return(
                        <li key={i}>
                            <input className="form-check-input" type="checkbox" onChange={()=>{handleFilters("topics",`${subcategory.title}`, `${subcategory.id}`, subcategory.title)}}
                             id={subcategory.slug} name={subcategory.slug} />
                            <span>
                                {subcategory.title}
                            </span>
                        </li>
                        )
                    })
                    } 
                    <div onClick={()=>{showMoreHandler("second")}}>
                        <span>
                        {
                                showMore.second == true ?
                            "اعرض المزيد"
                            :
                            "اعرض اقل"
                            }
                        </span>
                        <svg  className={`${
              showMore.second == false
                ? styles["show-less"]
                : styles["show-more"]
            }`} xmlns="http://www.w3.org/2000/svg" width="10" height="5.993" viewBox="0 0 10 5.993">
                            <g id="dropdown" transform="translate(0 5.993) rotate(-90)">
                                <path id="Path_12841" data-name="Path 12841" d="M11.454,4.29a.961.961,0,0,1,.164-.13L15.494.284a.969.969,0,0,1,1.37,1.37L13.525,4.992,16.88,8.347a.968.968,0,1,1-1.369,1.369L11.618,5.824a1.005,1.005,0,0,1-.164-1.534Z" transform="translate(-11.171 -0.001)" fill="#AF151F"/>
                            </g>
                        </svg>
                    </div>
                
                </ul>
                <ul className={styles["filter-sidebar__filter-list"]}>
                    <div>السعر</div>
                    <li>
                        <input className="form-check-input" type="checkbox" onChange={()=>{ handleFilters("price","المدفوع","paid", "prices-paid") }}
                             id="prices-paid" name="prices-paid" />
                        <span >
                        مدفوع 
                        </span>
                    </li>
                    <li>
                        <input className="form-check-input" type="checkbox" onChange={()=>{ handleFilters("price","المجاني","free", "prices-free") }}
                         id="prices-free" name="prices-free" />
                        <span >
                        مجاني
                        </span>
                    </li>
                
                </ul>
                <ul className={styles["filter-sidebar__filter-list"]}>
                    <div>المستوى</div>
                    <li> 
                        <input className="form-check-input" type="checkbox" onClick={()=> handleFilters("level","مبتدئ","1", "level-beginner")} 
                         id="level-beginner" name="level-beginner" />
                        <span >
                        مبتدئ
                        </span>
                    </li>
                    <li>
                        <input className="form-check-input" type="checkbox" onClick={()=> handleFilters("level","متوسط","2", "level-intermediate")} 
                        id="level-intermediate" name="level-intermediate" />
                        <span >
                        متوسط 
                        </span>
                    </li>
                    <li>
                        <input className="form-check-input" type="checkbox" onClick={()=> handleFilters("level","محترف","3", "level-advanced")} 
                        id="level-advanced" name="level-advanced"  />
                        <span >
                        محترف
                        </span>
                    </li>
                
                </ul>
             </Offcanvas.Body>
             
            </Offcanvas> */}
                    <div className="d-flex align-items-center justify-content-between">

                        {/* <div className={styles["training-courses__filter-icon"]} onClick={()=>{handleFilterSidebarShow(true)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width=" 1.5625rem" height="1.6875rem" viewBox="0 0 24.648 27.208">
                        <g id="filter" transform="translate(86.252 -109.198) rotate(90)">
                            <path id="Path_34330" data-name="Path 34330" d="M274.632,73.455V84.894a1.356,1.356,0,0,0,1.39,1.359,1.376,1.376,0,0,0,1.39-1.359V73.455a4.341,4.341,0,0,0,0-8.279V62.964a1.356,1.356,0,0,0-1.39-1.359,1.376,1.376,0,0,0-1.39,1.359v2.212a4.4,4.4,0,0,0-3.034,4.14A4.489,4.489,0,0,0,274.632,73.455Zm-.253-4.14a1.643,1.643,0,1,1,1.643,1.643A1.632,1.632,0,0,1,274.379,69.315Z" transform="translate(-153.236 -0.001)"/>
                            <path id="Path_34331" data-name="Path 34331" d="M112.232,82.586v2.307a1.391,1.391,0,0,0,2.781,0V82.586a4.341,4.341,0,0,0,0-8.279V62.963a1.391,1.391,0,0,0-2.781,0V74.307a4.341,4.341,0,0,0,0,8.279Zm-.284-4.14a1.643,1.643,0,1,1,1.643,1.643A1.7,1.7,0,0,1,111.947,78.446Z"/>
                            <path id="Path_34332" data-name="Path 34332" d="M437.592,82.586v2.307a1.356,1.356,0,0,0,1.39,1.359,1.376,1.376,0,0,0,1.39-1.359V82.586a4.341,4.341,0,0,0,0-8.279V62.963a1.356,1.356,0,0,0-1.39-1.359,1.376,1.376,0,0,0-1.39,1.359V74.307a4.341,4.341,0,0,0,0,8.279Zm-.284-4.14a1.643,1.643,0,1,1,1.643,1.643A1.632,1.632,0,0,1,437.307,78.446Z" transform="translate(-307)"/>
                        </g>
                    </svg>
                    </div> */}
                        <div>
                            <div className={styles["training-courses__title"]}> الدورات التدريبية </div>
                            {/* <div className={styles["training-courses__brief"]}> ابحث عن الدورات المناسبة لاختيارتك ومهاراتك بكل سهولة </div> */}
                        </div>
                    </div>
                </Col>


                {/* <Col xs={12} className={styles["training-courses__filters-col"]}>

                <div className={styles["training-courses__filters-col__filter-box"]}>
                    <div className={styles["training-courses__filters-col__filter-box__filter-by"]}>
                      الترتيب حسب 
                    </div>
                   <DropdownButton className={styles["training-courses__filters-col__filter-box__filter"]}
                    title={filters.orderby}
                    id="input-group-dropdown-1"
                    >
                        <Dropdown.Item onClick={()=> handleFilters("orderby","الأكثر مبيعاً", "best-seller", null)}>الأكثر مبيعاً</Dropdown.Item>
                        <Dropdown.Item onClick={()=> handleFilters("orderby","من الأقل للأعلى", "asc", null)}>من الأقل للأعلى</Dropdown.Item>
                        <Dropdown.Item onClick={()=> handleFilters("orderby","من الأعلى للأقل", "desc", null)}>من الأعلى للأقل</Dropdown.Item>
                    </DropdownButton>
                </div>
                <div className={styles["training-courses__filters-col__filter-box"]}>
                    <div className={styles["training-courses__filters-col__filter-box__filter-by"]}>
                      المستوى
                    </div>
                   <DropdownButton className={styles["training-courses__filters-col__filter-box__filter"]}
                    title={filters.level}
                    id="input-group-dropdown-1"
                    >
                        <Dropdown.Item onClick={()=> handleFilters("level","مبتدئ","1", null)}>
                            مبتدئ
                            </Dropdown.Item>
                        <Dropdown.Item onClick={()=> handleFilters("level","متوسط","2", null)}>
                            متوسط
                            </Dropdown.Item>
                        <Dropdown.Item onClick={()=> handleFilters("level","محترف","3", null)}>
                            محترف
                            </Dropdown.Item>
                    </DropdownButton>
                </div>
                <div className={styles["training-courses__filters-col__filter-box"]}>
                    <div className={styles["training-courses__filters-col__filter-box__filter-by"]}>
                    المواضيع
                    </div>
                   <DropdownButton className={styles["training-courses__filters-col__filter-box__filter"]}
                    title={filters.topics}
                    id="input-group-dropdown-1"
                    >
                    {
                    props.data.subcategories?.map((subcategory:any, i:number)=>{
                    return(
                        <Dropdown.Item key={i} onClick={()=> handleFilters("topics",`${subcategory.title}`, `${subcategory.id}`, null)}>{subcategory.title}</Dropdown.Item>
                        )
                    })
                    }
                    </DropdownButton>
                </div>
                <div className={styles["training-courses__filters-col__filter-box"]}>
                    <div className={styles["training-courses__filters-col__filter-box__filter-by"]}>
                      السعر
                    </div>
                   <DropdownButton className={styles["training-courses__filters-col__filter-box__filter"]}
                    title={filters.price}
                    id="input-group-dropdown-1"
                    >
                        <Dropdown.Item onClick={()=> handleFilters("price","الكل","all", null)}>الكل</Dropdown.Item>
                        <Dropdown.Item onClick={()=> handleFilters("price","المدفوع","paid", null)}>المدفوع</Dropdown.Item>
                        <Dropdown.Item onClick={()=> handleFilters("price","المجاني","free", null)}>المجاني</Dropdown.Item>
                    </DropdownButton>
                </div>
            </Col> */}

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
                                                        src={course.trainer.image}
                                                        alt={course.trainer.name_ar}
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
                                                        {course.trainer.name_ar}
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>

                                        <div
                                            className={
                                                styles[
                                                "training-courses__course-card__card-body__checkout-details"
                                                ]
                                            }
                                        >
                                            <div className="d-flex flex-column">
                                                <div
                                                    className={
                                                        styles[
                                                        "training-courses__course-card__card-body__checkout-details__price-container"
                                                        ]
                                                    }
                                                >
                                                    <span
                                                        className={
                                                            styles[
                                                            "training-courses__course-card__card-body__checkout-details__price-container__price"
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
                                                    {course.price !== 0 &&
                                                        <span
                                                            className={
                                                                styles[
                                                                "training-courses__course-card__card-body__checkout-details__price-container__currency"
                                                                ]
                                                            }
                                                        >
                                                            {!course.is_in_user_subscription && course.currency_symbol}
                                                        </span>
                                                    }
                                                </div>
                                                {
                                                    !course.is_purchased && !course.is_in_user_subscription && (course.price > course.discounted_price) &&
                                                    <div
                                                        className={
                                                            styles[
                                                            "training-courses__course-card__card-body__checkout-details__old-price-container"
                                                            ]
                                                        }
                                                    >
                                                        <span
                                                            className={
                                                                styles[
                                                                "training-courses__course-card__card-body__checkout-details__old-price-container__price"
                                                                ]
                                                            }
                                                        >
                                                            {course.price}
                                                        </span>
                                                        <span
                                                            className={
                                                                styles[
                                                                "training-courses__course-card__card-body__checkout-details__old-price-container__currency"
                                                                ]
                                                            }
                                                        >
                                                            {course.currency_symbol}
                                                        </span>
                                                    </div>
                                                }
                                            </div>

                                            <div className="d-inline-block">
                                                {!course.is_purchased && !course.is_in_user_subscription && <Button disabled={course.is_in_cart || disabledCartBtns.includes(course.id)} variant={""}
                                                    className={
                                                        styles[
                                                        "training-courses__course-card__card-body__checkout-details__icon-btn"
                                                        ]
                                                    }
                                                >
                                                    <div onClick={() =>
                                                        course.discounted_price == 0 ?
                                                            handleFreeCoursesActionBtn(course)
                                                            :
                                                            handleCartActionBtn(course)
                                                    }
                                                        className={styles["training-courses__course-card__card-body__checkout-details__icon-btn__cart-icon"]}>
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
                                                        "training-courses__course-card__card-body__checkout-details__icon-btn"
                                                        ]
                                                    }
                                                >
                                                    <div onClick={() => {

                                                        handleFavActionBtn(course)
                                                    }
                                                    }
                                                        className={styles["training-courses__course-card__card-body__checkout-details__icon-btn__fav-icon"]}>

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
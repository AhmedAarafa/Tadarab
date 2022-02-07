/* eslint-disable @next/next/no-img-element */
import React,{useState} from 'react'
import { Row, Col, Button,Card,Form,Dropdown,DropdownButton,Offcanvas} from "react-bootstrap";
import styles from "./training-courses.module.css";
import Select from 'react-select';

export default function TrainingCourses() {

    const [showMore, setShowMore] = useState<any>({
        first:true,
        second:true,
        third:true,
        fourth:true
    });

    const showMoreHandler = (order:any)=>{
        switch (order) {
            case "first":
                setShowMore({...showMore,first:!showMore[`${order}`]});
                break;
            case "second":
                setShowMore({...showMore,second:!showMore[`${order}`]});
                break;
            case "third":
                setShowMore({...showMore,third:!showMore[`${order}`]});
                break;
            case "fourth":
                setShowMore({...showMore,fourth:!showMore[`${order}`]});
                break;
        
            default:
                break;
        }
        
    }

    const [FilterSidebarShow, setFilterSidebarShow] = useState(false);
     const handleFilterSidebarShow = (status:boolean)=>{
    setFilterSidebarShow(status);
  }

    const [filters, setFilters] = useState({
        orderby:"الأكثر مبيعاً",
        level:"متوسط",
        topics:"مهارات يدوية",
        price:"المدفوع"
    });

    const handleFilters = (filterType:any,value:any):any =>{
        switch (filterType) {
            case "orderby":
                setFilters({...filters,orderby:value});
                break;
            case "level":
                setFilters({...filters,level:value});
                break;
            case "topics":
                setFilters({...filters,topics:value});
                break;
            case "price":
                setFilters({...filters,price:value});
                break;
        
            default:
                break;
        }
    }
    return (
        <>
        <Row className={styles["training-courses"]}>


            <Col xs={12} className={styles["training-courses__title-col"]}>
            <Offcanvas id="offcanvasNavbar3" aria-labelledby="offcanvasNavbarLabel3" placement="end" show={FilterSidebarShow} onHide={()=>{handleFilterSidebarShow(false)}}> 
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
                    <div>التخصصات</div>
                    <li>
                        <input className="form-check-input" type="checkbox" name="save-your-card-info" id="save-your-card-info" />
                        <span >
                        كل الأقسام
                        </span>
                    </li>
                    <li>
                        <input className="form-check-input" type="checkbox" name="save-your-card-info" id="save-your-card-info" />
                        <span >
                        تصوير
                        </span>
                    </li>
                    <li>
                        <input className="form-check-input" type="checkbox" name="save-your-card-info" id="save-your-card-info" />
                        <span >
                        تنمية بشرية
                        </span>
                    </li>
                    <li>
                        <input className="form-check-input" type="checkbox" name="save-your-card-info" id="save-your-card-info" />
                        <span >
                        الزراعة الداخلية
                        </span>
                    </li>
                    <div onClick={()=>{showMoreHandler("first")}}>
                        <span>
                            {
                                showMore.first == true ?
                            "اعرض المزيد"
                            :
                            "اعرض اقل"
                            }
                            </span>
                        <svg  className={`${
              showMore.first == false
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
                    <div>المواضيع</div>
                    <li>
                        <input className="form-check-input" type="checkbox" name="save-your-card-info" id="save-your-card-info" />
                        <span >
                        كل المواضيع
                        </span>
                    </li>
                    <li>
                        <input className="form-check-input" type="checkbox" name="save-your-card-info" id="save-your-card-info" />
                        <span >
                        تصوير
                        </span>
                    </li>
                    <li>
                        <input className="form-check-input" type="checkbox" name="save-your-card-info" id="save-your-card-info" />
                        <span >
                        الزراعة الداخلية
                        </span>
                    </li>
                    <li>
                        <input className="form-check-input" type="checkbox" name="save-your-card-info" id="save-your-card-info" />
                        <span >
                        فنون
                        </span>
                    </li>
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
                        <input className="form-check-input" type="checkbox" name="save-your-card-info" id="save-your-card-info" />
                        <span >
                        مدفوع
                        </span>
                    </li>
                    <li>
                        <input className="form-check-input" type="checkbox" name="save-your-card-info" id="save-your-card-info" />
                        <span >
                        مجاني
                        </span>
                    </li>
                    <div onClick={()=>{showMoreHandler("third")}}>
                    <span>
                        {
                            showMore.third == true ?
                            "اعرض المزيد"
                            :
                            "اعرض اقل"
                            }
                        </span>
                        <svg  className={`${
              showMore.third == false
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
                    <div>المستوي</div>
                    <li>
                        <input className="form-check-input" type="checkbox" name="save-your-card-info" id="save-your-card-info" />
                        <span >
                        مبتدئ
                        </span>
                    </li>
                    <li>
                        <input className="form-check-input" type="checkbox" name="save-your-card-info" id="save-your-card-info" />
                        <span >
                        متوسط
                        </span>
                    </li>
                    <li>
                        <input className="form-check-input" type="checkbox" name="save-your-card-info" id="save-your-card-info" />
                        <span >
                        محترف
                        </span>
                    </li>
                    
                    <div onClick={()=>{showMoreHandler("fourth")}}>
                    <span>
                        {
                            showMore.fourth == true ?
                            "اعرض المزيد"
                            :
                            "اعرض اقل"
                            }
                        </span>
                        <svg  className={`${
              showMore.fourth == false
                ? styles["show-less"]
                : styles["show-more"]
            }`} xmlns="http://www.w3.org/2000/svg" width="10" height="5.993" viewBox="0 0 10 5.993">
                            <g id="dropdown" transform="translate(0 5.993) rotate(-90)">
                                <path id="Path_12841" data-name="Path 12841" d="M11.454,4.29a.961.961,0,0,1,.164-.13L15.494.284a.969.969,0,0,1,1.37,1.37L13.525,4.992,16.88,8.347a.968.968,0,1,1-1.369,1.369L11.618,5.824a1.005,1.005,0,0,1-.164-1.534Z" transform="translate(-11.171 -0.001)" fill="#AF151F"/>
                            </g>
                        </svg>
                    </div>
                
                </ul>
             </Offcanvas.Body>
             
            </Offcanvas>
                <div className="d-flex align-items-center justify-content-between">

                    <div className={styles["training-courses__filter-icon"]} onClick={()=>{handleFilterSidebarShow(true)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width=" 1.5625rem" height="1.6875rem" viewBox="0 0 24.648 27.208">
                        <g id="filter" transform="translate(86.252 -109.198) rotate(90)">
                            <path id="Path_34330" data-name="Path 34330" d="M274.632,73.455V84.894a1.356,1.356,0,0,0,1.39,1.359,1.376,1.376,0,0,0,1.39-1.359V73.455a4.341,4.341,0,0,0,0-8.279V62.964a1.356,1.356,0,0,0-1.39-1.359,1.376,1.376,0,0,0-1.39,1.359v2.212a4.4,4.4,0,0,0-3.034,4.14A4.489,4.489,0,0,0,274.632,73.455Zm-.253-4.14a1.643,1.643,0,1,1,1.643,1.643A1.632,1.632,0,0,1,274.379,69.315Z" transform="translate(-153.236 -0.001)"/>
                            <path id="Path_34331" data-name="Path 34331" d="M112.232,82.586v2.307a1.391,1.391,0,0,0,2.781,0V82.586a4.341,4.341,0,0,0,0-8.279V62.963a1.391,1.391,0,0,0-2.781,0V74.307a4.341,4.341,0,0,0,0,8.279Zm-.284-4.14a1.643,1.643,0,1,1,1.643,1.643A1.7,1.7,0,0,1,111.947,78.446Z"/>
                            <path id="Path_34332" data-name="Path 34332" d="M437.592,82.586v2.307a1.356,1.356,0,0,0,1.39,1.359,1.376,1.376,0,0,0,1.39-1.359V82.586a4.341,4.341,0,0,0,0-8.279V62.963a1.356,1.356,0,0,0-1.39-1.359,1.376,1.376,0,0,0-1.39,1.359V74.307a4.341,4.341,0,0,0,0,8.279Zm-.284-4.14a1.643,1.643,0,1,1,1.643,1.643A1.632,1.632,0,0,1,437.307,78.446Z" transform="translate(-307)"/>
                        </g>
                    </svg>
                    </div>
                    <div>
                        <div className={styles["training-courses__title"]}> الدورات التدريبية </div>
                        <div className={styles["training-courses__brief"]}> ابحث عن الدورات المناسبة لاختيارتك ومهاراتك بكل سهولة </div>
                    </div>
                </div>
            </Col>


            <Col xs={12} className={styles["training-courses__filters-col"]}>

                <div className={styles["training-courses__filters-col__filter-box"]}>
                    <div className={styles["training-courses__filters-col__filter-box__filter-by"]}>
                      الترتيب حسب 
                    </div>
                   <DropdownButton className={styles["training-courses__filters-col__filter-box__filter"]}
                    title={filters.orderby}
                    id="input-group-dropdown-1"
                    >
                        <Dropdown.Item onClick={()=> handleFilters("orderby","الأكثر مبيعاً")}>الأكثر مبيعاً</Dropdown.Item>
                        <Dropdown.Item onClick={()=> handleFilters("orderby","من الأقل للأعلي")}>من الأقل للأعلي</Dropdown.Item>
                        <Dropdown.Item onClick={()=> handleFilters("orderby","من الأعلي للأقل")}>من الأعلي للأقل</Dropdown.Item>
                    </DropdownButton>
                </div>
                <div className={styles["training-courses__filters-col__filter-box"]}>
                    <div className={styles["training-courses__filters-col__filter-box__filter-by"]}>
                      المستوي
                    </div>
                   <DropdownButton className={styles["training-courses__filters-col__filter-box__filter"]}
                    title={filters.level}
                    id="input-group-dropdown-1"
                    >
                        <Dropdown.Item onClick={()=> handleFilters("level","مبتدئ")}>
                            مبتدئ
                            </Dropdown.Item>
                        <Dropdown.Item onClick={()=> handleFilters("level","متوسط")}>
                            متوسط
                            </Dropdown.Item>
                        <Dropdown.Item onClick={()=> handleFilters("level","محترف")}>
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
                        <Dropdown.Item onClick={()=> handleFilters("topics","مهارات يدوية")}>مهارات يدوية</Dropdown.Item>
                        <Dropdown.Item onClick={()=> handleFilters("topics","فنون")}>فنون</Dropdown.Item>
                        <Dropdown.Item onClick={()=> handleFilters("topics","رسم")}>رسم</Dropdown.Item>
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
                        <Dropdown.Item onClick={()=> handleFilters("price","الكل")}>الكل</Dropdown.Item>
                        <Dropdown.Item onClick={()=> handleFilters("price","المدفوع")}>المدفوع</Dropdown.Item>
                        <Dropdown.Item onClick={()=> handleFilters("price","المجاني")}>المجاني</Dropdown.Item>
                    </DropdownButton>
                </div>
            </Col>

            <Col xs={12} className={styles["training-courses__filtered-courses"]}>
                
                <Card className={styles["training-courses__course-card"]}
                        >
                        <div
                            className={
                            styles[
                                "training-courses__course-card__category-chip"
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
                                "training-courses__course-card__course-img"
                            ]
                            }
                        />
                        <Card.Body
                            className={
                            styles[
                                "training-courses__course-card__card-body"
                            ]
                            }
                        >
                            <div
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
                                <img
                                src="/images/trainer img.png"
                                alt="trainer image"
                                />
                            </div>
                            <div
                                className={
                                styles[
                                    "training-courses__course-card__card-body__card-header__course-details"
                                ]
                                }
                            >
                                <h1
                                className={
                                    styles[
                                    "training-courses__course-card__card-body__card-header__course-details__title"
                                    ]
                                }
                                >
                                إحتراف التصوير بالكاميرا
                                </h1>
                                <div
                                className={
                                    styles[
                                    "training-courses__course-card__card-body__card-header__course-details__author"
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
                                    850
                                </span>
                                <span
                                    className={
                                    styles[
                                        "training-courses__course-card__card-body__checkout-details__price-container__currency"
                                    ]
                                    }
                                >
                                    جنية مصري
                                </span>
                                </div>
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
                                    950
                                </span>
                                <span
                                    className={
                                    styles[
                                        "training-courses__course-card__card-body__checkout-details__old-price-container__currency"
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
                                    "training-courses__course-card__card-body__checkout-details__icon-btn"
                                    ]
                                }
                                >
                                <svg className={styles["training-courses__course-card__card-body__checkout-details__icon-btn__cart-icon"]}  
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
                                    "training-courses__course-card__card-body__checkout-details__icon-btn"
                                    ]
                                }
                                >
                                
                                <svg className={styles["training-courses__course-card__card-body__checkout-details__icon-btn__fav-icon"]} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20.571 18">
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
                <Card className={styles["training-courses__course-card"]}
                        >
                        <div
                            className={
                            styles[
                                "training-courses__course-card__category-chip"
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
                                "training-courses__course-card__course-img"
                            ]
                            }
                        />
                        <Card.Body
                            className={
                            styles[
                                "training-courses__course-card__card-body"
                            ]
                            }
                        >
                            <div
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
                                <img
                                src="/images/trainer img.png"
                                alt="trainer image"
                                />
                            </div>
                            <div
                                className={
                                styles[
                                    "training-courses__course-card__card-body__card-header__course-details"
                                ]
                                }
                            >
                                <h1
                                className={
                                    styles[
                                    "training-courses__course-card__card-body__card-header__course-details__title"
                                    ]
                                }
                                >
                                إحتراف التصوير بالكاميرا
                                </h1>
                                <div
                                className={
                                    styles[
                                    "training-courses__course-card__card-body__card-header__course-details__author"
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
                                "training-courses__course-card__card-body__checkout-details"
                                ]
                            }
                            >
                            <div className="d-inline-block">
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
                                    850
                                </span>
                                <span
                                    className={
                                    styles[
                                        "training-courses__course-card__card-body__checkout-details__price-container__currency"
                                    ]
                                    }
                                >
                                    جنية مصري
                                </span>
                                </div>
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
                                    950
                                </span>
                                <span
                                    className={
                                    styles[
                                        "training-courses__course-card__card-body__checkout-details__old-price-container__currency"
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
                                    "training-courses__course-card__card-body__checkout-details__icon-btn"
                                    ]
                                }
                                >
                                <svg className={styles["training-courses__course-card__card-body__checkout-details__icon-btn__cart-icon"]}  
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
                                    "training-courses__course-card__card-body__checkout-details__icon-btn"
                                    ]
                                }
                                >
                                
                                <svg className={styles["training-courses__course-card__card-body__checkout-details__icon-btn__fav-icon"]} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20.571 18">
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
                <Card className={styles["training-courses__course-card"]}
                        >
                        <div
                            className={
                            styles[
                                "training-courses__course-card__category-chip"
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
                                "training-courses__course-card__course-img"
                            ]
                            }
                        />
                        <Card.Body
                            className={
                            styles[
                                "training-courses__course-card__card-body"
                            ]
                            }
                        >
                            <div
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
                                <img
                                src="/images/trainer img.png"
                                alt="trainer image"
                                />
                            </div>
                            <div
                                className={
                                styles[
                                    "training-courses__course-card__card-body__card-header__course-details"
                                ]
                                }
                            >
                                <h1
                                className={
                                    styles[
                                    "training-courses__course-card__card-body__card-header__course-details__title"
                                    ]
                                }
                                >
                                إحتراف التصوير بالكاميرا
                                </h1>
                                <div
                                className={
                                    styles[
                                    "training-courses__course-card__card-body__card-header__course-details__author"
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
                                "training-courses__course-card__card-body__checkout-details"
                                ]
                            }
                            >
                            <div className="d-inline-block">
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
                                    850
                                </span>
                                <span
                                    className={
                                    styles[
                                        "training-courses__course-card__card-body__checkout-details__price-container__currency"
                                    ]
                                    }
                                >
                                    جنية مصري
                                </span>
                                </div>
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
                                    950
                                </span>
                                <span
                                    className={
                                    styles[
                                        "training-courses__course-card__card-body__checkout-details__old-price-container__currency"
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
                                    "training-courses__course-card__card-body__checkout-details__icon-btn"
                                    ]
                                }
                                >
                                <svg className={styles["training-courses__course-card__card-body__checkout-details__icon-btn__cart-icon"]}  
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
                                    "training-courses__course-card__card-body__checkout-details__icon-btn"
                                    ]
                                }
                                >
                                
                                <svg className={styles["training-courses__course-card__card-body__checkout-details__icon-btn__fav-icon"]} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20.571 18">
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
                <Card className={styles["training-courses__course-card"]}
                        >
                        <div
                            className={
                            styles[
                                "training-courses__course-card__category-chip"
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
                                "training-courses__course-card__course-img"
                            ]
                            }
                        />
                        <Card.Body
                            className={
                            styles[
                                "training-courses__course-card__card-body"
                            ]
                            }
                        >
                            <div
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
                                <img
                                src="/images/trainer img.png"
                                alt="trainer image"
                                />
                            </div>
                            <div
                                className={
                                styles[
                                    "training-courses__course-card__card-body__card-header__course-details"
                                ]
                                }
                            >
                                <h1
                                className={
                                    styles[
                                    "training-courses__course-card__card-body__card-header__course-details__title"
                                    ]
                                }
                                >
                                إحتراف التصوير بالكاميرا
                                </h1>
                                <div
                                className={
                                    styles[
                                    "training-courses__course-card__card-body__card-header__course-details__author"
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
                                "training-courses__course-card__card-body__checkout-details"
                                ]
                            }
                            >
                            <div className="d-inline-block">
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
                                    850
                                </span>
                                <span
                                    className={
                                    styles[
                                        "training-courses__course-card__card-body__checkout-details__price-container__currency"
                                    ]
                                    }
                                >
                                    جنية مصري
                                </span>
                                </div>
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
                                    950
                                </span>
                                <span
                                    className={
                                    styles[
                                        "training-courses__course-card__card-body__checkout-details__old-price-container__currency"
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
                                    "training-courses__course-card__card-body__checkout-details__icon-btn"
                                    ]
                                }
                                >
                                <svg className={styles["training-courses__course-card__card-body__checkout-details__icon-btn__cart-icon"]}  
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
                                    "training-courses__course-card__card-body__checkout-details__icon-btn"
                                    ]
                                }
                                >
                                
                                <svg className={styles["training-courses__course-card__card-body__checkout-details__icon-btn__fav-icon"]} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20.571 18">
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
                <Card className={styles["training-courses__course-card"]}
                        >
                        <div
                            className={
                            styles[
                                "training-courses__course-card__category-chip"
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
                                "training-courses__course-card__course-img"
                            ]
                            }
                        />
                        <Card.Body
                            className={
                            styles[
                                "training-courses__course-card__card-body"
                            ]
                            }
                        >
                            <div
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
                                <img
                                src="/images/trainer img.png"
                                alt="trainer image"
                                />
                            </div>
                            <div
                                className={
                                styles[
                                    "training-courses__course-card__card-body__card-header__course-details"
                                ]
                                }
                            >
                                <h1
                                className={
                                    styles[
                                    "training-courses__course-card__card-body__card-header__course-details__title"
                                    ]
                                }
                                >
                                إحتراف التصوير بالكاميرا
                                </h1>
                                <div
                                className={
                                    styles[
                                    "training-courses__course-card__card-body__card-header__course-details__author"
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
                                "training-courses__course-card__card-body__checkout-details"
                                ]
                            }
                            >
                            <div className="d-inline-block">
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
                                    850
                                </span>
                                <span
                                    className={
                                    styles[
                                        "training-courses__course-card__card-body__checkout-details__price-container__currency"
                                    ]
                                    }
                                >
                                    جنية مصري
                                </span>
                                </div>
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
                                    950
                                </span>
                                <span
                                    className={
                                    styles[
                                        "training-courses__course-card__card-body__checkout-details__old-price-container__currency"
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
                                    "training-courses__course-card__card-body__checkout-details__icon-btn"
                                    ]
                                }
                                >
                                <svg className={styles["training-courses__course-card__card-body__checkout-details__icon-btn__cart-icon"]}  
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
                                    "training-courses__course-card__card-body__checkout-details__icon-btn"
                                    ]
                                }
                                >
                                
                                <svg className={styles["training-courses__course-card__card-body__checkout-details__icon-btn__fav-icon"]} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20.571 18">
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
                <Card className={styles["training-courses__course-card"]}
                        >
                        <div
                            className={
                            styles[
                                "training-courses__course-card__category-chip"
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
                                "training-courses__course-card__course-img"
                            ]
                            }
                        />
                        <Card.Body
                            className={
                            styles[
                                "training-courses__course-card__card-body"
                            ]
                            }
                        >
                            <div
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
                                <img
                                src="/images/trainer img.png"
                                alt="trainer image"
                                />
                            </div>
                            <div
                                className={
                                styles[
                                    "training-courses__course-card__card-body__card-header__course-details"
                                ]
                                }
                            >
                                <h1
                                className={
                                    styles[
                                    "training-courses__course-card__card-body__card-header__course-details__title"
                                    ]
                                }
                                >
                                إحتراف التصوير بالكاميرا
                                </h1>
                                <div
                                className={
                                    styles[
                                    "training-courses__course-card__card-body__card-header__course-details__author"
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
                                "training-courses__course-card__card-body__checkout-details"
                                ]
                            }
                            >
                            <div className="d-inline-block">
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
                                    850
                                </span>
                                <span
                                    className={
                                    styles[
                                        "training-courses__course-card__card-body__checkout-details__price-container__currency"
                                    ]
                                    }
                                >
                                    جنية مصري
                                </span>
                                </div>
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
                                    950
                                </span>
                                <span
                                    className={
                                    styles[
                                        "training-courses__course-card__card-body__checkout-details__old-price-container__currency"
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
                                    "training-courses__course-card__card-body__checkout-details__icon-btn"
                                    ]
                                }
                                >
                                <svg className={styles["training-courses__course-card__card-body__checkout-details__icon-btn__cart-icon"]}  
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
                                    "training-courses__course-card__card-body__checkout-details__icon-btn"
                                    ]
                                }
                                >
                                
                                <svg className={styles["training-courses__course-card__card-body__checkout-details__icon-btn__fav-icon"]} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20.571 18">
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

            </Col>
        </Row>
            
        </>
    )
}

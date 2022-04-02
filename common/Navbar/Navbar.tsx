/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React , { useState , useEffect, ChangeEvent } from "react";
import styles from "./navbar.module.css";
import Link from 'next/link';
import {
  Navbar as NavBar,
  Nav,
  Form,
  Button,
  Badge,
  OverlayTrigger,
  Popover,
  Offcanvas
} from "react-bootstrap";
import { popoverHandler } from "./utils";
import {TadarabLogo,NextIcon,BackIcon,DarkModeIcon,DropDownIcon,SearchIcon,
  FavouriteIcon,CartIcon,AccountIcon,ThreeDotsIcon,CertificateIcon,LessonPlayIcon} from "common/Icons/Icons";
import { useDispatch, useSelector } from "react-redux";
import withAuth from "configurations/auth guard/AuthGuard";
import { axiosInstance } from "configurations/axios/axiosConfig";
import { setCartItems } from "configurations/redux/actions/cartItems"; 
import Router, { useRouter }  from "next/router";
import { setIsUserAuthenticated } from "configurations/redux/actions/userAuthentication";
import { setHomePageData } from "configurations/redux/actions/homePageData";
import { setMyCourseNavigator } from "configurations/redux/actions/myCourseNavigator";
import { handleCart } from "modules/_Shared/utils/handleCart";
import { withRouter } from 'next/router';
import useResize from "custom hooks/useResize";

function Navbar() {
  const [discoverSidebarShow, setDiscoverSidebarShow] = useState(false);
  const [isCoursePurchased, setIsCoursePurchased] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [expanded, setExpanded] = useState<any>(false);
  const [purchasedCoursesNav, setPurchasedCoursesNav] = useState("curriculum");
  const [searchQuery, setSearchQuery] = useState("");
  const handleDiscoverSidebarShow = (status:boolean)=>{
    setDiscoverSidebarShow(status);
  }
  const [localStateCartItems, setLocalStateCartItems] = useState<any>(null);
  const userStatus = useSelector((state:any) => state.userAuthentication);
  const cartItems = useSelector((state:any) => state.cartItems);
  const myCourseNavigator = useSelector((state:any) => state.myCourseNavigator);


  const dispatch = useDispatch();


  const handleLogout = () =>{
    localStorage.removeItem("token");
    localStorage.removeItem("cart");
    localStorage.removeItem("cart_items");
    Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}`);

    dispatch(setIsUserAuthenticated({...userStatus,isUserAuthenticated:false,token:null}));
    dispatch(setCartItems(null));
    setLocalStateCartItems(null);

    axiosInstance
        .get(`home/?country_code=${localStorage.getItem("countryCode")}`,{ headers: {"Authorization" : ``} })
        .then(function (response:any) {
          dispatch(setHomePageData(response.data.data))
        })
        .catch(function (error) {
          console.log(error);
        });
    
  }


  useEffect(() => {
    // popoverHandler();
    // closeBtnHandler();
    window.addEventListener("click" , (e:any)=>{
      if(e.target.className == "btn-close" ||
       e.target.className == ("fade offcanvas-backdrop show") ||
       e.target.className == ("fade offcanvas-backdrop") 
       ){
        const closeBtn:any=document.getElementsByClassName(`btn-close`)[0];
        closeBtn.style.cssText=` display:none !important`;
        const discoverSidebar:any = document.getElementById("offcanvasNavbar2");
        discoverSidebar ?
          discoverSidebar.style.cssText=`
        transform: translateX(100%);
        visibility:hidden;
        transition: all 0.3s ease-in-out;
        `
         : 
        null ;
         setExpanded(false);
      }
  
      if(e.target.id == "back-btn" ||
       e.target.id == "back" ||
       e.target.id == "back-btn-text" ||
       e.target.id == "Path_12841"
       ){
        const discoverSidebar:any = document.getElementById("offcanvasNavbar2");
        discoverSidebar.style.cssText=`
        transform: translateX(100%);
        visibility:hidden;
        transition: all 0.3s ease-in-out;
        `
        // return setExpanded(false);
      }
  
      if(e.target.id == "discover" ||
       e.target.id == "next" ||
       e.target.id == "Path_12841" 
       ){
        const discoverSidebar:any = document.getElementById("offcanvasNavbar2");
        discoverSidebar ?  discoverSidebar.style.cssText=`
        transform: none;
        visibility:visible;
        ` : null ;
        // return setExpanded(true);
      }
    });


   const searchBar:any = document.getElementById("search-bar");

      if(userStatus.isUserAuthenticated){
        if(searchBar){
          if(window.innerWidth > 1960){
            searchBar.style.cssText=`width: calc(100vw - 59rem)`;
          } else{
            // searchBar.style.cssText=`width:28rem`;
            searchBar.style.cssText=`width:31.75rem`;
          }
        }
        window.addEventListener("resize" , ()=>{
        if(searchBar){

          if(window.innerWidth > 1960){
            searchBar.style.cssText=`width: calc(100vw - 59rem)`;
          } else{
            // searchBar.style.cssText=`width:28rem`;
            searchBar.style.cssText=`width:31.75rem`;
          }
        }
        });
   
      }
      else{
        // setIsLoggedIn(false);
        if(searchBar){

          if(window.innerWidth > 1960){
            searchBar.style.cssText=`width: calc(100vw - 54.5rem)`;
          } else{
            // searchBar.style.cssText=`width:34.5rem`;
            searchBar.style.cssText=`width:32.5rem`;
          }
        }

        window.addEventListener("resize" , ()=>{
        if(searchBar){

          if(window.innerWidth > 1960){
            searchBar.style.cssText=`width: calc(100vw - 54.5rem)`;
          } else if(window.innerWidth <= 1960){
            // searchBar.style.cssText=`width:34.5rem`;
            searchBar.style.cssText=`width:32.5rem`;
          }
        }
        });
    
      }
  


    return () => {
      window.removeEventListener("resize" , ()=>{
        return;
      });

      window.removeEventListener("mousemove" , ()=>{
        return;
      });
    };
  },[userStatus]);
 
  
  useEffect(() => {
    
    let localStorageItems:any = localStorage.getItem("cart");
    // console.log("cartItems",cartItems);
    // console.log("localStorageItems",localStorageItems);
    // if(userStatus.isUserAuthenticated === true){
        // setLocalStateCartItems(cartItems?.data);
        
        
        if(localStorageItems !== "[]" && localStorageItems !== "null" && localStorageItems !== "undefined"){

        axiosInstance
        .get(`courses/?country_code=${localStorage.getItem("countryCode")}&course_ids=${localStorageItems?.replace(/[\[\]']+/g,'')}`)
        .then(function (response:any) {
          dispatch(setCartItems(response?.data?.data));
          // setLocalStateCartItems(cartItems?.data);
        })
        .catch(function (error) {
          console.log(error); 
        });
        
      }else{

        setLocalStateCartItems(null);
        // dispatch(setCartItems(null));
      }


}, [])

  useEffect(() => {
    
    let localStorageItems:any = localStorage.getItem("cart");
    // if(userStatus.isUserAuthenticated === true){
      // setLocalStateCartItems(cartItems?.data);
      
      if(localStorageItems !== "[]" && localStorageItems !== "null" && localStorageItems !== "undefined"){
          
        axiosInstance
        .get(`courses/?country_code=${localStorage.getItem("countryCode")}&course_ids=${localStorageItems?.replace(/[\[\]']+/g,'')}`)
        .then(function (response:any) {
          // dispatch(setCartItems(response.data.data));
          setLocalStateCartItems(response.data.data);
          // setLocalStateCartItems(cartItems?.data);
        })
        .catch(function (error) {
          console.log(error); 
        });
        
      }else{
        setLocalStateCartItems([]);
      }

}, [cartItems])


  useResize((
    ()=>{
      if(window.innerWidth < 576){
        setIsMobileView(true);
      }else{
        setIsMobileView(false);
      }
    }
  ))

const handleSearchBarEntries = (e:ChangeEvent<HTMLInputElement> | Event | undefined)=>{
 e && e.target  && setSearchQuery((e.target as HTMLInputElement).value);
}

const sendSearchQuery = (e:any)=>{

  if (e.key === 'Enter' || e.keyCode === 13 || e.target.id == "responsive-search-field-btn") {
    if(searchQuery == ""){
      console.log("متخمش يسطا");
    }else{
      Router.push({
        pathname: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}search`,
        query: { q: searchQuery }
      });
      const searchBar:any = document.getElementById("search-field");
      const responsiveSearchBar:any = document.getElementById("responsive-search-field");
      searchBar.value = "";
      searchBar.blur();
      responsiveSearchBar.value = "";
      responsiveSearchBar.blur();
    }
}
}

const searchBoxToggler = (action:any) =>{
 const searchBoxOverlay:any =  document.getElementById("search-box-overlay");
  switch (action) {
    case "open":
      searchBoxOverlay.style.cssText=`display:block;`
      break;
    case "close":
      searchBoxOverlay.style.cssText=`display:none;`
      break;
  
    default:
      break;
  }
}


  

  return (
    <>
      <NavBar id="nav" fixed="top"
       style={{justifyContent : (isCoursePurchased && !isMobileView) ? "right" : "" ,
       paddingRight : isCoursePurchased ? "0.6rem" : ""}} 
       className={styles["navbar"]} expanded={expanded} expand="sm">
        <Link href="/">

        <NavBar.Brand className={styles["navbar__img"]} >
        <TadarabLogo />
        </NavBar.Brand>
        </Link>
        
        <NavBar.Toggle onClick={() => {setExpanded(!expanded)}} aria-controls="offcanvasNavbar1" />
        <NavBar.Offcanvas  onHide={()=>{handleDiscoverSidebarShow(false)}}
          id="offcanvasNavbar1"
          aria-labelledby="offcanvasNavbarLabel1"
          placement="end"
        >
          <Offcanvas.Header closeButton >
            <Offcanvas.Title id="offcanvasNavbarLabel1">القائمة الرئيسة</Offcanvas.Title>
          </Offcanvas.Header>
          <ul className={styles["sidebar-list"]}>
            <li id="discover" className={styles["sidebar-list__item"]} onClick={()=>{handleDiscoverSidebarShow(true)}}>
              استكشف
              <NextIcon color="#222"/>
            </li>
          
            <Offcanvas id="offcanvasNavbar2" aria-labelledby="offcanvasNavbarLabel2" backdrop={false} placement="end" show={discoverSidebarShow} onHide={()=>{handleDiscoverSidebarShow(false)}}> 
              <Offcanvas.Header className={styles["sidebar-list__discover-sidebar"]}>
                <Offcanvas.Title className={styles["sidebar-list__discover-sidebar__title"]}> 
                  استكشف
                  <div id="back-btn" className={styles["sidebar-list__discover-sidebar__title__back-btn"]}>
                  <BackIcon color="#222"/>
                  <span id="back-btn-text"> الرجوع </span>  
                  </div>
                  </Offcanvas.Title>
              </Offcanvas.Header>
              <ul className={styles["sidebar-list__discover-sidebar__list"]}>
                <div><div>التخصصات</div></div>
                <Link href="/topic/family-2">
                      <li>الاسرة</li>
                      </Link>
                      <Link href="/topic/self-development">
                      <li>التنمية الذاتية</li>
                      </Link>
                      <Link href="/topic/health">
                      <li>الصحة</li>
                      </Link>
                      <Link href="/topic/human-recourses">
                      <li>الموارد البشرية</li>
                      </Link>
                      <Link href="/topic/office">
                      <li>برامج الأوفيس</li>
                      </Link>
                      <Link href="/topic/family-and-educational-skills">
                      <li>تربية الأبناء</li>
                      </Link>
                      <Link href="/topic/technology">
                      <li>تكنولوجيا</li>
                      </Link>
                      <Link href="/topic/business">
                      <li>ريادة الأعمال</li>
                      </Link>
                      <Link href="/topic/language-and-sciences">
                      <li>علوم ولغات</li>
                      </Link>
                      <Link href="/topic/talents">
                      <li>فن وهوايات</li>
                      </Link>
                      <Link href="/topic/home">
                      <li>منزل</li>
                      </Link>
              </ul>
              <ul className={styles["sidebar-list__discover-sidebar__list"]}>
                <div><div>الأقسام</div></div>
                <Link href="/courses?filter_type=all">
                  
                  <li>دورات تدريبية</li>
                </Link>
                <Link href="/courses?filter_type=live">

                  <li>دورات مباشرة</li>
                </Link>
                  {/* <li>الاستشارات</li>
                  <li>كتيبات وملخصات</li>
                  <li>مقالات</li> */}
              </ul>
              {/* <ul className={styles["sidebar-list__discover-sidebar__list"]}>
                <div><div>أخري</div></div>
                  <li>عروض</li>
                  <li>المدربين</li>
                  <li>عن تدرب</li>
                  <li>تواصل معنا</li>
              </ul> */}
            </Offcanvas>
            <li className={styles["sidebar-list__item"]}>تدرب للشركات</li>
            <li className={styles["sidebar-list__item"]}>انضم كمدرب</li>
            { userStatus.isUserAuthenticated && <li className={styles["sidebar-list__item"]}>لوحتي التعليمية</li>}
            <li id="curriculum" className={styles["sidebar-list__item"]}
            onClick={()=>{dispatch(setMyCourseNavigator("curriculum"));
            setExpanded(false);
          }
        }
            >المنهج</li>
            <li id="certificate" className={styles["sidebar-list__item"]}
            onClick={()=>{dispatch(setMyCourseNavigator("certificate"));
            setExpanded(false);
          }}
            >شهادة الدورة</li>
          </ul>
          <div className={styles["sidebar-list__dark-mode-box"]}>
            <span>تغيير للوضع الداكن</span>
            <div className={styles["sidebar-list__dark-mode-box__icon"]}>

            <DarkModeIcon/>
            </div>

          </div>
          <Link href="/signup">
          <Button className={styles["sidebar-list__register-btn"]}>
            {
              userStatus.isUserAuthenticated ? 
              "حسابي"
              :
              "حساب جديد"
            }
          </Button>
          </Link>   
          <Link href="/signin">
          <Button onClick={()=>{
            userStatus.isUserAuthenticated ? 
            handleLogout() :
            null
          }}
           className={styles["sidebar-list__sign-in-btn"]}>
            {
              userStatus.isUserAuthenticated ? 
              "تسجيل خروج"
              :
              "تسجيل دخول"
            }
            </Button>
          </Link>   
        </NavBar.Offcanvas>
        <Nav>
        { !isCoursePurchased &&
        <>
          <Nav.Link onMouseOver={()=> popoverHandler("over")}
              onMouseOut={()=> popoverHandler("out")}
               className={styles["navbar__links"]} id="discover" >
                استكشف
                <DropDownIcon color="#222"/>
              </Nav.Link>
              <div id="discover-popover__wrapper" onMouseOver={()=>popoverHandler("over")}
              onMouseOut={()=> popoverHandler("out")}
               className={styles["navbar__discover-popover__wrapper"]}>
                <div className={styles["navbar__discover-popover"]} id="discover-popover" >
                    <div className={styles["navbar__discover-popover__box"]}>
                      <div className={styles["navbar__discover-popover__caption"]}>
                        التخصصات
                      </div>
                      <ul className={styles["navbar__discover-popover__list"]}>
                      <Link href="/topic/family-2">
                      <li>الاسرة</li>
                      </Link>
                      <Link href="/topic/self-development">
                      <li>التنمية الذاتية</li>
                      </Link>
                      <Link href="/topic/health">
                      <li>الصحة</li>
                      </Link>
                      <Link href="/topic/human-recourses">
                      <li>الموارد البشرية</li>
                      </Link>
                      <Link href="/topic/office">
                      <li>برامج الأوفيس</li>
                      </Link>
                      <Link href="/topic/family-and-educational-skills">
                      <li>تربية الأبناء</li>
                      </Link>
                      <Link href="/topic/technology">
                      <li>تكنولوجيا</li>
                      </Link>
                      <Link href="/topic/business">
                      <li>ريادة الأعمال</li>
                      </Link>
                      <Link href="/topic/language-and-sciences">
                      <li>علوم ولغات</li>
                      </Link>
                      <Link href="/topic/talents">
                      <li>فن وهوايات</li>
                      </Link>
                      <Link href="/topic/home">
                      <li>منزل</li>
                      </Link>
                      </ul>
                    </div>
                    <div className={styles["navbar__discover-popover__box"]}>
                      <div className={styles["navbar__discover-popover__caption"]}>
                      الأقسام
                      </div>
                      <ul className={styles["navbar__discover-popover__list"]}>
                      <Link href="/courses?filter_type=all">
                        
                        <li>دورات تدريبية</li>
                      </Link>
                      <Link href="/courses?filter_type=live">

                        <li>دورات مباشرة</li>
                      </Link>
                          {/* <li>الاستشارات</li>
                          <li>كتيبات وملخصات</li>
                          <li>مقالات</li> */}
                      </ul>
                    </div>
                    {/* <div className={styles["navbar__discover-popover__box"]}>
                      <div className={styles["navbar__discover-popover__caption"]}>
                      أخري
                      </div>
                      <ul className={styles["navbar__discover-popover__list"]}>
                          <li>عروض</li>
                          <li>المدربين</li>
                          <li>عن تدرب</li>
                          <li>تواصل معنا</li>
                      </ul>
                    </div> */}
                  </div>
              </div>

            <div id="search-bar" className={styles["navbar__search-bar-container"]}>
              <div
                className={styles["navbar__search-bar-container__icon-wrapper"]}
              >
                <SearchIcon color="#777"/>
              </div>
              <Form.Control 
              id="search-field"
              onChange={()=>{handleSearchBarEntries(event)}}
              onKeyUp={()=>{sendSearchQuery(event)}}
                type="text"
                placeholder="اكتشف هواياتك..."
                className={styles["navbar__search-bar-container__search-bar"]}
              />
            </div>

            <Nav.Link className={styles["navbar__links"]}>تدرب للشركات</Nav.Link>

            <Nav.Link className={styles["navbar__links"]}>انضم كمدرب</Nav.Link>
            { userStatus.isUserAuthenticated && <Nav.Link className={styles["navbar__links"]}>لوحتي التعليمية</Nav.Link>}
        </>
          }
          
            {
             userStatus.isUserAuthenticated && isCoursePurchased &&
             <>
             <div className={styles["navbar__purchased-course-name"]}>
             دورة التسويق الفعال للمشروعات الصغيرة
             </div>
             <div className={styles["navbar__purchased-course-nav"]}>
               <div className={`${styles["navbar__purchased-course-nav__curriculum"]}
               ${ myCourseNavigator == "curriculum" && styles["navbar__purchased-course-nav--active"]} `} 
               onClick={ ()=>{ dispatch(setMyCourseNavigator("curriculum")); } }>

                <LessonPlayIcon color={ myCourseNavigator == "curriculum" ? "#af151f" : "#bbbabf" } opacity="1"/>
                <span>المنهج</span>

               </div>
               <div className={`${styles["navbar__purchased-course-nav__certificate"]} 
               ${ myCourseNavigator == "certificate" && styles["navbar__purchased-course-nav--active"]} `} 
               onClick={ ()=>{ dispatch(setMyCourseNavigator("certificate")); }  }>

                <CertificateIcon color={ myCourseNavigator == "certificate" ? "#af151f" : "#bbbabf" }/>
                <span>شهادة الدورة</span>

               </div>

             </div>
             <div className={styles["navbar__three-dots-icon"]}>
              <ThreeDotsIcon color="#222"/>
            </div>
             </>
            }
            { userStatus.isUserAuthenticated && <div className={styles["navbar__dark-mode-icon"]}>
              <DarkModeIcon/>
            </div>}

            { userStatus.isUserAuthenticated && !isCoursePurchased && <div className={styles["navbar__fav-icon"]}>
              <FavouriteIcon color="#222"/>
            </div>}
            

           

            { userStatus.isUserAuthenticated == false &&  <Link href="/signup">
             <Button className={styles["navbar__register-btn"]}>حساب جديد</Button>
          </Link>  
          }
         { userStatus.isUserAuthenticated == false && <Link href="/signin">
            <Button className={styles["navbar__sign-in-btn"]}>تسجيل دخول</Button>
          </Link> }

            <div className={styles["navbar_responsive-search-icon"]}>
                <div onClick={()=>{
                  searchBoxToggler("open");
                  const searchBox:any =  document.getElementById("responsive-search-field");
                  searchBox.focus();
                  }}>
                  <SearchIcon color="#222"/>
                </div>
                <div id="search-box-overlay" className={styles["search-box-overlay"]}
                onClick={(e:any)=>{
                  
                  console.log(e.target.id);
                  e.stopPropagation();
                  e.target.id == "search-box-overlay" ?
                  searchBoxToggler("close")
                  :
                  null 
                  ;
                }}
                >

                <div className={styles["responsive-navbar__search-bar-container"]}>
                  <Form.Control
                  id="responsive-search-field"
                  onChange={()=> handleSearchBarEntries(event)}
                  onKeyUp={()=>{sendSearchQuery(event)}}
                    type="text"
                    placeholder="ماذا تريد أن تتعلم اليوم؟"
                    className={
                      styles["responsive-navbar__search-bar-container__search-bar"]
                    }
                  />
                  <Button id="responsive-search-field-btn" onClick={()=>{sendSearchQuery(event)}} 
                  className={styles["responsive-navbar__search-bar__btn"]}>
                     <SearchIcon color="#fff"/>
                  </Button>
                </div>

              </div>
            </div>

            { (!isCoursePurchased || isMobileView) && <OverlayTrigger
            trigger='click'
            rootClose
              placement="bottom-start"
              overlay={
                <div className={styles["navbar__cart-popover"]} 
                style={{display: (JSON.stringify(localStateCartItems) == "[]" || localStateCartItems == null) ?  "none" : "" }}
                id="cart-popover">
                  <div className={styles["navbar__cart-popover__cart-items-wrapper"]}>

                    {
                      localStateCartItems?.map((item:any,i:number)=>{
                        return(

                          <div key={i} className={styles["navbar__cart-popover__outer-box"]}>
                            <img 
                              src={item.image}
                              alt="course image"
                              className={styles["navbar__cart-popover__img"]}
                            />
                            <div
                              className={styles["navbar__cart-popover__course-details"]}
                            >
                              <div
                                className={
                                  styles["navbar__cart-popover__course-details__title"]
                                }
                              >
                              {item.title}
                              </div>
                              <div
                                className={
                                  styles["navbar__cart-popover__course-details__author"]
                                }
                              >
                                {" "}
                                {item.trainer?.name_ar}{" "}
                              </div>
                              <div
                                className={
                                  styles[
                                    "navbar__cart-popover__course-details__price-container"
                                  ]
                                }
                              >
                                <span
                                  className={
                                    styles["navbar__cart-popover__course-details__price"]
                                  }
                                >
                                  {item.price}
                                </span>
                                <span
                                  className={
                                    styles[
                                      "navbar__cart-popover__course-details__currency"
                                    ]
                                  }
                                >
                                  {item?.currency_code}
                                </span>
                              </div>
                              {item.price > item.discounted_price && 
                              <div
                                className={
                                  styles[
                                    "navbar__cart-popover__course-details__old-price-container"
                                  ]
                                }
                              >
                                <span
                                  className={
                                    styles[
                                      "navbar__cart-popover__course-details__old-price"
                                    ]
                                  }
                                >
                                {item.discounted_price}
                                </span>
                                <span
                                  className={
                                    styles[
                                      "navbar__cart-popover__course-details__old-price-currency"
                                    ]
                                  }
                                >
                                  {item?.currency_code}
                                </span>
                              </div>
                              }
                            </div>
                          </div>

                        )
                      })
                    }
                  </div>

                  {/* <div className={styles["navbar__cart-popover__show-more-link"]}>
                    {localStateCartItems?.length > 2 && "اعرض المزيد"}
                    
                    </div> */}
                  <div className={styles["navbar__cart-popover__checkout-box"]}>
                    <div
                      className={
                        styles[
                          "navbar__cart-popover__checkout-box__total-price-box"
                        ]
                      }
                    >
                      <div
                        className={
                          styles["navbar__cart-popover__checkout-box__items"]
                        }
                      >
                        الإجمالي ({localStateCartItems?.length} دورة)
                      </div>
                      <div>
                        <span
                          className={
                            styles[
                              "navbar__cart-popover__checkout-box__total-price"
                            ]
                          }
                        >
                          { 
                            localStateCartItems?.map((item:any)=> item.price).reduce((prev:any, curr:any) => prev + curr, 0)
                          }
                        </span>
                        <span
                          className={
                            styles[
                              "navbar__cart-popover__checkout-box__total-price-currency"
                            ]
                          }
                        >

                         { localStateCartItems && localStateCartItems[0]?.currency_code}
                        </span>
                      </div>
                      {
                        localStateCartItems?.map((item:any)=> item.price).reduce((prev:any, curr:any) => prev + curr, 0)
                        >
                        localStateCartItems?.map((item:any)=> item.discounted_price).reduce((prev:any, curr:any) => prev + curr, 0)
                        &&
                          <div
                            className={
                              styles[
                                "navbar__cart-popover__checkout-box__old-total-price-box"
                              ]
                            }
                          >
                            <span
                              className={
                                styles[
                                  "navbar__cart-popover__checkout-box__old-total-price"
                                ]
                              }
                            >
                              { 
                                localStateCartItems?.map((item:any)=> item.discounted_price).reduce((prev:any, curr:any) => prev + curr, 0)
                              }
                            </span>
                            <span
                              className={
                                styles[
                                  "navbar__cart-popover__checkout-box__old-total-price-currency"
                                ]
                              }
                            >
                              {localStateCartItems[0]?.currency_code}
                            </span>
                          </div>

                      }
                    </div>
                    <div
                      className={
                        styles["navbar__cart-popover__checkout-box__cart-btn"]
                      }
                    >
                    <Link href="/checkout">

                      <Button>إذهب للسلة</Button>
                    </Link>
                    </div>
                  </div>
                </div>
              }
            >       
           <div className={styles["navbar__cart-icon-container"]}>
                <CartIcon color="#222"/>
                <Badge className={styles["navbar__cart-icon__badge"]}>{localStateCartItems?.length ||   ""}</Badge>
                {/* cartItems?.data?.length ||  localStateCartItems?.length || */}
              
              </div>    
            </OverlayTrigger>
            }

            {
             userStatus.isUserAuthenticated && 
             <>
                <OverlayTrigger trigger="click" placement="bottom-start" rootClose arrow-props={false} overlay={
                <div className={styles["navbar__account-icon__dropdown"]}>
                    <Button onClick={()=>handleLogout()}
                     className={styles["navbar__account-icon__dropdown__logout-btn"]}>تسجيل خروج</Button>
                </div>
              }>
                <div className={styles["navbar__account-icon"]}>
              
                  <AccountIcon/>
                </div>
              </OverlayTrigger>
             </>
            }
        </Nav>
       
      </NavBar>
    </>
  );
}

export default withAuth(Navbar);

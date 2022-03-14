/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React , { useState , useEffect } from "react";
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
import { popoverHandler ,closeBtnHandler} from "./utils";
import {TadarabLogo,NextIcon,BackIcon,DarkModeIcon,DropDownIcon,SearchIcon,
  FavouriteIcon,CartIcon,AccountIcon,ThreeDotsIcon,CertificateIcon,LessonPlayIcon} from "common/Icons/Icons";
import { useDispatch, useSelector } from "react-redux";
import withAuth from "configurations/auth guard/AuthGuard";
import { axiosInstance } from "configurations/axios/axiosConfig";
import { setCartItems } from "configurations/redux/actions/cartItems"; 
import Router, { useRouter }  from "next/router";
import { setIsUserAuthenticated } from "configurations/redux/actions/userAuthentication";
import { setHomePageData } from "configurations/redux/actions/homePageData";
import { handleCart } from "modules/_Shared/utils/handleCart";
import { withRouter } from 'next/router';
import TadarabFBPixel from "modules/_Shared/utils/fbPixel";

function Navbar() {
  const [discoverSidebarShow, setDiscoverSidebarShow] = useState(false);
  const [isCoursePurchased, setIsCoursePurchased] = useState(false);
  const [purchasedCoursesNav, setPurchasedCoursesNav] = useState("curriculum");
  const handleDiscoverSidebarShow = (status:boolean)=>{
    setDiscoverSidebarShow(status);
  }
  const [localStateCartItems, setLocalStateCartItems] = useState<any>(null);
  const userStatus = useSelector((state:any) => state.userAuthentication);
  const cartItems = useSelector((state:any) => state.cartItems);

  const dispatch = useDispatch();


  const handleLogout = () =>{
    localStorage.removeItem("token");
    localStorage.removeItem("cart");
    Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}HomePage`);

    dispatch(setIsUserAuthenticated({...userStatus,isUserAuthenticated:false,token:null}));
    dispatch(setCartItems(null));
    setLocalStateCartItems(null);

    axiosInstance
        .get("home/?country_code=eg",{ headers: {"Authorization" : ``} })
        .then(function (response:any) {
          dispatch(setHomePageData(response.data.data))
        })
        .catch(function (error) {
          console.log(error);
        });
    
  }
  

  // useEffect(() => {
  //   if(userStatus.isUserAuthenticated){
  //     console.log("ay7aga");
      
  //     axiosInstance
  //         .get("users/cart/?country_code=eg")
  //         .then(function (response:any) {
  //           // console.log("cart item get req",response.data.data); 
  //           // if(response.data.data == null){
  //           // const storedCartCourses:any = localStorage.getItem("cart");
            
  //             // console.log("response.data.data",response.data.data);
  //           dispatch(setCartItems(response.data.data));
  //         // }
        
  //         })
  //         .catch(function (error) {
  //           console.log(error);
  //         });
  //   }



  // }, [userStatus]);
  

  useEffect(() => {
    // popoverHandler();
    closeBtnHandler();
   const searchBar:any = document.getElementById("search-bar");

      if(userStatus.isUserAuthenticated){
        if(searchBar){
          if(window.innerWidth > 1960){
            searchBar.style.cssText=`width: calc(100vw - 59rem)`;
          } else{
            searchBar.style.cssText=`width:28rem`;
          }
        }
        window.addEventListener("resize" , ()=>{
        if(searchBar){

          if(window.innerWidth > 1960){
            searchBar.style.cssText=`width: calc(100vw - 59rem)`;
          } else{
            searchBar.style.cssText=`width:28rem`;
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
            searchBar.style.cssText=`width:32.5rem`;
          }
        }

        window.addEventListener("resize" , ()=>{
        if(searchBar){

          if(window.innerWidth > 1960){
            searchBar.style.cssText=`width: calc(100vw - 54.5rem)`;
          } else if(window.innerWidth <= 1960){
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
        .get(`courses/?country_code=eg&course_ids=${localStorageItems?.replace(/[\[\]']+/g,'')}`)
        .then(function (response:any) {
          // console.log("not logged in",response.data.data);
          // dispatch(setCartItems(response?.data?.data));
          setLocalStateCartItems(cartItems?.data);
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
    // console.log("cartItems",cartItems);
    console.log("localStorageItems",localStorageItems);
    // if(userStatus.isUserAuthenticated === true){
        // setLocalStateCartItems(cartItems?.data);
        
        if(localStorageItems !== "[]" && localStorageItems !== "null" && localStorageItems !== "undefined"){
          
        axiosInstance
        .get(`courses/?country_code=eg&course_ids=${localStorageItems?.replace(/[\[\]']+/g,'')}`)
        .then(function (response:any) {
          // console.log("not logged in",response.data.data);
          // dispatch(setCartItems(response.data.data));
          
          setLocalStateCartItems(cartItems?.data);
        })
        .catch(function (error) {
          console.log(error); 
        });
        
      }else{
        setLocalStateCartItems([]);
      }

}, [cartItems])


  

  return (
    <>
      <NavBar id="nav" fixed="top"
       style={{justifyContent : isCoursePurchased ? "right" : "" ,
       paddingRight : isCoursePurchased ? "0.6rem" : ""}} 
       className={styles["navbar"]} expand="sm" >
        <Link href="/HomePage">

        <NavBar.Brand className={styles["navbar__img"]} >
        <TadarabLogo />
        </NavBar.Brand>
        </Link>
        
        <NavBar.Toggle aria-controls="offcanvasNavbar1" />
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
                <li>تنمية بشرية</li>
                <li>تربية الأطفال</li>
                <li>فنون</li>
                <li>حياة</li>
                <li>بيزنس</li>
                <li>تنمية بشرية</li>
                <li>تربية الأطفال</li>
                <li>فنون</li>
                <li>حياة</li>
              </ul>
              <ul className={styles["sidebar-list__discover-sidebar__list"]}>
                <div><div>الأقسام</div></div>
                  <li>دورات تدريبية</li>
                  <li>دورات مباشرة</li>
                  <li>الاستشارات</li>
                  <li>كتيبات وملخصات</li>
                  <li>مقالات</li>
              </ul>
              <ul className={styles["sidebar-list__discover-sidebar__list"]}>
                <div><div>أخري</div></div>
                  <li>عروض</li>
                  <li>المدربين</li>
                  <li>عن تدرب</li>
                  <li>تواصل معنا</li>
              </ul>
            </Offcanvas>
            <li className={styles["sidebar-list__item"]}>تدرب للشركات</li>
            <li className={styles["sidebar-list__item"]}>انضم كمدرب</li>
            { userStatus.isUserAuthenticated && <li className={styles["sidebar-list__item"]}>لوحتي التعليمية</li>}
          </ul>
          <div className={styles["sidebar-list__dark-mode-box"]}>
            <span>تغيير للوضع الداكن</span>
            <div className={styles["sidebar-list__dark-mode-box__icon"]}>

            <DarkModeIcon/>
            </div>

          </div>
          <Link href="/SignUp">
          <Button className={styles["sidebar-list__register-btn"]}>
          {
              userStatus.isUserAuthenticated ? 
              "حسابي"
              :
              "حساب جديد"
            }
          </Button>
          </Link>   
          <Link href="/SignIn">
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
                        <li>تنمية بشرية</li>
                        <li>تربية الأطفال</li>
                        <li>فنون</li>
                        <li>حياة</li>
                        <li>بيزنس</li>
                        <li>تنمية بشرية</li>
                        <li>تربية الأطفال</li>
                        <li>فنون</li>
                        <li>حياة</li>
                      </ul>
                    </div>
                    <div className={styles["navbar__discover-popover__box"]}>
                      <div className={styles["navbar__discover-popover__caption"]}>
                      الأقسام
                      </div>
                      <ul className={styles["navbar__discover-popover__list"]}>
                          <li>دورات تدريبية</li>
                          <li>دورات مباشرة</li>
                          <li>الاستشارات</li>
                          <li>كتيبات وملخصات</li>
                          <li>مقالات</li>
                      </ul>
                    </div>
                    <div className={styles["navbar__discover-popover__box"]}>
                      <div className={styles["navbar__discover-popover__caption"]}>
                      أخري
                      </div>
                      <ul className={styles["navbar__discover-popover__list"]}>
                          <li>عروض</li>
                          <li>المدربين</li>
                          <li>عن تدرب</li>
                          <li>تواصل معنا</li>
                      </ul>
                    </div>
                  </div>
              </div>

            <div id="search-bar" className={styles["navbar__search-bar-container"]}>
              <div
                className={styles["navbar__search-bar-container__icon-wrapper"]}
              >
                <SearchIcon color="#777"/>
              </div>
              <Form.Control
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
               ${ purchasedCoursesNav == "curriculum" && styles["navbar__purchased-course-nav--active"]} `} 
               onClick={()=>setPurchasedCoursesNav("curriculum")}>

                <LessonPlayIcon color={ purchasedCoursesNav == "curriculum" ? "#af151f" : "#bbbabf" } opacity="1"/>
                <span>المنهج</span>

               </div>
               <div className={`${styles["navbar__purchased-course-nav__certificate"]} 
               ${ purchasedCoursesNav == "certificate" && styles["navbar__purchased-course-nav--active"]} `} 
               onClick={()=>setPurchasedCoursesNav("certificate")}>

                <CertificateIcon color={ purchasedCoursesNav == "certificate" ? "#af151f" : "#bbbabf" }/>
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
            

           

            { userStatus.isUserAuthenticated == false &&  <Link href="/SignUp">
             <Button className={styles["navbar__register-btn"]}>حساب جديد</Button>
          </Link>  
          }
         { userStatus.isUserAuthenticated == false && <Link href="/SignIn">
            <Button className={styles["navbar__sign-in-btn"]}>تسجيل دخول</Button>
          </Link> }

            <div className={styles["navbar_responsive-search-icon"]}>
            <SearchIcon color="#222"/>
            </div>

            { !isCoursePurchased && <OverlayTrigger
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
                    <Link href="/Checkout">

                      <Button>إذهب للسلة</Button>
                    </Link>
                    </div>
                  </div>
                </div>
              }
            >       
           <div className={styles["navbar__cart-icon-container"]}>
                <CartIcon color="#222"/>
                <Badge className={styles["navbar__cart-icon__badge"]}>{cartItems?.data?.length ||  localStateCartItems?.length  || ""}</Badge>
                {/* cartItems?.data?.length ||  localStateCartItems?.length || */}
              
              </div>    
            </OverlayTrigger>}

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

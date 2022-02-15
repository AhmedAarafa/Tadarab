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
import {popoverHandler , closeBtnHandler} from "./utils";
import {TadarabLogo,NextIcon,BackIcon,DarkModeIcon,DropDownIcon,SearchIcon,FavouriteIcon,CartIcon,AccountIcon} from "common/Icons/Icons";
import { useDispatch, useSelector } from "react-redux";
import withAuth from "configurations/auth guard/AuthGuard";
import { axiosInstance } from "configurations/axios/axiosConfig";
import { setCartItems } from "configurations/redux/actions/cartItems"; 
import Router, { useRouter }  from "next/router";
import { setIsUserAuthenticated } from "configurations/redux/actions/userAuthentication";
import { setHomePageData } from "configurations/redux/actions/homePageData";

function Navbar() {
  const [discoverSidebarShow, setDiscoverSidebarShow] = useState(false);
  const handleDiscoverSidebarShow = (status:boolean)=>{
    setDiscoverSidebarShow(status);
  }
  const userAuthState = useSelector((state:any) => state.userAuthentication);
  const homePageData = useSelector((state:any) => state.homePageData);

  const dispatch = useDispatch();

  const handleLogout = () =>{
    localStorage.removeItem("token");
    localStorage.removeItem("cart");
    Router.push("https://tadarab.vercel.app/HomePage");

    dispatch(setIsUserAuthenticated({...userAuthState,isUserAuthenticated:false,token:null}));
    dispatch(setCartItems(null));
    axiosInstance
        .get("home/?country_code=eg",{ headers: {"Authorization" : ``} })
        .then(function (response:any) {
          dispatch(setHomePageData(response.data.data))
        })
        .catch(function (error) {
          console.log(error);
        });
    
  }
  
  let isLoggedIn = useSelector((state:any) => state.userAuthentication.isUserAuthenticated);
  const cartItems = useSelector((state:any) => state.cartItems);
 
  useEffect(() => {
    axiosInstance
        .get("users/cart/?country_code=eg")
        .then(function (response:any) {
          // console.log("cart item get req",response.data.data); 
          if(response.data.data == null){
          const storedCartCourses:any = localStorage.getItem("cart");
            dispatch(setCartItems(JSON.parse(storedCartCourses)));
          }else{
          dispatch(setCartItems(response.data.data));
        }
      
        })
        .catch(function (error) {
          console.log(error);
        });
    // const localStorageItems:any = localStorage.getItem("cart");
    // dispatch(setCartItems(JSON.parse(localStorageItems)));


  }, []);
  

  useEffect(() => {
    popoverHandler();
    closeBtnHandler();
   const searchBar:any = document.getElementById("search-bar");

    // window.addEventListener("storage" , ()=>{
      if(isLoggedIn){
        // setIsLoggedIn(true);
        if(window.innerWidth > 1960){
          searchBar.style.cssText=`width: calc(100vw - 59rem)`;
        } else{
          searchBar.style.cssText=`width:28rem`;
        }
        window.addEventListener("resize" , ()=>{
          if(window.innerWidth > 1960){
            searchBar.style.cssText=`width: calc(100vw - 59rem)`;
          } else{
            searchBar.style.cssText=`width:28rem`;
          }
        });
        // window.addEventListener("storage" , ()=>{
        //   if(localStorage.getItem("TOKEN")){
        //     // setIsLoggedIn(true);
        //     if(window.innerWidth > 1960){
        //       searchBar.style.cssText=`width: calc(100vw - 59rem)`;
        //     } else{
        //       searchBar.style.cssText=`width:28rem`;
        //     }
        //   }else{
        //     // setIsLoggedIn(false);
        //     if(window.innerWidth > 1960){
        //       searchBar.style.cssText=`width: calc(100vw - 54.5rem)`;
        //     } else{
        //       searchBar.style.cssText=`width:32.5rem`;
        //     }
        //   }
  
          
        // });
      }
      else{
        // setIsLoggedIn(false);
        if(window.innerWidth > 1960){
          searchBar.style.cssText=`width: calc(100vw - 54.5rem)`;
        } else{
          searchBar.style.cssText=`width:32.5rem`;
        }
        window.addEventListener("resize" , ()=>{
          if(window.innerWidth > 1960){
            searchBar.style.cssText=`width: calc(100vw - 54.5rem)`;
          } else if(window.innerWidth <= 1960){
            searchBar.style.cssText=`width:32.5rem`;
          }
        });
        // window.addEventListener("storage" , ()=>{
        //   if(localStorage.getItem("TOKEN")){
        //     // setIsLoggedIn(true);
        //     if(window.innerWidth > 1960){
        //       searchBar.style.cssText=`width: calc(100vw - 59rem)`;
        //     } else{
        //       searchBar.style.cssText=`width:28rem`;
        //     }
        //   }else{
        //     // setIsLoggedIn(false);
        //     if(window.innerWidth > 1960){
        //       searchBar.style.cssText=`width: calc(100vw - 54.5rem)`;
        //     } else{
        //       searchBar.style.cssText=`width:32.5rem`;
        //     }
        //   }
  
          
        // });
      }
    // })



    // if(isLoggedIn){
    //   // setIsLoggedIn(true);
    //   if(window.innerWidth > 1960){
    //     searchBar.style.cssText=`width: calc(100vw - 59rem)`;
    //   } else{
    //     searchBar.style.cssText=`width:28rem`;
    //   }
    //   window.addEventListener("resize" , ()=>{
    //     if(window.innerWidth > 1960){
    //       searchBar.style.cssText=`width: calc(100vw - 59rem)`;
    //     } else{
    //       searchBar.style.cssText=`width:28rem`;
    //     }
    //   });
    //   // window.addEventListener("storage" , ()=>{
    //   //   if(localStorage.getItem("TOKEN")){
    //   //     // setIsLoggedIn(true);
    //   //     if(window.innerWidth > 1960){
    //   //       searchBar.style.cssText=`width: calc(100vw - 59rem)`;
    //   //     } else{
    //   //       searchBar.style.cssText=`width:28rem`;
    //   //     }
    //   //   }else{
    //   //     // setIsLoggedIn(false);
    //   //     if(window.innerWidth > 1960){
    //   //       searchBar.style.cssText=`width: calc(100vw - 54.5rem)`;
    //   //     } else{
    //   //       searchBar.style.cssText=`width:32.5rem`;
    //   //     }
    //   //   }

        
    //   // });
    // }else{
    //   // setIsLoggedIn(false);
    //   if(window.innerWidth > 1960){
    //     searchBar.style.cssText=`width: calc(100vw - 54.5rem)`;
    //   } else{
    //     searchBar.style.cssText=`width:32.5rem`;
    //   }
    //   window.addEventListener("resize" , ()=>{
    //     if(window.innerWidth > 1960){
    //       searchBar.style.cssText=`width: calc(100vw - 54.5rem)`;
    //     } else{
    //       searchBar.style.cssText=`width:32.5rem`;
    //     }
    //   });
    //   // window.addEventListener("storage" , ()=>{
    //   //   if(localStorage.getItem("TOKEN")){
    //   //     // setIsLoggedIn(true);
    //   //     if(window.innerWidth > 1960){
    //   //       searchBar.style.cssText=`width: calc(100vw - 59rem)`;
    //   //     } else{
    //   //       searchBar.style.cssText=`width:28rem`;
    //   //     }
    //   //   }else{
    //   //     // setIsLoggedIn(false);
    //   //     if(window.innerWidth > 1960){
    //   //       searchBar.style.cssText=`width: calc(100vw - 54.5rem)`;
    //   //     } else{
    //   //       searchBar.style.cssText=`width:32.5rem`;
    //   //     }
    //   //   }

        
    //   // });
    // }


    return () => {
      window.removeEventListener("resize" , ()=>{
        return;
      });
      // window.removeEventListener("storage" , ()=>{
      //   return;
      // });
    };
  },[isLoggedIn]);

  
  

  return (
    <>
      <NavBar id="nav" fixed="top" className={styles["navbar"]} expand="sm" >
        <NavBar.Brand className={styles["navbar__img"]} href="#home">
        <TadarabLogo />
        </NavBar.Brand>
        
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
            { isLoggedIn && <li className={styles["sidebar-list__item"]}>لوحتي التعليمية</li>}
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
              isLoggedIn ? 
              "حسابي"
              :
              "حساب جديد"
            }
          </Button>
          </Link>   
          <Link href="/SignIn">
          <Button onClick={()=>{
            isLoggedIn ? 
            handleLogout() :
            null
          }}
           className={styles["sidebar-list__sign-in-btn"]}>
            {
              isLoggedIn ? 
              "تسجيل خروج"
              :
              "تسجيل دخول"
            }
            </Button>
          </Link>   
        </NavBar.Offcanvas>
        <Nav>
              <Nav.Link className={styles["navbar__links"]} id="discover" >
                استكشف
                <DropDownIcon color="#222"/>
              </Nav.Link>
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
            { isLoggedIn && <Nav.Link className={styles["navbar__links"]}>لوحتي التعليمية</Nav.Link>}

            { isLoggedIn && <div className={styles["navbar__dark-mode-icon"]}>
              <DarkModeIcon/>
            </div>}

            { isLoggedIn && <div className={styles["navbar__fav-icon"]}>
              <FavouriteIcon color="#222"/>
            </div>}

           

            { isLoggedIn == false &&  <Link href="/SignUp">
             <Button className={styles["navbar__register-btn"]}>حساب جديد</Button>
          </Link>  
          }
         { isLoggedIn == false && <Link href="/SignIn">
            <Button className={styles["navbar__sign-in-btn"]}>تسجيل دخول</Button>
          </Link> }

            <div className={styles["navbar_responsive-search-icon"]}>
            <SearchIcon color="#222"/>
            </div>

            <OverlayTrigger
            trigger='click'
            rootClose
              placement="bottom-start"
              overlay={
                <div className={styles["navbar__cart-popover"]} id="cart-popover">

                  {
                    cartItems.data?.slice(0,2).map((item:any,i:number)=>{
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

                  <div className={styles["navbar__cart-popover__show-more-link"]}>
                    {cartItems.data?.length > 2 && "اعرض المزيد"}
                    
                    </div>
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
                        الإجمالي ({cartItems.data?.length || [].length} دورة)
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
                            cartItems.data?.map((item:any)=> item.price).reduce((prev:any, curr:any) => prev + curr, 0)
                          }
                        </span>
                        <span
                          className={
                            styles[
                              "navbar__cart-popover__checkout-box__total-price-currency"
                            ]
                          }
                        >

                         { cartItems.data && cartItems.data[0]?.currency_code}
                        </span>
                      </div>
                      {
                        cartItems.data?.map((item:any)=> item.price).reduce((prev:any, curr:any) => prev + curr, 0)
                        >
                        cartItems.data?.map((item:any)=> item.discounted_price).reduce((prev:any, curr:any) => prev + curr, 0)
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
                                cartItems.data?.map((item:any)=> item.discounted_price).reduce((prev:any, curr:any) => prev + curr, 0)
                              }
                            </span>
                            <span
                              className={
                                styles[
                                  "navbar__cart-popover__checkout-box__old-total-price-currency"
                                ]
                              }
                            >
                              {cartItems.data[0]?.currency_code}
                            </span>
                          </div>

                      }
                    </div>
                    <div
                      className={
                        styles["navbar__cart-popover__checkout-box__cart-btn"]
                      }
                    >
                      <Button>إذهب للسلة</Button>
                    </div>
                  </div>
                </div>
              }
            >       
           <div className={styles["navbar__cart-icon-container"]}>
                <CartIcon color="#222"/>
                <Badge className={styles["navbar__cart-icon__badge"]}>{cartItems.data?.length || [].length}</Badge>
                
              
              </div>    
            </OverlayTrigger>

            {
             isLoggedIn && 
             <>
                <OverlayTrigger trigger="click" placement="bottom-start" rootClose overlay={
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

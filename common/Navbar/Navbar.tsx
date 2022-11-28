/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useRef } from "react";
import styles from "./navbar.module.css";
import Link from 'next/link';
import {
  Navbar as NavBar,
  Nav,
  Form,
  Button,
  Badge,
  OverlayTrigger,
  Offcanvas
} from "react-bootstrap";
import Image from 'next/image';
import { popoverHandler, notificationBarHandler } from "./utils";
import {
  TadarabLogo, NextIcon, BackIcon, DarkModeIcon, DropDownIcon, SearchIcon,
  FavouriteIcon, CartIcon, AccountIcon, LessonPlayIcon, LightModeIcon
} from "common/Icons/Icons";
import { useDispatch, useSelector } from "react-redux";
import withAuth from "configurations/auth guard/AuthGuard";
import { axiosInstance } from "configurations/axios/axiosConfig";
import { setCartItems } from "configurations/redux/actions/cartItems";
import Router, { useRouter } from "next/router";
import { setIsUserAuthenticated } from "configurations/redux/actions/userAuthentication";
import { setHomePageData } from "configurations/redux/actions/homePageData";
import { setMyCourseNavigator } from "configurations/redux/actions/myCourseNavigator";
import { handleCart } from "modules/_Shared/utils/handleCart";
import { withRouter } from 'next/router';
import useResize from "custom hooks/useResize";
import { toggleLoader } from "modules/_Shared/utils/toggleLoader";
//import { useGoogleLogout } from 'react-google-login';
import { setTheme } from "configurations/redux/actions/themeToggler";

function Navbar(props: any) {

  const [discoverSidebarShow, setDiscoverSidebarShow] = useState(false);
  const [isCoursePurchased, setIsCoursePurchased] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [expanded, setExpanded] = useState<any>(false);
  const [dropdownOpened, setDropdownOpened] = useState({ cart: false, account: false });
  const [purchasedCoursesNav, setPurchasedCoursesNav] = useState("curriculum");
  const [categoriesList, setCategoriesList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const handleDiscoverSidebarShow = (status: boolean) => {
    setDiscoverSidebarShow(status);
  }
  const themeState = useSelector((state: any) => state.themeState.theme);
  const [localStateCartItems, setLocalStateCartItems] = useState<any>(null);
  const userStatus = useSelector((state: any) => state.userAuthentication);
  const cartItems = useSelector((state: any) => state.cartItems);
  const myCourseNavigator = useSelector((state: any) => state.myCourseNavigator);
  const courseDetailsData = useSelector((state: any) => state.courseDetailsData);
  const router = useRouter();

  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    localStorage.removeItem("cart");
    localStorage.removeItem("cart_items");
    localStorage.removeItem("is_user_subscribed");
    Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}`);
    setExpanded(false);

    dispatch(setIsUserAuthenticated({ ...userStatus, isUserAuthenticated: false, token: null, id: 0 }));
    dispatch(setCartItems(null));
    setLocalStateCartItems(null);

    axiosInstance
      .get(`home`, { headers: { "Authorization": `` } })
      .then(function (response: any) {
        dispatch(setHomePageData(response.data.data));
        toggleLoader("hide");
      })
      .catch(function (error) {
        toggleLoader("hide");
        console.log(error);
      });

  }

  useEffect(() => {
    notificationBarHandler();
  })

  useEffect(() => {

    window.addEventListener("click", (e: any) => {
      if (e.target.className == "btn-close" ||
        e.target.className == ("fade offcanvas-backdrop show") ||
        e.target.className == ("fade offcanvas-backdrop") ||
        e.target.id == ("show-results")
      ) {
        const closeBtn: any = document.getElementsByClassName(`btn-close`)[0];
        closeBtn ? closeBtn.style.cssText = ` display:none !important` : null;
        const discoverSidebar: any = document.getElementById("offcanvasNavbar2");
        discoverSidebar ?
          discoverSidebar.style.cssText = `
        transform: translateX(100%);
        visibility:hidden;
        transition: all 0.3s ease-in-out;
        `
          :
          null;
        setExpanded(false);
      }

      if (e.target.id == "back-btn" ||
        e.target.id == "back" ||
        e.target.id == "back-btn-text" ||
        e.target.id == "Path_12841"
      ) {
        const discoverSidebar: any = document.getElementById("offcanvasNavbar2");
        discoverSidebar.style.cssText = `
        transform: translateX(100%);
        visibility:hidden;
        transition: all 0.3s ease-in-out;
        `
        // return setExpanded(false);
      }

      if (e.target.id == "discover" ||
        e.target.id == "next" ||
        e.target.id == "Path_12841"
      ) {
        const discoverSidebar: any = document.getElementById("offcanvasNavbar2");
        discoverSidebar ? discoverSidebar.style.cssText = `
        transform: none;
        visibility:visible;
        ` : null;
        // return setExpanded(true);
      }
    });


    const searchBar: any = document.getElementById("search-bar");

    if (userStatus.isUserAuthenticated) {
      if (searchBar) {
        if (window.innerWidth > 1960) {
          // searchBar.style.cssText=`width: calc(100vw - 59rem)`;
          userStatus.isSubscribed == true ?
            searchBar.style.cssText = `width: calc(100vw - 50.75rem)` :
            searchBar.style.cssText = `width: calc(100vw - 54.6rem)`;
        } else {
          // searchBar.style.cssText=`width:28rem`;
          // searchBar.style.cssText=`width:31.75rem`;
          userStatus.isSubscribed == true ?
            searchBar.style.cssText = `width:39rem` :
            searchBar.style.cssText = `width:32rem`;
        }
      }
      window.addEventListener("resize", () => {
        if (searchBar) {

          if (window.innerWidth > 1960) {
            // searchBar.style.cssText=`width: calc(100vw - 59rem)`;
            userStatus.isSubscribed == true ?
              searchBar.style.cssText = `width: calc(100vw - 50.75rem)` :
              searchBar.style.cssText = `width: calc(100vw - 54.6rem)`;
          } else {
            // searchBar.style.cssText=`width:28rem`;
            // searchBar.style.cssText=`width:31.75rem`;
            userStatus.isSubscribed == true ?
              searchBar.style.cssText = `width:39rem` :
              searchBar.style.cssText = `width:32rem`;
          }
        }
      });

    }
    else {
      // setIsLoggedIn(false);
      if (searchBar) {

        if (window.innerWidth > 1960) {
          // searchBar.style.cssText=`width: calc(100vw - 54.5rem)`;
          userStatus.isSubscribed == true ?
            searchBar.style.cssText = `width: calc(100vw - 44rem)` :
            searchBar.style.cssText = `width: calc(100vw - 60rem)`;
        } else {
          // searchBar.style.cssText=`width:34.5rem`;
          userStatus.isSubscribed == true ?
            searchBar.style.cssText = `width:38.5rem` :
            searchBar.style.cssText = `width:28rem`;
          // searchBar.style.cssText=`width:36.8rem`;
        }
      }

      window.addEventListener("resize", () => {
        if (searchBar) {

          if (window.innerWidth > 1960) {
            // searchBar.style.cssText=`width: calc(100vw - 54.5rem)`;
            userStatus.isSubscribed == true ?
              searchBar.style.cssText = `width: calc(100vw - 44rem)` :
              searchBar.style.cssText = `width: calc(100vw - 60rem)`;
          } else if (window.innerWidth <= 1960) {
            // searchBar.style.cssText=`width:34.5rem`;
            userStatus.isSubscribed == true ?
              searchBar.style.cssText = `width:38.5rem` :
              searchBar.style.cssText = `width:28rem`;
            // searchBar.style.cssText=`width:36.8rem`;
          }
        }
      });

    }



    return () => {
      window.removeEventListener("resize", () => {
        return;
      });

      window.removeEventListener("mousemove", () => {
        return;
      });
    };
  }, [userStatus]);


  useEffect(() => {
    let localStorageItems: any = localStorage.getItem("cart");

    if (localStorageItems !== "[]" && localStorageItems !== "null" && localStorageItems !== "undefined" && localStorageItems !== undefined) {

      axiosInstance
        .get(`courses/?course_ids=${localStorageItems?.replace(/[\[\]']+/g, '')}`)
        .then(function (response: any) {
          dispatch(setCartItems(response?.data?.data));
          setLocalStateCartItems(cartItems?.data);
        })
        .catch(function (error) {
          console.log(error);
        });

    } else {

      setLocalStateCartItems(null);
      // dispatch(setCartItems(null));
    }

    axiosInstance
      .get(`categories`)
      .then(function (response: any) {
        setCategoriesList(response?.data?.data?.categories);
      })
      .catch(function (error) {
        console.log(error);
      });


  }, []);

  useEffect(() => {
    if (courseDetailsData?.data && JSON.stringify(courseDetailsData?.data) !== '[]') {
      if ((courseDetailsData?.data?.course_details?.is_in_user_subscription || courseDetailsData?.data?.course_details?.is_purchased)
        && Router.asPath.includes("/course/")) {
        setIsCoursePurchased(true);
      } else {
        setIsCoursePurchased(false);
      }
    }
  }, [courseDetailsData, myCourseNavigator, router.asPath])


  useEffect(() => {
    setLocalStateCartItems(cartItems?.data);

    let localStorageItems: any = localStorage.getItem("cart");

    if (localStorageItems !== "[]" && localStorageItems !== "null" && localStorageItems !== "undefined" &&
      cartItems?.data !== undefined && cartItems?.data !== "undefined") {

      axiosInstance
        .get(`courses/?course_ids=${JSON.stringify(cartItems?.data?.map((c: any) => c.id))?.replace(/[\[\]']+/g, '')}`)
        .then(function (response: any) {
          setLocalStateCartItems(response?.data?.data);
        })
        .catch(function (error) {
          console.log(error);
        });

    } else {
      setLocalStateCartItems([]);
    }

  }, [cartItems]);

  useResize((
    () => {
      if (window.innerWidth < 576) {
        setIsMobileView(true);
      } else {
        setIsMobileView(false);
      }
    }
  ))

  useResize(notificationBarHandler);

  const handleSearchBarEntries = (e: any) => {
    e && e.target && setSearchQuery(e.target.value);
  }

  const sendSearchQuery = (e: any) => {

    if (e.key === 'Enter' ||
      e.keyCode === 13 ||
      e.target.id == "responsive-search-field-btn" ||
      e.target.id == "search-field-icon"
    ) {
      if (searchQuery == "") {

      } else {
        toggleLoader("show");
        Router.push({
          pathname: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}search`,
          query: { q: searchQuery }
        });
        const searchBoxOverlay: any = document.getElementById("search-box-overlay");
        searchBoxOverlay.style.cssText = `display:none;`;

      }
    }
  }

  const searchBoxToggler = (action: any) => {
    const searchBoxOverlay: any = document.getElementById("search-box-overlay");
    switch (action) {
      case "open":
        searchBoxOverlay.style.cssText = `display:block;`
        break;
      case "close":
        searchBoxOverlay.style.cssText = `display:none;`
        break;

      default:
        break;
    }
  }

  const closeDropdown = (dropdown: string) => {
    if (dropdown == "cart") {
      if (dropdownOpened.account == true) {
        setDropdownOpened({ ...dropdownOpened, cart: !dropdownOpened.cart, account: false });
      } else {
        setDropdownOpened({ ...dropdownOpened, cart: !dropdownOpened.cart });
      }
    } else if (dropdown == "account") {
      if (dropdownOpened.cart == true) {
        setDropdownOpened({ ...dropdownOpened, account: !dropdownOpened.account, cart: false });
      } else {
        setDropdownOpened({ ...dropdownOpened, account: !dropdownOpened.account });
      }
    }
  }

  useEffect(() => {
    setDropdownOpened({ cart: false, account: false });
  }, [router.asPath]);

  useEffect(() => {
    const toggleSwitch: any = document.getElementById('themeCheckbox');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme !== null) {
      document.documentElement.setAttribute('data-theme', currentTheme);

      if (currentTheme === 'light') {
        toggleSwitch.checked = true;
      }
    }
    toggleSwitch.addEventListener('change', switchTheme, false);

    return () => {
      toggleSwitch.removeEventListener("change", () => {
        return;
      });
    };
  }, []);

  const switchTheme = (e: any) => {
    if (e.target.checked) {
      dispatch(setTheme("light"));
      localStorage.setItem("theme", "light");
      document.body.setAttribute("data-theme", "light");
    }
    else {
      dispatch(setTheme("dark"));
      localStorage.setItem("theme", "dark");
      document.body.setAttribute("data-theme", "dark");
    }
  }

  useEffect(() => {
    if (expanded == true) {
      const toggleSwitch: any = document.getElementById('themeCheckbox');
      const currentTheme = localStorage.getItem('theme');

      if (currentTheme !== null) {
        document.documentElement.setAttribute('data-theme', currentTheme);

        if (currentTheme === 'light') {
          toggleSwitch.checked = true;
        }
      }
      toggleSwitch.addEventListener('change', switchTheme, false);

      return () => {
        toggleSwitch.removeEventListener("change", () => {
          return;
        });
      };
    }
  }, [expanded]);


  return (
    <>
      <NavBar data-theme={themeState} id="nav" fixed="top"
        style={{
          justifyContent: (isCoursePurchased && !isMobileView) ? "right" : "",
          paddingRight: isCoursePurchased ? "0.6rem" : ""
        }}
        className={styles["navbar"]} expanded={expanded} expand="sm">
        <Link href="/">
          <a className="d-flex me-0">
            <NavBar.Brand className={styles["navbar__img"]}>
              <TadarabLogo />
            </NavBar.Brand>
          </a>
        </Link>

        <NavBar.Toggle onClick={() => { setExpanded(!expanded) }} aria-controls="offcanvasNavbar1" />
        <NavBar.Offcanvas data-theme={themeState} onHide={() => { handleDiscoverSidebarShow(false) }}
          id="offcanvasNavbar1"
          aria-labelledby="offcanvasNavbarLabel1"
          placement="end"
        >
          <Offcanvas.Header closeButton >
            <Offcanvas.Title id="offcanvasNavbarLabel1">القائمة الرئيسية</Offcanvas.Title>
          </Offcanvas.Header>
          <ul className={styles["sidebar-list"]}>
            <li id="discover" className={styles["sidebar-list__item"]} onClick={() => { handleDiscoverSidebarShow(true) }}>
              استكشف
              <NextIcon color={themeState == 'light' ? "#222" : "#f5f5f5"} />
            </li>

            <Offcanvas data-theme={themeState} id="offcanvasNavbar2" aria-labelledby="offcanvasNavbarLabel2" backdrop={false} placement="end" show={discoverSidebarShow} onHide={() => { handleDiscoverSidebarShow(false) }}>
              <Offcanvas.Header className={styles["sidebar-list__discover-sidebar"]}>
                <Offcanvas.Title className={styles["sidebar-list__discover-sidebar__title"]}>
                  استكشف
                  <div id="back-btn" className={styles["sidebar-list__discover-sidebar__title__back-btn"]}>
                    <BackIcon color={themeState == 'light' ? "#222" : "#f5f5f5"} />
                    <span id="back-btn-text"> الرجوع </span>
                  </div>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <ul className={styles["sidebar-list__discover-sidebar__list"]}>
                <div><div>التخصصات</div></div>
                {
                  categoriesList.map((category: any, i: number) => {
                    return (
                      <Link key={i} href={`/topic/${category.slug}`} passHref>
                        <a>
                          <li onClick={() => { setExpanded(false); handleDiscoverSidebarShow(false); }}>{category.title}</li>
                        </a>
                      </Link>
                    )
                  })
                }
              </ul>
              <ul className={styles["sidebar-list__discover-sidebar__list"]}>
                <div><div>الأقسام</div></div>
                <Link href="/courses" passHref>
                  <a>
                    <li onClick={() => { setExpanded(false) }}>دورات تدريبية</li>
                  </a>
                </Link>
                <Link href="/courses?type=live" passHref>
                  <a>
                    <li onClick={() => { setExpanded(false) }}>دورات مباشرة</li>
                  </a>
                </Link>
                <Link href="/courses?type=free" passHref>
                  <a>
                    <li onClick={() => { setExpanded(false) }}>دورات مجانية</li>
                  </a>
                </Link>
                {/* <Link href="/tadarab-season">
                  <li onClick={() => { setExpanded(false) }}>موسم تدرب </li>
                </Link> */}
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
            {!userStatus.isSubscribed == true &&
              <Link href="/subscription">
                <li onClick={() => { setExpanded(false) }} className={styles["sidebar-list__item"]}>تدرب بلا حدود</li>
              </Link>
            }
            <Link href="/join-as-trainer">
              <li onClick={() => { setExpanded(false) }} className={styles["sidebar-list__item"]}>انضم كمدرب</li>
            </Link>
            {userStatus.isUserAuthenticated &&
              <Link href="/my-account">
                <li onClick={() => { setExpanded(false) }} className={styles["sidebar-list__item"]}>لوحتي التعليمية</li>
              </Link>
            }
            {/* { userStatus.isSubscribed == true &&  <Link href="/unsubscribe">
              <li onClick={() => { setExpanded(false) }} className={styles["sidebar-list__item"]}>إلغاء الإشتراك الشهرى</li>
            </Link>} */}

            {Router.router?.asPath.includes("/course/") &&
              <>
                <li id="curriculum" className={styles["sidebar-list__item"]}
                  onClick={() => {
                    dispatch(setMyCourseNavigator("curriculum"));
                    setExpanded(false);
                  }
                  }
                >المنهج</li>
                {/* <li id="certificate" className={styles["sidebar-list__item"]}
                  onClick={() => {
                    dispatch(setMyCourseNavigator("certificate"));
                    setExpanded(false);
                  }}
                >شهادة الدورة</li> */}
              </>
            }
          </ul>
          <div className={styles["sidebar-list__dark-mode-box"]}>
            <span>
              تغيير للوضع
              {
                themeState == "light" ?
                  "  الداكن "
                  :
                  " النهاري "
              }

            </span>
            {isMobileView == true && <>
              <label className={styles["theme-switch"]}>
                <input type="checkbox" id="themeCheckbox" />
                <div className={`${styles["slider"]} ${styles["round"]}`}></div>
              </label>
            </>}

          </div>
          <Link href={userStatus.isUserAuthenticated ? "/my-account" : "/sign-up"}>
            <Button onClick={() => { setExpanded(false); }} className={styles["sidebar-list__register-btn"]}>
              {
                userStatus.isUserAuthenticated ?
                  "حسابي"
                  :
                  "حساب جديد"
              }
            </Button>
          </Link>
          <Link href={userStatus.isUserAuthenticated ? "/" : "/sign-in"}>
            <Button onClick={() => {
              setExpanded(false);

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
          {!isCoursePurchased &&
            <>
              <Nav.Link onMouseOver={() => popoverHandler("over")}
                onMouseOut={() => popoverHandler("out")}
                className={styles["navbar__links"]} id="discover" >
                استكشف
                <DropDownIcon color={themeState == 'light' ? "#222" : "#f5f5f5"} />
              </Nav.Link>
              <div id="discover-popover__wrapper" onMouseOver={() => popoverHandler("over")}
                onMouseOut={() => popoverHandler("out")}
                className={styles["navbar__discover-popover__wrapper"]}>
                <div className={styles["navbar__discover-popover"]} id="discover-popover" >
                  <div className={styles["navbar__discover-popover__box"]}>
                    <div className={styles["navbar__discover-popover__caption"]}>
                      التخصصات
                    </div>
                    <ul className={styles["navbar__discover-popover__list"]}>
                      {
                        categoriesList.map((category: any, i: number) => {
                          return (
                            <Link key={i} href={`/topic/${category.slug}`} passHref>
                              <a>
                                <li>{category.title}</li>
                              </a>
                            </Link>
                          )
                        })
                      }
                    </ul>
                  </div>
                  <div className={styles["navbar__discover-popover__box"]}>
                    <div className={styles["navbar__discover-popover__caption"]}>
                      الأقسام
                    </div>
                    <ul className={styles["navbar__discover-popover__list"]}>
                      <Link href="/courses" passHref>
                        <a>
                          <li>دورات تدريبية</li>
                        </a>
                      </Link>
                      <Link href="/courses?type=live" passHref>
                        <a>
                          <li>دورات مباشرة</li>
                        </a>
                      </Link>
                      <Link href="/courses?type=free" passHref>
                        <a>
                          <li>دورات مجانية</li>
                        </a>
                      </Link>
                      {/* <Link href="/tadarab-season">

                        <li>موسم تدرب </li>
                      </Link> */}
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
                <div id="search-field-icon"
                  className={styles["navbar__search-bar-container__icon-wrapper"]}
                  onClick={() => {
                    sendSearchQuery(event);
                  }}
                >
                  <SearchIcon color="#777" />
                </div>
                <Form.Control
                  id="search-field"
                  onChange={() => { handleSearchBarEntries(event) }}
                  onKeyUp={() => { sendSearchQuery(event) }}
                  type="text"
                  placeholder="اكتشف هواياتك..."
                  className={styles["navbar__search-bar-container__search-bar"]}
                />
              </div>
              {!userStatus.isSubscribed == true && <Nav.Link onClick={() => { Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}subscription`) }} className={styles["navbar__links"]}>تدرب بلا حدود</Nav.Link>}

              {/* <Nav.Link style={{ color: "brown" }} onClick={() => {
                dispatch(setTheme(themeState == "light" ? "dark" : "light"));
                localStorage.setItem("theme", themeState == "light" ? "dark" : "light");
                document.body.setAttribute("data-theme", themeState == "light" ? "dark" : "light");
              }}> DM </Nav.Link> */}

              <Nav.Link onClick={() => { Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}join-as-trainer`) }} className={styles["navbar__links"]}>انضم كمدرب</Nav.Link>
              {userStatus.isUserAuthenticated &&
                <Nav.Link onClick={() => { Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}my-account`) }} className={styles["navbar__links"]}>لوحتي التعليمية</Nav.Link>
              }
            </>
          }

          {
            userStatus.isUserAuthenticated && isCoursePurchased &&
            <>
              <div className={styles["navbar__purchased-course-name"]}>
                {courseDetailsData?.data?.course_details?.title}
              </div>
              <div className={styles["navbar__purchased-course-nav"]}>
                <div className={`${styles["navbar__purchased-course-nav__curriculum"]}
               ${myCourseNavigator == "curriculum" && styles["navbar__purchased-course-nav--active"]} `}
                  onClick={() => { dispatch(setMyCourseNavigator("curriculum")); }}>

                  <LessonPlayIcon color={myCourseNavigator == "curriculum" ? "#af151f" : "#bbbabf"} opacity="1" />
                  <span>المنهج</span>

                </div>
                {/* <div className={`${styles["navbar__purchased-course-nav__certificate"]} 
               ${myCourseNavigator == "certificate" && styles["navbar__purchased-course-nav--active"]} `}
                  onClick={() => {
                    dispatch(setMyCourseNavigator("certificate"));
                  }}>

                  <CertificateIcon color={myCourseNavigator == "certificate" ? "#af151f" : "#bbbabf"} />
                  <span>شهادة الدورة</span>

                </div> */}

              </div>
              {/* <div className={styles["navbar__three-dots-icon"]}>
                <ThreeDotsIcon color="#222" />
              </div> */}
            </>
          }

          {isMobileView == false && <>
            <label className={styles["theme-switch"]}>
              <input type="checkbox" id="themeCheckbox" />
              <div className={`${styles["slider"]} ${styles["round"]}`}></div>
            </label>
          </>}

          {userStatus.isUserAuthenticated && !isCoursePurchased && <div className={styles["navbar__fav-icon"]}>
            <FavouriteIcon color="#222" />
          </div>}




          {userStatus.isUserAuthenticated == false && <Link href="/sign-up">
            <Button className={styles["navbar__register-btn"]}>حساب جديد</Button>
          </Link>
          }
          {userStatus.isUserAuthenticated == false && <Link href="/sign-in">
            <Button className={styles["navbar__sign-in-btn"]}>تسجيل دخول</Button>
          </Link>}

          <div className={styles["navbar_responsive-search-icon"]}>
            <div onClick={() => {
              searchBoxToggler("open");
              const searchBox: any = document.getElementById("responsive-search-field");
              searchBox.focus();
            }}>
              <SearchIcon color={themeState == 'light' ? "#222" : "#f5f5f5"} />
            </div>
            <div id="search-box-overlay" className={styles["search-box-overlay"]}
              onClick={(e: any) => {

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
                  onChange={() => handleSearchBarEntries(event)}
                  onKeyUp={() => { sendSearchQuery(event) }}
                  type="text"
                  placeholder="ماذا تريد أن تتعلم اليوم؟"
                  className={
                    styles["responsive-navbar__search-bar-container__search-bar"]
                  }
                />
                <Button id="responsive-search-field-btn" onClick={() => { sendSearchQuery(event) }}
                  className={styles["responsive-navbar__search-bar__btn"]}>
                  <SearchIcon color="#fff" />
                </Button>
              </div>

            </div>
          </div>

          {(!isCoursePurchased || isMobileView) && <OverlayTrigger show={dropdownOpened.cart}
            trigger='click'
            rootClose
            placement="bottom-start"
            overlay={
              <div className={styles["navbar__cart-popover"]}
                style={{ display: !cartItems?.data?.length ? "none" : "" }}
                id="cart-popover" >
                <div className={styles["navbar__cart-popover__cart-items-wrapper"]}>
                  {

                    localStateCartItems?.map((item: any, i: number) => {
                      return (

                        <div key={i} className={styles["navbar__cart-popover__outer-box"]}>
                          {/* {console.log(cartItems)} */}
                          <img loading="lazy"
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
                              {item.discounted_price == 0 ?
                                "مجانًا"
                                :
                                <>
                                  <span
                                    className={
                                      styles["navbar__cart-popover__course-details__price"]
                                    }
                                  >
                                    {item.discounted_price}
                                  </span>
                                  <span

                                    className={
                                      styles[
                                      "navbar__cart-popover__course-details__currency"
                                      ]
                                    }
                                  >
                                    {item?.currency_symbol}
                                  </span>
                                </>
                              }
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
                                  {item.price}
                                </span>
                                <span
                                  className={
                                    styles[
                                    "navbar__cart-popover__course-details__old-price-currency"
                                    ]
                                  }
                                >
                                  {item?.currency_symbol}
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
                          localStateCartItems?.map((item: any) => item.discounted_price).reduce((prev: any, curr: any) => prev + curr, 0).toFixed(2)
                        }
                      </span>
                      <span
                        className={
                          styles[
                          "navbar__cart-popover__checkout-box__total-price-currency"
                          ]
                        }
                      >

                        {cartItems?.data && cartItems?.data[0]?.currency_symbol}
                      </span>
                    </div>
                    {
                      cartItems?.data?.map((item: any) => item.price).reduce((prev: any, curr: any) => prev + curr, 0)
                      >
                      cartItems?.data?.map((item: any) => item.discounted_price).reduce((prev: any, curr: any) => prev + curr, 0)
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
                            cartItems?.data?.map((item: any) => item.price).reduce((prev: any, curr: any) => prev + curr, 0).toFixed(2)
                          }
                        </span>
                        <span
                          className={
                            styles[
                            "navbar__cart-popover__checkout-box__old-total-price-currency"
                            ]
                          }
                        >
                          {cartItems?.data[0]?.currency_symbol}
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

                      <Button onClick={() => { closeDropdown("cart"); }}>إذهب للسلة</Button>
                    </Link>
                  </div>
                </div>
              </div>
            }
          >
            <div className={styles["navbar__cart-icon-container"]} id="carticon"
              onClick={() => { isMobileView && Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}checkout`); closeDropdown("cart"); }}>
              <CartIcon color={themeState == 'light' ? "#222" : "#f5f5f5"} />
              <Badge className={styles["navbar__cart-icon__badge"]}>{cartItems?.data?.length || ""}</Badge>
              {/* cartItems?.data?.length ||  localStateCartItems?.length || */}

            </div>
          </OverlayTrigger>
          }

          {
            userStatus.isUserAuthenticated &&
            <>
              <OverlayTrigger show={dropdownOpened.account} trigger="click" placement="bottom-start" rootClose overlay={
                <div id="navbar__account-icon__dropdown" className={styles["navbar__account-icon__dropdown"]}>
                  {/* { userStatus.isSubscribed == true &&
                  <Link href="/unsubscribe">
                    <div onClick={()=>{closeDropdown("account")}}>إلغاء الإشتراك الشهرى</div>
                  </Link>
                    } */}
                  <Button onClick={() => { handleLogout(); closeDropdown("account"); }}
                    className={styles["navbar__account-icon__dropdown__logout-btn"]}>تسجيل خروج</Button>
                </div>
              }>
                <div onClick={() => { closeDropdown("account") }} className={styles["navbar__account-icon"]}>

                  <AccountIcon color={themeState == 'light' ? "#222" : "#f5f5f5"} />
                </div>
              </OverlayTrigger>
            </>
          }
        </Nav>

      </NavBar >
    </>
  );
}

export default withAuth(Navbar);

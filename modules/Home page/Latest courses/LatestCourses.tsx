/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./latest-courses.module.css";
import {
  Row,
  Col,
  Button,
  Card,
  Carousel,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";

export default function LatestCourses() {
  SwiperCore.use([Navigation]);

  const [placement, setPlacement] = React.useState<any>();
  React.useEffect(() => {
    // to capture all the carousel cards
    const trigger: any = document.querySelectorAll(
      '[id^="latest-courses-card"]'
    );

    // loop over them to control the hover effect per each card
    trigger.forEach((element: any) => {
      element.addEventListener("mouseenter", function () {
        // to get right and left empty spaces to decide which direction the popover will appear
        const cardRightBoundary =
          window.innerWidth - element.getClientRects()[0].left;
        const cardLeftBoundary =
          element.getClientRects()[0].right - element.offsetWidth;
        const relatedPopover: HTMLElement | null = document.getElementById(
          `popover-${element.id}`
        );
        // console.log('cardRightBoundary' , cardRightBoundary);
        // console.log('cardLeftBoundary' , cardLeftBoundary);
        console.log(
          "element.getClientRects()[0].left",
          element.getClientRects()[0].left
        );
        console.log(
          "element.getClientRects()[0].right",
          element.getClientRects()[0].right
        );

        if (cardRightBoundary > cardLeftBoundary) {
          // element.style.right="22rem"
          // console.log(document.getElementById(`popover-${element.id}`));
          // const relatedPopover:HTMLElement | null = document.getElementById(`popover-${element.id}`);
          // relatedPopover ?  relatedPopover.style.inset=`0px auto auto ${(element.getClientRects()[0].right + 9)}px` : null ;
          setPlacement("right");
          // relatedPopover ?  relatedPopover.style.left=`${(element.getClientRects()[0].right + 9)}px` : null ;
        } else if (cardRightBoundary < cardLeftBoundary) {
          // element.style.left="22rem"
          // console.log(document.getElementById(`popover-${element.id}`));
          // const relatedPopover:HTMLElement | null = document.getElementById(`popover-${element.id}`);
          // relatedPopover ?  relatedPopover.style.inset=`0px  ${(window.innerWidth - element.getClientRects()[0].left - 9)}px auto auto` : null ;
          setPlacement("left");
          // relatedPopover ?  relatedPopover.style.right=`${(window.innerWidth - element.getClientRects()[0].left - 9)}px` : null ;
        }
      });
    });

    console.log(placement);
  }, []);

  return (
    <>
      <Row>
        <Col xs={12} className={styles["latest-courses__title"]}>
          <span>أحدث </span>
          <span>الدورات</span>
        </Col>
        <Col
          xs={12}
          className="d-flex align-items-center justify-content-between"
        >
          <ul className={styles["latest-courses__departments-list"]}>
            <li
              className={
                styles["latest-courses__departments-list__item--active"]
              }
            >
              كل الأقسام
            </li>
            <li className={styles["latest-courses__departments-list__item"]}>
              الأكثر مبيعاً
            </li>
            <li className={styles["latest-courses__departments-list__item"]}>
              تنمية بشرية
            </li>
            <li className={styles["latest-courses__departments-list__item"]}>
              علوم
            </li>
            <li className={styles["latest-courses__departments-list__item"]}>
              حياة
            </li>
            <li className={styles["latest-courses__departments-list__item"]}>
              الصحة
            </li>
            <li className={styles["latest-courses__departments-list__item"]}>
              تربية الأطفال
            </li>
            <li className={styles["latest-courses__departments-list__item"]}>
              الفنون
            </li>
            <li className={styles["latest-courses__departments-list__item"]}>
              بيزنس
            </li>
          </ul>

          <Button className={styles["latest-courses__see-more-btn"]}>
            اعرض المزيد
            <svg
              id="more"
              xmlns="http://www.w3.org/2000/svg"
              width="0.5rem"
              height="0.875rem"
              viewBox="0 0 8.39 14"
            >
              <path
                id="Path_12841"
                data-name="Path 12841"
                d="M11.567,6.006a1.346,1.346,0,0,1,.229-.183L17.222.4A1.356,1.356,0,0,1,19.14,2.315L14.467,6.988l4.7,4.7A1.356,1.356,0,1,1,17.247,13.6L11.8,8.153a1.407,1.407,0,0,1-.229-2.147Z"
                transform="translate(-11.172 -0.001)"
                fill="#af151f"
              />
            </svg>
           
          </Button>
        </Col>

        <Col xs={12} className={styles["latest-courses__cards-carousel"]}>
          <Swiper
            dir="rtl"
            slidesPerView={4}
            spaceBetween={0}
            navigation={true}
            pagination={{ clickable: true }}
            breakpoints={{
              "751": {
                slidesPerView: 4,
              },
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <OverlayTrigger
                placement={placement}
                overlay={
                  <Popover
                    id="popover-latest-courses-card1"
                    className={styles["latest-courses__popover-container"]}
                  >
                    <div
                      className={
                        styles["latest-courses__popover-container__title"]
                      }
                    >
                      أسرار تربية الأطفال
                    </div>
                    <div
                      className={
                        styles["latest-courses__popover-container__learners"]
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.625rem"
                        height="1.125rem"
                        viewBox="0 0 25.715 18"
                      >
                        <path
                          id="students"
                          d="M3.857,39.714a2.571,2.571,0,1,0-2.571-2.571A2.574,2.574,0,0,0,3.857,39.714Zm18,0a2.571,2.571,0,1,0-2.571-2.571A2.574,2.574,0,0,0,21.857,39.714ZM23.143,41H20.571a2.564,2.564,0,0,0-1.812.747,5.877,5.877,0,0,1,3.017,4.4h2.652a1.284,1.284,0,0,0,1.286-1.286V43.571A2.574,2.574,0,0,0,23.143,41ZM12.857,41a4.5,4.5,0,1,0-4.5-4.5A4.5,4.5,0,0,0,12.857,41Zm3.086,1.286h-.333a6.213,6.213,0,0,1-5.5,0H9.771a4.63,4.63,0,0,0-4.629,4.629v1.157A1.929,1.929,0,0,0,7.071,50H18.643a1.929,1.929,0,0,0,1.929-1.929V46.914A4.63,4.63,0,0,0,15.943,42.286Zm-8.988-.538A2.564,2.564,0,0,0,5.143,41H2.571A2.574,2.574,0,0,0,0,43.571v1.286a1.284,1.284,0,0,0,1.286,1.286H3.933a5.892,5.892,0,0,1,3.021-4.4Z"
                          transform="translate(0 -32)"
                          fill="#af151f"
                        />
                      </svg>

                      <span>12930</span>
                      <span>متعلم</span>
                    </div>
                    <div
                      className={
                        styles["latest-courses__popover-container__brief"]
                      }
                    >
                      تقدم لك منصة تدرب الإلكترونية دورة الاستثمار بالأسهم خطوة
                      بخطوة
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn-title"
                        ]
                      }
                    >
                      ماذا ستتعلم في الدورة؟
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn"
                        ]
                      }
                    >
                      <div>

                      <svg className={styles["latest-courses__popover-container__what-you-will-learn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="0.875rem" viewBox="0 0 18.029 14">
  <path id="check_" data-name="check " d="M6.9,14.136a.92.92,0,0,1-1.3,0L.4,8.938a1.38,1.38,0,0,1,0-1.953l.651-.651a1.38,1.38,0,0,1,1.953,0L6.253,9.58,15.022.811a1.38,1.38,0,0,1,1.953,0l.651.651a1.38,1.38,0,0,1,0,1.953Zm0,0" transform="translate(0 -0.406)" fill="#198754"/>
</svg>
                      </div>


                      <span>تعزيز فهم المفاهيم الأساسية للاستثمار</span>
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn"
                        ]
                      }
                    >
                      <div>

                      <svg className={styles["latest-courses__popover-container__what-you-will-learn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="0.875rem" viewBox="0 0 18.029 14">
  <path id="check_" data-name="check " d="M6.9,14.136a.92.92,0,0,1-1.3,0L.4,8.938a1.38,1.38,0,0,1,0-1.953l.651-.651a1.38,1.38,0,0,1,1.953,0L6.253,9.58,15.022.811a1.38,1.38,0,0,1,1.953,0l.651.651a1.38,1.38,0,0,1,0,1.953Zm0,0" transform="translate(0 -0.406)" fill="#198754"/>
</svg>
                      </div>

                      <span>
                        توضيح شامل للفرق بين المضاربة و الاستثمار في الأسهم،
                        وكيفية التفريق بين الشركات
                      </span>
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn"
                        ]
                      }
                    >
                      <div>

                      <svg className={styles["latest-courses__popover-container__what-you-will-learn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="0.875rem" viewBox="0 0 18.029 14">
  <path id="check_" data-name="check " d="M6.9,14.136a.92.92,0,0,1-1.3,0L.4,8.938a1.38,1.38,0,0,1,0-1.953l.651-.651a1.38,1.38,0,0,1,1.953,0L6.253,9.58,15.022.811a1.38,1.38,0,0,1,1.953,0l.651.651a1.38,1.38,0,0,1,0,1.953Zm0,0" transform="translate(0 -0.406)" fill="#198754"/>
</svg>
                      </div>

                      <span>
                        دليل شامل لكيفية تطبيق الاستراتيجيات الحديثة للقيام
                        بالتحليل الأساسي والفني للأسهم
                      </span>
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn"
                        ]
                      }
                    >
                      <div>

                      <svg className={styles["latest-courses__popover-container__what-you-will-learn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="0.875rem" viewBox="0 0 18.029 14">
  <path id="check_" data-name="check " d="M6.9,14.136a.92.92,0,0,1-1.3,0L.4,8.938a1.38,1.38,0,0,1,0-1.953l.651-.651a1.38,1.38,0,0,1,1.953,0L6.253,9.58,15.022.811a1.38,1.38,0,0,1,1.953,0l.651.651a1.38,1.38,0,0,1,0,1.953Zm0,0" transform="translate(0 -0.406)" fill="#198754"/>
</svg>
                      </div>

                      <span>
                        فهم وافي لأسباب وسلبيات العاطفة الاستثمارية، بالإضافة
                        إلى تعلم كيفية اتخاذ القرارات المالية{" "}
                      </span>
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn"
                        ]
                      }
                    >
                      <div>

                      <svg className={styles["latest-courses__popover-container__what-you-will-learn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="0.875rem" viewBox="0 0 18.029 14">
  <path id="check_" data-name="check " d="M6.9,14.136a.92.92,0,0,1-1.3,0L.4,8.938a1.38,1.38,0,0,1,0-1.953l.651-.651a1.38,1.38,0,0,1,1.953,0L6.253,9.58,15.022.811a1.38,1.38,0,0,1,1.953,0l.651.651a1.38,1.38,0,0,1,0,1.953Zm0,0" transform="translate(0 -0.406)" fill="#198754"/>
</svg>
                      </div>

                      <span>
                        فهم وافي لأسباب وسلبيات العاطفة الاستثمارية، بالإضافة
                        إلى تعلم كيفية اتخاذ القرارات المالية{" "}
                      </span>
                    </div>
                  </Popover>
                }
              >
                <Card
                  id="latest-courses-card1"
                  className={
                    styles["latest-courses__cards-carousel__course-card"]
                  }
                >
                  <div
                    className={
                      styles[
                        "latest-courses__cards-carousel__course-card__category-chip"
                      ]
                    }
                  > 
                    الفنون 
                  </div>
                  <Card.Img
                    variant="top"
                    src="/images/course img.png"
                    alt="course image"
                    className={
                      styles[
                        "latest-courses__cards-carousel__course-card__course-img"
                      ]
                    }
                  />
                  <Card.Body
                    className={
                      styles[
                        "latest-courses__cards-carousel__course-card__card-body"
                      ]
                    }
                  >
                    <div
                      className={
                        styles[
                          "latest-courses__cards-carousel__course-card__card-body__card-header"
                        ]
                      }
                    >
                      <div
                        className={
                          styles[
                            "latest-courses__cards-carousel__course-card__card-body__card-header__trainer-img-box"
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
                            "latest-courses__cards-carousel__course-card__card-body__card-header__course-details"
                          ]
                        }
                      >
                        <div
                          className={
                            styles[
                              "latest-courses__cards-carousel__course-card__card-body__card-header__course-details__title"
                            ]
                          }
                        >
                          إحتراف التصوير بالكاميرا
                        </div>
                        <div
                          className={
                            styles[
                              "latest-courses__cards-carousel__course-card__card-body__card-header__course-details__author"
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
                          "latest-courses__cards-carousel__course-card__card-body__checkout-details"
                        ]
                      }
                    >
                      <div className="d-inline-block">
                        <div
                          className={
                            styles[
                              "latest-courses__cards-carousel__course-card__card-body__checkout-details__price-container"
                            ]
                          }
                        >
                          <span
                            className={
                              styles[
                                "latest-courses__cards-carousel__course-card__card-body__checkout-details__price-container__price"
                              ]
                            }
                          >
                            850
                          </span>
                          <span
                            className={
                              styles[
                                "latest-courses__cards-carousel__course-card__card-body__checkout-details__price-container__currency"
                              ]
                            }
                          >
                            جنية مصري
                          </span>
                        </div>
                        <div
                          className={
                            styles[
                              "latest-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container"
                            ]
                          }
                        >
                          <span
                            className={
                              styles[
                                "latest-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__price"
                              ]
                            }
                          >
                            950
                          </span>
                          <span
                            className={
                              styles[
                                "latest-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__currency"
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
                              "latest-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                            ]
                          }
                        >
                          <img
                            src="/images/add to cart.svg"
                            alt="add to cart icon"
                          />
                          {/* <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 22 20.135">
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
</svg> */}

                        </Button>
                        <Button
                          className={
                            styles[
                              "latest-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                            ]
                          }
                        >
                          <img
                            src="/images/favourite.svg"
                            alt="favourite icon"
                          />
                          {/* <svg className={styles["latest-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.188rem" height="1rem" viewBox="0 0 20.571 18">
  <g id="favorite" transform="translate(0.012 -31.967)" fill="none">
    <path d="M18.562,33.2a5.494,5.494,0,0,0-7.5.546l-.792.816-.792-.816a5.494,5.494,0,0,0-7.5-.546,5.769,5.769,0,0,0-.4,8.353l7.774,8.028a1.26,1.26,0,0,0,1.82,0l7.774-8.028A5.766,5.766,0,0,0,18.562,33.2Z" stroke="none"/>
    <path d="M 5.35462474822998 33.66680526733398 C 4.504674911499023 33.66680526733398 3.720794677734375 33.95197296142578 3.088695526123047 34.49063491821289 C 2.242284774780273 35.21304321289062 1.746435165405273 36.23271560668945 1.692474365234375 37.36181259155273 C 1.638875961303711 38.48357391357422 2.045904159545898 39.57950592041016 2.80848503112793 40.36787414550781 L 10.27174949645996 48.07412719726562 L 17.7353458404541 40.36752319335938 C 18.49968528747559 39.5787353515625 18.90761566162109 38.48318481445312 18.85453414916992 37.36177444458008 C 18.80109596252441 36.23286437988281 18.30541610717773 35.21321487426758 17.45979499816895 34.49146270751953 C 16.82672500610352 33.95196533203125 16.04329490661621 33.66680526733398 15.19420528411865 33.66680526733398 C 14.12225532531738 33.66680526733398 13.06226539611816 34.12616348266602 12.28523540496826 34.92791366577148 L 10.2737455368042 37.00065231323242 L 8.26032543182373 34.92589569091797 C 7.48636531829834 34.12572479248047 6.427274703979492 33.66680526733398 5.35462474822998 33.66680526733398 M 5.354625701904297 31.96680068969727 C 6.852423667907715 31.96680068969727 8.36213493347168 32.58594131469727 9.482254981994629 33.74399566650391 L 10.27375507354736 34.55960464477539 L 11.06526470184326 33.74399566650391 C 13.08620452880859 31.65876007080078 16.36069488525391 31.32126617431641 18.56244468688965 33.19757461547852 C 21.08560562133789 35.35110473632812 21.21819496154785 39.21621322631836 18.95618438720703 41.55054473876953 L 11.18177509307861 49.57808685302734 C 10.67955589294434 50.09637069702148 9.863945960998535 50.09637451171875 9.361715316772461 49.57808685302734 L 1.587305068969727 41.55054473876953 C -0.670684814453125 39.21621322631836 -0.5381050109863281 35.35110473632812 1.985065460205078 33.19757461547852 C 2.964054107666016 32.3632926940918 4.155433654785156 31.96680068969727 5.354625701904297 31.96680068969727 Z" stroke="none" fill="#222"/>
  </g>
</svg> */}

                        </Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </OverlayTrigger>
            </SwiperSlide>
            <SwiperSlide>
              <OverlayTrigger
                placement={placement}
                overlay={
                  <Popover
                    id="popover-latest-courses-card2"
                    className={styles["latest-courses__popover-container"]}
                  >
                    <div
                      className={
                        styles["latest-courses__popover-container__title"]
                      }
                    >
                      أسرار تربية الأطفال
                    </div>
                    <div
                      className={
                        styles["latest-courses__popover-container__learners"]
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.625rem"
                        height="1.125rem"
                        viewBox="0 0 25.715 18"
                      >
                        <path
                          id="students"
                          d="M3.857,39.714a2.571,2.571,0,1,0-2.571-2.571A2.574,2.574,0,0,0,3.857,39.714Zm18,0a2.571,2.571,0,1,0-2.571-2.571A2.574,2.574,0,0,0,21.857,39.714ZM23.143,41H20.571a2.564,2.564,0,0,0-1.812.747,5.877,5.877,0,0,1,3.017,4.4h2.652a1.284,1.284,0,0,0,1.286-1.286V43.571A2.574,2.574,0,0,0,23.143,41ZM12.857,41a4.5,4.5,0,1,0-4.5-4.5A4.5,4.5,0,0,0,12.857,41Zm3.086,1.286h-.333a6.213,6.213,0,0,1-5.5,0H9.771a4.63,4.63,0,0,0-4.629,4.629v1.157A1.929,1.929,0,0,0,7.071,50H18.643a1.929,1.929,0,0,0,1.929-1.929V46.914A4.63,4.63,0,0,0,15.943,42.286Zm-8.988-.538A2.564,2.564,0,0,0,5.143,41H2.571A2.574,2.574,0,0,0,0,43.571v1.286a1.284,1.284,0,0,0,1.286,1.286H3.933a5.892,5.892,0,0,1,3.021-4.4Z"
                          transform="translate(0 -32)"
                          fill="#af151f"
                        />
                      </svg>

                      <span>12930</span>
                      <span>متعلم</span>
                    </div>
                    <div
                      className={
                        styles["latest-courses__popover-container__brief"]
                      }
                    >
                      تقدم لك منصة تدرب الإلكترونية دورة الاستثمار بالأسهم خطوة
                      بخطوة
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn-title"
                        ]
                      }
                    >
                      ماذا ستتعلم في الدورة؟
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn"
                        ]
                      }
                    >
                      <div>

                      <svg className={styles["latest-courses__popover-container__what-you-will-learn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="0.875rem" viewBox="0 0 18.029 14">
  <path id="check_" data-name="check " d="M6.9,14.136a.92.92,0,0,1-1.3,0L.4,8.938a1.38,1.38,0,0,1,0-1.953l.651-.651a1.38,1.38,0,0,1,1.953,0L6.253,9.58,15.022.811a1.38,1.38,0,0,1,1.953,0l.651.651a1.38,1.38,0,0,1,0,1.953Zm0,0" transform="translate(0 -0.406)" fill="#198754"/>
</svg>
                      </div>


                      <span>تعزيز فهم المفاهيم الأساسية للاستثمار</span>
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn"
                        ]
                      }
                    >
                      <div>

                      <svg className={styles["latest-courses__popover-container__what-you-will-learn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="0.875rem" viewBox="0 0 18.029 14">
  <path id="check_" data-name="check " d="M6.9,14.136a.92.92,0,0,1-1.3,0L.4,8.938a1.38,1.38,0,0,1,0-1.953l.651-.651a1.38,1.38,0,0,1,1.953,0L6.253,9.58,15.022.811a1.38,1.38,0,0,1,1.953,0l.651.651a1.38,1.38,0,0,1,0,1.953Zm0,0" transform="translate(0 -0.406)" fill="#198754"/>
</svg>
                      </div>

                      <span>
                        توضيح شامل للفرق بين المضاربة و الاستثمار في الأسهم،
                        وكيفية التفريق بين الشركات
                      </span>
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn"
                        ]
                      }
                    >
                      <div>

                      <svg className={styles["latest-courses__popover-container__what-you-will-learn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="0.875rem" viewBox="0 0 18.029 14">
  <path id="check_" data-name="check " d="M6.9,14.136a.92.92,0,0,1-1.3,0L.4,8.938a1.38,1.38,0,0,1,0-1.953l.651-.651a1.38,1.38,0,0,1,1.953,0L6.253,9.58,15.022.811a1.38,1.38,0,0,1,1.953,0l.651.651a1.38,1.38,0,0,1,0,1.953Zm0,0" transform="translate(0 -0.406)" fill="#198754"/>
</svg>
                      </div>

                      <span>
                        دليل شامل لكيفية تطبيق الاستراتيجيات الحديثة للقيام
                        بالتحليل الأساسي والفني للأسهم
                      </span>
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn"
                        ]
                      }
                    >
                      <div>

                      <svg className={styles["latest-courses__popover-container__what-you-will-learn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="0.875rem" viewBox="0 0 18.029 14">
  <path id="check_" data-name="check " d="M6.9,14.136a.92.92,0,0,1-1.3,0L.4,8.938a1.38,1.38,0,0,1,0-1.953l.651-.651a1.38,1.38,0,0,1,1.953,0L6.253,9.58,15.022.811a1.38,1.38,0,0,1,1.953,0l.651.651a1.38,1.38,0,0,1,0,1.953Zm0,0" transform="translate(0 -0.406)" fill="#198754"/>
</svg>
                      </div>

                      <span>
                        فهم وافي لأسباب وسلبيات العاطفة الاستثمارية، بالإضافة
                        إلى تعلم كيفية اتخاذ القرارات المالية{" "}
                      </span>
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn"
                        ]
                      }
                    >
                      <div>

                      <svg className={styles["latest-courses__popover-container__what-you-will-learn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="0.875rem" viewBox="0 0 18.029 14">
  <path id="check_" data-name="check " d="M6.9,14.136a.92.92,0,0,1-1.3,0L.4,8.938a1.38,1.38,0,0,1,0-1.953l.651-.651a1.38,1.38,0,0,1,1.953,0L6.253,9.58,15.022.811a1.38,1.38,0,0,1,1.953,0l.651.651a1.38,1.38,0,0,1,0,1.953Zm0,0" transform="translate(0 -0.406)" fill="#198754"/>
</svg>
                      </div>

                      <span>
                        فهم وافي لأسباب وسلبيات العاطفة الاستثمارية، بالإضافة
                        إلى تعلم كيفية اتخاذ القرارات المالية{" "}
                      </span>
                    </div>
                  </Popover>
                }
              >
                <Card
                  id="latest-courses-card2"
                  className={
                    styles["latest-courses__cards-carousel__course-card"]
                  }
                >
                  <div
                    className={
                      styles[
                        "latest-courses__cards-carousel__course-card__category-chip"
                      ]
                    }
                  >
                    الفنون
                  </div>
                  <Card.Img
                    variant="top"
                    src="/images/course img.png"
                    alt="course image"
                    className={
                      styles[
                        "latest-courses__cards-carousel__course-card__course-img"
                      ]
                    }
                  />
                  <Card.Body
                    className={
                      styles[
                        "latest-courses__cards-carousel__course-card__card-body"
                      ]
                    }
                  >
                    <div
                      className={
                        styles[
                          "latest-courses__cards-carousel__course-card__card-body__card-header"
                        ]
                      }
                    >
                      <div
                        className={
                          styles[
                            "latest-courses__cards-carousel__course-card__card-body__card-header__trainer-img-box"
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
                            "latest-courses__cards-carousel__course-card__card-body__card-header__course-details"
                          ]
                        }
                      >
                        <div
                          className={
                            styles[
                              "latest-courses__cards-carousel__course-card__card-body__card-header__course-details__title"
                            ]
                          }
                        >
                          إحتراف التصوير بالكاميرا
                        </div>
                        <div
                          className={
                            styles[
                              "latest-courses__cards-carousel__course-card__card-body__card-header__course-details__author"
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
                          "latest-courses__cards-carousel__course-card__card-body__checkout-details"
                        ]
                      }
                    >
                      <div className="d-inline-block">
                        <div
                          className={
                            styles[
                              "latest-courses__cards-carousel__course-card__card-body__checkout-details__price-container"
                            ]
                          }
                        >
                          <span
                            className={
                              styles[
                                "latest-courses__cards-carousel__course-card__card-body__checkout-details__price-container__price"
                              ]
                            }
                          >
                            850
                          </span>
                          <span
                            className={
                              styles[
                                "latest-courses__cards-carousel__course-card__card-body__checkout-details__price-container__currency"
                              ]
                            }
                          >
                            جنية مصري
                          </span>
                        </div>
                        <div
                          className={
                            styles[
                              "latest-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container"
                            ]
                          }
                        >
                          <span
                            className={
                              styles[
                                "latest-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__price"
                              ]
                            }
                          >
                            950
                          </span>
                          <span
                            className={
                              styles[
                                "latest-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__currency"
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
                              "latest-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                            ]
                          }
                        >
                          <img
                            src="/images/add to cart.svg"
                            alt="add to cart icon"
                          />
                          {/* <svg xmlns="http://www.w3.org/2000/svg" width="1.188rem" height="1rem" viewBox="0 0 22 20.135">
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
</svg> */}

                        </Button>
                        <Button
                          className={
                            styles[
                              "latest-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                            ]
                          }
                        >
                          <img
                            src="/images/favourite.svg"
                            alt="favourite icon"
                          />
                          {/* <svg className={styles["latest-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.188rem" height="1rem" viewBox="0 0 20.571 18">
  <g id="favorite" transform="translate(0.012 -31.967)" fill="none">
    <path d="M18.562,33.2a5.494,5.494,0,0,0-7.5.546l-.792.816-.792-.816a5.494,5.494,0,0,0-7.5-.546,5.769,5.769,0,0,0-.4,8.353l7.774,8.028a1.26,1.26,0,0,0,1.82,0l7.774-8.028A5.766,5.766,0,0,0,18.562,33.2Z" stroke="none"/>
    <path d="M 5.35462474822998 33.66680526733398 C 4.504674911499023 33.66680526733398 3.720794677734375 33.95197296142578 3.088695526123047 34.49063491821289 C 2.242284774780273 35.21304321289062 1.746435165405273 36.23271560668945 1.692474365234375 37.36181259155273 C 1.638875961303711 38.48357391357422 2.045904159545898 39.57950592041016 2.80848503112793 40.36787414550781 L 10.27174949645996 48.07412719726562 L 17.7353458404541 40.36752319335938 C 18.49968528747559 39.5787353515625 18.90761566162109 38.48318481445312 18.85453414916992 37.36177444458008 C 18.80109596252441 36.23286437988281 18.30541610717773 35.21321487426758 17.45979499816895 34.49146270751953 C 16.82672500610352 33.95196533203125 16.04329490661621 33.66680526733398 15.19420528411865 33.66680526733398 C 14.12225532531738 33.66680526733398 13.06226539611816 34.12616348266602 12.28523540496826 34.92791366577148 L 10.2737455368042 37.00065231323242 L 8.26032543182373 34.92589569091797 C 7.48636531829834 34.12572479248047 6.427274703979492 33.66680526733398 5.35462474822998 33.66680526733398 M 5.354625701904297 31.96680068969727 C 6.852423667907715 31.96680068969727 8.36213493347168 32.58594131469727 9.482254981994629 33.74399566650391 L 10.27375507354736 34.55960464477539 L 11.06526470184326 33.74399566650391 C 13.08620452880859 31.65876007080078 16.36069488525391 31.32126617431641 18.56244468688965 33.19757461547852 C 21.08560562133789 35.35110473632812 21.21819496154785 39.21621322631836 18.95618438720703 41.55054473876953 L 11.18177509307861 49.57808685302734 C 10.67955589294434 50.09637069702148 9.863945960998535 50.09637451171875 9.361715316772461 49.57808685302734 L 1.587305068969727 41.55054473876953 C -0.670684814453125 39.21621322631836 -0.5381050109863281 35.35110473632812 1.985065460205078 33.19757461547852 C 2.964054107666016 32.3632926940918 4.155433654785156 31.96680068969727 5.354625701904297 31.96680068969727 Z" stroke="none" fill="#222"/>
  </g>
</svg> */}

                        </Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </OverlayTrigger>
            </SwiperSlide>
            <SwiperSlide>
              <OverlayTrigger
                placement={placement}
                overlay={
                  <Popover
                    id="popover-latest-courses-card3"
                    className={styles["latest-courses__popover-container"]}
                  >
                    <div
                      className={
                        styles["latest-courses__popover-container__title"]
                      }
                    >
                      أسرار تربية الأطفال
                    </div>
                    <div
                      className={
                        styles["latest-courses__popover-container__learners"]
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.625rem"
                        height="1.125rem"
                        viewBox="0 0 25.715 18"
                      >
                        <path
                          id="students"
                          d="M3.857,39.714a2.571,2.571,0,1,0-2.571-2.571A2.574,2.574,0,0,0,3.857,39.714Zm18,0a2.571,2.571,0,1,0-2.571-2.571A2.574,2.574,0,0,0,21.857,39.714ZM23.143,41H20.571a2.564,2.564,0,0,0-1.812.747,5.877,5.877,0,0,1,3.017,4.4h2.652a1.284,1.284,0,0,0,1.286-1.286V43.571A2.574,2.574,0,0,0,23.143,41ZM12.857,41a4.5,4.5,0,1,0-4.5-4.5A4.5,4.5,0,0,0,12.857,41Zm3.086,1.286h-.333a6.213,6.213,0,0,1-5.5,0H9.771a4.63,4.63,0,0,0-4.629,4.629v1.157A1.929,1.929,0,0,0,7.071,50H18.643a1.929,1.929,0,0,0,1.929-1.929V46.914A4.63,4.63,0,0,0,15.943,42.286Zm-8.988-.538A2.564,2.564,0,0,0,5.143,41H2.571A2.574,2.574,0,0,0,0,43.571v1.286a1.284,1.284,0,0,0,1.286,1.286H3.933a5.892,5.892,0,0,1,3.021-4.4Z"
                          transform="translate(0 -32)"
                          fill="#af151f"
                        />
                      </svg>

                      <span>12930</span>
                      <span>متعلم</span>
                    </div>
                    <div
                      className={
                        styles["latest-courses__popover-container__brief"]
                      }
                    >
                      تقدم لك منصة تدرب الإلكترونية دورة الاستثمار بالأسهم خطوة
                      بخطوة
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn-title"
                        ]
                      }
                    >
                      ماذا ستتعلم في الدورة؟
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn"
                        ]
                      }
                    >
                      <div>

                      <svg className={styles["latest-courses__popover-container__what-you-will-learn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="0.875rem" viewBox="0 0 18.029 14">
  <path id="check_" data-name="check " d="M6.9,14.136a.92.92,0,0,1-1.3,0L.4,8.938a1.38,1.38,0,0,1,0-1.953l.651-.651a1.38,1.38,0,0,1,1.953,0L6.253,9.58,15.022.811a1.38,1.38,0,0,1,1.953,0l.651.651a1.38,1.38,0,0,1,0,1.953Zm0,0" transform="translate(0 -0.406)" fill="#198754"/>
</svg>
                      </div>


                      <span>تعزيز فهم المفاهيم الأساسية للاستثمار</span>
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn"
                        ]
                      }
                    >
                      <div>

                      <svg className={styles["latest-courses__popover-container__what-you-will-learn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="0.875rem" viewBox="0 0 18.029 14">
  <path id="check_" data-name="check " d="M6.9,14.136a.92.92,0,0,1-1.3,0L.4,8.938a1.38,1.38,0,0,1,0-1.953l.651-.651a1.38,1.38,0,0,1,1.953,0L6.253,9.58,15.022.811a1.38,1.38,0,0,1,1.953,0l.651.651a1.38,1.38,0,0,1,0,1.953Zm0,0" transform="translate(0 -0.406)" fill="#198754"/>
</svg>
                      </div>

                      <span>
                        توضيح شامل للفرق بين المضاربة و الاستثمار في الأسهم،
                        وكيفية التفريق بين الشركات
                      </span>
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn"
                        ]
                      }
                    >
                      <div>

                      <svg className={styles["latest-courses__popover-container__what-you-will-learn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="0.875rem" viewBox="0 0 18.029 14">
  <path id="check_" data-name="check " d="M6.9,14.136a.92.92,0,0,1-1.3,0L.4,8.938a1.38,1.38,0,0,1,0-1.953l.651-.651a1.38,1.38,0,0,1,1.953,0L6.253,9.58,15.022.811a1.38,1.38,0,0,1,1.953,0l.651.651a1.38,1.38,0,0,1,0,1.953Zm0,0" transform="translate(0 -0.406)" fill="#198754"/>
</svg>
                      </div>

                      <span>
                        دليل شامل لكيفية تطبيق الاستراتيجيات الحديثة للقيام
                        بالتحليل الأساسي والفني للأسهم
                      </span>
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn"
                        ]
                      }
                    >
                      <div>

                      <svg className={styles["latest-courses__popover-container__what-you-will-learn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="0.875rem" viewBox="0 0 18.029 14">
  <path id="check_" data-name="check " d="M6.9,14.136a.92.92,0,0,1-1.3,0L.4,8.938a1.38,1.38,0,0,1,0-1.953l.651-.651a1.38,1.38,0,0,1,1.953,0L6.253,9.58,15.022.811a1.38,1.38,0,0,1,1.953,0l.651.651a1.38,1.38,0,0,1,0,1.953Zm0,0" transform="translate(0 -0.406)" fill="#198754"/>
</svg>
                      </div>

                      <span>
                        فهم وافي لأسباب وسلبيات العاطفة الاستثمارية، بالإضافة
                        إلى تعلم كيفية اتخاذ القرارات المالية{" "}
                      </span>
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn"
                        ]
                      }
                    >
                      <div>

                      <svg className={styles["latest-courses__popover-container__what-you-will-learn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="0.875rem" viewBox="0 0 18.029 14">
  <path id="check_" data-name="check " d="M6.9,14.136a.92.92,0,0,1-1.3,0L.4,8.938a1.38,1.38,0,0,1,0-1.953l.651-.651a1.38,1.38,0,0,1,1.953,0L6.253,9.58,15.022.811a1.38,1.38,0,0,1,1.953,0l.651.651a1.38,1.38,0,0,1,0,1.953Zm0,0" transform="translate(0 -0.406)" fill="#198754"/>
</svg>
                      </div>

                      <span>
                        فهم وافي لأسباب وسلبيات العاطفة الاستثمارية، بالإضافة
                        إلى تعلم كيفية اتخاذ القرارات المالية{" "}
                      </span>
                    </div>
                  </Popover>
                }
              >
                <Card
                  id="latest-courses-card3"
                  className={
                    styles["latest-courses__cards-carousel__course-card"]
                  }
                >
                  <div
                    className={
                      styles[
                        "latest-courses__cards-carousel__course-card__category-chip"
                      ]
                    }
                  >
                    الفنون
                  </div>
                  <Card.Img
                    variant="top"
                    src="/images/course img.png"
                    alt="course image"
                    className={
                      styles[
                        "latest-courses__cards-carousel__course-card__course-img"
                      ]
                    }
                  />
                  <Card.Body
                    className={
                      styles[
                        "latest-courses__cards-carousel__course-card__card-body"
                      ]
                    }
                  >
                    <div
                      className={
                        styles[
                          "latest-courses__cards-carousel__course-card__card-body__card-header"
                        ]
                      }
                    >
                      <div
                        className={
                          styles[
                            "latest-courses__cards-carousel__course-card__card-body__card-header__trainer-img-box"
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
                            "latest-courses__cards-carousel__course-card__card-body__card-header__course-details"
                          ]
                        }
                      >
                        <div
                          className={
                            styles[
                              "latest-courses__cards-carousel__course-card__card-body__card-header__course-details__title"
                            ]
                          }
                        >
                          إحتراف التصوير بالكاميرا
                        </div>
                        <div
                          className={
                            styles[
                              "latest-courses__cards-carousel__course-card__card-body__card-header__course-details__author"
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
                          "latest-courses__cards-carousel__course-card__card-body__checkout-details"
                        ]
                      }
                    >
                      <div className="d-inline-block">
                        <div
                          className={
                            styles[
                              "latest-courses__cards-carousel__course-card__card-body__checkout-details__price-container"
                            ]
                          }
                        >
                          <span
                            className={
                              styles[
                                "latest-courses__cards-carousel__course-card__card-body__checkout-details__price-container__price"
                              ]
                            }
                          >
                            850
                          </span>
                          <span
                            className={
                              styles[
                                "latest-courses__cards-carousel__course-card__card-body__checkout-details__price-container__currency"
                              ]
                            }
                          >
                            جنية مصري
                          </span>
                        </div>
                        <div
                          className={
                            styles[
                              "latest-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container"
                            ]
                          }
                        >
                          <span
                            className={
                              styles[
                                "latest-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__price"
                              ]
                            }
                          >
                            950
                          </span>
                          <span
                            className={
                              styles[
                                "latest-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__currency"
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
                              "latest-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                            ]
                          }
                        >
                          <img
                            src="/images/add to cart.svg"
                            alt="add to cart icon"
                          />
                          {/* <svg xmlns="http://www.w3.org/2000/svg" width="1.188rem" height="1rem" viewBox="0 0 22 20.135">
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
</svg> */}

                        </Button>
                        <Button
                          className={
                            styles[
                              "latest-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                            ]
                          }
                        >
                          <img
                            src="/images/favourite.svg"
                            alt="favourite icon"
                          />
                          {/* <svg className={styles["latest-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.188rem" height="1rem" viewBox="0 0 20.571 18">
  <g id="favorite" transform="translate(0.012 -31.967)" fill="none">
    <path d="M18.562,33.2a5.494,5.494,0,0,0-7.5.546l-.792.816-.792-.816a5.494,5.494,0,0,0-7.5-.546,5.769,5.769,0,0,0-.4,8.353l7.774,8.028a1.26,1.26,0,0,0,1.82,0l7.774-8.028A5.766,5.766,0,0,0,18.562,33.2Z" stroke="none"/>
    <path d="M 5.35462474822998 33.66680526733398 C 4.504674911499023 33.66680526733398 3.720794677734375 33.95197296142578 3.088695526123047 34.49063491821289 C 2.242284774780273 35.21304321289062 1.746435165405273 36.23271560668945 1.692474365234375 37.36181259155273 C 1.638875961303711 38.48357391357422 2.045904159545898 39.57950592041016 2.80848503112793 40.36787414550781 L 10.27174949645996 48.07412719726562 L 17.7353458404541 40.36752319335938 C 18.49968528747559 39.5787353515625 18.90761566162109 38.48318481445312 18.85453414916992 37.36177444458008 C 18.80109596252441 36.23286437988281 18.30541610717773 35.21321487426758 17.45979499816895 34.49146270751953 C 16.82672500610352 33.95196533203125 16.04329490661621 33.66680526733398 15.19420528411865 33.66680526733398 C 14.12225532531738 33.66680526733398 13.06226539611816 34.12616348266602 12.28523540496826 34.92791366577148 L 10.2737455368042 37.00065231323242 L 8.26032543182373 34.92589569091797 C 7.48636531829834 34.12572479248047 6.427274703979492 33.66680526733398 5.35462474822998 33.66680526733398 M 5.354625701904297 31.96680068969727 C 6.852423667907715 31.96680068969727 8.36213493347168 32.58594131469727 9.482254981994629 33.74399566650391 L 10.27375507354736 34.55960464477539 L 11.06526470184326 33.74399566650391 C 13.08620452880859 31.65876007080078 16.36069488525391 31.32126617431641 18.56244468688965 33.19757461547852 C 21.08560562133789 35.35110473632812 21.21819496154785 39.21621322631836 18.95618438720703 41.55054473876953 L 11.18177509307861 49.57808685302734 C 10.67955589294434 50.09637069702148 9.863945960998535 50.09637451171875 9.361715316772461 49.57808685302734 L 1.587305068969727 41.55054473876953 C -0.670684814453125 39.21621322631836 -0.5381050109863281 35.35110473632812 1.985065460205078 33.19757461547852 C 2.964054107666016 32.3632926940918 4.155433654785156 31.96680068969727 5.354625701904297 31.96680068969727 Z" stroke="none" fill="#222"/>
  </g>
</svg> */}

                        </Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </OverlayTrigger>
            </SwiperSlide>
            <SwiperSlide>
              <OverlayTrigger
                placement={placement}
                overlay={
                  <Popover
                    id="popover-latest-courses-card4"
                    className={styles["latest-courses__popover-container"]}
                  >
                    <div
                      className={
                        styles["latest-courses__popover-container__title"]
                      }
                    >
                      أسرار تربية الأطفال
                    </div>
                    <div
                      className={
                        styles["latest-courses__popover-container__learners"]
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.625rem"
                        height="1.125rem"
                        viewBox="0 0 25.715 18"
                      >
                        <path
                          id="students"
                          d="M3.857,39.714a2.571,2.571,0,1,0-2.571-2.571A2.574,2.574,0,0,0,3.857,39.714Zm18,0a2.571,2.571,0,1,0-2.571-2.571A2.574,2.574,0,0,0,21.857,39.714ZM23.143,41H20.571a2.564,2.564,0,0,0-1.812.747,5.877,5.877,0,0,1,3.017,4.4h2.652a1.284,1.284,0,0,0,1.286-1.286V43.571A2.574,2.574,0,0,0,23.143,41ZM12.857,41a4.5,4.5,0,1,0-4.5-4.5A4.5,4.5,0,0,0,12.857,41Zm3.086,1.286h-.333a6.213,6.213,0,0,1-5.5,0H9.771a4.63,4.63,0,0,0-4.629,4.629v1.157A1.929,1.929,0,0,0,7.071,50H18.643a1.929,1.929,0,0,0,1.929-1.929V46.914A4.63,4.63,0,0,0,15.943,42.286Zm-8.988-.538A2.564,2.564,0,0,0,5.143,41H2.571A2.574,2.574,0,0,0,0,43.571v1.286a1.284,1.284,0,0,0,1.286,1.286H3.933a5.892,5.892,0,0,1,3.021-4.4Z"
                          transform="translate(0 -32)"
                          fill="#af151f"
                        />
                      </svg>

                      <span>12930</span>
                      <span>متعلم</span>
                    </div>
                    <div
                      className={
                        styles["latest-courses__popover-container__brief"]
                      }
                    >
                      تقدم لك منصة تدرب الإلكترونية دورة الاستثمار بالأسهم خطوة
                      بخطوة
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn-title"
                        ]
                      }
                    >
                      ماذا ستتعلم في الدورة؟
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn"
                        ]
                      }
                    >
                      <div>

                      <svg className={styles["latest-courses__popover-container__what-you-will-learn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="0.875rem" viewBox="0 0 18.029 14">
  <path id="check_" data-name="check " d="M6.9,14.136a.92.92,0,0,1-1.3,0L.4,8.938a1.38,1.38,0,0,1,0-1.953l.651-.651a1.38,1.38,0,0,1,1.953,0L6.253,9.58,15.022.811a1.38,1.38,0,0,1,1.953,0l.651.651a1.38,1.38,0,0,1,0,1.953Zm0,0" transform="translate(0 -0.406)" fill="#198754"/>
</svg>
                      </div>


                      <span>تعزيز فهم المفاهيم الأساسية للاستثمار</span>
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn"
                        ]
                      }
                    >
                      <div>

                      <svg className={styles["latest-courses__popover-container__what-you-will-learn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="0.875rem" viewBox="0 0 18.029 14">
  <path id="check_" data-name="check " d="M6.9,14.136a.92.92,0,0,1-1.3,0L.4,8.938a1.38,1.38,0,0,1,0-1.953l.651-.651a1.38,1.38,0,0,1,1.953,0L6.253,9.58,15.022.811a1.38,1.38,0,0,1,1.953,0l.651.651a1.38,1.38,0,0,1,0,1.953Zm0,0" transform="translate(0 -0.406)" fill="#198754"/>
</svg>
                      </div>

                      <span>
                        توضيح شامل للفرق بين المضاربة و الاستثمار في الأسهم،
                        وكيفية التفريق بين الشركات
                      </span>
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn"
                        ]
                      }
                    >
                      <div>

                      <svg className={styles["latest-courses__popover-container__what-you-will-learn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="0.875rem" viewBox="0 0 18.029 14">
  <path id="check_" data-name="check " d="M6.9,14.136a.92.92,0,0,1-1.3,0L.4,8.938a1.38,1.38,0,0,1,0-1.953l.651-.651a1.38,1.38,0,0,1,1.953,0L6.253,9.58,15.022.811a1.38,1.38,0,0,1,1.953,0l.651.651a1.38,1.38,0,0,1,0,1.953Zm0,0" transform="translate(0 -0.406)" fill="#198754"/>
</svg>
                      </div>

                      <span>
                        دليل شامل لكيفية تطبيق الاستراتيجيات الحديثة للقيام
                        بالتحليل الأساسي والفني للأسهم
                      </span>
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn"
                        ]
                      }
                    >
                      <div>

                      <svg className={styles["latest-courses__popover-container__what-you-will-learn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="0.875rem" viewBox="0 0 18.029 14">
  <path id="check_" data-name="check " d="M6.9,14.136a.92.92,0,0,1-1.3,0L.4,8.938a1.38,1.38,0,0,1,0-1.953l.651-.651a1.38,1.38,0,0,1,1.953,0L6.253,9.58,15.022.811a1.38,1.38,0,0,1,1.953,0l.651.651a1.38,1.38,0,0,1,0,1.953Zm0,0" transform="translate(0 -0.406)" fill="#198754"/>
</svg>
                      </div>

                      <span>
                        فهم وافي لأسباب وسلبيات العاطفة الاستثمارية، بالإضافة
                        إلى تعلم كيفية اتخاذ القرارات المالية{" "}
                      </span>
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn"
                        ]
                      }
                    >
                      <div>

                      <svg className={styles["latest-courses__popover-container__what-you-will-learn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="0.875rem" viewBox="0 0 18.029 14">
  <path id="check_" data-name="check " d="M6.9,14.136a.92.92,0,0,1-1.3,0L.4,8.938a1.38,1.38,0,0,1,0-1.953l.651-.651a1.38,1.38,0,0,1,1.953,0L6.253,9.58,15.022.811a1.38,1.38,0,0,1,1.953,0l.651.651a1.38,1.38,0,0,1,0,1.953Zm0,0" transform="translate(0 -0.406)" fill="#198754"/>
</svg>
                      </div>

                      <span>
                        فهم وافي لأسباب وسلبيات العاطفة الاستثمارية، بالإضافة
                        إلى تعلم كيفية اتخاذ القرارات المالية{" "}
                      </span>
                    </div>
                  </Popover>
                }
              >
                <Card
                  id="latest-courses-card4"
                  className={
                    styles["latest-courses__cards-carousel__course-card"]
                  }
                >
                  <div
                    className={
                      styles[
                        "latest-courses__cards-carousel__course-card__category-chip"
                      ]
                    }
                  >
                    الفنون
                  </div>
                  <Card.Img
                    variant="top"
                    src="/images/course img.png"
                    alt="course image"
                    className={
                      styles[
                        "latest-courses__cards-carousel__course-card__course-img"
                      ]
                    }
                  />
                  <Card.Body
                    className={
                      styles[
                        "latest-courses__cards-carousel__course-card__card-body"
                      ]
                    }
                  >
                    <div
                      className={
                        styles[
                          "latest-courses__cards-carousel__course-card__card-body__card-header"
                        ]
                      }
                    >
                      <div
                        className={
                          styles[
                            "latest-courses__cards-carousel__course-card__card-body__card-header__trainer-img-box"
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
                            "latest-courses__cards-carousel__course-card__card-body__card-header__course-details"
                          ]
                        }
                      >
                        <div
                          className={
                            styles[
                              "latest-courses__cards-carousel__course-card__card-body__card-header__course-details__title"
                            ]
                          }
                        >
                          إحتراف التصوير بالكاميرا
                        </div>
                        <div
                          className={
                            styles[
                              "latest-courses__cards-carousel__course-card__card-body__card-header__course-details__author"
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
                          "latest-courses__cards-carousel__course-card__card-body__checkout-details"
                        ]
                      }
                    >
                      <div className="d-inline-block">
                        <div
                          className={
                            styles[
                              "latest-courses__cards-carousel__course-card__card-body__checkout-details__price-container"
                            ]
                          }
                        >
                          <span
                            className={
                              styles[
                                "latest-courses__cards-carousel__course-card__card-body__checkout-details__price-container__price"
                              ]
                            }
                          >
                            850
                          </span>
                          <span
                            className={
                              styles[
                                "latest-courses__cards-carousel__course-card__card-body__checkout-details__price-container__currency"
                              ]
                            }
                          >
                            جنية مصري
                          </span>
                        </div>
                        <div
                          className={
                            styles[
                              "latest-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container"
                            ]
                          }
                        >
                          <span
                            className={
                              styles[
                                "latest-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__price"
                              ]
                            }
                          >
                            950
                          </span>
                          <span
                            className={
                              styles[
                                "latest-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__currency"
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
                              "latest-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                            ]
                          }
                        >
                          <img
                            src="/images/add to cart.svg"
                            alt="add to cart icon"
                          />
                          {/* <svg xmlns="http://www.w3.org/2000/svg" width="1.188rem" height="1rem" viewBox="0 0 22 20.135">
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
</svg> */}

                        </Button>
                        <Button
                          className={
                            styles[
                              "latest-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                            ]
                          }
                        >
                          <img
                            src="/images/favourite.svg"
                            alt="favourite icon"
                          />
                          {/* <svg className={styles["latest-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.188rem" height="1rem" viewBox="0 0 20.571 18">
  <g id="favorite" transform="translate(0.012 -31.967)" fill="none">
    <path d="M18.562,33.2a5.494,5.494,0,0,0-7.5.546l-.792.816-.792-.816a5.494,5.494,0,0,0-7.5-.546,5.769,5.769,0,0,0-.4,8.353l7.774,8.028a1.26,1.26,0,0,0,1.82,0l7.774-8.028A5.766,5.766,0,0,0,18.562,33.2Z" stroke="none"/>
    <path d="M 5.35462474822998 33.66680526733398 C 4.504674911499023 33.66680526733398 3.720794677734375 33.95197296142578 3.088695526123047 34.49063491821289 C 2.242284774780273 35.21304321289062 1.746435165405273 36.23271560668945 1.692474365234375 37.36181259155273 C 1.638875961303711 38.48357391357422 2.045904159545898 39.57950592041016 2.80848503112793 40.36787414550781 L 10.27174949645996 48.07412719726562 L 17.7353458404541 40.36752319335938 C 18.49968528747559 39.5787353515625 18.90761566162109 38.48318481445312 18.85453414916992 37.36177444458008 C 18.80109596252441 36.23286437988281 18.30541610717773 35.21321487426758 17.45979499816895 34.49146270751953 C 16.82672500610352 33.95196533203125 16.04329490661621 33.66680526733398 15.19420528411865 33.66680526733398 C 14.12225532531738 33.66680526733398 13.06226539611816 34.12616348266602 12.28523540496826 34.92791366577148 L 10.2737455368042 37.00065231323242 L 8.26032543182373 34.92589569091797 C 7.48636531829834 34.12572479248047 6.427274703979492 33.66680526733398 5.35462474822998 33.66680526733398 M 5.354625701904297 31.96680068969727 C 6.852423667907715 31.96680068969727 8.36213493347168 32.58594131469727 9.482254981994629 33.74399566650391 L 10.27375507354736 34.55960464477539 L 11.06526470184326 33.74399566650391 C 13.08620452880859 31.65876007080078 16.36069488525391 31.32126617431641 18.56244468688965 33.19757461547852 C 21.08560562133789 35.35110473632812 21.21819496154785 39.21621322631836 18.95618438720703 41.55054473876953 L 11.18177509307861 49.57808685302734 C 10.67955589294434 50.09637069702148 9.863945960998535 50.09637451171875 9.361715316772461 49.57808685302734 L 1.587305068969727 41.55054473876953 C -0.670684814453125 39.21621322631836 -0.5381050109863281 35.35110473632812 1.985065460205078 33.19757461547852 C 2.964054107666016 32.3632926940918 4.155433654785156 31.96680068969727 5.354625701904297 31.96680068969727 Z" stroke="none" fill="#222"/>
  </g>
</svg> */}

                        </Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </OverlayTrigger>
            </SwiperSlide>
            <SwiperSlide>
              <OverlayTrigger
                placement={placement}
                overlay={
                  <Popover
                    id="popover-latest-courses-card5"
                    className={styles["latest-courses__popover-container"]}
                  >
                    <div
                      className={
                        styles["latest-courses__popover-container__title"]
                      }
                    >
                      أسرار تربية الأطفال
                    </div>
                    <div
                      className={
                        styles["latest-courses__popover-container__learners"]
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.625rem"
                        height="1.125rem"
                        viewBox="0 0 25.715 18"
                      >
                        <path
                          id="students"
                          d="M3.857,39.714a2.571,2.571,0,1,0-2.571-2.571A2.574,2.574,0,0,0,3.857,39.714Zm18,0a2.571,2.571,0,1,0-2.571-2.571A2.574,2.574,0,0,0,21.857,39.714ZM23.143,41H20.571a2.564,2.564,0,0,0-1.812.747,5.877,5.877,0,0,1,3.017,4.4h2.652a1.284,1.284,0,0,0,1.286-1.286V43.571A2.574,2.574,0,0,0,23.143,41ZM12.857,41a4.5,4.5,0,1,0-4.5-4.5A4.5,4.5,0,0,0,12.857,41Zm3.086,1.286h-.333a6.213,6.213,0,0,1-5.5,0H9.771a4.63,4.63,0,0,0-4.629,4.629v1.157A1.929,1.929,0,0,0,7.071,50H18.643a1.929,1.929,0,0,0,1.929-1.929V46.914A4.63,4.63,0,0,0,15.943,42.286Zm-8.988-.538A2.564,2.564,0,0,0,5.143,41H2.571A2.574,2.574,0,0,0,0,43.571v1.286a1.284,1.284,0,0,0,1.286,1.286H3.933a5.892,5.892,0,0,1,3.021-4.4Z"
                          transform="translate(0 -32)"
                          fill="#af151f"
                        />
                      </svg>

                      <span>12930</span>
                      <span>متعلم</span>
                    </div>
                    <div
                      className={
                        styles["latest-courses__popover-container__brief"]
                      }
                    >
                      تقدم لك منصة تدرب الإلكترونية دورة الاستثمار بالأسهم خطوة
                      بخطوة
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn-title"
                        ]
                      }
                    >
                      ماذا ستتعلم في الدورة؟
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn"
                        ]
                      }
                    >
                      <div>

                      <svg className={styles["latest-courses__popover-container__what-you-will-learn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="0.875rem" viewBox="0 0 18.029 14">
  <path id="check_" data-name="check " d="M6.9,14.136a.92.92,0,0,1-1.3,0L.4,8.938a1.38,1.38,0,0,1,0-1.953l.651-.651a1.38,1.38,0,0,1,1.953,0L6.253,9.58,15.022.811a1.38,1.38,0,0,1,1.953,0l.651.651a1.38,1.38,0,0,1,0,1.953Zm0,0" transform="translate(0 -0.406)" fill="#198754"/>
</svg>
                      </div>


                      <span>تعزيز فهم المفاهيم الأساسية للاستثمار</span>
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn"
                        ]
                      }
                    >
                      <div>

                      <svg className={styles["latest-courses__popover-container__what-you-will-learn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="0.875rem" viewBox="0 0 18.029 14">
  <path id="check_" data-name="check " d="M6.9,14.136a.92.92,0,0,1-1.3,0L.4,8.938a1.38,1.38,0,0,1,0-1.953l.651-.651a1.38,1.38,0,0,1,1.953,0L6.253,9.58,15.022.811a1.38,1.38,0,0,1,1.953,0l.651.651a1.38,1.38,0,0,1,0,1.953Zm0,0" transform="translate(0 -0.406)" fill="#198754"/>
</svg>
                      </div>

                      <span>
                        توضيح شامل للفرق بين المضاربة و الاستثمار في الأسهم،
                        وكيفية التفريق بين الشركات
                      </span>
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn"
                        ]
                      }
                    >
                      <div>

                      <svg className={styles["latest-courses__popover-container__what-you-will-learn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="0.875rem" viewBox="0 0 18.029 14">
  <path id="check_" data-name="check " d="M6.9,14.136a.92.92,0,0,1-1.3,0L.4,8.938a1.38,1.38,0,0,1,0-1.953l.651-.651a1.38,1.38,0,0,1,1.953,0L6.253,9.58,15.022.811a1.38,1.38,0,0,1,1.953,0l.651.651a1.38,1.38,0,0,1,0,1.953Zm0,0" transform="translate(0 -0.406)" fill="#198754"/>
</svg>
                      </div>

                      <span>
                        دليل شامل لكيفية تطبيق الاستراتيجيات الحديثة للقيام
                        بالتحليل الأساسي والفني للأسهم
                      </span>
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn"
                        ]
                      }
                    >
                      <div>

                      <svg className={styles["latest-courses__popover-container__what-you-will-learn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="0.875rem" viewBox="0 0 18.029 14">
  <path id="check_" data-name="check " d="M6.9,14.136a.92.92,0,0,1-1.3,0L.4,8.938a1.38,1.38,0,0,1,0-1.953l.651-.651a1.38,1.38,0,0,1,1.953,0L6.253,9.58,15.022.811a1.38,1.38,0,0,1,1.953,0l.651.651a1.38,1.38,0,0,1,0,1.953Zm0,0" transform="translate(0 -0.406)" fill="#198754"/>
</svg>
                      </div>

                      <span>
                        فهم وافي لأسباب وسلبيات العاطفة الاستثمارية، بالإضافة
                        إلى تعلم كيفية اتخاذ القرارات المالية{" "}
                      </span>
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn"
                        ]
                      }
                    >
                      <div>

                      <svg className={styles["latest-courses__popover-container__what-you-will-learn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="0.875rem" viewBox="0 0 18.029 14">
  <path id="check_" data-name="check " d="M6.9,14.136a.92.92,0,0,1-1.3,0L.4,8.938a1.38,1.38,0,0,1,0-1.953l.651-.651a1.38,1.38,0,0,1,1.953,0L6.253,9.58,15.022.811a1.38,1.38,0,0,1,1.953,0l.651.651a1.38,1.38,0,0,1,0,1.953Zm0,0" transform="translate(0 -0.406)" fill="#198754"/>
</svg>
                      </div>

                      <span>
                        فهم وافي لأسباب وسلبيات العاطفة الاستثمارية، بالإضافة
                        إلى تعلم كيفية اتخاذ القرارات المالية{" "}
                      </span>
                    </div>
                  </Popover>
                }
              >
                <Card
                  id="latest-courses-card5"
                  className={
                    styles["latest-courses__cards-carousel__course-card"]
                  }
                >
                  <div
                    className={
                      styles[
                        "latest-courses__cards-carousel__course-card__category-chip"
                      ]
                    }
                  >
                    الفنون
                  </div>
                  <Card.Img
                    variant="top"
                    src="/images/course img.png"
                    alt="course image"
                    className={
                      styles[
                        "latest-courses__cards-carousel__course-card__course-img"
                      ]
                    }
                  />
                  <Card.Body
                    className={
                      styles[
                        "latest-courses__cards-carousel__course-card__card-body"
                      ]
                    }
                  >
                    <div
                      className={
                        styles[
                          "latest-courses__cards-carousel__course-card__card-body__card-header"
                        ]
                      }
                    >
                      <div
                        className={
                          styles[
                            "latest-courses__cards-carousel__course-card__card-body__card-header__trainer-img-box"
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
                            "latest-courses__cards-carousel__course-card__card-body__card-header__course-details"
                          ]
                        }
                      >
                        <div
                          className={
                            styles[
                              "latest-courses__cards-carousel__course-card__card-body__card-header__course-details__title"
                            ]
                          }
                        >
                          إحتراف التصوير بالكاميرا
                        </div>
                        <div
                          className={
                            styles[
                              "latest-courses__cards-carousel__course-card__card-body__card-header__course-details__author"
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
                          "latest-courses__cards-carousel__course-card__card-body__checkout-details"
                        ]
                      }
                    >
                      <div className="d-inline-block">
                        <div
                          className={
                            styles[
                              "latest-courses__cards-carousel__course-card__card-body__checkout-details__price-container"
                            ]
                          }
                        >
                          <span
                            className={
                              styles[
                                "latest-courses__cards-carousel__course-card__card-body__checkout-details__price-container__price"
                              ]
                            }
                          >
                            850
                          </span>
                          <span
                            className={
                              styles[
                                "latest-courses__cards-carousel__course-card__card-body__checkout-details__price-container__currency"
                              ]
                            }
                          >
                            جنية مصري
                          </span>
                        </div>
                        <div
                          className={
                            styles[
                              "latest-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container"
                            ]
                          }
                        >
                          <span
                            className={
                              styles[
                                "latest-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__price"
                              ]
                            }
                          >
                            950
                          </span>
                          <span
                            className={
                              styles[
                                "latest-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__currency"
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
                              "latest-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                            ]
                          }
                        >
                          <img
                            src="/images/add to cart.svg"
                            alt="add to cart icon"
                          />
                          {/* <svg xmlns="http://www.w3.org/2000/svg" width="1.188rem" height="1rem" viewBox="0 0 22 20.135">
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
</svg> */}

                        </Button>
                        <Button
                          className={
                            styles[
                              "latest-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                            ]
                          }
                        >
                          <img
                            src="/images/favourite.svg"
                            alt="favourite icon"
                          />
                          {/* <svg className={styles["latest-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.188rem" height="1rem" viewBox="0 0 20.571 18">
  <g id="favorite" transform="translate(0.012 -31.967)" fill="none">
    <path d="M18.562,33.2a5.494,5.494,0,0,0-7.5.546l-.792.816-.792-.816a5.494,5.494,0,0,0-7.5-.546,5.769,5.769,0,0,0-.4,8.353l7.774,8.028a1.26,1.26,0,0,0,1.82,0l7.774-8.028A5.766,5.766,0,0,0,18.562,33.2Z" stroke="none"/>
    <path d="M 5.35462474822998 33.66680526733398 C 4.504674911499023 33.66680526733398 3.720794677734375 33.95197296142578 3.088695526123047 34.49063491821289 C 2.242284774780273 35.21304321289062 1.746435165405273 36.23271560668945 1.692474365234375 37.36181259155273 C 1.638875961303711 38.48357391357422 2.045904159545898 39.57950592041016 2.80848503112793 40.36787414550781 L 10.27174949645996 48.07412719726562 L 17.7353458404541 40.36752319335938 C 18.49968528747559 39.5787353515625 18.90761566162109 38.48318481445312 18.85453414916992 37.36177444458008 C 18.80109596252441 36.23286437988281 18.30541610717773 35.21321487426758 17.45979499816895 34.49146270751953 C 16.82672500610352 33.95196533203125 16.04329490661621 33.66680526733398 15.19420528411865 33.66680526733398 C 14.12225532531738 33.66680526733398 13.06226539611816 34.12616348266602 12.28523540496826 34.92791366577148 L 10.2737455368042 37.00065231323242 L 8.26032543182373 34.92589569091797 C 7.48636531829834 34.12572479248047 6.427274703979492 33.66680526733398 5.35462474822998 33.66680526733398 M 5.354625701904297 31.96680068969727 C 6.852423667907715 31.96680068969727 8.36213493347168 32.58594131469727 9.482254981994629 33.74399566650391 L 10.27375507354736 34.55960464477539 L 11.06526470184326 33.74399566650391 C 13.08620452880859 31.65876007080078 16.36069488525391 31.32126617431641 18.56244468688965 33.19757461547852 C 21.08560562133789 35.35110473632812 21.21819496154785 39.21621322631836 18.95618438720703 41.55054473876953 L 11.18177509307861 49.57808685302734 C 10.67955589294434 50.09637069702148 9.863945960998535 50.09637451171875 9.361715316772461 49.57808685302734 L 1.587305068969727 41.55054473876953 C -0.670684814453125 39.21621322631836 -0.5381050109863281 35.35110473632812 1.985065460205078 33.19757461547852 C 2.964054107666016 32.3632926940918 4.155433654785156 31.96680068969727 5.354625701904297 31.96680068969727 Z" stroke="none" fill="#222"/>
  </g>
</svg> */}

                        </Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </OverlayTrigger>
            </SwiperSlide>
            <SwiperSlide>
              <OverlayTrigger
                placement={placement}
                overlay={
                  <Popover
                    className={styles["latest-courses__popover-container"]}
                  >
                    <div
                      className={
                        styles["latest-courses__popover-container__title"]
                      }
                    >
                      أسرار تربية الأطفال
                    </div>
                    <div
                      className={
                        styles["latest-courses__popover-container__learners"]
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.625rem"
                        height="1.125rem"
                        viewBox="0 0 25.715 18"
                      >
                        <path
                          id="students"
                          d="M3.857,39.714a2.571,2.571,0,1,0-2.571-2.571A2.574,2.574,0,0,0,3.857,39.714Zm18,0a2.571,2.571,0,1,0-2.571-2.571A2.574,2.574,0,0,0,21.857,39.714ZM23.143,41H20.571a2.564,2.564,0,0,0-1.812.747,5.877,5.877,0,0,1,3.017,4.4h2.652a1.284,1.284,0,0,0,1.286-1.286V43.571A2.574,2.574,0,0,0,23.143,41ZM12.857,41a4.5,4.5,0,1,0-4.5-4.5A4.5,4.5,0,0,0,12.857,41Zm3.086,1.286h-.333a6.213,6.213,0,0,1-5.5,0H9.771a4.63,4.63,0,0,0-4.629,4.629v1.157A1.929,1.929,0,0,0,7.071,50H18.643a1.929,1.929,0,0,0,1.929-1.929V46.914A4.63,4.63,0,0,0,15.943,42.286Zm-8.988-.538A2.564,2.564,0,0,0,5.143,41H2.571A2.574,2.574,0,0,0,0,43.571v1.286a1.284,1.284,0,0,0,1.286,1.286H3.933a5.892,5.892,0,0,1,3.021-4.4Z"
                          transform="translate(0 -32)"
                          fill="#af151f"
                        />
                      </svg>

                      <span>12930</span>
                      <span>متعلم</span>
                    </div>
                    <div
                      className={
                        styles["latest-courses__popover-container__brief"]
                      }
                    >
                      تقدم لك منصة تدرب الإلكترونية دورة الاستثمار بالأسهم خطوة
                      بخطوة
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn-title"
                        ]
                      }
                    >
                      ماذا ستتعلم في الدورة؟
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn"
                        ]
                      }
                    >
                      <div>

                      <svg className={styles["latest-courses__popover-container__what-you-will-learn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="0.875rem" viewBox="0 0 18.029 14">
  <path id="check_" data-name="check " d="M6.9,14.136a.92.92,0,0,1-1.3,0L.4,8.938a1.38,1.38,0,0,1,0-1.953l.651-.651a1.38,1.38,0,0,1,1.953,0L6.253,9.58,15.022.811a1.38,1.38,0,0,1,1.953,0l.651.651a1.38,1.38,0,0,1,0,1.953Zm0,0" transform="translate(0 -0.406)" fill="#198754"/>
</svg>
                      </div>


                      <span>تعزيز فهم المفاهيم الأساسية للاستثمار</span>
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn"
                        ]
                      }
                    >
                      <div>

                      <svg className={styles["latest-courses__popover-container__what-you-will-learn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="0.875rem" viewBox="0 0 18.029 14">
  <path id="check_" data-name="check " d="M6.9,14.136a.92.92,0,0,1-1.3,0L.4,8.938a1.38,1.38,0,0,1,0-1.953l.651-.651a1.38,1.38,0,0,1,1.953,0L6.253,9.58,15.022.811a1.38,1.38,0,0,1,1.953,0l.651.651a1.38,1.38,0,0,1,0,1.953Zm0,0" transform="translate(0 -0.406)" fill="#198754"/>
</svg>
                      </div>

                      <span>
                        توضيح شامل للفرق بين المضاربة و الاستثمار في الأسهم،
                        وكيفية التفريق بين الشركات
                      </span>
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn"
                        ]
                      }
                    >
                      <div>

                      <svg className={styles["latest-courses__popover-container__what-you-will-learn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="0.875rem" viewBox="0 0 18.029 14">
  <path id="check_" data-name="check " d="M6.9,14.136a.92.92,0,0,1-1.3,0L.4,8.938a1.38,1.38,0,0,1,0-1.953l.651-.651a1.38,1.38,0,0,1,1.953,0L6.253,9.58,15.022.811a1.38,1.38,0,0,1,1.953,0l.651.651a1.38,1.38,0,0,1,0,1.953Zm0,0" transform="translate(0 -0.406)" fill="#198754"/>
</svg>
                      </div>

                      <span>
                        دليل شامل لكيفية تطبيق الاستراتيجيات الحديثة للقيام
                        بالتحليل الأساسي والفني للأسهم
                      </span>
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn"
                        ]
                      }
                    >
                      <div>

                      <svg className={styles["latest-courses__popover-container__what-you-will-learn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="0.875rem" viewBox="0 0 18.029 14">
  <path id="check_" data-name="check " d="M6.9,14.136a.92.92,0,0,1-1.3,0L.4,8.938a1.38,1.38,0,0,1,0-1.953l.651-.651a1.38,1.38,0,0,1,1.953,0L6.253,9.58,15.022.811a1.38,1.38,0,0,1,1.953,0l.651.651a1.38,1.38,0,0,1,0,1.953Zm0,0" transform="translate(0 -0.406)" fill="#198754"/>
</svg>
                      </div>

                      <span>
                        فهم وافي لأسباب وسلبيات العاطفة الاستثمارية، بالإضافة
                        إلى تعلم كيفية اتخاذ القرارات المالية{" "}
                      </span>
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn"
                        ]
                      }
                    >
                      <div>

                      <svg className={styles["latest-courses__popover-container__what-you-will-learn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="0.875rem" viewBox="0 0 18.029 14">
  <path id="check_" data-name="check " d="M6.9,14.136a.92.92,0,0,1-1.3,0L.4,8.938a1.38,1.38,0,0,1,0-1.953l.651-.651a1.38,1.38,0,0,1,1.953,0L6.253,9.58,15.022.811a1.38,1.38,0,0,1,1.953,0l.651.651a1.38,1.38,0,0,1,0,1.953Zm0,0" transform="translate(0 -0.406)" fill="#198754"/>
</svg>
                      </div>

                      <span>
                        فهم وافي لأسباب وسلبيات العاطفة الاستثمارية، بالإضافة
                        إلى تعلم كيفية اتخاذ القرارات المالية{" "}
                      </span>
                    </div>
                  </Popover>
                }
              >
                <Card
                  id="latest-courses-card6"
                  className={
                    styles["latest-courses__cards-carousel__course-card"]
                  }
                >
                  <div
                    className={
                      styles[
                        "latest-courses__cards-carousel__course-card__category-chip"
                      ]
                    }
                  >
                    الفنون
                  </div>
                  <Card.Img
                    variant="top"
                    src="/images/course img.png"
                    alt="course image"
                    className={
                      styles[
                        "latest-courses__cards-carousel__course-card__course-img"
                      ]
                    }
                  />
                  <Card.Body
                    className={
                      styles[
                        "latest-courses__cards-carousel__course-card__card-body"
                      ]
                    }
                  >
                    <div
                      className={
                        styles[
                          "latest-courses__cards-carousel__course-card__card-body__card-header"
                        ]
                      }
                    >
                      <div
                        className={
                          styles[
                            "latest-courses__cards-carousel__course-card__card-body__card-header__trainer-img-box"
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
                            "latest-courses__cards-carousel__course-card__card-body__card-header__course-details"
                          ]
                        }
                      >
                        <div
                          className={
                            styles[
                              "latest-courses__cards-carousel__course-card__card-body__card-header__course-details__title"
                            ]
                          }
                        >
                          إحتراف التصوير بالكاميرا
                        </div>
                        <div
                          className={
                            styles[
                              "latest-courses__cards-carousel__course-card__card-body__card-header__course-details__author"
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
                          "latest-courses__cards-carousel__course-card__card-body__checkout-details"
                        ]
                      }
                    >
                      <div className="d-inline-block">
                        <div
                          className={
                            styles[
                              "latest-courses__cards-carousel__course-card__card-body__checkout-details__price-container"
                            ]
                          }
                        >
                          <span
                            className={
                              styles[
                                "latest-courses__cards-carousel__course-card__card-body__checkout-details__price-container__price"
                              ]
                            }
                          >
                            850
                          </span>
                          <span
                            className={
                              styles[
                                "latest-courses__cards-carousel__course-card__card-body__checkout-details__price-container__currency"
                              ]
                            }
                          >
                            جنية مصري
                          </span>
                        </div>
                        <div
                          className={
                            styles[
                              "latest-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container"
                            ]
                          }
                        >
                          <span
                            className={
                              styles[
                                "latest-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__price"
                              ]
                            }
                          >
                            950
                          </span>
                          <span
                            className={
                              styles[
                                "latest-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__currency"
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
                              "latest-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                            ]
                          }
                        >
                          <img
                            src="/images/add to cart.svg"
                            alt="add to cart icon"
                          />
                          {/* <svg xmlns="http://www.w3.org/2000/svg" width="1.188rem" height="1rem" viewBox="0 0 22 20.135">
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
</svg> */}

                        </Button>
                        <Button
                          className={
                            styles[
                              "latest-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                            ]
                          }
                        >
                          <img
                            src="/images/favourite.svg"
                            alt="favourite icon"
                          />
                          {/* <svg className={styles["latest-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.188rem" height="1rem" viewBox="0 0 20.571 18">
  <g id="favorite" transform="translate(0.012 -31.967)" fill="none">
    <path d="M18.562,33.2a5.494,5.494,0,0,0-7.5.546l-.792.816-.792-.816a5.494,5.494,0,0,0-7.5-.546,5.769,5.769,0,0,0-.4,8.353l7.774,8.028a1.26,1.26,0,0,0,1.82,0l7.774-8.028A5.766,5.766,0,0,0,18.562,33.2Z" stroke="none"/>
    <path d="M 5.35462474822998 33.66680526733398 C 4.504674911499023 33.66680526733398 3.720794677734375 33.95197296142578 3.088695526123047 34.49063491821289 C 2.242284774780273 35.21304321289062 1.746435165405273 36.23271560668945 1.692474365234375 37.36181259155273 C 1.638875961303711 38.48357391357422 2.045904159545898 39.57950592041016 2.80848503112793 40.36787414550781 L 10.27174949645996 48.07412719726562 L 17.7353458404541 40.36752319335938 C 18.49968528747559 39.5787353515625 18.90761566162109 38.48318481445312 18.85453414916992 37.36177444458008 C 18.80109596252441 36.23286437988281 18.30541610717773 35.21321487426758 17.45979499816895 34.49146270751953 C 16.82672500610352 33.95196533203125 16.04329490661621 33.66680526733398 15.19420528411865 33.66680526733398 C 14.12225532531738 33.66680526733398 13.06226539611816 34.12616348266602 12.28523540496826 34.92791366577148 L 10.2737455368042 37.00065231323242 L 8.26032543182373 34.92589569091797 C 7.48636531829834 34.12572479248047 6.427274703979492 33.66680526733398 5.35462474822998 33.66680526733398 M 5.354625701904297 31.96680068969727 C 6.852423667907715 31.96680068969727 8.36213493347168 32.58594131469727 9.482254981994629 33.74399566650391 L 10.27375507354736 34.55960464477539 L 11.06526470184326 33.74399566650391 C 13.08620452880859 31.65876007080078 16.36069488525391 31.32126617431641 18.56244468688965 33.19757461547852 C 21.08560562133789 35.35110473632812 21.21819496154785 39.21621322631836 18.95618438720703 41.55054473876953 L 11.18177509307861 49.57808685302734 C 10.67955589294434 50.09637069702148 9.863945960998535 50.09637451171875 9.361715316772461 49.57808685302734 L 1.587305068969727 41.55054473876953 C -0.670684814453125 39.21621322631836 -0.5381050109863281 35.35110473632812 1.985065460205078 33.19757461547852 C 2.964054107666016 32.3632926940918 4.155433654785156 31.96680068969727 5.354625701904297 31.96680068969727 Z" stroke="none" fill="#222"/>
  </g>
</svg> */}

                        </Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </OverlayTrigger>
            </SwiperSlide>
            <SwiperSlide>
              <OverlayTrigger
                placement={placement}
                overlay={
                  <Popover
                    className={styles["latest-courses__popover-container"]}
                  >
                    <div
                      className={
                        styles["latest-courses__popover-container__title"]
                      }
                    >
                      أسرار تربية الأطفال
                    </div>
                    <div
                      className={
                        styles["latest-courses__popover-container__learners"]
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.625rem"
                        height="1.125rem"
                        viewBox="0 0 25.715 18"
                      >
                        <path
                          id="students"
                          d="M3.857,39.714a2.571,2.571,0,1,0-2.571-2.571A2.574,2.574,0,0,0,3.857,39.714Zm18,0a2.571,2.571,0,1,0-2.571-2.571A2.574,2.574,0,0,0,21.857,39.714ZM23.143,41H20.571a2.564,2.564,0,0,0-1.812.747,5.877,5.877,0,0,1,3.017,4.4h2.652a1.284,1.284,0,0,0,1.286-1.286V43.571A2.574,2.574,0,0,0,23.143,41ZM12.857,41a4.5,4.5,0,1,0-4.5-4.5A4.5,4.5,0,0,0,12.857,41Zm3.086,1.286h-.333a6.213,6.213,0,0,1-5.5,0H9.771a4.63,4.63,0,0,0-4.629,4.629v1.157A1.929,1.929,0,0,0,7.071,50H18.643a1.929,1.929,0,0,0,1.929-1.929V46.914A4.63,4.63,0,0,0,15.943,42.286Zm-8.988-.538A2.564,2.564,0,0,0,5.143,41H2.571A2.574,2.574,0,0,0,0,43.571v1.286a1.284,1.284,0,0,0,1.286,1.286H3.933a5.892,5.892,0,0,1,3.021-4.4Z"
                          transform="translate(0 -32)"
                          fill="#af151f"
                        />
                      </svg>

                      <span>12930</span>
                      <span>متعلم</span>
                    </div>
                    <div
                      className={
                        styles["latest-courses__popover-container__brief"]
                      }
                    >
                      تقدم لك منصة تدرب الإلكترونية دورة الاستثمار بالأسهم خطوة
                      بخطوة
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn-title"
                        ]
                      }
                    >
                      ماذا ستتعلم في الدورة؟
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn"
                        ]
                      }
                    >
                      <div>

                      <svg className={styles["latest-courses__popover-container__what-you-will-learn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="0.875rem" viewBox="0 0 18.029 14">
  <path id="check_" data-name="check " d="M6.9,14.136a.92.92,0,0,1-1.3,0L.4,8.938a1.38,1.38,0,0,1,0-1.953l.651-.651a1.38,1.38,0,0,1,1.953,0L6.253,9.58,15.022.811a1.38,1.38,0,0,1,1.953,0l.651.651a1.38,1.38,0,0,1,0,1.953Zm0,0" transform="translate(0 -0.406)" fill="#198754"/>
</svg>
                      </div>


                      <span>تعزيز فهم المفاهيم الأساسية للاستثمار</span>
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn"
                        ]
                      }
                    >
                      <div>

                      <svg className={styles["latest-courses__popover-container__what-you-will-learn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="0.875rem" viewBox="0 0 18.029 14">
  <path id="check_" data-name="check " d="M6.9,14.136a.92.92,0,0,1-1.3,0L.4,8.938a1.38,1.38,0,0,1,0-1.953l.651-.651a1.38,1.38,0,0,1,1.953,0L6.253,9.58,15.022.811a1.38,1.38,0,0,1,1.953,0l.651.651a1.38,1.38,0,0,1,0,1.953Zm0,0" transform="translate(0 -0.406)" fill="#198754"/>
</svg>
                      </div>

                      <span>
                        توضيح شامل للفرق بين المضاربة و الاستثمار في الأسهم،
                        وكيفية التفريق بين الشركات
                      </span>
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn"
                        ]
                      }
                    >
                      <div>

                      <svg className={styles["latest-courses__popover-container__what-you-will-learn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="0.875rem" viewBox="0 0 18.029 14">
  <path id="check_" data-name="check " d="M6.9,14.136a.92.92,0,0,1-1.3,0L.4,8.938a1.38,1.38,0,0,1,0-1.953l.651-.651a1.38,1.38,0,0,1,1.953,0L6.253,9.58,15.022.811a1.38,1.38,0,0,1,1.953,0l.651.651a1.38,1.38,0,0,1,0,1.953Zm0,0" transform="translate(0 -0.406)" fill="#198754"/>
</svg>
                      </div>

                      <span>
                        دليل شامل لكيفية تطبيق الاستراتيجيات الحديثة للقيام
                        بالتحليل الأساسي والفني للأسهم
                      </span>
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn"
                        ]
                      }
                    >
                      <div>

                      <svg className={styles["latest-courses__popover-container__what-you-will-learn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="0.875rem" viewBox="0 0 18.029 14">
  <path id="check_" data-name="check " d="M6.9,14.136a.92.92,0,0,1-1.3,0L.4,8.938a1.38,1.38,0,0,1,0-1.953l.651-.651a1.38,1.38,0,0,1,1.953,0L6.253,9.58,15.022.811a1.38,1.38,0,0,1,1.953,0l.651.651a1.38,1.38,0,0,1,0,1.953Zm0,0" transform="translate(0 -0.406)" fill="#198754"/>
</svg>
                      </div>

                      <span>
                        فهم وافي لأسباب وسلبيات العاطفة الاستثمارية، بالإضافة
                        إلى تعلم كيفية اتخاذ القرارات المالية{" "}
                      </span>
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn"
                        ]
                      }
                    >
                      <div>

                      <svg className={styles["latest-courses__popover-container__what-you-will-learn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="0.875rem" viewBox="0 0 18.029 14">
  <path id="check_" data-name="check " d="M6.9,14.136a.92.92,0,0,1-1.3,0L.4,8.938a1.38,1.38,0,0,1,0-1.953l.651-.651a1.38,1.38,0,0,1,1.953,0L6.253,9.58,15.022.811a1.38,1.38,0,0,1,1.953,0l.651.651a1.38,1.38,0,0,1,0,1.953Zm0,0" transform="translate(0 -0.406)" fill="#198754"/>
</svg>
                      </div>

                      <span>
                        فهم وافي لأسباب وسلبيات العاطفة الاستثمارية، بالإضافة
                        إلى تعلم كيفية اتخاذ القرارات المالية{" "}
                      </span>
                    </div>
                  </Popover>
                }
              >
                <Card
                  id="latest-courses-card7"
                  className={
                    styles["latest-courses__cards-carousel__course-card"]
                  }
                >
                  <div
                    className={
                      styles[
                        "latest-courses__cards-carousel__course-card__category-chip"
                      ]
                    }
                  >
                    الفنون
                  </div>
                  <Card.Img
                    variant="top"
                    src="/images/course img.png"
                    alt="course image"
                    className={
                      styles[
                        "latest-courses__cards-carousel__course-card__course-img"
                      ]
                    }
                  />
                  <Card.Body
                    className={
                      styles[
                        "latest-courses__cards-carousel__course-card__card-body"
                      ]
                    }
                  >
                    <div
                      className={
                        styles[
                          "latest-courses__cards-carousel__course-card__card-body__card-header"
                        ]
                      }
                    >
                      <div
                        className={
                          styles[
                            "latest-courses__cards-carousel__course-card__card-body__card-header__trainer-img-box"
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
                            "latest-courses__cards-carousel__course-card__card-body__card-header__course-details"
                          ]
                        }
                      >
                        <div
                          className={
                            styles[
                              "latest-courses__cards-carousel__course-card__card-body__card-header__course-details__title"
                            ]
                          }
                        >
                          إحتراف التصوير بالكاميرا
                        </div>
                        <div
                          className={
                            styles[
                              "latest-courses__cards-carousel__course-card__card-body__card-header__course-details__author"
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
                          "latest-courses__cards-carousel__course-card__card-body__checkout-details"
                        ]
                      }
                    >
                      <div className="d-inline-block">
                        <div
                          className={
                            styles[
                              "latest-courses__cards-carousel__course-card__card-body__checkout-details__price-container"
                            ]
                          }
                        >
                          <span
                            className={
                              styles[
                                "latest-courses__cards-carousel__course-card__card-body__checkout-details__price-container__price"
                              ]
                            }
                          >
                            850
                          </span>
                          <span
                            className={
                              styles[
                                "latest-courses__cards-carousel__course-card__card-body__checkout-details__price-container__currency"
                              ]
                            }
                          >
                            جنية مصري
                          </span>
                        </div>
                        <div
                          className={
                            styles[
                              "latest-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container"
                            ]
                          }
                        >
                          <span
                            className={
                              styles[
                                "latest-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__price"
                              ]
                            }
                          >
                            950
                          </span>
                          <span
                            className={
                              styles[
                                "latest-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__currency"
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
                              "latest-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                            ]
                          }
                        >
                          <img
                            src="/images/add to cart.svg"
                            alt="add to cart icon"
                          />
                          {/* <svg xmlns="http://www.w3.org/2000/svg" width="1.188rem" height="1rem" viewBox="0 0 22 20.135">
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
</svg> */}

                        </Button>
                        <Button
                          className={
                            styles[
                              "latest-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                            ]
                          }
                        >
                          <img
                            src="/images/favourite.svg"
                            alt="favourite icon"
                          />
                          {/* <svg className={styles["latest-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.188rem" height="1rem" viewBox="0 0 20.571 18">
  <g id="favorite" transform="translate(0.012 -31.967)" fill="none">
    <path d="M18.562,33.2a5.494,5.494,0,0,0-7.5.546l-.792.816-.792-.816a5.494,5.494,0,0,0-7.5-.546,5.769,5.769,0,0,0-.4,8.353l7.774,8.028a1.26,1.26,0,0,0,1.82,0l7.774-8.028A5.766,5.766,0,0,0,18.562,33.2Z" stroke="none"/>
    <path d="M 5.35462474822998 33.66680526733398 C 4.504674911499023 33.66680526733398 3.720794677734375 33.95197296142578 3.088695526123047 34.49063491821289 C 2.242284774780273 35.21304321289062 1.746435165405273 36.23271560668945 1.692474365234375 37.36181259155273 C 1.638875961303711 38.48357391357422 2.045904159545898 39.57950592041016 2.80848503112793 40.36787414550781 L 10.27174949645996 48.07412719726562 L 17.7353458404541 40.36752319335938 C 18.49968528747559 39.5787353515625 18.90761566162109 38.48318481445312 18.85453414916992 37.36177444458008 C 18.80109596252441 36.23286437988281 18.30541610717773 35.21321487426758 17.45979499816895 34.49146270751953 C 16.82672500610352 33.95196533203125 16.04329490661621 33.66680526733398 15.19420528411865 33.66680526733398 C 14.12225532531738 33.66680526733398 13.06226539611816 34.12616348266602 12.28523540496826 34.92791366577148 L 10.2737455368042 37.00065231323242 L 8.26032543182373 34.92589569091797 C 7.48636531829834 34.12572479248047 6.427274703979492 33.66680526733398 5.35462474822998 33.66680526733398 M 5.354625701904297 31.96680068969727 C 6.852423667907715 31.96680068969727 8.36213493347168 32.58594131469727 9.482254981994629 33.74399566650391 L 10.27375507354736 34.55960464477539 L 11.06526470184326 33.74399566650391 C 13.08620452880859 31.65876007080078 16.36069488525391 31.32126617431641 18.56244468688965 33.19757461547852 C 21.08560562133789 35.35110473632812 21.21819496154785 39.21621322631836 18.95618438720703 41.55054473876953 L 11.18177509307861 49.57808685302734 C 10.67955589294434 50.09637069702148 9.863945960998535 50.09637451171875 9.361715316772461 49.57808685302734 L 1.587305068969727 41.55054473876953 C -0.670684814453125 39.21621322631836 -0.5381050109863281 35.35110473632812 1.985065460205078 33.19757461547852 C 2.964054107666016 32.3632926940918 4.155433654785156 31.96680068969727 5.354625701904297 31.96680068969727 Z" stroke="none" fill="#222"/>
  </g>
</svg> */}

                        </Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </OverlayTrigger>
            </SwiperSlide>
            <SwiperSlide>
              <OverlayTrigger
                placement={placement}
                overlay={
                  <Popover
                    className={styles["latest-courses__popover-container"]}
                  >
                    <div
                      className={
                        styles["latest-courses__popover-container__title"]
                      }
                    >
                      أسرار تربية الأطفال
                    </div>
                    <div
                      className={
                        styles["latest-courses__popover-container__learners"]
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.625rem"
                        height="1.125rem"
                        viewBox="0 0 25.715 18"
                      >
                        <path
                          id="students"
                          d="M3.857,39.714a2.571,2.571,0,1,0-2.571-2.571A2.574,2.574,0,0,0,3.857,39.714Zm18,0a2.571,2.571,0,1,0-2.571-2.571A2.574,2.574,0,0,0,21.857,39.714ZM23.143,41H20.571a2.564,2.564,0,0,0-1.812.747,5.877,5.877,0,0,1,3.017,4.4h2.652a1.284,1.284,0,0,0,1.286-1.286V43.571A2.574,2.574,0,0,0,23.143,41ZM12.857,41a4.5,4.5,0,1,0-4.5-4.5A4.5,4.5,0,0,0,12.857,41Zm3.086,1.286h-.333a6.213,6.213,0,0,1-5.5,0H9.771a4.63,4.63,0,0,0-4.629,4.629v1.157A1.929,1.929,0,0,0,7.071,50H18.643a1.929,1.929,0,0,0,1.929-1.929V46.914A4.63,4.63,0,0,0,15.943,42.286Zm-8.988-.538A2.564,2.564,0,0,0,5.143,41H2.571A2.574,2.574,0,0,0,0,43.571v1.286a1.284,1.284,0,0,0,1.286,1.286H3.933a5.892,5.892,0,0,1,3.021-4.4Z"
                          transform="translate(0 -32)"
                          fill="#af151f"
                        />
                      </svg>

                      <span>12930</span>
                      <span>متعلم</span>
                    </div>
                    <div
                      className={
                        styles["latest-courses__popover-container__brief"]
                      }
                    >
                      تقدم لك منصة تدرب الإلكترونية دورة الاستثمار بالأسهم خطوة
                      بخطوة
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn-title"
                        ]
                      }
                    >
                      ماذا ستتعلم في الدورة؟
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn"
                        ]
                      }
                    >
                      <div>

                      <svg className={styles["latest-courses__popover-container__what-you-will-learn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="0.875rem" viewBox="0 0 18.029 14">
  <path id="check_" data-name="check " d="M6.9,14.136a.92.92,0,0,1-1.3,0L.4,8.938a1.38,1.38,0,0,1,0-1.953l.651-.651a1.38,1.38,0,0,1,1.953,0L6.253,9.58,15.022.811a1.38,1.38,0,0,1,1.953,0l.651.651a1.38,1.38,0,0,1,0,1.953Zm0,0" transform="translate(0 -0.406)" fill="#198754"/>
</svg>
                      </div>


                      <span>تعزيز فهم المفاهيم الأساسية للاستثمار</span>
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn"
                        ]
                      }
                    >
                      <div>

                      <svg className={styles["latest-courses__popover-container__what-you-will-learn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="0.875rem" viewBox="0 0 18.029 14">
  <path id="check_" data-name="check " d="M6.9,14.136a.92.92,0,0,1-1.3,0L.4,8.938a1.38,1.38,0,0,1,0-1.953l.651-.651a1.38,1.38,0,0,1,1.953,0L6.253,9.58,15.022.811a1.38,1.38,0,0,1,1.953,0l.651.651a1.38,1.38,0,0,1,0,1.953Zm0,0" transform="translate(0 -0.406)" fill="#198754"/>
</svg>
                      </div>

                      <span>
                        توضيح شامل للفرق بين المضاربة و الاستثمار في الأسهم،
                        وكيفية التفريق بين الشركات
                      </span>
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn"
                        ]
                      }
                    >
                      <div>

                      <svg className={styles["latest-courses__popover-container__what-you-will-learn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="0.875rem" viewBox="0 0 18.029 14">
  <path id="check_" data-name="check " d="M6.9,14.136a.92.92,0,0,1-1.3,0L.4,8.938a1.38,1.38,0,0,1,0-1.953l.651-.651a1.38,1.38,0,0,1,1.953,0L6.253,9.58,15.022.811a1.38,1.38,0,0,1,1.953,0l.651.651a1.38,1.38,0,0,1,0,1.953Zm0,0" transform="translate(0 -0.406)" fill="#198754"/>
</svg>
                      </div>

                      <span>
                        دليل شامل لكيفية تطبيق الاستراتيجيات الحديثة للقيام
                        بالتحليل الأساسي والفني للأسهم
                      </span>
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn"
                        ]
                      }
                    >
                      <div>

                      <svg className={styles["latest-courses__popover-container__what-you-will-learn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="0.875rem" viewBox="0 0 18.029 14">
  <path id="check_" data-name="check " d="M6.9,14.136a.92.92,0,0,1-1.3,0L.4,8.938a1.38,1.38,0,0,1,0-1.953l.651-.651a1.38,1.38,0,0,1,1.953,0L6.253,9.58,15.022.811a1.38,1.38,0,0,1,1.953,0l.651.651a1.38,1.38,0,0,1,0,1.953Zm0,0" transform="translate(0 -0.406)" fill="#198754"/>
</svg>
                      </div>

                      <span>
                        فهم وافي لأسباب وسلبيات العاطفة الاستثمارية، بالإضافة
                        إلى تعلم كيفية اتخاذ القرارات المالية{" "}
                      </span>
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn"
                        ]
                      }
                    >
                      <div>

                      <svg className={styles["latest-courses__popover-container__what-you-will-learn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="0.875rem" viewBox="0 0 18.029 14">
  <path id="check_" data-name="check " d="M6.9,14.136a.92.92,0,0,1-1.3,0L.4,8.938a1.38,1.38,0,0,1,0-1.953l.651-.651a1.38,1.38,0,0,1,1.953,0L6.253,9.58,15.022.811a1.38,1.38,0,0,1,1.953,0l.651.651a1.38,1.38,0,0,1,0,1.953Zm0,0" transform="translate(0 -0.406)" fill="#198754"/>
</svg>
                      </div>

                      <span>
                        فهم وافي لأسباب وسلبيات العاطفة الاستثمارية، بالإضافة
                        إلى تعلم كيفية اتخاذ القرارات المالية{" "}
                      </span>
                    </div>
                  </Popover>
                }
              >
                <Card
                  id="latest-courses-card8"
                  className={
                    styles["latest-courses__cards-carousel__course-card"]
                  }
                >
                  <div
                    className={
                      styles[
                        "latest-courses__cards-carousel__course-card__category-chip"
                      ]
                    }
                  >
                    الفنون
                  </div>
                  <Card.Img
                    variant="top"
                    src="/images/course img.png"
                    alt="course image"
                    className={
                      styles[
                        "latest-courses__cards-carousel__course-card__course-img"
                      ]
                    }
                  />
                  <Card.Body
                    className={
                      styles[
                        "latest-courses__cards-carousel__course-card__card-body"
                      ]
                    }
                  >
                    <div
                      className={
                        styles[
                          "latest-courses__cards-carousel__course-card__card-body__card-header"
                        ]
                      }
                    >
                      <div
                        className={
                          styles[
                            "latest-courses__cards-carousel__course-card__card-body__card-header__trainer-img-box"
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
                            "latest-courses__cards-carousel__course-card__card-body__card-header__course-details"
                          ]
                        }
                      >
                        <div
                          className={
                            styles[
                              "latest-courses__cards-carousel__course-card__card-body__card-header__course-details__title"
                            ]
                          }
                        >
                          إحتراف التصوير بالكاميرا
                        </div>
                        <div
                          className={
                            styles[
                              "latest-courses__cards-carousel__course-card__card-body__card-header__course-details__author"
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
                          "latest-courses__cards-carousel__course-card__card-body__checkout-details"
                        ]
                      }
                    >
                      <div className="d-inline-block">
                        <div
                          className={
                            styles[
                              "latest-courses__cards-carousel__course-card__card-body__checkout-details__price-container"
                            ]
                          }
                        >
                          <span
                            className={
                              styles[
                                "latest-courses__cards-carousel__course-card__card-body__checkout-details__price-container__price"
                              ]
                            }
                          >
                            850
                          </span>
                          <span
                            className={
                              styles[
                                "latest-courses__cards-carousel__course-card__card-body__checkout-details__price-container__currency"
                              ]
                            }
                          >
                            جنية مصري
                          </span>
                        </div>
                        <div
                          className={
                            styles[
                              "latest-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container"
                            ]
                          }
                        >
                          <span
                            className={
                              styles[
                                "latest-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__price"
                              ]
                            }
                          >
                            950
                          </span>
                          <span
                            className={
                              styles[
                                "latest-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__currency"
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
                              "latest-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                            ]
                          }
                        >
                          <img
                            src="/images/add to cart.svg"
                            alt="add to cart icon"
                          />
                          {/* <svg xmlns="http://www.w3.org/2000/svg" width="1.188rem" height="1rem" viewBox="0 0 22 20.135">
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
</svg> */}

                        </Button>
                        <Button
                          className={
                            styles[
                              "latest-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                            ]
                          }
                        >
                          <img
                            src="/images/favourite.svg"
                            alt="favourite icon"
                          />
                          {/* <svg className={styles["latest-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.188rem" height="1rem" viewBox="0 0 20.571 18">
  <g id="favorite" transform="translate(0.012 -31.967)" fill="none">
    <path d="M18.562,33.2a5.494,5.494,0,0,0-7.5.546l-.792.816-.792-.816a5.494,5.494,0,0,0-7.5-.546,5.769,5.769,0,0,0-.4,8.353l7.774,8.028a1.26,1.26,0,0,0,1.82,0l7.774-8.028A5.766,5.766,0,0,0,18.562,33.2Z" stroke="none"/>
    <path d="M 5.35462474822998 33.66680526733398 C 4.504674911499023 33.66680526733398 3.720794677734375 33.95197296142578 3.088695526123047 34.49063491821289 C 2.242284774780273 35.21304321289062 1.746435165405273 36.23271560668945 1.692474365234375 37.36181259155273 C 1.638875961303711 38.48357391357422 2.045904159545898 39.57950592041016 2.80848503112793 40.36787414550781 L 10.27174949645996 48.07412719726562 L 17.7353458404541 40.36752319335938 C 18.49968528747559 39.5787353515625 18.90761566162109 38.48318481445312 18.85453414916992 37.36177444458008 C 18.80109596252441 36.23286437988281 18.30541610717773 35.21321487426758 17.45979499816895 34.49146270751953 C 16.82672500610352 33.95196533203125 16.04329490661621 33.66680526733398 15.19420528411865 33.66680526733398 C 14.12225532531738 33.66680526733398 13.06226539611816 34.12616348266602 12.28523540496826 34.92791366577148 L 10.2737455368042 37.00065231323242 L 8.26032543182373 34.92589569091797 C 7.48636531829834 34.12572479248047 6.427274703979492 33.66680526733398 5.35462474822998 33.66680526733398 M 5.354625701904297 31.96680068969727 C 6.852423667907715 31.96680068969727 8.36213493347168 32.58594131469727 9.482254981994629 33.74399566650391 L 10.27375507354736 34.55960464477539 L 11.06526470184326 33.74399566650391 C 13.08620452880859 31.65876007080078 16.36069488525391 31.32126617431641 18.56244468688965 33.19757461547852 C 21.08560562133789 35.35110473632812 21.21819496154785 39.21621322631836 18.95618438720703 41.55054473876953 L 11.18177509307861 49.57808685302734 C 10.67955589294434 50.09637069702148 9.863945960998535 50.09637451171875 9.361715316772461 49.57808685302734 L 1.587305068969727 41.55054473876953 C -0.670684814453125 39.21621322631836 -0.5381050109863281 35.35110473632812 1.985065460205078 33.19757461547852 C 2.964054107666016 32.3632926940918 4.155433654785156 31.96680068969727 5.354625701904297 31.96680068969727 Z" stroke="none" fill="#222"/>
  </g>
</svg> */}

                        </Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </OverlayTrigger>
            </SwiperSlide>
            <SwiperSlide>
              <OverlayTrigger
                placement={placement}
                overlay={
                  <Popover
                    className={styles["latest-courses__popover-container"]}
                  >
                    <div
                      className={
                        styles["latest-courses__popover-container__title"]
                      }
                    >
                      أسرار تربية الأطفال
                    </div>
                    <div
                      className={
                        styles["latest-courses__popover-container__learners"]
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.625rem"
                        height="1.125rem"
                        viewBox="0 0 25.715 18"
                      >
                        <path
                          id="students"
                          d="M3.857,39.714a2.571,2.571,0,1,0-2.571-2.571A2.574,2.574,0,0,0,3.857,39.714Zm18,0a2.571,2.571,0,1,0-2.571-2.571A2.574,2.574,0,0,0,21.857,39.714ZM23.143,41H20.571a2.564,2.564,0,0,0-1.812.747,5.877,5.877,0,0,1,3.017,4.4h2.652a1.284,1.284,0,0,0,1.286-1.286V43.571A2.574,2.574,0,0,0,23.143,41ZM12.857,41a4.5,4.5,0,1,0-4.5-4.5A4.5,4.5,0,0,0,12.857,41Zm3.086,1.286h-.333a6.213,6.213,0,0,1-5.5,0H9.771a4.63,4.63,0,0,0-4.629,4.629v1.157A1.929,1.929,0,0,0,7.071,50H18.643a1.929,1.929,0,0,0,1.929-1.929V46.914A4.63,4.63,0,0,0,15.943,42.286Zm-8.988-.538A2.564,2.564,0,0,0,5.143,41H2.571A2.574,2.574,0,0,0,0,43.571v1.286a1.284,1.284,0,0,0,1.286,1.286H3.933a5.892,5.892,0,0,1,3.021-4.4Z"
                          transform="translate(0 -32)"
                          fill="#af151f"
                        />
                      </svg>

                      <span>12930</span>
                      <span>متعلم</span>
                    </div>
                    <div
                      className={
                        styles["latest-courses__popover-container__brief"]
                      }
                    >
                      تقدم لك منصة تدرب الإلكترونية دورة الاستثمار بالأسهم خطوة
                      بخطوة
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn-title"
                        ]
                      }
                    >
                      ماذا ستتعلم في الدورة؟
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn"
                        ]
                      }
                    >
                      <div>

                      <svg className={styles["latest-courses__popover-container__what-you-will-learn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="0.875rem" viewBox="0 0 18.029 14">
  <path id="check_" data-name="check " d="M6.9,14.136a.92.92,0,0,1-1.3,0L.4,8.938a1.38,1.38,0,0,1,0-1.953l.651-.651a1.38,1.38,0,0,1,1.953,0L6.253,9.58,15.022.811a1.38,1.38,0,0,1,1.953,0l.651.651a1.38,1.38,0,0,1,0,1.953Zm0,0" transform="translate(0 -0.406)" fill="#198754"/>
</svg>
                      </div>


                      <span>تعزيز فهم المفاهيم الأساسية للاستثمار</span>
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn"
                        ]
                      }
                    >
                      <div>

                      <svg className={styles["latest-courses__popover-container__what-you-will-learn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="0.875rem" viewBox="0 0 18.029 14">
  <path id="check_" data-name="check " d="M6.9,14.136a.92.92,0,0,1-1.3,0L.4,8.938a1.38,1.38,0,0,1,0-1.953l.651-.651a1.38,1.38,0,0,1,1.953,0L6.253,9.58,15.022.811a1.38,1.38,0,0,1,1.953,0l.651.651a1.38,1.38,0,0,1,0,1.953Zm0,0" transform="translate(0 -0.406)" fill="#198754"/>
</svg>
                      </div>

                      <span>
                        توضيح شامل للفرق بين المضاربة و الاستثمار في الأسهم،
                        وكيفية التفريق بين الشركات
                      </span>
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn"
                        ]
                      }
                    >
                      <div>

                      <svg className={styles["latest-courses__popover-container__what-you-will-learn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="0.875rem" viewBox="0 0 18.029 14">
  <path id="check_" data-name="check " d="M6.9,14.136a.92.92,0,0,1-1.3,0L.4,8.938a1.38,1.38,0,0,1,0-1.953l.651-.651a1.38,1.38,0,0,1,1.953,0L6.253,9.58,15.022.811a1.38,1.38,0,0,1,1.953,0l.651.651a1.38,1.38,0,0,1,0,1.953Zm0,0" transform="translate(0 -0.406)" fill="#198754"/>
</svg>
                      </div>

                      <span>
                        دليل شامل لكيفية تطبيق الاستراتيجيات الحديثة للقيام
                        بالتحليل الأساسي والفني للأسهم
                      </span>
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn"
                        ]
                      }
                    >
                      <div>

                      <svg className={styles["latest-courses__popover-container__what-you-will-learn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="0.875rem" viewBox="0 0 18.029 14">
  <path id="check_" data-name="check " d="M6.9,14.136a.92.92,0,0,1-1.3,0L.4,8.938a1.38,1.38,0,0,1,0-1.953l.651-.651a1.38,1.38,0,0,1,1.953,0L6.253,9.58,15.022.811a1.38,1.38,0,0,1,1.953,0l.651.651a1.38,1.38,0,0,1,0,1.953Zm0,0" transform="translate(0 -0.406)" fill="#198754"/>
</svg>
                      </div>

                      <span>
                        فهم وافي لأسباب وسلبيات العاطفة الاستثمارية، بالإضافة
                        إلى تعلم كيفية اتخاذ القرارات المالية{" "}
                      </span>
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn"
                        ]
                      }
                    >
                      <div>

                      <svg className={styles["latest-courses__popover-container__what-you-will-learn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="0.875rem" viewBox="0 0 18.029 14">
  <path id="check_" data-name="check " d="M6.9,14.136a.92.92,0,0,1-1.3,0L.4,8.938a1.38,1.38,0,0,1,0-1.953l.651-.651a1.38,1.38,0,0,1,1.953,0L6.253,9.58,15.022.811a1.38,1.38,0,0,1,1.953,0l.651.651a1.38,1.38,0,0,1,0,1.953Zm0,0" transform="translate(0 -0.406)" fill="#198754"/>
</svg>
                      </div>

                      <span>
                        فهم وافي لأسباب وسلبيات العاطفة الاستثمارية، بالإضافة
                        إلى تعلم كيفية اتخاذ القرارات المالية{" "}
                      </span>
                    </div>
                  </Popover>
                }
              >
                <Card
                  id="latest-courses-card9"
                  className={
                    styles["latest-courses__cards-carousel__course-card"]
                  }
                >
                  <div
                    className={
                      styles[
                        "latest-courses__cards-carousel__course-card__category-chip"
                      ]
                    }
                  >
                    الفنون
                  </div>
                  <Card.Img
                    variant="top"
                    src="/images/course img.png"
                    alt="course image"
                    className={
                      styles[
                        "latest-courses__cards-carousel__course-card__course-img"
                      ]
                    }
                  />
                  <Card.Body
                    className={
                      styles[
                        "latest-courses__cards-carousel__course-card__card-body"
                      ]
                    }
                  >
                    <div
                      className={
                        styles[
                          "latest-courses__cards-carousel__course-card__card-body__card-header"
                        ]
                      }
                    >
                      <div
                        className={
                          styles[
                            "latest-courses__cards-carousel__course-card__card-body__card-header__trainer-img-box"
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
                            "latest-courses__cards-carousel__course-card__card-body__card-header__course-details"
                          ]
                        }
                      >
                        <div
                          className={
                            styles[
                              "latest-courses__cards-carousel__course-card__card-body__card-header__course-details__title"
                            ]
                          }
                        >
                          إحتراف التصوير بالكاميرا
                        </div>
                        <div
                          className={
                            styles[
                              "latest-courses__cards-carousel__course-card__card-body__card-header__course-details__author"
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
                          "latest-courses__cards-carousel__course-card__card-body__checkout-details"
                        ]
                      }
                    >
                      <div className="d-inline-block">
                        <div
                          className={
                            styles[
                              "latest-courses__cards-carousel__course-card__card-body__checkout-details__price-container"
                            ]
                          }
                        >
                          <span
                            className={
                              styles[
                                "latest-courses__cards-carousel__course-card__card-body__checkout-details__price-container__price"
                              ]
                            }
                          >
                            850
                          </span>
                          <span
                            className={
                              styles[
                                "latest-courses__cards-carousel__course-card__card-body__checkout-details__price-container__currency"
                              ]
                            }
                          >
                            جنية مصري
                          </span>
                        </div>
                        <div
                          className={
                            styles[
                              "latest-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container"
                            ]
                          }
                        >
                          <span
                            className={
                              styles[
                                "latest-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__price"
                              ]
                            }
                          >
                            950
                          </span>
                          <span
                            className={
                              styles[
                                "latest-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__currency"
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
                              "latest-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                            ]
                          }
                        >
                          <img
                            src="/images/add to cart.svg"
                            alt="add to cart icon"
                          />
                          {/* <svg xmlns="http://www.w3.org/2000/svg" width="1.188rem" height="1rem" viewBox="0 0 22 20.135">
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
</svg> */}

                        </Button>
                        <Button
                          className={
                            styles[
                              "latest-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                            ]
                          }
                        >
                          <img
                            src="/images/favourite.svg"
                            alt="favourite icon"
                          />
                          {/* <svg className={styles["latest-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.188rem" height="1rem" viewBox="0 0 20.571 18">
  <g id="favorite" transform="translate(0.012 -31.967)" fill="none">
    <path d="M18.562,33.2a5.494,5.494,0,0,0-7.5.546l-.792.816-.792-.816a5.494,5.494,0,0,0-7.5-.546,5.769,5.769,0,0,0-.4,8.353l7.774,8.028a1.26,1.26,0,0,0,1.82,0l7.774-8.028A5.766,5.766,0,0,0,18.562,33.2Z" stroke="none"/>
    <path d="M 5.35462474822998 33.66680526733398 C 4.504674911499023 33.66680526733398 3.720794677734375 33.95197296142578 3.088695526123047 34.49063491821289 C 2.242284774780273 35.21304321289062 1.746435165405273 36.23271560668945 1.692474365234375 37.36181259155273 C 1.638875961303711 38.48357391357422 2.045904159545898 39.57950592041016 2.80848503112793 40.36787414550781 L 10.27174949645996 48.07412719726562 L 17.7353458404541 40.36752319335938 C 18.49968528747559 39.5787353515625 18.90761566162109 38.48318481445312 18.85453414916992 37.36177444458008 C 18.80109596252441 36.23286437988281 18.30541610717773 35.21321487426758 17.45979499816895 34.49146270751953 C 16.82672500610352 33.95196533203125 16.04329490661621 33.66680526733398 15.19420528411865 33.66680526733398 C 14.12225532531738 33.66680526733398 13.06226539611816 34.12616348266602 12.28523540496826 34.92791366577148 L 10.2737455368042 37.00065231323242 L 8.26032543182373 34.92589569091797 C 7.48636531829834 34.12572479248047 6.427274703979492 33.66680526733398 5.35462474822998 33.66680526733398 M 5.354625701904297 31.96680068969727 C 6.852423667907715 31.96680068969727 8.36213493347168 32.58594131469727 9.482254981994629 33.74399566650391 L 10.27375507354736 34.55960464477539 L 11.06526470184326 33.74399566650391 C 13.08620452880859 31.65876007080078 16.36069488525391 31.32126617431641 18.56244468688965 33.19757461547852 C 21.08560562133789 35.35110473632812 21.21819496154785 39.21621322631836 18.95618438720703 41.55054473876953 L 11.18177509307861 49.57808685302734 C 10.67955589294434 50.09637069702148 9.863945960998535 50.09637451171875 9.361715316772461 49.57808685302734 L 1.587305068969727 41.55054473876953 C -0.670684814453125 39.21621322631836 -0.5381050109863281 35.35110473632812 1.985065460205078 33.19757461547852 C 2.964054107666016 32.3632926940918 4.155433654785156 31.96680068969727 5.354625701904297 31.96680068969727 Z" stroke="none" fill="#222"/>
  </g>
</svg> */}

                        </Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </OverlayTrigger>
            </SwiperSlide>
            <SwiperSlide>
              <OverlayTrigger
                placement={placement}
                overlay={
                  <Popover
                    className={styles["latest-courses__popover-container"]}
                  >
                    <div
                      className={
                        styles["latest-courses__popover-container__title"]
                      }
                    >
                      أسرار تربية الأطفال
                    </div>
                    <div
                      className={
                        styles["latest-courses__popover-container__learners"]
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.625rem"
                        height="1.125rem"
                        viewBox="0 0 25.715 18"
                      >
                        <path
                          id="students"
                          d="M3.857,39.714a2.571,2.571,0,1,0-2.571-2.571A2.574,2.574,0,0,0,3.857,39.714Zm18,0a2.571,2.571,0,1,0-2.571-2.571A2.574,2.574,0,0,0,21.857,39.714ZM23.143,41H20.571a2.564,2.564,0,0,0-1.812.747,5.877,5.877,0,0,1,3.017,4.4h2.652a1.284,1.284,0,0,0,1.286-1.286V43.571A2.574,2.574,0,0,0,23.143,41ZM12.857,41a4.5,4.5,0,1,0-4.5-4.5A4.5,4.5,0,0,0,12.857,41Zm3.086,1.286h-.333a6.213,6.213,0,0,1-5.5,0H9.771a4.63,4.63,0,0,0-4.629,4.629v1.157A1.929,1.929,0,0,0,7.071,50H18.643a1.929,1.929,0,0,0,1.929-1.929V46.914A4.63,4.63,0,0,0,15.943,42.286Zm-8.988-.538A2.564,2.564,0,0,0,5.143,41H2.571A2.574,2.574,0,0,0,0,43.571v1.286a1.284,1.284,0,0,0,1.286,1.286H3.933a5.892,5.892,0,0,1,3.021-4.4Z"
                          transform="translate(0 -32)"
                          fill="#af151f"
                        />
                      </svg>

                      <span>12930</span>
                      <span>متعلم</span>
                    </div>
                    <div
                      className={
                        styles["latest-courses__popover-container__brief"]
                      }
                    >
                      تقدم لك منصة تدرب الإلكترونية دورة الاستثمار بالأسهم خطوة
                      بخطوة
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn-title"
                        ]
                      }
                    >
                      ماذا ستتعلم في الدورة؟
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn"
                        ]
                      }
                    >
                      <div>

                      <svg className={styles["latest-courses__popover-container__what-you-will-learn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="0.875rem" viewBox="0 0 18.029 14">
  <path id="check_" data-name="check " d="M6.9,14.136a.92.92,0,0,1-1.3,0L.4,8.938a1.38,1.38,0,0,1,0-1.953l.651-.651a1.38,1.38,0,0,1,1.953,0L6.253,9.58,15.022.811a1.38,1.38,0,0,1,1.953,0l.651.651a1.38,1.38,0,0,1,0,1.953Zm0,0" transform="translate(0 -0.406)" fill="#198754"/>
</svg>
                      </div>


                      <span>تعزيز فهم المفاهيم الأساسية للاستثمار</span>
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn"
                        ]
                      }
                    >
                      <div>

                      <svg className={styles["latest-courses__popover-container__what-you-will-learn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="0.875rem" viewBox="0 0 18.029 14">
  <path id="check_" data-name="check " d="M6.9,14.136a.92.92,0,0,1-1.3,0L.4,8.938a1.38,1.38,0,0,1,0-1.953l.651-.651a1.38,1.38,0,0,1,1.953,0L6.253,9.58,15.022.811a1.38,1.38,0,0,1,1.953,0l.651.651a1.38,1.38,0,0,1,0,1.953Zm0,0" transform="translate(0 -0.406)" fill="#198754"/>
</svg>
                      </div>

                      <span>
                        توضيح شامل للفرق بين المضاربة و الاستثمار في الأسهم،
                        وكيفية التفريق بين الشركات
                      </span>
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn"
                        ]
                      }
                    >
                      <div>

                      <svg className={styles["latest-courses__popover-container__what-you-will-learn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="0.875rem" viewBox="0 0 18.029 14">
  <path id="check_" data-name="check " d="M6.9,14.136a.92.92,0,0,1-1.3,0L.4,8.938a1.38,1.38,0,0,1,0-1.953l.651-.651a1.38,1.38,0,0,1,1.953,0L6.253,9.58,15.022.811a1.38,1.38,0,0,1,1.953,0l.651.651a1.38,1.38,0,0,1,0,1.953Zm0,0" transform="translate(0 -0.406)" fill="#198754"/>
</svg>
                      </div>

                      <span>
                        دليل شامل لكيفية تطبيق الاستراتيجيات الحديثة للقيام
                        بالتحليل الأساسي والفني للأسهم
                      </span>
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn"
                        ]
                      }
                    >
                      <div>

                      <svg className={styles["latest-courses__popover-container__what-you-will-learn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="0.875rem" viewBox="0 0 18.029 14">
  <path id="check_" data-name="check " d="M6.9,14.136a.92.92,0,0,1-1.3,0L.4,8.938a1.38,1.38,0,0,1,0-1.953l.651-.651a1.38,1.38,0,0,1,1.953,0L6.253,9.58,15.022.811a1.38,1.38,0,0,1,1.953,0l.651.651a1.38,1.38,0,0,1,0,1.953Zm0,0" transform="translate(0 -0.406)" fill="#198754"/>
</svg>
                      </div>

                      <span>
                        فهم وافي لأسباب وسلبيات العاطفة الاستثمارية، بالإضافة
                        إلى تعلم كيفية اتخاذ القرارات المالية{" "}
                      </span>
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn"
                        ]
                      }
                    >
                      <div>

                      <svg className={styles["latest-courses__popover-container__what-you-will-learn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="0.875rem" viewBox="0 0 18.029 14">
  <path id="check_" data-name="check " d="M6.9,14.136a.92.92,0,0,1-1.3,0L.4,8.938a1.38,1.38,0,0,1,0-1.953l.651-.651a1.38,1.38,0,0,1,1.953,0L6.253,9.58,15.022.811a1.38,1.38,0,0,1,1.953,0l.651.651a1.38,1.38,0,0,1,0,1.953Zm0,0" transform="translate(0 -0.406)" fill="#198754"/>
</svg>
                      </div>

                      <span>
                        فهم وافي لأسباب وسلبيات العاطفة الاستثمارية، بالإضافة
                        إلى تعلم كيفية اتخاذ القرارات المالية{" "}
                      </span>
                    </div>
                  </Popover>
                }
              >
                <Card
                  id="latest-courses-card10"
                  className={
                    styles["latest-courses__cards-carousel__course-card"]
                  }
                >
                  <div
                    className={
                      styles[
                        "latest-courses__cards-carousel__course-card__category-chip"
                      ]
                    }
                  >
                    الفنون
                  </div>
                  <Card.Img
                    variant="top"
                    src="/images/course img.png"
                    alt="course image"
                    className={
                      styles[
                        "latest-courses__cards-carousel__course-card__course-img"
                      ]
                    }
                  />
                  <Card.Body
                    className={
                      styles[
                        "latest-courses__cards-carousel__course-card__card-body"
                      ]
                    }
                  >
                    <div
                      className={
                        styles[
                          "latest-courses__cards-carousel__course-card__card-body__card-header"
                        ]
                      }
                    >
                      <div
                        className={
                          styles[
                            "latest-courses__cards-carousel__course-card__card-body__card-header__trainer-img-box"
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
                            "latest-courses__cards-carousel__course-card__card-body__card-header__course-details"
                          ]
                        }
                      >
                        <div
                          className={
                            styles[
                              "latest-courses__cards-carousel__course-card__card-body__card-header__course-details__title"
                            ]
                          }
                        >
                          إحتراف التصوير بالكاميرا
                        </div>
                        <div
                          className={
                            styles[
                              "latest-courses__cards-carousel__course-card__card-body__card-header__course-details__author"
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
                          "latest-courses__cards-carousel__course-card__card-body__checkout-details"
                        ]
                      }
                    >
                      <div className="d-inline-block">
                        <div
                          className={
                            styles[
                              "latest-courses__cards-carousel__course-card__card-body__checkout-details__price-container"
                            ]
                          }
                        >
                          <span
                            className={
                              styles[
                                "latest-courses__cards-carousel__course-card__card-body__checkout-details__price-container__price"
                              ]
                            }
                          >
                            850
                          </span>
                          <span
                            className={
                              styles[
                                "latest-courses__cards-carousel__course-card__card-body__checkout-details__price-container__currency"
                              ]
                            }
                          >
                            جنية مصري
                          </span>
                        </div>
                        <div
                          className={
                            styles[
                              "latest-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container"
                            ]
                          }
                        >
                          <span
                            className={
                              styles[
                                "latest-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__price"
                              ]
                            }
                          >
                            950
                          </span>
                          <span
                            className={
                              styles[
                                "latest-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__currency"
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
                              "latest-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                            ]
                          }
                        >
                          <img
                            src="/images/add to cart.svg"
                            alt="add to cart icon"
                          />
                          {/* <svg xmlns="http://www.w3.org/2000/svg" width="1.188rem" height="1rem" viewBox="0 0 22 20.135">
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
</svg> */}

                        </Button>
                        <Button
                          className={
                            styles[
                              "latest-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                            ]
                          }
                        >
                          <img
                            src="/images/favourite.svg"
                            alt="favourite icon"
                          />
                          {/* <svg className={styles["latest-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.188rem" height="1rem" viewBox="0 0 20.571 18">
  <g id="favorite" transform="translate(0.012 -31.967)" fill="none">
    <path d="M18.562,33.2a5.494,5.494,0,0,0-7.5.546l-.792.816-.792-.816a5.494,5.494,0,0,0-7.5-.546,5.769,5.769,0,0,0-.4,8.353l7.774,8.028a1.26,1.26,0,0,0,1.82,0l7.774-8.028A5.766,5.766,0,0,0,18.562,33.2Z" stroke="none"/>
    <path d="M 5.35462474822998 33.66680526733398 C 4.504674911499023 33.66680526733398 3.720794677734375 33.95197296142578 3.088695526123047 34.49063491821289 C 2.242284774780273 35.21304321289062 1.746435165405273 36.23271560668945 1.692474365234375 37.36181259155273 C 1.638875961303711 38.48357391357422 2.045904159545898 39.57950592041016 2.80848503112793 40.36787414550781 L 10.27174949645996 48.07412719726562 L 17.7353458404541 40.36752319335938 C 18.49968528747559 39.5787353515625 18.90761566162109 38.48318481445312 18.85453414916992 37.36177444458008 C 18.80109596252441 36.23286437988281 18.30541610717773 35.21321487426758 17.45979499816895 34.49146270751953 C 16.82672500610352 33.95196533203125 16.04329490661621 33.66680526733398 15.19420528411865 33.66680526733398 C 14.12225532531738 33.66680526733398 13.06226539611816 34.12616348266602 12.28523540496826 34.92791366577148 L 10.2737455368042 37.00065231323242 L 8.26032543182373 34.92589569091797 C 7.48636531829834 34.12572479248047 6.427274703979492 33.66680526733398 5.35462474822998 33.66680526733398 M 5.354625701904297 31.96680068969727 C 6.852423667907715 31.96680068969727 8.36213493347168 32.58594131469727 9.482254981994629 33.74399566650391 L 10.27375507354736 34.55960464477539 L 11.06526470184326 33.74399566650391 C 13.08620452880859 31.65876007080078 16.36069488525391 31.32126617431641 18.56244468688965 33.19757461547852 C 21.08560562133789 35.35110473632812 21.21819496154785 39.21621322631836 18.95618438720703 41.55054473876953 L 11.18177509307861 49.57808685302734 C 10.67955589294434 50.09637069702148 9.863945960998535 50.09637451171875 9.361715316772461 49.57808685302734 L 1.587305068969727 41.55054473876953 C -0.670684814453125 39.21621322631836 -0.5381050109863281 35.35110473632812 1.985065460205078 33.19757461547852 C 2.964054107666016 32.3632926940918 4.155433654785156 31.96680068969727 5.354625701904297 31.96680068969727 Z" stroke="none" fill="#222"/>
  </g>
</svg> */}

                        </Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </OverlayTrigger>
            </SwiperSlide>
            <SwiperSlide>
              <OverlayTrigger
                placement={placement}
                overlay={
                  <Popover
                    className={styles["latest-courses__popover-container"]}
                  >
                    <div
                      className={
                        styles["latest-courses__popover-container__title"]
                      }
                    >
                      أسرار تربية الأطفال
                    </div>
                    <div
                      className={
                        styles["latest-courses__popover-container__learners"]
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.625rem"
                        height="1.125rem"
                        viewBox="0 0 25.715 18"
                      >
                        <path
                          id="students"
                          d="M3.857,39.714a2.571,2.571,0,1,0-2.571-2.571A2.574,2.574,0,0,0,3.857,39.714Zm18,0a2.571,2.571,0,1,0-2.571-2.571A2.574,2.574,0,0,0,21.857,39.714ZM23.143,41H20.571a2.564,2.564,0,0,0-1.812.747,5.877,5.877,0,0,1,3.017,4.4h2.652a1.284,1.284,0,0,0,1.286-1.286V43.571A2.574,2.574,0,0,0,23.143,41ZM12.857,41a4.5,4.5,0,1,0-4.5-4.5A4.5,4.5,0,0,0,12.857,41Zm3.086,1.286h-.333a6.213,6.213,0,0,1-5.5,0H9.771a4.63,4.63,0,0,0-4.629,4.629v1.157A1.929,1.929,0,0,0,7.071,50H18.643a1.929,1.929,0,0,0,1.929-1.929V46.914A4.63,4.63,0,0,0,15.943,42.286Zm-8.988-.538A2.564,2.564,0,0,0,5.143,41H2.571A2.574,2.574,0,0,0,0,43.571v1.286a1.284,1.284,0,0,0,1.286,1.286H3.933a5.892,5.892,0,0,1,3.021-4.4Z"
                          transform="translate(0 -32)"
                          fill="#af151f"
                        />
                      </svg>

                      <span>12930</span>
                      <span>متعلم</span>
                    </div>
                    <div
                      className={
                        styles["latest-courses__popover-container__brief"]
                      }
                    >
                      تقدم لك منصة تدرب الإلكترونية دورة الاستثمار بالأسهم خطوة
                      بخطوة
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn-title"
                        ]
                      }
                    >
                      ماذا ستتعلم في الدورة؟
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn"
                        ]
                      }
                    >
                      <div>

                      <svg className={styles["latest-courses__popover-container__what-you-will-learn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="0.875rem" viewBox="0 0 18.029 14">
  <path id="check_" data-name="check " d="M6.9,14.136a.92.92,0,0,1-1.3,0L.4,8.938a1.38,1.38,0,0,1,0-1.953l.651-.651a1.38,1.38,0,0,1,1.953,0L6.253,9.58,15.022.811a1.38,1.38,0,0,1,1.953,0l.651.651a1.38,1.38,0,0,1,0,1.953Zm0,0" transform="translate(0 -0.406)" fill="#198754"/>
</svg>
                      </div>


                      <span>تعزيز فهم المفاهيم الأساسية للاستثمار</span>
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn"
                        ]
                      }
                    >
                      <div>

                      <svg className={styles["latest-courses__popover-container__what-you-will-learn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="0.875rem" viewBox="0 0 18.029 14">
  <path id="check_" data-name="check " d="M6.9,14.136a.92.92,0,0,1-1.3,0L.4,8.938a1.38,1.38,0,0,1,0-1.953l.651-.651a1.38,1.38,0,0,1,1.953,0L6.253,9.58,15.022.811a1.38,1.38,0,0,1,1.953,0l.651.651a1.38,1.38,0,0,1,0,1.953Zm0,0" transform="translate(0 -0.406)" fill="#198754"/>
</svg>
                      </div>

                      <span>
                        توضيح شامل للفرق بين المضاربة و الاستثمار في الأسهم،
                        وكيفية التفريق بين الشركات
                      </span>
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn"
                        ]
                      }
                    >
                      <div>

                      <svg className={styles["latest-courses__popover-container__what-you-will-learn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="0.875rem" viewBox="0 0 18.029 14">
  <path id="check_" data-name="check " d="M6.9,14.136a.92.92,0,0,1-1.3,0L.4,8.938a1.38,1.38,0,0,1,0-1.953l.651-.651a1.38,1.38,0,0,1,1.953,0L6.253,9.58,15.022.811a1.38,1.38,0,0,1,1.953,0l.651.651a1.38,1.38,0,0,1,0,1.953Zm0,0" transform="translate(0 -0.406)" fill="#198754"/>
</svg>
                      </div>

                      <span>
                        دليل شامل لكيفية تطبيق الاستراتيجيات الحديثة للقيام
                        بالتحليل الأساسي والفني للأسهم
                      </span>
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn"
                        ]
                      }
                    >
                      <div>

                      <svg className={styles["latest-courses__popover-container__what-you-will-learn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="0.875rem" viewBox="0 0 18.029 14">
  <path id="check_" data-name="check " d="M6.9,14.136a.92.92,0,0,1-1.3,0L.4,8.938a1.38,1.38,0,0,1,0-1.953l.651-.651a1.38,1.38,0,0,1,1.953,0L6.253,9.58,15.022.811a1.38,1.38,0,0,1,1.953,0l.651.651a1.38,1.38,0,0,1,0,1.953Zm0,0" transform="translate(0 -0.406)" fill="#198754"/>
</svg>
                      </div>

                      <span>
                        فهم وافي لأسباب وسلبيات العاطفة الاستثمارية، بالإضافة
                        إلى تعلم كيفية اتخاذ القرارات المالية{" "}
                      </span>
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn"
                        ]
                      }
                    >
                      <div>

                      <svg className={styles["latest-courses__popover-container__what-you-will-learn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="0.875rem" viewBox="0 0 18.029 14">
  <path id="check_" data-name="check " d="M6.9,14.136a.92.92,0,0,1-1.3,0L.4,8.938a1.38,1.38,0,0,1,0-1.953l.651-.651a1.38,1.38,0,0,1,1.953,0L6.253,9.58,15.022.811a1.38,1.38,0,0,1,1.953,0l.651.651a1.38,1.38,0,0,1,0,1.953Zm0,0" transform="translate(0 -0.406)" fill="#198754"/>
</svg>
                      </div>

                      <span>
                        فهم وافي لأسباب وسلبيات العاطفة الاستثمارية، بالإضافة
                        إلى تعلم كيفية اتخاذ القرارات المالية{" "}
                      </span>
                    </div>
                  </Popover>
                }
              >
                <Card
                  id="latest-courses-card11"
                  className={
                    styles["latest-courses__cards-carousel__course-card"]
                  }
                >
                  <div
                    className={
                      styles[
                        "latest-courses__cards-carousel__course-card__category-chip"
                      ]
                    }
                  >
                    الفنون
                  </div>
                  <Card.Img
                    variant="top"
                    src="/images/course img.png"
                    alt="course image"
                    className={
                      styles[
                        "latest-courses__cards-carousel__course-card__course-img"
                      ]
                    }
                  />
                  <Card.Body
                    className={
                      styles[
                        "latest-courses__cards-carousel__course-card__card-body"
                      ]
                    }
                  >
                    <div
                      className={
                        styles[
                          "latest-courses__cards-carousel__course-card__card-body__card-header"
                        ]
                      }
                    >
                      <div
                        className={
                          styles[
                            "latest-courses__cards-carousel__course-card__card-body__card-header__trainer-img-box"
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
                            "latest-courses__cards-carousel__course-card__card-body__card-header__course-details"
                          ]
                        }
                      >
                        <div
                          className={
                            styles[
                              "latest-courses__cards-carousel__course-card__card-body__card-header__course-details__title"
                            ]
                          }
                        >
                          إحتراف التصوير بالكاميرا
                        </div>
                        <div
                          className={
                            styles[
                              "latest-courses__cards-carousel__course-card__card-body__card-header__course-details__author"
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
                          "latest-courses__cards-carousel__course-card__card-body__checkout-details"
                        ]
                      }
                    >
                      <div className="d-inline-block">
                        <div
                          className={
                            styles[
                              "latest-courses__cards-carousel__course-card__card-body__checkout-details__price-container"
                            ]
                          }
                        >
                          <span
                            className={
                              styles[
                                "latest-courses__cards-carousel__course-card__card-body__checkout-details__price-container__price"
                              ]
                            }
                          >
                            850
                          </span>
                          <span
                            className={
                              styles[
                                "latest-courses__cards-carousel__course-card__card-body__checkout-details__price-container__currency"
                              ]
                            }
                          >
                            جنية مصري
                          </span>
                        </div>
                        <div
                          className={
                            styles[
                              "latest-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container"
                            ]
                          }
                        >
                          <span
                            className={
                              styles[
                                "latest-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__price"
                              ]
                            }
                          >
                            950
                          </span>
                          <span
                            className={
                              styles[
                                "latest-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__currency"
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
                              "latest-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                            ]
                          }
                        >
                          <img
                            src="/images/add to cart.svg"
                            alt="add to cart icon"
                          />
                          {/* <svg xmlns="http://www.w3.org/2000/svg" width="1.188rem" height="1rem" viewBox="0 0 22 20.135">
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
</svg> */}

                        </Button>
                        <Button
                          className={
                            styles[
                              "latest-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                            ]
                          }
                        >
                          <img
                            src="/images/favourite.svg"
                            alt="favourite icon"
                          />
                          {/* <svg className={styles["latest-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.188rem" height="1rem" viewBox="0 0 20.571 18">
  <g id="favorite" transform="translate(0.012 -31.967)" fill="none">
    <path d="M18.562,33.2a5.494,5.494,0,0,0-7.5.546l-.792.816-.792-.816a5.494,5.494,0,0,0-7.5-.546,5.769,5.769,0,0,0-.4,8.353l7.774,8.028a1.26,1.26,0,0,0,1.82,0l7.774-8.028A5.766,5.766,0,0,0,18.562,33.2Z" stroke="none"/>
    <path d="M 5.35462474822998 33.66680526733398 C 4.504674911499023 33.66680526733398 3.720794677734375 33.95197296142578 3.088695526123047 34.49063491821289 C 2.242284774780273 35.21304321289062 1.746435165405273 36.23271560668945 1.692474365234375 37.36181259155273 C 1.638875961303711 38.48357391357422 2.045904159545898 39.57950592041016 2.80848503112793 40.36787414550781 L 10.27174949645996 48.07412719726562 L 17.7353458404541 40.36752319335938 C 18.49968528747559 39.5787353515625 18.90761566162109 38.48318481445312 18.85453414916992 37.36177444458008 C 18.80109596252441 36.23286437988281 18.30541610717773 35.21321487426758 17.45979499816895 34.49146270751953 C 16.82672500610352 33.95196533203125 16.04329490661621 33.66680526733398 15.19420528411865 33.66680526733398 C 14.12225532531738 33.66680526733398 13.06226539611816 34.12616348266602 12.28523540496826 34.92791366577148 L 10.2737455368042 37.00065231323242 L 8.26032543182373 34.92589569091797 C 7.48636531829834 34.12572479248047 6.427274703979492 33.66680526733398 5.35462474822998 33.66680526733398 M 5.354625701904297 31.96680068969727 C 6.852423667907715 31.96680068969727 8.36213493347168 32.58594131469727 9.482254981994629 33.74399566650391 L 10.27375507354736 34.55960464477539 L 11.06526470184326 33.74399566650391 C 13.08620452880859 31.65876007080078 16.36069488525391 31.32126617431641 18.56244468688965 33.19757461547852 C 21.08560562133789 35.35110473632812 21.21819496154785 39.21621322631836 18.95618438720703 41.55054473876953 L 11.18177509307861 49.57808685302734 C 10.67955589294434 50.09637069702148 9.863945960998535 50.09637451171875 9.361715316772461 49.57808685302734 L 1.587305068969727 41.55054473876953 C -0.670684814453125 39.21621322631836 -0.5381050109863281 35.35110473632812 1.985065460205078 33.19757461547852 C 2.964054107666016 32.3632926940918 4.155433654785156 31.96680068969727 5.354625701904297 31.96680068969727 Z" stroke="none" fill="#222"/>
  </g>
</svg> */}

                        </Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </OverlayTrigger>
            </SwiperSlide>
            <SwiperSlide>
              <OverlayTrigger
                placement={placement}
                overlay={
                  <Popover
                    className={styles["latest-courses__popover-container"]}
                  >
                    <div
                      className={
                        styles["latest-courses__popover-container__title"]
                      }
                    >
                      أسرار تربية الأطفال
                    </div>
                    <div
                      className={
                        styles["latest-courses__popover-container__learners"]
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.625rem"
                        height="1.125rem"
                        viewBox="0 0 25.715 18"
                      >
                        <path
                          id="students"
                          d="M3.857,39.714a2.571,2.571,0,1,0-2.571-2.571A2.574,2.574,0,0,0,3.857,39.714Zm18,0a2.571,2.571,0,1,0-2.571-2.571A2.574,2.574,0,0,0,21.857,39.714ZM23.143,41H20.571a2.564,2.564,0,0,0-1.812.747,5.877,5.877,0,0,1,3.017,4.4h2.652a1.284,1.284,0,0,0,1.286-1.286V43.571A2.574,2.574,0,0,0,23.143,41ZM12.857,41a4.5,4.5,0,1,0-4.5-4.5A4.5,4.5,0,0,0,12.857,41Zm3.086,1.286h-.333a6.213,6.213,0,0,1-5.5,0H9.771a4.63,4.63,0,0,0-4.629,4.629v1.157A1.929,1.929,0,0,0,7.071,50H18.643a1.929,1.929,0,0,0,1.929-1.929V46.914A4.63,4.63,0,0,0,15.943,42.286Zm-8.988-.538A2.564,2.564,0,0,0,5.143,41H2.571A2.574,2.574,0,0,0,0,43.571v1.286a1.284,1.284,0,0,0,1.286,1.286H3.933a5.892,5.892,0,0,1,3.021-4.4Z"
                          transform="translate(0 -32)"
                          fill="#af151f"
                        />
                      </svg>

                      <span>12930</span>
                      <span>متعلم</span>
                    </div>
                    <div
                      className={
                        styles["latest-courses__popover-container__brief"]
                      }
                    >
                      تقدم لك منصة تدرب الإلكترونية دورة الاستثمار بالأسهم خطوة
                      بخطوة
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn-title"
                        ]
                      }
                    >
                      ماذا ستتعلم في الدورة؟
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn"
                        ]
                      }
                    >
                      <div>

                      <svg className={styles["latest-courses__popover-container__what-you-will-learn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="0.875rem" viewBox="0 0 18.029 14">
  <path id="check_" data-name="check " d="M6.9,14.136a.92.92,0,0,1-1.3,0L.4,8.938a1.38,1.38,0,0,1,0-1.953l.651-.651a1.38,1.38,0,0,1,1.953,0L6.253,9.58,15.022.811a1.38,1.38,0,0,1,1.953,0l.651.651a1.38,1.38,0,0,1,0,1.953Zm0,0" transform="translate(0 -0.406)" fill="#198754"/>
</svg>
                      </div>


                      <span>تعزيز فهم المفاهيم الأساسية للاستثمار</span>
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn"
                        ]
                      }
                    >
                      <div>

                      <svg className={styles["latest-courses__popover-container__what-you-will-learn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="0.875rem" viewBox="0 0 18.029 14">
  <path id="check_" data-name="check " d="M6.9,14.136a.92.92,0,0,1-1.3,0L.4,8.938a1.38,1.38,0,0,1,0-1.953l.651-.651a1.38,1.38,0,0,1,1.953,0L6.253,9.58,15.022.811a1.38,1.38,0,0,1,1.953,0l.651.651a1.38,1.38,0,0,1,0,1.953Zm0,0" transform="translate(0 -0.406)" fill="#198754"/>
</svg>
                      </div>

                      <span>
                        توضيح شامل للفرق بين المضاربة و الاستثمار في الأسهم،
                        وكيفية التفريق بين الشركات
                      </span>
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn"
                        ]
                      }
                    >
                      <div>

                      <svg className={styles["latest-courses__popover-container__what-you-will-learn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="0.875rem" viewBox="0 0 18.029 14">
  <path id="check_" data-name="check " d="M6.9,14.136a.92.92,0,0,1-1.3,0L.4,8.938a1.38,1.38,0,0,1,0-1.953l.651-.651a1.38,1.38,0,0,1,1.953,0L6.253,9.58,15.022.811a1.38,1.38,0,0,1,1.953,0l.651.651a1.38,1.38,0,0,1,0,1.953Zm0,0" transform="translate(0 -0.406)" fill="#198754"/>
</svg>
                      </div>

                      <span>
                        دليل شامل لكيفية تطبيق الاستراتيجيات الحديثة للقيام
                        بالتحليل الأساسي والفني للأسهم
                      </span>
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn"
                        ]
                      }
                    >
                      <div>

                      <svg className={styles["latest-courses__popover-container__what-you-will-learn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="0.875rem" viewBox="0 0 18.029 14">
  <path id="check_" data-name="check " d="M6.9,14.136a.92.92,0,0,1-1.3,0L.4,8.938a1.38,1.38,0,0,1,0-1.953l.651-.651a1.38,1.38,0,0,1,1.953,0L6.253,9.58,15.022.811a1.38,1.38,0,0,1,1.953,0l.651.651a1.38,1.38,0,0,1,0,1.953Zm0,0" transform="translate(0 -0.406)" fill="#198754"/>
</svg>
                      </div>

                      <span>
                        فهم وافي لأسباب وسلبيات العاطفة الاستثمارية، بالإضافة
                        إلى تعلم كيفية اتخاذ القرارات المالية{" "}
                      </span>
                    </div>
                    <div
                      className={
                        styles[
                          "latest-courses__popover-container__what-you-will-learn"
                        ]
                      }
                    >
                      <div>

                      <svg className={styles["latest-courses__popover-container__what-you-will-learn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="0.875rem" viewBox="0 0 18.029 14">
  <path id="check_" data-name="check " d="M6.9,14.136a.92.92,0,0,1-1.3,0L.4,8.938a1.38,1.38,0,0,1,0-1.953l.651-.651a1.38,1.38,0,0,1,1.953,0L6.253,9.58,15.022.811a1.38,1.38,0,0,1,1.953,0l.651.651a1.38,1.38,0,0,1,0,1.953Zm0,0" transform="translate(0 -0.406)" fill="#198754"/>
</svg>
                      </div>

                      <span>
                        فهم وافي لأسباب وسلبيات العاطفة الاستثمارية، بالإضافة
                        إلى تعلم كيفية اتخاذ القرارات المالية{" "}
                      </span>
                    </div>
                  </Popover>
                }
              >
                <Card
                  id="latest-courses-card12"
                  className={
                    styles["latest-courses__cards-carousel__course-card"]
                  }
                >
                  <div
                    className={
                      styles[
                        "latest-courses__cards-carousel__course-card__category-chip"
                      ]
                    }
                  >
                    الفنون
                  </div>
                  <Card.Img
                    variant="top"
                    src="/images/course img.png"
                    alt="course image"
                    className={
                      styles[
                        "latest-courses__cards-carousel__course-card__course-img"
                      ]
                    }
                  />
                  <Card.Body
                    className={
                      styles[
                        "latest-courses__cards-carousel__course-card__card-body"
                      ]
                    }
                  >
                    <div
                      className={
                        styles[
                          "latest-courses__cards-carousel__course-card__card-body__card-header"
                        ]
                      }
                    >
                      <div
                        className={
                          styles[
                            "latest-courses__cards-carousel__course-card__card-body__card-header__trainer-img-box"
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
                            "latest-courses__cards-carousel__course-card__card-body__card-header__course-details"
                          ]
                        }
                      >
                        <div
                          className={
                            styles[
                              "latest-courses__cards-carousel__course-card__card-body__card-header__course-details__title"
                            ]
                          }
                        >
                          إحتراف التصوير بالكاميرا
                        </div>
                        <div
                          className={
                            styles[
                              "latest-courses__cards-carousel__course-card__card-body__card-header__course-details__author"
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
                          "latest-courses__cards-carousel__course-card__card-body__checkout-details"
                        ]
                      }
                    >
                      <div className="d-inline-block">
                        <div
                          className={
                            styles[
                              "latest-courses__cards-carousel__course-card__card-body__checkout-details__price-container"
                            ]
                          }
                        >
                          <span
                            className={
                              styles[
                                "latest-courses__cards-carousel__course-card__card-body__checkout-details__price-container__price"
                              ]
                            }
                          >
                            850
                          </span>
                          <span
                            className={
                              styles[
                                "latest-courses__cards-carousel__course-card__card-body__checkout-details__price-container__currency"
                              ]
                            }
                          >
                            جنية مصري
                          </span>
                        </div>
                        <div
                          className={
                            styles[
                              "latest-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container"
                            ]
                          }
                        >
                          <span
                            className={
                              styles[
                                "latest-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__price"
                              ]
                            }
                          >
                            950
                          </span>
                          <span
                            className={
                              styles[
                                "latest-courses__cards-carousel__course-card__card-body__checkout-details__old-price-container__currency"
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
                              "latest-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                            ]
                          }
                        >
                          <img
                            src="/images/add to cart.svg"
                            alt="add to cart icon"
                          />
                          {/* <svg xmlns="http://www.w3.org/2000/svg" width="1.188rem" height="1rem" viewBox="0 0 22 20.135">
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
</svg> */}

                        </Button>
                        <Button
                          className={
                            styles[
                              "latest-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn"
                            ]
                          }
                        >
                          <img
                            src="/images/favourite.svg"
                            alt="favourite icon"
                          />
                          {/* <svg className={styles["latest-courses__cards-carousel__course-card__card-body__checkout-details__icon-btn__icon"]} xmlns="http://www.w3.org/2000/svg" width="1.188rem" height="1rem" viewBox="0 0 20.571 18">
  <g id="favorite" transform="translate(0.012 -31.967)" fill="none">
    <path d="M18.562,33.2a5.494,5.494,0,0,0-7.5.546l-.792.816-.792-.816a5.494,5.494,0,0,0-7.5-.546,5.769,5.769,0,0,0-.4,8.353l7.774,8.028a1.26,1.26,0,0,0,1.82,0l7.774-8.028A5.766,5.766,0,0,0,18.562,33.2Z" stroke="none"/>
    <path d="M 5.35462474822998 33.66680526733398 C 4.504674911499023 33.66680526733398 3.720794677734375 33.95197296142578 3.088695526123047 34.49063491821289 C 2.242284774780273 35.21304321289062 1.746435165405273 36.23271560668945 1.692474365234375 37.36181259155273 C 1.638875961303711 38.48357391357422 2.045904159545898 39.57950592041016 2.80848503112793 40.36787414550781 L 10.27174949645996 48.07412719726562 L 17.7353458404541 40.36752319335938 C 18.49968528747559 39.5787353515625 18.90761566162109 38.48318481445312 18.85453414916992 37.36177444458008 C 18.80109596252441 36.23286437988281 18.30541610717773 35.21321487426758 17.45979499816895 34.49146270751953 C 16.82672500610352 33.95196533203125 16.04329490661621 33.66680526733398 15.19420528411865 33.66680526733398 C 14.12225532531738 33.66680526733398 13.06226539611816 34.12616348266602 12.28523540496826 34.92791366577148 L 10.2737455368042 37.00065231323242 L 8.26032543182373 34.92589569091797 C 7.48636531829834 34.12572479248047 6.427274703979492 33.66680526733398 5.35462474822998 33.66680526733398 M 5.354625701904297 31.96680068969727 C 6.852423667907715 31.96680068969727 8.36213493347168 32.58594131469727 9.482254981994629 33.74399566650391 L 10.27375507354736 34.55960464477539 L 11.06526470184326 33.74399566650391 C 13.08620452880859 31.65876007080078 16.36069488525391 31.32126617431641 18.56244468688965 33.19757461547852 C 21.08560562133789 35.35110473632812 21.21819496154785 39.21621322631836 18.95618438720703 41.55054473876953 L 11.18177509307861 49.57808685302734 C 10.67955589294434 50.09637069702148 9.863945960998535 50.09637451171875 9.361715316772461 49.57808685302734 L 1.587305068969727 41.55054473876953 C -0.670684814453125 39.21621322631836 -0.5381050109863281 35.35110473632812 1.985065460205078 33.19757461547852 C 2.964054107666016 32.3632926940918 4.155433654785156 31.96680068969727 5.354625701904297 31.96680068969727 Z" stroke="none" fill="#222"/>
  </g>
</svg> */}

                        </Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </OverlayTrigger>
            </SwiperSlide>
          </Swiper>
        </Col>
      </Row>
    </>
  );
}

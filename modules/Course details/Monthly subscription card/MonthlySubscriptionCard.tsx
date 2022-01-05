import React from 'react'
import styles from "./monthly-subscription-card.module.css"
import { Button } from "react-bootstrap";

export default function MonthlySubscriptionCard() {
    return (
        <>
         <div className={styles["monthly-subscription__course-card"]} >
        <h5
         
          className={styles["monthly-subscription__course-card__title"]}
        >
           دورة تعليم الرسم والتلوين 
        </h5>
       

      <div className={styles["monthly-subscription__subscribe-btn-box"]}>
          <Button className={styles["monthly-subscription__subscribe-btn-box__btn"]}>
        <span className={styles["monthly-subscription__subscribe-btn-box__btn__monthly-subscribe"]}> أشترك شهرياً </span>  
          ( 
            <div>
                <span> 200  </span> 
                <span>  SAR  </span>  
            </div>
           ) 

          </Button>
      </div>
      <div className={styles["monthly-subscription__watch-this-course"]}>
      شاهد هذه الدورة + 600 دورة اخرى
      </div>

      <div className={styles["monthly-subscription__or-box"]}>
      أو
      </div>

      <div>
          <div className={styles["monthly-subscription__course-card__price-box"]}>
            <span
              className={
                styles["monthly-subscription__course-card__price-box__price"]
              }
            >
              1600
            </span>
            <span
              className={
                styles["monthly-subscription__course-card__price-box__currency"]
              }
            >
              جنية مصري
            </span>
          </div>
          <div className={styles["monthly-subscription__course-card__old-price-box"]}>
            <div
              className={
                styles[
                  "monthly-subscription__course-card__old-price-box--line-through"
                ]
              }
            >
              <span
                className={
                  styles["monthly-subscription__course-card__old-price-box__price"]
                }
              >
                2800
              </span>
              <span
                className={
                  styles["monthly-subscription__course-card__old-price-box__currency"]
                }
              >
                {" "}
                جنية مصري{" "}
              </span>
            </div>
            <span
              className={
                styles["monthly-subscription__course-card__old-price-box__discount"]
              }
            >
              {" "}
              (خصم 20%){" "}
            </span>
          </div>
        </div>

        <div
          className={styles["monthly-subscription__course-card__actions-btns"]}
        >
          <Button 
            className={
              styles[
                "monthly-subscription__course-card__actions-btns__add-to-cart-btn"
              ]
            }
          >
            <svg
              id="add_to_cart"
              data-name="add to cart"
              xmlns="http://www.w3.org/2000/svg"
              width="1.375rem"
              height="1.2rem"
              viewBox="0 0 22 20.135"
            >
              <g
                id="Group_10771"
                data-name="Group 10771"
                transform="translate(14.676 14.648)"
              >
                <g
                  id="Group_9975"
                  data-name="Group 9975"
                  transform="translate(0 0)"
                >
                  <path
                    id="Path_12759"
                    data-name="Path 12759"
                    d="M344.29,362.612a2.743,2.743,0,1,0,2.743,2.743A2.746,2.746,0,0,0,344.29,362.612Zm0,3.84a1.1,1.1,0,1,1,1.1-1.1A1.1,1.1,0,0,1,344.29,366.452Z"
                    transform="translate(-341.547 -362.612)"
                    fill="#fff"
                  />
                </g>
              </g>
              <g id="Group_10770" data-name="Group 10770">
                <g
                  id="Group_9977"
                  data-name="Group 9977"
                  transform="translate(0 0)"
                >
                  <path
                    id="Path_12760"
                    data-name="Path 12760"
                    d="M21.825,25.751a.822.822,0,0,0-.648-.316H5.08l-.741-3.1a.823.823,0,0,0-.8-.632H.823a.823.823,0,1,0,0,1.646H2.889L5.564,34.542a.823.823,0,0,0,.8.632H19.175a.823.823,0,0,0,.8-.625l2-8.092A.824.824,0,0,0,21.825,25.751Zm-3.294,7.776H7.014L5.473,27.082H20.126Z"
                    transform="translate(0 -21.705)"
                    fill="#fff"
                  />
                </g>
              </g>
              <g
                id="Group_10772"
                data-name="Group 10772"
                transform="translate(4.719 14.648)"
              >
                <g
                  id="Group_9979"
                  data-name="Group 9979"
                  transform="translate(0 0)"
                >
                  <path
                    id="Path_12761"
                    data-name="Path 12761"
                    d="M112.549,362.612a2.743,2.743,0,1,0,2.743,2.743A2.746,2.746,0,0,0,112.549,362.612Zm0,3.84a1.1,1.1,0,1,1,1.1-1.1A1.1,1.1,0,0,1,112.549,366.452Z"
                    transform="translate(-109.806 -362.612)"
                    fill="#fff"
                  />
                </g>
              </g>
            </svg>
            <span>أضف للسلة</span>
          </Button>
          <Button
            className={
              styles["monthly-subscription__course-card__actions-btns__fav-btn"]
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.688rem"
              height="1.5rem"
              viewBox="0 0 27.429 24"
            >
              <g id="favorite" transform="translate(0.012 -31.967)" fill="none">
                <path
                  d="M24.754,33.608a7.326,7.326,0,0,0-10,.729L13.7,35.424l-1.055-1.087a7.325,7.325,0,0,0-10-.729,7.692,7.692,0,0,0-.53,11.137l10.366,10.7a1.679,1.679,0,0,0,2.427,0l10.366-10.7A7.687,7.687,0,0,0,24.754,33.608Z"
                  stroke="none"
                />
                <path
                  d="M 7.143587112426758 33.66680145263672 C 5.873798370361328 33.66680145263672 4.701517105102539 34.09383392333984 3.754478454589844 34.90089416503906 C 2.505697250366211 35.96673202514648 1.774187088012695 37.46976470947266 1.694707870483398 39.13312149047852 C 1.61579704284668 40.78439331054688 2.216358184814453 42.39908218383789 3.341678619384766 43.56245422363281 L 13.69974803924561 54.25777053833008 L 24.05815887451172 43.56210327148438 C 25.18575859069824 42.39845275878906 25.78764724731445 40.78421401977539 25.70949745178223 39.13330459594727 C 25.63076782226562 37.47011184692383 24.89948844909668 35.96701431274414 23.6513671875 34.9017333984375 C 22.70332717895508 34.09383392333984 21.53166770935059 33.66680145263672 20.26298904418945 33.66680145263672 C 18.68126678466797 33.66680145263672 17.11963653564453 34.34209442138672 15.97773742675781 35.52031326293945 L 13.70242786407471 37.86492156982422 L 11.42515754699707 35.51829147338867 C 10.28705787658691 34.34164428710938 8.726478576660156 33.66680145263672 7.143587112426758 33.66680145263672 M 7.143590927124023 31.966796875 C 9.140651702880859 31.966796875 11.15360069274902 32.79232406616211 12.64708805084229 34.33639144897461 L 13.70242786407471 35.42387390136719 L 14.75776767730713 34.33639144897461 C 17.45235824584961 31.55608367919922 21.8183479309082 31.10609436035156 24.75400733947754 33.60783386230469 C 28.11823844909668 36.47921371459961 28.29501724243164 41.63268280029297 25.27899742126465 44.74512481689453 L 14.91311740875244 55.44850158691406 C 14.24348926544189 56.13956451416016 13.15600776672363 56.13956451416016 12.48637771606445 55.44850158691406 L 2.120498657226562 44.74512481689453 C -0.8901615142822266 41.63268280029297 -0.7133827209472656 36.47921371459961 2.650848388671875 33.60783386230469 C 3.95616340637207 32.49545669555664 5.544668197631836 31.966796875 7.143590927124023 31.966796875 Z"
                  stroke="none"
                  fill="#222"
                />
              </g>
            </svg>
          </Button>
          <Button
            className={
              styles["monthly-subscription__course-card__actions-btns__share-btn"]
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.25rem"
              height="1rem"
              viewBox="0 0 20.341 15.644"
            >
              <path
                id="share"
                d="M13.641,16.359l7.147-5.132a1.125,1.125,0,0,0,0-1.937L13.641,4.156a1.12,1.12,0,0,0-1.688.968v2c-2.347,0-9.388,0-10.953,12.517a11.652,11.652,0,0,1,10.953-6.258v2a1.122,1.122,0,0,0,1.688.97Z"
                transform="translate(-1 -4.001)"
              />
            </svg>
          </Button>
        </div>

     
        <div
       
          className={styles["monthly-subscription__course-card__details-list"]}
        >
          <div
            className={
              styles["monthly-subscription__course-card__details-list__item"]
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.25rem"
              height="1.25rem"
              viewBox="0 0 22 22"
            >
              <g id="time" transform="translate(-444 -392)">
                <path
                  id="clock-solid"
                  d="M22.231,21.528h0l-.887,1.109a.71.71,0,0,1-1,.111h0l-2.972-2.205a1.774,1.774,0,0,1-.665-1.385v-6.9a.71.71,0,0,1,.71-.71h1.419a.71.71,0,0,1,.71.71v6.387l2.573,1.885A.71.71,0,0,1,22.231,21.528Z"
                  transform="translate(436.871 384.355)"
                  fill="#c1121f"
                />
                <path
                  id="clock-solid-2"
                  data-name="clock-solid"
                  d="M19,8A11,11,0,1,0,30,19,11,11,0,0,0,19,8Z"
                  transform="translate(436 384)"
                  fill="#c1121f"
                  opacity="0.25"
                />
              </g>
            </svg>

            <span>٨ ساعات تدريبية</span>
          </div>
          <div
            className={
              styles["monthly-subscription__course-card__details-list__item"]
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.25rem"
              height="1.25rem"
              viewBox="0 0 22 23.851"
            >
              <g id="files" transform="translate(-528 -458.66)">
                <rect
                  id="Rectangle_4153"
                  data-name="Rectangle 4153"
                  width="11.124"
                  height="1.186"
                  transform="translate(535.905 466.989)"
                  fill="#b20016"
                />
                <rect
                  id="Rectangle_4154"
                  data-name="Rectangle 4154"
                  width="8.396"
                  height="1.186"
                  transform="translate(538.632 469.952)"
                  fill="#b20016"
                />
                <rect
                  id="Rectangle_4155"
                  data-name="Rectangle 4155"
                  width="6.421"
                  height="1.186"
                  transform="translate(540.607 472.915)"
                  fill="#b20016"
                />
                <path
                  id="Path_15441"
                  data-name="Path 15441"
                  d="M550.044,464.014v13.35a2.07,2.07,0,0,1-2.039,2.078H534.269a2.07,2.07,0,0,1-2.039-2.078V460.738a2.064,2.064,0,0,1,2.039-2.078H544.69Z"
                  transform="translate(-0.044 0)"
                  fill="#b20016"
                  opacity="0.25"
                />
                <path
                  id="Path_15442"
                  data-name="Path 15442"
                  d="M550.174,464.014H544.82V458.66Z"
                  transform="translate(-0.174 0)"
                  fill="#b20016"
                />
                <path
                  id="Path_15443"
                  data-name="Path 15443"
                  d="M545.269,479.485v1.089a1.979,1.979,0,0,1-1.979,1.979H529.979A1.979,1.979,0,0,1,528,480.574V464.739a1.973,1.973,0,0,1,1.979-1.979h2.207v14.647a2.07,2.07,0,0,0,2.039,2.078Z"
                  transform="translate(0 -0.042)"
                  fill="#b20016"
                />
              </g>
            </svg>

            <span>مرفقات حصرية جاهزة للتحميل</span>
          </div>
          <div
            className={
              styles["monthly-subscription__course-card__details-list__item"]
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.25rem"
              height="1.25rem"
              viewBox="0 0 21.254 9.686"
            >
              <g id="infinity" transform="translate(-447.813 -266.913)">
                <g id="infinity-solid">
                  <g id="Path_15426" data-name="Path 15426">
                    <path
                      id="Path_15436"
                      data-name="Path 15436"
                      d="M464.49,266.92h-.53a6.613,6.613,0,0,0-4.77,2.49l-.75.93-.74-.93a6.617,6.617,0,0,0-4.78-2.49,4.842,4.842,0,1,0-.52,9.67,4.506,4.506,0,0,0,.52,0,6.606,6.606,0,0,0,4.78-2.48l.74-.94.75.94a6.567,6.567,0,0,0,4.77,2.48,4.842,4.842,0,1,0,.53-9.67Zm-7.35,5.41c-.73,1-2.25,2.68-4.12,2.7a3.219,3.219,0,0,1-2.35-.67,3.269,3.269,0,0,1-1.26-2.18,3.236,3.236,0,0,1,.66-2.42,3.3,3.3,0,0,1,2.18-1.27,3.22,3.22,0,0,1,.76,0h.05c1.83,0,3.34,1.69,4.08,2.7l.43.57Zm7.51,2.69h-.03a2.69,2.69,0,0,1-.4.03c-.12,0-.24-.01-.36-.02-1.88-.03-3.39-1.7-4.12-2.7l-.41-.57.41-.57c.75-1.01,2.28-2.7,4.17-2.7a3.127,3.127,0,0,1,2.31.67,3.287,3.287,0,0,1-1.57,5.86Z"
                      fill="#c1121f"
                    />
                  </g>
                </g>
                <g
                  id="infinity-solid-2"
                  data-name="infinity-solid"
                  opacity="0.2"
                >
                  <g id="Path_15426-2" data-name="Path 15426">
                    <path
                      id="Path_15437"
                      data-name="Path 15437"
                      d="M469.06,272.02a4.836,4.836,0,0,1-5.1,4.57,6.567,6.567,0,0,1-4.77-2.48l-.75-.94-.74.94a6.606,6.606,0,0,1-4.78,2.48,4.506,4.506,0,0,1-.52,0,4.842,4.842,0,0,1,.52-9.67,6.617,6.617,0,0,1,4.78,2.49l.74.93.75-.93a6.613,6.613,0,0,1,4.77-2.49h.53A4.848,4.848,0,0,1,469.06,272.02Z"
                      fill="#c1121f"
                    />
                  </g>
                </g>
              </g>
            </svg>
            <span>امتلاك الدورة مدى الحياة</span>
          </div>
          <div
            className={
              styles["monthly-subscription__course-card__details-list__item"]
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.25rem"
              height="1.25rem"
              viewBox="0 0 22 15.073"
            >
              <g id="responsive" transform="translate(-199.397 -148.21)">
                <path
                  id="Path_15424"
                  data-name="Path 15424"
                  d="M213.759,152.589l.036,7.487H203.217V149.083h14.776v3.435Z"
                  transform="translate(-0.244 -0.056)"
                  fill="#c1121f"
                  opacity="0.12"
                />
                <path
                  id="Union_8"
                  data-name="Union 8"
                  d="M218.57,151.683h-4.26a1.4,1.4,0,0,0-1.423,1.386V161.9a1.4,1.4,0,0,0,1.4,1.386h4.278a1.409,1.409,0,0,0,1.423-1.386v-8.828A1.4,1.4,0,0,0,218.57,151.683Zm-2.125,10.907a.7.7,0,0,1-.712-.693v-.009a.689.689,0,0,1,.693-.683h.037a.7.7,0,0,1,.693.693A.714.714,0,0,1,216.445,162.59Zm2.135-2.088h-4.26v-7.433h4.26Zm-1.432-12.292h-13.49a1.409,1.409,0,0,0-1.423,1.386v9.034h-1.91a.929.929,0,0,0-.927.927,1.846,1.846,0,0,0,1.854,1.854h11.862v-2.78h-9.456V149.6h13.49v2.331h1.423V149.6A1.4,1.4,0,0,0,217.147,148.21Z"
                  fill="#c1121f"
                />
                <path
                  id="Union_8-2"
                  data-name="Union 8"
                  d="M222.309,159.34h-1.432v2.78h.506a1.846,1.846,0,0,0,1.854-1.854A.929.929,0,0,0,222.309,159.34Z"
                  transform="translate(-1.839 -0.71)"
                  fill="#c1121f"
                />
                <rect
                  id="Rectangle_4156"
                  data-name="Rectangle 4156"
                  width="5.617"
                  height="8.426"
                  transform="translate(213.421 152.424)"
                  fill="#c1121f"
                  opacity="0.35"
                />
              </g>
            </svg>

            <span>المشاهدة من أي موبايل او لابتوب</span>
          </div>
          <div
            className={
              styles["monthly-subscription__course-card__details-list__item"]
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.25rem"
              height="1.25rem"
              viewBox="0 0 22 17.962"
            >
              <g id="certificate" transform="translate(-452.163 -226.188)">
                <g
                  id="Page-1"
                  transform="translate(452.163 226.188)"
                  opacity="0.25"
                >
                  <g id="icon-138-certificate">
                    <path
                      id="certificate-2"
                      data-name="certificate"
                      d="M460.413,241.771h11.913a1.833,1.833,0,0,0,1.838-1.828V228.022a1.835,1.835,0,0,0-1.838-1.834H454a1.833,1.833,0,0,0-1.838,1.828h0v11.922A1.835,1.835,0,0,0,454,241.771h6.412Z"
                      transform="translate(-452.163 -226.188)"
                      fill="#c2121e"
                    />
                  </g>
                </g>
                <rect
                  id="Rectangle_4153"
                  data-name="Rectangle 4153"
                  width="15.97"
                  height="1.198"
                  transform="translate(455.678 230.181)"
                  fill="#c2121e"
                />
                <rect
                  id="Rectangle_4154"
                  data-name="Rectangle 4154"
                  width="8.484"
                  height="1.198"
                  transform="translate(463.164 233.175)"
                  fill="#c2121e"
                />
                <rect
                  id="Rectangle_4155"
                  data-name="Rectangle 4155"
                  width="6.488"
                  height="1.198"
                  transform="translate(465.16 236.169)"
                  fill="#c2121e"
                />
                <g id="Page-1-2" transform="translate(456.642 239.848)">
                  <g id="icon-138-certificate-2">
                    <path
                      id="Path_15435"
                      data-name="Path 15435"
                      d="M459.6,240.08v4.3l-1.477-1.477-1.477,1.477v-4.3a3,3,0,0,0,2.954,0Z"
                      transform="translate(-456.65 -240.08)"
                      fill="#c2121e"
                    />
                  </g>
                </g>
                <path
                  id="certificate-3"
                  d="M457.979,240.166a2.855,2.855,0,1,0-2.855-2.855h0A2.855,2.855,0,0,0,457.979,240.166Z"
                  transform="translate(0.14 -0.68)"
                  fill="#c2121e"
                  opacity="0.4"
                  style={{ mixBlendMode: "normal", isolation: "isolate" }}
                />
              </g>
            </svg>

            <span>شهادة إتمام اون لاين معتمدة</span>
          </div>
        </div>

        <div
          
          className={styles["monthly-subscription__course-card__promo-code"]}
        >
          <span>هل لديك كوبون خصم؟</span>
          <span> ادخل الكوبون </span>
        </div>
      </div>
            
        </>
    )
}

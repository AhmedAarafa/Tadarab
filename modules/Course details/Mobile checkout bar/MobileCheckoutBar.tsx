import React from "react";
import styles from "./mobile-checkout-bar.module.css";
import { Button } from "react-bootstrap";

export default function MobileCheckoutBar() {
  return (
    <>
      <div className={styles["mobile-checkout-bar"]} id="mobile-checkout-bar">
        <div>
          <Button className={styles["mobile-checkout-bar__add-to-cart-btn"]}>
            <svg
              id="add_to_cart"
              data-name="add to cart"
              xmlns="http://www.w3.org/2000/svg"
              width="3.281rem"
              height="2.969rem"
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
        </div>
        <div>
          <div className={styles["mobile-checkout-bar__course-card__price-box"]}>
            <span
              className={
                styles["mobile-checkout-bar__course-card__price-box__price"]
              }
            >
              1600
            </span>
            <span
              className={
                styles["mobile-checkout-bar__course-card__price-box__currency"]
              }
            >
              جنية مصري
            </span>
          </div>
          <div className={styles["mobile-checkout-bar__course-card__old-price-box"]}>
            <div
              className={
                styles[
                  "mobile-checkout-bar__course-card__old-price-box--line-through"
                ]
              }
            >
              <span
                className={
                  styles["mobile-checkout-bar__course-card__old-price-box__price"]
                }
              >
                2800
              </span>
              <span
                className={
                  styles["mobile-checkout-bar__course-card__old-price-box__currency"]
                }
              >
                
                جنية مصري
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

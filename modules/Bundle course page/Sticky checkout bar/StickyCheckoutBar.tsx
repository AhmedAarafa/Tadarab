import React, { memo } from 'react'
import styles from "./sticky-checkout-bar.module.css";
import { Button } from 'react-bootstrap';
import { CartIcon, AddedToCartIcon } from 'common/Icons/Icons';

function StickyCheckoutBar() {


      
    return (
        <div className={styles["sticky-checkout-bar"]}>
            <Button>
                <CartIcon color='#f5f5f5' />
                <span>
                    اشتري الباقة
                </span>
            </Button>

            <div className={styles["sticky-checkout-bar__checkout-box"]}>

                <div className={styles["sticky-checkout-bar__checkout-box__price-box"]}>
                    <span> 1600 </span>
                    <span> ج.م </span>
                </div>
                <div className={styles["sticky-checkout-bar__checkout-box__old-price-box"]}>
                    <span> 2800 </span>
                    <span> ج.م </span>
                    <span>
                        (
                        خصم
                        20
                        %
                        )
                    </span>
                </div>

            </div>


        </div>
    )
}

export default memo(StickyCheckoutBar);

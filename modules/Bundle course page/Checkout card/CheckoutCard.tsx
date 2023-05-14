import React, { memo } from 'react'
import styles from "./checkout-card.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Button } from 'react-bootstrap';
import { CartIcon, AddedToCartIcon, GuaranteeIcon, DurationIcon, CertifIcon, DocumentIcon, DevicesIcon } from 'common/Icons/Icons';
import StickyCheckoutBar from '../Sticky checkout bar/StickyCheckoutBar';
import { useInView } from 'react-hook-inview';

function CheckoutCard() {
  const themeState = useSelector((state: any) => state.themeState.theme);

  const [buyBtnRef, isBuyBtnVisible] = useInView({
    threshold: 1,
    // unobserveOnEnter: true
  });

  return (
    <div className={styles["checkout-details-card"]}>

      <div className={styles["checkout-details-card__title-box"]}>
        <div>مسار الرسم والتلوين</div>
        <div>
          4
          دورات تدريبية
        </div>
      </div>

      <div className={styles["checkout-details-card__checkout-box"]}>
        <div className={styles["checkout-details-card__checkout-box__price-box"]}>
          <span> 1600 </span>
          <span> ج.م </span>
        </div>
        <div className={styles["checkout-details-card__checkout-box__old-price-box"]}>
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
        <Button ref={buyBtnRef} className={styles["checkout-details-card__checkout-box__cta"]}>
          <CartIcon color="#f5f5f5" />
          <span>
            اشتري الباقة
          </span>

        </Button>

      </div>

      <div className={styles["checkout-details-card__guarantee-box"]}>
        <div className={styles["checkout-details-card__guarantee-box__icon"]}>
          <GuaranteeIcon />
        </div>
        <div className={styles["checkout-details-card__guarantee-box__text-box"]}>
          <div
            className={styles["checkout-details-card__guarantee-box__text-box__major"]}>
            ٣٠ يوم ضمان ذهبي استرداد كامل المبلغ
          </div>
          <div
            className={styles["checkout-details-card__guarantee-box__text-box__minor"]}>
            اذا لم تكن راضي عن محتوى الدورة
          </div>
        </div>
      </div> 

      <div className={styles["checkout-details-card__details-list"]}>
        <div>
          <DurationIcon color={themeState == "light" ? "#c1121f" : "#f5f5f5"} />
          <span>٨ ساعات تدريبية</span>
        </div>
        <div>
          <CertifIcon color={themeState == "light" ? "#c2121e" : "#f5f5f5"} />
          <span>  شهادة إتمام اون لاين معتمدة  </span>
        </div>
        <div>
          <DocumentIcon color={themeState == "light" ? "#b20016" : "#f5f5f5"} />
          <span> مرفقات حصرية جاهزة للتحميل </span>
        </div>
        <div>
          <DevicesIcon color={themeState == "light" ? "#c1121f" : "#f5f5f5"} />
          <span> المشاهدة من أي موبايل او لابتوب </span>
        </div>

      </div>
      {!isBuyBtnVisible && <StickyCheckoutBar />}
    </div>
  )
}

export default memo(CheckoutCard);

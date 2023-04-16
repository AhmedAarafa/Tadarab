/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, memo } from 'react';
import styles from "./add-to-cart-popup.module.css";
import { Row, Col, Button, Form, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { ModalAddedToCartIcon, ArrowLeftIcon, PlusIcon, CartIcon, AddedToCartIcon } from "common/Icons/Icons";
import { axiosInstance } from "configurations/axios/axiosConfig";
import { handleCart } from "modules/_Shared/utils/handleCart";
import { setCheckoutType } from "configurations/redux/actions/checkoutType";
import { useDispatch } from "react-redux";
import { setCartItems } from "configurations/redux/actions/cartItems";
import Link from 'next/link';
import Router from 'next/router';

function AddToCartPopup(props: any) {
    const [show, setShow] = useState(false);
    const themeState = useSelector((state: any) => state.themeState.theme);
    const [specialBundleData, setSpecialBundleData] = useState<any>();
    const [disabled, setDisabled] = useState(false);
    const dispatch = useDispatch();

    const handleModalVisibility = (status: boolean) => {
        setShow(status);
        setDisabled(status);
        props?.setIsCartModalVisible(status);
        if (status == false) {
            props?.setSpecialBundleCourseId(0);
        }
    }

    const handleCartActionBtn = (courses: any): any => {
        dispatch(setCheckoutType("cart"));

        const handleCartResponse: any = handleCart(courses, `course/${props?.specialBundleCourseId}/special-bundle`, true);
        handleCartResponse.then(function (firstresponse: any) {
            console.log("handleCartResponse", firstresponse);
            firstresponse.resp.then(function (response: any) {
                setDisabled(true);
                setSpecialBundleData(response?.data?.data);
                dispatch(setCartItems(firstresponse.cartResponse));
                setShow(false);
                Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}checkout`);
            })
        })

    }

    useEffect(() => {
        setShow(props?.isCartModalVisible);
        if (props?.specialBundleCourseId) {
            axiosInstance
                .get(`course/${props?.specialBundleCourseId}/special-bundle`)
                .then(function (response: any) {
                    setSpecialBundleData(response?.data?.data);
                    console.log("response?.data?.data", response?.data?.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }, [props]);

    return (
        <>
            <Modal data-theme={themeState} show={show} onHide={() => handleModalVisibility(false)} animation={false} className={styles["add-to-cart-popup"]}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <span>
                            <ModalAddedToCartIcon />
                            تم إضافة الدورة بنجاح للسلة
                        </span>
                        <Link href="/checkout">
                            <Button className={styles["add-to-cart-popup__go-to-cart"]}>
                                <span>
                                    اذهب للسلة
                                </span>
                                <ArrowLeftIcon color="#fff" />
                                {/* color={themeState == "light" ? "#f5f5f5" : "#222"} */}
                            </Button>
                        </Link>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className={styles["add-to-cart-popup__special-bundle-title"]}>
                        عرض خاص جدااا لفترة محدودة
                    </div>
                    {specialBundleData?.courses?.map((course: any, i: number) => {
                        return (
                            <div key={i} className={styles["add-to-cart-popup__special-bundle-container"]}>
                                <div className={styles["add-to-cart-popup__special-bundle-container__course-box"]}>
                                    <div className={styles["add-to-cart-popup__special-bundle-container__course-box__course-img"]}>
                                        <img src={course?.image} alt={course?.title} />
                                        <div className={styles["add-to-cart-popup__special-bundle-container__course-box__course-img__category-chip"]}>
                                            فنون
                                        </div>
                                    </div>
                                    <div className={styles["add-to-cart-popup__special-bundle-container__course-box__course-details-box"]}>
                                        <div className={styles["add-to-cart-popup__special-bundle-container__course-box__course-details-box__details"]}>
                                            <div className={styles["add-to-cart-popup__special-bundle-container__course-box__course-details-box__details__trainer-img"]}>
                                                <img src={course?.trainer?.image} alt={course?.trainer?.name_ar} />

                                            </div>
                                            <div className={styles["add-to-cart-popup__special-bundle-container__course-box__course-details-box__details__course-info"]}>
                                                <div className={styles["add-to-cart-popup__special-bundle-container__course-box__course-details-box__details__course-info__course-title"]}>
                                                    {course?.title}
                                                </div>
                                                <div className={styles["add-to-cart-popup__special-bundle-container__course-box__course-details-box__details__course-info__trainer-name"]}>
                                                    {course?.trainer?.name_ar}
                                                </div>

                                            </div>
                                        </div>
                                        <div className={styles["add-to-cart-popup__special-bundle-container__course-box__prices-box"]}>
                                            <div className={styles["add-to-cart-popup__special-bundle-container__course-box__prices-box__price"]}>
                                                <span>{course?.special_bundle_discounted_price}</span>
                                                <span>{course?.currency_symbol}</span>
                                            </div>
                                            <div className={styles["add-to-cart-popup__special-bundle-container__course-box__prices-box__old-price"]}>
                                                <span>{course?.special_bundle_price}</span>
                                                <span>{course?.currency_symbol}</span>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <PlusIcon />
                            </div>
                        )
                    })}

                    <div className={styles["add-to-cart-popup__checkout-box"]}>

                        <div className={styles["add-to-cart-popup__checkout-box__prices-box"]}>
                            <div className={styles["add-to-cart-popup__checkout-box__prices-box__price"]}>
                                <span>{specialBundleData?.discounted_price}</span>
                                <span>
                                    {specialBundleData?.currency_symbol}
                                </span>
                            </div>
                            <div className={styles["add-to-cart-popup__checkout-box__prices-box__old-price"]}>
                                <span> بدلاً من </span>
                                <span> {specialBundleData?.price} </span>
                                <span> {specialBundleData?.currency_symbol} </span>
                            </div>
                        </div>
                        <div className={styles["add-to-cart-popup__checkout-box__checkout-btn"]}>
                            <Button disabled={disabled} onClick={() => { handleCartActionBtn(specialBundleData?.courses) }}>
                                {
                                    disabled ?
                                        <AddedToCartIcon color="#fff" />
                                        :
                                        <CartIcon color="#fff" />
                                }
                                <span>
                                    {
                                        disabled ?
                                            "تمت الإضافة"
                                            :
                                            "احصل على العرض"
                                    }
                                </span>
                            </Button>

                        </div>

                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default memo(AddToCartPopup);

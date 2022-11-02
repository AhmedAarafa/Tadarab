/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import { Row, Col, Button } from "react-bootstrap";
import styles from "./category-description.module.css";
import { axiosInstance } from "configurations/axios/axiosConfig";
import { toggleLoader } from "modules/_Shared/utils/toggleLoader";
import { useDispatch, useSelector } from "react-redux";
import Router, { useRouter } from "next/router";
import { setCheckoutType } from "configurations/redux/actions/checkoutType";
import CategoriesNavigator from "modules/Category/Categories navigator/CategoriesNavigator";

export default function CategoryDescription(props: any) {
    const dispatch = useDispatch();
    const Router = useRouter();
    const userStatus = useSelector((state: any) => state.userAuthentication.isUserAuthenticated);
    const userSubscInfo = useSelector((state: any) => state.userAuthentication.isSubscribed);
    const [categoriesList, setCategoriesList] = useState([]);


    const handleSubscriptionBtn = (e: any) => {
        e.preventDefault();
        dispatch(setCheckoutType("subscription"));
        if (userStatus) {

            Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}checkout/payment/?checkout_type=subscription`);
        } else {

            Router.push({
                pathname: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}sign-up`,
                query: { from_subscription: "checkout/payment/?checkout_type=subscription" }
            })
        }
    }

    useEffect(() => {
        setCategoriesList(props?.data?.categoriesList);
    }, [props]);

    return (
        <>
            <CategoriesNavigator data={props} />
            <Row className={styles["category-description-row"]}>
                <Col xs={12} className={styles["category-description"]}>
                    <img className={styles["category-description__img"]} src={`https://s3.me-south-1.amazonaws.com/tadarab2.0-bahrain/${props?.data?.slug}1.jpg`} alt={props.data?.title} />
                    <div className={styles["category-description__title"]}>
                        <h1> {`
                        دورات
                        ${props?.data?.title}
                        `} </h1>
                        <div>
                            (
                            {props.data?.parent_id == 0 &&
                                <>
                                    <span> {props.data?.subcategories_count} </span>
                                    مواضيع
                                    -
                                </>
                            }
                            <span> {props.data?.courses_count} </span>
                            دورة
                            )
                        </div>
                    </div>
                    {userSubscInfo == false && <Button onClick={() => { handleSubscriptionBtn(event) }} className={styles["category-description__signup-btn"]}>
                       {userStatus ?
                       "ابدأ التعلم الاّن"
                       :
                       "انشاء حساب جديد"
                       }
                    </Button>}
                    {userSubscInfo == false &&
                        <div className={styles["category-description__small-description"]}>
                            اشترك الآن لتتابع جميع دورات
                            {` ${props?.data?.title} `}
                            باشتراك يبدأ من
                            {` ${props?.data?.subscription_sale_price}`}
                            {` ${props?.data?.currency_symbol}`}
                            /
                            ش
                            بدلاً من
                            <span style={{ textDecoration: "line-through var(--pale-red)" }}>
                                {` ${props?.data?.subscription_original_price}`}
                                {` ${props?.data?.currency_symbol}`}
                            </span>
                        </div>
                    }
                </Col>
            </Row>

        </>
    )
}

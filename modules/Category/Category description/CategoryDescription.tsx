/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import { Row, Col, Button } from "react-bootstrap";
import styles from "./category-description.module.css";
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
        Router.push(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}subscription-plans`);
    }

    useEffect(() => {
        setCategoriesList(props?.data?.categoriesList);
    }, [props]);

    return (
        <>
            <CategoriesNavigator data={props} />
            <Row className={styles["category-description-row"]}>
                <Col xs={12} className={styles["category-description"]}>
                    <img className={styles["category-description__img"]} src={props?.data?.cover_img || `/images/placeholder.png`} alt={props.data?.title} />
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
                    <Button onClick={() => { handleSubscriptionBtn(event) }} className={styles["category-description__signup-btn"]}>
                        اشترك الاّن
                    </Button>
                    {userSubscInfo == false &&
                        <div className={styles["category-description__small-description"]}>
                            شاهد اكثر من 1000 دورة
                            باشتراك يبدأ من
                            <span>
                                {` ${props?.data?.subscription_sale_price}`}
                                {` ${props?.data?.currency_symbol}`}
                                /
                                ش
                            </span>
                            {/* بدلاً من
                            <span style={{ textDecoration: "line-through var(--pale-red)" }}>
                                {` ${props?.data?.subscription_original_price}`}
                                {` ${props?.data?.currency_symbol}`}
                            </span> */}
                        </div>
                    }
                </Col>
            </Row>

        </>
    )
}

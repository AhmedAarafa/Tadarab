import React, { memo } from 'react';
import styles from "./subscription-benefits.module.css";
import { Row, Col, Button } from "react-bootstrap";
import {
    ReactiveLiveIcon, WatchIcon, InfiniteWatchingIcon, DiscoverTrainersIcon, DiscoverTracksIcon, CancelSubscriptionIcon,
    MonthlyAddedCoursesIcon, UnlimitedCertificatesIcon, UnlimitedBooksIcon, WatchEverywhereIcon, DownloadAttachmentsIcon
} from "common/Icons/Icons";
import { useDispatch, useSelector } from "react-redux";
import Router, { useRouter } from "next/router";
import { setCheckoutType } from "configurations/redux/actions/checkoutType";

function SubscriptionBenefits() {
    const dispatch = useDispatch();
    const Router = useRouter();
    const userStatus = useSelector((state: any) => state.userAuthentication.isUserAuthenticated);


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

    return (
        <>
            <Row className={styles["subscription-benefits"]}>
                <Col className={styles["subscription-benefits__title"]} sm={{ span: 6, order: 1 }} xs={{ span: 12, order: 1 }}>
                    <div>
                        <div>
                            أكبر محتوى تدريبي عربي باشتراك واحد
                        </div>
                    </div>
                    <Button onClick={() => { handleSubscriptionBtn(event) }}>
                        انشاء حساب جديد
                    </Button>
                </Col>
                <Col sm={{ span: 6, order: 2 }} xs={{ span: 12, order: 2 }}>

                    <div className={styles["subscription-benefits__benefits"]}>

                        <div className={styles["subscription-benefits__benefits__list-item"]}>
                            <div>
                                <InfiniteWatchingIcon />
                            </div>
                            <span>
                                مشاهدة بلا حدود لجميع الدورات بالمنصة (أكثر من
                                1000
                                دورة تدريبية).
                            </span>
                        </div>

                        <div className={styles["subscription-benefits__benefits__list-item"]}>
                            <div>
                                <ReactiveLiveIcon />
                            </div>
                            <span>
                                دورات بث مباشر حصرية للمشتركين.
                            </span>
                        </div>

                        <div className={styles["subscription-benefits__benefits__list-item"]}>
                            <div>
                                <MonthlyAddedCoursesIcon />
                            </div>
                            <span>
                                دورات جديدة تضاف شَهْرِيًّا.
                            </span>
                        </div>

                        <div className={styles["subscription-benefits__benefits__list-item"]}>
                            <div>
                                <WatchIcon color="#fff" />
                            </div>
                            <span>
                                مشاهدة مواسم تدرب الحصرية للمشتركين.
                            </span>
                        </div>

                        <div className={styles["subscription-benefits__benefits__list-item"]}>
                            <div>
                                <DiscoverTrainersIcon />
                            </div>
                            <span>
                                التعرف على خبرات أكثر من 500 مدرباً وخبيراً.
                            </span>
                        </div>

                        <div className={styles["subscription-benefits__benefits__list-item"]}>
                            <div>
                                <UnlimitedCertificatesIcon color="#fff" />
                            </div>
                            <span>
                                شهادات إتمام الدورات بلا حدود.
                            </span>
                        </div>

                        <div className={styles["subscription-benefits__benefits__list-item"]}>
                            <div>
                                <UnlimitedBooksIcon />
                            </div>
                            <span>
                                ملخصات كتب إلكترونية حصرية.
                            </span>
                        </div>

                        <div className={styles["subscription-benefits__benefits__list-item"]}>
                            <div>
                                <WatchEverywhereIcon />
                            </div>
                            <span>
                                إمكانية متابعة الدورات من أي جهاز وبأي وقت.
                            </span>
                        </div>

                        <div className={styles["subscription-benefits__benefits__list-item"]}>
                            <div>
                                <CancelSubscriptionIcon />
                            </div>
                            <span>
                                لا يوجد التزام، يمكنك إلغاء الاشتراك في أي وقت.
                            </span>
                        </div>

                    </div>
                    <Button onClick={() => { handleSubscriptionBtn(event) }}>
                        انشاء حساب جديد
                    </Button>
                </Col>
            </Row>
        </>
    )
}

export default memo(SubscriptionBenefits);

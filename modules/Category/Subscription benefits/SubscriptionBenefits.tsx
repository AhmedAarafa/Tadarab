import React from 'react';
import styles from "./subscription-benefits.module.css";
import { Row, Col, Button } from "react-bootstrap";
import {
    ReactiveLiveIcon, WatchIcon, InfiniteWatchingIcon, DiscoverTrainersIcon, DiscoverTracksIcon, CancelSubscriptionIcon,
    MonthlyAddedCoursesIcon, UnlimitedCertificatesIcon, UnlimitedBooksIcon, WatchEverywhereIcon, DownloadAttachmentsIcon
} from "common/Icons/Icons";
import { useDispatch, useSelector } from "react-redux";
import Router, { useRouter } from "next/router";
import { setCheckoutType } from "configurations/redux/actions/checkoutType";

export default function SubscriptionBenefits() {
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
                            ما المميزات في اشتراك
                        </div>
                        <span className={styles["subscription-benefits--important"]}>
                            تدرب بلا حدود
                        </span>
                        ؟
                    </div>
                    <Button onClick={() => { handleSubscriptionBtn(event) }}>
                        انشاء حساب جديد
                    </Button>
                </Col>
                <Col sm={{ span: 6, order: 2 }} xs={{ span: 12, order: 2 }}>

                    <div className={styles["subscription-benefits__benefits"]}>

                        <div className={styles["subscription-benefits__benefits__list-item"]}>
                            <div>
                                <WatchIcon color="#fff" />
                            </div>
                            <span>
                                مشاهدة جميع دورات الموسم التدريبي.
                            </span>
                        </div>
                        <div className={styles["subscription-benefits__benefits__list-item"]}>
                            <div>
                                <InfiniteWatchingIcon />
                            </div>
                            <span>
                                مشاهدة بلا حدود لجميع الدورات بالمنصة (أكثر من
                                850
                                دورة تدريبية).
                            </span>
                        </div>
                        <div className={styles["subscription-benefits__benefits__list-item"]}>
                            <div>
                                <DiscoverTrainersIcon />
                            </div>
                            <span>
                                التعرف على خبرات أكثر من 400 مدرباً وخبيراً.
                            </span>
                        </div>
                        <div className={styles["subscription-benefits__benefits__list-item"]}>
                            <div>
                                <DiscoverTracksIcon />
                            </div>
                            <span>
                                التعرف على الكثير من المجالات العديدة والمتنوعة والمتخصصة.
                            </span>
                        </div>
                        <div className={styles["subscription-benefits__benefits__list-item"]}>
                            <div>
                                <ReactiveLiveIcon />
                            </div>
                            <span>
                                دورات بث مباشر تفاعلية حصرية.
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
                                <UnlimitedCertificatesIcon />
                            </div>
                            <span>
                                عدد لا نهائي من شهادات إتمام الدورات
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
                                <DownloadAttachmentsIcon />
                            </div>
                            <span>
                                إمكانية تحميل وطباعة المرفقات والتمارين لسهولة التطبيق.
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

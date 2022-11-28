/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import styles from "./special-offer.module.css";
import { Button } from "react-bootstrap";
import { axiosInstance } from "configurations/axios/axiosConfig";
import { ReviewStartIcon, PlusIcon, GiftIcon, CartIcon } from "common/Icons/Icons";
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from "react-redux";
import { setCartItems } from "configurations/redux/actions/cartItems";
import { handleCart } from "modules/_Shared/utils/handleCart";
import { setCheckoutType } from "configurations/redux/actions/checkoutType";

export default function SpecialOffer(props: any) {
    const [specialBundleData, setSpecialBundleData] = useState<any>();
    const [toDisplayValues, setToDisplayValues] = useState<any>([]);
    const [disabled, setDisabled] = useState(false);
    const dispatch = useDispatch();
    const Router = useRouter();
    const cartItems = useSelector((state: any) => state.cartItems);
    const { slug } = Router.query;

    useEffect(() => {
        if (props.Cid() !== "") {
            axiosInstance
                .get(`course/${props.Cid()}/special-bundle`)
                .then(function (response: any) {
                    setSpecialBundleData(response?.data?.data);
                    timerImplementer();
                    response?.data?.data?.courses?.forEach((course: any) => {
                        if (course.is_in_cart || course.is_purchased) {
                            setDisabled(true);
                            return;
                        }
                    })

                })
                .catch(function (error) {
                    console.log(error);
                });

        }
    }, [props.Cid()]);

    useEffect(() => {
        // console.log("specialBundleData", specialBundleData);
        let coursesIds = '';
        let localStorageItems: any = localStorage.getItem("cart")?.toString();

        specialBundleData?.courses.forEach((c: any, i: number) => {
            coursesIds += `${c.id.toString()}|`;
        });
        const regex = new RegExp(`/${coursesIds.slice(0, -1)}/g`);

        if (regex.test(localStorageItems)) {
            setDisabled(true);
        };

    }, [specialBundleData,cartItems]);


    const timerHandler = (dateAfter: any) => {

        const timerInterval = setInterval(() => {
            // get total seconds between the times
            let delta: any = Math.abs(dateAfter - (Math.floor(Date.now() / 1000)));

            // calculate (and subtract) whole days
            let days: any = Math.floor(delta / 86400);
            delta -= days * 86400;

            // calculate (and subtract) whole hours
            let hours: any = Math.floor(delta / 3600) % 24;
            delta -= hours * 3600;

            // calculate (and subtract) whole minutes
            let minutes: any = Math.floor(delta / 60) % 60;
            delta -= minutes * 60;

            // what's left is seconds
            let seconds: any = delta; // in theory the modulus is not required

            days = days.toString().padStart(2, 0);
            hours = hours.toString().padStart(2, 0);
            minutes = minutes.toString().padStart(2, 0);
            seconds = seconds.toString().padStart(2, 0);

            if (days == "00" && hours == "00" && minutes == "00" && seconds == "00") {
                clearInterval(timerInterval);
                timerImplementer();
            }

            setToDisplayValues([days, hours, minutes, seconds]);
            return { days, hours, minutes, seconds }
        }, 1000);


    }

    const handleCartActionBtn = (courses: any): any => {
        dispatch(setCheckoutType("cart"));
        // console.log("handleCartResponse", courses);
        const handleCartResponse: any = handleCart(courses, `course/${props.Cid()}/special-bundle`, true);
        handleCartResponse.then(function (firstresponse: any) {
            console.log("handleCartResponse", firstresponse);
            firstresponse.resp.then(function (response: any) {
                setDisabled(true);
                console.log("firstresponse :", firstresponse);
                console.log("response :", response);
                setSpecialBundleData(response?.data?.data);
                dispatch(setCartItems(firstresponse.cartResponse));
            })
        })

    }

    const timerImplementer = () => {
        if (document.cookie.indexOf('timer') > -1) {
            document.cookie.split('; ').reduce((prev: any, current: any) => {
                const [name, ...value] = current.split('=');
                if (prev) {
                    prev[name] = value.join('=');
                    if ((prev.timer <= (Math.floor(Date.now() / 1000))) || prev.timer == NaN || prev.timer == "NaN") {

                        let now = new Date();
                        let time = now.getTime();
                        time += 2 * 3600 * 1000;
                        now.setTime(time);
                        document.cookie =
                            'timer=' + ((Math.floor(Date.now() / 1000)) + (2 * 60 * 60)) +
                            '; expires=Thu, 01 Jan 2050 00:00:01 GMT' +
                            '; path=/';
                        timerHandler((Math.floor(Date.now() / 1000)) + (2 * 60 * 60));


                    } else {
                        if (prev.timer) {
                            timerHandler(prev.timer);
                        }
                    }
                }

                return prev;
            }, {});

        } else {

            let now = new Date();
            let time = now.getTime();
            time += 2 * 3600 * 1000;
            now.setTime(time);
            document.cookie =
                'timer=' + ((Math.floor(Date.now() / 1000)) + (2 * 60 * 60)) +
                '; expires=Thu, 01 Jan 2050 00:00:01 GMT' +
                '; path=/';
            timerHandler((Math.floor(Date.now() / 1000)) + (2 * 60 * 60));
        }
    }

    return (
        <>
            {specialBundleData &&
                JSON.stringify(specialBundleData) !== "{}" &&
                specialBundleData?.courses !== null &&
                JSON.stringify(specialBundleData?.courses) !== "[]" &&

                <div className={styles["special-offer"]}>
                    <div className={styles["special-offer__title"]}>
                        <GiftIcon />
                        <h2><span>عرض خاص جدااا لفترة محدودة</span></h2>
                    </div>

                    <div className={styles["special-offer__cards-outer-box"]}>

                        {
                            specialBundleData?.courses?.map((course: any, i: number) => {
                                return (
                                    <div key={i + 6}>
                                        <div className={styles["special-offer__cards-outer-box__card"]}>
                                            <div className={styles["special-offer__cards-outer-box__card__course-img"]}>
                                                <img loading="lazy" src={course?.image} alt="course image" />
                                                {
                                                    (course?.length) && course.categories[0]?.title !== null && course.categories[0]?.title !== "" &&

                                                    <div className={styles["special-offer__cards-outer-box__card__category-chip"]}
                                                        style={{ backgroundColor: `${course.categories[0] !== undefined && course.categories[0].color}` }}>
                                                        {course.categories[0] !== undefined && course.categories[0]?.title}
                                                    </div>
                                                }
                                            </div>

                                            <div className={styles["special-offer__cards-outer-box__card__trainer-info-box-container"]}>

                                                <div className={styles["special-offer__cards-outer-box__card__trainer-info-box"]}>
                                                    <div className={styles["special-offer__cards-outer-box__card__trainer-info-box__trainer-img"]}>
                                                        <img loading="lazy" src={course.trainer?.image} alt="trainer image" />
                                                    </div>
                                                    <div className={styles["special-offer__cards-outer-box__card__trainer-info-box__info"]}>
                                                        <h3 className={styles["special-offer__cards-outer-box__card__trainer-info-box__course-name"]} title={course?.title}>
                                                            {course?.title}
                                                        </h3>
                                                        <div className={styles["special-offer__cards-outer-box__card__trainer-info-box__trainer-name"]}>
                                                            {course.trainer?.name_ar}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className={styles["special-offer__cards-outer-box__card__rating-box"]}>
                                                        <span> {course.reviews_average} </span>

                                                        {
                                                            [...Array(5)].map((review: any, i: number) => {
                                                                if (i < Math.floor(course.reviews_average)) {
                                                                    return (
                                                                        <ReviewStartIcon key={i} color="#ffa120" />
                                                                    )
                                                                } else {
                                                                    return (
                                                                        <ReviewStartIcon key={i} color="#ccc" />
                                                                    )
                                                                }
                                                            })
                                                        }


                                                        <span> ({course.reviews_count} تقييم) </span>
                                                    </div>
                                                    <div className={styles["special-offer__cards-outer-box__card__price"]}>
                                                        <span> {course.discounted_price} </span>
                                                        <span>{course.currency_symbol} </span>
                                                    </div>
                                                    {
                                                        course.price > course.discounted_price &&
                                                        <div className={styles["special-offer__cards-outer-box__card__old-price"]}>
                                                            <span> {course.price} </span>
                                                            <span>{course.currency_symbol}</span>
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles["special-offer__cards-outer-box__plus"]}>
                                            <div>
                                                <PlusIcon />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                        <div className={styles["special-offer__cards-outer-box__card__checkout-box"]}>
                            <div className={styles["special-offer__cards-outer-box__card__checkout-box__prices-box"]}>
                                <div className={styles["special-offer__cards-outer-box__card__checkout-box__prices-box__price"]}>
                                    <span>
                                        {
                                            specialBundleData?.discounted_price
                                        }
                                    </span>
                                    <span> {specialBundleData?.currency_symbol} </span>
                                </div>
                                {
                                    specialBundleData?.price >
                                    specialBundleData?.discounted_price
                                    &&
                                    <>

                                        <div className={styles["special-offer__cards-outer-box__card__checkout-box__prices-box__old-price"]}>
                                            <span> بدلاً من </span>
                                            <span>
                                                {
                                                    specialBundleData?.price
                                                }
                                            </span>
                                            <span> {specialBundleData?.currency_symbol} </span>
                                        </div>

                                        <div className={styles["special-offer__cards-outer-box__card__checkout-box__prices-box__discount"]}>
                                            ستوفر
                                            <span> {Math.ceil(100 - ((specialBundleData?.discounted_price / specialBundleData?.price) * 100))} % </span>
                                            من خلال العرض
                                        </div>
                                    </>
                                }
                            </div>

                            {
                                <div className={styles["special-offer__cards-outer-box__card__offer-duration-checkout-box"]}>
                                    <div className={styles["special-offer__cards-outer-box__card__offer-duration-box"]}>
                                        <div className={styles["special-offer__cards-outer-box__card__offer-duration-box__offer-available"]}>
                                            <div>العرض</div>
                                            <div>متاح خلال</div>
                                        </div>
                                        <div>
                                            <div className={styles["special-offer__cards-outer-box__card__offer-duration-box__countdown-box"]}>
                                                <div className={styles["special-offer__cards-outer-box__card__offer-duration-box__countdown-box__countdown"]}>
                                                    <div>يوم</div>
                                                    <div>{toDisplayValues[0]}</div>
                                                </div>
                                                <div className={styles["special-offer__cards-outer-box__card__offer-duration-box__countdown-box__separator"]}>
                                                    :
                                                </div>
                                                <div className={styles["special-offer__cards-outer-box__card__offer-duration-box__countdown-box__countdown"]}>
                                                    <div>ساعة</div>
                                                    <div>
                                                        {toDisplayValues[1]}
                                                    </div>
                                                </div>
                                                <div className={styles["special-offer__cards-outer-box__card__offer-duration-box__countdown-box__separator"]}>
                                                    :
                                                </div>
                                                <div className={styles["special-offer__cards-outer-box__card__offer-duration-box__countdown-box__countdown"]}>
                                                    <div>دقيقة</div>
                                                    <div>
                                                        {toDisplayValues[2]}
                                                    </div>
                                                </div>
                                                <div className={styles["special-offer__cards-outer-box__card__offer-duration-box__countdown-box__separator"]}>
                                                    :
                                                </div>
                                                <div className={styles["special-offer__cards-outer-box__card__offer-duration-box__countdown-box__countdown"]}>
                                                    <div>ثانية</div>
                                                    <div>
                                                        {toDisplayValues[3]}
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="w-100">
                                        <Button disabled={disabled} onClick={() => { handleCartActionBtn(specialBundleData?.courses) }}
                                            className={styles["special-offer__cards-outer-box__card__add-to-cart-btn"]}>
                                            <CartIcon color="#fff" />

                                            <span>
                                                {disabled ?
                                                    "تمت الإضافة" :
                                                    "احصل على العرض"}
                                            </span>

                                        </Button>
                                    </div>
                                </div>
                            }

                        </div>
                    </div>
                </div>
            }
        </>
    );
}

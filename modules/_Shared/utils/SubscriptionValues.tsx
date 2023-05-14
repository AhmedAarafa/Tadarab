import React, { useState, useEffect, useRef, memo } from 'react'
import { axiosInstance } from "configurations/axios/axiosConfig";

function SubscriptionValues() {
    const [values, setValues] = useState<any>({});
    const subValuesRef = useRef<any>(null);

    useEffect(() => {
        let cancel: boolean = false;
        console.log("opened");


        axiosInstance
            .get(`subscription/plans`)
            .then(function (response: any) {
                if (cancel) return;
                setValues({
                    subscription_original_price: response?.data?.data?.subscription_plans[0]?.original_price,
                    subscription_sale_price: response?.data?.data?.subscription_plans[0]?.total_pay,
                    currency_symbol: response?.data?.data?.subscription_plans[0]?.currency_symbol
                });
                subValuesRef.current = {
                    subscription_original_price: response?.data?.data?.subscription_plans[0]?.original_price,
                    subscription_sale_price: response?.data?.data?.subscription_plans[0]?.total_pay,
                    currency_symbol: response?.data?.data?.subscription_plans[0]?.currency_symbol
                }
            })
            .catch(function (error: any) {
                console.log(error);
            });

        return () => {
            cancel = true;
            console.log("destroyed");
            
        }

    }, []);

    return (
        <div ref={subValuesRef}>
            اشترك الآن لتتابع أكثر من 1000 دورة تدريبية باشتراك يبدأ من
            {
                JSON.stringify(values) !== "{}" &&
                <>
                    {`
                        ${values.subscription_sale_price}
                        ${values.currency_symbol}
                        `}
                    /
                    ش
                </>
            }

        </div>
    )
}

export default memo(SubscriptionValues);

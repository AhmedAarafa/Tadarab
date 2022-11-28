import React, { useState, useEffect } from 'react'
import { axiosInstance } from "configurations/axios/axiosConfig";

export default function SubscriptionValues() {
    const [values, setValues] = useState<any>({});

    useEffect(() => {
        let cancel: boolean = false;

        axiosInstance
            .get(`categories/home/?limit=20&page=1`)
            .then(function (response: any) {
                if (cancel) return;
                setValues({
                    subscription_original_price: response?.data?.data.subscription_original_price,
                    subscription_sale_price: response?.data?.data.subscription_sale_price,
                    currency_symbol: response?.data?.data.currency_symbol
                });
            })
            .catch(function (error: any) {
                console.log(error);
            });

        return () => {
            cancel = true;
        }

    }, []);

    return (
            JSON.stringify(values) !== "{}" ?
                <div>
                    اشترك الآن لتتابع جميع الدورات باشتراك يبدأ من
                    {` ${values.subscription_sale_price} `}
                    {` ${values.currency_symbol}`}
                    /
                    ش
                </div>
                :
                <></>
    )
}

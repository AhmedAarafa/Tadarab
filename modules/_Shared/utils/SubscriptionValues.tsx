import React, { useState, useEffect } from 'react'
import { axiosInstance } from "configurations/axios/axiosConfig";

export default function SubscriptionValues() {
    const [values, setValues] = useState<any>({});

    useEffect(() => {
        let cancel: boolean = false;

        axiosInstance
            .get(`subscription/plans`)
            .then(function (response: any) {
                if (JSON.stringify(response.status).startsWith("2")) {
                    if (cancel) return;

                    setValues({
                        sale_label: response?.data?.data?.subscription_plans[0]?.sale_label
                    });
                }
            })
            .catch(function (error) {
                console.log(error);
            });

        return () => {
            cancel = true;
        }

    }, []);

    useEffect(() => {
        console.log("values", values);

    }, [values])


    return (
        JSON.stringify(values) !== "{}" ?
            <div>
                اشترك الآن لتتابع جميع الدورات باشتراك يبدأ من
                {" "} {values.sale_label} {" "}
            </div>
            :
            <></>
    )
}

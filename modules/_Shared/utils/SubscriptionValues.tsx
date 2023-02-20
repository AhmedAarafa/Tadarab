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

    return (
        JSON.stringify(values) !== "{}" ?
            <div>
               شاهد اكثر من 1000 دورة باشتراك واحد يبدأ من
               <span style={{fontWeight:"800",zoom:"1.5"}}>
                {" "} {values.sale_label} {" "}
               </span>
            </div>
            :
            <></>
    )
}

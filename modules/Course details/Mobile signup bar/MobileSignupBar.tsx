import React, { useState, useEffect, memo } from "react";
import styles from "./mobile-signup-bar.module.css";
import { Button } from "react-bootstrap";
import SignupPopup from "common/Signup popup/SignupPopup";

function MobileSignupBar(props: any) {
    const [isSignupModalVisible, setIsSignupModalVisible] = useState(false);

    return (
        <>
            <div className={styles["mobile-signup-bar"]} id="mobile-signup-bar">
                <div>
                    <Button className={styles["mobile-signup-bar__subscribe-btn"]} onClick={() => { setIsSignupModalVisible(true) }}>
                        سجل الآن مجاناً
                    </Button>
                    <div>
                        <div className={styles["monthly-subscription__subscription-value"]} >
                            سجل الآن لمشاهدة البث المباشر مجاناً
                        </div>
                    </div>
                </div>
            </div>

            <SignupPopup isSignupModalVisible={isSignupModalVisible} setIsSignupModalVisible={setIsSignupModalVisible} />

        </>
    )
}

export default memo(MobileSignupBar);

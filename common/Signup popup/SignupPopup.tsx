/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import styles from "./signup-popup.module.css";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { EnvelopeIcon, GoogleIcon, TransactionSuccessIcon, LockIcon, EyeIcon, MobileIcon, NameFieldIcon } from "common/Icons/Icons";
import { axiosInstance } from "configurations/axios/axiosConfig";
import { signupValidationRules } from "validation rules/signup";
import { useRouter } from "next/router";
import {
    Formik,
    Form,
    Field,
    ErrorMessage
} from 'formik';
import * as Yup from "yup";
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import TadarabGA from "modules/_Shared/utils/ga";
import { FBPixelEventsHandler } from "modules/_Shared/utils/FBPixelEvents";
import { setIsUserAuthenticated } from "configurations/redux/actions/userAuthentication";
import GoogleLogin from 'react-google-login';
import { setCartItems } from "configurations/redux/actions/cartItems";

interface SignUpFormValues {
    name: string;
    email: string;
    phoneNumber: string;
    password: string;
};

export default function SignupPopup(props: any) {
    const [show, setShow] = useState(false);
    const [countryCallingCode, setCountryCallingCode] = useState("20");
    const [countryCode, setCountryCode] = useState("EG");
    const [errorMessage, setErrorMessage] = useState("");
    const [isSignupDone, setIsSignupDone] = useState(false);
    const themeState = useSelector((state: any) => state.themeState.theme);
    const [isVisible, setIsVisible] = useState(false);
    const [fieldBlur, setFieldBlur] = useState({
        name: "",
        email: "",
        phone: "",
        password: ""
    });
    const [validationAfterSubmit, setValidationAfterSubmit] = useState({
        name: false,
        email: false,
        phoneNumber: false,
        password: false
    });
    const [phoneFieldEvent, setPhoneFieldEvent] = useState<any>();
    const router: any = useRouter();
    const dispatch = useDispatch();
    const userAuthState = useSelector((state: any) => state.userAuthentication);


    const initialValues: SignUpFormValues = {
        name: '',
        email: '',
        phoneNumber: '',
        password: '',
    };

    useEffect(() => {
        const phoneField: any = document.querySelector("input[type='tel']");
        phoneField?.addEventListener('blur', updateValue);
        phoneField?.addEventListener('change', updateValue);

        const intlTelInput: any = document.querySelector('.intl-tel-input .selected-dial-code');
        setTimeout(() => {
            intlTelInput?.classList.remove("selected-dial-code");
        }, 50);

    }, []);

    const updateValue = (e: any) => {
        setPhoneFieldEvent(e);
    };

    const handleModalVisibility = (status: boolean) => {
        setShow(status);
        props?.setIsSignupModalVisible(status);
    }

    const responseGoogle = (googleResponse: any) => {

        if ("error" in googleResponse) {
            // setErrorMessage("حدث خطأ برجاء المحاولة مرة اخري");
        } else {
            let tadarabGA = new TadarabGA();
            let clientId = tadarabGA.tadarab_get_traking_client();
            let customData = { email: googleResponse.profileObj.email, phone: "" };

            axiosInstance
                .post(`social-login`, {
                    "email": googleResponse.profileObj.email,
                    "first_name": googleResponse.profileObj.givenName,
                    "last_name": googleResponse.profileObj.familyName,
                    "full_name": `${googleResponse.profileObj.givenName} ${googleResponse.profileObj.familyName}`,
                    "social_type": "google",
                    "social_token": googleResponse.tokenObj.access_token,
                    "clientId": clientId,
                }).then((response: any) => {
                    if (JSON.stringify(response.status).startsWith("2")) {
                        FBPixelEventsHandler(response.data.fb_tracking_events, customData);
                        if (response.data.data !== null) {
                            const totalItems: any = [];
                            response?.data?.data?.courses?.data.forEach((item: any) => {
                                totalItems.push(item.id);
                            });
                            localStorage.setItem("token", response.data.data.token);
                            localStorage.setItem("user_id", response.data.data.id);
                            localStorage.setItem("is_user_subscribed", response.data.data.is_in_user_subscription);
                            localStorage.setItem("cart", JSON.stringify(totalItems));
                            localStorage.setItem("cart_items", JSON.stringify([...new Set(response.data.data.cart_items)]));
                            dispatch(setCartItems([...new Set(response.data.data.cart_items)]));

                            dispatch(setIsUserAuthenticated({
                                ...userAuthState, isUserAuthenticated: true,
                                token: response.data.data.token,
                                id: response.data.data.id,
                                isSubscribed: response.data.data.is_in_user_subscription
                            }));
                        }
                        tadarabGA.tadarab_fire_traking_GA_code("signup", { traking_email: response.data.data.email, traking_uid: response.data.data.id });
                        setIsSignupDone(true);
                        setTimeout(() => {
                            setShow(false);
                        }, 1000);

                    } else {
                        setErrorMessage(response.data.message);
                    }
                }).catch((error: any) => {
                    //console.log(error);
                })

        }
    }

    const validationSchema = ():any => {
        return Yup.object().shape(signupValidationRules);
    }

    const showHidePasswordHandler = () => {
        const passwordField: any = document.getElementById("password-field");
        if (passwordField.type === "password") {
            passwordField.type = "text";
            setIsVisible(true);
        } else {
            passwordField.type = "password";
            setIsVisible(false);
        }
    };

    const handleValidationOnSubmit = (): any => {
        if (fieldBlur.name == "") {
            const newValidationState = validationAfterSubmit;
            newValidationState.name = true;
            setValidationAfterSubmit(newValidationState);
        }
        if (fieldBlur.email == "") {
            const newValidationState = validationAfterSubmit;
            newValidationState.email = true;
            setValidationAfterSubmit(newValidationState);
        }
        if (fieldBlur.phone == "") {
            const newValidationState = validationAfterSubmit;
            newValidationState.phoneNumber = true;
            setValidationAfterSubmit(newValidationState);
        }
        if (fieldBlur.password == "") {
            const newValidationState = validationAfterSubmit;
            newValidationState.password = true;
            setValidationAfterSubmit(newValidationState);
        }
    }

    useEffect(() => {
        setShow(props?.isSignupModalVisible);
    }, [props]);

    return (
        <>
            <Modal data-theme={themeState} show={show} onHide={() => handleModalVisibility(false)} animation={false} className={styles["signup-popup"]}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <span>
                            انشاء حساب جديد
                        </span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        isSignupDone ?
                            <div className={styles["signup-popup__signup-succeeded"]}>
                                <TransactionSuccessIcon />
                                تم انشاء الحساب بنجاح
                            </div>
                            :
                            <>
                                <div className={styles["signup-popup__register-with"]}>

                                    <GoogleLogin
                                        clientId={`${process.env.NEXT_PUBLIC_GOOGLE_APP_ID}`}
                                        buttonText="Login"
                                        onSuccess={responseGoogle}
                                        onFailure={responseGoogle}
                                        cookiePolicy={'single_host_origin'}
                                        render={renderProps => (
                                            <div onClick={renderProps.onClick} className={renderProps.disabled ? styles['disabled'] : ""} >
                                                <GoogleIcon />
                                                انشاء حساب بواسطة جوجل
                                            </div>
                                        )}
                                    />

                                </div>

                                <div className={styles["signup-popup__register-with-email"]}>
                                    أو سجل بواسطة البريد الإلكتروني
                                </div>

                                <div className={styles["signup-popup__registeration-form-box"]}>

                                    <Formik
                                        validateOnChange={false}
                                        initialValues={initialValues}
                                        validationSchema={validationSchema}
                                        onSubmit={(values) => {
                                            //  actions.setSubmitting(false);
                                            let tadarabGA = new TadarabGA();
                                            const clientId = tadarabGA.tadarab_get_traking_client();
                                            axiosInstance
                                                .post(`users`, {
                                                    "email": values.email,
                                                    "password": values.password,
                                                    "full_name": values.name,
                                                    "clientId": clientId,
                                                    "country_code": countryCode,
                                                    "dial_code": `+${countryCallingCode}`,
                                                    "phone": values.phoneNumber,
                                                }).then((response: any) => {
                                                    // setResponse(response.data);
                                                    //console.log("Response", response);
                                                    if (JSON.stringify(response.status).startsWith("2")) {
                                                        let customData = { email: values.email, phone: values.phoneNumber };
                                                        FBPixelEventsHandler(response.data.fb_tracking_events, customData);
                                                        if (response.data.data !== null) {
                                                            const totalItems: any = [];
                                                            response?.data?.data?.courses?.data.forEach((item: any) => {
                                                                totalItems.push(item.id);
                                                            });
                                                            localStorage.setItem("token", response.data.data.token);
                                                            localStorage.setItem("user_id", response.data.data.id);
                                                            localStorage.setItem("is_user_subscribed", response.data.data.is_in_user_subscription);
                                                            localStorage.setItem("cart", JSON.stringify(totalItems));
                                                            localStorage.setItem("cart_items", JSON.stringify([...new Set(response.data.data.cart_items)]));
                                                            dispatch(setIsUserAuthenticated({
                                                                ...userAuthState, isUserAuthenticated: true,
                                                                token: response.data.data.token,
                                                                id: response.data.data.id,
                                                                isSubscribed: response.data.data.is_in_user_subscription
                                                            }));
                                                        }

                                                        tadarabGA.tadarab_fire_traking_GA_code("signup", { traking_email: values.email, traking_uid: response.data.data.id });
                                                        setIsSignupDone(true);
                                                        setTimeout(() => {
                                                            setShow(false);
                                                        }, 1000);
                                                    } else {
                                                        setErrorMessage(response.data.message);
                                                    }
                                                }).catch((error: any) => {
                                                    //console.log("errrrr", error);
                                                })
                                        }}
                                    >

                                        {({ errors, handleBlur, setFieldTouched, setFieldValue }) => (
                                            <Form >
                                                <div className={`${styles["signup-popup__registeration-form-box__name-field-container"]} ${(validationAfterSubmit.name && errors.name) && styles["required"]}`}>
                                                    {/* {console.log("isValid",isValid, "errors.name" , errors.name , " dirty" ,dirty) } */}
                                                    <div className={styles["signup-popup__registeration-form-box__icon-wrapper"]}>
                                                        <NameFieldIcon />
                                                    </div>
                                                    <Field
                                                        onKeyPress={(e: any) => {
                                                            e.stopPropagation();
                                                            setErrorMessage("");
                                                            setValidationAfterSubmit({ ...validationAfterSubmit, name: false });
                                                        }}
                                                        onBlur={(e: any) => {
                                                            if (e.target.value !== ""
                                                                &&
                                                                e.target.value.length < 5
                                                            ) {
                                                                setValidationAfterSubmit({ ...validationAfterSubmit, name: true });
                                                            } else {
                                                                setValidationAfterSubmit({ ...validationAfterSubmit, name: false });
                                                            }
                                                            // call the built-in handleBur
                                                            handleBlur(e);
                                                            // and do something about e
                                                            setFieldBlur({ ...fieldBlur, name: e.target.value });
                                                        }}
                                                        type="text" name="name" placeholder="الاسم"
                                                        className={styles["signup-popup__registeration-form-box__name-field"]} />
                                                </div>
                                                {validationAfterSubmit.name && <ErrorMessage name="name" component="div" className={styles["error-msg"]} />}

                                                <div className={`${styles["signup-popup__registeration-form-box__email-field-container"]} ${validationAfterSubmit.email && errors.email && styles["required"]}`}>
                                                    <div className={styles["signup-popup__registeration-form-box__icon-wrapper"]}>
                                                        <EnvelopeIcon />
                                                    </div>
                                                    <Field
                                                        onKeyPress={(e: any) => {
                                                            e.stopPropagation();
                                                            setErrorMessage("");
                                                            setValidationAfterSubmit({ ...validationAfterSubmit, email: false });
                                                        }}
                                                        onBlur={(e: any) => {
                                                            if (e.target.value !== ""
                                                                &&
                                                                !e.target.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
                                                            ) {
                                                                setValidationAfterSubmit({ ...validationAfterSubmit, email: true });
                                                            } else {
                                                                setValidationAfterSubmit({ ...validationAfterSubmit, email: false });
                                                            }
                                                            // call the built-in handleBur
                                                            handleBlur(e);
                                                            // and do something about e
                                                            setFieldBlur({ ...fieldBlur, email: e.target.value });
                                                            // console.log("e",e);
                                                        }}
                                                        type="email" name="email" placeholder="البريد الالكتروني" className={styles["signup-popup__registeration-form-box__email-field"]} />
                                                </div>
                                                {validationAfterSubmit.email && <ErrorMessage name="email" component="div" className={styles["error-msg"]} />}

                                                <div className={`${styles["signup-popup__registeration-form-box__phone-field-container"]} ${validationAfterSubmit.phoneNumber && errors.phoneNumber ? styles["required"] : null}`}>
                                                    <div className={styles["signup-popup__registeration-form-box__icon-wrapper"]}>
                                                        <MobileIcon />

                                                    </div>

                                                    <IntlTelInput fieldId="phone-number-field"
                                                        fieldName="phoneNumber"
                                                        preferredCountries={['kw', 'sa', 'ae', 'qa', 'om', 'bh', 'iq', 'eg']}
                                                        separateDialCode={true}
                                                        onPhoneNumberBlur={(e: any) => {
                                                            const phoneNumberField: any = document.getElementById("phone-number-field");

                                                            if (phoneNumberField.value !== ""
                                                                &&
                                                                phoneNumberField.value.length < 5
                                                                &&
                                                                phoneNumberField.value.match(/^\d+$/)
                                                            ) {
                                                                setValidationAfterSubmit({ ...validationAfterSubmit, phoneNumber: true });
                                                            } else {
                                                                setValidationAfterSubmit({ ...validationAfterSubmit, phoneNumber: false });
                                                            }
                                                            setFieldTouched("phoneNumber", true);
                                                            handleBlur(phoneFieldEvent);
                                                            setFieldBlur({ ...fieldBlur, phone: phoneFieldEvent?.target.value });
                                                        }}
                                                        onPhoneNumberChange={(...args) => {
                                                            setErrorMessage("");
                                                            setValidationAfterSubmit({ ...validationAfterSubmit, phoneNumber: false });
                                                            setFieldValue("phoneNumber", args[1]);
                                                            const countryDialCode: any = Number(args[2].dialCode);
                                                            setCountryCallingCode(countryDialCode);
                                                            const countryCode: any = (args[2].iso2?.toUpperCase());
                                                            setCountryCode(countryCode);
                                                        }}
                                                        onSelectFlag={(...args) => {
                                                            const countryDialCode: any = Number(args[2]);
                                                            setCountryCallingCode(countryDialCode);
                                                        }}
                                                        useMobileFullscreenDropdown={false}
                                                    />
                                                </div>
                                                {validationAfterSubmit.phoneNumber && <ErrorMessage name="phoneNumber" component="div" className={styles["error-msg"]} />}

                                                <div className={`${styles["signup-popup__registeration-form-box__password-field-container"]} ${validationAfterSubmit.password && errors.password && styles["required"]}`}>
                                                    <div className={styles["signup-popup__registeration-form-box__icon-wrapper"]}>
                                                        <LockIcon />
                                                    </div>
                                                    <Field
                                                        onKeyPress={(e: any) => {
                                                            e.stopPropagation();
                                                            setErrorMessage("");
                                                            setValidationAfterSubmit({ ...validationAfterSubmit, password: false });
                                                        }}
                                                        onBlur={(e: any) => {
                                                            if (e.target.value !== ""
                                                                &&
                                                                e.target.value.length < 5
                                                            ) {
                                                                setValidationAfterSubmit({ ...validationAfterSubmit, password: true });
                                                            } else {
                                                                setValidationAfterSubmit({ ...validationAfterSubmit, password: false });
                                                            }
                                                            // call the built-in handleBur
                                                            handleBlur(e);
                                                            // and do something about e
                                                            setFieldBlur({ ...fieldBlur, password: e.target.value });
                                                            // console.log("e",e.target.value);
                                                        }}
                                                        type="password" name="password" placeholder="كلمة المرور" id="password-field" className={styles["signup-popup__registeration-form-box__password-field"]} />

                                                    <div className={styles["signup-popup__registeration-form-box__show-password-icon-wrapper"]}>
                                                        <div onClick={() => showHidePasswordHandler()}>
                                                            <EyeIcon color={isVisible ? "#008000" : "#999"} />
                                                        </div>
                                                    </div>
                                                </div>
                                                {validationAfterSubmit.password && <ErrorMessage name="password" component="div" className={styles["error-msg"]} />}

                                                <div className="position-relative">
                                                    <Button onClick={handleValidationOnSubmit} type="submit" className={styles["signup-popup__registeration-form-box__make-new-acc-btn"]}>
                                                        {errorMessage !== "" && <div className={styles["server-error-msg"]} >{errorMessage}</div>}
                                                        انشاء حساب جديد
                                                    </Button>
                                                </div>

                                            </Form>
                                        )}

                                    </Formik>
                                </div>
                            </>
                    }


                </Modal.Body>
            </Modal>
        </>
    )
}

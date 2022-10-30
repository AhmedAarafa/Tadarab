import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsUserAuthenticated } from "configurations/redux/actions/userAuthentication";
import { useEffect } from "react";
import SignIn from "pages/SignIn";
import { setCartItems } from "configurations/redux/actions/cartItems";
import { setTheme } from "configurations/redux/actions/themeToggler";

const withAuth = (Component: any) => {
  const Auth = (props: any) => {

    const dispatch = useDispatch();

    const userAuthState = useSelector((state: any) => state.userAuthentication);
    const cartItems = useSelector((state: any) => state.cartItems);
    // const themeState = useSelector((state:any) => state.themeState);

    useEffect(() => {
      if (localStorage.getItem("token")) {
        const tokenStored: any = localStorage.getItem("token");
        const userSubscriptionState: any = localStorage.getItem("is_user_subscribed");
        dispatch(setIsUserAuthenticated({ ...userAuthState, isUserAuthenticated: true, token: tokenStored, id: userAuthState.id, isSubscribed: JSON.parse(userSubscriptionState) }));
      } else {
        dispatch(setIsUserAuthenticated({ ...userAuthState, isUserAuthenticated: false, token: null, id: 0, isSubscribed: false }));
      }

      if (localStorage.getItem("theme") === null) {
        dispatch(setTheme("light"));
        document.body.setAttribute("data-theme", "light");
        localStorage.setItem("theme","light");
        
      } else {
        if (localStorage.getItem("theme") == "light") {
          dispatch(setTheme("light"));
          document.body.setAttribute("data-theme", "light");
          localStorage.setItem("theme","light");
        } else if (localStorage.getItem("theme") == "dark") {
          dispatch(setTheme("dark"));
          document.body.setAttribute("data-theme", "dark");
          localStorage.setItem("theme","dark");
        }
      }

    }, []);
    // If user is not logged in, return login component
    // if (!userAuthState.isUserAuthenticated) {
    //   return (
    //     <SignIn />
    //   );
    // }

    // If user is logged in, return original component
    return (
      <Component {...props} />
    )
  };

  // Copy getInitial props so it will run as well
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};
export default withAuth;

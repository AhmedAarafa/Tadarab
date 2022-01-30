import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsUserAuthenticated } from "configurations/redux/actions/userAuthentication";
import { useEffect } from "react";
import SignIn from "pages/SignIn";

const withAuth = (Component:any) => {
  const Auth = (props:any) => {
    
    const dispatch = useDispatch();

    let userAuthState = useSelector((state:any) => state.userAuthetication);

    useEffect(() => {
      if (localStorage.getItem("TOKEN")) {
        dispatch(setIsUserAuthenticated({...userAuthState,isUserAuthenticated:true,token:localStorage.getItem("TOKEN")}));
      }else{
        dispatch(setIsUserAuthenticated({...userAuthState,isUserAuthenticated:false,token:null}));
      }
    },[]);
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

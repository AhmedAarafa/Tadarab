import Router from "next/router";


export function tokenValidationCheck(response:any) {
    if(response?.data?.message == "Invalid user token"){
        localStorage.removeItem("token");
        localStorage.removeItem("User-Id");
        Router.push({
            pathname: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}sign-in`,
            query: { from: "/" }
        })

        return false;
        
    }else{
        return true;
    }
 
}

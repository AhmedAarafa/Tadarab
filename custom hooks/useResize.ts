import { useEffect } from "react";


const useResize = (fn:any)=>{
    useEffect(() => {

        window.addEventListener("resize", () => {
          fn();
        });
        fn();
    
        return () => {
          window.removeEventListener("resize", () => {
            return;
          });
        }
      }, [fn]);

}


export default useResize;
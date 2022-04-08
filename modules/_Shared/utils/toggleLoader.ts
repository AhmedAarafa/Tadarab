export const toggleLoader = (status: string) => {

  if (typeof window === "object") {
      // Check if document is finally loaded
          
      console.log("Finished loading",window.document.body.className);
        //   document.addEventListener("DOMContentLoaded", function () {
          switch (status) {
            case "show":
              document.body.classList.add("loading-indicator");
              break;
            case "hide":
                setTimeout(() => {
                    
                    document.body.classList.remove("loading-indicator");
                }, 500);
              break;
        
            default:
              break;
          }
    
        // });
  }
};

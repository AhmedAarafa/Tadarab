export const toggleLoader = (status: string) => {
  if (typeof window === "object") {
    // Check if document is finally loaded

    let loader: any = document.getElementById("overlay-loader");
    let notificationBar: any = document.getElementById("notification-bar");
    let nav: any = document.getElementById("nav");
    let footer: any = document.getElementsByTagName("footer")[0];
    // console.log("Finished loading");
    switch (status) {
      case "show":
        // document.body.classList.add("loading-indicator");
        document.body.style.cssText = `overflow:hidden`;
        document.body.style.cssText = `visibility:hidden`;
        nav ? nav.style.cssText = `display:none` : null;
        // if (notificationBar) {
        //   notificationBar.style.cssText = `opacity:0`;
        // }
        // footer ? (footer.style.cssText = `opacity:0`) : null;
        loader.style.cssText = `display : flex; visibility:visible`;
        break;
      case "hide":
        setTimeout(() => {
          document.body.style.cssText = `overflow:visible`;
          document.body.style.cssText = `visibility:visible`;
          nav ? nav.style.cssText = `display:flex`: null;
          if (notificationBar) {
            // notificationBar.style.cssText = `opacity:1`;
            nav ? nav.style.cssText = `top:${notificationBar?.offsetHeight}px ;`: null;
          }
          // footer ? (footer.style.cssText = `opacity:1`) : null;
          loader.style.cssText = `display : none; visibility:hidden`;
        }, 500);
        // setTimeout(() => {
        //     document.body.classList.remove("loading-indicator");
        // }, 500);
        break;

      default:
        break;
    }
  }
};

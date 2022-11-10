export const toggleLoader = (status: string) => {
  if (typeof window === "object") {
    // Check if document is finally loaded

    let loader: any = document.getElementById("overlay-loader");
    // console.log("Finished loading");
    switch (status) {
      case "show":
        // document.body.classList.add("loading-indicator");
        // document.body.style.cssText = `overflow:hidden`;
        document.body.style.cssText = `visibility:hidden`;
        loader.style.cssText = `display : flex; visibility:visible`;
        break;
      case "hide":
        setTimeout(() => {
          // document.body.style.cssText = `overflow:visible`;
          document.body.style.cssText = `visibility:visible`;
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

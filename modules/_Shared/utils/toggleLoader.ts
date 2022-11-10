export const toggleLoader = (status: string) => {
  if (typeof window === "object") {
    // Check if document is finally loaded

    let loader: any = document.getElementById("overlay-loader");
    // console.log("Finished loading");
    switch (status) {
      case "show":
        // document.body.classList.add("loading-indicator");
        loader.style.cssText = `display : flex`;
        break;
      case "hide":
        setTimeout(() => {
          loader.style.cssText = `display : none`;
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

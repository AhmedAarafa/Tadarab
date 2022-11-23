
export const contactUsHandler = () => {
  const contactUsForm: any = document.getElementById("contact-us-form");
  window.scrollTo({ top: 10000000000000, behavior: "smooth" });
  contactUsForm.focus();
  contactUsForm.select();
};

export const openSupportConvInNewTab = (supportWPLink:String) => {
    const WINDOW:any = window;
    WINDOW.open(supportWPLink, '_blank').focus();
};

export const toggleLoader = (status:string)=>{
switch (status) {
    case "show":
    document.body.classList.add('loading-indicator');
        break;
    case "hide":
      document.body.classList.remove('loading-indicator');
        break;

    default:
        break;
}
}
export const popoverHandler = () => {
  document.addEventListener("mousemove", (e) => {
    // to capture trigger and overlay popover elements
    const trigger: HTMLElement | null = document.getElementById("discover");
    const popover: HTMLElement | null = document.getElementById("discover-popover");
    // to get thier boundaries
    const triggerBoundaries: any = trigger?.getClientRects()[0];
    const popoverBoundaries: any = popover?.getClientRects()[0];
    const dropdownIcon: any = document.getElementById("dropdown");
    // to detect root font size (HTMl font-size)
    const rootFontSize = parseFloat(
      window
      .getComputedStyle(document.getElementsByTagName("html")[0])
      .getPropertyValue("font-size")
    );
    // to determine that the mouse pointer in the range of the trigger or the overlay popover to control it's visibility
    if (
      (e.clientX >= triggerBoundaries?.left &&
        e.clientX <= triggerBoundaries?.right &&
        e.clientY >= triggerBoundaries?.top &&
        e.clientY <= 5.3 * rootFontSize) ||
      (e.clientY >= popoverBoundaries?.top &&
        e.clientY <= popoverBoundaries?.bottom &&
        e.clientX >= popoverBoundaries?.left &&
        e.clientX <= popoverBoundaries?.right)
    ) {
      popover ? (popover.style.display = "flex") : "";
      dropdownIcon.style.cssText=`
      transform:rotate(180deg);
      transition:all 0.3s linear;
      `
    } else {
      popover ? (popover.style.display = "none") : "";
      dropdownIcon.style.cssText=`
      transform:none;
      transition:all 0.3s linear;
      `
    }
  });

};

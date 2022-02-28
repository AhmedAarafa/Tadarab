export  function animateValue(id:string, start:number, end:number, duration:number) {
    if (start === end) return;
    let range = end - start;
    let current = start;
    let increment = end > start? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));
    let obj:any = document.getElementById(id);
    let timer = setInterval(function() {
        current += increment;
        obj.innerHTML = `+${current}`;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

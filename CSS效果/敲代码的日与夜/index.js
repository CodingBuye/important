window.addEventListener("mousemove", e => {
    let precentage = (100-e.clientX/window.innerWidth*100);
    document.querySelector(".sun").style.clipPath = `inset(0 ${precentage}% 0 0)`;
})
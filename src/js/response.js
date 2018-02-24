(() => {

    let leftBar = document.querySelector(".left-bar");
    let btn = document.querySelector(".right-bar__btn-mobile");
    window.onload = () => {
        responsive();
    }

    window.onresize = responsive;

    function responsive() {
        let width = window.innerWidth;
        if (width <= 767 && width >= 0) {
            leftBar.classList.add("hide-left-bar");
            btn.classList.add("show-btn");
        } else {
            leftBar.classList.remove("hide-left-bar");
            leftBar.classList.remove("show-left-bar");
            btn.classList.remove("show-btn");
        }
    }

    btn.onclick = () => {
        leftBar.classList.add("show-left-bar");
    }

    //also watch "tabs.js"
    //66-67 stroke
    // sender.onclick => hide leftbar

})();
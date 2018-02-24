(() => {
    let senders = document.querySelectorAll(".left-bar__sender");
    let tabs = document.querySelectorAll(".right-bar__tab");
    let leftBar = document.querySelector(".left-bar");
    let btn = document.querySelector(".right-bar__btn-mobile");
    let inputSearch = document.querySelector(".left-bar__input-find");

    showTab(0);

    function showTab(n) {
        tabs.cache = {};
        inputSearch.value = "";

        //clean styles for senders and set display: none; for tabs
        for (let i = 0, max = tabs.length; i < max; i++) {
            if (tabs[i].classList.contains("active-right-bar")) {
                tabs[i].classList.remove("active-right-bar");
            }
            if (senders[i].classList.contains("active-sender") ||
                (senders[i].classList.contains("show-sender")) ||
                (senders[i].classList.contains("hide-sender"))) {
                senders[i].classList.remove("active-sender", "show-sender", "hide-sender");
            }
        };

        //set tab and sender class active
        tabs[n].classList.add("active-right-bar");
        senders[n].classList.add("active-sender");

        //set images for users in chat-box

        (function setImg(i) {
            if (tabs.cache[i]) {
                return;
            } else {
                let mainUserImg = document.querySelector(".active-right-bar  .right-bar__main-user  .right-bar__img-user");
                let secUserImg = document.querySelector(".active-right-bar  .right-bar__second-user  .right-bar__img-user");
                let activeSender = document.querySelector(".active-sender > .left-bar__img");


                mainUserImg.src = "./img/lyntik.jpg";
                let activeSenderSrc = activeSender.src;
                secUserImg.src = activeSenderSrc;
                tabs.cache[i] = true;
            }

        })();


        let input = document.querySelector(".right-bar__input-message");
        input.value = "";


    }

    //click on sender; change active sender and active tab

    leftBar.onclick = (e) => {
        let width = window.innerWidth;
        for (let i = 0, max = senders.length; i < max; i++) {
            let temp = senders[i];
            if ((e.target == temp) || (checkChildren(temp, e))) {
                showTab(i);
                // if small screen, hide leftbar on click into sender
                if (width < 767) {
                    leftBar.classList.remove("show-left-bar");
                    leftBar.classList.add("hide-left-bar");
                }
            }
        }
    }

    // click can be in childnodes of "senders";
    // check click on them
    function checkChildren(elem, e) {
        for (let i = 0, max = elem.children.length; i < max; i++) {
            if (e.target == elem.children[i]) {
                return true;
            }
        }
    }




})();
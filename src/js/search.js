(() => {
    let leftBar = document.querySelector(".left-bar");
    let input = document.querySelector(".left-bar__input-find");
    let senderName = document.querySelectorAll(".left-bar__name");
    let senderDiv = document.querySelectorAll(".left-bar__sender");

    //search
    input.onkeyup = () => {
        let value = input.value;
        clear(value);
    }

    function clear(value) {
        for (let i = 0, max = senderDiv.length; i < max; i++) {
            if ((senderName[i].innerHTML.toLowerCase().indexOf(value.toLowerCase()) != -1)) { // if sender name have only 1 letter 
                if (senderDiv[i].classList.contains("hide-sender")) { //from input then show it, else hide sender
                    senderDiv[i].classList.remove("hide-sender");
                    senderDiv[i].classList.add("show-sender");
                }
            } else {
                senderDiv[i].classList.add("hide-sender");
            }
        }
    }

})();
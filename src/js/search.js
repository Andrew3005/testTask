(() => {
    let leftBar = document.querySelector(".left-bar");
    let input = document.querySelector(".left-bar__input-find");
    let senderName = document.querySelectorAll(".left-bar__name");
    let senderDiv = document.querySelectorAll(".left-bar__sender");

    //search
    input.onkeyup = () => { //if any key pressed start to search person in letf-bar
        let value = input.value;
        clear(value);
    }

    function clear(value) {
        for (let i = 0, max = senderDiv.length; i < max; i++) {
            if ((senderName[i].innerHTML.toLowerCase().indexOf(value.toLowerCase()) != -1)) { // if sender name have only 1 letter needed
                if (senderDiv[i].classList.contains("hide-sender")) { //from input then show it, else hide senders not suit
                    senderDiv[i].classList.remove("hide-sender");
                    senderDiv[i].classList.add("show-sender");
                }
            } else {
                senderDiv[i].classList.add("hide-sender");
            }
        }
    }

})();
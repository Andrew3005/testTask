//send message

(() => {

    let btnSend = document.querySelector(".right-bar__send");
    let input = document.querySelector(".right-bar__input-message");

    btnSend.addEventListener("click", createMsg);
    input.addEventListener("keypress", (e) => {
        if (e.keyCode == 13) {
            createMsg();
        }
    })



    function createMsg() {
        //send msg
        input.style.border = "";
        // check message length. If 0 then EXIT
        if (input.value == "") {
            input.style.border = "2px solid red";
            return;
        }

        let rightBarMain = document.querySelector(".active-right-bar");
        let mainUser = document.createElement("div");
        let message = document.createElement("div");
        let mainUserImg = document.createElement("img");
        let secUser = document.createElement("div");
        let answer = document.createElement("div");
        let secUserImg = document.createElement("img");
        let activeSender = document.querySelector(".active-sender > .left-bar__img");

        // create div for main-user msg
        mainUser.classList.add("right-bar__main-user");
        message.classList.add("right-bar__message");
        mainUserImg.classList.add("right-bar__img-user");

        message.innerHTML = input.value;
        mainUserImg.src = "./img/lyntik.jpg";

        mainUser.appendChild(message);
        mainUser.appendChild(mainUserImg);
        rightBarMain.appendChild(mainUser);

        //when sent msg -> input value = "";
        input.value = "";



        //bot
        switch (message.innerHTML) {
            case "Hello":
            case "hello":
            case "hi":
            case "Hi":
                {
                    answer.innerHTML = "Hi, men!";
                    break;
                }
            case "How are you?":
            case "how are you":
            case "how are you?":
                {
                    answer.innerHTML = "Very good! And you?";
                    break;
                }
            default:
                {
                    return;
                }
        }

        // create div for sec-user msg
        secUser.classList.add("right-bar__second-user");
        answer.classList.add("right-bar__message");
        secUserImg.classList.add("right-bar__img-user");

        secUserImg.src = activeSender.src;


        secUser.appendChild(answer);
        secUser.appendChild(secUserImg);
        setTimeout(() => {
            rightBarMain.appendChild(secUser);
        }, rand());

        //random time(0-2s) when bot have to give an answer
        function rand() {
            return Math.random() * 2000;
        }
    }

})();
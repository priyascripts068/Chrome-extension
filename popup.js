if(document.querySelector(".popup")){
let button = document.querySelector(".button");
let circle = document.querySelector(".circle");
let buttonon = false;

button.addEventListener("click", () => {
    if (!buttonon) {
        buttonon = true;
        button.style.animation = "transformtoyellow 1s forwards";
        circle.style.animation = "movecircleright 1s forwards";
        chrome.tabs.executeScript({
            file: "appon.js"
        });
    } else {
        buttonon = false;
        button.style.animation = "transformtoblue 1s forwards";
        circle.style.animation = "movecircleleft 1s forwards";
        chrome.tabs.executeScript({
            file: "appoff.js"
        });
    }
});
}

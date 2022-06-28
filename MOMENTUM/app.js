const h1 = document.querySelector("div.hello:first-child h1");

function handlerTitleMouseEnter() {
    const clickClass = "clicked"
    if(h1.className == clickClass){
        h1.className = ""
    } else {
        h1.className = clickClass
    }
}

h1.addEventListener("click", handlerTitleMouseEnter)
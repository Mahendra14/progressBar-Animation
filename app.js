const progressBar = document.querySelector("#progress-bar");
const section = document.querySelector("section")

const animateProgressBar = () => {
    const scrollDistance = -section.getBoundingClientRect().top;
    const scrollHeight = section.getBoundingClientRect().height;
    // subtracting with the height of the html element 
    //now it ranges from -7 to some 104
    const progressWidth = (scrollDistance / (scrollHeight - document.documentElement.clientHeight) ) * 100;
    //to get nicer values
    const widthValue = Math.floor(progressWidth);
    progressBar.style.width = widthValue + "%";

    //this takes care of useless negative values
    if(widthValue < 0){
        progressBar.style.width = "0%";
    }
}

//adding event listener to scroll
window.addEventListener("scroll",animateProgressBar);
//Global variables
var menu = document.getElementsByTagName("menu"), nav = document.getElementsByTagName("nav");

//Menu
const perform = (elem, type) => {
    menu[0].classList.add(type);
    overlay(type, 'ham');
}

//Detect vertical scroll
window.onscroll = () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        nav[0].childNodes[3].classList.add("swiper_nav");
    } else {
        nav[0].childNodes[3].classList.remove("swiper_nav");
    }
}

//Overlay
const overlay = (type, elem) => {
    if (document.getElementsByClassName("overlay").length > 0){ 
        document.getElementsByClassName("overlay")[0].remove();
        document.body.style.overflowY = 'auto';
    } else {
        let append_tag = document.createElement("div");
        append_tag.className = "overlay";
        switch (elem){
            case "ham":
                append_tag.setAttribute("onclick", "overlay(\'slide_out\', '');");
            break;
            case "modal":
                append_tag.setAttribute("onclick", "overlay(\'modal_close\', '');");
            break;
            
        }
        document.body.appendChild(append_tag);
        document.body.style.overflowY = 'hidden';
    }
    switch (type){
        case "slide_out":
            menu[0].classList.remove("slide_in");
        break;
        case "modal_close":
            document.getElementsByClassName("modal")[0].style.display="none";
        break;
    }
}


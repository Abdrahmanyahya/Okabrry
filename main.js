const nav1 = document.querySelector(".back-script");

const nav2 = document.querySelector(".nav-basic");

const categoris = document.querySelector(".catogries");

const fectured = document.querySelector(".ourproduct");
const Getintouch = document.querySelector(".Getintouch");
const video = document.querySelector(".Housevidio");

window.onscroll = (e)=>{


if(window.scrollY >= categoris.offsetTop){
    nav1.classList.add("backscroll");
    nav2.classList.add("backscroll2");
}

else{
    nav1.classList.remove("backscroll");
    nav2.classList.remove("backscroll2");
}
if(window.scrollY >= fectured.offsetTop){
     nav1.classList.add("backscroll3");
    nav2.classList.add("backscroll4");
}
else{
    nav1.classList.remove("backscroll3");
    nav2.classList.remove("backscroll4");
}

if(window.scrollY >= Getintouch.offsetTop){
     nav1.classList.add("backscroll5");
    nav2.classList.add("backscroll6");
}
else{
    nav1.classList.remove("backscroll5");
    nav2.classList.remove("backscroll6");
}

    
}



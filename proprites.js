const nav1 = document.querySelector(".back-script");

const nav2 = document.querySelector(".nav-basic");

const categoris = document.querySelector(".catogries");

const fectured = document.querySelector(".ourproduct");
const Getintouch = document.querySelector(".Getintouch");
const video = document.querySelector(".Housevidio");
const page3 = document.querySelector(".page3script");

window.onscroll = (e)=>{
if(window.scrollY >= page3.offsetTop){
    nav1.classList.add("backscroll5");
    nav2.classList.add("backscroll6");
}

else{
    nav1.classList.remove("backscroll5");
    nav2.classList.remove("backscroll6");
}

}



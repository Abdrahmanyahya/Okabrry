const nav1 = document.querySelector(".back-script");

const nav2 = document.querySelector(".nav-basic");

const blog = document.querySelector(".Blog")



window.onscroll = (e)=>{


if(window.scrollY >= blog.offsetTop){

  nav1.classList.add("backscroll3");
    nav2.classList.add("backscroll4");
}
else{
    nav1.classList.remove("backscroll3");
    nav2.classList.remove("backscroll4");
}





}
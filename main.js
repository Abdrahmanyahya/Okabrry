const nav1 = document.querySelector(".back-script");

const nav2 = document.querySelector(".nav-basic");

const categoris = document.querySelector(".catogries");

const fectured = document.querySelector(".feturedscript");
const Getintouch = document.querySelector(".Getintouch");
const video = document.querySelector(".Housevidio");
const page3p = document.querySelector(".page3script");
const agent = document.querySelector(".agentpage4");
const blog = document.querySelector(".Blog");
const modal = document.querySelector(".my-model");
const inputimage =Array.from (document.querySelectorAll(".imgfecut"));
const modalimage = document.querySelector(".modal-img")
let currentindex =0;
const close = document.querySelector(".close");
window.addEventListener("scroll",()=>{
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

   
});


window.addEventListener("scroll",()=>

{
if(window.scrollY >= video.offsetTop ){
    nav1.classList.add("backscroll5");
    nav2.classList.add("backscroll6");
}
else{
    nav1.classList.remove("backscroll5");
    nav2.classList.remove("backscroll6");
}
})
 
window.addEventListener("scroll",()=>{
if(window.scrollY >= page3p.offsetTop){
    nav1.classList.add("backscroll5");
    nav2.classList.add("backscroll6");
}

else{
    nav1.classList.remove("backscroll5");
    nav2.classList.remove("backscroll6");
}
});


window.addEventListener("scroll",()=>{

 if(window.scrollY >= agent.offsetTop){
     nav1.classList.add("backscroll5");
    nav2.classList.add("backscroll6");
}
else{
    nav1.classList.remove("backscroll5");
    nav2.classList.remove("backscroll6");
}



});

window.addEventListener("scroll",()=>{
if(window.scrollY >= blog.offsetTop){

  nav1.classList.add("backscroll3");
    nav2.classList.add("backscroll4");
}
else{
    nav1.classList.remove("backscroll3");
    nav2.classList.remove("backscroll4");
}

});

const showmodal =()=>{
    modal.classList.remove("d-none");

}

const hiddenmodal = ()=>{
    modal.classList.add("d-none");
}

inputimage.forEach((img)=>{

    
    img.addEventListener("click",(e)=>{
 modalimage.setAttribute("src",e.target.getAttribute("src"));
showmodal();
currentindex = inputimage.indexOf(e.target);
console.log(currentindex);
    })
   
    close.addEventListener("click",()=>{

    hiddenmodal();

    })

})
const left = document.querySelector(".left");
const previous = ()=>{
currentindex--;
if(currentindex==0){
    currentindex=inputimage.length -1;
}
modalimage.setAttribute("src",inputimage[currentindex].getAttribute("src"));
}

left.addEventListener("click",previous);
const nextimage = ()=>{
    
    currentindex++;
    if(currentindex >=inputimage.length){
        currentindex=0;
    }
    modalimage.setAttribute("src",inputimage[currentindex].getAttribute("src"));
}

const right= document.querySelector(".right");

right.addEventListener("click",nextimage);

document.addEventListener("keydown" ,({code})=>{
if(code=="ArrowRight"){
        nextimage();
    }
    else if(code=="ArrowLeft"){
    previous();
    }
    else if(code=="Escape"){
        hiddenmodal();
    }


})



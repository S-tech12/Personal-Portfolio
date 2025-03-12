let container=document.querySelector(".container");
let icons=document.querySelector(".icons");
let heading=document.querySelector(".heading");

setTimeout(()=>{
    icons.classList.add("removeFirst");
    heading.classList.add("removeSecond");
    
    setTimeout(()=>{
        container.remove();
    },2000);
    
    setTimeout(()=>{
        window.location.href="HTML/Main Folder/Portfolio.html";
    },2000);


},7000);

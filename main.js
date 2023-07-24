
//  about me sction start 
let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
       for (tablink of tablinks){
        tablink .classList.remove("active-link");
       }
       for (tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
       }
       event.currentTarget.classList.add("active-link");
       document.getElementById(tabname).classList.add("active-tab")
}

// about me section end 

// sidemenu section start 
 
let sidemenu =document.getElementById("sidemenu");

function openmenu (){
     sidemenu.style.right ="0";
}
function closemenu (){
     sidemenu.style.right ="-200px";
}
// sidemenu section end
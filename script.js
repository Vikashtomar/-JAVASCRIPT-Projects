
let box = document.querySelector(".box");
const btn = document.querySelector('button');

btn.addEventListener("click",function(){
  
    // box.style.background="red";

  if(box.style.background === "white"){
    box.style.background="black";
    box.style.color="white"

  }else{
    box.style.background="white";
    box.style.color="black"
  }
  
        
})


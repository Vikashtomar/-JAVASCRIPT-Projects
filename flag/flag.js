let inp = document.getElementById("inp");
let btn = document.querySelector("button");
let para = document.querySelector("p");


btn.addEventListener("click", function(){
   fetch("https://flagcdn.com/en/codes.json")
   
   .then(res=>res.json())
   .then((data=>{

      console.log(data)
   }))
})
let btn1 = document.querySelector("button")[0];
    let btn2 = document.querySelector("button")[1];
    let count = 0;
    let result = document.querySelector("h1");
    console.log(result);

    function inc(){
     result.innerHTML =   ++count;
    }
    function dec(){
   


    (count<=0 ) ? 0 : count--;
    result.innerHTML = count;
  }
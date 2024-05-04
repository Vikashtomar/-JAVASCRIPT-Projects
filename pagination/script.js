 
const pageNumbers = document.querySelector(".pageNumbers")
const paginationList = document.getElementById("pagination")

const listItem = document.querySelector("li");

const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

const  contentLimit = 10;

const pageCount = Math.ceil(listItem.length /contentLimit)

let currentPage = 1;

const displayPageNumbers = (index) =>{
    const pageNumber = document.createElement("a");
    pageNumber.innerText = index;
    pageNumber.setAttribute('href',"a");
    pageNumber.setAttribute("index",index);

    pageNumbers.appendChild(pageNumber);


}

const getPageNumbers = ()=>{
    for(let i=1; i <= pageCount; i++){
        displayPageNumbers(i);
    };
}
const disableButtons = (button) =>{
    button.classList.add("disabled");
    button.setAttribute("disabled",true)

}

const enableButton = (button) =>{
    button.classList.remove("disabled");
    button.removeAttribute("disabled");

} 
const controlButtonStatus = ()=>{
    if(currentPage == 1){
        disableButtons(prevButton);

    }
else {
    enableButton(prevButton);
}
if(pageCount == currentPage){
    disableButton(nextButton)
}
else {
    enableButton(nextButton);
}
};
const handleActivePageNumber = () =>{
    document.querySelectorAll('a').forEach((button) =>{
        button.classList.remove("active");
        const pageIndex = Number(button.getAttribute("index"))
        if(pageIndex == currentPage){
            button.classList.add("active");

        }
    });
};

const setCurrentPage = (pageNum) =>{
   currentPage = pageNum; 
   handleActivePageNumber();
   controlButtonStatus();

   const prevRange = (pageNum - 1) *contentLimit;
   const currRange = pageNum * contentLimit;
   listItem.forEach((item,index) =>{
item.classList.add('hidden');
if(index >= prevRange && index < currRange){
    item.classList.remove('hidden');
}
   });
};
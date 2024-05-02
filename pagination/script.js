// const ul = document.querySelector('ul')
// let allPages = 15;
// function elem(allPages,page)
// {
//     let li ='';

//     let beforePages = page -1;
//     let afterPages = page + 1;

//     if(page>1){
//         li += `<li class="btn" onclick="elem(allPages, ${page - 1})"> <i class="fa-solid fa-angle-left"></i> </li>`;

//     }
//     for(let pageLength = beforePages <= afterPages; pageLength++){
// if(page == pageLength){
//     liActive = 'active';

// }else{
//     liActive = "";
// }
// li += `<li class="numb ${liActive}"><span>${pageLength}</span></li>`
//     }
// if(page<allPages)
// {
//     li += ` <li class="btn" onclick="elem(allPages, ${page + 1})" > <i class="fa-solid fa-angle-right"></i></li>`;

// }
// ul.innerHTML = li;

// }
// elem(allPages,2)


const ul = document.querySelector('ul');
let allPages = 15;

function elem(allPages, page) {
    let li = '';
    let beforePages = page - 1;
    let afterPages = page + 1;

    if (page > 1) {
        li += `<li class="btn" onclick="elem(${allPages}, ${page - 1})"> <i class="fa-solid fa-angle-left"></i> </li>`;
    }

    for (let pageLength = beforePages; pageLength <= afterPages; pageLength++) {
        let liActive = (page == pageLength) ? 'active' : '';
        li += `<li class="numb ${liActive}"><span>${pageLength}</span></li>`;
    }

    if (page < allPages) {
        li += ` <li class="btn" onclick="elem(${allPages}, ${page + 1})" > <i class="fa-solid fa-angle-right"></i></li>`;
    }

    ul.innerHTML = li;
}

elem(allPages, 2);

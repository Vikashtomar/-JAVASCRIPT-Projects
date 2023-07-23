// url   https://dummyjson.com/products

function logdata(){
    fetch("https://dummyjson.com/products")
    .then((res)=> {
        return res.json()
    })
    .then((result)=>
    
    console.log(result))
    showdata(result.products)
   
}

logdata()

function showdata(data){
    for(i=0; i<data.length; i++){
        let div = document.createElement('div')
        div.classList.Add("products");
        let img = document.createElement('img')
        img.src = data[i].thumbnail;
        
        let title = document.createElement('h3')
        title = data[i].title;
        
        let price = document.createElement('p')
        price = data[i].price;
        
        let des = document.createElement('p')
        des = data[i].description;
        
        
    }
    
    div.append(img)
    div.append(title)
    div.append(price)
    div.append(des)
}

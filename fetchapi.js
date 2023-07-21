let p = fetch("https://goweather.herokuapp.com/weather/agra")
p.then((value)=>{
    console.log(value.status);
    console.log(value.ok)
    return value
}).then((value)=>{
    console.log(value)
    if (value && value.json){
        let data=JSON.parse(value._bodyInit).data
        console.log(`Temperature in Agra is ${Math.round(((parseInt(data[0
            ].main.temp)-273)*9)/5+32)}°F`)
            }else{
                throw new Error('No Data')
                }
})
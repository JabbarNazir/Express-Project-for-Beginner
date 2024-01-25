const submitBtn = document.getElementById('submitBtn')
const cityName = document.getElementById('cityName')
const city_name = document.getElementById('city_name')


const getInfo= async (event) => {
    event.preventDefault();    
    let cityVal = cityName.value;
    if(cityVal === ""){
        city_name.innerHTML=`Please Write name before search`;
    }else{

        try{
            // let url= `api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=17dd23fa19d8aeb43850abef5bc25c74`
            // let url = `api.openweathermap.org/data/2.5/forecast/hourly?q=${cityVal}&appid=17dd23fa19d8aeb43850abef5bc25c74`
            let url= `https://dummyjson.com/products?q=${cityVal}`;
            const response =await fetch(url);

            const data = await response.json();
            console.log(data);

        }
        catch{
            city_name.innerHTML=`Please Enter the city name properly`;
        }


    }
}

submitBtn.addEventListener('click',getInfo)


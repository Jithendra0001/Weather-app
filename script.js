var inputcity=document.querySelector("#inputcity");
var cityoutput=document.querySelector("#cityoutput");
var coord=document.querySelector("#coord");
var temp=document.querySelector("#temp");
var feels=document.querySelector("#feels");
var tmin=document.querySelector("#tmin");
var tmax=document.querySelector("#tmax");
var humid=document.querySelector("#humid");
var cloudy=document.querySelector("#cloudy");
var press=document.querySelector("#press");
var descri=document.querySelector("#descri");
var country=document.querySelector("#country");

function convert(temparature){
    return (temparature-273).toFixed(2);
}
apiid='3045dd712ffe6e702e3245525ac7fa38'
function result(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputcity.value+'&appid='+apiid)
    .then(res =>res.json())
    .then(data => {
        cityoutput.innerHTML=`Weather details in <span>${data['name']}<span><hr>`

        coord.innerHTML=`Location: ${data['coord']['lat']} °N, ${data['coord']['lon']} °E`

        temp.innerHTML = `Temperature: <span>${ convert(data['main']['temp'])} ℃</span>`

        feels.innerHTML=`feels like: ${ convert(data['main']['feels_like'])}`
        
        tmin.innerHTML=`Minimum temperature: ${ convert(data['main']['temp_min'])}`

        tmax.innerHTML=`Maximum temperature: ${ convert(data['main']['temp_max'])}`

        humid.innerHTML=`Humidity: ${data['main']['humidity']}`

        press.innerHTML=`pressure: ${data['main']['pressure']}`


        cloudy.innerHTML=`cloudiness: ${data['clouds']['all']} %`

        descri.innerHTML =`Sky conditions: ${data['weather'][0]['description']}`

        country.innerHTML=`Country code: '${data['sys']['country']}'`

    })
    .catch(err => {location.reload();alert('You entered Wrong city name')
    }
    )
}
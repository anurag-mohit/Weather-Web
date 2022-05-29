const submitbtn = document.querySelector("#submitBtn");
const cityname = document.querySelector("#cityName");
const output = document.querySelector('#city_name');
const temp = document.querySelector('.temps');
const temp_status = document.querySelector('#temp_status');
const datahide = document.querySelector(".middle_layer");
const today_date=document.querySelector("#today_date");
const today=document.querySelector("#today");
let info=new Date();
let date=info.getDate();
let month=info.getMonth();
let days=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
let day=days[info.getDay()];
today_date.innerText=`${date} ${months[month]}`;
today.innerText=day;
const change = async (event) => {
    event.preventDefault();
    if (cityname.value === "") {
        output.innerText = `Plz Write the city name`;
        datahide.classList.add('data_hide');
    }
    else {
        try {
            let city = cityname.value;
            // console.log(city);
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=1f7673ab3a9c3016122b9f83170ba857`;
            const res = await fetch(url);
            const data = await res.json();
            let x=data.main.temp;
            // console.log(x);
            output.textContent = `${data.name}, ${data.sys.country}`
            temp.innerText = data.main.temp;
            const type = data.weather[0].main;
            if (type == "Clear") {
                temp_status.innerHTML = `<i class="fas fa-sun" style="color:#eccc68"></i>`;
            }
            else if (type == "Clouds"&&x>15) {
                temp_status.innerHTML = "<i class='fas fa-cloud'style='color:#f1f2f6'></i>";
            }
            else if (type == "Rain") {
                temp_status.innerHTML = "<i class='fas fa-colud-rain' style='color:#a4b0be'></i>";
            }
            else if(x<15){
                console.log("asd");
                temp_status.innerHTML=`<i class="far fa-snowflake" style="color:#fffafa"></i>`;
            }
            datahide.classList.remove('data_hide');
        }
        catch (err) {
            console.log(err);
            output.innerText = `Plz enter the correct city name`;
            datahide.classList.add('data_hide');
        }
    }

}
submitbtn.addEventListener("click", change);
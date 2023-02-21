var loc = document.getElementById("loc");
var img = document.getElementById("weather");
var urlCompleta = "";
window.addEventListener("load", function () {
    if (this.navigator.geolocation){
        this.navigator.geolocation.getCurrentPosition(function(pos){
            var lat = pos.coords.latitude.toFixed(2);
            var long = pos.coords.longitude.toFixed(2);
            urlCompleta = "https://api.open-meteo.com/v1/forecast?latitude=" + lat + "&longitude=" + long + "&hourly=temperature_2m&timezone=auto&past_days=7";
            img.href = "https://api.open-meteo.com/v1/forecast?latitude=" + lat + "&longitude=" + long + "&hourly=temperature_2m&timezone=auto&past_days=7";
            img.innerHTML = "Ubícate";
            const getData =  async (url) => {
                await fetch(url).then((response) => {
                    return response.json();
                }).then((data) => {
                    console.log(data);
                    console.log(data['timezone']);
                    console.log(data['hourly']['time'][0]);
                    console.log(data['hourly']['temperature_2m'][0]);
                    const labels =
                        data['hourly']['time'].map(element =>{
                            element.substring();
                        })
                     const temp = 
                         data['hourly']['temperature_2m'].map(element =>{
                            element.substring();
                        })
                    const weather = {
                        labels: labels,
                        datasets: [{
                            label: data['timezone'],
                             data: temp,
                             backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(255, 159, 64, 0.2)',
                                'rgba(255, 205, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(201, 203, 207, 0.2)'
                             ],
                             borderColor: [
                                 'rgb(255, 99, 132)',
                                 'rgb(255, 159, 64)',
                                 'rgb(255, 205, 86)',
                                 'rgb(75, 192, 192)',
                                 'rgb(54, 162, 235)',
                                 'rgb(153, 102, 255)',
                                 'rgb(201, 203, 207)'
                             ],
                             borderWidth: 1
                        }]
                    }
                })
                const config = {type: 'bar', data: weather, options: {scales: {y: {beginAtZero: true}}}}
            }
            getData(urlCompleta);
        }, function(err){
            console.warn(err.message);
            switch(err.code){
                case err.PERMISSION_DENIED:
                    loc.innerHTML = "No tenemos los permisos suficientes";
                    break;
                case err.POSITION_UNAVAILABLE:
                    loc.innerHTML = "No ha sido posible encontrar la ubicación";
                    break;
                case err.TIMEOUT:
                    loc.innerHTML = "Tu ubicación no está disponible";
                    break;
                default:
                    loc.innerHTML = "Error desconocido";
                    break;
            }
        })
    } else {
        loc.innerHTML = "El navegador no soporta la geolocalización";
    }
})
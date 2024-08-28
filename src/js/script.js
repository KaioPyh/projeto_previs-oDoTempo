const key = "f949004dd2a7b13843f15c964896f578"

function dadosEmTela(dados){
    console.log(dados)
    document.querySelector(".cidadeName").innerHTML = "Tempo em: " + dados.name

    document.querySelector(".temperatura").innerHTML= Math.floor(dados.main.temp) + "°C" 

    document.querySelector(".clima").innerHTML= dados.weather[0].description

    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"

    document.querySelector(".imgPrevisao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png` 
}

async function buscarCidade(cidade){

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())


    dadosEmTela(dados)
}

function btnBusca(){
    const cidade = document.querySelector(".cidade").value

    buscarCidade(cidade)
}
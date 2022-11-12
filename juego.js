var number;
var numberArray;
var ganadas;
var perdidas;
var ronda;

function iniciarPartida() {
    var username = document.getElementById('username');
    number = Math.floor(Math.random() * 10000);
    titleName = document.getElementById('playerInformation');

    if (username.value.trim() === "") {
        titleName.innerHTML = "Default-Name";

    }else {
        titleName.innerHTML = username.value;

    }
    document.getElementById('botonJuego').style.display = 'block';
    document.getElementById('botonPlay').style.display = 'none';

    ganadas = document.getElementById('marcadorGanadas');
    perdidas = document.getElementById('marcadorPerdidas');
    ronda = 1;
    document.getElementById("textoBox").innerHTML = "Round " + ronda;
    numberArray = number.toString().split('');

    document.getElementById('marcadores').style.display = "block";
}

function play() {
    // document.getElementById('playerInformation').innerHTML = numberArray[0];

    var text = document.getElementById('username');

    if (isNaN(text.value)) {
        // document.getElementById('playerInformation').innerHTML = "NO es integer";
        alert("Enter a valid number");

    }else {
        // document.getElementById('playerInformation').innerHTML = "es integer";
        if (text.value > 999 && text.value < 10000) {
            

        }else {
            alert("Enter a valid number between 1000 and 9999");

        }

    }
    

}
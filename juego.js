var number;
var numberArray;
var ganadas;
var perdidas;
var ronda;
var ganadasContador;
var perdidasContador;

function iniciarPartida() {
    var username = document.getElementById('username');

    // number = Math.floor(Math.random() * 10000);
    // number = 1693;

    cogerNumero();

    titleName = document.getElementById('playerInformation');

    ganadasContador = 1;
    perdidasContador = 1;

    if (username.value.trim() === "") {
        titleName.innerHTML = "Default-Name";

    }else {
        titleName.innerHTML = username.value;

    }
    titleName.innerHTML = numberArray;

    document.getElementById('botonJuego').style.display = 'block';
    document.getElementById('botonPlay').style.display = 'none';

    ganadas = document.getElementById('marcadorGanadas');
    perdidas = document.getElementById('marcadorPerdidas');
    ronda = 1;
    document.getElementById("textoBox").innerHTML = "Round " + ronda;
    // numberArray = number.toString().split('');

    document.getElementById('marcadores').style.display = "block";
    document.getElementById('tabla').style.display = "block";

}

function play() {
    // document.getElementById('playerInformation').innerHTML = numberArray[0];

    var text = document.getElementById('username');
    var acertadas = 0;
    var acertadasPosicion = 0;

    if (isNaN(text.value)) {
        // document.getElementById('playerInformation').innerHTML = "NO es integer";
        alert("Enter a valid number");

    }else {
        // document.getElementById('playerInformation').innerHTML = "es integer";
        if (text.value > 999 && text.value < 10000) {

            if (text.value === number.toString()) {
                document.getElementById('marcadorGanadas').innerHTML = ganadasContador++;
                
            }else {
                numeroArrayRespuesta = text.value.toString().split('');

                if (numeroArrayRespuesta[0] === numberArray[0].toString()) {
                    acertadasPosicion++;
                }
                if (numeroArrayRespuesta[1] === numberArray[1].toString()) {
                    acertadasPosicion++;
                }
                if (numeroArrayRespuesta[2] === numberArray[2].toString()) {
                    acertadasPosicion++;
                }
                if (numeroArrayRespuesta[3] === numberArray[3].toString()) {
                    acertadasPosicion++;
                }

                var arrayDesechable = [].concat(numberArray);
                var primeraVez = true;

                for (const element of numeroArrayRespuesta) {
                    for (var num = 0; num < 4; num++) {
                        if (arrayDesechable[num].toString() === element && primeraVez) {
                            acertadas++;
                            arrayDesechable[num] = "f";
                            primeraVez = false;
                        }
                    }
                    primeraVez = true;
                }

                const mytable = document.getElementById('dynamic-table');

                let newRow = document.createElement('tr');
    
                let cell = document.createElement('td');
                cell.innerText = text.value.toString().split('')[0];
    
                let cell2 = document.createElement('td');
                cell2.innerText = text.value.toString().split('')[1];
            
                let cell3 = document.createElement('td');
                cell3.innerText = text.value.toString().split('')[2];
    
                let cell4 = document.createElement('td');
                cell4.innerText = text.value.toString().split('')[3];

                let cell5 = document.createElement('td');
                cell5.innerText = acertadas;

                let cell6 = document.createElement('td');
                cell6.innerText = acertadasPosicion;
    
                newRow.appendChild(cell);
                newRow.appendChild(cell2);
                newRow.appendChild(cell3);
                newRow.appendChild(cell4);
                newRow.appendChild(cell5);
                newRow.appendChild(cell6);
            
                mytable.appendChild(newRow);
                // titleName.innerHTML = numeroArrayRespuesta;
                
                
            }

           
        }else {
            alert("Enter a valid number between 1000 and 9999");

        }

    }
    

}

function cogerNumero() {
    numberArray = [];
    let repetido;
    number = "";
    for (let i = 0; i < 4; i++) {
        while (!numberArray[i]) {
            repetido = true;
            while (repetido == true) {
                let random = Math.random();
                random = random * 9 + 1;
                random = Math.trunc(random);
                for (let j = 0; j < numberArray.length; j++) {
                    if (numberArray[j] == random) {
                        repetido = true;
                        break;
                    } else {
                        repetido = false;
                    }
                }
                numberArray[i] = random;
            }

        }
    }

    for (const element of numberArray) {
        number = number + element.toString();
    }

}
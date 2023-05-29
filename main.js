//  .💡 ACORDION  
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
//  .💡 BUTTONS  ALERT
function mostarAlert(msj) {
    alert(msj)
}
//  .💡 BUTTONS  OPERACIONES
function operacionesAritmeticas(operacion) {
    if (operacion=="suma") {
        let uno = parseFloat(prompt("Dame el primer número a sumar"))
        let dos = parseFloat(prompt("Dame el segundo número a sumar"))
        let respuesta = uno + dos;
        document.querySelector("#respuesta").textContent = respuesta;
    }
}


//  .💡 THE MODAL
var modal = document.getElementById("myModal");
var btn = document.getElementById("respuesta");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
  document.querySelector("#respuestaModal").textContent = `Tu respuesta es ${this.innerHTML}`;
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
//  .💡 TEMPORIZADOR
function temporizador() {
    setInterval(iniciar, 1000)
}
let contador = 1;

function iniciar() {
    let barra_temporizador = document.querySelector("#barra_temporizador");
    if (contador<11) {
        barra_temporizador.innerHTML += `<p>${contador}</p>`;
        console.log(`<p>${contador}</p>`)
        contador= contador + 1;
    }
}
function vaciar() {
    document.querySelector("#barra_temporizador").innerHTML = "";
    // contador = 1;
}

function modoOscuro() {
    document.querySelector("#body").style.color = "white";
    document.querySelector("#body").style.background= "black";
}
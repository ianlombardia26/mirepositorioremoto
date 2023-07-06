function showAlert () {
     alert('¡hola, esta es una alerta desde JavaScript!')
    }
/*
    let numero = 40;
    let numero2 = 5;
    let numeroTexto = "35";
    let soyObjeto = {ciudad:"buenos aires", habitantes:"3000"}

    console.log(numero);
    console.log(typeof numero);
    console.log(numeroTexto);
    console.log(typeof numeroTexto);
    console.log(soyObjeto);
    console.log(typeof soyObjeto);

   let resultado = numero + numero2;
   console.log(resultado)

   let resultado3 = numero + numero2 + numeroTexto;
   console.log(resultado3);
   console.log(typeof resultado3);

   let edad = 21;
   if (edad >= 18){
    console.log("es mayor de edad")
   }
   
   else{
    console.log("menor de edad")
   }

   let mujer = false;
   let casada = true;
   if(mujer == true && casada == true){
    console.log("no disponible")
   }
   else{
    console.log("disponible")
   }
   if(mujer == true || casada== false){
    console.log("cita")
   }
   else{
    console.log("no cita")
   }


   if(numero % 2 == 0){
    console.log("numero par")
   }
   else{
    console.log("es un numero impar")
   }
/*
   numero = ++numero;
   console.log(numero)
   numero = --numero;
   console.log(numero)
   numero = numero**4;
   console.log(numero)
   numero = numero/4;
   console.log(numero)

   let nombre = "ian";
   let apellido= "lombardia"
   let nombreCompleto = nombre + " "+apellido;
   console.log(nombreCompleto)
 */



//encontrar boton en html mediante id
  /* const miBoton = document.getElementById('miBoton');*/

//definir la funcion que se ejecutara cuando se haga click en el boton
/*
function handleClick(){
     alert('¡hola! has hecho click en el boton.')
}
miBoton.addEventListener("click", handleClick);



const form = document.getElementById('myForm');

form.addEventListener('submit' , function(event){
event.preventDefault();
validateForm();
} );

function validateEmail(email) {
     const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
     return regex.test(email);
   }
function validateForm() {
     const emailInput = document.getElementById('email');
     const email = emailInput.value;



     if (!validateEmail(email)) {
          alert('Por favor ingrese un correo electrónico válido.');
        } else {
          alert('Correo electrónico enviado correctamente.');
        }
      }
      */







/*ejercicio4
let invertir = ('hola mundo');
console.log(invertir);
console.log();


let invertirPalabra = invertir.split('').reverse().join('');
console.log(invertirPalabra)
*/

/*
let numero1 = 17;
let numero2 = 14;

let resultado = (numero1 + numero2);
console.log(resultado);

let multiplicacion = (numero1 * numero2);
console.log(multiplicacion);

let division = (numero1 / numero2);
console.log(division); 

let resta = (numero1 % numero2);
console.log(resta);
*/

document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-ul").
                      classList.toggle("nav-ul-responsive")})
                  

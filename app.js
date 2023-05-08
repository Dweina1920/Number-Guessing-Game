// Good luck Dina !

let estoyJugando = true;
let numeroCorrecto = Math.floor(Math.random() * 100);
let numIntentos = 10;


document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault(); // Impedimos que el formulario haga un petición GET

  let intentosIncorrectos = document.querySelector('.guesses');
 
  


  const numeroMayorMenorCorrecto = () => {
    //Cojemos el numero del input
    let currentNumberInInput = document.querySelector("#guessField").value;
    //Cojemos el mensaje de mayor o menor
    let lowOrHi = document.querySelector(".lowOrHi");
    lowOrHi.style.color = "black";
   

    if (currentNumberInInput > numeroCorrecto && currentNumberInInput <=100) {
      lowOrHi.textContent = "El numero Too High! Try again!";
    } else if (currentNumberInInput < numeroCorrecto) {
      lowOrHi.textContent = "Too low! Try again!";
     
    }else if(currentNumberInInput > 100){
      alert('El númmero máximo permitido es 100')
    } else if (currentNumberInInput == numeroCorrecto) {
      console.log("CORRECTO");
      lowOrHi.textContent = "CONGRATULATIONS!!!";
      lowOrHi.style.color = "red";
    }

    intentosIncorrectos.textContent += `${currentNumberInInput} `;

   
  };

  numeroMayorMenorCorrecto();
  //Comprobar si el número que ha puesto el usuario es mayor o menos que el numeroCorrecto. Tomar decisiones.

  console.log("Has dado click al Submit");
});

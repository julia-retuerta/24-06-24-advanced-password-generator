// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

// PASOS

//Sincronizar el length del nuevo password con el input range
//Que al cambiar el range, se refleje en el length
//Que al darle al botón de generar contraseña, genere una contraseña
//Que al darle al botón de generar contraseña, se genere una contrseña de la longitud que le hemos dicho

const availableCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890!@#$%^&*()_+-={}[]:;<>,.?/';

const passwordElement = document.getElementById('password');
const rangeLabelElement = document.getElementById('range-label');
const rangeInputElement = document.getElementById('range');
const generatePasswordButtonElement = document.getElementById('generate-password-button');

let passwordLength = rangeInputElement.value;
let finalPassword = '';

const updateLabel = () => {
  passwordLength = rangeInputElement.value;
  rangeLabelElement.textContent = `LENGTH: ${passwordLength}`;
};

rangeInputElement.addEventListener('input', updateLabel);

// función que se encarga de generar el bucle
const generatePassword = () => {
  finalPassword = '';
  for (let i = 0; i < passwordLength; i++) {
    // función que se encarga de generar el carácter aleatorio
    const randomPosition = Math.floor(Math.random() * availableCharacters.length);
    const randomCharacter = availableCharacters.charAt(randomPosition);
    finalPassword += randomCharacter;
  }

  // función que se encarga de escribir el final password
  passwordElement.textContent = finalPassword;
};

generatePasswordButtonElement.addEventListener('click', generatePassword);

//finalPassword = ''; esto sirve para que cada vez que se pulsa el botón, se vacíe el campo de la ccontraseña y se genere una nueva.

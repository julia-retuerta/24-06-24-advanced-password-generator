// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

// EXPLICACIONES

// const generatePassword -> función que se encarga de generar el bucle
//  const randomPosition y  const randomCharacter -> función que se encarga de generar el carácter aleatorio
// finalPassword = ''; -> sirve para que, cada vez que se pulsa el botón, se vacíe el campo de la ccontraseña y se genere una nueva.
// passwordElement.textContent = finalPassword -> función que se encarga de escribir el final password

// PASOS

//Sincronizar el length del nuevo password con el input range
//Que al cambiar el range, se refleje en el length
//Que al darle al botón de generar contraseña, genere una contraseña
//Que al darle al botón de generar contraseña, se genere una contrseña de la longitud que le hemos dicho

const availableCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890!@#$%^&*()_+-={}[]:;<>,.?/';
const upperCaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
const numbersCharacters = '0123456789';
const symbolsCharacters = '!@#$%^&*()_+-={}[]:;<>,.?/';

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

const optionsChecked = () => {
  const inputElements = document.querySelectorAll('input[type="checkbox"]:checked');
};

generatePasswordButtonElement.addEventListener('click', optionsChecked);

const generatePassword = () => {
  finalPassword = '';
  for (let i = 0; i < passwordLength; i++) {
    const randomPosition = Math.floor(Math.random() * availableCharacters.length);
    const randomCharacter = availableCharacters.charAt(randomPosition);
    finalPassword += randomCharacter;
  }

  passwordElement.textContent = finalPassword;
};

generatePasswordButtonElement.addEventListener('click', generatePassword);

/* const checkboxButtonElement = document.getElementById('checkbox-button');
const checkboxInfoElement = document.getElementById('checkbox-info');

const checkboxChecked = () => {
  // esta constante hay que declararla dentro de la función para que funcione cuando se presiona el botón
  const inputsElements = document.querySelectorAll('input[type="checkbox"]:checked');
  let resultText = `Hay ${inputsElements.length} checkbox marcados: `;

  inputsElements.forEach(input => {
    resultText += input.value + ' ';
  });

  checkboxInfoElement.textContent = resultText;
};

checkboxButtonElement.addEventListener('click', checkboxChecked); */

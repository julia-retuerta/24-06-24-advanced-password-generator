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

const upperCaseInputElement = document.getElementById('uppercase');
const lowerCaseInputElement = document.getElementById('lowercase');
const numbersInputElement = document.getElementById('numbers');
const symbolsInputElement = document.getElementById('symbols');

const passwordOptions = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  symbols: '!@#$%^&*()_+-={}[]:;<>,.?/'
};

let passwordLength = rangeInputElement.value;
let allowedCharacters = '';
let finalPassword = '';

// ! = lo contrario de
// valor inverso
const setDisabledButton = () => {
  generatePasswordButtonElement.disabled = !allowedCharacters.length;
};

const fillAllowedCharacters = () => {
  let allowedCharacters = '';
  const checkboxes = document.querySelectorAll('input:checked');

  checkboxes.forEach(input => (allowedCharacters += passwordOptions[input.id]));

  console.log(allowedCharacters);

  setDisabledButton();
};

// coge el id
/* const fillAllowedCharacters = () => {
  let allowedCharacters = '';
  if (upperCaseInputElement.checked) {
    allowedCharacters += upperCaseCharacters;
  }

  if (lowerCaseInputElement.checked) {
    allowedCharacters += lowerCaseCharacters;
  }

  if (numbersCharacters.checked) {
    allowedCharacters += numbersCharacters;
  }

  if (symbolsCharacters.checked) {
    allowedCharacters += symbolsCharacters;
  }

  console.log(allowedCharacters);
}; */

const updateLabel = () => {
  passwordLength = rangeInputElement.value;
  rangeLabelElement.textContent = `LENGTH: ${passwordLength}`;
};

rangeInputElement.addEventListener('input', updateLabel);

const optionsChecked = () => {
  if (upperCaseInputElement.checked) {
    allowedCharacters.push(upperCaseCharacters);
  } else {
  }
};

generatePasswordButtonElement.addEventListener('click', optionsChecked);

// función que se encarga de generar una posición aleatoria
const generateRandomPosition = () => {
  const randomPosition = Math.floor(Math.random() * availableCharacters.length);
  return randomPosition;
};

// función que se encarga de generar el carácter aleatorio
const getRandomCharacter = () => {
  const randomPosition = generateRandomPosition();
  const randomCharacter = availableCharacters.charAt(randomPosition);
  return randomCharacter;
};

// función que se encarga de generar el bucle
const generatePassword = () => {
  finalPassword = '';
  for (let i = 0; i < passwordLength; i++) {
    const randomCharacter = getRandomCharacter();
    finalPassword += randomCharacter;
  }

  // función que se encarga de escribir el final password
  passwordElement.textContent = finalPassword;
};

generatePasswordButtonElement.addEventListener('click', generatePassword);

upperCaseInputElement.addEventListener('change', fillAllowedCharacters);
lowerCaseInputElement.addEventListener('change', fillAllowedCharacters);
numbersInputElement.addEventListener('change', fillAllowedCharacters);
symbolsInputElement.addEventListener('change', fillAllowedCharacters);

//finalPassword = ''; esto sirve para que cada vez que se pulsa el botón, se vacíe el campo de la ccontraseña y se genere una nueva.

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

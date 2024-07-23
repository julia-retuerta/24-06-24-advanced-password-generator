// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

// EXPLICACIONES

// const generatePassword -> función que se encarga de generar el bucle
// const randomPosition y const randomCharacter -> función que se encarga de generar el carácter aleatorio
// finalPassword = ''; -> sirve para que, cada vez que se pulsa el botón, se vacíe el campo de la contraseña y se genere una nueva.
// passwordElement.textContent = finalPassword -> función que se encarga de escribir el final password

// PASOS

//Sincronizar el length del nuevo password con el input range
//Que al cambiar el range, se refleje en el length
//Que al darle al botón de generar contraseña, genere una contraseña
//Que al darle al botón de generar contraseña, se genere una contraseña de la longitud que le hemos dicho

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

// objeto que mapea los ids de los checkboxes a sus respectivos conjuntos de caracteres
const passwordOptions = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  symbols: '!@#$%^&*()_+-={}[]:;<>,.?/'
};

// almacena la longitud de la contraseña
let passwordLength = rangeInputElement.value;
let allowedCharacters = '';
let finalPassword = '';

// ! = lo contrario de, valor inverso
// si allowedCharacters está vacío se deshabilita el botón
const setDisabledButton = () => {
  generatePasswordButtonElement.disabled = !allowedCharacters.length;
};

const fillAllowedCharacters = () => {
  // Reinicia la cadena de caracteres permitidos para que cada vez que se llama a la función allowedCharacters se reconstruya desde cero, en lugar de agregar caracteres a una cadena existente.
  allowedCharacters = '';
  // Selecciona todos los checkboxes que están marcados
  const checkboxes = document.querySelectorAll('input:checked');

  // Itera sobre cada checkbox marcado
  // Agrega los caracteres correspondientes al tipo de checkbox marcado
  // Para cada checkbox marcado, accede a su id (input.id) y utiliza ese id para obtener el conjunto correspondiente de caracteres desde passwordOptions (passwordOptions[input.id]).
  // Agrega estos caracteres a allowedCharacters usando el operador +=, que concatena los nuevos caracteres a la cadena existente.
  checkboxes.forEach(input => (allowedCharacters += passwordOptions[input.id]));

  // Llama a la función para habilitar o deshabilitar el botón de generación de contraseña
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

// función que se encarga de generar una posición aleatoria dentro de allowedCharacters
const generateRandomPosition = () => {
  const randomPosition = Math.floor(Math.random() * allowedCharacters.length);
  return randomPosition;
};

// función que se encarga de generar el carácter aleatorio
const getRandomCharacter = () => {
  const randomPosition = generateRandomPosition();
  const randomCharacter = allowedCharacters.charAt(randomPosition);
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

console.log('The encryptor js file loaded'); 

const letters = 'abcdefghijklmnopqrstuvwxyz';
const encrypt_key = 'bcdefghijklmnopqrstuvwxyza';

function encrypt(text) {
  let result = '';
  
  for (let i = 0; i < text.length; i++) {
    let letter = text[i];
    let letterIndex = letters.indexOf(letter);
    
    if (letterIndex < 0) {
      result += letter;
    }// if
    
    else {
      result += encrypt_key[letterIndex]; 
    }// else
    
  }// for
  
  return result;
  
}// encrypt


function decrypt(text) {
  let result = '';
  
  for (let i = 0; i < text.length; i++) {
    let letter = text[i];
    let letterIndex = encrypt_key.indexOf(letter);
    
    if (letterIndex < 0) {
      result += letter;
    }// if
    
    else {
      result += letters[letterIndex]; 
    }// else
    
  }// for
  
  return result;
  
}// decrypt

// add event listener to the form
const encryptForm = document.getElementById('encrypt-form');
encryptForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // get the value of the content
  let messageElement = document.getElementById('encrypt');
  let message = messageElement.value;
  
  // encrypt the content
  let encrypted = encrypt(message);
  
  // display encrypted message in p element
  let encodedMessageElement = document.getElementById('encoded-message');
  encodedMessageElement.innerText = encrypted;
});


// add event listener to the decrypt form
const decryptForm = document.getElementById('decrypt-form');
decryptForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // get the value of the content
  let messageElement = document.getElementById('decrypt');
  let message = messageElement.value;
  
  // decrypt the content
  let decrypted = decrypt(message);
  
  // display encrypted message in p element
  let decodedMessageElement = document.getElementById('decrypted-message');
  decodedMessageElement.innerText = decrypted;
});



console.log('The encryptor js file loaded');

const letters = 'abcdefghijklmnopqrstuvwxyz!?.1';
const encrypt_key = 'bcdefghigklmnopqrstuvwxyz?!1.';

function encrypt(text) {
  let result = '';

for (let i=0; i < text.length; i++) {
    let letter = text[i];    
    let letterIndex = letters.indexOf(letter);
         
 if (letterIndex < 0) {
   result+= letter;     
 }
         
else {
  result += encrypt_key[letterIndex];
  }
 }
         
  return result;
}// encrypt

function decrypt(text) {
  let result = '';

for (let i=0; i < text.length; i++) {
    let letter = text[i];    
    let letterIndex = encrypt_key.indexOf(letter);
         
 if (letterIndex < 0) {
   result+= letter;     
 }
         
else {
  result += letter[letterIndex];
  }
 }
         

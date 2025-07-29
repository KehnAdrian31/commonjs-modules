// importo la funzione
const fullName = require('./names.js');
// console.log(fullName("Kehn","Panganiban"))

// importo la funzione
const hobbies = require('./hobbies.js');
// console.log(hobbies('tennis','badminton','basketball'));

const people = () => {
  return{
    fullName: fullName('Kehn', 'Panganiban'),
    hobbies: hobbies('tennis', 'badminton', 'basketball') 
  }
}
console.log(people())
// Functions
// Populate Question 
// Check Question
// Advance progression

const sampleData = [
  {
    english: 'airport',
    spanish: 'el aeropuerto'
  },
  {
    english: 'park',
    spanish: 'el parque'
  },
  {
    english: 'bank',
    spanish: 'el banco'
  },
  {
    english: 'garden',
    spanish: 'el gardin'
  },
  {
    english: 'home',
    spanish: 'el hogar'
  }
];

function populateQuestion(progress) {

}
function checkQuestion(index, answer) {

  if (sampleData[index].spanish === answer) {
    // Answer is correct
  } else if (answer === '') {
    // Empty answer input error
  } else {
    // Answer is incorrect.
  }
}
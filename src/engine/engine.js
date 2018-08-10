
// // Populate Question 
// // Check Question
// // Advance progression

// // Sample Data

// const sampleData = [
//   {
//     english: 'airport',
//     spanish: 'el aeropuerto'
//   },
//   {
//     english: 'park',
//     spanish: 'el parque'
//   },
//   {
//     english: 'bank',
//     spanish: 'el banco'
//   },
//   {
//     english: 'garden',
//     spanish: 'el gardin'
//   },
//   {
//     english: 'home',
//     spanish: 'el hogar'
//   }
// ];

// // Meta Data
// // Question array
// const maxCount = 10;
// const startCount = 5;

// // Import question array and add key for checking attempts
// let questions = sampleData;
// for (let i = 0; i < questions.length; i++) {
//   questions[i].attempts = startCount;
// }

// // [a, b, a, c, b, a, d, c, b, ]

// // Decide order of questions
// let history = [];
// let currentQuestion = sampleData[0];



// const stats = {
//   score: 0,
//   // attempts: attempts,
//   // order: order,
// }

// const progression = {
//   correct: (index) => {
//     console.log('Correct!');
//     if (stats.attempts[index] > 0) {
//       stats.attempts[index]--;
//     }
//     if (stats.attempts[index] === 0) {
//       console.log('Word learned!');
//     }
//     console.log(stats.attempts[index]);
//   },
//   incorrect: (index) => {
//     console.log('Incorrect.');
//     if (stats.attempts[index] < maxCount) {
//       stats.attempts[index]++;
//     }
//     if (stats.attempts[index] === maxCount) {
//       console.log('Max attempts reached.');
//     }
//     console.log(stats.attempts[index]);
//   }

// }

// // Functions


// function checkQuestion(index, answer) {

//   if (sampleData[index].spanish === answer) {
//     // Answer is correct
//     progression.correct(index);


//   } else if (answer === '') {
//     // Empty answer input error
//     console.log('Error: Input value empty. Please supply answer')
//   } else {
//     // Answer is incorrect.
//     progression.incorrect(index);
//   }
// }





// // Test
// // checkQuestion(0, '')
// checkQuestion(0, 'el aeropuerto');
// checkQuestion(0, 'el aeropuerto');
// checkQuestion(0, 'el aeropuerto');
// checkQuestion(0, 'el aeropuerto');
// checkQuestion(0, 'el aeropuerto');
// // checkQuestion(0, 'elf aeropuerto')

// // OOO
// // Import Dataset
// // Save local session (local storage)
// // Present question to user, and wait for user input
// // REACH: Spell Check
// // Check questions
// // Based on answer, adjust score
// // IF: Score is 0, or Top (10), remove from quiz and save for results
// // Determine next question in list ( if(answer === correct) {word.mvalue *= 2} else {word.mvalue = 1} )
// // Repeat process until no questions are left in list
// // -------------------------------------------------------------
// // Upload results of session to database
// // Show results to user


// // Episode 1
// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Library',
//     weapon: 'Rope'
// };

// const declareMurderer = function() {
//     return `The murderer is ${scenario.murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);

// OUTPUT = 'declareMurderer' returns a string with a call for the muderer key, from scenario, interpolated in it. So when 'verdict' is defined as 'declareMurderer' and printed, the output is 'The murderer is Miss Scarlet'.
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//Episode 2
// const murderer = 'Professor Plum';

// const changeMurderer = function() {
//     murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//     return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// OUTPUT = Two different values are assigned to the 'murderer' variable. As 'murderer' is a constant variable, the code will not run.
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Episode 3
// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//     let murderer = 'Mrs. Peacock';
//     return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

/* OUTPUT = 'firstVerdict' will output 'The murderer is Mrs. Peacock'. As 'firstVerdict' uses the 'declareMurderer' function, which includes Mrs. Peacock in its scope, Mrs. Peacock will be passed in.
'secondVerdict' will output `The murderer is Professor Plum`. This is because Prof. Plum is the value of 'murderer' outside of the 'declareMurderer' scope.*/
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Episode 4
// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//     let suspectThree = 'Colonel Mustard';
//     return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);
/* OUTPUT = 'The suspects are Miss Scarlet, Professor Plum, Colonel Mustard'. All suspect variables are declared at the top level, and can be redefined. 'suspectThree' is redefined as 'Colonel Mustard' in 'declareAllSuspects', so when the function assigned to 'suspects' the Colonel appear as suspectThree
'Suspect three is Mrs. Peacock.' is printed because it is accessing a variable outside the scope of 'declareAllSuspects'*/
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Episode 5
// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Kitchen',
//     weapon: 'Candle Stick'
// };

// const changeWeapon = function(newWeapon) {
//     scenario.weapon = newWeapon;
// }

// const declareWeapon = function() {
//     return `The weapon is the ${scenario.weapon}.`;
// }

// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);
// OUTPUT = 'The weapon is the revolver'. Values of object keys can be redefined, even if the variable an object belongs to is defined with const.
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Episode 6 
// let murderer = 'Colonel Mustard';

// const changeMurderer = function() {
//     murderer = 'Mr. Green';

//     const plotTwist = function() {
//         murderer = 'Mrs. White';
// }

// plotTwist();
// }

// const declareMurderer = function () {
//     return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer(); 
// console.log(verdict);
// OUTPUT = 'The murderer is Mrs. White'. With 'plotTwist' being inside 'changeMurderer's scope, when 'verdict' is called Mrs. White is revealed as the murderer.
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Episode 7
let murderer = 'Professor Plum';

const changeMurderer = function() {
    murderer = 'Mr. Green';

    const plotTwist = function() {
        let murderer = 'Colonel Mustard';

        const unexpectedOutcome = function() {
            murderer = 'Miss Scarlet';
        }

    unexpectedOutcome();
    }

plotTwist();
}

const declareMurderer = function() {
    return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
// OUTPUT = I think I figured it out. Mr. Green is the output because the 'changeMurderer()' function is called in the global scope, after functions within its own scope.
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Episode 8
// const scenario = {
//     murderer: 'Mrs. Peacock',
//     room: 'Conservatory',
//     weapon: 'Lead Pipe'
//     };

// const changeScenario = function() {
//     scenario.murderer = 'Mrs. Peacock';
//     scenario.room = 'Dining Room';

//     const plotTwist = function(room) {
//         if (scenario.room === room) {
//         scenario.murderer = 'Colonel Mustard';
//         }
//     const unexpectedOutcome = function(murderer) {
//         if (scenario.murderer === murderer) {
//             scenario.weapon = 'Candle Stick';
//             }
//         }
//         unexpectedOutcome('Colonel Mustard');
//     }

//     plotTwist('Dining Room');
// }

// const declareWeapon = function() {
//     return `The weapon is ${scenario.weapon}.`
// }

// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);
// OUTPUT = 'The weapon is Candle Stick'. With scenerio.room being equal to 'Dining Room', the plotTwist function defines Colonel Mustard as the murderer. Now scenario murderer is equal to the argument passed into unexpectedOutcome, scenario.weapon is defined as 'Candle Stick' by that function.
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Episode 9
// let murderer = 'Professor Plum';

// if (murderer === 'Professor Plum') {
//     let murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//     return `The murderer is ${murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);
// OUTPUT = 'The murderer is Professor Plum'. Due to 'let murderer = 'Mrs. Peacock'' being inside the if statement's scope, it isn't accessed by the 'declareMurderer' function. So 'Professor Plum' remains the value of 'murderer'.
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


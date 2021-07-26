// ASSESSMENT 3: Coding practical questions with Jest


// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array of that length containing the numbers of the Fibonacci.
//////////////////////////////////////////////////// Todd's Pseudo Code /////////////////////////////////////////////////////////////////////////////////////////
// Create a test where the purpose of this test is to be able to input the example inputs and get the expected outcomes
// With that said, All I need to do is I need to take it slowly and be patient.
// I know is that it needs three things a described statement and test statement and what the expected outputs are
// Now that I have the test written out it is time to work on my function
// I wrote the function out so where it looks The input and counts down words until the last pair is 1, 1.
// Ran the test again it all came back as a green pass moving onto the next question.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// a) Create a test with expect statements for each of the variables provided.
// describe("input for Fibonacci series", () => {
//     it("Displays Fibonacci series for the inputted number", () => {
// // // Example input: 6
// // // Expected output: [1, 1, 2, 3, 5, 8]
// expect(fibonacciSeries(6)).toEqual([1, 1 ,2, 3, 5, 8]);
// // // Example input: 10
// // // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
// expect(fibonacciSeries(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
//     })
// });
// // b) Create the function that makes the test pass.

// function fibonacciSeries(num) {
//   let series = [];
//   for(let i = num; i>0; i--){
//     if(series.length >= 2) {
//       series.push(series[series.length - 1] + series[series.length - 2]);
//     }else {
//       series.push(1);  
//     }
//   }
//   return series;
// }

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.
//////////////////////////////////////////////////// Todd's Pseudo Code /////////////////////////////////////////////////////////////////////////////////////////
// This one was a little tricky for me because I saw the other data types that were not a number and kind of got intimidated 
// But I was able to take a deep breath calm myself down and look at it. First thing I need to do was write a test 
// I started to write it like I did with the first question. but I got too convoluted with all the VR and expected outputs so I created my own test block.
// Now that I got a "Good fail" it was time to move onto the function.So in my loop we are now go in the opposite direction of question one and 
// We are starting at the first of the loop or the zero index and counting up.
// Ran just again and I passed which means it's time to move onto the next question.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// a) Create a test with expect statements for each of the variables provided.
// var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"];
// Expected output: [-9, 7, 9, 199]
// var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"];
// Expected output: [-823, 7, 23]

// describe("Odd Numbers Array", () => {
//   it("should take an array and return the only the odd numbers sorted from least to greatest", () => {
//     expect(getOdds(fullArr1)).toEqual([-9, 7, 9, 199]);
//     expect(getOdds(fullArr2)).toEqual([-823, 7, 23]);
//   })
// })

// // b) Create the function that makes the test pass.

// function getOdds(arr) {

//   let oddsArray = [];

//   for(let i = 0; i < arr.length - 1; i++)  {
//     if(typeof arr[i] === 'number' && arr[i] % 2 !== 0) {
//     oddsArray.push(arr[i]);
//     }
//   }
// return oddsArray.sort(function(a, b){return a - b;});
// }
  


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.
//////////////////////////////////////////////////// Todd's Pseudo Code /////////////////////////////////////////////////////////////////////////////////////////
//I first started this one out by writing out a test and then the function.
//Being careful to take my time and read the problem thoroughly I was able to come up with a test and idea of what the function should look like
//I then implemented my ideas and naturally they didn't work the test worked but my function did not.
//I have already been working on it for quite some time now so I'm going to switch over to doing the last part which is the debugging.
// getting the debugging assignment done I have now come back and revamped a couple of things and was able to get this to pass.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// a) Create a test with expect statements for each of the variables provided.
describe("addArray", () => {
    it("should take an array and return the the numbers add to the next number", () => {
      expect(addNum(numbersToAdd1)).toEqual([2, 6, 51, 60]);
      expect(addNum(numbersToAdd2)).toEqual([0, 7, -1, 11]);
      expect(addNum(numbersToAdd3)).toEqual([]);
    })
  })

var numbersToAdd1 = [2, 4, 45, 9]
// // Excpected output: [2, 6, 51, 60]

var numbersToAdd2 = [0, 7, -8, 12]
// // Expected output: [0, 7, -1, 11]

var numbersToAdd3 = []
// // Expected output: []

//b) Create the function that makes the test pass.
const addNum = (numbersToAdd) => {
  let newArr = [];
  let sum = 0;
  numbersToAdd.forEach((val) => {
    newArr.push(sum += val);
  });
  return newArr;
}




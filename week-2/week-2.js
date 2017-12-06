
var space = function () {
  console.log("");                                            // a program to make spaces in the console
  console.log("=======================================");
  console.log("");
}
space();
// Step 1

let numbers = [1, 2, 3, 4];
console.log("The original array is: ", numbers);
let filteredNumbers = numbers.filter(num => num % 2 !== 0);  // filtering the odd numbers in the original array
console.log("The filtered array is: ", filteredNumbers);     // returning the filtered array
let newArr = filteredNumbers.map(num => num * 2);            // doubling the filtered array
console.log("The doubled array is : ", newArr);             // returning the doubled array

space();
// Step 2

let finalArray = numbers.reduce((x, z) => {
  if (z % 2 === 0) {
    x.push(z, z);              // pushing the even numbers twice 
  } else {
    x.push(z);                   // pushing the odd numbers once 
  }
  return x
}, []);
console.log("The final array of  numbers are : ", finalArray);

space();
// Step 3.1

let monday = [
  {
    name: 'Write a summary HTML/CSS',
    duration: 180
  },
  {
    name: 'Some web development',
    duration: 120
  },
  {
    name: 'Fix homework for class10',
    duration: 20
  },
  {
    name: 'Talk to a lot of people',
    duration: 200
  }
];

let tuesday = [
  {
    name: 'Keep writing summery',
    duration: 240
  },
  {
    name: 'Some more web development',
    duration: 180
  },
  {
    name: 'Staring out the window',
    duration: 10
  },
  {
    name: 'Talk to a lot of people',
    duration: 200
  },
  {
    name: 'Look at application assignments new students',
    duration: 40
  }
];

let tasks = [monday, tuesday];



let totalDuration = 0;              // declaring a variable to calculate the total duration in minutes
let tasksList = [];                 // declaring an array to display a list of all tasks during the two days
let calc = tasks.map(i => {
  for (let j in i) {                // looping through tasks to calculate the durations++
    totalDuration += i[j].duration;
    tasksList.push(i[j].name);                // pushing the task name to the array
  }
});
console.log("The total time that has been spend on tasks : " + totalDuration + " minutes.");
console.log("list of all tasks during the two days : ");
function list() {
  for (let i = 0; i < tasksList.length; i++) {           // a for loop inside a function to display on the console a list of 
    console.log((i + 1) + " - " + tasksList[i] + ".")    // all tasks during the two days
  }
}
list();


space();
// Step 3.2

let convertedTasks = tasks.map(i => {                 // converting the durations of tasks from minutes to hours
  for (let j in i) {
    i[j].duration /= 60;
  }
})
console.log(tasks);


space();
// Step 3.3

let filteredHours = tasks.filter(i => {                // filtering the tasks that took more than two hours on monday
  for (let j in i) {                                   // and displaying it on the console
    if (i[j].duration >= 2) {
      console.log(i[j]);
    }
  }
});

space();
// Step 3.4


let totalConvertedDuration = tasks.reduce((a, i) => {       // summing all the durations on tasks
  for (let j in i) {
    a += i[j].duration;
  }
  return Math.round(a);
}, 0)

console.log("The total hours that has been spend on tasks is almost : " + totalConvertedDuration + " hours.");


space();
// Step 3.5

let paying = () => {                // a function to calculate how much she should gain
  let result = totalConvertedDuration * 12;
  console.log("she should make 12.00€ per hour, and in total for two days " + result + "€ .")
}
paying();


space();



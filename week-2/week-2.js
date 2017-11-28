
var space = function () {
  console.log("");                                            // a program to make spaces in the console
  console.log("=======================================");
  console.log("");
}
space();
// Step 1

let numbers = [1, 2, 3, 4];
console.log("The original array is: " , numbers);       
let filteredNumbers = numbers.filter(num => num % 2 !== 0);  // filtering the odd numbers in the original array
console.log("The filtered array is: ", filteredNumbers);     // returning the filtered array 
let newArr = filteredNumbers.map(num => num * 2);            // doubling the filtered array 
console.log("The doubled array is : " , newArr);             // returning the doubled array 

space();
// Step 2



let final = []
let finalNumbers = numbers.map(num => {
  if (num % 2 === 0) {
    final.push(num ,num);              // pushing the even numbers twice to the empty array (final)
  } else {
    final.push(num);              // pushing the odd numbers once to the empty array (final)
  }
})
console.log("The final array of  numbers are : " , final);  
 
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

let totalDuration = 0;     // declaring a variable to calculate the total duration in minutes 
let allTasks = [];         // declaring an array to display a list of all tasks during the two days 

let twoDaysTasks = monday.map(i => {
  totalDuration += i.duration;       // looping through monday to calculate the duration
  allTasks.push(i.name);             // pushing the task name to the array 
      
});

twoDaysTasks = tuesday.map(i => {
  totalDuration += i.duration;       // looping through tuesday to calculate the duration
  allTasks.push(i.name);             // pushing the task name to the array 
})

console.log("The total time that has been spend on tasks : " + totalDuration + " minutes.");
console.log("list of all tasks during the two days : ");
function listTasks()  {
  for (let i = 0; i < allTasks.length; i++) {           // a for loop inside a function to display on the console a list of all tasks
    console.log((i + 1) + " - " + allTasks[i] + ".")    // during the two days
  }
}
listTasks();

space();
// Step 3.2

let mondayConverted = monday.map((i) => {              // converting the durations of monday from minutes to hours
  i.duration /= 60;
});
let tuesdayConverted = tuesday.map((i) => {            // converting the durations of tuesday from minutes to hours  
  i.duration /= 60;

});
console.log(tasks)


space();
// Step 3.3

let filteredHours = monday.filter(i => {              // filtering the tasks that took more than two hours on monday
  if (i.duration >= 2) {                              // and displaying it on the console
    console.log(i) ;
  }
});
filteredHours = tuesday.filter(i => {                 // filtering all the tasks that took more than two hours on tuesday
  if (i.duration >= 2) {                              // and displaying it on the console
    console.log(i);
  }
});

space();
// Step 3.4 
 
let allSum = 0;
let totalConvertedDuration = monday.map(i => {        // summing all the durations on monday 
  allSum += i.duration;
});
totalConvertedDuration = tuesday.map(i => {           // summing all the durations on tuesday
  allSum += i.duration;
});
console.log("The total hours that has been spend on tasks is almost : " + Math.round(allSum) + " hours." );

space();
// Step 3.5

let paying = () => {                // a function to calculate how much she should gain
   let  result = allSum * 12;
  console.log("she should make 12.00€ per hour, and in total for two days " + result + "€ .")
}  
paying();


space();













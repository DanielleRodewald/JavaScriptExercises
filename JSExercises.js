const birthYear= 1999;
const futureYear= 2038;
const age = futureYear - birthYear;
document.write(`I will be either  ${age} or  ${age - 1} by ${futureYear}`);

const currentAge = 21;
const maxAge = 100;
const snack = 2;
const total= (snack * 365) * (maxAge - currentAge);
console.log(`You will be ${total} to last you until the ripe old age of ${maxAge}`)

// The Fortune Teller
// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
const children = 2;
const partner = "Drake";
const place = "France";
const job = "doctor";
console.log(`You will be a ${job} in ${place} and married to ${partner} with ${children} kids `);

//-1- Write an expression that uses at least 3 different arithmetic operators.
// // The expression should equal 42.
// // Hint: +, -, *, /, and % are possible arithmetic operators
const equationone = 10 * 4 + 2;
alert(equationone);


// //-2- Create a string with the name of your favorite food. The first letter of the string should be capitalized.
console.log("m".toUpperCase() + "ango");

// //-3- Create an array called egFamily and add "Julia", "James", and your name to the array. Then, print the egFamily to the console using console.log.
const egFamily= ["Julia", "James", "Danielle"];
console.log(egFamily);

// //4-4 Fix the right side expression so it evaluates to true.
// // "ALL Strings are CrEaTeD equal" == "All STRINGS are CrEaTED Equal"
console.log("ALL Strings are CrEaTED equal" == "ALL Strings are CrEaTED equal")


// //-5- Use this equation and the variables fahrenheit and celsius to print the Fahrenheit equivalent of 12°C.
// //  Use the Celsius-to-Fahrenheit formula to set the fahrenheit varible:
// //F = C x 1.8 + 32
// //Log the fahrenheit variable to the console.
const celsius = 12;
const fahrenheit = celsius * 1.8 + 32; 
console.log(fahrenheit);

// //-6- Build a string using concatenation by combining the lines from this famous haiku poem by Yosa Buson.
// // Blowing from the west | Fallen leaves gather | In the east.
// // Each string should be printed on its own line.
console.log ("Blowing from the west\n Fallen leaves gather\n In the east.")


// //-7- Define two variables called thingOne and thingTwo and assign them values. Print the values of both variables in one statement.
const thingOne= "blue";
const thingTwo= "purple";
console.log(thingOne + thingTwo);


//  //-8- Create a variable called fullName and assign it your full name as a string.
const fullName = "Danielle Rodewald";
console.log(fullName);

//  //-9- Create a variable called bill and assign it the result of 10.25 + 3.99 + 7.15
// // Next, create a variable called tip and assign it the result of multiplying bill by a 15% tip rate. 
// // Add the bill and tip together and store it into a variable called total.
// // Print the total to the JavaScript console.
// // Hint: 15% in decimal form is written as 0.15_._

// // TIP:To round total up by two decimal points use the toFixed() method. To use toFixed() pass it the number of decimal points you want to use. 
// //For example, if total equals 3.9860, then total.toFixed(2) would return 3.99.
const bill= 10.25 + 3.99 + 7.15;
const tip = bill * 0.15;
console.log(bill + tip);


// //-10- Declare and assign values to three variables for each part of the sentence that changes (firstName, interest, and hobby).
// Concatinate and Print out the result in the console
const firstName = "Danielle";
const interest = "nature";
const hobby = "running";
console.log(`${firstName} is interested in ${interest} and enjoys ${hobby}`);

// //-11- Use variables and string concatenation to create your own awesome message and store it in an awesomeMessage variable. 
// Finally, print your awesome message to the JavaScript console.
const awesomeMessage = "Magic" + " is real!"
console.log(awesomeMessage);

//  //-12- Create 2 variables one called big and one called small. Set the strings to each: "I am Big like a elepant!" "I am Small like a mouse!". 
// //Use string methods to make the 'small' variable lowercase and the 'big' variable capital.
const big = "I am Big like a elephant!".toUpperCase();
const small = " I am Small like a mouse!".toLowerCase();
console.log(big + small);
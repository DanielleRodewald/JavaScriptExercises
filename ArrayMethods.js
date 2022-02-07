const colors =["blue","purple", "green", "pink", "orange"];

// .push ADDS an index to the END of an array 
colors.push("red");


//.pop REMOVES an index from the END of an array
colors.pop(colors);


// // .shift REMOVES the FIRST index in the array 
colors.shift();


// // .unshift ADDS an index to the BEGINNING of an array 
colors.unshift("grey");


// // .slice adds or removes a specific index in an array
// //  add a new color in 2nd index, makes 0 changes
colors.splice(2, 0, "violet");

console.log(colors);
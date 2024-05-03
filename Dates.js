let currentDate = new Date();
// console.log(currentDate);

let millisecond = new Date(888685790000); //It starts counting from January 1st, 1970.
// console.log(millisecond);

let dateString = new Date("Feb 28 1998 12:09:50")
// console.log(dateString.getTime());

let componentDate = new Date(1998, 01, 28); // Months are index in here, I put "1" instead of "2" to get february.
// console.log(componentDate);

/*
console.log(
  currentDate.getFullYear(),
  millisecond.getFullYear(),
  dateString.getFullYear(),
  componentDate.getFullYear(),
);
*/


/*
//GET METHOD
console.log(
  currentDate.getMonth(),  //Months are index
  currentDate.getDate(),
  currentDate.getDay(), // Index | "0" for monday, "1" for monday.
  currentDate.getHours(), // displays from 0 to 23.
  currentDate.getMinutes(), // 0 to 60.
  currentDate.getSeconds(), // 0 to 60.
  currentDate.getMilliseconds(), // 0 t0 999.
  currentDate.getTime() // represented with milliseconds started from Jan 1st, 1970.
);
*/


/*
//SET METHOD
currentDate.setFullYear(1998)
console.log(currentDate.getFullYear()); 
*/



//TO GET THE MONTH AND DAY BY THEIR "NAME"
/*
console.log(
  currentDate.toLocaleString("default", {       // "default" to make it english.
    month: "short",     // {month: "long"} to make the month display long or short. 
    weekday: "long"    // {weekday: "long"} to make the day display long or short.
  })     
);
*/



//TO GET THE DAY ALONE.

console.log(
  currentDate.toLocaleString("default", {weekday: "long"})
);




//TO GET THE MONTH ALONE.

console.log(
  currentDate.toLocaleString("default", {month: "long"})
);
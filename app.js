// Question no 01:

// function power(a,b){
//     console.log(a**b);
    
// }
// power(3,3);
// power (2,5);
// power(25,2);

// Question no 02:
// function leapYear (year){
//     if((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0){
//         console.log(year + " " + "is leap Year");
        
//     }
//     else{
//         console.log(year + " " + "is not leap Year");
        
//     }
// }

// leapYear(2012);
// leapYear(2016);
// leapYear(2020);
// leapYear(2017);
// leapYear(2024);
// leapYear(1900);
// leapYear(2002);


// Question no 03
// function area(a,b,c){
// var s = (a + b + c)/2;
// var area = Math.sqrt(s*(s - a)*(s - b)*(s - c));
// return area;
// }
// console.log("The area of a triangle is" + " " + area(11,9,9));


// Question no 04
// function calculateAverage(mark1, mark2, mark3) {
//     return (mark1 + mark2 + mark3) / 3;
// }

// function calculatePercentage(mark1, mark2, mark3, totalMarks) {
//     var obtainedMarks = mark1 + mark2 + mark3;
//     return (obtainedMarks / totalMarks) * 100;
// }

// function mainFunction(mark1, mark2, mark3, totalMarks) {
//     var average = calculateAverage(mark1, mark2, mark3);
//     var percentage = calculatePercentage(mark1, mark2, mark3, totalMarks);
    
//     console.log(`Average Marks: ${average.toFixed(2)}`);
//     console.log(`Percentage: ${percentage.toFixed(2)}%`);
// }
// var mark1 = 78;
// var mark2 = 85;
// var mark3 = 90;
// var totalMarks = 300;

// mainFunction(mark1, mark2, mark3, totalMarks);


//Question no 05
// function indexOf(string, character) {
//     var i = 0;
  
//     while (i < string.length) {
//       if (string[i] === character) {
//         return i;
//       }
//       i++;
//     }
  
//     return -1;
//   }
//   var result = indexOf("hello", "e");
//   console.log(result);
  


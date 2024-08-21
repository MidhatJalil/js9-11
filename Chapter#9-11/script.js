
// Chapter9-11
// 1

// let cityName = prompt("Enter Your City!");

// if(cityName=="Karachi" ||cityName== "karachi" ||cityName== "KARACHI"||cityName=="KHI"||cityName== "khi") {
//     document.write(`Welcome To The City of Lights!`);
// }
//     else{
//         document.write(`Welcome`);
//     }

    // 2

    // let gender = prompt("What's your gender?");

    // if(gender == "male"){
    //     document.write(`Good Morning Sir!`);
    // }
    // else if (gender == "female"){
    //     document.write(`Good Morning Madam!`);
        
    // }
    // else{
    //     document.write(`Please enter your gender.`);
    // }

    // 3

//     let color = prompt("Enter traffic signal color.");

//     if (color=="red" || color=="Red" || color=="RED"){
//         document.write(`Must stop.`);
//     }

//    else if (color=="Green" || color=="green" || color=="GREEN"){
//         document.write(`Move On.`);
//     }
//    else if (color=="Yellow" || color=="yellow" || color=="YELLOW"){
//         document.write(`Ready to move.`);
//     }

//     else{
//         document.write(`Please enter traffic signal color.`);
//     }

// 4

// let fuel = prompt("Enter Your current fuel status.");
// if (fuel< 0.25){
//     document.write("Please refill the fuel in your car.");
// }
// else{
//     document.write(`You have enough fuel.`);
// }

// 5

// a.
//  var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// // b. 
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// // c.
//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// // d.
//  var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// // e.
//  if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }

// // f. 
// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }
    

// 6
// let eng = +prompt("Enter English marks. ");
// let math = +prompt("Enter Math marks. ");

// let science = +prompt("Enter Science marks. ");
// let total = 100;
// let totalMarks = 100*3;
// let obMarks = eng+math+science;
// let percent = (obMarks*100)/totalMarks;

// if (percent>=80){
//     document.write(`<h2>Marks Sheet</h2>`);
//     document.write(`Total Marks:${totalMarks}<br>`);
//     document.write(`Obtained Marks:${obMarks}<br>`);
//     document.write(`Percentage:${percent}<br>`);
//     document.write(`Grade: A-one<br>`);
//     document.write(`Remarks: Excellent<br>`);
// }

// else if (percent>=70){
//     document.write(`<h2>Marks Sheet</h2>`);
//     document.write(`Total Marks:${totalMarks}<br>`);
//     document.write(`Obtained Marks:${obMarks}<br>`);
//     document.write(`Percentage:${percent}<br>`);
//     document.write(`Grade: A<br>`);
//     document.write(`Remarks: Good<br>`);
// }

// else if (percent>=60){
//     document.write(`<h2>Marks Sheet</h2>`);
//     document.write(`Total Marks:${totalMarks}<br>`);
//     document.write(`Obtained Marks:${obMarks}<br>`);
//     document.write(`Percentage:${percent}<br>`);
//     document.write(`Grade:B<br>`);
//     document.write(`Remarks: You need to improve.<br>`);
// }

// else if (percent<60){
//     document.write(`<h2>Marks Sheet</h2>`);
//     document.write(`Total Marks:${totalMarks}<br>`);
//     document.write(`Obtained Marks:${obMarks}<br>`);
//     document.write(`Percentage:${percent}<br>`);
//     document.write(`Grade: Fail<br>`);
//     document.write(`Remarks: Sorry<br>`);
// }



// 7
// let secretNum = 6;
// let guessNum = prompt("Guess the Number!");

// if (guessNum == secretNum){
//     document.write(`Bingo! Correct answer!!!`);
// }

// else if (++guessNum == secretNum){
//     document.write(`You are Close enough.`);
// }

// else {
//     document.write(`Try again.`);
// }

// 8

// let num = prompt("Enter any number to check whether it's divisible by 3 or not?");
// let num1 = num % 3;
// if (num1 == 0 ){
//     document.write(`The number is divisible by 3`);}
//     else{
//         document.write(`The number is not divisible by 3`);
//     }

// 9


// let number = prompt("Enter any number to find out whether it's odd or even?");
// let number1 = number % 2;
// if (number1 == 0 ){
//     document.write(`The number is even.`);}
//     else{
//         document.write(`The number is odd.`);
//     }


// 10

// let temp = prompt("Enter any temperature value");

// if(temp > 40){

//  document.write( "It is too hot outside.");
// }

// else if(temp > 30){

//     document.write( "The Weather today is Normal");
//    }

// else if(temp > 20){

//     document.write( "Today’s Weather is cool.");
//    }

// else if(temp > 10){

//     document.write( "OMG! Today’s weather is so Cool.");
//    }

// 11

let num1 = +prompt("Enter 1st number");
let num2 = +prompt("Enter 2nd number");
let operation = prompt("What do you want to perform? Select one: +, - , *, / , % ");

let sum = num1+num2;
let diff = num1-num2;
let product = num1*num2;
let quotient = num1/num2;
let mod = num1%num2;


document.write("<h1>Simple Calculator </h1>")
if (operation == "+"){
    document.write(`${num1} + ${num2} = ${sum}`);

}

else if (operation == "-"){
    document.write(`${num1} - ${num2} = ${diff}`);

}

else if (operation == "*"){
    document.write(`${num1} * ${num2} = ${product}`);

}

else if (operation == "/"){
    document.write(`${num1} / ${num2} = ${quotient}`);

}

else if (operation == "%"){
    document.write(`${num1} % ${num2} = ${mod}`);

}
else{
    document.write("Syntex error!");
}
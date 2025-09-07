// ---------------------------Chapter 9-11-----------------------------------

// Question:01-----------------------------City Name-------------------------------------

// var userCity =prompt("Enter Your City Name:");

// if(userCity==="karachi"){
//     alert("Welcome to city of Lights");
// }
// else{
//     alert("Enter city karachi");
// }
// Question:02---------------------------Gender Input-----------------------------------------

// var gender =prompt("Enter Your Gender");

// if(gender==="male"){
//     alert("Good Morning sir");
// }
// else if(gender === "female"){
//     alert("Good Morning Madam");
// }
// else{
//     alert("Enter Gander male or female");
// }

// Question:03-------------------------Traffic light ------------------------------------------

// var lightColor = prompt("Enter color of Traffic light");
// if(lightColor==="red"){
//     alert("Must Stop")

// }
// else if(lightColor==="yellow"){
//     alert("Ready to move")

// }
// else if(lightColor==="green"){
//     alert("Move Now")

// }

// Question:04--------------------------Fuel indicator----------------------------------------

// var fuel= prompt("Enter Remaining Fuel Level")

// if(fuel<0.25){
//     alert("Please refill the fuel in your car")

// }
// else{
//     alert("enter fuel level less then 0.25L")
// }

// Queston:05---------------------------- check conditions-------------------------------------

// var a = 4;
// if(++a===5){
//     alert("Given condition for variable a is true")
// }

// var b = 82;
// if(b++ === 83){
//     alert("Given condition for variable b is not true");
// }

// var c = 12;
// if(c++===13){
//     alert("Condition 1 is not true");
// }

// if(c===13){
//     alert("Condition 2 is true");
// }

// if(++c < 14){
//     alert("Condition 3 is not true");
// }

// if(c===14){
//     alert("Condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost =2000;
// var totalCost = laborCost+materialCost;

// if(totalCost===laborCost+materialCost){
//     alert("The cost equals");

// }

// if(true){
//     alert("True");
// }

// if(false){
//     alert("false");
// }

// if("car"<"cat"){
//     alert("car is smaller then car");

// }


// Question06)-----------------------Marksheet-------------------------------
// var totalMarks = +prompt("Enter Total Marks (300)");
// var obtMarks = +prompt("Enter Obtained Marks");
// var percentage = obtMarks * 100 / totalMarks;

// document.write("<h1>MarkSheet</h1> <br>");
// document.write("Total Marks: ",totalMarks,"<br>");
// document.write("Obtained Marks: ",obtMarks,"<br>");
// document.write("Percentage: ",percentage,"%","<br>");

// if (percentage >= 90  && percentage< 100){
//     document.write("Grade:A+1 <br>")
//     document.write("Remarks:Excellent <br>")
// }
// if (percentage >= 80  && percentage< 90){
//     document.write("Grade:A-0ne <br>")
//     document.write("Remarks:Excellent <br>")

// }
// if (percentage>=70 && percentage < 80){
//     document.write("Grade:A <br>")
//     document.write("Remarks: Good <br>")

// }if (percentage>=60 && percentage < 70 ){
//     document.write("Grade:B <br>")
//     document.write("Remarks: You need to improve <br>")


// }
// if (percentage<60){
//     document.write("Fail <br>")
//     document.write("Remarks: Sorry")


// }

// Question:07------------------------------- Guess Game -------------------------------

// var secretNum = +prompt("Enter secret Number");
// if (secretNum >=1 && secretNum <=10 ){
//     alert("Bingo! Correct Answer.");
// }
// else{
//     alert("Close Enough to the correct answer.");

// }

// Question:8--------------divisible number---------------------------

// var inputNmuner = +prompt("Enter Number");
// if(inputNmuner % 3 === 0 ){
//     alert("Number is divisible by 3");
// }
// else{
//     alert("Number is not divisible by 3");
// }

// Question:09-----------------even /odd ---------------------------------

// var evenNum =+prompt("Enter number to check even or odd");

// if(evenNum % 2 ===0){
//     alert("Given number is Even");
// }
// else{
//     alert("Given number is odd");

// }

// Question:10-------------------------Weather update------------------------------

// var temp=+prompt("Enter Temperature");

// if (temp>= 40){
//     alert("Its too hot outisde.")
    
// }
// else if(temp>=30){
//     alert("Today's Weather is Normal.");

// }
// else if(temp>=20){
//     alert("Today's Weather is cool.");

// }
// else if(temp>=10){
//     alert("OMG! Today's Weather is so cool.");

// }
// else{
//     alert("Please Enter Temperature upto 10deg");
// }

// var firstNum = +prompt("Enter first Number");
// var operator = prompt("Enter Operator");
// var secondNum = +prompt("Enter Second Number");

// if(operator === "+" ){
//     alert( firstNum+secondNum);

// }
// else if(operator === "-" ){
//     alert(firstNum-secondNum);

// }
// else if(operator === "*" ){
//     alert(firstNum*secondNum);

// }
// else if(operator === "/" ){
//     alert(firstNum/secondNum);

// }
// else if(operator === "%" ){
//     alert(firstNum/secondNum);

// }
// else{
//     alert("Enter operator")
// }

// -----------------------------Chapter 12-13-------------------------------------

// Question:02-------------------Check integer--------------------------------

// var num1 = +prompt("Enter first integer");
// var num2 = +prompt("Enter second integer");

// if(num1>num2){
//     alert("Integer 1 is greaterthen Integer 2")
// }
// else if(num1==num2){
//     alert("Integer 1 and Integer 2,Both are equal. ")
// }
// else{
//     alert("Integer 2 is greater then Integer 1")
// }

// Question:03)---------------------------Positive or Negative Number------------------

// var integer = +prompt("Enter any Integer");

// if(integer===0){
//     console.log("Given number is zero")
// }
// if(integer==-+integer){
//     console.log("Given number is zero")
// }


// var vowel = "a,e,i,o,u";
// var vowelInput = prompt("Enter one alphabat");

// if(vowelInput==vowel){
//     console.log("alphabat is vowel");
// }



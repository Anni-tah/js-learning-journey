let myAge =15;
if(myAge>=18 && myAge <=30){
    document.write ("you can come");
}
else{
    document.write('You cant come <br>');
}

let age =5;
while (age<=10){
    document.write(`Your age is ${age}<br>`);
    age ++;
}
document.write("You are now an adult<br>");

for(x=5; x<10; x++){
    document.write(`You are growing old ${x}<br>`);
}
//functions
function getAverage(a,b){
    let average = (a+b)/2;
   return average;
}
getAverage (25,15);

//Arrow functions
function printBook(book){
    document.write(book);
}
const printBookArrow = book=> document.write(book);


document.write('<br> <br> <h1>Arrow Functions</h1>')
printBook('Eloquent Javascript<br/>');
printBookArrow('The Power of Saying No');

//Javascript loops
let books
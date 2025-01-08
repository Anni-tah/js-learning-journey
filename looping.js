//iterating over arrays
/*let myArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
 for(let i=0; i<myArray.length; i++){
    console.log(myArray[i]);
 }

 /*while loop

 let j =0;
 while(j<myArray.length){
    console.log(myArray[j]);
    j++;
   
 }
    end o while loop  */

 //for ...of
 /*console.log('Hello , this is For... of loop')
 for (const element of myArray){
    console.log(element);
 }

 //iterating strings
 for(const char of 'Hello World'){
    console.log(char);
 }*/

 //iterating over objects
 const address={
    street1: 'Kimathi Street',
    street2: 'Oginga Odinga ',
    city:'Nairobi',
    zipcode:'40100',
 };
  for(const key in address){
    console.log(key);
    console.log(address[key]);
  }
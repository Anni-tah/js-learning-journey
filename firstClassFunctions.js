/*let books=['Eloquent javascript','JavaScript: The Good Parts','Learn Javascript Visually','You don\'t know js','Javascript: The Definitive Guide']

function handleArray(array){
    console.log(array);
}
handleArray(books)
let num= [1,2,3,4];
handleArray(num);

//functions as variables
const loopThroughArray= function(array){
    for(let item of array){
        console.log(item);
    }
}
loopThroughArray(books);
loopThroughArray(num);

const capitalizeArray= function (array){
    let newArray =[];
    for(let item of array){
        newArray.push(item.toUpperCase());
    }
    console.log(newArray)
}
function handleBooks(fun){
    let books=['Eloquent javascript','JavaScript: The Good Parts','Learn Javascript Visually','You don\'t know js','Javascript: The Definitive Guide']
     fun(books);

}
handleBooks(loopThroughArray);
handleBooks(capitalizeArray); */

// objects
let books1 = [
{
    title: 'Eloquent Javascript',
    price: 16.00,
    inventory:5,
},
{
    title:'JavaScript : The Good Parts',
    price:10.50,
    inventory:2
},
{
    title:'JavaScript : Learn JavaScript Visually',
    price:25.00,
    inventory:8
},
{
    title: 'You don\'t know js',
    price:60.00,
    inventory:8

},
{
    title: 'JavaScript: The Definitive Guide',
    price:18.95,
    inventory:0
}
]
function printReport(foo){
    console.log(foo(books1));
}
function totalInventory(array){
    let total = 0;
    for(let item of array){
        total+= item.inventory;

    }
    return `Total Inventory ${total}`;
}
printReport(totalInventory);

function replenish(array){
    let replenishList=[];
    for (let item of array){
        if(item.inventory<3){
         replenishList.push(item.title);  
        }

    }
    return `Place order for : ${replenishList. join(', ')}`;
}
printReport(replenish);
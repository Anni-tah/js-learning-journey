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
/* 
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

function loopAndUpdate(array, updatedFoo){
    const updatedArray=[];
    for (let item of array){
      updatedArray.push(updatedFoo(item));  
    };
    return updatedArray;
}
function title(item){
    return item.title;
}
function prices(item){
    return item.price;
}
function inventory(item){
    return item.inventory;
}
function halfOff(item){
    let itemCopy = Object.assign({},item);
    itemCopy.price =Math.floor(itemCopy.price/2)
    return itemCopy;
}

//returns an array of titles
 const titles=books1.map(item=> item.title)

 //returns array of prices
 const prices = books1.map(pricesFoo)

 //returns an array of inventory
 const inventory =books1.map(item=>item.inventory)
 //returns array books 50% off
 const halfOff =books1.map(item=>{
    let itemCopy = Object.assign({},item);
    itemCopy.price=Math.floor(itemCopy.price/2);
    return itemCopy;


 })
 //loop through inventory and finds the fist object returns true based on callback
  function loopThroughAndFind(inventory, finder){
    let result =null;
    for(let item of inventory){
        if(finder(item)===true){
            result=item
            break;
        }
    }
    return result;
  }
  //will find given book
  function isBook(book){
    return book.title==='JavaScript: The Definitive Guide';

  }
  loopThroughAndFind(books1, isBook)
  //will find the first book that needs to be restocked
  function stockFirst(item){
    return item.inventory<3;
  }
  let foundItem = books1.find(stockFirst);
    console.log(foundItem);
  //reduce method
*/

const reducer = (accumulator, item)=>{
    console.log(accumulator,item)
let total = item.price* item.inventory;
return accumulator+=total;
}
let total =books1.reduce(reducer,0);

//foreach
/*function loopThrough(inventory, foo){
    for(let item of inventory){
        foo(item);
    }
}*/
//for each
books1.forEach(function(item){
    console.log(item.title.toLocaleUpperCase())
})
/*function logTitle(item){
    console.log(item.title.toUpperCase());
}
loopThrough(books1,logTitle);*/
books1.forEach(function(item){
    console.log(item.title.toLowerCase());
})
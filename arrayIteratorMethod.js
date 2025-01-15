const users = [
    {
      firstName: "Niky",
      lastName: "Morgan",
      favoriteColor: "Blue",
      favoriteAnimal: "Jaguar",
      personalQuote: "You're never too old to learn something new",
    },
    {
      firstName: "Tracy",
      lastName: "Lum",
      favoriteColor: "Yellow",
      favoriteAnimal: "Penguin",
      personalQuote: "I just got lost in thought - it was unfamiliar territory",
    },
    {
      firstName: "Josh",
      lastName: "Rowley",
      favoriteColor: "Blue",
      favoriteAnimal: "Penguin",
      personalQuote: "Always remember you’re unique, just like everyone else",
    },
    {
      firstName: "Kate",
      lastName: "Travers",
      favoriteColor: "Red",
      favoriteAnimal: "Jaguar",
      personalQuote: "Behind every great man is a woman rolling her eyes",
    },
    {
      firstName: "Avidor",
      lastName: "Turkewitz",
      favoriteColor: "Blue",
      favoriteAnimal: "Penguin",
      personalQuote:
        "You don’t have to see the whole staircase, just take the first step",
    },
    {
      firstName: "Drew",
      lastName: "Price",
      favoriteColor: "Yellow",
      favoriteAnimal: "Elephant",
      personalQuote:
        "Failure is not the opposite of success: it’s part of success",
    },
  ];
function printFirstName(collection,color){
    for(const user of collection){
        if (user.favoriteColor.toLowerCase() ===color){
        console.log(user.firstName);
    }
}
} 
printFirstName(users, 'yellow');

//find elements using a simple condition with array.prototype.indexof()
const cards = ['queen of hearts', 'jack of clubs', 'ten of diamonds', 'ace of spades'];
cards.indexOf('jack of clubs')

//Filtering arrays
/*function filter(collection){
  for(const user of collection){
    if(likesElephants(user)){
      console.log(user.firstName)

    }
  }
}
function likesElephants(user){
  return user['favoriteAnimal']==='Elephant';
}
filter(users);*/

function filter(collection,cb){
  for (const user of collection){
    if(cb(user)){
      console.log(user.firstName);
    }
  }
}
filter(users,function(user){
  return user.favoriteColor ==='Blue' && user.favoriteAnimal ==='Penguin';
});
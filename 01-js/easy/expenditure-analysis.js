/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let myMap = new Map();
  for(let i=0;i<transactions.length;i++){
    let c = transactions[i].category;
    let p = transactions[i].price;
    if(myMap.has(c)){
      myMap.set(c,myMap.get(c)+p);
    }
    else{
      myMap.set(c,p);
    }
  }
  let ans = [];
  myMap.forEach((key,value) => {
    ans.push({category:key,totalSpent:value});
  })
  return ans;
}

module.exports = calculateTotalSpentByCategory;

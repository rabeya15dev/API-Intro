
// javascript object Nation
// JSON
const user = { id: 11, name: 'gorib Ami', job: 'actor' };

const stringiFied = JSON.stringify(user);
/* console.log(stringiFied);
console.log(user); */

const shop = {
  name: 'aliya store',
  address: 'ranbir road',
  profit: 7000,
  products: ['laptop', 'mobile', 'pepsi'],
  owner: {
    name: 'shakib',
    profession: 'player'
  },
  isExpensive: false
};
const shopStringified = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringified);
const coverted = JSON.parse(shopStringified);
console.log(coverted);
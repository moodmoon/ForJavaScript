class Stock {
  constructor() {
    this.stockItems = [];
  }

  findItemIndex(id) {
    return this.stockItems.findIndex((ids) => ids.itemId === id);
  }

  addItem(id, amount) {
    if (id === null || id === undefined || amount === null || amount === undefined) {
      return -1;
    }
    if (this.findItemIndex(id) === -1) { //not found
      return this.stockItems.push({
        itemId: id,
        quantity: amount
      });
    } else { //found
      const foundIndex = this.findItemIndex(id);
      return this.stockItems[foundIndex].quantity += amount
    } 
  }

  addItems(items) {
    const result = items.filter((item) => {
      const result = this.addItem(item.itemId, item.quantity);
      return result !== -1;
    });
    return result.length;
  }

  sell(id, amount) {
    const foundIndex = this.findItemIndex(id);
    if (this.findItemIndex(id) === -1) { //not found
      return -1;
    }
    if (this.stockItems[foundIndex].quantity >= amount) { //found
        return this.stockItems[foundIndex].quantity -= amount
    }
  }

  getAllStockAmount() {
    return this.stockItems.reduce( (total , item) => total += item.quantity ,0)
  }
}

const stock1 = new Stock();
const stock2 = new Stock();
stock1.findItemIndex(1);
stock1.addItem(101, 50);
stock1.addItem(102, 100);
stock1.addItem(103, 200);
// console.log(stock1);
stock1.addItem(103, 100);
stock1.addItem(100);
stock1.addItem();
stock1.addItem(null, null);
console.log(stock2.addItems([{ itemId: 10, quantity: 100 },{ itemId: 11, quantity: 110 },])); //2
console.log(stock2.addItems([{ itemId: null, quantity: 100 },{ itemId: 12, quantity: 120 },])); //1
console.log(stock2.addItems([{}, { itemId: 13, quantity: 130 }, { quantity: 100 }])); //1
console.log(stock2.addItems([{ quantity: 100 }, { itemId: 100 }], {})); //0
// console.log(stock2);
stock1.sell(103, 50);
stock1.sell(101, 40);
stock1.sell(101, 100); // can not
console.log(stock1);
console.log('total of stock1: ',stock1.getAllStockAmount());
console.log(stock2);
console.log('total of stock2: ',stock2.getAllStockAmount());
// console.log(stock2.getAllStockAmount());

import { products } from './data/products.js';

function itemList(userItems) {
  const items = userItems;
  const initialPage = () => {
    //const inputElement = document.getElementsByTagName('input')[0]
    const inputElement = document.querySelector('input');
    inputElement.addEventListener('input', filterItemsHandler);
    showItems(items);
  };

  const filterItemsHandler = (event) => {
    //console.log(event.target.value)
    const userKeywords = event.target.value.toLowerCase();
    const filterItems = items.filter((item) => {
      return item.keywords.toLowerCase().includes(userKeywords);
    });
    showItems(filterItems);
  };

  const showItems = (items) => {
    //query ul element    
    const ulElement = document.getElementById('items')    
    //remove ul children    
    ulElement.textContent = ''    
    //create li elements    
    items.forEach((item) => {      
      const liElement = document.createElement('li')      
      liElement.textContent = `ID:${item.id}, NAME:${item.name}, KEYWORDS:${item.keywords}`      
      ulElement.appendChild(liElement)    
    })
  }

  return {
    initialPage,
    filterItemsHandler,
    showItems,
  };
}

export { itemList };
const { initialPage } = itemList(products);
initialPage();

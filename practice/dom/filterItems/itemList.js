import { products } from './data/products.js';

function itemList(userItems) {
  const initialPage = () => {
    const inputElement = document.getElementsByTagName('input')[0];
    inputElement.addEventListener('input', filterItemsHandler);
    showItems(userItems);
  };

  const filterItemsHandler = (event) => {
    console.log(event.target.value);
    const userKey = event.target.value.toLowerCase();
    const filterKey = userItems.filter((item) => {
      return item.keywords.toLowerCase().includes(userKey);
    });
    showItems(filterKey);
  };

  const showItems = (items) => {
    const ulElement = document.getElementById('items');
    ulElement.textContent = '';
    items.forEach((item) => {
      const newLi = document.createElement('li');
      newLi.textContent = `ID:${item.id}, Name:${item.name} , KEYWORD:${item.keywords}`;
      ulElement.appendChild(newLi);
    });
  };

  return {
    initialPage,
    filterItemsHandler,
    showItems,
  };
}

export { itemList };
const { initialPage } = itemList(products);
initialPage();

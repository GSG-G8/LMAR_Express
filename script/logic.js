let addItem = function addItem(array, item) {
  if (array.length > 0) {
    let idItem = array[array.length - 1].id;
    idItem++;
    item.id = idItem;
  }
  return [...array, item];
};

let deleteItemById = function(array, delId) {
  return array.filter(val => val.id !== delId);
};

let searchFunction = function searchItem(array, searchInput) {
  return array.filter((val, index) => array[index].title.includes(searchInput));
};

if (typeof module !== undefined) {
  module.exports = {
    addItem,
    deleteItemById,
    searchFunction
  };
}

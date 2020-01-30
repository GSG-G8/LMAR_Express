let generateId = function () {
  idCounter++;
  localStorage.setItem("idCounter", JSON.stringify(idCounter));
  return idCounter;
};

let addItem = function addItem(array, item) {
  return [...array, item];
};

let deleteItemById = function (array, delId) {
  return array.filter(val => val.Id !== delId);
};

let searchFunction = function searchItem(array, searchInput) {
  return array.filter((val, index) =>
    array[index].title.includes(searchInput)
  );
};

function totalPrice(array) {
  let total = array.reduce((acc, c) => ({
    price: acc.price + c.price
  }));
  return total.price;
}

if (typeof module !== "undefined") {
  module.exports = {
    addItem,
    deleteItemById,
    searchFunction,
    totalPrice,
    clearList,
    generateId
  };
}
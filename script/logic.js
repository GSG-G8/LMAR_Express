let generateId = function () {
  idCounter++;
  localStorage.setItem("idCounter", JSON.stringify(idCounter));
  return idCounter;
}



let addItem = function addItem(array, item) {
  return [...array, item];
};


let deleteItemById = function (array, delId) {
  return array.filter(val => val.Id !== delId);
};

function clearList() {
  localStorage.removeItem("productsDataBase");
}

let searchFunction = function searchItem(array, searchInput) {
  return array.filter((val, index) => array[index].title.includes(searchInput));
};

if (typeof module !== "undefined") {
  module.exports = {
    addItem,
    deleteItemById,
    searchFunction,
    clearList,
    generateId
  };
}
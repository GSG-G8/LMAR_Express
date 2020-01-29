let addItem = function addItem(array, item) {
  if (array.length > 0) {
    let idItem = array[array.length - 1].id;
    idItem++;
    item.id = idItem;
  }
  return [...array, item];
};

function clearList() {
  localStorage.removeItem("productsDataBase");
}

if (typeof module !== "undefined") {
  console.log(111, module)
  module.exports = {
    addItem
  };
}
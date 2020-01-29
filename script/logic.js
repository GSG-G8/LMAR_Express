let addItem = function addItem(array, item) {
  if (array.length > 0) {
    let idItem = array[array.length - 1].id;
    idItem++;
    item.id = idItem;
  }
  return [...array, item];
};

if (typeof module !== undefined) {
  module.exports = {
    addItem
  };
}

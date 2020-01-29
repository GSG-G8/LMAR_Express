const {
  addItem,
  deleteItemById,
  searchFunction,
  totalPrice
} = require("./script/logic");

let itemArray = [
  {
    id: 6,
    title: "t_shirt",
    details: "any details",
    price: 25
  },
  {
    id: 7,
    title: "hat",
    details: "any details",
    price: 30
  },
  {
    id: 9,
    title: "hathee",
    details: "any details",
    price: 30
  }
];

///---expected***////
let expectedAdditem = [
  {
    id: 6,
    title: "t_shirt",
    details: "any details",
    price: 25
  },
  {
    id: 7,
    title: "hat",
    details: "any details",
    price: 30
  },
  {
    id: 9,
    title: "hathee",
    details: "any details",
    price: 30
  },
  {
    id: 10,
    title: "blouse",
    details: "more de",
    price: 310
  }
];

let expectedDeleteItemById = [
  {
    id: 6,
    title: "t_shirt",
    details: "any details",
    price: 25
  },
  {
    id: 9,
    title: "hathee",
    details: "any details",
    price: 30
  }
];

let expectedSearchArr = [
  {
    id: 7,
    title: "hat",
    details: "any details",
    price: 30
  },
  {
    id: 9,
    title: "hathee",
    details: "any details",
    price: 30
  }
];
//addItem
describe("Testing addItem  return new array with new element", () => {
  test("check lenght of array", () => {
    expect(
      addItem(itemArray, {
        id: 19,
        title: "blouse",
        details: "more de",
        price: 310
      }).length
    ).toEqual(expectedAdditem.length);
  });
  test("addItem function Should return new array with new item", () => {
    let actual = addItem(itemArray, {
      id: 19,
      title: "blouse",
      details: "more de",
      price: 310
    });
    expect(actual[actual.length - 1]).toEqual(
      expectedAdditem[expectedAdditem.length - 1]
    );
  });
});

//deleteItemById
describe("Testing deleteItemById  return new array with removed element", () => {
  test("check lenght of array", () => {
    expect(deleteItemById(itemArray, 7).length).toEqual(
      expectedDeleteItemById.length
    );
  });
  test("deleteItemById function Should return new array without deleted item", () => {
    let actual = deleteItemById(itemArray, 7);
    expect(actual).toEqual(expectedDeleteItemById);
  });
});

//search function
describe("Testing searchFunction return search result", () => {
  test("search the array with string ('ha') to show product that contains this string", () => {
    let actual = searchFunction(itemArray, "ha");
    expect(actual).toEqual(expectedSearchArr);
  });
});

describe("Testing totalPrice return the total of price", () => {
  test("return total price", () => {
    let actual = totalPrice(itemArray);
    expect(actual).toEqual(85);
  });
});

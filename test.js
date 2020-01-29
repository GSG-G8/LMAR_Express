const { addItem } = require("./script/logic");

let itemArray = [
  {
    id: 6,
    title: "t_shirt",
    details: "any details",
    price: "25$"
  },
  {
    id: 7,
    title: "hat",
    details: "any details",
    price: "30$"
  },
  {
    id: 9,
    title: "hathee",
    details: "any details",
    price: "30$"
  }
];

let expectedAdditem = [
  {
    id: 6,
    title: "t_shirt",
    details: "any details",
    price: "25$"
  },
  {
    id: 7,
    title: "hat",
    details: "any details",
    price: "30$"
  },
  {
    id: 9,
    title: "hathee",
    details: "any details",
    price: "30$"
  },
  {
    id: 10,
    title: "blouse",
    details: "more de",
    price: "310$"
  }
];
describe("Testing addItem  return new array with new element", () => {
  test("check lenght of array", () => {
    expect(
      addItem(itemArray, {
        id: 19,
        title: "blouse",
        details: "more de",
        price: "310$"
      }).length
    ).toEqual(expectedAdditem.length);
  });
  test("addItem function Should return new array with new item", () => {
    let actual = addItem(itemArray, {
      id: 19,
      title: "blouse",
      details: "more de",
      price: "310$"
    });
    expect(actual[actual.length - 1]).toEqual(
      expectedAdditem[expectedAdditem.length - 1]
    );
  });
});

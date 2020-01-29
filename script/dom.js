// The Seller Page
// Add Form

let addName = document.querySelector('#addName');
let addDetails = document.querySelector('#addDetails');
let addPrice = document.querySelector('#addPrice');
let addImgUrl = document.querySelector('#addImgUrl');
let addCategory = document.querySelector('#addCategory');
let addButton = document.querySelector('#addButton');

//Edit Form

let editName = document.querySelector('#editName');
let editDetails = document.querySelector('#editDetails');
let editPrice = document.querySelector('#editPrice');
let editImgUrl = document.querySelector('#editImgUrl');
let editCategory = document.querySelector('#editCategory');
let editButton = document.querySelector('#editButton');
let clearButton = document.querySelector('#editButton');

// XXXX

let searchInput = document.querySelector('.products__searchinput');
let sellerListView = document.querySelector('.seller__icon--list');
let sellerGridView = document.querySelector('.seller__icon--grid');

// The Customer Page

let searchInputCustomer = document.querySelector('.products__search');
let customerListView = document.querySelector('.customer__icon--list');
let customerGridView = document.querySelector('.customer__icon--grid');


// sth else


let productsDataBase = JSON.parse(localStorage.getItem("productsDataBase"));

if (!productsDataBase) {
    productsDataBase = [];
}



function productsObject() {
    return {
        //Id: idItem,
        Name: addName.value,
        Details: addDetails.value,
        Price: addPrice.value,
        Img: addImgUrl.value,
        Category: addCategory.value
    }
}

addButton.addEventListener('click', function () {
    productsDataBase = addItem(productsDataBase, productsObject());
    localStorage.setItem("productsDataBase", JSON.stringify(productsDataBase));
    console.log(productsDataBase);
});

clearButton.addEventListener('click', clearList);
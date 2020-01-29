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



// XXXX

let searchInput = document.querySelector('.products__searchinput');
let sellerListView = document.querySelector('.seller__icon--list');
let sellerGridView = document.querySelector('.seller__icon--grid');

let productsItemsSeller = document.querySelector('.products__items');
let body = document.querySelector('body');

// The Customer Page

let searchInputCustomer = document.querySelector('.products__search');
let customerListView = document.querySelector('.customer__icon--list');
let customerGridView = document.querySelector('.customer__icon--grid');




// sth else

let idCounter = JSON.parse(localStorage.getItem("idCounter"));

if (!idCounter) {
    idCounter = -1;
}


let productsDataBase = JSON.parse(localStorage.getItem("productsDataBase"));

if (!productsDataBase) {
    productsDataBase = [];
}



function productsObject() {
    return {
        Id: generateId(),
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
    showProducts();
});


body.addEventListener('load', showProducts())

function removeProducts() {
    for (let i = 0; i < productsDataBase.length; i++) {
        let sellerProductsRemove = document.querySelector(`.seller__products__remove${i}`);
        let sellerProductsEdit = document.querySelector(`.seller__products__edit${i}`);
        sellerProductsRemove.addEventListener('click', function () {
            productsDataBase = deleteItemById(productsDataBase, productsDataBase[i]['Id']);
            localStorage.setItem("productsDataBase", JSON.stringify(productsDataBase));
            showProducts();
        });
        sellerProductsEdit.addEventListener('click', function () {
            editName.value = productsDataBase[i]['Name'];
            editDetails.value = productsDataBase[i]['Details'];
            editPrice.value = productsDataBase[i]['Price'];
            editImgUrl.value = productsDataBase[i]['Img'];
            editCategory.value = productsDataBase[i]['Category'];

            let editedId = productsDataBase[i]['Id'];
            editButton.addEventListener('click', function () {
                console.log(productsDataBase);
                console.log()
                productsDataBase = deleteItemById(productsDataBase, productsDataBase[i]['Id']);
                productsDataBase = addItem(productsDataBase, {
                    Id: editedId,
                    Name: editName.value,
                    Details: editDetails.value,
                    Price: editPrice.value,
                    Img: editImgUrl.value,
                    Category: editCategory.value
                });
                localStorage.setItem("productsDataBase", JSON.stringify(productsDataBase));
                showProducts();
            });

        });
    }
}

function modifyProducts() {



}


function showProducts() {
    productsItemsSeller.innerHTML = '';
    for (let i = 0; i < productsDataBase.length; i++) {

        productsItemsSeller.innerHTML += `<div class="products__item">
        <div class="products__add">
            <i class="fas fa-trash-alt seller__products__remove${i}"></i>
            <i class="fas fa-edit seller__products__edit${i}"></i>
        </div>
        <div class="products__details">
            <h2> ${productsDataBase[i]["Name"]}</h2>
            <p>${productsDataBase[i]["Details"]}</p>
        </div>
    </div>`;

        //adddeven
    }
    removeProducts();
}


// search
searchTodo.addEventListener('keyup', function() {
  let filter = searchInput.value.toUpperCase();
  let item = document.querySelector('.products__item');
  for (let i = 0; i < item.length; i++) {
    let title = item[i].getElementsByTagName('h2')[0];
    let titleVal = title.textContent;
    if (titleVal.toUpperCase().indexOf(filter) > -1) {
      item[i].style.display = '';
    } else {
      item[i].style.display = 'none';
    }
  }
});
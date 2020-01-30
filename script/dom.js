// The Seller Page
// Add Form

const addName = document.querySelector('#addName');
const addDetails = document.querySelector('#addDetails');
const addPrice = document.querySelector('#addPrice');
const addImgUrl = document.querySelector('#addImgUrl');
const addCategory = document.querySelector('#addCategory');
const addButton = document.querySelector('#addButton');

//Edit Form

const editName = document.querySelector('#editName');
const editDetails = document.querySelector('#editDetails');
const editPrice = document.querySelector('#editPrice');
const editImgUrl = document.querySelector('#editImgUrl');
const editCategory = document.querySelector('#editCategory');
const editButton = document.querySelector('#editButton');



// XXXX

const searchInput = document.querySelector('.products__searchinput');
const sellerListView = document.querySelector('.seller__icon--list');
const sellerGridView = document.querySelector('.seller__icon--grid');

const productsItemsSeller = document.querySelector('.products__items');
const productsItemsCustomer = document.querySelector('.customers__products__items');

const body = document.querySelector('body');

// The Customer Page

const searchInputCustomer = document.querySelector('.products__search');
const customerListView = document.querySelector('.customer__icon--list');
const customerGridView = document.querySelector('.customer__icon--grid');




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

if (addButton) {
    addButton.addEventListener('click', function () {
        productsDataBase = addItem(productsDataBase, productsObject());
        localStorage.setItem("productsDataBase", JSON.stringify(productsDataBase));
        showProducts();
    });

}



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

function showProducts() {
    productsItemsSeller.innerHTML = '';
    for (let i = 0; i < productsDataBase.length; i++) {
        let div1 = document.createElement('div');
        div1.setAttribute('class', "products__item");
        let div2 = document.createElement('div');
        div2.setAttribute('class', "products__add");
        let i1 = document.createElement('i');
        i1.setAttribute('class', `fas fa-trash-alt seller__products__remove${i}`);
        let i2 = document.createElement('i');
        i2.setAttribute('class', `fas fa-edit seller__products__edit${i}`);
        let div3 = document.createElement('div');
        div3.setAttribute('class', "products__details");
        let heading2 = document.createElement('h2');
        heading2.textContent = `${productsDataBase[i]["Name"]}`;
        let paragraph = document.createElement('p');
        paragraph.textContent = `${productsDataBase[i]["Details"]}`;
        let heading3 = document.createElement('h3');
        heading3.textContent = `${productsDataBase[i]["Category"]}`;
        let priceHeading = document.createElement('h2');
        priceHeading.textContent = `${productsDataBase[i]["Price"]}`;

        div1.appendChild(div2);
        div2.appendChild(i1);
        div2.appendChild(i2);
        div1.appendChild(div3);
        div3.appendChild(heading2);
        div3.appendChild(paragraph);
        div3.appendChild(heading3);
        productsItemsSeller.appendChild(div1);
    }
    removeProducts();
}
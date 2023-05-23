
$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "https://dummyjson.com/products?limit=100",
        dataType: "JSON",
        success: function (response) {
            let mainObject = response;

            console.log(mainObject);

            // let mainObject = JSON.parse(productsJSON);
            let sidebar = document.querySelector('.offcanvas-body tbody');


            let basketProducts = [];

            if (localStorage.getItem('basketProducts') !== null) {
                let inBasket = JSON.parse(localStorage.getItem('basketProducts'));
                basketProducts = inBasket;
                inBasket.forEach(element => {
                    sidebar.innerHTML += generateTr(element);
                });
            }
            // // ver vqeni storagedan washla :D
            let removeFromStorage = (e) => {
                let parentDiv = e.parentElement.parentElement;
                let arr = JSON.parse(localStorage.getItem('basketProducts'));
                let itemToRemove = arr.find(item => item.id == parentDiv.id);
                console.log(itemToRemove);
                parentDiv.remove();
                if (itemToRemove) {
                    arr = arr.filter(item => item.id !== itemToRemove.id);
                    localStorage.setItem('basketProducts', JSON.stringify(arr));
                }
            }

            let generateHTML = (product) => {
                let cardHTML = `<div class="card" style="width: 18rem;" myID="${product.id}">
                        <div class="img-wrapper">
                            <img src="${product.thumbnail}" class="card-img-top" alt="T-shirt">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">${product.title}</h5>
                            <p style="border-bottom: 2px solid black">Category: ${product.category}</p>
                            <p class="card-text">${product.description}</p>
                            <button href="#" class="btn btn-primary">Add to cart</button>
                        </div>
                    </div>`;
                return cardHTML;
            }
            function displayProducts(obj) {
                console.log(obj);
                obj.products.forEach(element => {
                    let root = document.querySelector('.root');
                    root.innerHTML += generateHTML(element);
                });
            }
            let addToCart = (obj) => {
                let addBtns = document.querySelectorAll('.root > div button')
                addBtns.forEach(element => {
                    element.addEventListener('click', e => {
                        let button = e.target;
                        let parentDiv = button.parentElement.parentElement;
                        let parentId = parentDiv.getAttribute('myID');
                        let arr = obj.products;
                        let object = arr.find((item) => {
                            return item.id == parentId;
                        });
                        // console.log(object);
                        addToStorage(object);

                        sidebar.innerHTML += generateTr(object);
                    });
                });
            }
            function generateTr(obj) {
                let tr = `
                <tr>
                   <th scope="row">
                       <img src="${obj.thumbnail}" />
                   </th>
                   <td>${obj.title}</td>
                   <td>$${obj.price}</td>
                   <td>1</td>
                   <td><button class="btn btn-danger remove-btn" onclick="removeFromStorage(this)">Remove</button></td>
                </tr>
            `;
                return tr;
            }
            let addToStorage = (obj) => {
                basketProducts.push(obj)
                let toJSON = JSON.stringify(basketProducts)
                localStorage.setItem('basketProducts', toJSON);
            }


            displayProducts(mainObject);
            addToCart(mainObject);
        },
        error: function (response) {
            console.log(response);
        },
        complete: function () {
            $('.loader').hide();
        }
    });

});

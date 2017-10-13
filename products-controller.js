//Created a variable to hold the queried DOM element.
let productsOut = document.getElementById("productList");

//Created a for loop to iterate through the products array
for (let i = 0; i < storedProducts.length; i++) {

    //stored the current product to a variable
    let product = storedProducts[i];

        //added innerHTML plugging the product object elements into the HTML.
        productsOut.innerHTML += 
        `
        <article class="products">
            <img src="${product.img}" alt="${product.title}" width="150px">
            <ul>
                <li>Title: ${product.title} </li>
                <li>Author: ${product.author}</li>
                <li>Price: ${product.price}</li>
            </ul>
        </article>
        `
    }

let productsOut = document.getElementById("products");

for (let i = 0; i < storedProducts.length; i++) {
    let product = storedProducts[i];
        productsOut.innerHTML += 
        `
        <img src="${product.img}" alt="${product.title}" width="150px">
        <ul>
            <li>Title: ${product.title} </li>
            <li>Author: ${product.author}</li>
            <li>Price: ${product.price}</li>
        </ul>
        `
    }

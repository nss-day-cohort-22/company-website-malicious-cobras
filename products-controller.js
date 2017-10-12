let productsOut = document.getElementById("productList");

for (let i = 0; i < storedProducts.length; i++) {
    let product = storedProducts[i];
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

let PRODUCT_URL = "http://localhost:3003/products";

function fetchProducts() {
    return fetch(PRODUCT_URL).then(res => res.json()).catch(err=>console.log(err))
}

export default fetchProducts;
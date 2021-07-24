function removeProduct(BASE_URL, productId) {
  let options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  };

  return fetch(BASE_URL + "/" + productId, options).then((res) => res.json());
}

let deleteBtn = document.querySelector("#delete-product-btn");

deleteBtn &&
  deleteBtn.addEventListener("click", () => {
    let BASE_URL = "http://localhost:3003/products";

    const elements = document.querySelectorAll(".delete-checkbox");

    elements.forEach((elem) => {
      console.log(elem.checked);

      if (elem.checked) {
        console.log(elem);
        removeProduct(BASE_URL, elem.value);
        let productElem = document.getElementById(`item_${elem.value}`);
        productElem.remove();
      }
    });
  });

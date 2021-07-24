let cancel = document.querySelector('button[data-action="cancel"]');
let form = document.querySelector("#product_form");
cancel &&
  cancel.addEventListener("click", () => {
    form.reset();
    location.href = "./index.html";
  });

function addProduct(BASE_URL, newProduct) {
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(newProduct),
  };

  return fetch(BASE_URL, options).then((res) => res.json());
}

let save = document.querySelector('button[data-action="save"]');
save &&
  save.addEventListener("click", (event) => {
    let BASE_URL = "http://localhost:3003/products";

    const elements = document.querySelector("#product_form").elements;
    console.log(elements);
    let product = {};
    for (let i = 0; i < elements.length; i++) {
      let item = elements.item(i);
      if (item.value !== "" && !!item.id) {
        product[item.id] = item.value;
      }
    }

    product.id = new Date().getTime();
    console.log(product)
    addProduct(BASE_URL, product);
    location.href = "./index.html";
  });

let select = document.querySelector("select");
let sizeJS = document.querySelector(".size-js");
let weightJS = document.querySelector(".weight-js");
let fornitureJS = document.querySelector(".forniture-js");

select &&
  select.addEventListener("change", (event) => {
    if (event.target.value == "DVD") {
      sizeJS.style.display = "flex";
      weightJS.style.display = "none";
      fornitureJS.style.display = "none";
    } else if (event.target.value == "Book") {
      sizeJS.style.display = "none";
      weightJS.style.display = "flex";
      fornitureJS.style.display = "none";
    } else {
      sizeJS.style.display = "none";
      weightJS.style.display = "none";
      fornitureJS.style.display = "flex";
    }
  });

import "./main.scss";
import fetchProducts from "./js/get";
import "./js/add";
import "./js/delete";



function renderProducts(products) {
  products.forEach((item, index) => {
    const listContainer = document.querySelector(".list");
    const wrapper = document.createElement("div");
    wrapper.classList.add("list-item");
    wrapper.id = `item_${item.id}`;

    const checkbox = document.createElement("input");
    checkbox.classList.add('delete-checkbox');
    checkbox.type = "checkbox";
    checkbox.id = `item-${index}`;
    checkbox.value = item.id;

    wrapper.appendChild(checkbox);

    const information = document.createElement("div");
    information.classList.add("common-information");

    const sku = document.createElement("p");
    const name = document.createElement("p");
    const price = document.createElement("p");

    sku.textContent = item.sku;
    name.textContent = item.name;
    price.textContent = `${item.price} $`;

    information.appendChild(sku);
    information.appendChild(name);
    information.appendChild(price);

    if (item.size) {
      const size = document.createElement("p");
      size.textContent = `Size: ${item.size} MB`;
      information.appendChild(size);
    } else if (item.weight) {
      const weight = document.createElement("p");
      weight.textContent = `Weight: ${item.weight}KG`;
      information.appendChild(weight);
    } else {
      const dimension = document.createElement("p");
      dimension.textContent = `Dimension: ${item.height}x${item.width}x${item.length}`;
      information.appendChild(dimension);
    }

    wrapper.appendChild(information);
    listContainer.appendChild(wrapper);
  });
}

function renderContent() {
  const listContainer = document.querySelector(".list");
  return listContainer && fetchProducts().then((data) => renderProducts(data));
}

document.addEventListener("DOMContentLoaded", renderContent);

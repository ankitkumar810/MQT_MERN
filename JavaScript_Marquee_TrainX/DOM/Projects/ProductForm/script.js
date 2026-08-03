const form = document.getElementById("form");
const tbody = document.querySelector("#table tbody");

let products = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let product = {};

    product.srNo = products.length + 1;

    const fields = form.querySelectorAll("input, select");

    fields.forEach((field) => {
        product[field.name] = field.value;
    });

    products.push(product);

    displayProducts();

    form.reset();
});

function displayProducts() {
    tbody.innerHTML = "";

    products.forEach((product, index) => {
        tbody.innerHTML += `
            <tr>
                <td>${product.srNo}</td>
                <td>${product.name}</td>
                <td>${product.category}</td>
                <td>${product.price}</td>
                <td>${product.quanity}</td>
            </tr>
        `;
    });
}
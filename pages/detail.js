const details = document.querySelector(".other-details");

const naam = document.createElement("a");
const parts = document.createElement("p");
const price = document.createElement("p");
const btn_atc = document.createElement("button");
const btn_bin = document.createElement("button");
const textArea = document.createElement("textarea");

const sizes = document.createElement("div");
const sml = document.createElement("div");
const med = document.createElement("div");
const lrg = document.createElement("div");
const colors = document.createElement("select");

const colorOption1 = document.createElement("option");
const colorOption2 = document.createElement("option");
const colorOption3 = document.createElement("option");
const colorOption4 = document.createElement("option");
const colorOption5 = document.createElement("option");
const colorOption6 = document.createElement("option");
const quantityDiv = document.createElement("div");
const minus = document.createElement("button");
const ansDiv = document.createElement("div");
const plus = document.createElement("button");

naam.setAttribute("class", "info");
parts.setAttribute("class", "hissa");
price.setAttribute("class", "price");
textArea.rows = 8;
textArea.placeholder = "Write here your notes for the order";

btn_atc.classList.add("cart", "add-cart");
btn_bin.classList.add("cart", "buy-now");
textArea.setAttribute("class", "txt-area");
sizes.setAttribute("class", "size");
sml.setAttribute("class", "small");
med.setAttribute("class", "medium");
lrg.setAttribute("class", "large");

sizes.appendChild(sml);
sizes.appendChild(med);
sizes.appendChild(lrg);

colors.setAttribute("class", "drop-down");
colorOption1.setAttribute("class", "color-opt");
colorOption2.setAttribute("class", "color-opt");
colorOption3.setAttribute("class", "color-opt");
colorOption4.setAttribute("class", "color-opt");
colorOption5.setAttribute("class", "color-opt");
colorOption6.setAttribute("class", "color-opt");

colors.appendChild(colorOption1);
colors.appendChild(colorOption2);
colors.appendChild(colorOption3);
colors.appendChild(colorOption4);
colors.appendChild(colorOption5);
colors.appendChild(colorOption6);

quantityDiv.setAttribute("class", "quantity-main-div");
minus.setAttribute("class", "decrement-div");
ansDiv.setAttribute("class", "result-div");
plus.setAttribute("class", "increment-div");

quantityDiv.appendChild(minus);
quantityDiv.appendChild(ansDiv);
quantityDiv.appendChild(plus);

parts.appendChild(price);
parts.appendChild(sizes);
parts.appendChild(colors);
parts.appendChild(quantityDiv);
parts.appendChild(textArea);
parts.appendChild(btn_bin);

let quantityItem = 1;
minus.addEventListener("click", function () {
    if (quantityItem > 1) {
        quantityItem--;
        ansDiv.textContent = quantityItem;
    }
});

plus.addEventListener("click", function () {
    quantityItem++;
    ansDiv.textContent = quantityItem;
});

minus.textContent = "-";
plus.textContent = "+";
ansDiv.textContent = quantityItem;

colorOption1.textContent = `colors`;
colorOption2.textContent = `black`;
colorOption3.textContent = `white`;
colorOption4.textContent = `grey`;
colorOption5.textContent = `blue`;
colorOption6.textContent = `red`;

let selectedColor = "any";
colors.addEventListener("change", function () {
    selectedColor = colors.value;
});

let sizeOrder = "small";
sml.addEventListener("click", function () {
    sizeOrder = "small";
    sml.style.border = "1px solid black";
    med.style.border = "none";
    lrg.style.border = "none";
    // sizes.removeChild(med);
    // sizes.removeChild(lrg);
});

med.addEventListener("click", function () {
    sizeOrder = "medium";
    med.style.border = "1px solid black";
    sml.style.border = "none";
    lrg.style.border = "none";
    // sizes.removeChild(sml);
    // sizes.removeChild(lrg);
});

lrg.addEventListener("click", function () {
    sizeOrder = "large";
    lrg.style.border = "1px solid black";
    med.style.border = "none";
    sml.style.border = "none";
    // sizes.removeChild(sml);
    // sizes.removeChild(med);
});

btn_atc.textContent = "ADD TO CART";
btn_bin.textContent = "BUY IT NOW";
sml.textContent = "S";
med.textContent = "M";
lrg.textContent = "L";

details.appendChild(naam);
details.appendChild(parts);

fetch("../data.json")
    .then((res) => res.json())
    .then((products) => {
        const param = new URLSearchParams(window.location.search);
        const id = param.get("id");

        if (id < products.length) {
            const image = document.querySelector(".images");
            image.src = products.at(id).iaddress;

            naam.textContent = products.at(id).name;
            // price.textContent = `Rs ${products.at(id).price}.00`;
            let qeematItem = products.at(id).price;
            price.textContent = `Rs ${qeematItem}.00`;

            btn_bin.addEventListener("click", function () {
                localStorage.setItem("bin-image", JSON.stringify(image.src));
                localStorage.setItem(
                    "bin-name",
                    JSON.stringify(naam.textContent)
                );
                localStorage.setItem("bin-price", JSON.stringify(qeematItem));
                localStorage.setItem(
                    "bin-quantity",
                    JSON.stringify(quantityItem)
                );
                localStorage.setItem("bin-size", JSON.stringify(sizeOrder));

                window.location.href = "./binco.html";
            });
        }
    });

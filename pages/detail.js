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

parts.appendChild(price);
parts.appendChild(sizes);
parts.appendChild(btn_atc);
parts.appendChild(textArea);
parts.appendChild(btn_bin);

btn_atc.textContent = "ADD TO CART";
btn_bin.textContent = "BUY IT NOW";
sml.textContent = "S";
med.textContent = "M";
lrg.textContent = "L";

details.appendChild(naam);
details.appendChild(parts);

fetch("/data.json")
    .then((res) => res.json())
    .then((products) => {
        const param = new URLSearchParams(window.location.search);
        const id = param.get("id");

        if (id < products.length) {
            const image = document.querySelector(".images");
            image.src = products.at(id).iaddress;

            naam.textContent = products.at(id).name;
            price.textContent = `Rs ${products.at(id).price}.00`;
        }
    });

const formData = document.querySelector(".form-data");
const contactDiv = document.createElement("div");
contactDiv.setAttribute("class", "contact-div");
const back = document.querySelector(".back");
back.addEventListener("click", function () {
    window.location.href = "../index.html";
});

const h1tag = document.createElement("h1");
h1tag.setAttribute("class", "contact-txt");
h1tag.textContent = "Contact";

const contactInput = document.createElement("input");
contactInput.setAttribute("class", "contact-input");
contactInput.placeholder = "Email or mobile number";
contactInput.required = true;

contactDiv.appendChild(h1tag);
contactDiv.appendChild(contactInput);

formData.appendChild(contactDiv);

const deliveryDiv = document.createElement("div");
deliveryDiv.setAttribute("class", "delivery-div");

const htag = document.createElement("h1");
htag.setAttribute("class", "contact-txt");
htag.textContent = "Delivery";

const regionInput = document.createElement("input");
regionInput.setAttribute("class", "contact-input");
regionInput.placeholder = "Enter country or region";
regionInput.required = true;

deliveryDiv.appendChild(htag);
deliveryDiv.appendChild(regionInput);

const nameDiv = document.createElement("div");
const fName = document.createElement("input");
const lName = document.createElement("input");

nameDiv.setAttribute("class", "city-div");
fName.setAttribute("class", "city-name");
lName.setAttribute("class", "city-name");

fName.placeholder = "First Name";
fName.required = true;
lName.placeholder = "Last Name (optional)";
lName.required = false;

nameDiv.appendChild(fName);
nameDiv.appendChild(lName);
deliveryDiv.appendChild(nameDiv);

const addressInput = document.createElement("input");
addressInput.setAttribute("class", "contact-input");
addressInput.placeholder = "Enter your address";
addressInput.required = true;

deliveryDiv.appendChild(addressInput);

const apartmentInput = document.createElement("input");
apartmentInput.setAttribute("class", "contact-input");
apartmentInput.placeholder = "Enter your apartment, suite etc(optional)";
apartmentInput.required = false;

deliveryDiv.appendChild(apartmentInput);

const cityDiv = document.createElement("div");
const city = document.createElement("input");
const postalCode = document.createElement("input");

cityDiv.setAttribute("class", "city-div");
city.setAttribute("class", "city-name");
postalCode.setAttribute("class", "city-name");

city.placeholder = "your city";
city.required = true;
postalCode.placeholder = "postal code";
postalCode.required = false;

cityDiv.appendChild(city);
cityDiv.appendChild(postalCode);
deliveryDiv.appendChild(cityDiv);

const phoneInput = document.createElement("input");
phoneInput.setAttribute("class", "contact-input");
phoneInput.placeholder = "Enter your phone number";
phoneInput.required = true;

deliveryDiv.appendChild(phoneInput);
formData.appendChild(deliveryDiv);
const rates = document.createElement("div");
rates.setAttribute("class", "rates");

const shiptag = document.createElement("h1");
shiptag.setAttribute("class", "ship-tag");
shiptag.textContent = "Shipping method";

const stdRates = document.createElement("div");
stdRates.setAttribute("class", "std-r-div");

const p1 = document.createElement("p");
const p2 = document.createElement("p");
p1.setAttribute("class", "rates-para");
p2.setAttribute("class", "rates-para");

p1.textContent = "Standard";
p2.textContent = "Rs 200.00";

stdRates.appendChild(p1);
stdRates.appendChild(p2);

rates.appendChild(shiptag);
rates.appendChild(stdRates);

formData.appendChild(rates);

const pay = document.createElement("div");
pay.setAttribute("class", "pay-div");

const paytag = document.createElement("h1");
paytag.setAttribute("class", "pay-tag");
paytag.textContent = "Payment";

const payMethod = document.createElement("div");
payMethod.setAttribute("class", "pay-m-div");

const payType = document.createElement("p");
payType.setAttribute("class", "pay-para");

payType.textContent = "Cash on Delivery (COD)";

payMethod.appendChild(payType);

pay.appendChild(paytag);
pay.appendChild(payMethod);

formData.appendChild(pay);

const btnDiv = document.createElement("div");
btnDiv.setAttribute("class", "btn-div");
const orderBtn = document.createElement("button");
orderBtn.setAttribute("class", "order-btn");
orderBtn.textContent = "Complete Order";
btnDiv.appendChild(orderBtn);
formData.appendChild(btnDiv);

const cartInfo = document.querySelector(".cart-info");
const cartData = JSON.parse(localStorage.getItem("cartItems")) ?? [];
let totalPrice = 0;
let delprice = 200;

const priceHolder = document.querySelector(".ttl-price");
const deliveryCharges = document.querySelector(".del-price");
const GrandCharges = document.querySelector(".overall-price");

const containerDiv = document.createElement("div");
containerDiv.setAttribute("class", "container-div");

const itemImg = document.createElement("img");
itemImg.setAttribute("class", "item-image");
containerDiv.appendChild(itemImg);

const npscqDiv = document.createElement("div");
npscqDiv.setAttribute("class", "information-div");

const namePara = document.createElement("p");
const sizePara = document.createElement("p");
const colorPara = document.createElement("p");
const ratePara = document.createElement("p");
const quantityPara = document.createElement("p");

namePara.setAttribute("class", "info-para");
sizePara.setAttribute("class", "info-para");
colorPara.setAttribute("class", "info-para");
quantityPara.setAttribute("class", "info-para");
ratePara.setAttribute("class", "info-para");

npscqDiv.appendChild(namePara);
npscqDiv.appendChild(sizePara);
npscqDiv.appendChild(colorPara);
npscqDiv.appendChild(quantityPara);
npscqDiv.appendChild(ratePara);

containerDiv.appendChild(npscqDiv);

const iamgeAddress = JSON.parse(localStorage.getItem("bin-image"));
itemImg.src = iamgeAddress;
const nameItem = JSON.parse(localStorage.getItem("bin-name"));
namePara.textContent = nameItem;
const itemSize = JSON.parse(localStorage.getItem("bin-size"));
sizePara.textContent = `Size: ${itemSize}`;
const quantityOrdered = JSON.parse(localStorage.getItem("bin-quantity"));
quantityPara.textContent = `Quantity: ${quantityOrdered}`;
const itemPrice = JSON.parse(localStorage.getItem("bin-price"));
let rate = parseFloat(itemPrice) * parseFloat(quantityOrdered);

ratePara.textContent = `Rs ${rate}.00`;
totalPrice += parseFloat(rate);
cartInfo.appendChild(containerDiv);
priceHolder.textContent = `Rs ${totalPrice}.00`;
deliveryCharges.textContent = `Rs ${delprice}.00`;
GrandCharges.textContent = `Rs ${totalPrice + delprice}.00`;

orderBtn.addEventListener("click", function () {
    /* city.value,phoneInput.value,address.value,fName and lName.value */

    localStorage.setItem("customer-name", JSON.stringify(fName.value));
    localStorage.setItem("customer-phone", JSON.stringify(phoneInput.value));
    localStorage.setItem("customer-city", JSON.stringify(city.value));
    localStorage.setItem(
        "customer-address",
        JSON.stringify(addressInput.value)
    );
    localStorage.setItem(
        "customer-bill",
        JSON.stringify(GrandCharges.textContent)
    );
    window.location.href = "./greetings.html";
});

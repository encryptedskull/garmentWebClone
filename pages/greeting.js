const main = document.querySelector(".main");

const greetingDiv = document.createElement("div");
greetingDiv.setAttribute("class", "greeting-div");

const greetingWord = document.createElement("h3");
greetingWord.setAttribute("class", "greeting-words");
greetingWord.textContent = "THANK YOU FOR THE SHOPPING";

greetingDiv.appendChild(greetingWord);
main.appendChild(greetingDiv);

const informationDiv = document.createElement("div");
informationDiv.setAttribute("class", "information-div");

const naam = document.createElement("p");
const phone = document.createElement("p");
const city = document.createElement("p");
const address = document.createElement("p");
const bill = document.createElement("p");

naam.setAttribute("class", "info-para");
phone.setAttribute("class", "info-para");
city.setAttribute("class", "info-para");
address.setAttribute("class", "info-para");
bill.setAttribute("class", "info-para");

naam.textContent = `Name: ${JSON.parse(localStorage.getItem("customer-name"))}`;
phone.textContent = `Phone: ${JSON.parse(
    localStorage.getItem("customer-phone")
)}`;
address.textContent = `Address: ${JSON.parse(
    localStorage.getItem("customer-address")
)}`;
city.textContent = `City: ${JSON.parse(localStorage.getItem("customer-city"))}`;
bill.textContent = `Amount: ${JSON.parse(
    localStorage.getItem("customer-bill")
)}`;

informationDiv.appendChild(naam);
informationDiv.appendChild(phone);
informationDiv.appendChild(city);
informationDiv.appendChild(address);
informationDiv.appendChild(bill);

main.appendChild(informationDiv);

const btnDiv = document.createElement("div");
btnDiv.setAttribute("class", "button-div");
const shopBtn = document.createElement("button");
shopBtn.setAttribute("class", "cart");
shopBtn.textContent = "Continue Shopping";
btnDiv.appendChild(shopBtn);
main.appendChild(btnDiv);

shopBtn.addEventListener("click", function () {
    window.location.href = "../index.html";
});

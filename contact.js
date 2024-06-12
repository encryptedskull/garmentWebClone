const formDiv = document.querySelector(".form-div");

const info = document.createElement("div");
info.setAttribute("class", "some-info");

const dusl = document.createElement("p");
const happy = document.createElement("p");

dusl.setAttribute("class", "d-us-l");
happy.setAttribute("class", "happy-lines");

dusl.textContent = "DROP US A LINE";
happy.textContent =
    "We are happy to answer any questions you have or provide you with an estimate. Just send us a message in the form below with any questions you may have.";

info.appendChild(dusl);
info.appendChild(happy);

const form = document.createElement("form");
form.setAttribute("class", "form-for-reply");

const nameDiv = document.createElement("div");
nameDiv.setAttribute("class", "fl-li");

const nameLbl = document.createElement("label");
const nameInput = document.createElement("input");

nameLbl.setAttribute("class", "lbl-txt");
nameLbl.textContent = "NAME (required)*:";

nameInput.setAttribute("id", "name");
nameInput.type = "text";
nameInput.required = true;

nameDiv.appendChild(nameLbl);
nameDiv.appendChild(nameInput);

form.appendChild(nameDiv);

const phoneDiv = document.createElement("div");
phoneDiv.setAttribute("class", "fl-li");

const phoneLbl = document.createElement("label");
const phoneInput = document.createElement("input");

phoneLbl.setAttribute("class", "lbl-txt");
phoneLbl.textContent = "PHONE NUMBER:";

phoneInput.setAttribute("id", "mobile-no");
phoneInput.type = "number";
phoneInput.required = false;

phoneDiv.appendChild(phoneLbl);
phoneDiv.appendChild(phoneInput);

form.appendChild(phoneDiv);

const mailDiv = document.createElement("div");
mailDiv.setAttribute("class", "fl-li");

const mailLbl = document.createElement("label");
const mailInput = document.createElement("input");

mailLbl.setAttribute("class", "lbl-txt");
mailLbl.textContent = "EMAIL (required)*:";

mailInput.setAttribute("id", "email");
mailInput.type = "email";
mailInput.required = true;

mailDiv.appendChild(mailLbl);
mailDiv.appendChild(mailInput);

form.appendChild(mailDiv);

const msgDiv = document.createElement("div");
msgDiv.setAttribute("class", "fl-li");

const msgLbl = document.createElement("label");
const msgInput = document.createElement("textarea");

msgLbl.setAttribute("class", "lbl-txt");
msgLbl.textContent = "YOUR MESSAGE (required)*";

msgInput.setAttribute("id", "comment");
msgInput.type = "comment";
msgInput.rows = 6;
msgInput.required = true;

msgDiv.appendChild(msgLbl);
msgDiv.appendChild(msgInput);

form.appendChild(msgDiv);

const btn_sub = document.createElement("button");
btn_sub.setAttribute("class", "cart");
btn_sub.textContent = "Submit";

form.appendChild(btn_sub);

formDiv.appendChild(info);
formDiv.appendChild(form);

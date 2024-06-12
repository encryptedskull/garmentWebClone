const cart = document.querySelector(".bag-c");
const cartSide = document.querySelector(".cart-side");

fetch("./data.json")
    .then((res) => res.json())
    .then((products) => {
        let poster = document.querySelector(".container");

        function Element(name) {
            return document.createElement(name);
        }

        products.forEach((element, i) => {
            const container = document.createElement("div");
            container.setAttribute("class", "card");
            poster.appendChild(container);

            const naam = document.createElement("a");
            const part = document.createElement("p");
            const price = document.createElement("p");
            const discription = document.createElement("p");
            const image = document.createElement("img");
            const btn_atc = document.createElement("button");

            const sizes = document.createElement("div");
            const sml = document.createElement("div");
            const med = document.createElement("div");
            const lrg = document.createElement("div");

            naam.setAttribute("class", "info");
            part.setAttribute("class", "hessa");
            price.setAttribute("class", "price");
            discription.setAttribute("class", "discription-p");
            image.setAttribute("class", "sample");
            btn_atc.classList.add("cart", "add-cart");
            btn_atc.setAttribute("data-index", i);
            sizes.setAttribute("class", "size");
            sml.setAttribute("class", "small");
            med.setAttribute("class", "medium");
            lrg.setAttribute("class", "large");

            sizes.appendChild(sml);
            sizes.appendChild(med);
            sizes.appendChild(lrg);

            part.appendChild(price);
            part.appendChild(sizes);
            part.appendChild(btn_atc);

            container.appendChild(image);
            container.appendChild(naam);
            container.appendChild(part);
            // container.appendChild(discription);

            image.src = element.iaddress;
            naam.textContent = element.name;
            price.textContent = `Rs ${element.price}.00`;
            discription.textContent = element.discription;
            btn_atc.textContent = "ADD TO CART";
            sml.textContent = "S";
            med.textContent = "M";
            lrg.textContent = "L";

            image.addEventListener("click", function () {
                window.location.href = `./pages/detail.html?id=${i}`;
            });

            btn_atc.addEventListener("click", function () {
                let cartItems =
                    JSON.parse(localStorage.getItem("cartItems")) ?? [];
                const productId = i;
                const newProduct = products.at(productId);

                cartItems.push(newProduct);

                localStorage.setItem("cartItems", JSON.stringify(cartItems));
            });

            cart.addEventListener("click", function () {
                disBlock(cartSide);
                const cartProduct =
                    JSON.parse(localStorage.getItem("cartItems")) ?? [];

                const cartRemain = document.querySelector(".cart-remain");
                cartRemain.innerHTML = "";

                cartProduct.forEach((product) => {
                    const block = document.createElement("div");
                    const priceNbtn = document.createElement("div");
                    const foto = document.createElement("img");
                    const ism = document.createElement("p");
                    const qeemat = document.createElement("p");
                    const checkBtn = document.createElement("button");
                    const removeBtn = document.createElement("button");

                    block.setAttribute("class", "block-con");
                    foto.setAttribute("class", "p-foto");
                    ism.setAttribute("class", "name-para");
                    qeemat.setAttribute("class", "name-para");
                    checkBtn.setAttribute("class", "check-btn");
                    removeBtn.setAttribute("class", "check-btn");
                    priceNbtn.setAttribute("class", "price-n-btn");

                    block.appendChild(foto);
                    block.appendChild(ism);
                    priceNbtn.appendChild(qeemat);
                    priceNbtn.appendChild(checkBtn);
                    priceNbtn.appendChild(removeBtn);
                    block.appendChild(priceNbtn);
                    cartRemain.appendChild(block);

                    foto.src = product.iaddress;
                    ism.textContent = product.name;
                    qeemat.textContent = `Rs. ${product.price}.00`;
                    checkBtn.textContent = "Check it now";
                    removeBtn.textContent = "Remove";
                });
            });
        });

        let ctlg = document.querySelector(".catalog");
        let hovr = document.querySelector(".hvr-dis");
        let men_hvr = document.querySelector(".men-dis");
        let c_img = document.querySelector(".cover-img");
        let adc_button = document.querySelectorAll(".add-cart");
        let counter = document.querySelector(".c-num");
        let search_i = document.querySelector("#search-icon");
        let search_pro = document.querySelector(".search-process");

        const close = document.querySelector(".cart-cross");
        let itemNumber = document.querySelector(".cart-num");

        let cut = document.querySelector(".cross");
        let smll = document.querySelectorAll(".small");
        let medi = document.querySelectorAll(".medium");
        let lrge = document.querySelectorAll(".large");

        let disBlock = function (any) {
            any.style.display = "block";
        };

        let disNone = function (any) {
            any.style.display = "none";
        };

        let setborder = function (any) {
            any.style.border = "1px solid red";
        };

        let remborder = function (any) {
            any.style.border = "0px solid transparent";
        };

        ctlg.addEventListener("mouseover", function () {
            disBlock(hovr);
        });
        hovr.addEventListener("mouseover", function () {
            disBlock(men_hvr);
        });

        c_img.addEventListener("mouseover", function () {
            disNone(hovr);
            disNone(men_hvr);
        });

        let starts = localStorage.getItem("cartItem") ?? 0;
        counter.textContent = starts;
        itemNumber.textContent = starts;
        adc_button.forEach(function (button) {
            button.addEventListener("click", function () {
                let current_value = Number(localStorage.getItem("cartItem"));
                current_value++;
                counter.textContent = current_value;
                localStorage.setItem("cartItem", current_value);
            });
        });

        close.addEventListener("click", function () {
            disNone(cartSide);
        });

        search_i.addEventListener("click", function () {
            disBlock(search_pro);
        });

        cut.addEventListener("click", function () {
            disNone(search_pro);
            disNone(searchResult);
            inputText.value = "";
        });

        /* script for sizes is pending */

        // script  for Search Button

        const searchResult = document.querySelector(".search-result");
        const searchResDiv = document.createElement("div");
        const searchConDiv = document.createElement("div");
        searchResDiv.setAttribute("class", "sr-inner-div");
        searchConDiv.setAttribute("class", "sr-container-div");
        const sBtn = document.querySelector("#search-box");
        const inputText = document.querySelector(".s-box");

        searchResult.appendChild(searchResDiv);
        searchResDiv.appendChild(searchConDiv);
        sBtn.addEventListener("click", function () {
            searchConDiv.innerHTML = "";
            let line = inputText.value;
            let value = line.toLowerCase().trim();

            const res = products.filter((element) =>
                element.name.toLowerCase().includes(value)
            );
            // console.log(res);

            res.forEach((element) => {
                const cardResDiv = document.createElement("div");
                cardResDiv.setAttribute("class", "card");

                searchConDiv.appendChild(cardResDiv);

                const naam = document.createElement("a");
                const part = document.createElement("p");
                const price = document.createElement("p");
                const discription = document.createElement("p");
                const image = document.createElement("img");
                const btn_atc = document.createElement("button");

                const sizes = document.createElement("div");
                const sml = document.createElement("div");
                const med = document.createElement("div");
                const lrg = document.createElement("div");

                naam.setAttribute("class", "info");
                part.setAttribute("class", "hessa");
                price.setAttribute("class", "price");
                discription.setAttribute("class", "discription-p");
                image.setAttribute("class", "sample");
                btn_atc.classList.add("cart", "add-cart");
                sizes.setAttribute("class", "size");
                sml.setAttribute("class", "small");
                med.setAttribute("class", "medium");
                lrg.setAttribute("class", "large");

                sizes.appendChild(sml);
                sizes.appendChild(med);
                sizes.appendChild(lrg);

                part.appendChild(price);
                part.appendChild(sizes);
                part.appendChild(btn_atc);

                cardResDiv.appendChild(image);
                cardResDiv.appendChild(naam);
                cardResDiv.appendChild(part);
                // container.appendChild(discription);

                image.src = element.iaddress;
                naam.textContent = element.name;
                price.textContent = `Rs ${element.price}.00`;
                discription.textContent = element.discription;
                btn_atc.textContent = "ADD TO CART";
                sml.textContent = "S";
                med.textContent = "M";
                lrg.textContent = "L";
            });
            disBlock(searchResult);
        });
    });

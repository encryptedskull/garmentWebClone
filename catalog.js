const cart = document.querySelector(".bag-c");
const cartSide = document.querySelector(".cart-side");
const head = document.querySelector(".head");
const mImg = document.querySelector(".m-img");
const maain = document.querySelector(".main");
const phooter = document.querySelector("footer");

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
            colors.setAttribute("class", "drop-down");
            colorOption1.setAttribute("class", "color-opt");
            colorOption2.setAttribute("class", "color-opt");
            colorOption3.setAttribute("class", "color-opt");
            colorOption4.setAttribute("class", "color-opt");
            colorOption5.setAttribute("class", "color-opt");
            colorOption6.setAttribute("class", "color-opt");

            quantityDiv.setAttribute("class", "quantity-main-div");
            minus.setAttribute("class", "decrement-div");
            ansDiv.setAttribute("class", "result-div");
            plus.setAttribute("class", "increment-div");

            quantityDiv.appendChild(minus);
            quantityDiv.appendChild(ansDiv);
            quantityDiv.appendChild(plus);

            sizes.appendChild(sml);
            sizes.appendChild(med);
            sizes.appendChild(lrg);

            colors.appendChild(colorOption1);
            colors.appendChild(colorOption2);
            colors.appendChild(colorOption3);
            colors.appendChild(colorOption4);
            colors.appendChild(colorOption5);
            colors.appendChild(colorOption6);

            part.appendChild(price);
            part.appendChild(colors);
            part.appendChild(sizes);
            part.appendChild(quantityDiv);
            part.appendChild(btn_atc);

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

            container.appendChild(image);
            container.appendChild(naam);
            container.appendChild(part);
            // container.appendChild(discription);

            colorOption1.textContent = `colors`;
            colorOption2.textContent = `black`;
            colorOption3.textContent = `white`;
            colorOption4.textContent = `grey`;
            colorOption5.textContent = `blue`;
            colorOption6.textContent = `red`;

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

            let counter = document.querySelector(".c-num");
            const items = JSON.parse(localStorage.getItem("cartItems")) || [];
            counter.textContent = items.length;

            btn_atc.addEventListener("click", function () {
                let cartItems =
                    JSON.parse(localStorage.getItem("cartItems")) || [];
                const productId = i;
                const newProduct = products.at(productId);

                if (!newProduct.id) {
                    newProduct.id = productId;
                }
                const checkRepeat = cartItems.some(
                    (item) =>
                        item.id === productId &&
                        item.size === sizeOrder &&
                        item.color === selectedColor
                );

                if (checkRepeat) {
                    alert("Product is already in the cart");
                } else {
                    cartItems.forEach((item) => {
                        if (!item.size && !item.color && !item.quantity) {
                            item.size = sizeOrder;
                            item.color = selectedColor;
                            item.quantity = quantityItem;
                        }
                    });

                    newProduct.size = sizeOrder;
                    newProduct.color = selectedColor;
                    newProduct.quantity = quantityItem;
                    cartItems.push(newProduct);
                    counter.textContent = cartItems.length;

                    localStorage.setItem(
                        "cartItems",
                        JSON.stringify(cartItems)
                    );
                }
            });

            cart.addEventListener("click", function () {
                disBlock(cartSide);
                head.classList.add("blur");
                maain.classList.add("blur");
                phooter.classList.add("blur");

                updateCartDisplay();

                function updateCartDisplay() {
                    const cartProduct =
                        JSON.parse(localStorage.getItem("cartItems")) ?? [];
                    const itemNumber = document.querySelector(".cart-num");
                    itemNumber.textContent = cartProduct.length;

                    const cartRemain = document.querySelector(".cart-remain");

                    cartRemain.innerHTML = "";

                    cartProduct.forEach((product, index) => {
                        const block = document.createElement("div");
                        const priceNbtn = document.createElement("div");
                        const foto = document.createElement("img");
                        const ism = document.createElement("p");
                        const qeemat = document.createElement("p");
                        const size = document.createElement("p");
                        const colour = document.createElement("p");
                        const numberOfItems = document.createElement("p");

                        const removeBtn = document.createElement("button");

                        block.setAttribute("class", "block-con");
                        foto.setAttribute("class", "p-foto");
                        ism.setAttribute("class", "name-para");
                        qeemat.setAttribute("class", "name-para");
                        size.setAttribute("class", "name-para");
                        colour.setAttribute("class", "name-para");
                        numberOfItems.setAttribute("class", "name-para");

                        removeBtn.setAttribute("class", "check-btn");
                        priceNbtn.setAttribute("class", "price-n-btn");

                        block.appendChild(foto);
                        block.appendChild(ism);
                        priceNbtn.appendChild(qeemat);
                        priceNbtn.appendChild(size);
                        priceNbtn.appendChild(numberOfItems);
                        priceNbtn.appendChild(colour);
                        priceNbtn.appendChild(removeBtn);

                        block.appendChild(priceNbtn);
                        cartRemain.appendChild(block);

                        foto.src = product.iaddress;
                        ism.textContent = product.name;
                        qeemat.textContent = `Rs. ${product.price}.00`;
                        size.textContent = `Size: ${product.size}`;
                        colour.textContent = `Color: ${product.color}`;
                        numberOfItems.textContent = `Quantity: ${product.quantity}`;
                        removeBtn.textContent = "Remove";

                        removeBtn.addEventListener("click", function () {
                            const updatedCartProduct = cartProduct.filter(
                                (_, idx) => idx !== index
                            );

                            localStorage.setItem(
                                "cartItems",
                                JSON.stringify(updatedCartProduct)
                            );

                            updateCartDisplay();
                            counter.textContent = updatedCartProduct.length;
                        });
                    });
                }
            });
        });

        const checkBtn = document.querySelector("#check-button");
        checkBtn.addEventListener("click", function () {
            localStorage.setItem("clickedButton1", "checkBtn");
            window.location.href = "./pages/checkout.html";
        });

        let ctlg = document.querySelector(".catalog");
        let hovr = document.querySelector(".hvr-dis");
        let men_hvr = document.querySelector(".men-dis");
        let c_img = document.querySelector(".cover-img");
        // let adc_button = document.querySelectorAll(".add-cart");
        let search_i = document.querySelector("#search-icon");
        let search_pro = document.querySelector(".search-process");

        const close = document.querySelector(".cart-cross");

        let cut = document.querySelector(".cross");
        // let smll = document.querySelectorAll(".small");
        // let medi = document.querySelectorAll(".medium");
        // let lrge = document.querySelectorAll(".large");

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

        // ctlg.addEventListener("mouseover", function () {
        //     disBlock(hovr);
        // });
        // hovr.addEventListener("mouseover", function () {
        //     disBlock(men_hvr);
        // });

        // c_img.addEventListener("mouseover", function () {
        //     disNone(hovr);
        //     disNone(men_hvr);
        // });

        // let starts = localStorage.getItem("cartItem") ?? 0;
        // counter.textContent = starts;
        // itemNumber.textContent = starts;
        // adc_button.forEach(function (button) {
        //     button.addEventListener("click", function () {
        //         let current_value = Number(localStorage.getItem("cartItem"));
        //         current_value++;
        //         counter.textContent = current_value;
        //         localStorage.setItem("cartItem", current_value);
        //     });
        // });

        close.addEventListener("click", function () {
            disNone(cartSide);
            head.classList.remove("blur");
            maain.classList.remove("blur");
            mImg.classList.remove("blur");
            phooter.classList.remove("blur");
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

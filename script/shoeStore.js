var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var ShoeStore = [
    { img: "../shoes/i1.jpg", name: "Shoe i1", id: "01" },
    { img: "../shoes/i2.jpg", name: "Shoe i2", id: "02" },
    { img: "../shoes/i3.jpg", name: "Shoe i3", id: "03" },
    { img: "../shoes/i4.jpg", name: "Shoe i4", id: "04" },
    { img: "../shoes/i5.jpg", name: "Shoe i5", id: "05" },
    { img: "../shoes/i6.jpg", name: "Shoe i6", id: "06" },
    { img: "../shoes/i7.jpg", name: "Shoe i7", id: "07" },
    { img: "../shoes/i8.jpg", name: "Shoe i8", id: "08" },
    { img: "../shoes/i9.jpg", name: "Shoe i9", id: "09" },
    { img: "../shoes/i10.jpg", name: "Shoe i10", id: "10" },
    { img: "../shoes/i11.jpg", name: "Shoe i11", id: "11" },
    { img: "../shoes/i12.jpg", name: "Shoe i12", id: "12" },
    { img: "../shoes/i13.jpg", name: "Shoe i13", id: "13" },
    { img: "../shoes/i14.jpg", name: "Shoe i14", id: "14" },
    { img: "../shoes/i15.jpg", name: "Shoe i15", id: "15" },
    { img: "../shoes/i16.jpg", name: "Shoe i16", id: "16" },
    { img: "../shoes/i17.jpg", name: "Shoe i17", id: "17" },
    { img: "../shoes/i18.jpg", name: "Shoe i18", id: "18" },
    { img: "../shoes/i19.jpg", name: "Shoe i19", id: "19" },
    { img: "../shoes/i20.jpg", name: "Shoe i20", id: "20" },
    { img: "../shoes/i21.jpg", name: "Shoe i21", id: "21" },
    { img: "../shoes/i22.jpg", name: "Shoe i22", id: "22" },
    { img: "../shoes/i23.jpg", name: "Shoe i23", id: "23" },
    { img: "../shoes/i24.jpg", name: "Shoe i24", id: "24" },
    { img: "../shoes/i25.jpg", name: "Shoe i25", id: "25" },
    { img: "../shoes/i26.jpg", name: "Shoe i26", id: "26" },
    { img: "../shoes/i27.jpg", name: "Shoe i27", id: "27" },
    { img: "../shoes/i28.jpg", name: "Shoe i28", id: "28" },
    { img: "../shoes/i29.jpg", name: "Shoe i29", id: "29" },
    { img: "../shoes/i30.jpg", name: "Shoe i30", id: "30" },
    { img: "../shoes/i31.jpg", name: "Shoe i31", id: "31" },
    { img: "../shoes/i32.jpg", name: "Shoe i32", id: "32" },
    { img: "../shoes/i33.jpg", name: "Shoe i33", id: "33" },
    { img: "../shoes/i34.jpg", name: "Shoe i34", id: "34" },
    { img: "../shoes/i35.jpg", name: "Shoe i35", id: "35" },
    { img: "../shoes/i36.jpg", name: "Shoe i36", id: "36" },
    { img: "../shoes/i37.jpg", name: "Shoe i37", id: "37" },
    { img: "../shoes/i38.jpg", name: "Shoe i38", id: "38" },
    { img: "../shoes/i39.jpg", name: "Shoe i39", id: "39" },
    { img: "../shoes/i40.jpg", name: "Shoe i40", id: "40" },
    { img: "../shoes/i41.jpg", name: "Shoe i41", id: "41" },
    { img: "../shoes/i42.jpg", name: "Shoe i42", id: "42" },
    { img: "../shoes/i43.jpg", name: "Shoe i43", id: "43" },
    { img: "../shoes/i44.jpg", name: "Shoe i44", id: "44" },
    { img: "../shoes/i45.jpg", name: "Shoe i45", id: "45" },
    { img: "../shoes/i46.jpg", name: "Shoe i46", id: "46" },
    { img: "../shoes/i47.jpg", name: "Shoe i47", id: "47" },
    { img: "../shoes/i48.jpg", name: "Shoe i48", id: "48" },
    { img: "../shoes/i49.jpg", name: "Shoe i49", id: "49" },
    { img: "../shoes/i50.jpg", name: "Shoe i50", id: "50" },
    { img: "../shoes/i51.jpg", name: "Shoe i51", id: "51" },
    { img: "../shoes/i52.jpg", name: "Shoe i52", id: "52" },
    { img: "../shoes/i53.jpg", name: "Shoe i53", id: "53" },
    { img: "../shoes/i54.jpg", name: "Shoe i54", id: "54" },
    { img: "../shoes/i55.jpg", name: "Shoe i55", id: "55" },
    { img: "../shoes/i56.jpg", name: "Shoe i56", id: "56" },
    { img: "../shoes/i57.png", name: "Shoe i57", id: "57" },
    { img: "../shoes/i58.png", name: "Shoe i58", id: "58" },
    { img: "../shoes/i59.png", name: "Shoe i59", id: "59" },
    { img: "../shoes/i60.png", name: "Shoe i60", id: "60" },
    { img: "../shoes/i61.jpg", name: "Shoe i61", id: "61" },
    { img: "../shoes/i62.jpg", name: "Shoe i62", id: "62" },
    { img: "../shoes/i63.jpg", name: "Shoe i63", id: "63" },
    { img: "../shoes/i64.jpg", name: "Shoe i64", id: "64" },
    { img: "../shoes/i65.jpg", name: "Shoe i65", id: "65" },
    { img: "../shoes/i66.jpg", name: "Shoe i66", id: "66" },
    { img: "../shoes/i67.jpg", name: "Shoe i67", id: "67" },
    { img: "../shoes/i68.jpg", name: "Shoe i68", id: "68" },
    { img: "../shoes/i69.jpg", name: "Shoe i69", id: "69" },
];
console.log(window.location.search.substr(1).slice(-2).toString(), window.location);
document.querySelector("#products") && (document.querySelector("#products").innerHTML = "" + ShoeStore.map(function (product) {
    return "\n        <div class=\"flex flex-col product\">\n                    <img class=\"transition scale btr\" src=" + product.img + ">\n                    <div class=\"flex justify-between product-name align-center\">\n                        <p class=\"\">" + product.name + "</p>\n                        <a href=\"/store/shoes/product.html?id=" + product.id + "\">\n                        <i class=\"my-auto transition far fa-shopping-basket svg scale\" id=\"AddToCart\" ></i>\n                        </a>\n                        </div>\n                    <p class=\"product-price\">\u00A39.99</p>\n            </div>\n        ";
}).join(""));
var shoeId = window.location.search.substr(1).slice(-2).toString();
console.log(shoeId);
var filteredShoe = ShoeStore.filter(function (prod) { return prod.id === shoeId; });
console.log(filteredShoe[0]);
if (window.location.pathname === "/store/shoes/product.html") {
    document.querySelector("#img").innerHTML = "\n    <img class=\"rounded product-image\" src=\"../" + filteredShoe[0].img + "\" />\n    ";
    document.getElementById("name").innerHTML = filteredShoe[0].name;
    // document.getElementById("AddToCart").addEventListener("click", e=>{
    // })
    document.getElementById("PushToCart").addEventListener("click", function (e) {
        var amount = document.getElementById("amount").getAttribute("value");
        var name = filteredShoe[0].name;
        var img = filteredShoe[0].img;
        var price = 9.99;
        var productId = filteredShoe[0].id;
        var cartId = Math.random();
        var cart = (localStorage === null || localStorage === void 0 ? void 0 : localStorage.cart) ? JSON.parse(localStorage === null || localStorage === void 0 ? void 0 : localStorage.cart) : [];
        var newCart = __spreadArray(__spreadArray([], cart, true), [{
                amount: amount,
                name: name,
                price: price,
                productId: productId,
                cartId: cartId,
                img: img
            }], false);
        localStorage === null || localStorage === void 0 ? void 0 : localStorage.setItem("cart", JSON.stringify(newCart));
        alert(filteredShoe[0].name + " added to cart successfully");
        window.location.href = "/cart.html";
    });
}

var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var WomenStore = [
    { img: "../women/i1.jpg", name: "Female Wear i1", id: "01" },
    { img: "../women/i2.jpg", name: "Female Wear i2", id: "02" },
    { img: "../women/i3.jpg", name: "Female Wear i3", id: "03" },
    { img: "../women/i4.jpg", name: "Female Wear i4", id: "04" },
    { img: "../women/i5.jpg", name: "Female Wear i5", id: "05" },
    { img: "../women/i6.jpg", name: "Female Wear i6", id: "06" },
    { img: "../women/i7.jpg", name: "Female Wear i7", id: "07" },
    { img: "../women/i8.jpg", name: "Female Wear i8", id: "08" },
    { img: "../women/i9.jpg", name: "Female Wear i9", id: "09" },
    { img: "../women/i10.jpg", name: "Female Wear i10", id: "10" },
    { img: "../women/i11.jpg", name: "Female Wear i11", id: "11" },
    { img: "../women/i12.jpg", name: "Female Wear i12", id: "12" },
    { img: "../women/i13.jpg", name: "Female Wear i13", id: "13" },
    { img: "../women/i14.jpg", name: "Female Wear i14", id: "14" },
    { img: "../women/i15.jpg", name: "Female Wear i15", id: "15" },
    { img: "../women/i16.jpg", name: "Female Wear i16", id: "16" },
    { img: "../women/i17.jpg", name: "Female Wear i17", id: "17" },
    { img: "../women/i18.jpg", name: "Female Wear i18", id: "18" },
    { img: "../women/i19.jpg", name: "Female Wear i19", id: "19" },
    { img: "../women/i20.jpg", name: "Female Wear i20", id: "20" },
    { img: "../women/i21.jpg", name: "Female Wear i21", id: "21" },
    { img: "../women/i22.jpg", name: "Female Wear i22", id: "22" },
    { img: "../women/i23.jpg", name: "Female Wear i23", id: "23" },
    { img: "../women/i24.jpg", name: "Female Wear i24", id: "24" },
    { img: "../women/i25.jpg", name: "Female Wear i25", id: "25" },
    { img: "../women/i26.jpg", name: "Female Wear i26", id: "26" },
    { img: "../women/i27.jpg", name: "Female Wear i27", id: "27" },
    { img: "../women/i28.jpg", name: "Female Wear i28", id: "28" },
    { img: "../women/i29.jpg", name: "Female Wear i29", id: "29" },
    { img: "../women/i30.jpg", name: "Female Wear i30", id: "30" },
    { img: "../women/i31.jpg", name: "Female Wear i31", id: "31" },
    { img: "../women/i32.jpg", name: "Female Wear i32", id: "32" },
    { img: "../women/i33.jpg", name: "Female Wear i33", id: "33" },
    { img: "../women/i34.jpg", name: "Female Wear i34", id: "34" },
    { img: "../women/i35.jpg", name: "Female Wear i35", id: "35" },
    { img: "../women/i36.jpg", name: "Female Wear i36", id: "36" },
    { img: "../women/i37.jpg", name: "Female Wear i37", id: "37" },
    { img: "../women/i38.jpg", name: "Female Wear i38", id: "38" },
    { img: "../women/i39.jpg", name: "Female Wear i39", id: "39" },
];
console.log(window.location.search.substr(1), window.location);
document.querySelector("#products") && (document.querySelector("#products").innerHTML = "" + WomenStore.map(function (product) {
    return ("\n        <div class=\"flex flex-col product\">\n                    <img class=\"transition scale btr\" src=" + product.img + ">\n                    <div class=\"flex justify-between product-name align-center\">\n                        <p class=\"\">" + product.name + "</p>\n                        <a href=\"/store/women/product.html?id=" + product.id + "\">\n                        <i class=\"my-auto transition far fa-shopping-basket svg scale\" id=\"AddToCart\" ></i>\n                        </a>\n                        </div>\n                    <p class=\"product-price\">\u00A39.99</p>\n            </div>\n        ");
}).join(''));
var womenId = window.location.search.substr(1).slice(-2).toString();
var filteredWomen = WomenStore.filter(function (prod) { return prod.id === womenId; });
console.log(filteredWomen[0]);
if (window.location.pathname === "/store/women/product.html") {
    document.querySelector("#img").innerHTML = "\n    <img class=\"rounded product-image\" src=\"../" + filteredWomen[0].img + "\" />\n    ";
    document.getElementById("name").innerHTML = filteredWomen[0].name;
    // document.getElementById("AddToCart").addEventListener("click", e=>{
    // })
    document.getElementById("PushToCart").addEventListener("click", function (e) {
        var amount = document.getElementById("amount").getAttribute("value");
        var name = filteredWomen[0].name;
        var img = filteredWomen[0].img;
        var price = 9.99;
        var productId = filteredWomen[0].id;
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
        alert(filteredWomen[0].name + " added to cart successfully");
        window.location.href = "/cart.html";
    });
}

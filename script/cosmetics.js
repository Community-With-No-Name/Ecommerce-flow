var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Cosmetics = [
    { img: "../cosmetics/i1.jpg", id: "01", name: "Cosmetics i1" },
    { img: "../cosmetics/i2.jpg", id: "02", name: "Cosmetics i2" },
    { img: "../cosmetics/i3.jpg", id: "03", name: "Cosmetics i3" },
    { img: "../cosmetics/i4.jpg", id: "04", name: "Cosmetics i4" },
    { img: "../cosmetics/i5.jpg", id: "05", name: "Cosmetics i5" },
    { img: "../cosmetics/i6.jpg", id: "06", name: "Cosmetics i6" },
    { img: "../cosmetics/i7.jpg", id: "07", name: "Cosmetics i7" },
    { img: "../cosmetics/i8.jpg", id: "08", name: "Cosmetics i8" },
    { img: "../cosmetics/i9.jpg", id: "09", name: "Cosmetics i9" },
];
// let products = 
console.log(window.location.search.substr(1), window.location);
document.querySelector("#products") && (document.querySelector("#products").innerHTML = "" + Cosmetics.map(function (product) {
    return ("\n        <div class=\"flex flex-col product\">\n                    <img class=\"transition scale btr\" src=" + product.img + ">\n                    <div class=\"flex justify-between product-name align-center\">\n                        <p class=\"\">" + product.name + "</p>\n                        <a href=\"/store/cosmetics/product.html?id=" + product.id + "\">\n                        <i class=\"my-auto transition far fa-shopping-basket svg scale\" id=\"AddToCart\" ></i>\n                        </a>\n                        </div>\n                    <p class=\"product-price\">\u00A39.99</p>\n            </div>\n        ");
}).join(''));
var cosmeticId = window.location.search.substr(1).slice(-2).toString();
var filteredCosmetics = Cosmetics.filter(function (prod) { return prod.id === cosmeticId; });
console.log(filteredCosmetics[0]);
if (window.location.pathname === "/store/cosmetics/product.html") {
    document.querySelector("#img").innerHTML = "\n    <img class=\"rounded product-image\" src=\"../" + filteredCosmetics[0].img + "\" />\n    ";
    document.getElementById("name").innerHTML = filteredCosmetics[0].name;
    // document.getElementById("AddToCart").addEventListener("click", e=>{
    // })
    document.getElementById("PushToCart").addEventListener("click", function (e) {
        var amount = document.getElementById("amount").getAttribute("value");
        var name = filteredCosmetics[0].name;
        var img = filteredCosmetics[0].img;
        var price = 9.99;
        var productId = filteredCosmetics[0].id;
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
        alert(filteredCosmetics[0].name + " added to cart successfully");
        window.location.href = "/cart.html";
    });
}

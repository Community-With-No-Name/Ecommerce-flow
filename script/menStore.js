var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var MenStore = [
    { img: "../men/i1.jpg", name: "Male Wear i1", id: '01' },
    { img: "../men/i2.jpg", name: "Male Wear i2", id: '02' },
    { img: "../men/i3.jpg", name: "Male Wear i3", id: '03' },
    { img: "../men/i4.jpg", name: "Male Wear i4", id: '04' },
    { img: "../men/i5.jpg", name: "Male Wear i5", id: '05' },
    { img: "../men/i6.jpg", name: "Male Wear i6", id: '06' },
    { img: "../men/i7.jpg", name: "Male Wear i7", id: '07' },
    { img: "../men/i8.jpg", name: "Male Wear i8", id: '08' },
    { img: "../men/i9.jpg", name: "Male Wear i9", id: '09' },
    { img: "../men/i10.jpg", name: "iMale Wear 10", id: '10' },
    { img: "../men/i11.jpg", name: "iMale Wear 11", id: '11' },
    { img: "../men/i12.jpg", name: "iMale Wear 12", id: '12' },
    { img: "../men/i13.jpg", name: "iMale Wear 13", id: '13' },
    { img: "../men/i14.jpg", name: "iMale Wear 14", id: '14' },
    { img: "../men/i15.jpg", name: "iMale Wear 15", id: '15' },
    { img: "../men/i16.jpg", name: "iMale Wear 16", id: '16' },
    { img: "../men/i17.jpg", name: "iMale Wear 17", id: '17' },
    { img: "../men/i18.jpg", name: "iMale Wear 18", id: '18' },
    { img: "../men/i19.jpg", name: "iMale Wear 19", id: '19' },
    { img: "../men/i20.jpg", name: "iMale Wear 20", id: '20' },
    { img: "../men/i21.jpg", name: "iMale Wear 21", id: '21' },
];
console.log(window.location.search.substr(1), window.location);
document.querySelector("#products") && (document.querySelector("#products").innerHTML = "" + MenStore.map(function (product) {
    return ("\n        <div class=\"flex flex-col product\">\n                    <img class=\"transition scale btr\" src=" + product.img + ">\n                    <div class=\"flex justify-between product-name align-center\">\n                        <p class=\"\">" + product.name + "</p>\n                        <a href=\"/store/men/product.html?id=" + product.id + "\">\n                        <i class=\"my-auto transition far fa-shopping-basket svg scale\" id=\"AddToCart\" ></i>\n                        </a>\n                        </div>\n                    <p class=\"product-price\">\u00A39.99</p>\n            </div>\n        ");
}).join(''));
var menId = window.location.search.substr(1).slice(-2).toString();
var filteredMale = MenStore.filter(function (prod) { return prod.id === menId; });
console.log(filteredMale[0]);
if (window.location.pathname === "/store/men/product.html") {
    document.querySelector("#img").innerHTML = "\n    <img class=\"rounded product-image\" src=\"../" + filteredMale[0].img + "\" />\n    ";
    document.getElementById("name").innerHTML = filteredMale[0].name;
    // document.getElementById("AddToCart").addEventListener("click", e=>{
    // })
    document.getElementById("PushToCart").addEventListener("click", function (e) {
        var amount = document.getElementById("amount").getAttribute("value");
        var name = filteredMale[0].name;
        var img = filteredMale[0].img;
        var price = 9.99;
        var productId = filteredMale[0].id;
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
        alert(filteredMale[0].name + " added to cart successfully");
        window.location.href = "/cart.html";
    });
}

var cartLength = (localStorage === null || localStorage === void 0 ? void 0 : localStorage.cart) ? JSON.parse(localStorage === null || localStorage === void 0 ? void 0 : localStorage.cart) : [];
document.getElementById("cart-value").innerHTML = cartLength.length;

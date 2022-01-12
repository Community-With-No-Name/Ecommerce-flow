var cart = localStorage === null || localStorage === void 0 ? void 0 : localStorage.cart;
if (cart) {
    document.querySelector("#cart").innerHTML = "" + JSON.parse(cart).map(function (item, i) {
        console.log(item.img);
        return ("\n                <div class=\"flex justify-between table rounded transition scale\">\n                <img src=" + item.img + " class=\"table-img\">\n                <div class=\"flex flex-col justify-center text-center align-center\">" + item.name + "</div>\n                <div class=\"flex flex-col justify-center hidden text-center align-center\">$" + item.price + "</div>\n                <div class=\"flex flex-col justify-center hidden text-center align-center\">" + item.amount + "</div>\n                <div class=\"flex flex-col justify-center text-center align-center\">$" + Number(item.amount) * Number(item.price) + "</div>\n            </div>\n                ");
    }).join('');
}

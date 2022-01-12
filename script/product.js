document.getElementById("add").addEventListener("click", function (e) {
    var val = document.getElementById("amount").getAttribute("value");
    console.log("clicked", val);
    document.getElementById("amount").setAttribute("value", "" + (Number(val) + 1));
});
if (Number(document.getElementById("amount").getAttribute("value")) === 0) {
    document.getElementById("minus").setAttribute("disabled", "" + true);
}
document.getElementById("minus").addEventListener("click", function (e) {
    var val = document.getElementById("amount").getAttribute("value");
    if (Number(val) > 1)
        document.getElementById("amount").setAttribute("value", "" + (Number(val) - 1));
    if (Number(val) === 0) {
        document.getElementById("amount").setAttribute("value", "" + Number(val));
        document.getElementById("minus").setAttribute("disabled", "" + true);
    }
});

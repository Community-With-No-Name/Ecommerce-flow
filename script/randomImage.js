// Header Starts
var shoes = [{ img: "../bg/i1.jpg", text: "Quality Shoes" }, { img: "../bg/i2.jpg", text: "Hot Female FootWears" }, { img: "../bg/i3.jpg", text: "Cool and Trending Male Wears" }, { img: "../bg/i4.jpg", text: "Quality Beauty Products" }, { img: "../bg/i5.jpg", text: "Hot and trending Female Dress" },];
var text = document.getElementById("hero-text");
text.innerHTML = "Quality Shoes";
var repeatImage = function () {
    var image = shoes[Math.floor(Math.random() * shoes.length)];
    console.log(image);
    // newImage+1
    text.innerHTML = image.text;
    document.getElementById('hero').setAttribute('style', "background-image: url(" + image.img + ")");
};
setInterval(function () { return repeatImage(); }, 4000);
// Header Ends

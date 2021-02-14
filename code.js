var button = document.getElementById("button");
var count = document.getElementById("count");
var number = 0;

button.onclick = function() {
    if (number >= 0) {
        number++;
        count.innerHTML = number;
    }
};
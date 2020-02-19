result = document.getElementById('result');

n2 = document.getElementById('NUM2');
n1 = document.getElementById('NUM1');
radioDiv = document.getElementById('radioDiv');
radioMul = document.getElementById('radioMul');
var type = "mul";

var ex = require('./ExpertModule');

function Result() {

    if (radioMul.checked)
        return ex.mul(parseInt(n1.value), parseInt(n2.value));
    else
        return ex.div(parseInt(n1.value), parseInt(n2.value));

}


n1.addEventListener("change", function (e) {


    if (n2.value.length >= 0)
        result.value = Result();

});


n2.addEventListener("change", function (e) {

    if (n1.value.length >= 0)
        result.value = Result();

});

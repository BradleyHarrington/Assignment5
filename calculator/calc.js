//window.addEventListener("load", init, false);
//
//function init() {
//    one.addEventListener('click', enter, false);
//    two.addEventListener('click', enter, false);
//    three.addEventListener('click', enter, false);
//    four.addEventListener("click", enter, false);
//    five.addEventListener("click", enter, false);
//    six.addEventListener("click", enter, false);
//    seven.addEventListener("click", enter, false);
//    eight.addEventListener("click", enter, false);
//    nine.addEventListener("click", enter, false);
//    zero.addEventListener("click", enter, false);
//    period.addEventListener("click", enter, false);
//    divide.addEventListener("click", enter, false);
//    multiply.addEventListener("click", enter, false);
//    subtract.addEventListener("click", enter, false);
//    add.addEventListener("click", enter, false);
//    equal.addEventListener("click", calculate, false);
//    reset.addEventListener("click", resetResult, false);    
//};
//
//function enter() {
////    var val;
////    console.log(this.value);
//    document.getElementById("result").value += this.value;
////    console.log(document.getElementById("result").value);
//};
//
// function calculate () {
//     var calc;
//     calc = document.getElementById("result").value;
//     document.getElementById("result").value = eval(calc);
// };
//
//function resetResult () {
//     document.getElementById("result").value = " ";
// };


body.addEventListener("click", function(event) {
    
    var thing = event.target;
    
    if (thing.className === "button") {
        document.getElementById("result").value += thing.value;
    } else if (thing.id === "equal") {
        var calc;
        calc = document.getElementById("result").value;
        document.getElementById("result").value = eval(calc);

    } else if (thing.id === "reset") {
        document.getElementById("result").value = " ";
    } else {
        var DoNothing;
    
    }


});
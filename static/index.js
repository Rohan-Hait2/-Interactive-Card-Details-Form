function chack() {

    var err = '';
    var res = true;
    var name = document.getElementById("card-hold-name").value
    console.log(name);
    if (name.length == 0) {
        err = "You Must enter your name\n"
        res = false;
    }
    else if (name.search(/[^\w\s]/g) != -1) {
        err = "*Name Only Contains Word\n"
        res = false
    }
    document.getElementById("err-name").innerHTML = err;
    // number 
    err = '';
    var number = document.getElementById("card-hold-number").value;
    number = number.replace(/[\s]/g, '');
    if (number.length == 0) {
        err = 'Card Number is empty\n';
        res = false;
    }
    else if (number.length != 16) {
        err = 'Card Number must be 16 digit\n';
        res = false;
    }
    if (number.search(/[^\d]/g) != -1) {
        err += 'Card Number contains only digit\n';
        res = false;
    }
    document.getElementById("err-number").innerHTML = err;
    //exp.date
    err = '';
    var month = document.getElementById("card-exp-mo").value;
    month = month.replace(/[\s]/g, '');
    if (month.length == 0) {
        err = 'Expire date is incomplete\n';
        res = false;
    }
    if (month.search(/[^\d]/g) != -1) {
        err += 'Expire date contains only digit\n';
        res = false;
    }
    else if (month > 12) {
        err = `Invalid Input\n`;
        res = false;
    }
    document.getElementById("err-exp-date-mo").innerHTML = err;

    err = '';
    var year = document.getElementById("card-exp-y").value;
    year = year.replace(/[\s]/g, '');
    if (year.length == 0) {
        err = 'Expire date is incomplete\n';
        res = false;
    }
    if (year.search(/[^\d]/g) != -1) {
        err += 'Expire date year contains only digit\n';
        res = false;
    }
    else if (year.length > 2) {
        err = `Invalid Input in Expire Year\n`;
        res = false;
    }
    document.getElementById("err-exp-date-y").innerHTML = err;

    err = '';
    var cvv_pin = document.getElementById("card-cvv-pin").value;
    cvv_pin = cvv_pin.replace(/[\s]/g, '');
    if (cvv_pin.length == 0) {
        err = 'CVV Number must be fill\n';
        res = false;
    }
    else if (cvv_pin.length != 3) {
        err = `CVV number is 3 digit number\n`;
        res = false;
    }
    if (cvv_pin.search(/[^\d]/g) != -1) {
        err += 'CVV number contains only digit';
        res = false;
    }
    document.getElementById("err-cvv-number").innerHTML = err;

    return res;
}


document.getElementById("card-hold-name").addEventListener("input", function (e) {
    var target = e.target;
    var name = target.value ;
    // set the card holder name in the image of the card
    if (name.trim() == "") {
        document.getElementById("img-card-name").innerHTML = 'Jane Appleseed';
    }
    else {
        document.getElementById("img-card-name").innerHTML = name;

    }
    //show the error massage 
    if (name.search(/[^A-Za-z\s ]/g) != -1) {
        document.getElementById("err-name").innerHTML = "Invalid  input card name contains only letters\n";
        document.getElementById("card-hold-name").style.backgroundColor = " hsl(0, 100%, 66%)";
    } else {
        document.getElementById("err-name").innerHTML = "";
        document.getElementById("card-hold-name").style.backgroundColor = "white";
    }
});
// number
document.getElementById("card-hold-number").addEventListener("input", function (e) {
    var target = e.target;
    var name = target.value;
    target.value = name = name.replace(/[\s]/g, "").replace(/(.{4})/g, '$1 ').trim()
    // set the card holder number in the image of the card
    if (name.trim().empty) {
        document.getElementById("img-card-number").innerHTML = '1234 5678 9123 0000';
    }
    else {
        document.getElementById("img-card-number").innerHTML = name;

    }
    //show the error massage 
    if (target.value.search(/[^\d\s]/g) != -1) {
        document.getElementById("err-number").innerHTML = "Invalid  input card number contains only digits \n";
        document.getElementById("card-hold-number").style.backgroundColor = " hsl(0, 100%, 66%)";
    }
    if(target.value.replace(/[\s]/g,"").length > 16){
        document.getElementById("err-number").innerHTML = "Invalid  input card number \nContains must be 16 digits digits \n";
        document.getElementById("card-hold-number").style.backgroundColor = " hsl(0, 100%, 66%)";
    } else {
        document.getElementById("err-number").innerHTML = "";
        document.getElementById("card-hold-number").style.backgroundColor = "white";
    }
});
// cvv pin 
document.getElementById("card-cvv-pin").addEventListener("input", function (e) {
    var target = e.target;
    var pin = target.value;
    pin = target.value = pin.replace(/[\s]/g, "");
    if (pin == "") {
        document.getElementById("img-card-cvv").innerHTML = "000";
    }
    else {
        document.getElementById("img-card-cvv").innerHTML = pin;
    }
    // if pin is wrong inputFormats
    if (pin.search(/[^\d]/g) != -1) {
        document.getElementById("err-cvv-number").innerHTML = "Invalid  input CVV pin contains only three digits\n";
        document.getElementById("card-cvv-pin").style.backgroundColor = " hsl(0, 100%, 66%)";
    }
    else if (pin.length > 3) {
        document.getElementById("err-cvv-number").innerHTML = "CVV number contains only three digits \n";
        document.getElementById("card-cvv-pin").style.backgroundColor = " hsl(0, 100%, 66%)";
    }
    else {
        document.getElementById("err-cvv-number").innerHTML = "";
        document.getElementById("card-cvv-pin").style.backgroundColor = "white";
    }

});

// mounth
document.getElementById("card-exp-mo").addEventListener("input", function (e) {
    var target = e.target;
    var pin = target.value;
    pin = target.value = pin.replace(/[\s]/g, "");
    if (pin == "") {
        document.getElementById("img-card-exp-mo").innerHTML = "00";
    }
    else {
        document.getElementById("img-card-exp-mo").innerHTML =  parseInt(pin, 10)<= 9 ? '0' + parseInt(pin,10).toString() : parseInt(pin, 10);
        target.value = parseInt(pin, 10)<= 9 ? '0' + parseInt(pin,10).toString() : parseInt(pin, 10);
    }
    // if pin is wrong inputFormats
    if (pin.search(/[^\d]/g) != -1) {
        document.getElementById("err-exp-date-mo").innerHTML = "Invalid  input Month contains only two digits \n";
        document.getElementById("card-exp-mo").style.backgroundColor = " hsl(0, 100%, 66%)";
    }
    else if (pin > 12 || pin <= 0) {
        document.getElementById("err-exp-date-mo").innerHTML = "Invalid input \n";
        document.getElementById("card-exp-mo").style.backgroundColor = " hsl(0, 100%, 66%)";
    }
    else {
        document.getElementById("err-exp-date-mo").innerHTML = "";
        document.getElementById("card-exp-mo").style.backgroundColor = "white";
    }

})
// year
document.getElementById("card-exp-y").addEventListener("input", function (e) {
    var target = e.target;
    var pin = target.value;
    pin = target.value = pin.replace(/[\s]/g, "");
    if (pin == "") {
        document.getElementById("img-card-exp-y").innerHTML = "00";
    }
    else {
        document.getElementById("img-card-exp-y").innerHTML = parseInt(pin, 10)<= 9 ? '0' + parseInt(pin,10).toString() : parseInt(pin, 10);
    }
    // if pin is wrong inputFormats
    if (pin.search(/[^\d]/g) != -1) {
        document.getElementById("err-exp-date-y").innerHTML = "Invalid  input year contains only two digits \n";
        document.getElementById("card-exp-y").style.backgroundColor = " hsl(0, 100%, 66%)";
    }
    else if (pin.length > 2) {
        document.getElementById("err-exp-date-y").innerHTML = "year contains only two digits \n";
        document.getElementById("card-exp-y").style.backgroundColor = " hsl(0, 100%, 66%)";
    }
    else {
        document.getElementById("err-exp-date-y").innerHTML = "";
        document.getElementById("card-exp-y").style.backgroundColor = "white";
    }

})
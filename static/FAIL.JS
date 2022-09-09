function chack() {
    
    var err = '';
    var res = true;
    var name = document.getElementById("card-hold-name").innerHTML
    console.log(name);
    if (name.trim.length == 0) {
        err = "You Must enter your name"
        res = false;
    }
    else if (name.search(/[^\w\s]/g) != -1) {
        err = "*Name Only Contains Word"
        res = false
    }
    document.getElementById("err-name").innerHTML = err;
    // number 
    err = '';
    var number = getElementById("card-hold-number").innerHTML;
    number = number.replace(/[\s]/g, '');
    if (number.length() == 0) {
        err = 'Card Number is empty';
        res = false;
    }
    else if (number.length != 16) {
        err = 'Card Number must be 16 digit\n';
        res = false;
    }
    if (number.search(/[^\d]/g) != -1) {
        err += 'Card Number contains only digit';
        res = false;
    }
    document.getElementById("err-number").innerHTML = err;
    //exp.date
    err = '';
    var month = getElementById("card-expire-mo").innerHTML;
    month = month.replace(/[\s]/g, '');
    if (month.length() == 0) {
        err = 'Expire date is incomplete';
        res = false;
    }
    else if (month > 12) {
        err = `Invalid Input`;
        res = false;
    }
    if (month.search(/[^\d]/g) != -1) {
        err += 'Expire date contains only digit';
        res = false;
    }
    document.getElementById("err-exp-date").innerHTML = err;
    
    err = '';
    var year = getElementById("card-expire-y").innerHTML;
    year = year.replace(/[\s]/g, '');
    if (year.length() == 0) {
        err = 'Expire date is incomplete';
        res = false;
    }
    else if (year.length > 2) {
        err = `Invalid Input`;
        res = false;
    }
    if (year.search(/[^\d]/g) != -1) {
        err += 'Expire date year contains only digit';
        res = false;
    }
    document.getElementById("err-exp-date").innerHTML = err;

    err = '';
    var cvv_pin = getElementById("card-cvv-pin").innerHTML;
    cvv_pin = cvv_pin.replace(/[\s]/g, '');
    if (cvv_pin.length() == 0) {
        err = 'CVV Number must be fill ';
        res = false;
    }
    else if (cvv_pin != 3) {
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
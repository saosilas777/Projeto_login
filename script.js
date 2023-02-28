
var pwd = document.getElementById('pwd').value;
var user = document.getElementById('name').value;
function validation() {

    if (pwd === "12345") {
        document.getElementById('btn').style.opacity = '1';
    }
    else {
        document.getElementById('btn').style.opacity = '0';
    }

}

setInterval(() => {
    validation();
}, 1);


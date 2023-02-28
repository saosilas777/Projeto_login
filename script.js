
var pwd = document.getElementById('pwd').value;
var user = document.getElementById('name').value;
function validation() {

    if (pwd === "12345") {
        document.getElementById('btn').style.display = 'block';
    }
    else {
        document.getElementById('btn').style.display = 'none';
    }

}

setInterval(() => {
    validation();
}, 1);




function validation() {
var pwd = document.getElementById('pwd').value;
var user = document.getElementById('name').value;
    if (pwd === "12345" && user === "Silas") {
        document.getElementById('btn').style.display = 'block';
    }
    else {
        document.getElementById('btn').style.display = 'none';
    }

}

setInterval(() => {
    validation();
}, 1);


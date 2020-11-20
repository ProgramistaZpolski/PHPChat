'use strict';
let currentmsg = [
    {
        "author": "PHPchat",
        "message": "Welcome to PHPChat"
    }
];

function $(h) {
    return document.querySelector(h);
}
setInterval(function () {
    fetch("./lastmessage.json")
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            console.log(data);
            if (data[0].message != currentmsg[0].message) {
                currentmsg[0] = data[0];
                $("main").innerHTML = `<div class="message">
                    <h3 id="aut">${currentmsg[0].author}:</h3>
                    <h3>${currentmsg[0].message}</h3>
                </div>` + $("main").innerHTML;
            }
        })
        .catch(function () {
        });
}, 500);

function wyslij() {
    fetch(`./message.php?autor=${$("#autor").value}&msg=${$("#msg").value}`);
}
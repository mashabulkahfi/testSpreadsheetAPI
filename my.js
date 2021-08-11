function testGS() {
    const url = "https://script.google.com/macros/s/AKfycbwqYq9bnVhDViQtJ6q7KsktD-_ie5L1rmwK55ibEgk0duVAW2XXnIqvrBBfBhTYX7lS/exec";

    fetch(url)
    .then(d => d.json())
    .then(d => {
        document.getElementById("app").textContent = d[0].status;
    });
}

function addGS() {
    const url = "https://script.google.com/macros/s/AKfycbwqYq9bnVhDViQtJ6q7KsktD-_ie5L1rmwK55ibEgk0duVAW2XXnIqvrBBfBhTYX7lS/exec";

    fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        body: JSON.stringify({first:"Monica", last:"Momo", phone:"000-111-2222"})
    });
}

document.getElementById("btn2").addEventListener("click", addGS);

document.getElementById("btn1").addEventListener("click", testGS);


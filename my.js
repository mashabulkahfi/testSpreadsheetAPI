
function testGS() {
    const url = "https://script.google.com/macros/s/AKfycbw6jLsPSw9Jzupr3CqQU6I6bKshYDGW-BFQQ6YOfornZO_B-_K4kswY_EqAczS099n-/exec";

    fetch(url).then(d => d.json()).then(d => {document.getElementById("app").textContent = d[0].status});
}

function addGS() {
    const url = "https://script.google.com/macros/s/AKfycbw6jLsPSw9Jzupr3CqQU6I6bKshYDGW-BFQQ6YOfornZO_B-_K4kswY_EqAczS099n-/exec";

    fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        body: JSON.stringify({first: "Dzaky", phone: "101012992", last: "Farhan"})
    });
}

document.getElementById("btn2").addEventListener("click", addGS);

document.getElementById("btn").addEventListener("click", testGS);

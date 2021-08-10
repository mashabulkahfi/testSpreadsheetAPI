
function testGS() {
    const url = "https://script.google.com/macros/s/AKfycbyyeB0ExG9w1EUkqHMo5rtwRaGTo3lSMYGV6C3-xommKngyioKaNa0Q5A0CmPtcmADG/exec";

    fetch(url).then(d => d.json()).then(d => {document.getElementById("app").textContent = d[0].status});
}

function addGS() {
    const url = "https://script.google.com/macros/s/AKfycbyyeB0ExG9w1EUkqHMo5rtwRaGTo3lSMYGV6C3-xommKngyioKaNa0Q5A0CmPtcmADG/exec";

    fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        body: JSON.stringify({first:"Dzaky",last: "Farhan",phone:"101012992"})
    });
}

document.getElementById("btn2").addEventListener("click", addGS);

document.getElementById("btn").addEventListener("click", testGS);

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function normalize(text) {
    return text.toUpperCase().replace(/[^A-Z]/g, '');
}

function generateKey(length, seed) {
    let key = "";
    let seedValue = 0;

    for (let i = 0; i < seed.length; i++) {
        seedValue += seed.charCodeAt(i);
    }

    function random() {
        seedValue = (seedValue * 9301 + 49297) % 233280;
        return seedValue / 233280;
    }

    for (let i = 0; i < length; i++) {
        let rand = Math.floor(random() * 26);
        key += alphabet[rand];
    }

    return key;
}

function encrypt() {
    let text = normalize(document.getElementById("inputText").value);
    let seed = document.getElementById("seed").value;

    let key = generateKey(text.length, seed);
    let result = "";

    for (let i = 0; i < text.length; i++) {
        let p = text.charCodeAt(i) - 65;
        let k = key.charCodeAt(i) - 65;
        result += String.fromCharCode((p + k) % 26 + 65);
    }

    document.getElementById("output").innerText = result;
}
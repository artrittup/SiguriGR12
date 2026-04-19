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
    let inputElem = document.getElementById("inputText");
    let seedElem = document.getElementById("seed");
    let outputElem = document.getElementById("output");
    
    let text = inputElem.value.trim();
    let seed = seedElem.value.trim();

    if (text === "") {
        alert("Shkruaj një tekst në fushën e tekstit!");
        return;
    }
    if (seed === "") {
        alert("Shkruaj një seed (numër ose tekst)!");
        return;
    }

  
    let normalized = normalize(text);
    let key = generateKey(normalized.length, seed);
    let result = "";

    for (let i = 0; i < normalized.length; i++) {
        let p = normalized.charCodeAt(i) - 65;
        let k = key.charCodeAt(i) - 65;
        result += String.fromCharCode((p + k) % 26 + 65);
    }

    outputElem.innerText = result;

}


function decrypt() {
    let encryptedText = document.getElementById("inputText").value.toUpperCase().replace(/[^A-Z]/g, '');
    let seed = document.getElementById("seed").value;

    if (!encryptedText || !seed) {
        alert("Ju lutem vendosni tekstin e enkriptuar te kutia 'Teksti' dhe shënoni seed-in!");
        return;
    }

    // Gjenerojmë saktësisht të njëjtin çelës duke përdorur të njëjtin seed
    let key = generateKey(encryptedText.length, seed);
    let result = "";

    for (let i = 0; i < encryptedText.length; i++) {
        let c = encryptedText.charCodeAt(i) - 65; 
        let k = key.charCodeAt(i) - 65;     
        let p = (c - k + 26) % 26;
        result += String.fromCharCode(p + 65);
    }

    document.getElementById("output").innerText = result;
}
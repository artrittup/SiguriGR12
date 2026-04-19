# Vigenère Cipher - Data Security 
Ky është një projekt i thjeshtë web (JavaScript, HTML, CSS) për enkriptim dhe dekriptim me Vigenère cipher.  
Teksti i përdoruesit (plaintext) enkriptohet ose dekriptohet duke përdorur një celes (keystream) i gjeneruar nga një seed që shkruan vetë përdoruesi).

---

## Çfarë bën ky projekt?

- Përdoruesi shkruan tekstin që dëshiron të enkriptojë ose dekriptojë në fushën "Teksti".  
- Përdoruesi shkruan një seed (mund të jetë numër ose tekst i rëndomtë) në fushën "Seed".  
- Duke klikuar "Encrypt", aplikacioni:
  - e pastron dhe e kthen tekstin në formatin `A–Z` (bëhet me shkronja të mëdha, pa shenja të tjera).  
  - gjeneron një cels (keystream) nga seed‑i i dhënë.  
  - enkripton tekstin me Vigenère cipher dhe shfaq rezultatin në kutinë "Rezultati".  



---


## Si është ndërtuar?

- **HTML** (`index.html`):  
  - Faqja përmban një formular të thjeshtë me `<textarea>` dhe `<input>` për tekst dhe seed.  
  - Dy butona që thërrasin funksionet `encrypt()` dhe `decrypt()` nga JavaScript.  
- **CSS** (`style.css`):  
  - Stili bën aplikacionin të duket modern dhe i qartë: menu e blu, fusha të rrafshuara dhe output në font kodifikues.  
- **JavaScript** (`script.js`):  
  - `normalize(text)` – konverton teksti në shkronja të mëdha `A–Z` dhe heq çdo gjë tjetër.  
  - `generateKey(length, seed)` – nga seed‑i gjeneron një cels (keystream) për të shfrytëzuar si cels Vigenère.  
  - `encrypt()` – enkripton tekstin me formulën e Vigenère:  
    
    ciphertext = (plaintext + key) % 26
   

---

## Kufizimet dhe shënimet për siguri

- Ky projekt është akademik dhe për demonstrim, jo për përdorim në mjediset reale të sigurisë.  
- Vigenère është i thyeshëm me metoda kriptanalitike moderne, pra nuk garanton siguri të fortë.  
- Seed‑i dhe mënyra e gjenerimit të celsit janë të thjeshta; për aplikime të vërteta përdoren algoritëm modernë (si AES, ChaCha, etj.).  

---




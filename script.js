const input = document.getElementById("input");
const output = document.getElementById("output");
const loginText = document.getElementById("loginText");
const loginBox = document.querySelector(".login");

let realPassword = "";

// yazı efekti
async function typeLine(text, speed = 25) {
  for (let i = 0; i < text.length; i++) {
    output.innerText += text[i];
    await new Promise(r => setTimeout(r, speed));
  }
  output.innerText += "\n";
}

// BOOT
async function bootSequence() {
  const boot = [
    "sistem başlatılıyor...",
    "çekirdek modülleri yükleniyor...",
    "şifreleme protokolü aktif...",
    "----------------------------",
    "gizli ajan terminali",
    "kimlik doğrulaması gerekli"
  ];

  for (let line of boot) {
    await typeLine(line, 20);
    await new Promise(r => setTimeout(r, 200));
  }
}

// 🔐 INPUT FIX (EN ÖNEMLİ KISIM)
input.addEventListener("input", function (e) {
  // gerçek şifreyi kaydet
  realPassword = e.target.value;

  // ekranda yıldız göster
  input.value = "*".repeat(realPassword.length);
});

// ENTER
input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {

    if (realPassword === "1234") {
      loginSuccess();
    } else {
      loginText.innerText = "erişim reddedildi";

      realPassword = "";
      input.value = "";
    }
  }
});

// giriş başarılı
async function loginSuccess() {
  loginBox.remove();
  output.innerText = "";

  const mission = [
    "erişim sağlandı...",
    "ajan doğrulandı",
    "----------------------------",
    "hoş geldin ajan gündüz"
  ];

  for (let line of mission) {
    await typeLine(line, 25);
    await new Promise(r => setTimeout(r, 150));
  }
}

// başlat
bootSequence();

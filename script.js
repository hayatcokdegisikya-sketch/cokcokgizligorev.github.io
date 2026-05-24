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

// boot ekranı
window.onload = async function () {
  const boot = [
    "sistem başlatılıyor...",
    "çekirdek modülleri yükleniyor...",
    "şifreleme protokolü aktif...",
    "izleme sistemleri hazırlanıyor...",
    "----------------------------",
    "gizli ajan terminali",
    "yetki seviyesi: delta-7",
    "durum: sınıflandırılmış",
    "----------------------------",
    "kimlik doğrulaması gerekli"
  ];

  for (let line of boot) {
    await typeLine(line, 20);
    await new Promise(r => setTimeout(r, 200));
  }
};

// şifre mask
input.addEventListener("input", function () {
  realPassword = input.value;
  input.value = "*".repeat(realPassword.length);
});

// login kontrol
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

// ajan paneli
async function loginSuccess() {
  loginBox.remove();
  output.innerText = "";

  const mission = [
    "erişim sağlandı...",
    "ajan doğrulandı",
    "----------------------------",
    "aktif görevler yükleniyor...",
    "",
    "görev 1: veri sunucusu sızması",
    "hedef: bilinmiyor",
    "öncelik: yüksek",
    "",
    "görev 2: iz temizleme protokolü",
    "durum: beklemede",
    "",
    "----------------------------",
    "komutlar: status / mission / clear",
    "hoş geldin ajan"
  ];

  for (let line of mission) {
    await typeLine(line, 20);
    await new Promise(r => setTimeout(r, 150));
  }
}

const input = document.getElementById("input");
const output = document.getElementById("output");
const loginText = document.getElementById("loginText");
const loginBox = document.querySelector(".login");

// yazı efekti
async function typeLine(text, speed = 25) {
  for (let i = 0; i < text.length; i++) {
    output.innerText += text[i];
    await new Promise(r => setTimeout(r, speed));
  }

  output.innerText += "\n";
}

// boot ekranı
async function bootSequence() {

  const boot = [
    "sistem başlatılıyor...",
    "çekirdek modülleri yükleniyor...",
    "şifreleme protokolü aktif...",
    "----------------------------",
    "gizli ajan terminali",
    "kimlik doğrulaması gerekli",
    "lütfen şifreyi giriniz"
  ];

  for (let line of boot) {
    await typeLine(line, 20);
    await new Promise(r => setTimeout(r, 200));
  }
}

bootSequence();

// giriş kontrolü
input.addEventListener("keydown", function(e) {

  if (e.key === "Enter") {

    // direkt input.value oku
    if (input.value === "1234") {

      loginSuccess();

    } else {

      loginText.innerText = "erişim reddedildi";
      input.value = "";
    }
  }
});

// başarılı giriş
async function loginSuccess() {

  loginBox.remove();
  output.innerText = "";

  const mission = [
    "erişim sağlandı...",
    "ajan doğrulandı...",
    "----------------------------",
    "aktif görevler yükleniyor...",
    "",
    "görev 1: veri sunucusu sızması",
    "öncelik: yüksek",
    "",
    "görev 2: iz temizleme protokolü",
    "durum: beklemede",
    "",
    "hoş geldin ajan gündüz"
    "ilk görevine başlamak için lütfen A1 paketinin arkasındaki kodu gir"
  ];

  for (let line of mission) {
    await typeLine(line, 20);
    await new Promise(r => setTimeout(r, 150));
  }
}

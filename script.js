const input = document.getElementById("input");
const output = document.getElementById("output");
const loginText = document.getElementById("loginText");
const loginBox = document.querySelector(".login");

let realPassword = "";

// ekran yazma kuyruğu (çok önemli)
async function typeLine(text, speed = 40) {
  return new Promise(async (resolve) => {
    let line = "";

    for (let i = 0; i < text.length; i++) {
      line += text[i];
      output.innerText += text[i];
      await new Promise(r => setTimeout(r, speed));
    }

    output.innerText += "\n";
    resolve();
  });
}

// şifre mask
input.addEventListener("input", function () {
  realPassword = input.value;
  input.value = "*".repeat(realPassword.length);
});

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const entered = realPassword;

    if (entered === "1234") {
      loginSuccess();
    } else {
      loginText.innerText = "hatalı şifre";
      realPassword = "";
      input.value = "";
    }
  }
});

async function loginSuccess() {
  // login ekranını kaldır
  loginBox.remove();
  output.innerText = "";

  const lines = [
    "sistem doğrulanıyor...",
    "erişim kontrol ediliyor...",
    "şifre çözülüyor...",
    "bağlantı kuruluyor...",
    "hoş geldin ajan gündüz"
  ];

  // tüm satırlar tek tek yazılır
  for (let line of lines) {
    await typeLine(line, 50);
    await new Promise(r => setTimeout(r, 300)); // satır arası bekleme
  }
}

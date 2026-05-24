const input = document.getElementById("input");
const output = document.getElementById("output");
const loginBox = document.querySelector(".login");

let gameStarted = false;

// 🎬 EVRENİK YAZI MOTORU
async function typeLine(text, type = "system") {

  const div = document.createElement("div");
  div.classList.add(type);
  output.appendChild(div);

  for (let i = 0; i < text.length; i++) {

    div.innerText += text[i];

    let delay = 22;

    // dramatik duraksama
    if (text[i] === "." || text[i] === "," || text[i] === "…") {
      delay = 200;
    }

    await new Promise(r => setTimeout(r, delay));
  }

  div.innerText += "\n";

  window.scrollTo(0, document.body.scrollHeight);

  await new Promise(r => setTimeout(r, 500));
}

// 🚀 BOOT SEQUENCE (YEŞİL)
async function bootSequence() {

  const boot = [
    "sistem başlatılıyor...",
    "çekirdek modülleri yükleniyor...",
    "şifreleme protokolü aktif...",
    "güvenli kanal aranıyor...",
    "command bağlantısı kuruluyor...",
    "kimlik doğrulaması gerekli",
    "lütfen şifreyi giriniz"
  ];

  for (let line of boot) {
    await typeLine(line, "system");
  }

  loginBox.style.display = "block";
  input.focus();
}

bootSequence();

// 🔐 LOGIN
input.addEventListener("keydown", async function(e) {

  if (e.key === "Enter") {

    const value = input.value;

    if (!gameStarted) {

      if (value === "Hm20ae2358TpFnQ99") {

        gameStarted = true;
        input.value = "";

        startStory();

      } else {

        await typeLine("erişim reddedildi", "system");
        input.value = "";
      }
    }
  }
});

// 🎮 HİKÂYE BAŞLANGICI
async function startStory() {

  loginBox.style.display = "none";
  output.innerText = "";

  await typeLine("erişim sağlandı...", "system");
  await typeLine("ajan doğrulandı...", "system");
  await typeLine("şifreli kanal açılıyor...", "system");

  await typeLine("command: ajan gündüz… seni duyuyorum.", "command");
  await typeLine("command: bu operasyon düşündüğünden daha büyük.", "command");

  await typeLine("yağmur şehri tamamen sessizliğe gömmüştü.", "story");
  await typeLine("ışıklar ıslak asfaltın üzerinde kırılıyordu.", "story");
  await typeLine("birisi seni uzaktan izliyordu…", "story");

  await typeLine("command: ilk kararını vermelisin.", "command");

  await typeLine("1 - terk edilmiş binaya git", "system");
  await typeLine("2 - sinyali takip et", "system");
}

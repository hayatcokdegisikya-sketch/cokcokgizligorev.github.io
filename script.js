const input = document.getElementById("input");
const output = document.getElementById("output");
const loginBox = document.querySelector(".login");

let gameStarted = false;

// yazı motoru (system hızlı / story yavaş)
async function typeLine(text, type = "story") {

  const div = document.createElement("div");
  div.classList.add(type);
  output.appendChild(div);

  let delayBase = type === "system" ? 18 : 55; // 👈 fark burada

  for (let i = 0; i < text.length; i++) {

    div.innerText += text[i];

    let delay = delayBase;

    if ([".", ",", "…"].includes(text[i])) {
      delay = delayBase + 120;
    }

    await new Promise(r => setTimeout(r, delay));
  }

  div.innerText += "\n";
  window.scrollTo(0, document.body.scrollHeight);
}

// ekran temizle
function clearScreen() {
  output.innerHTML = "";
}

// glitch
function glitchEffect(time = 800) {
  document.body.classList.add("glitch");
  setTimeout(() => document.body.classList.remove("glitch"), time);
}

// matrix yağmur efekti (geçici)
function matrixRainEffect() {

  const rain = document.createElement("div");
  rain.id = "matrixRain";

  document.body.appendChild(rain);

  setTimeout(() => {
    rain.remove();
  }, 3000);
}

// boot
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

// login
input.addEventListener("keydown", async (e) => {

  if (e.key !== "Enter") return;

  if (!gameStarted) {

    const value = input.value.trim().toLowerCase();

    if (value === "hm20ae2358tpfnq99") {

      gameStarted = true;
      input.value = "";
      loginBox.style.display = "none";

      // ekran sil
      clearScreen();

      // system mesajları (hızlı)
      await typeLine("erişim sağlandı...", "system");
      await typeLine("ajan doğrulandı...", "system");
      await typeLine("şifreli kanal açılıyor...", "system");

      // hikaye başlat
      await startStory();

    } else {
      await typeLine("erişim reddedildi", "system");
      input.value = "";
    }
  }
});

// hikaye
async function startStory() {

  // bölüm öncesi ekran temizle
  clearScreen();

  // büyük glitch + matrix
  glitchEffect(1500);
  matrixRainEffect();

  await typeLine("yağmur neredeyse 3 saattir durmuyordu", "story");
  await typeLine("şehrin ışıkları ıslak asfaltın üzerinde dans ediyordu", "story");
  await typeLine("eski apartmanların arasındaki dar sokak ise gerektiğinden fazla sessizdi", "story");
  await typeLine("terminal ekranında tek bir mesaj belirdi", "story");
  await typeLine("“uyanık kal, seni izliyorlar.”", "command");
  await typeLine("ajan gündüz derin bir nefes aldı", "story");
  await typeLine("bu mesajın kimden geldiğini bilmiyordu", "story");
  await typeLine("ama birisi sisteme giriş yaptığını fark etmişti", "story");

  // tekrar temizle (bölüm geçişi)
  clearScreen();

  // büyük bölüm yazısı
  showChapter("BÖLÜM 1: YİTİK DÜNYA");
}

// bölüm yazısı
function showChapter(text) {

  const div = document.createElement("div");
  div.classList.add("chapter");
  div.innerText = text;

  document.body.appendChild(div);

  setTimeout(() => div.remove(), 4000);
}

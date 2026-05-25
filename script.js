const input = document.getElementById("input");
const output = document.getElementById("output");
const loginBox = document.querySelector(".login");

let gameStarted = false;

// yazı motoru
async function typeLine(text, type = "story") {

  const div = document.createElement("div");
  div.classList.add(type);
  output.appendChild(div);

  for (let i = 0; i < text.length; i++) {

    div.innerText += text[i];

    let delay = 22;

    if (text[i] === "." || text[i] === "," || text[i] === "…") {
      delay = 160;
    }

    await new Promise(r => setTimeout(r, delay));
  }

  div.innerText += "\n";
  window.scrollTo(0, document.body.scrollHeight);
}

// glitch efekti
function glitchEffect() {
  document.body.classList.add("glitch");
  setTimeout(() => document.body.classList.remove("glitch"), 800);
}

// boot sequence
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

// giriş kontrolü
input.addEventListener("keydown", async (e) => {

  if (e.key !== "Enter") return;

  if (!gameStarted) {

    // 🔧 FIX: case-insensitive + trim
    const value = input.value.trim().toLowerCase();

    if (value === "hm20ae2358tpfnq99") {

      gameStarted = true;
      input.value = "";
      loginBox.style.display = "none";

      startStory();

    } else {
      await typeLine("erişim reddedildi", "system");
      input.value = "";
    }
  }
});

// hikaye başlangıcı
async function startStory() {

  glitchEffect();

  await typeLine("yağmur neredeyse 3 saattir durmuyordu", "story");
  await typeLine("şehrin ışıkları ıslak asfaltın üzerinde dans ediyordu", "story");
  await typeLine("eski apartmanların arasındaki dar sokak ise gerektiğinden fazla sessizdi", "story");
  await typeLine("terminal ekranında tek bir mesaj belirdi", "story");
  await typeLine("“uyanık kal, seni izliyorlar.”", "command");
  await typeLine("ajan gündüz derin bir nefes aldı", "story");
  await typeLine("bu mesajın kimden geldiğini bilmiyordu", "story");
  await typeLine("ama birisi sisteme giriş yaptığını fark etmişti", "story");

  glitchEffect();

  showChapter("bölüm 1: yitik dünya");
}

// bölüm yazısı
function showChapter(text) {

  const div = document.createElement("div");
  div.classList.add("chapter");
  div.innerText = text;

  document.body.appendChild(div);

  setTimeout(() => div.remove(), 4000);
}

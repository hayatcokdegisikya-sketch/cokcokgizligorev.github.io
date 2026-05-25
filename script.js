const input = document.getElementById("input");
const output = document.getElementById("output");
const loginBox = document.querySelector(".login");

let gameStarted = false;
let allowGlitch = false;

// yazı motoru (biraz hızlandırıldı)
async function typeLine(text, type = "story") {

  const div = document.createElement("div");
  div.classList.add(type);
  output.appendChild(div);

  let delayBase = 30;

  if (type === "system") delayBase = 14;
  if (type === "command") delayBase = 22;
  if (type === "story") delayBase = 38; // 👈 biraz hızlandı

  for (let i = 0; i < text.length; i++) {

    div.innerText += text[i];

    let delay = delayBase;

    if ([".", ",", "…", ":"].includes(text[i])) {
      delay += 90;
    }

    await new Promise(r => setTimeout(r, delay));
  }

  div.innerText += "\n";
  window.scrollTo(0, document.body.scrollHeight);
}

// glitch
function glitchEffect(time = 700) {

  if (!allowGlitch) return;

  document.body.classList.add("glitch");

  setTimeout(() => {
    document.body.classList.remove("glitch");
  }, time);
}

// ekran temizleme KALDIRILDI (artık yok)
function clearScreen() {
  output.innerHTML = "";
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

      // ❗ SADECE SYSTEM MESAJLARI
      await typeLine("erişim sağlandı...", "system");
      await typeLine("ajan doğrulandı...", "system");
      await typeLine("şifreli kanal açılıyor...", "system");

      // 👉 HİKAYE HEMEN BAŞLAR (reset YOK)
      startStory();

    } else {
      await typeLine("erişim reddedildi", "system");
      input.value = "";
    }
  }
});

// hikaye
async function startStory() {

  allowGlitch = false;

  await typeLine("yağmur neredeyse 3 saattir durmuyordu", "story");
  await typeLine("şehrin ışıkları ıslak asfaltın üzerinde dans ediyordu", "story");
  await typeLine("eski apartmanların arasındaki dar sokak ise gerektiğinden fazla sessizdi", "story");
  await typeLine("terminal ekranında tek bir mesaj belirdi", "system");
  await typeLine("“uyanık kal, seni izliyorlar.”", "command");
  await typeLine("ajan gündüz derin bir nefes aldı", "story");
  await typeLine("bu mesajın kimden geldiğini bilmiyordu", "story");
  await typeLine("ama birisi sisteme giriş yaptığını fark etmişti", "story");

  // bekleme
  await new Promise(r => setTimeout(r, 2500));

  allowGlitch = true;

  glitchEffect(1000);

  await showChapter("BÖLÜM 1: YİTİK DÜNYA");
}

// chapter
async function showChapter(text) {

  const div = document.createElement("div");
  div.classList.add("chapter");
  output.appendChild(div);

  for (let i = 0; i < text.length; i++) {
    div.innerText += text[i];
    await new Promise(r => setTimeout(r, 80));
  }

  await new Promise(r => setTimeout(r, 1800));

  div.remove();
}

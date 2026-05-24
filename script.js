const input = document.getElementById("input");
const output = document.getElementById("output");
const loginBox = document.querySelector(".login");

let gameStarted = false;

// terminal yazısı efekti
async function typeLine(text, speed = 20) {

  const div = document.createElement("div");

  output.appendChild(div);

  for (let i = 0; i < text.length; i++) {
    div.innerText += text[i];

    await new Promise(r => setTimeout(r, speed));
  }

  div.innerText += "\n";

  window.scrollTo(0, document.body.scrollHeight);
}

// hikâye yazısı efekti
async function typeStory(text, speed = 20) {

  const div = document.createElement("div");

  div.classList.add("story");

  output.appendChild(div);

  for (let i = 0; i < text.length; i++) {
    div.innerText += text[i];

    await new Promise(r => setTimeout(r, speed));
  }

  div.innerText += "\n";

  window.scrollTo(0, document.body.scrollHeight);
}

// boot ekranı
async function bootSequence() {

  const boot = [
    "sistem başlatılıyor...",
    "çekirdek modülleri yükleniyor...",
    "şifreleme protokolü aktif...",
    "güvenli kanal aranıyor...",
    "----------------------------",
    "classified agent terminal",
    "yetki seviyesi: delta-7",
    "command bağlantısı kuruluyor...",
    "----------------------------",
    "kimlik doğrulaması gerekli",
    "lütfen şifreyi giriniz"
  ];

  for (let line of boot) {

    await typeLine(line, 20);

    await new Promise(r => setTimeout(r, 200));
  }

  loginBox.style.display = "block";

  input.focus();
}

bootSequence();

// giriş sistemi
input.addEventListener("keydown", async function(e) {

  if (e.key === "Enter") {

    const value = input.value;

    // giriş ekranı
    if (!gameStarted) {

      if (value === "Hm20ae2358TpFnQ99") {

        gameStarted = true;

        input.value = "";

        startStory();

      } else {

        await typeLine("erişim reddedildi", 20);

        input.value = "";
      }
    }

    // hikâye devamı için
    else {

      input.value = "";
    }
  }
});

// hikâye başlangıcı
async function startStory() {

  loginBox.style.display = "none";

  output.innerText = "";

  await typeLine("erişim sağlandı...");
  await typeLine("ajan doğrulandı...");
  await typeLine("----------------------------");

  await new Promise(r => setTimeout(r, 800));

  await typeStory("yağmur neredeyse üç saattir durmuyordu.");

  await typeStory("şehrin ışıkları ıslak asfaltın üstünde kırılıyordu.");

  await typeStory("eski apartmanların arasındaki dar sokak tamamen sessizdi.");

  await typeStory("terminal ekranında tek bir mesaj belirdi:");

  await new Promise(r => setTimeout(r, 700));

  await typeLine("\"uyanık kal. seni izliyorlar.\"");

  await new Promise(r => setTimeout(r, 1200));

  await typeStory("ajan gündüz derin bir nefes aldı.");

  await typeStory("bu mesajın kimden geldiğini bilmiyordu.");

  await typeStory("ama birisi onun sisteme giriş yaptığını anında fark etmişti.");

  await new Promise(r => setTimeout(r, 1000));

  await typeLine("şifreli kanal aktif...");
  await typeLine("bilinmeyen bağlantı algılandı...");
}

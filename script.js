const input = document.getElementById("input");
const output = document.getElementById("output");
const loginBox = document.querySelector(".login");

let gameStarted = false;
let missionStep = 0;

async function typeLine(text, speed = 20) {

  for (let i = 0; i < text.length; i++) {
    output.innerText += text[i];
    await new Promise(r => setTimeout(r, speed));
  }

  output.innerText += "\n";
  window.scrollTo(0, document.body.scrollHeight);
}

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

input.addEventListener("keydown", async function(e) {

  if (e.key === "Enter") {

    const value = input.value;

    if (!gameStarted) {

      if (value === "Hm20ae2358TpFnQ99") {

        gameStarted = true;
        input.value = "";
        startMission();

      } else {

        await typeLine("erişim reddedildi", 20);
        input.value = "";
      }
    }

    else {

      handleChoice(value);
      input.value = "";
    }
  }
});

async function startMission() {

  loginBox.style.display = "none";

  output.innerText = "";

  const intro = [
    "erişim sağlandı...",
    "ajan doğrulandı...",
    "şifreli kanal açılıyor...",
    "----------------------------",
await typeStory("yağmur neredeyse üç saattir durmuyordu.");
await typeStory("şehrin ışıkları ıslak asfaltın üstünde kırılıyordu.");
await typeStory("terminal ekranında tek bir mesaj yanıp söndü:");
await typeStory("\"uyanık kal. seni izliyorlar.\"");
    "",
    "1 - terk edilmiş depoya git",
    "2 - limandaki muhbiri ara"
  ];

  for (let line of intro) {
    await typeLine(line, 20);
    await new Promise(r => setTimeout(r, 150));
  }

  loginBox.style.display = "block";
  input.type = "text";
  input.focus();
}

async function handleChoice(choice) {

  if (missionStep === 0) {

    if (choice === "1") {

      missionStep = 1;

      output.innerText += "> terk edilmiş depoya git\n";

      const lines = [
        "command: dikkatli ol.",
        "command: depoda son sinyal 03:14'te alındı.",
        "",
        "kapı yarı açık görünüyor...",
        "içeriden metal sesleri geliyor.",
        "",
        "1 - içeri gir",
        "2 - çevreyi incele"
      ];

      for (let line of lines) {
        await typeLine(line, 20);
      }
    }

    else if (choice === "2") {

      missionStep = 2;

      output.innerText += "> limandaki muhbiri ara\n";

      const lines = [
        "command: muhbir sadece 2 dakika konuşacak.",
        "",
        "eski bir telefon çalmaya başladı.",
        "bozuk bir ses duyuluyor...",
        "",
        "1 - telefonu aç",
        "2 - hattı takip et"
      ];

      for (let line of lines) {
        await typeLine(line, 20);
      }
    }

    else {

      await typeLine("geçersiz seçim", 20);
    }
  }

  else if (missionStep === 1) {

    if (choice === "1") {

      output.innerText += "> içeri gir\n";

      const lines = [
        "karanlık bir koridor açılıyor...",
        "bir ekran aniden aktifleşti.",
        "",
        "command: ajan gündüz... yalnız değilsin.",
        "",
        "devam edecek..."
      ];

      for (let line of lines) {
        await typeLine(line, 20);
      }
    }

    else if (choice === "2") {

      output.innerText += "> çevreyi incele\n";

      const lines = [
        "zeminde yeni ayak izleri bulundu.",
        "birisi senden önce burada olmuş.",
        "",
        "command: izleri takip et.",
        "",
        "devam edecek..."
      ];

      for (let line of lines) {
        await typeLine(line, 20);
      }
    }
  }

  else if (missionStep === 2) {

    if (choice === "1") {

      output.innerText += "> telefonu aç\n";

      const lines = [
        "muhbir: geç kaldın ajan...",
        "muhbir: paket artık onların elinde.",
        "",
        "hat kesildi.",
        "",
        "devam edecek..."
      ];

      for (let line of lines) {
        await typeLine(line, 20);
      }
    }

    else if (choice === "2") {

      output.innerText += "> hattı takip et\n";

      const lines = [
        "konum belirleniyor...",
        "şifreli sinyal çözüldü.",
        "",
        "command: koordinatları sana gönderiyorum.",
        "",
        "devam edecek..."
      ];

      for (let line of lines) {
        await typeLine(line, 20);
      }
    }
  }
}

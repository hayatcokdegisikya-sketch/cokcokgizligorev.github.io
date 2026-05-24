const input = document.getElementById("input");
const output = document.getElementById("output");
const loginBox = document.querySelector(".login");

const ambient = document.getElementById("ambient");
const typeSound = document.getElementById("typeSound");
const glitchSound = document.getElementById("glitchSound");

let gameStarted = false;

// glitch
function playGlitch() {
  const g = glitchSound.cloneNode();
  g.volume = 0.4;
  g.play();
}

// yazı motoru
async function typeLine(text, type = "system") {

  const div = document.createElement("div");
  div.classList.add(type);
  output.appendChild(div);

  for (let i = 0; i < text.length; i++) {

    div.innerText += text[i];

    const s = typeSound.cloneNode();
    s.volume = 0.2;
    s.play();

    let delay = 18;
    if (".,!?".includes(text[i])) delay = 180;

    await new Promise(r => setTimeout(r, delay));
  }

  div.innerText += "\n";
  window.scrollTo(0, document.body.scrollHeight);

  await new Promise(r => setTimeout(r, 400));
}

// boot
async function boot() {

  ambient.volume = 0.2;
  ambient.play();

  await typeLine("sistem başlatılıyor...", "system");
  await typeLine("çekirdek aktif...", "system");
  await typeLine("kimlik doğrulama gerekli", "system");

  loginBox.style.display = "block";
}

boot();

// login
input.addEventListener("keydown", async (e) => {

  if (e.key === "Enter") {

    const value = input.value;

    if (!gameStarted) {

      if (value === "Hm20ae2358TpFnQ99") {

        gameStarted = true;
        loginBox.style.display = "none";
        output.innerHTML = "";

        startStory();

      } else {

        playGlitch();
        await typeLine("erişim reddedildi", "system");
      }
    }
  }
});

// HİKAYE (DEĞİŞMEDİ)
async function startStory() {

  await typeLine("erişim sağlandı...", "system");
  await typeLine("command bağlantısı kuruldu...", "system");

  await typeLine("command: seni duyuyorum ajan gündüz.", "command");
  await typeLine("yağmur şehri kaplamıştı...", "story");
  await typeLine("birisi seni izliyordu...", "story");
}

const input = document.getElementById("input");
const output = document.getElementById("output");

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function print(text) {
  output.innerText += text.toLowerCase() + "\n";
  window.scrollTo(0, document.body.scrollHeight);
}

async function typeBoot() {
  const lines = [
    "booting system...",
    "loading modules...",
    "checking integrity...",
    "access granted",
    "welcome user"
  ];

  for (let line of lines) {
    await sleep(500);
    print(line);
  }

  print("\ntype 'help' for commands");
}

function glitchRandom() {
  setInterval(() => {
    document.body.classList.add("glitch");
    setTimeout(() => {
      document.body.classList.remove("glitch");
    }, 150);
  }, 8000);
}

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const cmd = input.value.trim().toLowerCase();

    print("> " + cmd);
    handleCommand(cmd);

    input.value = "";
  }
});

function handleCommand(cmd) {
  switch (cmd) {

    case "help":
      print("commands:");
      print("help");
      print("clear");
      print("whoami");
      print("date");
      print("hack");
      break;

    case "clear":
      output.innerText = "";
      break;

    case "whoami":
      print("user@terminal");
      break;

    case "date":
      print(new Date().toString());
      break;

    case "hack":
      fakeHack();
      break;

    default:
      if (cmd !== "") {
        print("command not found: " + cmd);
      }
  }
}

async function fakeHack() {
  const steps = [
    "bypassing firewall...",
    "injecting payload...",
    "accessing core system...",
    "decrypting data...",
    "system compromised"
  ];

  for (let s of steps) {
    print(s);
    await sleep(600);
  }
}

typeBoot();
glitchRandom();

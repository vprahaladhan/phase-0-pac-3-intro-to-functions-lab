const shout = arg => arg.toUpperCase();

const whisper = arg => arg.toLowerCase();

const logShout = arg => {
  console.log(arg.toUpperCase());
}

const logWhisper = arg => {
  console.log(arg.toLowerCase());
}

const sayHiToGrandma = arg => {
  if (arg === "I love you, Grandma.") {
    return "I love you, too."
  }

  return arg === arg.toLowerCase() ? "I can\'t hear you!" : arg === arg.toUpperCase() ? "YES INDEED!" : null;
} 
function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

async function delayedGreet(name) {
  await delay(3000);
  console.log(name);
}
delayedGreet("Arpan");

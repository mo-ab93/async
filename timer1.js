const arg = process.argv.slice(2);
let time = 0;
for (let second of arg) {
  if (isNaN(second)) {
    continue;
  } 
  if (Math.sign(second) === -1) {
    continue;
  }
  setTimeout(() => {
    console.log(`${second} seconds`);
    process.stdout.write('\x07');
  }, time);
  time = time + 500;
}


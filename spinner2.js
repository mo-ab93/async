// let spinCar = '\r|\r/\r-\r\\\r|\r/\r-\r\\\r|\n';
let spinCar = ['|', '/', '-', '\\', '|', '/', '-', '\\', '\n'];
let time = 100; 
for(let character of spinCar) {
  setTimeout(() => {
    process.stdout.write(`\r${character}`);
  }, time);
  time = time + 100;
};

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|   '); 
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 1300);

// setTimeout(() => {
//   process.stdout.write('\r\\   '); 
// }, 1500);

// setTimeout(() => {
//   process.stdout.write('\r|   '); 
// }, 1700);

// setTimeout(() => {
//   process.stdout.write('\n'); 
// }, 1900);
/* The user can press b and it should beep right away
The user can input any number from 1 to 9 and it should
immediately output "setting timer for x seconds...", and
beep after that number of seconds has passed
The user can use ctrl + c to exit the program, at which point the program should say "Thanks for using me, ciao!" before terminating */

const readline = require('readline');
const beep = require('beepbeep');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function triggerAlarm() {
  process.stdout.write('\x07'); // Beep sound
  console.log('Beep! Beep!');
}

function setTimer(seconds) {
  console.log(`Setting timer for ${seconds} seconds...`);
  setTimeout(() => {
    beep();
    console.log('Timer complete! Beep! Beep!');
    rl.prompt();
  }, seconds * 1000);
}

rl.on('line', (input) => {
  if (input === 'b') {
    triggerAlarm();
  } else if (/^[1-9]$/.test(input)) {
    setTimer(parseInt(input, 10));
  }
});

rl.on('close', () => {
  console.log('Thanks for using me, ciao!');
  process.exit(0);
});

console.log('Welcome to the On-Demand Timer App!');
console.log('Press "b" for an immediate beep.');
console.log('Enter a number from 1 to 9 to set a timer.');
console.log('Press Ctrl+C to exit.');

rl.prompt();

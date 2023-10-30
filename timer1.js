//Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments

const args = process.argv.slice(2);

// Filter out negative and non-number input
const alarms = args
  .map(Number)
  .filter(time => time >= 0)

function triggerAlarm(time) {
  process.stdout.write('\x07'); // Beep sound
  console.log(`Alarm: ${time} seconds`);
}


alarms.forEach(time => {
  setTimeout(() => {
    triggerAlarm(time);
  }, time * 1000); // Convert to milliseconds
});
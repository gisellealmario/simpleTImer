//Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments

const args = process.argv.slice(2);

// Filter out negative and non-number inputs, then sort the valid alarm times in ascending order
const alarms = args
  .map(Number)
  .filter(time => !isNaN(time) && time >= 0)
  .sort((a, b) => a - b);

function triggerAlarm(time) {
  process.stdout.write('\x07'); // Beep sound
  console.log(`Alarm: ${time} seconds`);
}


alarms.forEach(time => {
  setTimeout(() => {
    triggerAlarm(time);
  }, time * 1000); // Convert to milliseconds
});
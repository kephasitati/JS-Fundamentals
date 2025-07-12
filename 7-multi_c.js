const arg = process.argv[2];
const times = parseInt(arg);

if (isNaN(times)) {
  console.log('Missing number of occurrences');
} else if (times > 0) {
  let output = '';

  for (let i = 0; i < times; i++) {
    output += 'C is fun\n';
  }

  console.log(output.trim());
}

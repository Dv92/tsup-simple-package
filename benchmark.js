const { execSync } = require("child_process");

const runCommand = (command) => {
  const startTime = Date.now();
  execSync(command);
  const endTime = Date.now();

  return (endTime - startTime) / 1000; // Convert to seconds
};

const tsupTime = runCommand("npm run tsup:build");
const microbundleTime = runCommand("npm run microbundle:build");

const percentageDiff = ((tsupTime - microbundleTime) / microbundleTime) * 100;

console.log(`The execution time of tsup:build is ${tsupTime} seconds`);
console.log(
  `The execution time of microbundle:build is ${microbundleTime} seconds`
);
console.log(`tsup:build is faster by ${Math.round(percentageDiff)}%`);

const { exec, execFile, spawn } = require("child_process");

// executing shell command
exec("ls -lh", (error, stdout, stderr) => {
  // error -> if there is problem with command
  // stdout -> output
  // stderr -> while executing shell command if there is any error it will be
  // returned here
  if (error) {
    console.log(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});

// excute shell script
const scriptPath = "./script.sh";
const args = ["arg1", "arg2"];
execFile(scriptPath, args, (error, stdout, stderr) => {
  if (error) {
    console.error(`Execution error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});

spawn("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", [
  "https://www.google.com/",
  "--incognito",
]);

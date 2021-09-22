const net = require("net");
// Stores the active TCP connection object.
let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  connection.write("Say: hello today is nice");

  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function () {
  const stdin = process.stdin;
  // your code here
  stdin.on("data", (key) => {
    if (key === "\u0003") {
      process.exit();
    };
    if (key === "w") {
      connection.write("Move: up");
      //console.log("Move: up");
    }
    if (key === "d") {
      connection.write("Move: right");
      //console.log("Move: right");
    }
    if (key === "s") {
      connection.write("Move: down");
      //console.log("Move: down");
    }
    if (key === "a") {
      connection.write("Move: left");
      //console.log("Move: left");
    }
  });
}

module.exports = setupInput;
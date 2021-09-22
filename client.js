const { CONNREFUSED } = require("dns");
const net = require("net");
const { IP, PORT } = require("./constants")

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", (connect) => {
    console.log("Successfully connected to game server");
    console.log("Name: EMI");
  });

  conn.on("data", (data) => {
    // code that does something when the connection is first established
    console.log(data);
  });

  conn.write("Name: EMI");
  //conn.write("Move: Up");
  //conn.write("Move: Right");
  //conn.write("Move: Down");
  //conn.write("Move: Left");

  return conn;
};




module.exports = connect;
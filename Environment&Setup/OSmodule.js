const os = require('os')

console.log("Operating System:", os.type());
console.log("OS Platform:", os.platform());
console.log("OS Release:", os.release());
console.log("Architecture:", os.arch());
console.log("Total Memory:", os.totalmem());
console.log("Free Memory:", os.freemem());
console.log("Home Directory:", os.homedir());
console.log("System Uptime (seconds):", os.uptime());
console.log("Hostname:", os.hostname());
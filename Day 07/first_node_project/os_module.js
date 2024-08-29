//* Retrieving system Information :

const { log } = require("console");
const os = require("os");

console.log("Operating System:", os.platform());  //?Operating System: win32
console.log("Architecture:", os.arch());  //? Architecture: x64
console.log("Release:", os.release());   //? Release: 10.0.19045
console.log("Hostname:", os.hostname());  //? Hostname: DESKTOP-QRA7ATS


//* Getting CPU information

console.log("Number of CPUs: ", os.cpus().length)   //? Number of CPUs:  4
console.log("CPU Model:", os.cpus()[0].model);      //?  CPU Model: Intel(R) Core(TM) i3-4160 CPU @ 3.60GHz

//* Checking memory usage

console.log("Total Memory : ", os.totalmem());   //? Total Memory :  8454602752
console.log("Free Memory:", os.freemem());         //? Free Memory: 3612622848
console.log(
    "Memory Usage:",
    (os.totalmem() - os.freemem()) / 1024 / 1024 + "MB"    //? Memory Usage: 4617.73828125MB
);

// Obtaining network interface:
console.log("Network Interface", os.networkInterfaces());   
//?  Output : 
// Network Interface {
//     Ethernet: [
//       {
//         address: '2402:d000:8114:4f8e:343a:e72f:8df7:970f',
//         netmask: 'ffff:ffff:ffff:ffff::',
//         family: 'IPv6',
//         mac: '14:dd:a9:2b:cf:6c',
//         internal: false,
//         cidr: '2402:d000:8114:4f8e:343a:e72f:8df7:970f/64',
//         scopeid: 0
//       },
//       {
//         address: '2402:d000:8114:4f8e:2034:753e:e3f1:bf77',
//         netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
//         family: 'IPv6',
//         mac: '14:dd:a9:2b:cf:6c',
//         internal: false,
//         cidr: '2402:d000:8114:4f8e:2034:753e:e3f1:bf77/128',
//         scopeid: 0
//       },
//       {
//         address: 'fe80::206b:d134:8b7a:d235',
//         netmask: 'ffff:ffff:ffff:ffff::',
//         family: 'IPv6',
//         mac: '14:dd:a9:2b:cf:6c',
//         internal: false,
//         cidr: 'fe80::206b:d134:8b7a:d235/64',
//         scopeid: 13
//       },
//       {
//         address: '192.168.1.54',
//         netmask: '255.255.255.0',
//         family: 'IPv4',
//         mac: '14:dd:a9:2b:cf:6c',
//         internal: false,
//         cidr: '192.168.1.54/24'
//       }
//     ],
//     'Loopback Pseudo-Interface 1': [
//       {
//         address: '::1',
//         netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
//         family: 'IPv6',
//         mac: '00:00:00:00:00:00',
//         internal: true,
//         cidr: '::1/128',
//         scopeid: 0
//       },
//       {
//         address: '127.0.0.1',
//         netmask: '255.0.0.0',
//         family: 'IPv4',
//         mac: '00:00:00:00:00:00',
//         internal: true,
//         cidr: '127.0.0.1/8'
//       }
//     ]
//   }  


//* Finding uptime:

console.log("Uptime:",os.uptime()+"Seconds"); //? Uptime: 10016Seconds
//* Getting temparory dictionary path:
console.log("Home Directory: ", os.homedir()); //?  Home Directory:  C:\Users\Student_05

//* Checking environment variable:
// console.log("Environment variable:", os.environ()); //?

//* Creating a tempt file :
const fs = require("fs");

const tmpFile = os.tmpdir() + "/temp.txt"
fs.writeFileSync(tmpFile, "This is temporary file")
console.log("Temporary file created:", tmpFile);   //? Temporary file created: C:\Users\STUDEN~1\AppData\Local\Temp/temp.txt

//* getting current user Info

console.log("Current user:", os.userInfo().username); //? Current user: Student_05

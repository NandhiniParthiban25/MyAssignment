//Extract login and opentaps from the URL
//URL: http://leaftaps.com/opentaps/control/login

let url = "http://leaftaps.com/opentaps/control/login";
let parts = url.split("/");
console.log(parts[3]); // opentaps
console.log(parts[5]); // login
console.log(parts[parts.length-1])
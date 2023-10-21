const name = "naru"
const repocount = 50
// console.log(name + repocount + "value")

// (``) = strings interpolation
console.log(`hello my name is ${name} and my repocount is ${repocount}`);

const gameName = new String('naru-yd-com')
//console.log(gameName[2])
//console.log(gameName.__proto__)
//console.log(gameName.length)
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(2))
//console.log(gameName.indexOf('u'));

const newstring = gameName.substring(0,3)
console.log(newstring)

const anotherstring = gameName.slice(-8,3)
console.log(anotherstring);

const newstringone = "   Naru   "
console.log(newstringone)
console.log(newstringone.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));
const info = require("./information")

const cowsay = require("cowsay")

console.log(cowsay.think({
    text: `Hello, my name is ${info.name} and my campus is ${info.campus}.`,
    e : "pp",
    T : "U "

}))
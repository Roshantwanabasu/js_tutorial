let text = "ROShan is a student. Roshan Read. Roshan write. Roshan work"
// let extractRoshan = text.match(/Roshan/g)
// console.log(`${extractRoshan.length} occurence of Roshan in ${text}`)
let replaceRoshan = text.replace(/Roshan/i,"Rush")
console.log(`${replaceRoshan}`)



//replace 1st and last name
let firstThenLast = "Roshan Twanabasu"
let getName = /(\w+) (\w+)/
let lastThenFirst = firstThenLast.replace(getName,"$2, $1")
console.log(`${lastThenFirst}`)
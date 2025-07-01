const path = require("path")

console.log(__dirname)
console.log(__filename)


const filePath = path.join("folder", "student", "data.txt")
console.log("hi",filePath)

const parsedata = path.parse(filePath)
const resolvepath = path.resolve(filePath)
const extname = path.extname(filePath)
const basename = path.basename(filePath)
const dirname = path.dirname(filePath)


console.log({parsedata,resolvepath,extname,basename,dirname , separator:path.sep})
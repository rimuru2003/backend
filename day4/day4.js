const fs = require('fs')
const path = require('path')


const filename = "text.txt"
const filepath = path.join(__dirname , filename)
const logg = fs.writeFileSync(filename, "yoyoyoyoyoyoyo", "utf-8")
console.log(logg)
// const readfile = fs.readFileSync(filepath, "utf-8")

// const update = fs.appendFileSync(filepath , "\n yoyohoney ", "utf-8")

// const del = fs.unlinkSync(filepath)
const newfile = "updateds.txt"
const newpath = path.join(__dirname , newfile)
const renamefile = fs.renameSync(filepath , newpath)
console.log(renamefile)
const fs = require('fs')

const contents = fs.readFileSync(process.argv[2])
const result = contents.toString().split('\n').length - 1

// const result = fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
console.log(result)

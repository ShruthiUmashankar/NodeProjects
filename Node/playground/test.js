const fs = require('fs')

const data=JSON.parse(fs.readFileSync('./j-son.json'))

data.name ="shrutiu"

fs.writeFileSync('./j-son.json',JSON.stringify(data))
const { Form } = require('../form')
const fs = require('fs')

const filename = process.argv[2]

if (!filename) {
  console.error('usage: node %s <filename', process.argv[1])
  process.exit(1)
}

const reader = fs.createReadStream(filename)
const form = new Form()

reader.pipe(form.createWriteStream()).on('finish', () => {
  for (const chunk of form) {
    console.log('%s', chunk.id);
    if ('APPL' == chunk.id.toString()) {
      if (0 == chunk.signature.compare(Buffer.from('op-1'))) {
        console.log(JSON.parse(chunk.data));
      }
    }
  }
})

const { Form } = require('../form')
const test = require('tape')

test('Form', (t) => {
  const form = new Form()
  console.log(form);
  t.end()
})

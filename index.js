const { SoundDataChunk } = require('./sound')
const { VersionChunk } = require('./version')
const { CommonChunk } = require('./common')
const { RegionChunk } = require('./region')
const extensions = require('./extensions')
const { Form } = require('./form')

/**
 * Module exports.
 */
module.exports = {
  SoundDataChunk,
  VersionChunk,
  CommonChunk,
  RegionChunk,
  extensions
  Form,
}

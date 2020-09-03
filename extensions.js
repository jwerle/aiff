const { ApplicationChunk } = require('./application')
const { SoundDataChunk } = require('./sound')
const { VersionChunk } = require('./version')
const { CommonChunk } = require('./common')
const { RegionChunk } = require('./region')
const iff = require('interchange-file-format')

// install IFF extensions
iff.extensions.set(CommonChunk.ID, CommonChunk)
iff.extensions.set(VersionChunk.ID, VersionChunk)
iff.extensions.set(RegionChunk.ID, RegionChunk)
iff.extensions.set(SoundDataChunk.ID, SoundDataChunk)
iff.extensions.set(ApplicationChunk.ID, ApplicationChunk)

/**
 * Module exports.
 */
module.exports = iff.extensions

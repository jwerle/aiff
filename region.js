const { Chunk, ID } = require('interchange-file-format')

const regn = ID.from('regn')

/**
 * Implements the AIFF regn (Chunk) chunk.
 * @class ChunkChunk
 * @extends Chunk
 */
class RegionChunk extends Chunk {

  /**
   * The 'regn' `ID` for this `Chunk` type.
   * @static
   * @accessor
   * @type {ID}
   */
  static get ID() {
    return regn
  }

  /**
   * Converts this `SoundDataChunk` into a plain object.
   * @return {Object}
   */
  toJSON() {
    const { id } = this
    return {
      id
    }
  }
}

/**
 * Module exports.
 */
module.exports = {
  RegionChunk
}

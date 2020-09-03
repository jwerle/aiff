const { Chunk, ID } = require('interchange-file-format')

const APPL = ID.from('APPL')

/**
 * Implements the AIFF APPL (Chunk) chunk.
 * @class ChunkChunk
 * @extends Chunk
 */
class ApplicationChunk extends Chunk {

  /**
   * The 'APPL' `ID` for this `Chunk` type.
   * @static
   * @accessor
   * @type {ID}
   */
  static get ID() {
    return APPL
  }

  /**
   * The application specific signature associated with the `ApplicationChunk` instance.
   * @accessor
   * @type {Buffer}
  */
  get signature() {
    return Buffer.from(this.slice(0, 4))
  }

  /**
   * The data associated with the `ApplicationChunk` instance.
   * @accessor
   * @type {Buffer}
   */
  get data() {
    return Buffer.from(this.slice(4))
  }

  /**
   * Converts this `ApplicationChunk` into a plain object.
   * @return {Object}
   */
  toJSON() {
    const { id, signature, data } = this
    return {
      id, signature, data
    }
  }
}

/**
 * Module exports.
 */
module.exports = {
  ApplicationChunk
}

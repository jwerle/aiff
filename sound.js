const { Chunk, ID } = require('interchange-file-format')

const SSND = ID.from('SSND')

/**
 * Implements the AIFF SSND (Chunk) chunk.
 * @class ChunkChunk
 * @extends Chunk
 */
class SoundDataChunk extends Chunk {

  /**
   * The 'SSND' `ID` for this `Chunk` type.
   * @static
   * @accessor
   * @type {ID}
   */
  static get ID() {
    return SSND
  }

  /**
   * The `offset` field determines where the first sample frame in the
   * `data` field starts. The offset is in bytes. Most applications won't
   * use offset and should set it to zero.
   * @accessor
   * @type {Number}
   */
  get offset() {
    return this.readUIntBE(0, 4)
  }

  /**
   * The `blockSize` field is used in conjunction with the `offset` field for
   * "block-aligning" waveform data. It contains the size in bytes of the blocks
   * that waveform data is aligned to. As with offset, most applications won't
   * use blockSize and should set it to zero.
   * @accessor
   * @type {Number}
   */
  get blockSize() {
    return this.readUIntBE(4, 4)
  }

  /**
   * The `data` field array contains the actual waveform data. The data is
   * arranged into what are called sample frames The number of sample frames
   * is determined by the `numSampleFrames` field in the `CommonChunk`.
   * @accessor
   * @type {Number}
   * @see {@link http://muratnkonar.com/aiff}
   */
  get soundData() {
    return Buffer.from(this.slice(8))
  }

  /**
   * Converts this `SoundDataChunk` into a plain object.
   * @return {Object}
   */
  toJSON() {
    const { id, offset, blockSize, soundData } = this
    return {
      id, offset, blockSize, soundData
    }
  }
}

/**
 * Module exports.
 */
module.exports = {
  SoundDataChunk
}

const { Chunk, ID } = require('interchange-file-format')

const COMM = ID.from('COMM')

/**
 * Implements the AIFF COMM (Common) chunk.
 * @class CommonChunk
 * @extends Chunk
 */
class CommonChunk extends Chunk {

  /**
   * The 'COMM' `ID` for this `Chunk` type.
   * @static
   * @accessor
   * @type {ID}
   */
  static get ID() {
    return COMM
  }

  /**
   * The number of audio channels for the sound described by the 'COMM' chunk.
   * A value of `1` means monophonic sound, `2` means stereo, and `4` means four
   * channel sound, etc. Any number of audio channels may be represented.
   *
   * The actual sound samples are stored in another chunk, the `SoundDataChunk`.
   * @accessor
   * @type {Number}
   */
  get numChannels() {
    return this.readInt16BE(0, 2)
  }

  /**
   * The number of sample frames in the `SoundDataChunk` described by the
   * 'COMM' chunk. This is number of sample frames, not the number of bytes
   * nor the number of sample points in the `SoundDataChunk`. The total number
   * of sample points in the file is `numSampleFrames * numChannels`.
   * @accessor
   * @type {Number}
   */
  get numSampleFrames() {
    return this.readInt32BE(2, 4)
  }

  /**
   * The sample size is the number of bits in each sample point described by the
   * 'COMM' chunk. This value can be any number from `1` to `32`.
   * @accessor
   * @type {Number}
   */
  get sampleSize() {
    return this.readInt16BE(6, 2)
  }

  /**
   * The sample rate at which the sound is to be played back, in sample frames per
   * second.
   * @accessor
   * @type {Number}
   */
  get sampleRate() {
    const x = this.readUIntBE(8, 2)
    const y = this.readUIntBE(10, 1)
    const z = this.readUIntBE(11, 1)
    const pre = 16398
    const pad = x - pre
    const shifted = (y << 8) + z
    return shifted << pad
  }

  /**
   * Converts this `CommonChunk` into a plain object.
   * @return {Object}
   */
  toJSON() {
    const { id, numChannels, numSampleFrames, sampleSize, sampleRate } = this
    return {
      id, numChannels, numSampleFrames, sampleSize, sampleRate
    }
  }
}

/**
 * Module exports.
 */
module.exports = {
  CommonChunk
}

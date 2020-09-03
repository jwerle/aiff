const { Chunk, ID } = require('interchange-file-format')

const FVER = ID.from('FVER')

const EPOCH = -2082844800000 // 1904-01-01T00:00:00.000Z

/**
 * Implements the AIFF FVER (Version) chunk.
 *
 * The Version chunk for AIFF-C files has a timestamp of `0xA2805140`
 * (`2726318400` decimal). Using `1904-01-01 00:00:00 UTC` as the epoch,
 * the timestamp encodes `1990-05-23 14:40:00 UTC`. This date agrees with
 * the date quoted in the Mac OS Sound reference above. That document indicates
 * that the time stamp is of type long (4 bytes), but the timestamp itself must
 * be interpreted as unsigned long to give the correct number of seconds since
 * the epoch. The indication is that as of at least 1990, the date stamp is
 * relative to `1904-01-01 00:00:00 UTC`.
 * @class VersionChunk
 * @extends Chunk
 * @see {@link http://www-mmsp.ece.mcgill.ca/Documents/AudioFormats/AIFF/AIFF.html}
 */
class VersionChunk extends Chunk {

  /**
   * The 'FVER' `ID` for this `Chunk` type.
   * @static
   * @accessor
   * @type {ID}
   */
  static get ID() {
    return FVER
  }

  /**
   * The integer value of the version.
   * @accessor
   * @return {Number}
   */
  get value() {
    return this.readUIntBE(0, 4)
  }

  /**
   * Version timestamp in milliseconds normalized for Unix Epoch
   * @accessor
   * @type {Number}
   */
  get timestamp() {
    return Number(new Date(EPOCH + this.value * 1000))
  }

  /**
   * Converts this `VersionChunk` into a plain object.
   * @return {Object}
   */
  toJSON() {
    const { id, value, timestamp } = this
    return {
      id, value, timestame
    }
  }
}

/**
 * Module exports.
 */
module.exports = {
  VersionChunk
}

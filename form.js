const iff = require('interchange-file-format')

// load extensions
require('./extensions')

// FORM IDs
const AIFC = iff.ID.from('AIFC')
const AIFF = iff.ID.from('AIFF')

/**
 * A class that extends `iff.Form` to implement the AIFF/AIFC FORM type.
 * @class Form
 * @extends iff.Form
 */
class Form extends iff.Form {

  /**
   * The 'AIFC' `ID` for the AIFF FORM "type" field.
   * @static
   * @accessor
   * @type {iff.ID}
   */
  static get AIFC() {
    return AIFC
  }

  /**
   * The 'AIFF' `ID` for the AIFF FORM "type" field.
   * @static
   * @accessor
   * @type {iff.ID}
   */
  static get AIFF() {
    return AIFF
  }

  /**
   * `Form` class constructor.
   * @param {?(Object)} opts
   */
  constructor(opts) {
    if (!opts) {
      opts = {}
    }

    super({ type: opts.compressed ? AIFC : AIFF })
  }

  /**
   * `true` if the FORM type is `AIFC`, otherwise `false`.
   * @accessor
   * @type {Boolean}
   */
  get compressed() {
    return 0 === this.type.compare(AIFC)
  }
}

/**
 * Module exports.
 */
module.exports = {
  Form
}

import { parseAttributes, parseClasses, parseId } from '../parse'
import { asSentence } from '../utils'

/**
 * Get selector details, so that it can be described (ID, classes,
 * attributes, etc.) which omit pseudo-classes.
 * @param {Object} component - A processed component from the AST
 * @returns {String}
 */
export default component =>
  [parseId(component), parseClasses(component), parseAttributes(component)]
    .filter(Boolean)
    .reduce(asSentence, '')

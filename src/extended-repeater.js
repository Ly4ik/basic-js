const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let repeatStr = '';
  const repeat = options.repeatTimes || 1;
  const separator = options.separator || '+';
  const addition = options.addition !== undefined ? options.addition : '';
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || '|';

  for (let i = 0; i < repeat; i++) {
    repeatStr += str;

    for (let j = 0; j < additionRepeatTimes; j++) {
      repeatStr += addition;

      if (j < additionRepeatTimes - 1) {
        repeatStr += additionSeparator;
      }
    }
    if (i < repeat - 1) {
      repeatStr += separator;
    }
  }
  return repeatStr;
}

module.exports = {
  repeater
};

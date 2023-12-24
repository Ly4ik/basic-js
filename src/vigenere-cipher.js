const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
   if (typeof message !== 'string' || typeof key !== 'string') {
    throw new Error('Incorrect arguments!');
   }

   const charCodeA = 'A'.charCodeAt(0);
   const result = [];
   let keyIndex = 0;

   for (let i = 0; i < message.length; i++) {
       const char = message[i].toUpperCase();

       if (/^[A-Z]$/.test(char)) {
           const shift = key[keyIndex % key.length].toUpperCase().charCodeAt(0) - charCodeA;
           const transformedCharCode = char.charCodeAt(0) + 1 * shift;
           const resultCharCode = ((transformedCharCode - charCodeA + 26) % 26) + charCodeA;

           result.push(String.fromCharCode(resultCharCode));
           keyIndex++;
       } else {
           result.push(char);
       }
   }
   return this.direct ? result.join('') : result.reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (typeof encryptedMessage !== 'string' || typeof key !== 'string') {
      throw new Error('Incorrect arguments!');
     }
     
    const charCodeA = 'A'.charCodeAt(0);
    const result = [];
    let keyIndex = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
        const char = encryptedMessage[i].toUpperCase();

        if (/^[A-Z]$/.test(char)) {
            const shift = key[keyIndex % key.length].toUpperCase().charCodeAt(0) - charCodeA;
            const transformedCharCode = char.charCodeAt(0) - 1 * shift;
            const resultCharCode = ((transformedCharCode - charCodeA + 26) % 26) + charCodeA;

            result.push(String.fromCharCode(resultCharCode));
            keyIndex++;
        } else {
            result.push(char);
        }
    }
    return this.direct ? result.join('') : result.reverse().join('');
    }
}

module.exports = {
  VigenereCipheringMachine
};

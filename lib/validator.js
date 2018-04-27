const arrayValidator = require('./validators/array');
const booleanValidator = require('./validators/boolean');
const dateValidator = require('./validators/date');
const emailValidator = require('./validators/email');
const numberValidator = require('./validators/number');
const stringValidator = require('./validators/string');


function check(rawObject, callback) {
  switch(rawObject.type) {
    case 'array':
    arrayValidator.validate(rawObject, callback);
    break;
    case 'date':
    dateValidator.validate(rawObject, callback);
    break;
    case 'email':
    emailValidator.validate(rawObject, callback);
    break;
    case 'number':
    numberValidator.validate(rawObject, callback);
    break;
    case 'string':
    stringValidator.validate(rawObject, callback);
    break;
    default:
    throw new Error(`Invalid Data Type: ${rawObject.type} in ${JSON.stringify(rawObject)}`);
  }
}

module.exports = {
  check
}
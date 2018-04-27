function validate(rawObject, callback) {
  let error = {};
  for (const key in rawObject) {
    if (rawObject.hasOwnProperty(key)) {
      switch(key) {
        case 'type':
        case 'data':
        break;
        case 'required':
        if(checkRequired(rawObject['data'])) {
          
        }
        break;
        case 'maxLength':

        default:
        throw new Error(`Invalid option: ${key}`);
      }
    }
  }
}

function checkRequired(data) {
  console.log(data)
  return data !== null &&
    data !== undefined &&
    data.trim() !== '';
}

function checkMaxLength(data) {

}

function checkMinLength(data) {

}

module.exports = {
  validate
}
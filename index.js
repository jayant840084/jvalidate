const validator = require('./lib/validator');


function Data(rawData, callback) {
  // Counter to track if all callbacks have been completed
  let counter = Object.keys(rawData).length;
  let errors = {};
  let validData = {};
  for (const key in rawData) {
    if (rawData.hasOwnProperty(key)) {
      const rawObject = rawData[key];
      validator.check(rawObject, (err, validObject) => {
        if (err) errors[key] = err;
        else validData[key] = validObject
        counter--;
        if (counter === 0) {
          if (Object.keys(errors).length > 0) {
            callback(errors);
          } else {
            callback(null, validData);
          }
        }
      });
    }
  }
}

const tempData = {
  name: {
    type: 'string',
    required: true,
    data: 'Jayant',
    maxLength: 1000
  },
  username: {
    type: 'string',
    required: true,
    data: 'jayant840084',
    maxLength: 100
  },
  dud: {
    type: 'string',
    maxLength: 1000
  },
}

Data(tempData, (err, validData) => {
  // console.log(err);
  // console.log(validData);
})

module.exports = Data;
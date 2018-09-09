// const validator = require('./lib/validator');


function Data(rawData) {
  return new Promise((resolve, reject) => {
		Object.keys(rawData).map((key, index) => {
			if (rawData[key].default && rawData[key].data === undefined) {
				rawData[key].data = rawData[key].default;
			}

			switch(rawData[key].type) {
				case 'boolean':
					rawData[key].data = rawData[key].data === 'true' || rawData[key].data === true;
					break;
				case 'number':
					rawData[key].data = Number.parseInt(rawData[key].data);
					break;
			}
		});
		resolve(rawData);
	});

  // Counter to track if all callbacks have been completed
  // let counter = Object.keys(rawData).length;
  // let errors = {};
  // let validData = {};
  // for (const key in rawData) {
  //   if (rawData.hasOwnProperty(key)) {
  //     const rawObject = rawData[key];
  //     validator.check(rawObject, (err, validObject) => {
  //       if (err) errors[key] = err;
  //       else validData[key] = validObject
  //       counter--;
  //       if (counter === 0) {
  //         if (Object.keys(errors).length > 0) {
  //           callback(errors);
  //         } else {
  //           callback(null, validData);
  //         }
  //       }
  //     });
  //   }
  // }
}

// const tempData = {
//   name: {
//     type: 'string',
//     required: true,
//     data: 'Jayant',
//     maxLength: 1000
//   },
//   username: {
//     type: 'string',
//     required: true,
//     data: 'jayant840084',
//     maxLength: 100
//   },
//   dud: {
//     type: 'string',
//     maxLength: 1000
//   },
// }
//
// Data(tempData, (err, validData) => {
//   // console.log(err);
//   // console.log(validData);
// })

module.exports = Data;

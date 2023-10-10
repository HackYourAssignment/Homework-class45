'use strict';

const getAnonName = (firstName) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!firstName) {
        reject(new Error("You didn't pass in a first name!"));
      }
      resolve(`${firstName} Doe`);
    }, 1000);
  });
};

function main() {
  getAnonName('John')
    .then((resolve) => {
      console.log(resolve);
    })
    .catch((err) => {
      console.log(err);
    });
}
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = getAnonName;

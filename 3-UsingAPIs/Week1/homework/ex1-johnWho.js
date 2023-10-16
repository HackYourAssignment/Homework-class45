'use strict';

const getAnonName = (firstName) => {
    return new Promise((resolve, reject) => {
      const fullName = `${firstName} Doe`;

      if(firstName) {
        setTimeout(() => {
          resolve(fullName);
        }, 1000);
      }else{
        reject(new Error("You didn't pass in a first name!"));
      }
    });  
};

function main() {
  getAnonName('John')
    .then((fullName)=> {
      console.log(fullName);
    })
    .catch((error) => {
      console.error(error.message);
    });
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = getAnonName;

const request = require("request");



const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

    //if there is an error print the error and and status code for reference then exit
    if (error) {
      callback(error, null);
      process.exit();
    }

    //if data or the description are undefined then exit, ie. this was the case for hairless
    if (body === '[]' || JSON.parse(body)[0].description === undefined) {
      callback(`Your request for ${breedName} was not found.`, null);
      process.exit();
    } else {
      const data = JSON.parse(body); //JSON string into object
      callback(null, data[0].description); //send no errors but send the description to be printed to console
    }

  });

};

module.exports = fetchBreedDescription;
const request = require("request");
const input = process.argv.slice(2).join("").toLowerCase();


const fetchCatBreedInfo = () => {
request(`https://api.thecatapi.com/v1/breeds/search?q=${input}`, (error, response, body) => {
  const data = JSON.parse(body); //JSON string into object
  //if there is an error print the error and exit
  if (error) {
    console.log(`Request failed ${error}`);
    process.exit();
  }
  //if data or the description are undefined then exit, ie. this was the case for hairless
  if (data[0] === undefined || data[0].description === undefined) {
    console.log(`Your request for ${input} was not found.`);
    process.exit();
  }
  
  // otherwise log the description to the console.
  console.log(data[0].description);


});

}

fetchCatBreedInfo(input);
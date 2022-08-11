const fetchBreedDescription =  require("./breedFetcher");
const breedName = process.argv.slice(2).join("").toLowerCase();

fetchBreedDescription(breedName, (error, description) => {

  if (error) {
    console.log(`Error fetch details ${error}`);
  } else {
    console.log(description);
  }
  
});
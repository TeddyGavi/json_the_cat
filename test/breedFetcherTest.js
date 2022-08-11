const fetchBreedDescription = require("../breedFetcher");
const assert = require("chai").assert;

describe('#fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      assert.equal(err, null);


      const expectedDesc = 'The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.';

      assert.equal(expectedDesc, desc.trim());
      done();
    });
  });
  it('returns an error when given a invalid breed, via callback', (done) => {
    fetchBreedDescription('billllll', (err, desc) => {
      assert.equal(desc, null);

      const expectedErr = `Your request for billllll was not found.`;

      assert.equal(expectedErr, err);
      done();
    });
  });

});
const db = require('../index.js');

describe('Database testing', () => {

  test('Should return an array for any busines id', (done) => {
    db.getById(5, (err, result) => {
      expect(Array.isArray(result)).toBe(true);
      done();
    });
    db.getById(10, (err, result) => {
      expect(Array.isArray(result)).toBe(true);
      done();
    });
  });

  test('Should return correct url for given business id', (done) => {
    db.getById(5, (err, result) => {
      expect(result[0].photoUrl).toBe('https://s3-us-west-1.amazonaws.com/welp-photos/005-01.jpg');
      done();
    });
  });

  test('Should return an empty array for any business id that does not have photos ', (done) => {
    db.getById(14, (err, result) => {
      expect(Array.isArray(result)).toBe(true);
      done();
    });
    db.getById(14, (err, result) => {
      expect(result.length).toBe(0);
      done();
    });    
  });
});

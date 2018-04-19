const request = require('request');

describe('Server testing', () => {
  test('Should return 200 on successful fetch', (done) => {
    request({
      method: 'GET',
      uri: 'http://127.0.0.1:3003/api/photo/5',
    }, (err, res, body) => {
      expect(err).toBe(null);
      expect(res.statusCode).toBe(200);
      done();
    });
  });
});
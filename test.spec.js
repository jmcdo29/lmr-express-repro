const express = require('express');
const { inject } = require('light-my-request');

describe('express-lmr', () => {
  it('should return Hello World!', async () => {
    const app = express();
    app.use('/', (_req, res, _next) => {
      res.send('Hello World!');
    });
    const response = await inject(app, { method: 'GET', url: '/' });
    expect(response.statusCode).toBe(200);
    expect(response.payload).toBe('Hello World!');
  });
});

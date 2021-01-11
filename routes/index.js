const express = require('express');

const noteRoute = require('./note');
const feedbackRoute = require('./feedback');

const router = express.Router();

module.exports = params => {

  router.get('/', async (request, response, next) => {
    try {
   
      return response.render('layout', {
        pageTitle: 'Welcome',
        template: 'index'
     
      });
    } catch (err) {
      return next(err);
    }
  });

  router.use('/note', noteRoute(params));
  router.use('/feedback', feedbackRoute(params));

  return router;
};

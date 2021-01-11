const express = require('express');

const router = express.Router();

module.exports = params => {
    const { noteService } = params;
  
    router.get('/', async (request, response, next) => {        
      try {
        const note = await noteService.getList();
        const errors = request.session.note ? request.session.note.errors : false;

        const successMessage = request.session.note ? request.session.note.message : false;

        request.session.note = {};

        return response.render('layout', {
            pageTitle: 'Note',
            template: 'note',
            note,
            errors,
            successMessage,
        });
        } catch (err) {
        return next(err);
        }
  });
  
  return router;
}
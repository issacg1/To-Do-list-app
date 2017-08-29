const express = require('express');
const to_doRoutes = express.Router();

const to_doController = require('../controllers/to-do-controller');


to_doRoutes.get('/', to_doController.index);
to_doRoutes.get('/new', to_doController.new);
to_doRoutes.post('/', to_doController.create);
to_doRoutes.get('/:id', to_doController.view);
to_doRoutes.get('/:id/edit', to_doController.edit);
to_doRoutes.put('/:id', to_doController.update);
to_doRoutes.delete('/:id', to_doController.delete);

module.exports = to_doRoutes;

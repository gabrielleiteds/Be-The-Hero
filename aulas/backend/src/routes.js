//config
const express = require('express');
const routes = express.Router();
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/incidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


//routs

//Login 
routes.post('/sessions', SessionController.create);

//register ONGS 
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

//incidents ONG
routes.get('/profile', ProfileController.index);

//register incidents
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete)



module.exports = routes;
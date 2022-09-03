const express = require('express');
const {
    getClients,
    createClient,
    deleteClient,
    updateClient
} = require('../controllers/clientController');

const router = express.Router();


//Get all clients
router.get('/', getClients);


// Post a new client
router.post('/', createClient);

//Delete a client
router.delete('/:id', deleteClient);

// Update client
router.patch('/:id', updateClient)

module.exports = router;
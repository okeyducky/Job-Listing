const Client = require('../models/clientModel');
const mongoose = require('mongoose');


// get all clients
const getClients = async (req, res) => {
    try {
        const clients = await Client.find({}).sort({ createAt: -1 });
        res.status(200).json(clients);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// create a new client
const createClient = async (req, res) => {
    console.log(req.body);
    try {
        const client = await Client.create({...req.body});
        res.status(200).json(client);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// delete a client
const deleteClient = async (req, res) => {
    try {
        const { id } = req.params;

        //check if the id is valid
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error('No such client');
        }

        const client = await Client.findOneAndDelete({ _id: id });

        if (!client) {
            throw new Error('No such client');
        }

        res.status(200).json(client);
    }
    catch (error) {
        res.status(404).json({ error: error.message });
    }
}

// update a client
const updateClient = async (req, res) => {
    try {
        const { id } = req.params;

        //check if the id is valid
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error('No such note');
        }

        const client = await Client.findOneAndUpdate({ _id: id }, {
            ...req.body
        });
   

        if (!client) {
            throw new Error('No such note');
        }

        res.status(200).json(client);
    }
    catch (error) {
        res.status(404).json({ error: error.message });
    }
}

module.exports = {
    getClients,
    createClient,
    deleteClient,
    updateClient
}
const Client = require('../models/clientModel');


const clientControler= {

    

    
    
    /* Get all students */

    getAllClients: async (req, res) => {
        try {
            

            const clients = await Client.find(); 
           
            res.status(200).json(clients);
        } catch (error) {
            console.error('Error al obtener el cliente',error);
            res.status(500).json({message: 'Internal Server Error'});
        }
    },

    /* Get by id */

    getClientById: async (req, res) => {
        try {
            const id= req.params.id;
            const clientId = await Client.findById(id);
            res.json(clientId)
        } catch (error) {
            console.error('Error al obtener el cliente',error);
            res.status(500).json({message: 'Internal Server Error'});
        }
    },

    /* Post */

    createClient: async (req, res) => {
        const clientData = req.body;

        try {
            const newClient = new Client(clientData);
            const savedClient = await newClient.save();
            res.status(201).json(savedClient);
        } catch (error) {
            console.error('Error al crear el cliente',error);
            res.status(500).json({message: 'Internal Server Error'});
            
        }
    },

    

 

    updateClient: async (req, res) => {
        try {
            const id = req.params.id;
            const client = await Client.findByIdAndUpdate(id, req.body, { new: true });
            res.status(200).json(client);
        } catch (error) {
            console.error('Error al crear el cliente',error);
            res.status(500).json(error);
        }
    },

    /* Delete */

    deleteClient: async (req, res) => {
        try {
            //const {name}= req.params;
            const id = req.params.id;
            const clientDelete= await Client.findByIdAndDelete(id);
            
            res.json(clientDelete);            
        } catch (error) {
            console.error('Error al crear el cliente',error);
            res.status(500).json({message: 'Internal Server Error'});
        }
    },

    /* get by name */

    getClientByEmail: async (req, res) => {
        
        try{
            const email= req.params.email; //se puede hacer destructurando, otra forma de hacerlo
            const emailClient= await Client.findOne({email: email});
            res.json(emailClient);
        } catch (error) {
            console.error('Error al obtener cliente:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    /* get by gender */

    getClientByGender: async (req, res) => {
        
        try{
            const gender= req.params.gender; //se puede hacer destructurando, otra forma de hacerlo
            const genderClient= await Client.find({gender: gender});
            res.json(genderClient);
        } catch (error) {
            console.error('Error al obtener el cliente', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    getClientByAge: async (req, res) => {
        
        try{
            const age= req.params.age; //se puede hacer destructurando, otra forma de hacerlo
            const ageClient= await Client.find({age:age });
            res.json(ageClient);
        } catch (error) {
            console.error('Error al obtener el cliente', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },






}

module.exports = clientControler; 
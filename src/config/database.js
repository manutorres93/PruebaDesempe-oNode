const mongoose = require('mongoose');
let Client;
let Book;

const connectDatabase= async () =>{
    try{
        if(!Book){
            Book= mongoose.model('libros',require('../models/bookModel').schema);
        }
        
        if(!Client){
            Client= mongoose.model('clientes',require('../models/clientModel').schema);
        }


        await mongoose.connect('mongodb+srv://manutorres9312:Wwl9ejoe1FicGqTV@db-ejemplo-01.elrgq55.mongodb.net/')
        .then (()=> console.log('Conectado a MongoDb'))
        .catch((error)=> console.log(error));

        await inicializarData();
        
    }catch(error){
        console.log('Falla al conectar',error);
        process.exit(1);
    }
};

const inicializarData= async () =>{
    
    try {
        await Client.deleteMany();
        await Book.deleteMany();

        const clientsData=[
            {
                name:'Manuela',
                lastName:"Torres",
                email:"manuela@gmail.com",
                gender:"female",
                age: 30,
               
            },
            {
                name:'Valentina',
                lastName:"Pelaez",
                email:"valentina@gmail.com",
                gender:"female",
                age: 24,
            },
            {
                name:'Angel',
                lastName:"Rivera",
                email:"angel@gmail.com",
                gender:"male",
                age: 25,
            }
        ];


        const booksData=[
            {
                name:'El señor de los anillos',
                author:"Tolkien",
                pages:600,
                description:"Fantasia",
               
            },
            {
                name:'El amor en los tiempos del colera',
                author:"Gabriel",
                pages:200,
                description:"Realismo màgico",
            },
            {
                name:'100 años de soledad',
                author:"Gabriel",
                pages:500,
                description:"Realismo màgico",
            }
        ];

        await Client.insertMany(clientsData);
        console.log('Data cliente inicializada exitosamente');

        await Book.insertMany(booksData);
        console.log('Data libros inicializada exitosamente');
        
    } catch (error) {
        console.error('Falla al inicializar data',error);
        process.exit(1);
        
    }
    

}

module.exports = connectDatabase;
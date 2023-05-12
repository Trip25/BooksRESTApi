import express from 'express';

import bodyParser from 'body-parser';
//this allows us to take in incoming POST request bodies

import usersRoutes from './routes/users.js';

//intialise express as a variable called app which is a function
const app = express();

//as local hosts are normally 3000, we will use 5000 just to be safe 
const PORT = 5001;

//initilise body parser using JSON data in our whole application
app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get('/', (req, res) => res.send('Hello from homepage.'));

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))
import express from 'express';

import { createUser, postUsers, deleteUsers, patchUsers } from '../controllers/users.js';

const router = express.Router(); 

// Custom middleware
// router.use((req, res, next) => {
//     console.log(`[${new Date().toISOString()}] ${req.method} to ${req.path}`);
//     next(); // Don't forget to call next()!
//   });

//in index.js we have identified that all usersRoutes will start with /users so if we include in router funtion below it is not needed as it would be /users/users. Therefore we can just use /.
router.get('/', (req, res) => { 
    console.log(users);
    //this is a get request to the users page
    res.send(users);
    });   

router.post('/', createUser);

    // /users/2 => req.params { id: 2 }
router.get('/:id', postUsers);
//then need to go to TC to test this
//POST request to http://localhost:5001/users
//then in the body { "author": "J.K. Rowling", "title": "Harry Potter and the Chamber of Secrets", "published": "1998-07-02"}


router.delete('/:id', deleteUsers);
//to test this go to TC add some new users(POST), check with GET request to http://localhost:5001/users
//then send a DELETE request to http://localhost:5001/users/{id} where {id} is the id of the user you want to delete


router.patch('/:id', patchUsers);

export default router;
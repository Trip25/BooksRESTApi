import { v4 as uuidv4 } from 'uuid';

let users = []; //this used to be const users but since we are now using a delete request we need to be able to change the users array

export const createUser = (req, res) => {
    // console.log('POST ROUTE REACHED');

    // console.log(req.body);
    const book = req.body;

    const userId= uuidv4();
    const bookWithId = { ...book, id: uuidv4() };
    users.push(bookWithId)

    res.send(`Book with the author ${book.author} added to the database`);
    }

export const postUsers = (req, res) => {
        // console.log(req.params);
        const { id } = req.params;
    
        const foundUser = users.find((user) => user.id === id);
        res.send(foundUser);
    }

export const deleteUsers = (req, res) => {
        const { id } = req.params;
    
        users = users.filter((user) => user.id !== id);
    
        res.send(`User with the id ${id} has now been deleted from the database, bye bye!`)
    }

export const patchUsers = (req, res) => {
        const { id } = req.params;
        const { author, title, firstName, lastName, publishDate } = req.body;
    
        //match users id to the id in the params
            const userToBeUpdated = users.find((user) => user.id === id);
        //if the user exists then update the user
        if(author) userToBeUpdated.author = author; //can also be written as a single line if statement
        if(title){
            userToBeUpdated.title = title;
        }
        if(firstName){
            userToBeUpdated.firstName = firstName;
        }
        if(lastName) userToBeUpdated.lastName = lastName;
        
        if(publishDate){
            userToBeUpdated.publishDate = publishDate;
        }
    
    
        res.send(`User with the id ${id} has now been updated in the database, very noice!`)
    }
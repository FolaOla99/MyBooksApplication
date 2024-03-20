const express = require('express');
const router = express.Router();
const books = require('../Models/books');

module.exports = router;

router.get('/', async(req,res)=>{
    try {
        const getBooks = await books.find();
        res.json(getBooks);
    } catch (err) {
        res.send('Error: ',err);
    }
})


router.post('/', async(req,res)=>{
   const newBook = new books(
    {
        name: req.body.name,
        author: req.body.author
    }
    )
    
    try {
        const newBookSaved = await newBook.save();
        res.json(newBookSaved);
    } catch (err) {
        res.send('Error: ',err);
    }
})
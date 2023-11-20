const Book =require("../models/Book")

//Fetching All the books and pagination
const getAllBooks = async (req, res, next) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 6;

    try {
        const totalBooks = await Book.countDocuments();
        const books = await Book.find()
            .skip((page - 1) * limit)
            .limit(limit);

        const totalPages = Math.ceil(totalBooks / limit);

        res.json({ books, currentPage: page, totalPages });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

//Get the book with the ID
const getById = async(req,res,next)=>{
    const id = req.params.id;
    let book;
    try {
        book = await Book.findById(id);
    } catch (error) {
        console.log(err)
    }
    if (!book) {
        return res.status(404).json({message:"No book found"});
      }
    
      return res.status(200).json({book});
}


//Add the book into the database
const addBook = async (req,res,next)=>{

    const { name , author,description,price,image}=req.body;
    let book;

    try{
        book = new Book({
            name,
            author,
            description,
            price,
            image
        })
        await book.save();

    }
    catch(err){
        console.log(err);
    }

    if(!book){
        return res.status(500).json({message:'unable to add'})
    }
    return res.status(201).json({book})
}

//update function to update the book detail with the ID
const updateBook = async(req,res,next)=>{
    const id = req.params.id;
    const { name , author,description,price,image}=req.body;
    let book;
    try {
        book = await Book.findByIdAndUpdate(id,{
            name,
            author,
            price,
            description,
            image
        })
            book = await book.save()
    } catch (error) {
        console.log(err)
    }
    if(!book){
        return res.status(404).json({message:'unable to update by id'})
    }
    return res.status(200).json({book})

}

//Delete the Book with the ID
const deleteBook = async(req,res,next)=>{
    const id = req.params.id;
    let book;
    try {
        book = await Book.findByIdAndDelete(id)

    } catch (error) {
        console.log(err)
    }
    if(!book){
        return res.status(404).json({message:'unable to delete  by this id'})
    }
    return res.status(200).json({message:"product deleted Successfully"})
}

exports.getById = getById;
exports.getAllBooks=getAllBooks;
exports.addBook = addBook;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;    
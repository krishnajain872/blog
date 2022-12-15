const express = require("express");
const app = express();
const Blog = require('../models/Blog');
const router = new express.Router();
app.use(router)


// default
router.get("/", function (req, res) {
    res.send("blog");
})


// get all blogs
router.get("/blog", async (req, res) => {
    try {
        // const tittle = req.params.tittle
        const blog = await Blog.find();
        res.status(202).send(blog);
        console.log(blog)
    } catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
})

// get blogs with tittle
router.get("/blog/:tittle", async (req, res) => {
    try {
        const tittle = req.params.tittle;
        const blog = await Blog.find({ tittle: tittle });
        res.status(202).send(blog);
    } catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
})
// getblogs with author
router.get("/blogAuthor/:author", async (req, res) => {
    try {
        const author = req.params.author;
        const blog = await Blog.find({ author: author });
        res.status(201).send(blog);
    } catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
})
// get blogs with ID
router.get('/blogId/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const blog = await Blog.findById(_id);
        if (!blog) {
            return res.status(404).send("blog not exist");
        } else {
            res.status(201).send(blog)
        }
    } catch (err) {
        res.send(err)
    }
})





// date with id of a blog
router.get('/date/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const Blog_date = await Blog.findById(_id).select([
            "date", "author"
        ]);
        // const SAVE_del_blog = await Blog.save(_id);
        if (!Blog_date) {
            return res.status(404).send("Blog not exist");
        } else {
            res.status(200).send(Blog_date)
        }
        // res.status(201).send(blog);
    } catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
});



module.exports = router;

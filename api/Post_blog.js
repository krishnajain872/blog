const express = require("express");
const app = express();
const Blog = require('../models/Blog');
const router = new express.Router();
app.use(router)

// post

router.post('/blog', async (req, res) => {
    try {
        console.log(req.body);
        const blog = new Blog(req.body);
        const createBlog = await blog.save()
        res.status(201).send(`blog created succesfully ${createBlog}`);
    } catch (err) {
        res.status(400).send(err);
    }

})
module.exports = router;
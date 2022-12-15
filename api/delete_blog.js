const express = require("express");
const app = express();
const Blog = require('../models/Blog');
const delete_blog = require("../models/Delete");
const router = new express.Router();
app.use(router)


// delete blog
router.delete("/blog/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const blog = await Blog.findById(_id).select(['id', 'author', 'date', 'delete']);
        console.log(blog);
        const del = new delete_blog();
        await del.save(blog).catch((err) => {
            console.log(err);
            res.send(err);
        });
        const Blog_data = await Blog.findByIdAndDelete(_id);
        // const SAVE_del_blog = await Blog.save(_id);
        if (!Blog_data) {
            return res.status(404).send("Blog not exist");
        } else {
            res.status(200).send(Blog_data)
        }
        // res.status(201).send(blog);
    } catch (err) {
        console.log(err);
        res.status(400).send(err);
    }

})



module.exports = router;

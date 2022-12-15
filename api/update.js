const express = require("express");
const app = express();

const Blog = require('../models/Blog');
const router = new express.Router();
app.use(router)




// update something in a blog with id 
router.patch("/blog/:id", async (req, res) => {
    try {
        const _id = req.params.id
        let updateBlog = await Blog.findOneAndUpdate(_id, req.body);
        updateBlog = await Blog.find({ id: _id }).catch((err) => { console.log('not workings' + err) });
        res.send(updateBlog);

    } catch (err) {
        res.status(404).send(err);
    }
})
router.patch("/blogTitle/:tittle", async (req, res) => {
    try {
        const _id = req.params.tittle
        let updateBlog = await Blog.findOneAndUpdate(_id, req.body);
        updateBlog = await Blog.find({ id: _id }).catch((err) => { console.log('not workings' + err) });
        res.send(updateBlog);
    } catch (err) {
        console.log(err)
        res.status(400).send(err);
    }
})

module.exports = router;

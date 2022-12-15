const mongoose = require('mongoose');
const validator = require("validator");
// require('Date');

const blogSchema = mongoose.Schema(
    {
        tittle: {
            type: String,
            required: true

        },
        description:
        {
            type: String,
            required: true,
            maxlength: 30,
        },
        author: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now(),
            required: true
        },
        content: {
            type: String,
            required: true
        },
        delete: {
            type: Boolean,
            default: false,
            required: false
        },
        Image: {
            type: String,
            default: null,
            // required: true
        }
    }, { timestamps: true }
)

const Blog = new mongoose.model('Blog', blogSchema);
module.exports = Blog;
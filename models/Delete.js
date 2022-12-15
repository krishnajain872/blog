const mongoose = require('mongoose');
const validator = require("validator");

const Deleted_blogSchema = mongoose.Schema(
    {
        _id: {
            type: Object
        }
        ,
        author: {
            type: String,
            // required: true
        },
        date: {
            type: Date,
            default: Date.now,
            // required: true
        },

        delete: {
            type: Boolean,
            default: true
            // required: true
        }

    },
    { timestamps: true }
)

const Deleted_Blog = new mongoose.model('Deleted_Blog', Deleted_blogSchema);
module.exports = Deleted_Blog;
// express server
const express = require("express");
const app = express();

// blog model import 
const Blog = require('../models/Blog');
// create router
const router = new express.Router();
// image module multer
const multer = require("multer");
// const path = require("path");

// Image
const path = require("path")
app.set("views", path.join(__dirname, "views"))
app.use(router);


const Image = require('../models/Image');

var storage = multer.diskStorage({
    destination: "images",
    filename: (req, file, cb) => {

        cb(null, file.originalname + '-' + Date.now() + '.pdf');
    }
}
)



var upload = multer({
    storage: storage,

    fileFilter: function (req, file, cb) {

        var filetypes = /jpeg|jpg|png/;
        var mimetype = filetypes.test(file.mimetype);

        if (mimetype) {
            return cb(null, true);
        }

        cb("Error: File upload only supports the "
            + "following filetypes - ");
    }

    // mypic is the name of file attribute
}).single('blog');


router.post("/upload", (req, res, next) => {

    upload(req, res, async (err) => {

        if (err) {
            console.log(err);
            res.send(err)
        }
        else {

            const Img = new Image({
                name: req.file.originalname
                , image: {
                    data: req.file.filename,
                    contentType: req.file.filetypes

                }
            })
            await Img.save()
                .then(res.send("Success, Image uploaded!")).catch((err) => {
                    console.log(err);
                    res.send(err);
                })
        }
    })


})

module.exports = router;
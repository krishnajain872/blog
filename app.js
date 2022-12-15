// express server
const express = require("express");
const app = express();

// database connection 
const connection = require("./database/connection");

// routes
const BLOG_Get_router = require('./api/Get_method');
const BLOG_Post_router = require('./api/Post_blog');
const BLOG_Update_router = require('./api/update');
const BLOG_Delete_router = require('./api/delete_blog');
const BLOG_Image_router = require('./api/Blog_Image');


// port
const port = process.env.PORT || 3000;


// middle ware
app.use(express.json());
app.use(BLOG_Get_router);
app.use(BLOG_Post_router);
app.use(BLOG_Update_router);
app.use(BLOG_Delete_router);
app.use(BLOG_Image_router);




app.listen(port, () => {
	console.log("backend is running");
})


const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/Blog_API_PROJECT", {
	useNewUrlParser: true,
	useUnifiedTopology: true
}).then(() => {
	console.log("connection succesfully established ");
}).catch((err) => {
	console.log(err);
})
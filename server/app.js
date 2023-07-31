const express = require("express");
const app = express();
const dotenv = require("dotenv");
const database = require("./config/database");

// port 
dotenv.config();
const PORT = process.env.PORT || 4000;

//db connect
database.connect();

//middlewares
app.use(express.json());

//default router
app.get("/", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is up and running....'
	});
});

//listen
app.listen(PORT, () => {
	console.log(`App is running at ${PORT} `)
})
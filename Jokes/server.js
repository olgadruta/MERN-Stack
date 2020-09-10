const express = require("express");
const app = express();

require("./server/config/mongoose.config");

const AllMyJokeRoutes = require("./server/routes/jokes.routes");

AllMyJokeRoutes(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));

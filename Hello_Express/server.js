const express = require("express");
const app = express();

// req is short for request
// res is short for response
app.get("/api/olga", (req, res) => {
  res.send("Our express api server is now sending this over to the browser. yey it's working!!!!!!!!!!!!!!");
});

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);

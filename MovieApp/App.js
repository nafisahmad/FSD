const express = require("express");
const app = express();
const request = require("request");
const ejs = require("ejs");


// app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");

app.get("/search", (req, res) => {
  res.render("search");
});

app.get("/results", (req, res) => {
  let query = req.query.search;

  request(
    "https://api.themoviedb.org/3/search/movie?api_key=4195c64e0489f9a335472e9f830ac0cd&query=" +
      query,(error, response, body) => {
      
      let data = JSON.parse(body);
      res.render("results", { searchQuery: query, data: data });
    }
  );
});

app.listen(5757, () => {
  console.log("Server started on port 5757");
});

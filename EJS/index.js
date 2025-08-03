const express = require("express");
const path = require("path");

const app = express();

// ⚠️ Fix this line: should be "view engine" not "view-engine"
app.set("view engine", "ejs");

// Set the directory for views:
app.set("views", path.join(__dirname, "views"));

// Dummy product list (⚠️ All have the same id — maybe not intentional?)
const products = [
  { id: 1, title: "product1" },
  { id: 2, title: "product2" },
  { id: 3, title: "product3" },
  { id: 4, title: "product4" },
  { id: 5, title: "product5" },
];

// Routes
app.get("/", (req, res) => {
  res.render("home", { title: "Home", products });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About page" });
});

// Start server
app.listen(3000, () => {
  console.log("Server Listening on port 3000");
});

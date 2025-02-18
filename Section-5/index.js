let express = require("express");
let app = express();
app.get("/", (req, res) => {
  res.send({
    status: 1,
    msg: "Home Page",
  });
});

app.get("/news", (req, res) => {
  res.send({
    status: 2,
    msg: "News Page API",
  });
});

app.get("/products", (req, res) => {
  res.send({
    status: 3,
    msg: "Products Page API",
  });
});

app.post("/login", (req, res) => {
  res.send({
    status: 4,
    msg: "Login Page API",
  });
});

app.listen(8000, () => {
  console.log("Server is running at http://localhost:8000");
});

//1:25:00 ended here safe to start from 1:00:00

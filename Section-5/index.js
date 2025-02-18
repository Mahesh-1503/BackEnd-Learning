let express = require("express");
let app = express();
app.use(express.json())
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


app.get("/news/:id",(req, res) => {
  let currentId = req.params.id
  res.send(`News Details API: ${currentId}`)
})

app.get("/products", (req, res) => {
  res.send({
    status: 3,
    msg: "Products Page API",
  });
});




app.post("/login", (req, res) => {
  console.log(req);
  console.log(req.body);
  //First method of response beginner method
  // res.send({
  //   status: 4,
  //   msg: "Login Page API",
  //   Bodydata:req.body,
  //   queryData:req.query
  // });

  //Second method response 
  res.status(200).json({
    status: 4,
     msg: "Login Page API",
     Bodydata:req.body,
     queryData:req.query
  })
  // console.log(req.query)
});

app.listen(8000, () => {
  console.log("Server is running at http://localhost:8000");
  console.log(`Hold ctrl and tap on link    ☝️    to open`);
  
});



let express = require("express");
let app = express();
app.use(express.json())
let myToken = "12345"
let myPass = "12345"


let checkToken = (req,res,next) => {
    if(req.query.token == "" || req.query.token == undefined){
      return res.send(

        {
          status:0,
          msg:`Please fill the token`
        }
      )
    }
    if(req.query.token != myToken){
      return res.send(

        {
          status:0,
          msg:`Please fill the correct token`
        }
      )
    }
    next(); //Callback function ==> Token is valid, continue to the next middleware/route handler
    //http://localhost:8000/?token=12345
    //http://localhost:8000/news/?token=12345
}
app.use(checkToken)//Middleware


//Second middleware
app.use((req, res, next) => {
  if(req.query.pass == "" || req.query.pass == undefined){
    return res.send(
      {
        Status:0,
        msg:'Please fill the password.'
      }
    )
  }
  if(req.query.pass != myPass ){
    return res.send(
      {
        Status:0,
        msg:'Please fill the current password.'
      }
    )
  }
  next()
  //http://localhost:8000/news/?token=12345&pass=12345 ==>news page
  //http://localhost:8000/?token=12345&pass=12345 ==> homePage
})



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



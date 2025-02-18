// Scenario
// We will create a middleware that checks if a user is an admin before allowing access to a specific route (/admin). If the user is not an admin, they will get a "Forbidden" message.


const express = require('express');
const app = express();
const port = 8000;


//middleware function to check if the user is an admin
const checkAdmin = (req,res,next) => {
    const isAdmin = req.query.admin === 'true';
    if (isAdmin) {
        next();//User is Admin proceed to the route
    }
    else{
        res.status(403).send('Forbidden: You are not a an admin!.')
    }
};


//Route with middleware
app.get('/admin', checkAdmin, (req,res) => {
    res.send(`welcome, Admin!`);
})


//Normalroute (no middleware)
app.get('/home', (req,res) => {
    res.send(`Welcome Home!.`)
}) 


//Start the server
app.listen(port, ()  => {
    console.log(`Server running at http://localhost:${port}`);
});

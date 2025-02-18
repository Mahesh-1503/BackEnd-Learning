Sure! Here’s a very simple example of **Route-Level Middleware** in Express.js.  

---

### **Step 1: Install Express (if not installed)**  
Run the following command:  
```sh
npm init -y
npm install express
```

---

### **Step 2: Create a Simple Express Server**  
Create a file named `server.js` and add the following code:

```js
const express = require('express');
const app = express();
const port = 3000;

// Simple middleware function
const simpleMiddleware = (req, res, next) => {
    console.log('Middleware executed!');
    next(); // Pass control to the next function
};

// Apply middleware to a specific route
app.get('/hello', simpleMiddleware, (req, res) => {
    res.send('Hello, World!');
});

// Another route without middleware
app.get('/home', (req, res) => {
    res.send('Welcome Home!');
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
```

---

### **Step 3: Run the Server**
Start the server by running:  
```sh
node server.js
```

---

### **Step 4: Test the Routes**
1. Open your browser or use Postman.
2. Go to `http://localhost:3000/hello`  
   - You will see **"Hello, World!"** on the page.  
   - In the terminal, you will see:
     ```
     Middleware executed!
     ```
3. Go to `http://localhost:3000/home`  
   - You will see **"Welcome Home!"**  
   - No middleware message appears because it's not applied to this route.

---

### **Summary**
✅ **Middleware applies only to `/hello`**  
✅ **`/home` works normally without middleware**  
✅ **Very simple and clear!**  

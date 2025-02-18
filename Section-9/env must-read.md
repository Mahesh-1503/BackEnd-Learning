### **What is dotenv (.env) in Node.js?**  
`dotenv` is a module in Node.js that **loads environment variables** from a `.env` file into `process.env`. This is useful for storing sensitive information like API keys, database credentials, and configurations **without hardcoding them in your code**.

---

## **Why Use dotenv?**
✅ **Security** – Keeps sensitive data **out of the codebase**  
✅ **Flexibility** – Allows different configurations for **development, testing, and production**  
✅ **Easy to Use** – Just create a `.env` file and load it  

---

## **Step-by-Step Guide to Using dotenv in Node.js**
### **Step 1: Install dotenv**
Run the following command:
```sh
npm install dotenv
```

---

### **Step 2: Create a `.env` File**
In your project root, create a `.env` file and add environment variables:
```
PORT=4000
DB_USER=mydatabaseuser
DB_PASSWORD=securepassword
SECRET_KEY=mysecretkey123
```

---

### **Step 3: Create `server.js` and Load `.env` Variables**
Now, create a `server.js` file and load the environment variables using `dotenv`:

```js
const express = require('express');
require('dotenv').config(); // Load .env file

const app = express();

// Access environment variables
const PORT = process.env.PORT || 3000;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const SECRET_KEY = process.env.SECRET_KEY;

app.get('/', (req, res) => {
    res.send(`Server is running on port ${PORT}`);
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
    console.log(`Database User: ${DB_USER}`);
    console.log(`Secret Key: ${SECRET_KEY}`);
});
```

---

### **Step 4: Run the Server**
Start the server:
```sh
node server.js
```

### **Output in Terminal**
```
Server started on http://localhost:4000
Database User: mydatabaseuser
Secret Key: mysecretkey123
```

---

## **Best Practices for Using dotenv**
✅ **Do NOT commit `.env` to Git!** – Add `.env` to `.gitignore`  
✅ **Use different `.env` files** for **development, testing, and production**  
✅ **Use `dotenv` as early as possible** (`require('dotenv').config();` at the top)  

---

### **Example: Using dotenv in Database Configuration**
Instead of hardcoding database credentials:
```js
const mongoose = require('mongoose');
require('dotenv').config();

const dbURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster.mongodb.net/mydatabase`;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to Database'))
    .catch(err => console.log(err));
```

---

## **Conclusion**
- `dotenv` helps manage sensitive data **securely**.
- Easy to use with `require('dotenv').config()`.
- Use `process.env.VARIABLE_NAME` to access environment variables.

Would you like an example with multiple environments like **dev, test, and prod**? 🚀

NOTE: Collected info from YouTube + ChatGPT
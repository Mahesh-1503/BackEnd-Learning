Got it! Here’s a **beginner-friendly, condition-based route-level middleware** example in Express.js.

---

## **Scenario**
We will create a middleware that **checks if a user is an admin** before allowing access to a specific route (`/admin`). If the user is not an admin, they will get a **"Forbidden"** message.

---

### **Step 1: Install Express.js**
If you haven't installed Express, run:
```sh
npm init -y
npm install express
```

---

### **Step 2: Create an Express Server**
Create a file named `server.js` and add the following code:

```js
const express = require('express');
const app = express();
const port = 3000;

// Middleware function to check if user is an admin
const checkAdmin = (req, res, next) => {
    const isAdmin = req.query.admin === 'true'; // Check if 'admin=true' is in the query

    if (isAdmin) {
        next(); // User is admin, proceed to the route
    } else {
        res.status(403).send('Forbidden: You are not an admin!');
    }
};

// Route with middleware
app.get('/admin', checkAdmin, (req, res) => {
    res.send('Welcome, Admin!');
});

// Normal route (no middleware)
app.get('/home', (req, res) => {
    res.send('Welcome Home!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
```

---

### **Step 3: Run the Server**
Start the server:
```sh
node server.js
```

---

### **Step 4: Test the Routes**
1. **Access `/admin` as a normal user**  
   Open:  
   ```
   http://localhost:3000/admin
   ```
   Output:  
   ```
   Forbidden: You are not an admin!
   ```

2. **Access `/admin` as an admin**  
   Open:  
   ```
   http://localhost:3000/admin?admin=true
   ```
   Output:  
   ```
   Welcome, Admin!
   ```

3. **Access `/home` (No middleware applied)**  
   Open:  
   ```
   http://localhost:3000/home
   ```
   Output:  
   ```
   Welcome Home!
   ```

---

### **Explanation**
✅ The **middleware checks** if the user has `admin=true` in the query.  
✅ If **true**, it allows access to `/admin`.  
✅ If **false**, it blocks access with a **403 Forbidden** message.  
✅ The `/home` route works normally **without restrictions**.  

This is a beginner-friendly condition-based middleware example.🚀
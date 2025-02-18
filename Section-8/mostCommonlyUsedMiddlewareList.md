In Express.js, middleware is commonly used to handle various tasks like authentication, logging, validation, and more. Here’s a list of **mostly used middleware conditions**:

---

### **1. Authentication Middleware**
✅ **Checks if a user is logged in before accessing a route.**  
Example:  
```js
const checkAuth = (req, res, next) => {
    const isAuthenticated = req.headers.authorization === 'Bearer my-secret-token'; // Example token check
    if (isAuthenticated) {
        next();
    } else {
        res.status(401).send('Unauthorized: Please log in.');
    }
};

app.get('/dashboard', checkAuth, (req, res) => {
    res.send('Welcome to your dashboard');
});
```

---

### **2. Admin Role Middleware**
✅ **Restricts access to admin-only routes.**  
Example:  
```js
const checkAdmin = (req, res, next) => {
    if (req.query.admin === 'true') {
        next();
    } else {
        res.status(403).send('Forbidden: Admins only!');
    }
};

app.get('/admin', checkAdmin, (req, res) => {
    res.send('Welcome, Admin!');
});
```

---

### **3. Logging Middleware**
✅ **Logs request details for debugging.**  
Example:  
```js
const requestLogger = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} request to ${req.url}`);
    next();
};

app.use(requestLogger);
```

---

### **4. Request Validation Middleware**
✅ **Ensures required parameters are present.**  
Example:  
```js
const validateUser = (req, res, next) => {
    if (!req.query.username) {
        return res.status(400).send('Bad Request: Username is required');
    }
    next();
};

app.get('/profile', validateUser, (req, res) => {
    res.send(`Hello, ${req.query.username}`);
});
```

---

### **5. Rate Limiting Middleware**
✅ **Prevents too many requests from a single user.**  
Example (Basic Counter):  
```js
let requestCount = 0;
const rateLimiter = (req, res, next) => {
    requestCount++;
    if (requestCount > 5) {
        return res.status(429).send('Too many requests! Try again later.');
    }
    next();
};

app.use(rateLimiter);
```

---

### **6. JSON Body Parser Middleware**
✅ **Ensures that request body is properly parsed for `POST` and `PUT` requests.**  
Example:  
```js
const express = require('express');
const app = express();

app.use(express.json()); // Parses JSON body

app.post('/data', (req, res) => {
    res.send(`Received: ${JSON.stringify(req.body)}`);
});
```

---

### **7. CORS (Cross-Origin Resource Sharing) Middleware**
✅ **Allows or restricts API access from different domains.**  
Example:  
```js
const cors = require('cors');
app.use(cors());
```

Or restrict access:
```js
const corsOptions = {
    origin: 'http://example.com', // Only allow this domain
};
app.use(cors(corsOptions));
```

---

### **8. Maintenance Mode Middleware**
✅ **Blocks requests when the site is under maintenance.**  
Example:  
```js
const maintenanceMode = (req, res, next) => {
    res.status(503).send('Site is under maintenance, please come back later.');
};

// Apply to all routes
app.use(maintenanceMode);
```

---

### **9. File Upload Middleware**
✅ **Handles file uploads using `multer`.**  
Example:  
```js
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('file'), (req, res) => {
    res.send(`File uploaded: ${req.file.filename}`);
});
```

---

### **10. IP Whitelist Middleware**
✅ **Allows access only from specific IP addresses.**  
Example:  
```js
const allowedIPs = ['123.456.789.000']; // Replace with actual IPs

const ipWhitelist = (req, res, next) => {
    if (!allowedIPs.includes(req.ip)) {
        return res.status(403).send('Forbidden: Your IP is not allowed');
    }
    next();
};

app.use(ipWhitelist);
```

---

## **Conclusion**
These middleware conditions are **commonly used** in Express.js apps to improve security, performance, and user experience.

### **Most Common Use Cases:**
| Middleware Type  | Purpose |
|------------------|---------|
| **Authentication** | Check if user is logged in |
| **Authorization** | Restrict access based on roles (Admin, User) |
| **Logging** | Monitor incoming requests |
| **Validation** | Ensure correct request data |
| **Rate Limiting** | Prevent abuse and DoS attacks |
| **CORS** | Manage cross-origin requests |
| **Maintenance** | Temporarily disable the site |
| **File Upload** | Handle file uploads |

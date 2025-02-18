# Section ==> 5.1

---

# Routing & Route Params in Express.js (Request & Response)

Routing is how your application decides what to do when a user visits a specific URL. In Express.js, you can define routes to handle different URLs and HTTP methods (like GET, POST, etc.). Let’s break it down step by step!

---

## 1. **What is Routing?**

Routing is like setting up directions for your app. When a user visits a specific URL, your app knows what to show or do based on the route you’ve defined.

- **URL Path**: The part of the URL after the domain (e.g., `/`, `/about`, `/users`).
- **HTTP Methods**: Actions like GET (read), POST (create), PUT (update), DELETE (remove).

---

## 2. **Basic Routing**

In Express.js, you define routes using methods like `app.get()`, `app.post()`, etc. Each route has:

1. A **path** (the URL).
2. A **callback function** that handles the request and sends a response.

### Example:

```javascript
const express = require("express");
const app = express();

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to the Home Page!");
});

// About route
app.get("/about", (req, res) => {
  res.send("This is the About Page.");
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
```

### What’s Happening Here?

- When you visit `http://localhost:3000`, you’ll see:  
  `Welcome to the Home Page!`
- When you visit `http://localhost:3000/about`, you’ll see:  
  `This is the About Page.`

---

## 3. **Route Parameters**

Sometimes, you want parts of the URL to be dynamic. For example, if you want to show different user profiles based on their ID, you can use **route parameters**.

### Syntax:

```javascript
app.get("/users/:id", (req, res) => {
  const userId = req.params.id; // Access the parameter
  res.send(`User ID: ${userId}`);
});
```

### Example:

- If you visit `http://localhost:3000/users/123`, you’ll see:  
  `User ID: 123`
- If you visit `http://localhost:3000/users/456`, you’ll see:  
  `User ID: 456`

---

## 4. **Multiple Route Parameters**

You can have more than one parameter in a route.

### Example:

```javascript
app.get("/users/:userId/posts/:postId", (req, res) => {
  const userId = req.params.userId;
  const postId = req.params.postId;
  res.send(`User ID: ${userId}, Post ID: ${postId}`);
});
```

- If you visit `http://localhost:3000/users/123/posts/789`, you’ll see:  
  `User ID: 123, Post ID: 789`

---

## 5. **Query Parameters**

Query parameters are extra bits of information added to the URL after a `?`. They’re often used for filtering or searching.

### Example:

```javascript
app.get("/search", (req, res) => {
  const query = req.query.q; // Access the query parameter "q"
  res.send(`You searched for: ${query}`);
});
```

- If you visit `http://localhost:3000/search?q=express`, you’ll see:  
  `You searched for: express`

---

## 6. **Combining Route and Query Parameters**

You can use both route parameters and query parameters in the same route.

### Example:

```javascript
app.get("/products/:category", (req, res) => {
  const category = req.params.category;
  const sortBy = req.query.sort; // Access query parameter "sort"
  res.send(`Category: ${category}, Sort By: ${sortBy}`);
});
```

- If you visit `http://localhost:3000/products/books?sort=price`, you’ll see:  
  `Category: books, Sort By: price`

---

## 7. **Request (`req`) and Response (`res`) Objects**

- **`req` (Request)**: Contains information about the incoming request.

  - `req.params`: Route parameters (e.g., `:id`).
  - `req.query`: Query parameters (e.g., `?q=express`).
  - `req.body`: Data sent in the request body (for POST/PUT requests).
  - `req.headers`: HTTP headers.

- **`res` (Response)**: Used to send a response back to the client.
  - `res.send()`: Sends a response (can be text, HTML, JSON, etc.).
  - `res.json()`: Sends a JSON response.
  - `res.status()`: Sets the HTTP status code (e.g., `res.status(404).send('Not Found')`).

---

## 8. **Putting It All Together**

Here’s an example that combines everything we’ve learned:

```javascript
const express = require("express");
const app = express();

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to the Home Page!");
});

// Route with parameter
app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});

// Route with query parameter
app.get("/search", (req, res) => {
  const query = req.query.q;
  res.send(`You searched for: ${query}`);
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
```

---

## 9. **Key Points to Remember**

- Use `app.get()` for GET requests, `app.post()` for POST requests, etc.
- Use `:paramName` for dynamic route parameters.
- Use `req.query` to access query parameters.
- Use `req.params` to access route parameters.
- Use `res.send()` or `res.json()` to send responses.

---

That’s it! You now know how to create routes, handle dynamic parameters, and work with request and response objects in Express.js.

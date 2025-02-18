# Section-5: Express.js Intro & Installation

# Express.js

Express.js is a lightweight and flexible Node.js web application framework.
It simplifies building web applications and APIs by providing a robust set of features.

# Core Features

# 1. Routing

Define application routes using HTTP methods(GET POST PUT DELETE etc).
Supports dynamic and nested routes

# 2. Middleware

Functions executed in the request-response cycle.

# 3. Templating

Integrates with templating engines like EJS, Pug, Handlebars to generate dynamic HTML content.

# 4. Restful API Support

Ideal for cheating RESTful services with clean organized code.
Simplifies handling JSON and form data.

Structure your project with MVC(Model-View-Controller) for maintainability.

# Section-5: Express.js Introduction & Installation in DETAIL

Express.js is a popular web framework for Node.js that simplifies the process of building web applications and APIs. It provides a robust set of features for creating servers, handling routes, managing middleware, and more. Below is an introduction to Express.js and a guide to installing it.

---

## 1. **What is Express.js?**

- **Express.js** is a minimal and flexible Node.js web application framework.
- It provides a simple API for creating servers, handling HTTP requests, and defining routes.
- It is widely used for building:
  - Web applications
  - RESTful APIs
  - Single-page applications (SPAs)
  - Microservices

---

## 2. **Why Use Express.js?**

- **Simplifies Server Creation**: Express makes it easy to set up a server with minimal code.
- **Routing**: It provides a clean and intuitive way to define routes for handling different HTTP methods (GET, POST, PUT, DELETE, etc.).
- **Middleware**: Express allows you to use middleware functions to handle tasks like authentication, logging, error handling, and more.
- **Extensible**: You can add functionality using third-party middleware and plugins.
- **Large Community**: Express has a large and active community, making it easy to find resources and support.

---

## 3. **Installation**

To use Express.js, you need to install it in your Node.js project. Follow these steps:

### Step 1: Initialize a Node.js Project

If you haven't already, create a new Node.js project:

```bash
npm init -y
```

This creates a `package.json` file with default settings.

### Step 2: Install Express.js

Install Express.js using npm (Node Package Manager):

```bash
npm install express
```

This will add Express.js to your project's `node_modules` folder and list it as a dependency in `package.json`.

---

## 4. **Creating a Basic Express Server**

Once Express.js is installed, you can create a simple server.

### Example Code:

```javascript
// Import Express.js
const express = require("express");

// Create an Express application
const app = express();

// Define a route for the root URL ("/")
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
```

### Explanation:

1. **Import Express.js**: Use `require('express')` to import the Express module.
2. **Create an App**: Use `express()` to create an Express application.
3. **Define Routes**: Use `app.get()` to define a route for the root URL (`/`). The callback function handles the request (`req`) and sends a response (`res`).
4. **Start the Server**: Use `app.listen()` to start the server on a specified port (e.g., 3000).

---

## 5. **Running the Server**

1. Save the code in a file, e.g., `app.js`.
2. Run the server using Node.js:
   ```bash
   node app.js
   ```
3. Open your browser and visit `http://localhost:3000`. You should see "Hello, World!" displayed.

---

## 6. **Key Features of Express.js**

- **Routing**: Define routes for different HTTP methods and URLs.
- **Middleware**: Use middleware functions to handle tasks like parsing request bodies, logging, authentication, etc.
- **Error Handling**: Easily handle errors using middleware.
- **Template Engines**: Integrate with template engines like EJS, Pug, or Handlebars for rendering dynamic HTML.
- **Static Files**: Serve static files (e.g., CSS, images) using `express.static()`.

---

## 7. **Extending the Server**

- **Add More Routes**:

  ```javascript
  app.get("/about", (req, res) => {
    res.send("About Page");
  });

  app.post("/submit", (req, res) => {
    res.send("Form Submitted");
  });
  ```

- **Use Middleware**:
  ```javascript
  app.use(express.json()); // Parse JSON request bodies
  app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies
  ```

---

## 8. **Summary**

- Express.js is a powerful and easy-to-use framework for building web applications and APIs in Node.js.
- Install Express.js using `npm install express`.
- Create a server by defining routes and starting the server with `app.listen()`.
- Extend your server with middleware, additional routes, and more.

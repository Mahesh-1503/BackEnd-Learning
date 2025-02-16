# Section-4: Create a Server in Node.js

In Node.js, you can create a server using the built-in `http` module. This allows you to handle HTTP requests and responses, making it possible to build web applications, APIs, and more. Below is a step-by-step guide to creating a basic server in Node.js.

---

## 1. **Import the `http` Module**

The `http` module is a core module in Node.js, so you don't need to install it separately. You can import it using `require` (CommonJS) or `import` (ES Modules).

### Using CommonJS:

```javascript
const http = require("http");
```

### Using ES Modules:

```javascript
import http from "http";
```

---

## 2. **Create the Server**

Use the `http.createServer()` method to create a server. This method takes a callback function that handles incoming requests (`req`) and sends responses (`res`).

### Example:

```javascript
const server = http.createServer((req, res) => {
  // Handle the request and send a response
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, World!");
});
```

---

## 3. **Start the Server**

Use the `server.listen()` method to start the server and make it listen on a specific port and host.

### Example:

```javascript
const PORT = 3000;
const HOST = "localhost";

server.listen(PORT, HOST, () => {
  console.log(`Server is running at http://${HOST}:${PORT}`);
});
```

---

## 4. **Full Example**

Here’s the complete code for creating a basic server in Node.js:

### Using CommonJS:

```javascript
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, World!");
});

const PORT = 3000;
const HOST = "localhost";

server.listen(PORT, HOST, () => {
  console.log(`Server is running at http://${HOST}:${PORT}`);
});
```

### Using ES Modules:

```javascript
import http from "http";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, World!");
});

const PORT = 3000;
const HOST = "localhost";

server.listen(PORT, HOST, () => {
  console.log(`Server is running at http://${HOST}:${PORT}`);
});
```

---

## 5. **Run the Server**

1. Save the code in a file, e.g., `server.js`.
2. Open a terminal and navigate to the directory where the file is saved.
3. Run the server using Node.js:
   ```bash
   node server.js
   ```
4. Open your browser and visit `http://localhost:3000`. You should see "Hello, World!" displayed.

---

## 6. **Key Points**

- The `http.createServer()` method creates an HTTP server.
- The callback function handles incoming requests (`req`) and sends responses (`res`).
- Use `res.writeHead()` to set the status code and response headers.
- Use `res.end()` to send the response and end the request cycle.
- The `server.listen()` method starts the server and makes it listen on a specified port and host.

---

## 7. **Extending the Server**

- You can handle different routes by checking `req.url`:
  ```javascript
  if (req.url === "/about") {
    res.end("About Page");
  } else {
    res.end("Home Page");
  }
  ```
- You can serve HTML, JSON, or other content types by modifying the `Content-Type` header:
  ```javascript
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Hello, World!</h1>");
  ```

---

### Summary

- Use the `http` module to create a server in Node.js.
- The server listens for requests and sends responses.
- Start the server using `server.listen()`.
- You can extend the server to handle routes, serve different content types, and more.

# Understanding Thunder Client in VS Code

**Thunder Client** is an extension for **Visual Studio Code** (VS Code) that helps you test and make HTTP requests to a server. It is similar to tools like **Postman** but integrated directly within VS Code. You can use it to send different types of HTTP requests (like **GET**, **POST**, **PUT**, **DELETE**) and see the responses directly in your editor.

Let’s walk through how to use **Thunder Client** to test the routes from the code above.

---

## Step 1: Install Thunder Client in VS Code

1. **Open VS Code**.
2. Click on the **Extensions icon** in the Activity Bar (left sidebar).
3. In the Extensions view, search for **Thunder Client**.
4. Click **Install** on the Thunder Client extension.

---

## Step 2: Open Thunder Client

Once installed, you’ll see the Thunder Client icon in the left sidebar of VS Code (it looks like a small cloud with an arrow). Click on it to open the Thunder Client window.

---

## Step 3: Sending Requests with Thunder Client

### Testing the `GET /` (Home Page) Route

1. Click on the **New Request** button at the top.
2. In the dropdown menu, select **GET** as the HTTP method.
3. In the **URL bar**, enter `http://localhost:8000/`.
4. Press the **Send** button (it’s the green button with an arrow).
5. In the response panel, you should see the result:

   ```json
   {
     "status": 1,
     "msg": "Home Page"
   }
   ```

This confirms that the `GET /` route is working correctly.

### Testing the `GET /news` Route

1. Click on **New Request** again.
2. Select **GET** from the method dropdown.
3. Enter `http://localhost:8000/news` in the **URL bar**.
4. Press **Send**.
5. You should see a response like this:

   ```json
   {
     "status": 2,
     "msg": "News Page API"
   }
   ```

### Testing the `GET /news/:id` Route (Dynamic Parameter)

1. Click on **New Request**.
2. Select **GET** from the method dropdown.
3. Enter `http://localhost:8000/news/1` (or any other ID, like `/2`) in the **URL bar**.
4. Press **Send**.
5. You should see a response like:

   ```
   News Details API: 1
   ```

This shows that the dynamic parameter `:id` is working and returning the correct value.

### Testing the `GET /products` Route

1. Click on **New Request**.
2. Choose **GET** from the dropdown.
3. Enter `http://localhost:8000/products` in the **URL bar**.
4. Press **Send**.
5. The response should look like this:

   ```json
   {
     "status": 3,
     "msg": "Products Page API"
   }
   ```

### Testing the `POST /login` Route

To test the `POST /login` route (which requires sending a **POST** request with data):

1. Click on **New Request**.
2. Choose **POST** from the dropdown.
3. In the **URL bar**, enter `http://localhost:8000/login`.
4. Switch to the **Body** tab (next to URL and Headers).
5. Choose **JSON** as the body type.
6. In the body area, enter the login data you want to send. For example:

   ```json
   {
     "username": "john_doe",
     "password": "password123"
   }
   ```

7. Press **Send**.
8. In the response, you should see something like:

   ```json
   {
     "status": 4,
     "msg": "Login Page API",
     "Bodydata": {
       "username": "john_doe",
       "password": "password123"
     },
     "queryData": {}
   }
   ```

This confirms that the `POST /login` route is working and showing the sent data in the response.

---

## Thunder Client Features You Can Use

- **Method Dropdown**: Choose the HTTP method (`GET`, `POST`, etc.).
- **URL Bar**: Type the URL for the request.
- **Body Tab**: For **POST** or **PUT** requests, use the **Body** tab to send data. You can send **JSON**, **Form Data**, or other types.
- **Headers Tab**: You can add custom headers if required for your request.
- **Environment Variables**: You can save reusable environment variables, such as URLs or API keys.
- **Save Requests**: You can save requests for later use.

---

## Summary

Here’s how to use Thunder Client to test the routes defined in the previous **index.js** file:

1. **Install** the Thunder Client extension in VS Code.
2. **Open** Thunder Client by clicking the cloud icon in the left sidebar.
3. Use the **New Request** button to create and send **GET** or **POST** requests to the server running on `http://localhost:8000`.
4. For **POST** requests, send data in the **Body** tab using JSON format.

With Thunder Client, you can easily test your API routes without leaving VS Code!
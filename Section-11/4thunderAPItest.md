# **✅ Steps to Test APIs Using Thunder Client (VS Code Extension)**
Since you're using **Express.js and MongoDB**, you need to test your APIs. You can use **Thunder Client**, a simple API testing tool inside **VS Code** (similar to Postman).  

---

## **🔹 Step 1: Install Thunder Client**
1. Open **VS Code**  
2. Go to **Extensions (`Ctrl + Shift + X`)**  
3. Search for **"Thunder Client"**  
4. Click **Install**  

---

## **🔹 Step 2: Start Your Express Server**
1. Open your **terminal** in VS Code  
2. Run your backend server:
   ```sh
   node index.js
   ```
   OR if using **nodemon** (auto-restart on file change):
   ```sh
   nodemon index.js
   ```
3. Ensure you see:
   ```
   MongoDB Connected Successfully......😇
   server started and running at http://localhost:4000
   ```

---

## **🔹 Step 3: Test APIs in Thunder Client**
Now, open **Thunder Client** (`Ctrl + Shift + P` → Search "Thunder Client: New Request" → Enter).

### **✅ 1. Create an Employee (POST Request)**
1. Open **Thunder Client**
2. Set **Method: `POST`**
3. Enter **URL:**  
   ```
   http://localhost:4000/employees/add-emp
   ```
4. Go to the **Body tab** → Select **JSON**  
5. Add this sample JSON data:
   ```json
   {
       "name": "John Doe",
       "email": "john@example.com",
       "phone": 1234567890,
       "city": "New York"
   }
   ```
6. Click **Send**  
7. ✅ You should get a **201 Created** response:
   ```json
   {
       "_id": "65dfc7ab8b3a2e0012a5c123",
       "name": "John Doe",
       "email": "john@example.com",
       "phone": 1234567890,
       "city": "New York",
       "__v": 0
   }
   ```
---

### **✅ 2. Get All Employees (GET Request)**
1. Open **Thunder Client**
2. Set **Method: `GET`**
3. Enter **URL:**  
   ```
   http://localhost:4000/employees/all-employees
   ```
4. Click **Send**  
5. ✅ You should get a list of employees:
   ```json
   [
       {
           "_id": "65dfc7ab8b3a2e0012a5c123",
           "name": "John Doe",
           "email": "john@example.com",
           "phone": 1234567890,
           "city": "New York",
           "__v": 0
       }
   ]
   ```
---

### **✅ 3. Delete an Employee (DELETE Request)**
1. Copy an employee’s `_id` from the previous **GET response**  
2. Open **Thunder Client**
3. Set **Method: `DELETE`**
4. Enter **URL:**  
   ```
   http://localhost:4000/employees/delete-emp/65dfc7ab8b3a2e0012a5c123
   ```
   _(Replace `65dfc7ab8b3a2e0012a5c123` with an actual `_id` from your database.)_  
5. Click **Send**  
6. ✅ You should get this response:
   ```json
   {
       "message": "Employee deleted successfully"
   }
   ```
7. Run **GET Request** again to check if the employee is gone.

---

## **🚀 Summary**
🔹 **Installed Thunder Client** in VS Code  
🔹 **Tested API requests**: `POST`, `GET`, `DELETE`  
🔹 **Checked responses** to confirm API is working  

Let me know if you need more practice tasks! 🚀🔥
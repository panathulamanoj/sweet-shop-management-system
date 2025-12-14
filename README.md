>### if You want to check deployed website 


###***Backend-api-url:https://sweet-shop-management-system-n6ho.onrender.com/***

###***FrontEnd-webapp-url:https://sweet-shop-management-system-n6ho.onrender.com/***

⚠️ **IMPORTANT:** Backend uses Render free tier. First request may take ~60 seconds.

Open backend URL once before accessing frontend,when it says api ready then you can access frontend-url and avoid cold start for first request

# Sweet Shop Management System

A full-stack web application to manage sweets inventory and allow users to purchase sweets online. Admins can edit, delete, and restock sweets. The project uses React + Vite for the frontend, Node.js + Express for the backend, and MongoDB as the database.

---
## 👤 User Functionality – Sweet Shop Management System

The Sweet Shop Management System provides a simple and user-friendly interface for customers to browse and purchase sweets, while ensuring smooth interaction with the backend services.

### 🔐 User Authentication
- Users can **register** with valid credentials.
- Registered users can **log in securely**
- Authentication ensures that only authorized users can  purchase sweets

### 🍬 Browse Sweets
- Users can view a list of available sweets with:
  - Sweet name
  - Category
  - Price
  - Available quantity
- Sweets are displayed in a clean, responsive card-based layout.

### 🔍 Search & Filter
- Users can:
  - Search sweets by name
  - Filter sweets by category
  - Filter sweets by price range using a slider
- These filters help users quickly find their desired items.

### 🛒 Purchase Sweets
- Users can select the **quantity** of sweets they want to purchase.
- The system automatically prevents purchases if the selected sweet is out of stock.
- On successful purchase:
  - Inventory quantity is updated
  - User receives immediate feedback

### ⏳ Backend Cold Start Handling
- The backend is hosted on a free-tier service (Render).
- On the **first request**, the server may take up to **60 seconds** to respond due to cold start.

### 📱 Responsive User Interface
- The application is fully responsive.
- Works smoothly on:
  - Desktop
  - Tablet
  - Mobile devices


This system ensures an intuitive and reliable experience for end users while maintaining data consistency and performance.


## Technologies Used

- Frontend: React, Vite, React Router DOM
- Backend: Node.js, Express, MongoDB, Mongoose
- Authentication: JWT
- Styling: CSS (custom), responsive design
- Deployment: Netlify (frontend)

---

## Features

- User authentication (login & registration)
- View available sweets with categories
- Purchase sweets with quantity selection
- Admin panel:
  - Edit sweet name and price
  - Delete sweets
  - Restock sweets
- Responsive design for mobile and desktop
- Interactive UI with styled buttons, forms, and navbar

---

## Setup Instructions

### Backend

1. Navigate to the backend folder:


###cd Backend

2.Install dependencies:

npm install

3.Create .env file (copy .env.example) and set your MongoDB URL:

MONGO_URL=<your_mongodb_connection_string>


JWT_SECRET=<your_secret_key>


PORT=3000

4.Start the backend server:

node server.js

Backend will run at http://localhost:3000

###Frontend

1.Navigate to the frontend folder:

cd Frontend/sweetsshop-management-system

2.Install dependencies:

npm install


3.Run the frontend in development mode:

npm run dev

Frontend will run at http://localhost:5173 (Vite default)

Screenshots

###users ui

![img alt](https://github.com/panathulamanoj/sweet-shop-management-system/blob/master/Screenshot%202025-12-14%20001027.png)

###login ui

![img alt](https://github.com/panathulamanoj/sweet-shop-management-system/blob/master/Screenshot%202025-12-14%20001042.png)

###register ui

![img alt](https://github.com/panathulamanoj/sweet-shop-management-system/blob/master/Screenshot%202025-12-14%20001052.png
)

###admin ui

![img alt](https://github.com/panathulamanoj/sweet-shop-management-system/blob/master/Screenshot%202025-12-14%20001209.png)

![img alt](https://github.com/panathulamanoj/sweet-shop-management-system/blob/master/Screenshot%202025-12-14%20001220.png)

###My AI Usage:

1.I used AI assistance (ChatGPT) for:

2.UI styling (forms, buttons, navbar, responsive design)

3.Deployment guidance for Netlify (Vite + React Router configuration)

4.Troubleshooting frontend and backend integration issues

5.Brainstorming authentication,authorization design using jwt

Test Report

| Feature           | Test Case                       | Result |
| ----------------- | ------------------------------- | ------ |
| User Registration | Register with valid credentials | Passed |
| User Login        | Login with valid credentials    | Passed |
| Purchase Sweet    | Select quantity, add to cart    | Passed |
| Admin Edit        | Edit sweet name and price       | Passed |
| Admin Delete      | Delete a sweet                  | Passed |
| Admin Restock     | Increase quantity               | Passed |
| Responsive UI     | Mobile and desktop layouts      | Passed |





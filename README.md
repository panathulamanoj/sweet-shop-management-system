>### if You want to check deployed website 


###***Backend-api-url:https://sweet-shop-management-system-n6ho.onrender.com/***

###***FrontEnd-webapp-url:https://sweet-shop-management-system-n6ho.onrender.com/***
⚠️ **IMPORTANT:** Backend uses Render free tier. First request may take ~60 seconds.

Open backend URL once before accessing frontend,when it says api ready then you can access frontend-url and avoid cold start for first request

# Sweet Shop Management System

A full-stack web application to manage sweets inventory and allow users to purchase sweets online. Admins can edit, delete, and restock sweets. The project uses React + Vite for the frontend, Node.js + Express for the backend, and MongoDB as the database.

---

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





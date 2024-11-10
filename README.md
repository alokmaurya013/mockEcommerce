---
# Mock E-commerce Website

A full-stack e-commerce web application built with React, Tailwind CSS for the frontend, and Node.js, Express, Nodemon, and MongoDB Atlas for the backend. This project demonstrates a basic e-commerce platform with product listings, product details, a checkout process, and payment success/failure pages.

---

## Features

- **Product Listing**: View a list of available products.
- **Product Detail**: View detailed information about each product.
- **Checkout**: Simulate checkout and payment flow.
- **Responsive UI**: Built with Tailwind CSS for a responsive design.
- **API Integration**: Uses a mock backend to fetch product data.
- **Payment Success/Failure**: Simulate a payment success and failure process.

---

## Technologies Used

### Frontend:
- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling the application.

### Backend:
- **Node.js**: JavaScript runtime for building server-side applications.
- **Express**: Web framework for building APIs and handling HTTP requests.
- **Nodemon**: Tool for automatically restarting the backend server during development.
- **MongoDB Atlas**: Cloud-based MongoDB service to store product data.

---

## Getting Started

Follow these steps to get your project up and running locally:

### 1. Clone the Repository

```bash
git clone https://github.com/alokmaurya013/mockEcommerce.git
```

### 2. Install Backend Dependencies

Navigate to the `backend` folder and install the required dependencies:

```bash
cd backend
npm install
```

### 3. Set Up MongoDB Atlas

- Create an account on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
- Set up a cluster and get your connection string (replace `<password>` with your database password).
- Update your `.env` file with the connection string:

```plaintext
MONGODB_URI=<your-mongodb-atlas-connection-string>
```

### 4. Start the Backend

In the `backend` folder, start the server using Nodemon:

```bash
npm run dev
```

The backend will be running at `http://localhost:5000`.

### 5. Install Frontend Dependencies

Navigate to the `frontend` folder and install the required dependencies:

```bash
cd frontend
npm install
```

### 6. Start the Frontend

In the `frontend` folder, start the React development server:

```bash
npm start
```

The frontend will be running at `http://localhost:3000`.

---

## API Endpoints

### GET /api/products
Fetch a list of all products.

**Response:**

```json
[
  {
    "_id": "product_id",
    "name": "Product Name",
    "description": "Product description",
    "price": 19.99,
    "image": "product-image-url"
  },
  ...
]
```

### GET /api/products/:id
Fetch the details of a single product by its ID.

**Response:**

```json
{
  "_id": "product_id",
  "name": "Product Name",
  "description": "Product description",
  "price": 19.99,
  "image": "product-image-url"
}
```

---

## Folder Structure

```
mockEcommerce/
│
├── backend/                # Backend API (Node.js + Express)
│   ├── controllers/        # Controllers for handling requests
│   ├── models/             # Mongoose models for database
│   ├── routes/             # API routes
│   ├── .env                # Environment variables
│   └── server.js           # Entry point for the backend server
│
├── frontend/               # Frontend application (React + Tailwind CSS)
│   ├── src/
│   │   ├── components/     # React components
│   │   └── App.js          # Main app file
│   ├── public/             # Public assets (index.html)
│   └── tailwind.config.js  # Tailwind CSS configuration
│
├── .gitignore              # Git ignore file
├── package.json            # Frontend and Backend dependencies and scripts
└── README.md               # Project documentation
```

---

## How to Contribute

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add feature'`).
5. Push to the branch (`git push origin feature-name`).
6. Open a pull request.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

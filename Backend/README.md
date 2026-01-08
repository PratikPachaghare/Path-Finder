# Career Guidance Backend

A Node.js backend for a career guidance web application that handles user authentication, assessment submissions, data storage, and career roadmap generation.

## Features

- User Authentication with JWT
- Career Assessment Module
- Career Path Prediction
- MongoDB Database Integration
- RESTful API Endpoints

## Tech Stack

- Node.js with Express.js
- MongoDB (MongoDB Atlas recommended)
- JWT Authentication
- Express Validator for input validation

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   JWT_EXPIRE=30d
   ```

### Running the Application

Development mode:
```
npm run dev
```

Production mode:
```
npm start
```

### Seeding the Database

To seed the database with sample assessment questions:
```
node utils/seedQuestions.js
```

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Authenticate user and get token
- `GET /api/auth/me` - Get current user profile

### Assessment

- `GET /api/assessment/questions` - Get all assessment questions
- `POST /api/assessment/submit` - Submit assessment responses
- `GET /api/assessment/results/:userId` - Get assessment results for a user

### Career Path

- `POST /api/career-path/generate` - Generate career path based on assessment
- `GET /api/career-path/:userId` - Get all career paths for a user
- `GET /api/career-path/detail/:id` - Get specific career path by ID

## Project Structure

```
├── config/             # Configuration files
├── controllers/        # Route controllers
├── middleware/         # Custom middleware
├── models/             # Mongoose models
├── routes/             # API routes
├── utils/              # Utility functions
├── .env                # Environment variables
├── server.js           # Entry point
└── package.json        # Dependencies
```
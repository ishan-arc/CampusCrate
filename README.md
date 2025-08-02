# CampusCrate - Lost & Found System for College

CampusCrate is a comprehensive Lost & Found platform designed specifically for college campuses. It helps students easily report lost items, post found items, and connect with each other to return belongings.

## Project Structure

```
CampusCrate/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── README.md
├── frontend/
│   ├── src/
│   │   └── pages/
│   ├── package.json
│   └── README.md
└── README.md (this file)
```

## Features

### For Students (Finders/Losers):
- Post Lost Items with detailed descriptions
- Post Found Items with location and time
- Search Lost/Found Listings with filters
- Claim Items with verification questions
- Messaging system for clarification
- QR Code / Tag-based return for ID cards
- Report Abuse functionality

### For Admins:
- Approve/reject posts to prevent spam
- Moderate reported abuse
- Verify item matches
- Manage user reports
- Block users who misuse the platform

## Tech Stack

- **Frontend**: React.js with React Router
- **Backend**: Node.js with Express
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT + Google OAuth
- **Image Storage**: Cloudinary (planned)
- **Deployment**: (Not yet configured)

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- Google OAuth credentials

### Backend Setup

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the backend directory with:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   GOOGLE_CLIENT_ID=your_google_oauth_client_id
   ```

4. Start the backend server:
   ```
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the React development server:
   ```
   npm start
   ```

## API Endpoints

- `POST /auth/google-login` - Google OAuth login
- `GET /items` - Get list of lost/found items with filters
- `POST /items` - Post a new lost/found item
- `PATCH /items/:id/status` - Update item status
- `POST /claim` - Create a claim for an item
- `POST /report` - Report abuse

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email [your-email@example.com] or open an issue in the repository.

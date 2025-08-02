# CampusCrate Backend

## Setup and Run

1. Navigate to the backend directory:
```
cd CampusCrate/backend
```

2. Install dependencies:
```
npm install
```

3. Create a `.env` file in the backend directory with the following variables:
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
GOOGLE_CLIENT_ID=your_google_oauth_client_id
```

4. Start the backend server in development mode:
```
npm run dev
```

The backend server will start on port 5000 by default.

## API Endpoints

- `POST /auth/google-login` - Google OAuth login
- `GET /items` - Get list of lost/found items with filters
- `POST /items` - Post a new lost/found item
- `PATCH /items/:id/status` - Update item status
- `POST /claim` - Create a claim for an item
- `POST /report` - Report abuse

# 📍 Bangalore Pincode Explorer

A full-stack application to search **Bangalore pincodes** and find their corresponding **area/post office names**.

## 🚀 Features

* Search Bangalore pincodes
* Display area/post office names
* Validate 6-digit pincodes
* Filter Bangalore/Bengaluru results
* MongoDB caching for repeated searches
* India Post Pincode API integration
* Responsive UI
* Error handling

## 🛠️ Tech Stack

**Frontend:** React.js, Vite, Axios, CSS
**Backend:** Node.js, Express.js, Axios
**Database:** MongoDB, Mongoose
**API:** India Post Pincode API

## 📁 Project Structure

```text
bangalore-pincode-explorer/
│
├── client/
│   └── src/
│       ├── components/
│       │   ├── SearchBar.jsx
│       │   └── PincodeCard.jsx
│       ├── App.jsx
│       └── App.css
│
├── server/
│   └── src/
│       ├── controllers/
│       │   └── pincodeController.js
│       ├── models/
│       │   └── Pincode.js
│       ├── routes/
│       │   └── pincodeRoutes.js
│       └── server.js
│
├── README.md
└── .gitignore
```

## 🔄 How It Works

```text
User enters pincode
        ↓
React Frontend
        ↓
Express Backend
        ↓
Check MongoDB
   ↓           ↓
Found       Not Found
 ↓             ↓
Return      India Post API
              ↓
        Filter Bangalore
              ↓
        Save to MongoDB
              ↓
        Return results
```

## 🔌 API

```http
GET /api/pincode/:pincode
```

Example:

```http
GET /api/pincode/560001
```

## ⚙️ Setup

### Backend

```bash
cd server
npm install
```

Create `.env`:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Run:

```bash
npm run dev
```

### Frontend

```bash
cd client
npm install
npm run dev
```

## 📸 Screenshots

### Home / Search

<!-- Add screenshot here -->

### Search Results

<!-- Add screenshot here -->

### Error Handling

<!-- Add screenshot here -->

## 👩‍💻 Author

**Dhrishti Shetty**
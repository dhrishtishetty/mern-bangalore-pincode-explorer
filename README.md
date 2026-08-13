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
├── frontend/
│   └── src/
│       ├── components/
│       │   ├── SearchBar.jsx
│       │   └── PincodeCard.jsx
│       ├── App.jsx
│       └── App.css
│       └── index.css
│       └── main.jsx
│
├── backend/
│   └── src/
│       ├── controllers/
│       │   └── pincodeController.js
│       ├── models/
│       │   └── Pincode.js
│       ├── routes/
│       │   └── pincodeRoutes.js
│       └── index.js
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

<img width="1917" height="1011" alt="Screenshot 2026-08-13 162307" src="https://github.com/user-attachments/assets/b33d7505-2c7c-46a3-a16e-036ce0c7e33c" />


### Search Results

<img width="1917" height="1017" alt="image" src="https://github.com/user-attachments/assets/4458633e-6d4f-4bc3-b364-ce7eafac2e1d" />


### Error Handling

<img width="1917" height="1015" alt="image" src="https://github.com/user-attachments/assets/4aae2807-4720-43ea-8786-ebd13f6c5ae1" />


## 👩‍💻 Author

**Dhrishti Shetty**

# 🤖 AI Virtual Assistant

A full-stack, voice-enabled AI Virtual Assistant built with the **MERN stack**, powered by **Google Gemini AI**. Talk to your own personalized assistant — customize its name and image, ask it questions, and let it perform actions like searching Google, playing YouTube videos, opening apps, and more — all through natural voice commands.

---

## ✨ Features

- 🎙️ **Voice Input + Output** — Talks and listens like JARVIS, using the Web Speech API
- 🧠 **Smart AI Replies** — Powered by Google Gemini for natural, context-aware responses
- 🔐 **Secure Authentication** — JWT + bcryptjs based Login/Signup system
- 🖼️ **Custom Assistant Image** — Upload your own image or choose from preset avatars
- 📝 **Custom Assistant Name** — Personalize your assistant's identity
- 🔍 **Voice Commands** — Google Search, YouTube Search/Play, Instagram, Facebook, Calculator, Weather, Time, Date, Day, Month
- 📜 **Conversation History** — Keeps track of past interactions
- 📱 **Fully Responsive** — Works seamlessly across desktop and mobile
- 🚀 **Fully Deployed** — Frontend on Vercel, Backend on Render

---

## 🖼️ Screenshots

### Sign Up Page
![Sign Up Page](./screenshots/signup.png)

### Customize Assistant Image
![Customize Assistant](./screenshots/customize.png)

---

## 🛠️ Tech Stack

**Frontend**
- React (Vite)
- Tailwind CSS
- Axios
- React Router DOM
- React Icons

**Backend**
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT (JSON Web Token)
- bcryptjs
- Cloudinary (image uploads)

**AI**
- Google Gemini API (REST)

**Deployment**
- Frontend → Vercel
- Backend → Render

---

## 📂 Project Structure

```
AI-Virtual-Assistant/
├── backend/
│   ├── config/          # DB & Cloudinary configuration
│   ├── controller/       # Route controllers (auth, user, assistant)
│   ├── middlewares/      # Auth middleware
│   ├── model/             # Mongoose schemas
│   ├── routes/            # API routes
│   ├── gemini.js         # Gemini AI integration
│   └── index.js           # App entry point
│
├── frontend/
│   ├── src/
│   │   ├── assets/        # Images & GIFs
│   │   ├── components/    # Reusable UI components
│   │   ├── context/        # UserContext (global state)
│   │   ├── pages/           # SignUp, SignIn, Home, Customize, Customize2
│   │   └── App.jsx
│   └── vercel.json
│
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js installed
- MongoDB Atlas account (or local MongoDB)
- Google Gemini API key
- Cloudinary account (for image uploads)

### 1. Clone the repository
```bash
git clone https://github.com/roshani9324/Ai-Virtual-Assistant.git
cd Ai-Virtual-Assistant
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file inside `backend/`:
```
PORT=8000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

Run the backend:
```bash
npm run dev
```

### 3. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

The app will be available at `http://localhost:5173`

---

## 🗣️ How It Works

1. **Sign up / Sign in** to create your account
2. **Customize your assistant** — choose a preset image or upload your own, and give it a name
3. On the **Home page**, say your assistant's name followed by a command
   - *"[AssistantName], what's the time?"*
   - *"[AssistantName], open YouTube and play [song name]"*
   - *"[AssistantName], search for [topic] on Google"*
4. Your assistant listens, understands intent via Gemini AI, responds with voice, and performs the requested action (opens a new tab, tells the time, etc.)

---

## 🚀 Live Demo

- **Frontend:** [ai-virtual-assistant-smoky.vercel.app](https://ai-virtual-assistant-smoky.vercel.app)

---

## 📌 Notes

- This project uses the browser's **Web Speech API**, so microphone permissions must be allowed for voice features to work.
- The backend is deployed on Render's free tier, so the first request after inactivity may take a few seconds to respond (cold start).

---

## 👩‍💻 Author

**Roshani Maurya**
Building this as a major project — a personal AI Virtual Assistant with the MERN stack.

---

## 📄 License

This project is open source and available for learning purposes.

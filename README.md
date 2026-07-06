# AI Job Tracker

## Project Description

AI Job Tracker is a full-stack web application that helps users manage their job applications. Users can create, update, delete, and track applications with different statuses such as Applied, Interviewing, Offered, and Rejected. The application also includes AI-powered features using the Gemini API.

### Tech Stack
- Frontend: React + Vite
- Backend: Node.js + Express
- Database: PostgreSQL (Neon)
- AI: Google Gemini API
- Deployment:
  - Frontend: Vercel
  - Backend: Render

### Key Architectural Decisions
- Separate frontend and backend for better scalability.
- REST API built with Express.
- PostgreSQL used for reliable data storage.
- Environment variables used for secure configuration.
- AI functionality integrated through Gemini API.

---

## Setup Instructions

Run these **exactly 3 commands**:

```bash
git clone <your-github-repository-url>
```

```bash
cd <project-folder>
```

```bash
npm install && npm run dev
```

---

## Environment Variables

Create a `.env` file using `.env.example`.

Example:

```env
DATABASE_URL=your_neon_database_url
GEMINI_API_KEY=your_gemini_api_key
PORT=5000
```

---

## Live URLs

  Frontend: https://internshiptask-lyart.vercel.app/
  Backend: https://internshiptask-l7lm.onrender.com

---

## Loom Walkthrough

https://www.loom.com/share/your-video-link

---

## Future Improvement

Given more time, I would implement user authentication and authorization using JWT so that every user can securely manage only their own job applications. This would improve both security and scalability of the application.
  

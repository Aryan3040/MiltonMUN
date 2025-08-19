# Milton Model UN Website

A full-stack web application for the Milton High School Model United Nations chapter, featuring user delegate accounts with AI-powered agents and administrative document management.

## Features

- **Frontend**: React-based interface with glassmorphic design and responsive layout
- **Backend**: Python FastAPI with Uvicorn server
- **Database**: PostgreSQL with Alembic migrations
- **AI Integration**: Azure Semantic Kernel agents for each delegate
- **Authentication**: JWT-based user management with role-based access
- **Document Management**: File upload system for waivers and position papers

## Tech Stack

### Frontend
- React 18
- TypeScript
- Vite (build tool)
- CSS3 with glassmorphism effects
- Responsive design (mobile, laptop, desktop)

### Backend
- Python 3.11+
- FastAPI
- Uvicorn (ASGI server)
- SQLAlchemy (ORM)
- Alembic (database migrations)
- JWT authentication
- Azure Semantic Kernel
- Groq API integration

### Database
- PostgreSQL
- Async SQLAlchemy
- Alembic migrations

## Project Structure

```
milmun/
├── frontend/          # React frontend application
├── backend/           # FastAPI backend application
├── README.md          # This file
└── .gitignore         # Git ignore rules
```

## Setup Instructions

### Prerequisites
- Python 3.11+
- Node.js 18+
- PostgreSQL
- Azure account (for Semantic Kernel)
- Groq API key

### Backend Setup
1. Navigate to backend directory:
   ```bash
   cd backend
   ```

2. Create virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Set up environment variables in `.env`:
   ```
   DATABASE_URL=postgresql+asyncpg://username:password@localhost/milmun
   JWT_SECRET_KEY=your-secret-key
   AZURE_OPENAI_ENDPOINT=your-azure-endpoint
   GROQ_API_KEY=your-groq-api-key
   GROQ_MODEL=openai/gpt-oss-20b
   GROQ_BASE_URL=https://api.groq.com/openai/v1
   ```

5. Set up database:
   ```bash
   # Create database and user
   sudo -u postgres psql
   CREATE USER milmun_user WITH PASSWORD 'your_password';
   CREATE DATABASE milmun OWNER milmun_user;
   \q
   
   # Run migrations
   alembic upgrade head
   ```

6. Start backend server:
   ```bash
   uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
   ```

### Frontend Setup
1. Navigate to frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Usage

- **Home Page**: Hero section with school image, navigation, and feature cards
- **About Us**: Leadership information and chapter details
- **Contact Us**: Contact form for inquiries
- **Sign In/Sign Up**: User authentication system
- **Delegate Dashboard**: Personal AI agent and conference resources (in development)
- **Admin Panel**: Document management for head delegate (in development)

## Development

The application uses a modular architecture with separate frontend and backend services. The frontend communicates with the backend via REST API endpoints, and the backend integrates with Azure Semantic Kernel for AI capabilities.

## License

This project is proprietary to Milton High School Model UN chapter.

## Contributing

Development is managed by the Milton MUN leadership team. For questions or issues, contact the head delegate.

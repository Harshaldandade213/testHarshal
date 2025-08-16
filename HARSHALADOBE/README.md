# HARSHALADOBE - PDF Reader & Analysis Tool

A modern PDF reader and analysis tool built with React, TypeScript, and Python FastAPI backend. This version has been simplified for hackathon use by removing authentication requirements.

## Features

- **PDF Reading**: Advanced PDF viewer with Adobe PDF Embed API integration
- **Document Analysis**: AI-powered document analysis and insights
- **Text Highlighting**: Interactive text highlighting and annotation
- **Strategic Insights**: AI-generated strategic insights and cross-connections
- **Accessibility**: Built-in accessibility features and text simplification
- **Podcast Generation**: Convert documents to audio podcasts
- **Reading Analytics**: Track reading progress and analytics
- **Smart Bookmarks**: Intelligent bookmarking system

## Tech Stack

### Frontend
- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- Shadcn/ui components
- React Router for navigation
- TanStack Query for data fetching

### Backend
- Python FastAPI
- PDF processing and analysis
- AI/LLM integration
- Text-to-speech capabilities

## Quick Start

### Prerequisites
- Node.js 18+ 
- Python 3.8+
- npm or yarn

### Frontend Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The frontend will be available at `http://localhost:5173`

### Backend Setup
```bash
# Navigate to backend directory
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Start backend server
python start.py
```

The backend will be available at `http://localhost:8000`

## Usage

1. Open the application in your browser
2. Upload PDF documents through the landing page
3. Configure your reading persona and goals
4. Start reading with AI-powered insights and tools
5. Use the various panels for enhanced reading experience

## Project Structure

```
HARSHALADOBE/
├── src/
│   ├── components/     # React components
│   ├── pages/         # Page components
│   ├── lib/           # Utilities and API
│   └── hooks/         # Custom React hooks
├── backend/
│   ├── app/           # FastAPI application
│   ├── uploads/       # Document storage
│   └── audio_cache/   # Audio file cache
└── public/            # Static assets
```

## Key Differences from Original

- **No Authentication**: Removed Firebase authentication and user management
- **Simplified Access**: Direct access to all features without login
- **Hackathon Ready**: Streamlined for quick setup and demo

## Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Environment Variables
No environment variables required for basic functionality.

## Contributing

This is a hackathon project. Feel free to modify and extend as needed for your demo!

## License

This project is created for hackathon purposes.

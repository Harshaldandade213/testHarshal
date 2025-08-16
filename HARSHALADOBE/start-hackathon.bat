@echo off
echo Starting HARSHALADOBE for Hackathon...
echo.

echo Starting Backend Server...
cd backend
start "Backend Server" cmd /k "venv\Scripts\activate && python start.py"

echo.
echo Starting Frontend Server...
cd ..
start "Frontend Server" cmd /k "npm run dev"

echo.
echo Both servers are starting...
echo Backend will be available at: http://localhost:8000
echo Frontend will be available at: http://localhost:5173
echo.
echo Press any key to close this window...
pause > nul

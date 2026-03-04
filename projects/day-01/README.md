# System Performance Dashboard (Day 1 MVP)

A real-time, terminal-based dashboard for monitoring system resources (CPU, Memory, Disk I/O, Network). Built with Python for data collection and a lightweight web frontend (Next.js) for visualization.

## Features
- **Real-time Metrics**: Live updates every second.
- **Clean UI**: Minimalist, responsive design.
- **Zero Setup**: Runs with a single command.

## Architecture
```
[Python Backend] <-- (WebSocket) --> [Next.js Frontend]
       ^
       |
[System APIs]
```

## Screenshots
*(To be generated on first run)*

## Getting Started
```bash
git clone <repo-url>
cd system-performance-dashboard
npm install && pip install -r requirements.txt
npm run dev
```
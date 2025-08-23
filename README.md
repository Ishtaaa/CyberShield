# CyberShield - AI-Powered Cybersecurity Learning Platform

A comprehensive cybersecurity learning platform with AI-powered mentorship, interactive labs, and real-time guidance.

## Features

- 🤖 **AI Cybersecurity Mentor** - Get personalized guidance from an AI expert
- 🧪 **Interactive Learning Labs** - Hands-on cybersecurity exercises
- 💻 **Code Review** - AI-powered security code analysis
- 📚 **Learning Paths** - Structured learning for different skill levels
- 🔒 **Security Focus** - Emphasis on ethical hacking and responsible disclosure

## Setup

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Gemini API key

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd cybershield
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp env.example .env
```

4. Edit `.env` and add your Gemini API key:
```env
# Gemini API Configuration
# Get your API key from: https://makersuite.google.com/app/apikey
GEMINI_API_KEY=your_gemini_api_key_here

# Environment
NODE_ENV=development

# Optional: Customize Gemini settings
# GEMINI_MODEL=gemini-2.0-flash
# GEMINI_MAX_TOKENS=1000
# GEMINI_TEMPERATURE=0.7
```

### Running the Application

1. Start the development server:
```bash
npm run dev
```

2. Open your browser and navigate to `http://localhost:5173`

3. Check API health:
```bash
curl http://localhost:5173/api/health
```

## API Endpoints

### Chat API
- `POST /api/chat` - General chat with AI assistant
- `POST /api/mentor` - Specialized mentor interactions
- `GET /api/health` - Health check and configuration status

### Mentor API Types
- `mentor` - General cybersecurity mentoring
- `lab_guidance` - Lab-specific guidance
- `code_review` - Security code review

## Architecture

### AI Integration
- Uses Gemini API with OpenAI compatibility layer
- Configurable models (Gemini 2.0 Flash, Gemini 2.0 Pro, Gemini 1.5 Flash)
- Rate limiting and retry logic
- Comprehensive error handling

### Frontend
- SvelteKit for modern web development
- Tailwind CSS for styling
- DaisyUI components for UI
- Real-time chat interface

### Backend
- SvelteKit API routes
- Environment-based configuration
- Type-safe API responses
- Health monitoring

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Type checking
- `npm run lint` - Linting
- `npm run test` - Run tests

### Project Structure

```
src/
├── lib/
│   ├── ai/           # AI integration
│   │   ├── openai.ts # Gemini API client
│   │   ├── chat.ts   # Chat store
│   │   ├── mentor.ts # Mentor store
│   │   └── config.ts # AI configuration
│   └── config.ts     # App configuration
├── routes/
│   ├── api/          # API endpoints
│   │   ├── chat/     # Chat API
│   │   ├── mentor/   # Mentor API
│   │   └── health/   # Health check
│   └── ...           # Page routes
└── components/       # Svelte components
```

## Security Considerations

- API keys are stored in environment variables
- No sensitive data is exposed to the client
- Rate limiting prevents API abuse
- Input validation on all endpoints
- Error messages don't expose sensitive information

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

# 🛡️ CyberShield - Cybersecurity Learning Platform

A modern, interactive cybersecurity learning platform built with SvelteKit, featuring dual themes, comprehensive learning resources, and AI-powered cybersecurity mentorship through OpenAI API integration.

## ✨ Features

- **Dual Theme System**: 
  - 💖 Valentine Theme: Pinky, off-white color scheme
  - 🤖 Cyberpunk Theme: Blue, futuristic color scheme
- **Responsive Design**: Mobile-first approach with DaisyUI components
- **Interactive Learning**: Hands-on labs and practical exercises
- **Progress Tracking**: Monitor your cybersecurity learning journey
- **Comprehensive Documentation**: Downloadable guides and resources
- **🤖 AI-Powered Chatbot**: Floating chat interface with OpenAI GPT integration
- **🎓 AI Cybersecurity Mentor**: Personalized guidance and instruction within learning labs
- **🔒 Real-time Security Insights**: AI-powered threat analysis and recommendations

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- OpenAI API Key (for AI features)

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

3. Set up configuration:
```bash
# Copy the configuration template
cp src/lib/config.template.ts src/lib/config.ts

# Edit src/lib/config.ts and add your OpenAI API key
# Get your API key from: https://platform.openai.com/api-keys
# 
# IMPORTANT: Never commit your actual API key to version control!
# The config.ts file is already added to .gitignore for security.
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

## 🎨 Theme System

The application features two distinct themes that persist across page refreshes:

- **Valentine Theme**: Soft, romantic color palette perfect for comfortable reading
- **Cyberpunk Theme**: High-contrast, futuristic design for immersive learning

Switch between themes using the theme switcher in the header navigation.

## 🤖 AI Integration Features

### Floating Chatbot
- **Always Accessible**: Floating chat button in the bottom-right corner
- **Context-Aware**: Understands cybersecurity topics and user progress
- **Direct AI Integration**: Simple OpenAI API calls for immediate responses
- **Error Handling**: Graceful error handling with user-friendly messages

### AI Cybersecurity Mentor
- **Personalized Learning Paths**: AI-driven recommendations based on user progress
- **Interactive Lab Guidance**: Step-by-step assistance during practical exercises
- **Threat Intelligence**: Real-time updates on emerging cybersecurity threats
- **Code Review**: AI-powered analysis of security-related code submissions
- **Vulnerability Assessment**: Automated scanning and explanation of security issues
- **Session Management**: Persistent learning sessions with progress tracking
- **Adaptive Difficulty**: AI adjusts complexity based on user performance



### AI-Powered Features
- **Smart Content Curation**: Personalized learning materials based on user interests
- **Progress Analytics**: AI-driven insights into learning patterns and areas for improvement
- **Security Quiz Generation**: Dynamic quiz creation based on user skill level
- **Incident Response Simulation**: AI-generated realistic cybersecurity scenarios
- **Health Monitoring**: Real-time AI service status monitoring
- **Retry Logic**: Automatic retry with exponential backoff for failed requests

## 📚 Learning Content

### Learning Paths
- **Beginner**: Cybersecurity fundamentals and basic concepts
- **Intermediate**: Penetration testing and vulnerability assessment
- **Advanced**: Malware analysis and threat intelligence

### Interactive Lab Environment
- **Secure Lab Environment**: Isolated, safe environment for hands-on cybersecurity training
- **Real-time Lab Status**: Monitor lab performance, security, and availability
- **Laptop Mockup Interface**: Intuitive visual interface using DaisyUI components
- **AI-Powered Guidance**: Get assistance and guidance during lab exercises

### AI-Enhanced Learning Modules
- **Adaptive Difficulty**: AI adjusts complexity based on user performance
- **Personalized Feedback**: Customized guidance for each learning objective
- **Real-world Scenarios**: AI-generated realistic cybersecurity challenges
- **Collaborative Learning**: AI-facilitated group exercises and discussions

## 🛠️ Built With

- **SvelteKit** - Full-stack web framework
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Component library for Tailwind CSS
- **TypeScript** - Type-safe JavaScript
- **OpenAI API** - GPT integration for AI-powered features
- **Vercel AI SDK** - Streamlined AI integration
- **WebSocket** - Real-time chat functionality

## 📁 Project Structure

```
cybershield/
├── src/
│   ├── lib/
│   │   ├── theme.ts          # Theme management
│   │   ├── navigation.ts     # Navigation configuration
│   │   ├── themes.css        # Custom theme colors
│   │   ├── config.ts         # Local configuration (API keys)
│   │   ├── config.template.ts # Configuration template
│   │   ├── ai/
│   │   │   ├── chat.ts       # Chatbot functionality
│   │   │   ├── mentor.ts     # AI mentor integration
│   │   │   ├── openai.ts     # OpenAI API utilities
│   │   │   └── config.ts     # AI configuration and utilities
│   │   └── assets/           # Static assets
│   ├── routes/
│   │   ├── +layout.svelte    # Root layout
│   │   ├── +page.svelte      # Landing page
│   │   ├── Header.svelte     # Navigation header
│   │   ├── About Us/         # About page
│   │   ├── Learning Lab/     # Learning content
│   │   └── api/
│   │       ├── chat/+server.ts # Chat API endpoint
│   │       ├── mentor/+server.ts # Mentor API endpoint
│   │       └── health/+server.ts # Health check endpoint
│   ├── components/
│   │   ├── ChatBot.svelte    # Floating chatbot component
│   │   ├── AIMentor.svelte   # AI mentor interface
│   │   ├── ErrorBoundary.svelte # Error handling component
│   │   ├── LoadingSpinner.svelte # Loading component
│   │   └── AIStatusMonitor.svelte # AI service status monitor
│   └── app.css               # Global styles
├── static/                   # Static files
├── .gitignore               # Git ignore rules
└── package.json
```

## 🎯 Key Components

### Theme Store (`src/lib/theme.ts`)
- Manages theme state with localStorage persistence
- Provides theme switching functionality
- Automatically applies themes on page load

### Navigation (`src/lib/navigation.ts`)
- Centralized navigation configuration
- Supports nested navigation items
- Easy to maintain and update

### Header Component
- Responsive navigation with mobile menu
- Theme switcher with visual indicators
- Active page highlighting

### AI Integration (`src/lib/ai/`)
- **Chat System**: Manages conversation state and OpenAI API calls
- **Mentor Engine**: Provides contextual cybersecurity guidance
- **API Utilities**: Handles OpenAI authentication and request formatting

### Chatbot Component
- Floating interface with smooth animations
- Real-time message streaming
- Context-aware responses
- File upload support for code review
- Error handling with retry mechanisms
- Rate limiting and request management

### Error Handling Components
- **ErrorBoundary**: Graceful error display with retry options
- **LoadingSpinner**: Consistent loading states across the application
- **AIStatusMonitor**: Real-time monitoring of AI service health

### Enhanced AI Integration
- **Rate Limiting**: Prevents API abuse and ensures smooth operation
- **Retry Logic**: Automatic retry with exponential backoff
- **Health Monitoring**: Continuous monitoring of AI service status
- **Configuration Management**: Centralized AI configuration and model management



## 📱 Responsive Design

The application is fully responsive with:
- Mobile-first design approach
- Collapsible navigation menu
- Optimized layouts for all screen sizes
- Touch-friendly interactions
- Adaptive chatbot positioning


**CyberShield** was developed for the GirlCode hackathon, focusing on:

- **Innovation**: First-of-its-kind AI-powered cybersecurity learning platform
- **Accessibility**: Dual themes and responsive design for all users
- **Education**: Comprehensive cybersecurity curriculum with hands-on labs
- **AI Integration**: OpenAI-powered chatbot and mentor for personalized learning
- **Real-world Application**: Practical skills for cybersecurity professionals

### Technical Achievements
- **Full-stack SvelteKit application** with TypeScript
- **AI-powered learning assistance** using OpenAI GPT
- **Real-time chat system** with WebSocket integration
- **Responsive design** with dual theme system
- **Comprehensive security labs** with AI guidance

---

**CyberShield** - Empowering the next generation of cybersecurity professionals with AI-powered learning 🛡️🤖

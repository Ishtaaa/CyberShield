# 🛡️ CyberShield - Cybersecurity Learning Platform

A modern, interactive cybersecurity learning platform built with SvelteKit, featuring dual themes and comprehensive learning resources.

## ✨ Features

- **Dual Theme System**: 
  - 💖 Valentine Theme: Pinky, off-white color scheme
  - 🤖 Cyberpunk Theme: Blue, futuristic color scheme
- **Responsive Design**: Mobile-first approach with DaisyUI components
- **Interactive Learning**: Hands-on labs and practical exercises
- **Progress Tracking**: Monitor your cybersecurity learning journey
- **Comprehensive Documentation**: Downloadable guides and resources

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

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

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🎨 Theme System

The application features two distinct themes that persist across page refreshes:

- **Valentine Theme**: Soft, romantic color palette perfect for comfortable reading
- **Cyberpunk Theme**: High-contrast, futuristic design for immersive learning

Switch between themes using the theme toggle in the header navigation.

## 📚 Learning Content

### Learning Paths
- **Beginner**: Cybersecurity fundamentals and basic concepts
- **Intermediate**: Penetration testing and vulnerability assessment
- **Advanced**: Malware analysis and threat intelligence

### Interactive Labs
- Password Cracking Lab
- Web Application Security
- Network Reconnaissance
- Malware Analysis (Coming Soon)

## 🛠️ Built With

- **SvelteKit** - Full-stack web framework
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Component library for Tailwind CSS
- **TypeScript** - Type-safe JavaScript

## 📁 Project Structure

```
cybershield/
├── src/
│   ├── lib/
│   │   ├── theme.ts          # Theme management
│   │   ├── navigation.ts     # Navigation configuration
│   │   ├── themes.css        # Custom theme colors
│   │   └── assets/           # Static assets
│   ├── routes/
│   │   ├── +layout.svelte    # Root layout
│   │   ├── +page.svelte      # Landing page
│   │   ├── Header.svelte     # Navigation header
│   │   ├── About Us/         # About page
│   │   └── Learning Lab/     # Learning content
│   └── app.css               # Global styles
├── static/                   # Static files
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

## 🔧 Customization

### Adding New Themes
1. Define color variables in `src/lib/themes.css`
2. Add theme option to `src/lib/theme.ts`
3. Update the theme switcher in `Header.svelte`

### Adding New Pages
1. Create new route folder in `src/routes/`
2. Add navigation item to `src/lib/navigation.ts`
3. Update header navigation if needed

## 📱 Responsive Design

The application is fully responsive with:
- Mobile-first design approach
- Collapsible navigation menu
- Optimized layouts for all screen sizes
- Touch-friendly interactions

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Check the documentation in the About Us section
- Review the learning materials in the Learning Lab

---

**CyberShield** - Empowering the next generation of cybersecurity professionals 🛡️

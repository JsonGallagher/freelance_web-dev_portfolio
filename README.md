# Freelance Portfolio Website

A modern, production-quality React portfolio website for web developers and freelancers. Built with Vite, React, and Tailwind CSS.

![React](https://img.shields.io/badge/React-18.2-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38bdf8)
![Vite](https://img.shields.io/badge/Vite-5.1-646cff)

🔗 **Live Site:** [freelance-web-dev.netlify.app](https://freelance-web-dev.netlify.app/)

## ✨ Features

- **Responsive Design**: Looks great on mobile, tablet, and desktop
- **Single Page Application**: Smooth scrolling navigation between sections
- **Contact Form**: Client-side validation with error handling
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation, focus states
- **Modern Stack**: React 18 with functional components and hooks
- **Performance**: Optimized with Vite for fast development and builds
- **Customizable**: Easy to modify colors, content, and sections

## 📁 Project Structure

```
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Sticky navigation with mobile menu
│   │   ├── Hero.jsx          # Hero section with CTAs
│   │   ├── Services.jsx      # Services grid
│   │   ├── Portfolio.jsx     # Project showcase
│   │   ├── About.jsx         # Bio and skills
│   │   ├── Process.jsx       # How I work steps
│   │   ├── Testimonials.jsx  # Client quotes
│   │   ├── Contact.jsx       # Contact form with validation
│   │   └── Footer.jsx        # Footer with links
│   ├── data/
│   │   ├── services.js       # Service offerings data
│   │   ├── projects.js       # Portfolio projects data
│   │   ├── testimonials.js   # Client testimonials data
│   │   ├── process.js        # Process steps data
│   │   └── navigation.js     # Nav links configuration
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # Entry point
│   └── index.css             # Tailwind + custom styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Visit `http://localhost:5173` to view locally.

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to change the color palette:

```js
accent: {
  500: '#3b82f6',  // Electric Blue (current)
  600: '#2563eb',
}
```

### Content

Update your info in these files:

- `src/data/*.js` - Services, projects, testimonials
- `src/components/About.jsx` - Bio and skills
- `src/components/Hero.jsx` - Headline and value proposition
- `src/components/Contact.jsx` - Email and location
- `src/components/Footer.jsx` - Social links
- `index.html` - Page title and meta description

### Fonts

1. Update Google Fonts import in `index.html`
2. Update `fontFamily` in `tailwind.config.js`

## 🚀 Deployment

This site auto-deploys to Netlify on every push to `main`.

To deploy your own:

1. Push to GitHub
2. Connect repo to [Netlify](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `dist`

## 📝 Future Enhancements

- [ ] Connect contact form to backend (Formspree/EmailJS)
- [ ] Add real project images
- [ ] Dark mode toggle
- [ ] Blog section with MDX
- [ ] Analytics integration

## 📄 License

MIT License - feel free to use this template for your own portfolio.

---

Built with ♥ using React + Tailwind CSS

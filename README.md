# Freelance Portfolio Website

A modern, production-quality React portfolio website for web developers and freelancers. Built with Vite, React, and Tailwind CSS.

![React](https://img.shields.io/badge/React-18.2-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38bdf8)
![Vite](https://img.shields.io/badge/Vite-5.1-646cff)

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
freelance-portfolio/
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
├── postcss.config.js
└── README.md
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Navigate to project directory:**
   ```bash
   cd freelance-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` folder, ready to deploy.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Customization Guide

### 1. Update Your Information

Replace placeholder content in these files:

- **`index.html`**: Update `<title>` and meta description
- **`src/data/*.js`**: Update all data files with your content
- **`src/components/About.jsx`**: Your bio, skills, and experience
- **`src/components/Hero.jsx`**: Your headline and value proposition
- **`src/components/Contact.jsx`**: Your email and location
- **`src/components/Footer.jsx`**: Your social links

### 2. Customize Colors

Edit `tailwind.config.js` to change the color palette:

```js
colors: {
  primary: {
    // Dark charcoal palette - change these hex values
    500: '#706b62',
    900: '#1a1918',
    // ...
  },
  accent: {
    // Coral/terracotta accent - change these hex values
    500: '#ef6b4a',
    600: '#dc4f2c',
    // ...
  }
}
```

### 3. Change Fonts

1. Update the Google Fonts import in `index.html`
2. Update `fontFamily` in `tailwind.config.js`

### 4. Add Real Project Images

Replace the gradient placeholders in `Portfolio.jsx` with actual images:

```jsx
<img 
  src="/images/project-name.jpg" 
  alt="Project description"
  className="w-full h-full object-cover"
/>
```

### 5. Connect Contact Form to Backend

Replace the `console.log` in `Contact.jsx` with your preferred method:

```jsx
// Option 1: Formspree
const response = await fetch('https://formspree.io/f/YOUR_ID', {
  method: 'POST',
  body: JSON.stringify(formData),
  headers: { 'Content-Type': 'application/json' }
})

// Option 2: EmailJS
// Option 3: Your own API endpoint
```

## 🔧 Key Concepts Explained

### Smooth Scrolling

Enabled via CSS in `index.css`:
```css
html {
  scroll-behavior: smooth;
}
```

Navigation links use anchor hrefs (`#services`, `#contact`) that scroll to section IDs.

### Form Validation

The contact form uses controlled components with React state:
- `useState` tracks form data and errors
- Validation runs on submit
- Errors display inline with ARIA attributes for accessibility

### Responsive Design

Uses Tailwind's responsive prefixes:
- `md:` applies at 768px+
- `lg:` applies at 1024px+

Example: `grid md:grid-cols-2 lg:grid-cols-3`

### Component Organization

Each section is a separate component for:
- Easier maintenance
- Better readability
- Reusability
- Clear separation of concerns

### Data-Driven Components

Content is stored in `/src/data/` and mapped to UI:
```jsx
{services.map(service => (
  <ServiceCard key={service.id} service={service} />
))}
```

This makes content updates easy without touching component logic.

## 📝 Future Enhancements

Ideas for extending the site:

1. **Blog Section**: Add MDX support for blog posts
2. **CMS Integration**: Connect to Sanity, Contentful, or Strapi
3. **Dark Mode**: Add theme toggle with localStorage
4. **Animations**: Add scroll-triggered animations with Intersection Observer
5. **Analytics**: Integrate Google Analytics or Plausible
6. **SEO**: Add React Helmet for dynamic meta tags

## 🤝 Contributing

Feel free to fork and modify for your own use!

## 📄 License

MIT License - feel free to use this template for your own portfolio.

---

Built with ♥ using React + Tailwind CSS

# Harsh - Professional Portfolio Website

A modern, high-end digital portfolio website built with React.js, Tailwind CSS, and Framer Motion. Features a sleek dark mode design with smooth animations and fully responsive layout.

## 🎨 Features

- **Dark Mode Default** with Light Mode Toggle
- **Smooth Animations** powered by Framer Motion
- **Typing Animation** in Hero section
- **Fully Responsive** design for mobile and desktop
- **Tech-forward Aesthetics** with glassmorphism and gradients
- **Modular Component Structure** for easy customization
- **SEO Optimized** with proper meta tags
- **Accessibility Focused** with semantic HTML

## 📋 Sections

1. **Header** - Navigation with theme toggle
2. **Hero** - Bold intro with typing animation
3. **About** - Background and expertise overview
4. **Skills** - Tech stack and proficiencies
5. **Projects** - Featured work and case studies
6. **Experience** - Education and achievements
7. **Contact** - Message form and social links
8. **Footer** - Credits and quick links

## 🛠️ Tech Stack

- **Frontend Framework**: React.js
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Build Tool**: Create React App

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd harsh-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000`

## 🏗️ Project Structure

```
harsh-portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Skills.js
│   │   ├── Projects.js
│   │   ├── Experience.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

## 🎯 Customization

### Change Personal Information

Edit the following files to update your information:
- **Header.js** - Navigation links
- **Hero.js** - Tagline and description
- **About.js** - Your background
- **Skills.js** - Add your technologies
- **Projects.js** - Your project details
- **Experience.js** - Education and achievements
- **Contact.js** - Email and phone number
- **Footer.js** - Additional info

### Customize Colors

Modify `tailwind.config.js` to change the color scheme:
```javascript
colors: {
  primary: {
    // Customize gradient colors
  },
}
```

### Add Social Links

Update the `socialLinks` array in `Contact.js` with your social media profiles.

## 🚀 Deployment

### Build for Production:
```bash
npm run build
```

### Deploy to Popular Platforms:

**Vercel:**
```bash
npm install -g vercel
vercel
```

**Netlify:**
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=build
```

**GitHub Pages:**
Update `package.json` with your repository:
```json
"homepage": "https://yourusername.github.io/harsh-portfolio"
```

Then deploy:
```bash
npm run build
npm install -g gh-pages
gh-pages -d build
```

## 📲 Responsive Design

- **Mobile First**: Design optimized for mobile devices
- **Tablet Friendly**: Smooth layout transitions
- **Desktop Experience**: Full feature set with enhanced visuals

## ⚡ Performance Optimizations

- Lazy component loading with scroll triggers
- Optimized animations using Framer Motion
- CSS-in-JS with Tailwind for minimal bundle size
- Image optimization ready

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Runs the test suite

## 📝 License

This project is open source and available for personal use.

## 🤝 Support

For questions or customization requests, feel free to reach out through the contact form on the website.

---

**Built with ❤️ using React, Tailwind CSS & Framer Motion**

# Setup & Customization Guide

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm start
```
The website will open automatically at `http://localhost:3000`

### 3. Build for Production
```bash
npm build
```
Creates optimized production build in the `build/` folder.

---

## 📝 Customization Steps

### 1. Update Contact Information

**File: `src/components/Contact.js`**
- Line 74: Update email (change `harsh@example.com`)
- Line 83: Update phone (change `+91 9999999999`)
- Line 95-106: Update social media links in `socialLinks` array

### 2. Personalize Hero Section

**File: `src/components/Hero.js`**
- Line 20: Update the typing animation text if desired
- Line 51: Update subtitle text
- Line 56: Update description text

### 3. Customize Skills

**File: `src/components/Skills.js`**
- Line 13-26: Modify the `skills` array with your technologies
- Update icons by importing from react-icons (Si prefix = Simple Icons)
- Modify "Also Proficient In" section (lines 125-135)

### 4. Add Your Projects

**File: `src/components/Projects.js`**
- Update the `projects` array (lines 7-72)
- For each project:
  - `title`: Project name
  - `description`: Detailed description
  - `tech`: Array of technologies used
  - `image`: Emoji representing the project
  - `features`: Array of key features
  - `github`: GitHub repository link
  - `live`: Live demo link

### 5. Update Experience & Education

**File: `src/components/Experience.js`**
- Update the `experiences` array (lines 7-70)
- Modify education details, achievements, and skills

### 6. Personalize About Section

**File: `src/components/About.js`**
- Lines 39-53: Update your background and focus areas
- Lines 66-80: Update the four info cards to reflect your achievements

---

## 🎨 Design Customization

### Change Color Scheme

**File: `tailwind.config.js`**

Find the `colors` section and modify the gradient colors:
```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    500: '#0ea5e9',    // Main cyan color
    600: '#0284c7',    // Darker cyan
    900: '#082f49',    // Darkest blue
  },
}
```

### Modify Animations

**File: `tailwind.config.js`**

Update the `animation` and `keyframes` sections:
```javascript
animation: {
  'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  'float': 'float 6s ease-in-out infinite',
},
```

### Customize Scrollbar

**File: `src/index.css`**
- Lines 60-82: Modify scrollbar appearance

---

## 📦 Dependencies

- **React 18.2** - UI library
- **Tailwind CSS 3.3** - Utility-first CSS
- **Framer Motion 10.16** - Animation library
- **React Icons 5.0** - Icon library
- **Create React App** - Build tool

To add more dependencies:
```bash
npm install <package-name>
```

---

## 🌐 Deployment Options

### Vercel (Recommended - Easiest)
```bash
npm install -g vercel
npm run build
vercel deploy --prod --dir=build
```

### Netlify
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=build
```

### GitHub Pages
1. Update `package.json`:
```json
"homepage": "https://yourusername.github.io/repository-name"
```

2. Deploy:
```bash
npm run build
npm install -g gh-pages
gh-pages -d build
```

### Traditional Hosting (cPanel, etc.)
1. Build the project: `npm run build`
2. Upload contents of `build/` folder to your server's public directory
3. Set up proper rewrite rules for routing (see hosting provider docs)

---

## 📱 Responsive Breakpoints

The portfolio uses Tailwind's default breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

Customize in `tailwind.config.js` if needed.

---

## 🔍 SEO Optimization

**File: `public/index.html`**
- Update meta description (line 8)
- Update title (line 9)

For better SEO when deployed:
- Add `sitemap.xml`
- Add `robots.txt`
- Use proper heading hierarchy
- Add schema.org structured data

---

## 🐛 Troubleshooting

### Port 3000 already in use
```bash
npm start -- --port 3001
```

### Dependencies installation fails
```bash
rm package-lock.json
npm cache clean --force
npm install
```

### Build fails
```bash
npm run build -- --verbose
```

### Dark mode not working
Ensure the `html` element has the `dark` class applied (handled automatically in App.js)

---

## 📄 File Structure Reference

```
harsh-portfolio/
├── public/
│   └── index.html              # Main HTML file
├── src/
│   ├── components/
│   │   ├── Header.js           # Navigation & theme toggle
│   │   ├── Hero.js             # Intro with typing animation
│   │   ├── About.js            # Background section
│   │   ├── Skills.js           # Tech stack grid
│   │   ├── Projects.js         # Featured work
│   │   ├── Experience.js       # Education & achievements
│   │   ├── Contact.js          # Form & social links
│   │   └── Footer.js           # Footer section
│   ├── App.js                  # Main component
│   ├── index.js                # Entry point
│   └── index.css               # Global styles + Tailwind
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS setup
├── package.json                # Dependencies
└── README.md                   # Project documentation
```

---

## 💡 Tips & Best Practices

1. **Keep Components Modular**: Each section is a separate component for easy updates
2. **No Comments in Code**: As requested, code is clean without comments
3. **Mobile First**: All components are mobile-responsive by default
4. **Smooth Animations**: Framer Motion handles all animations smoothly
5. **Dark Mode by Default**: Enable light mode with theme toggle
6. **Accessibility**: Semantic HTML and proper link structure

---

## 🔗 Useful Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [React Icons Library](https://react-icons.github.io/react-icons/)

---

**Your portfolio is ready to showcase to the world! 🚀**

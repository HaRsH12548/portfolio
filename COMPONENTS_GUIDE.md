# Component Reference Guide

## Overview
This portfolio consists of 8 main components, each handling a specific section. All components use Framer Motion for animations and are fully responsive.

---

## 1. Header Component
**File:** `src/components/Header.js`

### Purpose
Navigation bar with theme toggle (Dark/Light mode)

### Key Features
- Fixed positioning at top
- Smooth backdrop blur effect
- Mobile-responsive navigation (hidden on small screens, shown on md+)
- Theme toggle button with icons (☀️/🌙)
- Gradient branding with logo

### Customization
- **Change logo text**: Line 16 - Replace "Harsh" with your name
- **Update navigation links**: Line 23-26 - Modify href and text for each nav item
- **Adjust styling**: Lines 14-35 - Modify Tailwind classes

### Animations
- Logo fades in on load
- Navigation items appear sequentially
- Theme button scales on hover

---

## 2. Hero Component
**File:** `src/components/Hero.js`

### Purpose
Eye-catching landing section with typing animation

### Key Features
- Typing animation effect (50ms per character)
- Gradient text effects
- Call-to-action buttons (View Work, Get in Touch)
- Floating emoji avatar
- Blinking cursor animation
- Smooth scroll indicator

### Customization
- **Change tagline**: Line 9 - Modify `fullText` variable
- **Update subtitle**: Line 50 - Change subtitle text
- **Update description**: Line 54-56 - Personalize the description
- **Change emoji**: Line 30 - Replace 💻 with your preferred emoji
- **Modify button links**: Line 60, 67 - Update href values

### Animations
- Staggered entrance animations
- Typing effect with cursor blink
- Bouncing scroll indicator
- Button hover glow effects

---

## 3. About Component
**File:** `src/components/About.js`

### Purpose
Showcase your background, skills, and achievements

### Key Features
- Two-column layout (text + info cards)
- Four highlight cards (Education, NCC Certified, Full-Stack Dev, DSA Expert)
- Gradient section heading
- Responsive grid layout

### Customization
- **Update bio paragraphs**: Lines 39-53 - Modify your background story
- **Change card titles/descriptions**: Lines 66-80 - Update the 4 cards
- **Modify emojis**: Lines 63, 69, 75, 81 - Change emoji icons
- **Update card content**: Edit text in each card

### Animations
- Section heading slides in from left
- Content items stagger upward
- Cards lift on hover

---

## 4. Skills Component
**File:** `src/components/Skills.js`

### Purpose
Display technical expertise with icon cards

### Key Features
- 4 main skill cards with icons (React, Node, C++, Tailwind)
- Gradient backgrounds per skill
- "Also Proficient In" section with tag-style items
- Icon scaling on hover
- Responsive grid layout

### Customization
- **Update main skills**: Lines 13-26 - Modify the `skills` array:
  - `name`: Skill name
  - `icon`: Import from react-icons
  - `description`: Short description
  - `color`: Gradient class (e.g., 'from-cyan-400 to-blue-500')
  
- **Change additional skills**: Lines 125-135 - Update the array of secondary skills
- **Modify skill descriptions**: Update the `description` field in each skill object

### Supported Icons
Available from `react-icons/si`:
- `SiReact` - React
- `SiNodedotjs` - Node.js
- `SiCplusplus` - C++
- `SiTailwindcss` - Tailwind CSS
- `SiMongodb` - MongoDB
- `SiExpress` - Express
- Many more available

### Animations
- Cards slide up on view
- Icons scale up on hover
- Staggered entrance animation

---

## 5. Projects Component
**File:** `src/components/Projects.js`

### Purpose
Showcase featured projects with detailed information

### Key Features
- Alternating layout (image left/right)
- Feature list for each project
- Technology tags
- GitHub and Live Demo buttons
- Large emoji representations
- Responsive masonry-style layout

### Customization
- **Update projects**: Lines 7-72 - Modify the `projects` array:
  ```javascript
  {
    title: 'Project Name',
    description: 'Detailed description...',
    tech: ['React.js', 'Node.js', ...],
    image: '🎯', // Emoji representation
    features: ['Feature 1', 'Feature 2', ...],
    github: 'https://github.com/...',
    live: 'https://project-url.com'
  }
  ```
- **Add more projects**: Simply add new objects to the array
- **Change emojis**: Update the `image` field for each project
- **Update links**: Modify `github` and `live` URLs

### Animations
- Alternating slide-in effects for text
- Image hover scale effect
- Button animations on interaction
- Staggered entrance per project

---

## 6. Experience Component
**File:** `src/components/Experience.js`

### Purpose
Display education, certifications, and achievements

### Key Features
- Timeline-style cards
- Color-coded cards by type
- Feature badges (Education, Achievement, Skill, Expertise)
- Hover lift effect
- Period information
- Icon-based visual distinction

### Customization
- **Update experiences**: Lines 7-70 - Modify the `experiences` array:
  ```javascript
  {
    type: 'Education',
    title: 'Title',
    organization: 'Organization',
    period: 'Date range',
    description: 'Details...',
    icon: '🎓', // Emoji
    color: 'from-blue-400 to-cyan-400' // Gradient
  }
  ```
- **Add achievements**: Add new objects to the array
- **Change icon colors**: Modify the `color` field (Tailwind gradient classes)
- **Update time periods**: Edit the `period` field

### Animations
- Horizontal slide-in from left
- Vertical lift on hover
- Staggered entrance sequence

---

## 7. Contact Component
**File:** `src/components/Contact.js`

### Purpose
Provide contact information and contact form

### Key Features
- Three contact info cards (Email, Phone, Social Links)
- Contact form with validation
- Social media links with icons
- Form state management
- Responsive form layout

### Customization
- **Update email**: Line 74 - Change email address
- **Update phone**: Line 83 - Change phone number
- **Update social links**: Lines 87-106 - Modify social media URLs:
  ```javascript
  {
    name: 'LinkedIn',
    icon: SiLinkedin,
    url: 'https://linkedin.com/in/yourusername',
    color: 'hover:text-blue-600'
  }
  ```
- **Customize form fields**: Lines 157-195 - Add/remove form fields
- **Form handling**: Lines 27-38 - Customize form submission logic (currently logs to console)

### Form Integration
To connect to a backend:
1. Replace the `console.log` in `handleSubmit` (line 33)
2. Add fetch/axios call to your backend
3. Or use services like Formspree, Emailjs, or Firebase

### Animations
- Card entrance with stagger
- Form input focus scaling
- Button hover and tap animations
- Social icon scaling on hover

---

## 8. Footer Component
**File:** `src/components/Footer.js`

### Purpose
Display credits and closing message

### Key Features
- Three-column layout (mobile responsive)
- Gradient name text
- Year auto-update
- Call-to-action message
- Decorative line animation

### Customization
- **Update name**: Line 12 - Change "Harsh" to your name
- **Update description**: Line 14 - Modify your professional title
- **Update tagline**: Line 21 - Customize your message
- **Update footer text**: Lines 22-24 - Modify closing text

### Animations
- Entrance animation on view
- Horizontal line scales in
- Smooth layout transitions

---

## App.js - Main Component
**File:** `src/components/App.js`

### Purpose
Root component managing dark mode state and layout

### Key Features
- Dark mode state management
- Theme persistence (managed by state)
- All component imports and rendering
- Conditional classes based on theme

### Customization
- **Add global styles**: Add classes to the wrapper div (line 27)
- **Modify theme logic**: Update the `useEffect` hook
- **Add page sections**: Import new components and add to JSX

---

## Global Styles
**File:** `src/index.css`

### Tailwind Directives
- `@tailwind base` - Base styles
- `@tailwind components` - Component classes
- `@tailwind utilities` - Utility classes

### Custom Layers
- `.section-header` - Reusable section heading style
- `.glass-effect` - Glassmorphism effect
- `.btn-primary` - Primary button style
- `.btn-secondary` - Secondary button style

### Scrollbar Customization
Lines 60-82 customize scrollbar appearance for Webkit browsers

---

## Component Data Flow

```
App (Dark Mode State)
├── Header (Theme Toggle)
├── Hero (Typing Animation)
├── About (Info Cards)
├── Skills (Tech Grid)
├── Projects (Project Cards)
├── Experience (Timeline)
├── Contact (Form + Socials)
└── Footer (Credits)
```

---

## Animation Patterns Used

1. **Entrance Animations**
   - `initial={{ opacity: 0, x/y: value }}`
   - `animate={{ opacity: 1, x/y: 0 }}`

2. **Scroll Reveal**
   - `whileInView={{ /* final state */ }}`
   - `viewport={{ once: true }}`

3. **Hover Effects**
   - `whileHover={{ scale: 1.05/1.1 }}`
   - `whileTap={{ scale: 0.95 }}`

4. **Continuous**
   - `animate={{ y: [0, 10, 0] }}`
   - `transition={{ repeat: Infinity }}`

---

## Responsive Classes Used

- `sm:` - 640px and above
- `md:` - 768px and above
- `lg:` - 1024px and above
- `xl:` - 1280px and above
- Default (no prefix) - Mobile first

---

## Best Practices Applied

✅ No comments in code (as requested)
✅ Clean modular structure
✅ Consistent naming conventions
✅ Responsive mobile-first design
✅ Smooth animations without performance impact
✅ Accessible HTML structure
✅ Semantic component organization

---

Need to make changes? Refer to the specific component file and follow the customization guide!

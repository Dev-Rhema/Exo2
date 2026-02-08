# Exodigital Landing Page

A modern React landing page built with Vite and Tailwind CSS.

## Features

- ⚡️ Built with React + Vite
- 🎨 Styled with Tailwind CSS
- 📱 Fully responsive design
- 🎯 Light blue (#4A9EFF) and white theme
- ✨ Smooth scroll navigation
- 🚀 Optimized for performance

## Setup Instructions

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit: `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
exodigital-react/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    └── index.css
```

## Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
- `accent`: Primary button and accent color (#4A9EFF)
- `accent-dark`: Hover state color (#2B7FE6)
- `primary`: Text color (#1a1a1a)

### Content
All content is in `src/App.jsx`. Each section is a separate component for easy customization.

## Components

- `Navigation` - Fixed top navigation bar
- `Hero` - Main hero section
- `StopGuessing` - Introduction section
- `ForNotFor` - Target audience section
- `CoreProblem` - Problem statement
- `Approach` - Solution approach
- `WhatClientsGet` - Value propositions
- `VideoSection` - Video placeholder
- `HowItWorks` - Process steps
- `WhyPaidAds` - Benefits section
- `CaseStudies` - Case study placeholders
- `FinalCTA` - Call to action
- `Footer` - Footer section

## Notes

- Replace `#` in CTA buttons with your actual booking link
- Upload video to the video section placeholder
- Add actual case studies when available

## License

Private - All rights reserved

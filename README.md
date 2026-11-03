# Poorvi Hosamani — Developer Portfolio

A personal portfolio website for **Poorvi Hosamani**, an AI/ML and Full-Stack Developer studying Computer Science Engineering at BMS College of Engineering (BMSCE), Bengaluru.

Crafted with an editorial aesthetic inspired by modern design monographs: warm paper and stone backgrounds (`#f5f2eb`, `#e9e4d8`), high-contrast dark typography (`#121316`), and vibrant electric cobalt blue accents (`#2563eb`).

---

## 📑 Table of Contents

- [Overview](#overview)
- [Design System & Theme](#design-system--theme)
- [Technologies & Libraries Used](#technologies--libraries-used)
- [Project Architecture](#project-architecture)
- [Sections & Features](#sections--features)
  - [1. Navigation Bar](#1-navigation-bar)
  - [2. Hero Section](#2-hero-section)
  - [3. About Section](#3-about-section)
  - [4. Technical Skills](#4-technical-skills)
  - [5. Projects Showcase](#5-projects-showcase)
  - [6. Achievements & Recognition](#6-achievements--recognition)
  - [7. Education](#7-education)
  - [8. Learning & Development](#8-learning--development)
  - [9. Contact & Email Composer](#9-contact--email-composer)
  - [10. Footer](#10-footer)
- [Personal Data Configuration](#personal-data-configuration)
- [Adding / Updating Your Photo](#adding--updating-your-photo)
- [Local Development Setup](#local-development-setup)
- [Pushing to GitHub](#pushing-to-github)
- [License](#license)

---

## 🌟 Overview

- **Developer**: Poorvi Hosamani
- **Role**: AI/ML & Full-Stack Developer
- **Institution**: BMS College of Engineering (BMSCE), Bengaluru
- **Degree**: B.E. Computer Science and Engineering (2025 – 2029)
- **Email**: [poorvihosamani02@gmail.com](mailto:poorvihosamani02@gmail.com)
- **GitHub**: [github.com/poorvihosamani02](https://github.com/poorvihosamani02)
- **LinkedIn**: [linkedin.com/in/poorvi-hosamani-a46347384](https://www.linkedin.com/in/poorvi-hosamani-a46347384)

---

## 🎨 Design System & Theme

Inspired by modern Swiss editorial monographs and avant-garde creative studios:

| Token | Value | Purpose |
| :--- | :--- | :--- |
| **Canvas Background** | `#f5f2eb` | Warm natural linen / paper background |
| **Sand Framing Panel** | `#e9e4d8` | Secondary architectural container surfaces |
| **Card Surface** | `#ede8de` | Structural cards and interactive modules |
| **Ink Text (Primary)** | `#121316` | High-contrast stark black text & headlines |
| **Muted Ink (Secondary)** | `#555860`, `#737680` | Subtle descriptions and micro-labels |
| **Cobalt Accent** | `#2563eb` | Electric Klein blue for star logo, square period, and active elements |
| **Hairline Dividers** | `#e2ddd3` | Ultra-fine 1px architectural borders |

### Typography Pairings
- **Headings & Display**: `Outfit` and `Space Grotesk` with tight tracking (`-0.035em`).
- **Body Prose**: `Plus Jakarta Sans` for high legibility and natural reading rhythm.
- **Micro-labels & Code**: `JetBrains Mono` for uppercase metadata, numbers, and tags.

---

## 🛠️ Technologies & Libraries Used

### Core Framework & Build Tools
- **[React 19](https://react.dev/)**: Latest functional components with modern React hooks (`useState`, `useEffect`, `useRef`).
- **[TypeScript](https://www.typescriptlang.org/)**: Fully typed components, interfaces, and data models (`Project`, `SkillCategory`, `AchievementItem`).
- **[Vite 8](https://vite.dev/)**: Ultra-fast next-generation frontend bundler and local development server.
- **[Tailwind CSS v4](https://tailwindcss.com/)**: Modern utility-first CSS framework with native `@import "tailwindcss";` and custom design tokens.

### Icons & Assets
- **[Lucide React](https://lucide.dev/)**: Crisp, semantic SVG icons (`ArrowUpRight`, `Github`, `Linkedin`, `Mail`, `MapPin`, `Award`, `Upload`, etc.).
- **Google Fonts CDN**: `Outfit`, `Plus Jakarta Sans`, `Space Grotesk`, and `JetBrains Mono`.
- **SVG Vector Graphics**: Custom 8-point geometric star wordmark and organic 3D cobalt ribbon knot sculpture.

---

## 📁 Project Architecture

```
/
├── index.html                   # Entry HTML with meta tags, OpenGraph data, and fonts
├── metadata.json                # AI Studio application metadata
├── package.json                 # Dependencies and npm build scripts
├── tsconfig.json                # TypeScript compiler configuration
├── vite.config.ts               # Vite configuration with React & Tailwind plugins
├── public/
│   ├── poorvi.jpg               # Place your portrait photo here
│   └── assets/                  # Public visual assets & references
└── src/
    ├── main.tsx                 # React DOM root entry point
    ├── App.tsx                  # Root app component assembling all sections
    ├── index.css                # Global styles, Tailwind directives, and font variables
    ├── data/
    │   └── portfolioData.ts     # Central source of truth for all projects, bio, & skills
    └── components/
        ├── Navbar.tsx           # Sticky header with active scroll highlight and mobile drawer
        ├── Hero.tsx             # Dual-tone split hero with massive typography & photo frame
        ├── About.tsx            # Personal narrative with 4 numbered engineering pillars
        ├── Skills.tsx           # Categorized skills grid with real-time search & filters
        ├── Projects.tsx         # AdhikarAI & GridPoint gallery with live demo links
        ├── ProjectModal.tsx     # Deep-dive modal with personal vs. team contributions
        ├── Achievements.tsx     # HACK4SDG Top 10 spotlight, BMSCE clubs, and workshops
        ├── Education.tsx        # BMSCE undergraduate studies and core coursework
        ├── Learning.tsx         # Trajectory roadmap and continuous development philosophy
        ├── Contact.tsx          # Direct email launcher, quick topic chips, and copy tool
        └── Footer.tsx           # Minimalist stone footer with copyright and back-to-top
```

---

## 🔍 Sections & Features

### 1. Navigation Bar (`Navbar.tsx`)
- Follows the **Top Bar Contract**:
  - **Left**: Cobalt geometric star logo mark + `POORVI HOSAMANI`.
  - **Center**: Clean uppercase navigation links with small superscript work counter: `WORK ⁰²`, `ABOUT`, `SKILLS`, `ACHIEVEMENTS`, `EDUCATION`, and `LEARNING`.
  - **Right**: Distinctive `Let's talk ↗` link with a fine black underline.
- Uses `IntersectionObserver` to highlight the active section as you scroll.
- Fully responsive with an animated mobile drawer.

### 2. Hero Section (`Hero.tsx`)
- Immediate visual impact with a **dual-tone layout**:
  - **Left side**: Tracked micro-label `INDEPENDENT AI/ML & FULL-STACK DEVELOPER`, massive headline `Poorvi Hosamani` with signature cobalt square period (`.`), and statement: `+ I turn complex AI & data systems into products that feel simple.`
  - **Right side**: Warm sand container (`#e9e4d8`) featuring the professional portrait frame, the cobalt blue sculptural 3D ribbon motif, and vertical rotated text: `CLARITY IS AN ENGINEERING DECISION.`
  - **Actions**: Direct buttons for *Explore My Work* and *Contact Me*, plus verified GitHub, LinkedIn, and Email links.
  - Built-in photo uploader/reset button.

### 3. About Section (`About.tsx`)
- Features your exact personal introduction narrative.
- Accompanied by 4 numbered engineering pillars:
  - `01` AI & Machine Learning (RAG, Gemini API, intelligent pipelines)
  - `02` Full-Stack Engineering (React, FastAPI, Node.js REST services)
  - `03` Practical Impact (AdhikarAI and GridPoint prototypes)
  - `04` Continuous Rigor (BMSCE coursework and collegiate clubs)

### 4. Technical Skills (`Skills.tsx`)
- Organized into 6 categories:
  - **Programming**: Python, Java, JavaScript, C
  - **Web Development**: HTML, CSS, React, Node.js, Express.js, FastAPI
  - **AI / Machine Learning**: AI & Machine Learning, RAG, Gemini API
  - **Databases**: MySQL, SQLite
  - **Developer Tools**: Git, GitHub, Google Colab, Antigravity, VS Code
  - **Core Fundamentals & Collaboration**: Data Structures & Algorithms, OOP, API Integration, Teamwork
- Interactive segmented category filters (`All`, `01 Programming`, `02 Web`, etc.) and a real-time instant search input.
- **Zero fake proficiency percentages** for a strictly professional presentation.

### 5. Projects Showcase (`Projects.tsx` & `ProjectModal.tsx`)
- **AdhikarAI**:
  - *Role*: Team Lead & Backend / AI-ML Developer (Team Project · Working Prototype)
  - *Tech Stack*: React, JavaScript, Node.js, Express.js, FastAPI, SQLite, Gemini API, RAG
  - *Recognition*: Top 10 Finalist out of 300+ teams at the HACK4SDG Hackathon, presented at PES University.
  - *Links*: [GitHub Repository](https://github.com/poorvihosamani02/adhikarAI.git) · [Live Demo](https://adhikarai-citizen-rights-government-scheme-access.ai.studio/)
- **GridPoint**:
  - *Role*: Backend / Optimization Developer (Hackathon Project · Working Prototype)
  - *Tech Stack*: Vite, React 18, Python, FastAPI, Uvicorn, REST APIs, NumPy, SciPy, scikit-learn, Pandas
  - *Links*: [GitHub Repository](https://github.com/poorvihosamani02/gridpoint.git) · [Live Demo](https://gridpoint-bovl.onrender.com/)
- **Interactive Modal**: Clicking *View Details* reveals a comprehensive modal distinguishing **Personal Contributions** from **Team Context**, alongside full feature breakdowns.

### 6. Achievements & Recognition (`Achievements.tsx`)
- Featured card for the **HACK4SDG Hackathon Top 10** position among 300+ teams with on-stage presentation before PES University judges.
- Additional cards for **Team Lead Experience**, **ACM Student Chapter** membership, **Pentagram Mathematical Society** membership, and **AI/Antigravity Workshops**.
- Interactive category filter buttons (`All`, `Hackathon`, `Leadership`, `Club`, `Workshop`).

### 7. Education (`Education.tsx`)
- Highlights undergraduate studies at **BMS College of Engineering (BMSCE), Bengaluru**.
- Degree: B.E. Computer Science and Engineering (2025 – 2029, Second Year).
- Detailed breakdown of core coursework:
  - *Data Structures & Algorithms*
  - *Database Management Systems*
  - *Object-Oriented Programming*
- Strictly excludes CGPA or school marks as requested.

### 8. Learning & Development (`Learning.tsx`)
- Outlines continuous learning trajectory: Hands-on AI & GenAI systems, technical workshops, full-stack data architecture, and algorithmic rigor.

### 9. Contact Section (`Contact.tsx`)
- Direct email link: `poorvihosamani02@gmail.com`.
- **One-click Copy Email** button with instant feedback toast (`Copied!`).
- **Interactive Quick Message Composer**: Lets visitors pick an inquiry topic (e.g., *Project Collaboration*, *AI/ML Discussion*, *Internship*), optionally type their name/note, and launch their default mail client with a pre-filled `mailto:` link.
- Verified links to GitHub and LinkedIn profiles.

### 10. Footer (`Footer.tsx`)
- Minimalist stone footer with the geometric star mark, Poorvi Hosamani credentials, copyright with the dynamic current year, and a smooth back-to-top button.

---

## ⚙️ Personal Data Configuration

All portfolio content is decoupled from UI presentation and maintained in a single clean TypeScript file:

👉 `src/data/portfolioData.ts`

To update your email, bio, project links, or add new skills in the future, simply edit `src/data/portfolioData.ts`. Changes will automatically propagate across all components.

---

## 📸 Permanent Portrait Photo

Your official portrait photograph is permanently integrated into the hero section:
- **Image File**: Located at `/public/assets/aistudio/WhatsApp_Image_2026-11-03_at_10.23.36_PM_beeeeaef.jpeg` and mirrored at `/public/poorvi.jpg`.
- **Framing**: Cropped with `object-cover` centered around your face and BMSCE college badge.
- **Permanent**: Upload buttons and temporary preview toggles have been removed so the portfolio always loads your photograph cleanly.

---

## 💻 Local Development Setup

To run this portfolio locally on your computer:

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or higher)
- npm, pnpm, or bun

### 1. Clone or copy the repository
```bash
git clone https://github.com/poorvihosamani02/portfolio.git
cd portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start local development server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000` (or `http://localhost:5173`).

### 4. Build for production
```bash
npm run build
```
This produces a static, optimized bundle in the `dist/` directory ready for deployment on GitHub Pages, Vercel, Netlify, or Render.

### 5. Check TypeScript types
```bash
npm run lint
```

---

## 🚀 Pushing to GitHub

To push this codebase to your GitHub repository:

```bash
# 1. Initialize git (if not already initialized)
git init

# 2. Add all files to staging
git add .

# 3. Create your first commit
git commit -m "feat: complete premium developer portfolio for Poorvi Hosamani"

# 4. Set branch to main
git branch -M main

# 5. Add your remote repository URL (replace with your repo link)
git remote add origin https://github.com/poorvihosamani02/portfolio.git

# 6. Push to GitHub
git push -u origin main
```

---

## 📄 License

Created for **Poorvi Hosamani**. All rights reserved. Code is available for personal developer portfolio reference.

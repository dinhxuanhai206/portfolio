# 📁 Cấu trúc Project Portfolio

```
portfolio/
├── .github/
│   └── workflows/
│       ├── ci-cd.yml              # CI/CD pipeline chính
│       └── lighthouse.yml         # Performance testing
│
├── app/
│   ├── layout.tsx                 # Root layout với metadata
│   ├── page.tsx                   # Homepage - tổng hợp các sections
│   └── globals.css                # Global styles, animations, utilities
│
├── components/
│   ├── Navigation.tsx             # Sticky navigation với smooth scroll
│   ├── Hero.tsx                   # Hero section với CTA buttons
│   ├── About.tsx                  # Giới thiệu bản thân
│   ├── Skills.tsx                 # Kỹ năng với progress bars
│   ├── Projects.tsx               # Danh sách dự án
│   ├── Video.tsx                  # Video giới thiệu
│   └── Contact.tsx                # Form liên hệ và social links
│
├── public/
│   ├── cv.pdf                     # File CV để download
│   ├── intro-video.mp4            # Video giới thiệu (optional)
│   ├── video-poster.jpg           # Poster cho video (optional)
│   └── [project-images]           # Ảnh dự án
│
├── .env.example                   # Template cho environment variables
├── .gitignore                     # Git ignore rules
├── next.config.ts                 # Next.js configuration
├── package.json                   # Dependencies và scripts
├── tsconfig.json                  # TypeScript configuration
├── tailwind.config.ts             # Tailwind CSS configuration
├── postcss.config.mjs             # PostCSS configuration
├── vercel.json                    # Vercel deployment config
├── netlify.toml                   # Netlify deployment config
│
├── README.md                      # Project overview (English)
├── HUONG_DAN.md                   # Hướng dẫn chi tiết (Tiếng Việt)
├── DEPLOYMENT.md                  # Hướng dẫn deploy
├── CI-CD-SETUP.md                 # Hướng dẫn setup CI/CD
└── PROJECT_STRUCTURE.md           # File này
```

## 📄 Chi tiết Files

### Core Files

#### `app/page.tsx`
- Homepage chính
- Import và render tất cả sections
- Gradient background

#### `app/layout.tsx`
- Root layout cho toàn bộ app
- Metadata (title, description)
- Font configuration (Inter)
- HTML lang="vi"

#### `app/globals.css`
- Tailwind directives
- Custom utilities:
  - `.text-gradient` - Gradient text effect
  - `.glass-effect` - Glass morphism
  - `.animate-float` - Floating animation
  - `.animate-glow` - Glow effect
- Custom animations

### Components

#### `Navigation.tsx`
**Features:**
- Sticky navigation
- Glass effect khi scroll
- Smooth scroll đến sections
- Responsive menu

**Props:** None

#### `Hero.tsx`
**Features:**
- Animated entrance
- Floating background elements
- Download CV button
- Scroll to contact button

**Functions:**
- `handleDownloadCV()` - Trigger CV download

#### `About.tsx`
**Features:**
- Glass card effect
- Hover scale animation
- Responsive text

**Content:** Giới thiệu bản thân

#### `Skills.tsx`
**Features:**
- Animated progress bars
- Gradient colors cho mỗi skill
- Hover effects

**Data Structure:**
```typescript
{
  name: string,
  level: number (0-100),
  color: string (Tailwind gradient)
}
```

#### `Projects.tsx`
**Features:**
- Grid layout (responsive)
- Project cards với hover effects
- Tech stack tags

**Data Structure:**
```typescript
{
  title: string,
  description: string,
  tech: string[],
  image: string
}
```

#### `Video.tsx`
**Features:**
- Video player với controls
- Poster image
- YouTube link alternative

**Supports:**
- Local video files
- YouTube embeds

#### `Contact.tsx`
**Features:**
- Contact form với validation
- Social media links
- Glass effect styling

**Form Fields:**
- Name (required)
- Email (required)
- Message (required)

### Configuration Files

#### `next.config.ts`
- Image optimization
- Security headers
- Compression
- Performance settings

#### `vercel.json`
- Vercel deployment settings
- Security headers
- Region configuration

#### `netlify.toml`
- Netlify deployment settings
- Build commands
- Redirects

#### `.github/workflows/ci-cd.yml`
**Jobs:**
1. `build-and-test`
   - Matrix testing (Node 18.x, 20.x)
   - Lint check
   - Build verification
   - Upload artifacts

2. `deploy`
   - Production build
   - Deploy to Vercel/Netlify

#### `.github/workflows/lighthouse.yml`
**Purpose:**
- Performance testing
- SEO analysis
- Accessibility check
- Best practices audit

## 🎨 Design System

### Colors

**Primary Gradient:**
- Purple: `#a855f7` → Pink: `#ec4899` → Red: `#ef4444`

**Background:**
- Dark: `#0f172a` (slate-900)
- Purple: `#581c87` (purple-900)

**Text:**
- Primary: White
- Secondary: Gray-300
- Accent: Purple-400

### Typography

**Font:** Inter (Google Fonts)

**Sizes:**
- Hero: 5xl (mobile) → 7xl (desktop)
- Section Titles: 4xl → 5xl
- Body: lg → xl
- Small: sm → base

### Spacing

**Sections:**
- Min height: 100vh
- Padding: py-20

**Container:**
- Max width: Responsive
- Padding: px-4

### Effects

**Glass Morphism:**
```css
bg-white/10
backdrop-blur-lg
border border-white/20
```

**Animations:**
- Float: 6s ease-in-out infinite
- Glow: 2s ease-in-out infinite alternate
- Hover scale: scale-105
- Transition: 300ms

## 🔧 Scripts

```json
{
  "dev": "next dev",              // Development server
  "build": "next build",          // Production build
  "start": "next start",          // Production server
  "lint": "eslint",               // Check linting
  "lint:fix": "eslint --fix",     // Auto-fix linting
  "type-check": "tsc --noEmit",   // TypeScript check
  "format": "prettier --write",   // Format code
  "clean": "rm -rf .next out"     // Clean build files
}
```

## 📦 Dependencies

### Production
- `next`: ^16.1.1 - React framework
- `react`: ^19.2.3 - UI library
- `react-dom`: ^19.2.3 - React DOM

### Development
- `typescript`: ^5 - Type safety
- `tailwindcss`: ^4 - Styling
- `eslint`: ^9 - Code linting
- `@types/*` - TypeScript definitions

## 🚀 Deployment Targets

### Vercel (Recommended)
- Automatic deployments
- Edge network
- Analytics included
- Zero configuration

### Netlify
- Continuous deployment
- Form handling
- Split testing
- Edge functions

### Docker
- Containerized deployment
- Self-hosted option
- Full control

## 📊 Performance Targets

**Lighthouse Scores:**
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 95
- SEO: > 95

**Core Web Vitals:**
- LCP: < 2.5s
- FID: < 100ms
- CLS: < 0.1

## 🔐 Security

**Headers:**
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin

**Best Practices:**
- No inline scripts
- CSP headers
- HTTPS only
- Secure cookies

## 📱 Responsive Breakpoints

```
Mobile:    < 640px   (sm)
Tablet:    640-1024px (md-lg)
Desktop:   > 1024px   (xl)
```

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📈 Future Enhancements

**Potential additions:**
- [ ] Blog section
- [ ] Dark/Light mode toggle
- [ ] Multi-language support
- [ ] Animation on scroll
- [ ] Testimonials section
- [ ] Certificate showcase
- [ ] GitHub activity feed
- [ ] Contact form backend

---

**Version:** 1.0.0  
**Last Updated:** January 2026  
**Framework:** Next.js 15 + TypeScript + Tailwind CSS

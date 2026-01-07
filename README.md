# Portfolio Website - Next.js

Portfolio website chuyên nghiệp với UI sang trọng, hiệu ứng đẹp mắt và tích hợp CI/CD.

## ✨ Tính năng

### 🎨 UI & Design
- **UI Sang trọng**: Thiết kế gradient với hiệu ứng glass morphism
- **4 Theme Colors**: Gold, White, Blue, Dark - Có thể chuyển đổi
- **Hiệu ứng Chuyên nghiệp**: Animation mượt mà, hover effects, floating elements
- **Responsive Design**: Tối ưu cho mọi thiết bị (mobile, tablet, desktop)

### 🎮 Interactive Features
- **Mini Game**: Skill Hunter game để tương tác
- **Achievement System**: Unlock achievements khi explore portfolio
- **Scroll Animations**: Reveal effects khi scroll
- **Hover Effects**: Premium hover animations

### 📱 Core Features
- **Download CV**: Tính năng tải CV trực tiếp
- **Video Integration**: Hiển thị video giới thiệu
- **Contact Form**: Form liên hệ với validation
- **Social Links**: Links đến GitHub, LinkedIn, Email

### 🚀 Technical
- **CI/CD Pipeline**: Tự động build, test và deploy với GitHub Actions
- **Performance**: Tối ưu với Next.js 15 và React 19
- **SEO Optimized**: Meta tags và structured data
- **ATS Friendly**: Optimized cho Applicant Tracking Systems

## 🛠️ Công nghệ sử dụng

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **CI/CD**: GitHub Actions
- **Deployment**: Vercel / Netlify (có thể chọn)

## 📦 Cài đặt

```bash
# Clone repository
git clone <your-repo-url>

# Di chuyển vào thư mục
cd portfolio

# Cài đặt dependencies
npm install

# Chạy development server
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) để xem kết quả.

## 🚀 Deployment

### 🎯 Quick Deploy (5 phút)

**Xem hướng dẫn nhanh:** [DEPLOY-NHANH.md](./DEPLOY-NHANH.md)

**Hướng dẫn chi tiết:** [DEPLOY-GUIDE.md](./DEPLOY-GUIDE.md)

### Option 1: Vercel (Khuyến nghị) ⭐

```bash
# 1. Push code lên GitHub
git add .
git commit -m "Initial commit"
git push origin main

# 2. Deploy lên Vercel
# - Vào vercel.com
# - Import repository
# - Click Deploy
# - Xong! 🎉
```

**Auto Deploy:** Mỗi khi push code, Vercel tự động deploy!

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy production
vercel --prod
```

### Option 3: Netlify

```bash
# Build project
npm run build

# Deploy thư mục .next lên Netlify
```

### 🔄 CI/CD với GitHub Actions

Project đã được cấu hình sẵn CI/CD pipeline:

- ✅ **Auto Build & Test** khi có pull request
- ✅ **Auto Deploy** khi merge vào main
- ✅ **Preview Deploy** cho mỗi PR
- ✅ **Lighthouse CI** kiểm tra performance

**Setup CI/CD:**

1. **Lấy Vercel Token:**
   - Vào [vercel.com/account/tokens](https://vercel.com/account/tokens)
   - Create token → Copy

2. **Lấy Project IDs:**
   ```bash
   npm i -g vercel
   vercel login
   vercel link
   cat .vercel/project.json
   ```

3. **Add GitHub Secrets:**
   - Vào GitHub repo → Settings → Secrets → Actions
   - Add 3 secrets:
     - `VERCEL_TOKEN`
     - `VERCEL_PROJECT_ID`
     - `VERCEL_ORG_ID`

4. **Push code → CI/CD tự động chạy!** 🚀

**Script tự động:** Chạy `bash scripts/setup-deployment.sh` để setup tự động!

## 📝 Tùy chỉnh

### Thay đổi thông tin cá nhân

1. **Hero Section** (`components/Hero.tsx`)
   - Thay đổi tên, title, description
   - Update CTA button links

2. **About Section** (`components/About.tsx`)
   - Cập nhật giới thiệu bản thân
   - Thay đổi stats (years, projects, clients)

3. **Skills Section** (`components/Skills.tsx`)
   - Thêm/sửa core skills
   - Update tech stack categories
   - Thay đổi proficiency levels

4. **Projects Section** (`components/Projects.tsx`)
   - Thêm work experience
   - Update project details
   - Thay đổi tech stack

5. **Contact Section** (`components/Contact.tsx`)
   - Update email, phone, social links
   - Customize contact methods

### Thêm CV

```bash
# Đặt file CV vào public folder
cp your-cv.pdf public/cv.pdf

# Hoặc update link trong Hero.tsx
```

### Thêm Video

**Option 1: Local Video**
```bash
# Đặt video vào public folder
cp your-video.mp4 public/intro-video.mp4
```

**Option 2: YouTube**
```typescript
// components/Video.tsx
const videoUrl = "https://www.youtube.com/embed/YOUR_VIDEO_ID";
```

### Thay đổi Theme Colors

**Chỉnh sửa `app/globals.css`:**

```css
:root {
  --primary: 255, 215, 0;      /* Gold */
  --secondary: 255, 255, 255;  /* White */
  --accent: 251, 191, 36;      /* Amber */
}

/* Hoặc tạo theme mới */
[data-theme="custom"] {
  --primary: YOUR_RGB_VALUES;
  --secondary: YOUR_RGB_VALUES;
  --accent: YOUR_RGB_VALUES;
}
```

### Tùy chỉnh Animations

**Chỉnh sửa `app/globals.css`:**

```css
/* Thay đổi animation speed */
.hover-lift {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Thêm animation mới */
@keyframes your-animation {
  /* ... */
}
```

## 📱 Sections

- **🏠 Hero**: Landing page với animated text và CTA buttons
- **👤 About**: Giới thiệu bản thân với stats
- **💪 Skills**: 
  - Core skills với progress bars và gradient cards
  - Tabbed tech stack (Frontend, Backend, Tools)
  - Stats section
- **💼 Projects**: Work experience và selected projects
- **🎥 Video**: Video giới thiệu (YouTube/Local)
- **📧 Contact**: Premium contact form và contact methods
- **🎮 Mini Game**: Interactive skill hunter game
- **🏆 Achievements**: Gamification system

## 🎨 Hiệu ứng đặc biệt

### Visual Effects
- ✨ Glass morphism với backdrop blur
- 🌈 Gradient text animations
- 🎭 Floating background elements với parallax
- 📜 Smooth scroll navigation
- 🎯 Hover scale và lift effects
- 💫 Glow và shimmer animations
- 🎪 Stagger animations cho lists

### Interactive Effects
- 🎮 Mini game với collision detection
- 🏆 Achievement unlock notifications
- 🎨 Theme switcher với smooth transitions
- 📊 Animated progress bars
- 🔄 Tab switching với fade effects
- 💬 Form input focus effects

### Performance
- ⚡ Optimized animations với CSS transforms
- 🚀 Lazy loading cho images
- 📦 Code splitting
- 🎯 Minimal re-renders

## 📄 License

MIT License - Tự do sử dụng cho dự án cá nhân và thương mại.

## 🤝 Đóng góp

Mọi đóng góp đều được chào đón! 

1. Fork repository
2. Tạo branch mới (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Tạo Pull Request

## 📞 Liên hệ

- **Email**: dinhxuanhai206@gmail.com
- **LinkedIn**: [hai20062000](https://www.linkedin.com/in/hai20062000)
- **GitHub**: [dinhxuanhai](https://github.com/dinhxuanhai)

## 🙏 Credits

- **Design Inspiration**: Modern portfolio trends
- **Icons**: Emoji & Unicode
- **Fonts**: System fonts for performance
- **Framework**: Next.js team

---

⭐ Nếu project này hữu ích, hãy cho một star nhé!

Made with ❤️ by Dinh Xuan Hai

# ⚡ Quick Start Guide

## 🎯 Mục tiêu
Chạy portfolio website trong 5 phút!

## 📋 Checklist

### ✅ Bước 1: Cài đặt (1 phút)
```bash
cd portfolio
npm install
```

### ✅ Bước 2: Chạy Development (30 giây)
```bash
npm run dev
```
Mở: http://localhost:3000

### ✅ Bước 3: Customize cơ bản (3 phút)

#### 3.1. Thông tin cá nhân
Mở `components/Hero.tsx` (dòng 23):
```tsx
<h1>Xin chào, tôi là Nguyễn Văn A</h1>  // ← Đổi tên
<p>Full Stack Developer</p>              // ← Đổi title
```

#### 3.2. Giới thiệu
Mở `components/About.tsx` (dòng 12):
```tsx
<p>Tôi là một developer với 3 năm kinh nghiệm...</p>  // ← Viết về bạn
```

#### 3.3. Kỹ năng
Mở `components/Skills.tsx` (dòng 5):
```tsx
const skills = [
  { name: 'React', level: 90, color: 'from-blue-500 to-cyan-500' },
  // Thêm kỹ năng của bạn
];
```

#### 3.4. CV
Đặt file CV vào: `public/cv.pdf`

#### 3.5. Social Links
Mở `components/Contact.tsx` (dòng 60):
```tsx
<a href="https://github.com/YOUR_USERNAME">  // ← Đổi username
<a href="https://linkedin.com/in/YOUR_USERNAME">
```

### ✅ Bước 4: Build & Test (30 giây)
```bash
npm run build
npm start
```

## 🚀 Deploy ngay (5 phút)

### Option 1: Vercel (Nhanh nhất)
```bash
npm i -g vercel
vercel
```
Làm theo hướng dẫn → Done!

### Option 2: Netlify
1. Vào [netlify.com](https://netlify.com)
2. Drag & drop thư mục `portfolio`
3. Done!

### Option 3: GitHub + Auto Deploy
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_REPO_URL
git push -u origin main
```
Sau đó import vào Vercel/Netlify → Auto deploy!

## 📝 Customize nâng cao (sau này)

### Thêm dự án
`components/Projects.tsx`:
```tsx
const projects = [
  {
    title: 'E-Commerce',
    description: 'Website bán hàng',
    tech: ['Next.js', 'Stripe'],
    image: '/project1.jpg',
  },
];
```

### Thêm video
**Local video:**
- Đặt video vào `public/intro-video.mp4`

**YouTube:**
`components/Video.tsx`:
```tsx
<iframe src="https://www.youtube.com/embed/VIDEO_ID" />
```

### Đổi màu theme
`app/globals.css`:
```css
.text-gradient {
  @apply bg-gradient-to-r from-blue-400 to-cyan-500;  /* Đổi màu */
}
```

## 🎨 Màu sắc có sẵn

```css
/* Purple-Pink (Default) */
from-purple-400 via-pink-500 to-red-500

/* Blue-Cyan */
from-blue-400 via-cyan-500 to-teal-500

/* Green-Emerald */
from-green-400 via-emerald-500 to-teal-500

/* Orange-Red */
from-orange-400 via-red-500 to-pink-500
```

## 🔧 Commands cheat sheet

```bash
# Development
npm run dev              # Start dev server
npm run build           # Build production
npm start               # Run production

# Code quality
npm run lint            # Check errors
npm run lint:fix        # Fix errors
npm run type-check      # Check TypeScript

# Maintenance
npm run clean           # Clean cache
```

## 🐛 Troubleshooting nhanh

### Port 3000 đã được sử dụng
```bash
npx kill-port 3000
npm run dev
```

### Build error
```bash
npm run clean
npm install
npm run build
```

### TypeScript errors
```bash
npm run type-check
npm run lint:fix
```

## 📚 Đọc thêm

- 📖 [HUONG_DAN.md](HUONG_DAN.md) - Hướng dẫn chi tiết
- 🚀 [DEPLOYMENT.md](DEPLOYMENT.md) - Deploy options
- 🔄 [CI-CD-SETUP.md](CI-CD-SETUP.md) - Setup CI/CD

## ✅ Checklist hoàn chỉnh

- [ ] Cài đặt dependencies
- [ ] Chạy dev server thành công
- [ ] Đổi tên và title
- [ ] Cập nhật giới thiệu
- [ ] Thêm kỹ năng
- [ ] Upload CV
- [ ] Cập nhật social links
- [ ] Test responsive (F12 → Device toolbar)
- [ ] Build thành công
- [ ] Deploy lên production

## 🎉 Done!

Portfolio của bạn đã sẵn sàng! 

**Next steps:**
1. Thêm ảnh dự án thật
2. Thêm video giới thiệu
3. Setup custom domain
4. Enable analytics
5. Share với mọi người! 🚀

---

**Cần help?** Tạo issue trên GitHub hoặc check [HUONG_DAN.md](HUONG_DAN.md)

# 🎨 Portfolio Website - Next.js

> Portfolio website chuyên nghiệp với UI sang trọng, hiệu ứng đẹp mắt, responsive hoàn toàn và tích hợp CI/CD

![Next.js](https://img.shields.io/badge/Next.js-16.1-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=for-the-badge&logo=tailwind-css)

## ✨ Tính năng nổi bật

- 🎨 **UI Sang trọng** - Thiết kế gradient với glass morphism effect
- 🌊 **Hiệu ứng Chuyên nghiệp** - Animation mượt mà, floating elements, glow effects
- 📱 **Responsive 100%** - Tối ưu cho mobile, tablet, desktop
- 📄 **Tải CV** - Download CV trực tiếp từ website
- 🎥 **Video Nhúng** - Hiển thị video giới thiệu (local hoặc YouTube)
- 🚀 **CI/CD** - Tự động build, test và deploy với GitHub Actions
- ⚡ **Performance** - Tối ưu với Next.js 15 App Router
- 🔒 **Security** - Security headers và best practices

## 🖼️ Preview

### Sections
- **Hero** - Trang chủ với CTA buttons
- **About** - Giới thiệu bản thân
- **Skills** - Kỹ năng với progress bars
- **Projects** - Danh sách dự án
- **Video** - Video giới thiệu
- **Contact** - Form liên hệ và social links

## 🚀 Bắt đầu nhanh

### Yêu cầu
- Node.js 18.x hoặc cao hơn
- npm hoặc yarn

### Cài đặt

```bash
# Clone repository
git clone <your-repo-url>
cd portfolio

# Cài đặt dependencies
npm install

# Chạy development server
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) để xem kết quả.

## 📝 Tùy chỉnh

### 1. Thông tin cá nhân

**Hero Section** (`components/Hero.tsx`):
```tsx
<h1>Xin chào, tôi là [TÊN CỦA BẠN]</h1>
<p>Full Stack Developer | UI/UX Designer</p>
```

**About Section** (`components/About.tsx`):
- Cập nhật giới thiệu về bản thân

### 2. Kỹ năng

Chỉnh sửa `components/Skills.tsx`:
```tsx
const skills = [
  { name: 'React', level: 90, color: 'from-blue-500 to-cyan-500' },
  // Thêm kỹ năng của bạn...
];
```

### 3. Dự án

Cập nhật `components/Projects.tsx`:
```tsx
const projects = [
  {
    title: 'Tên Dự Án',
    description: 'Mô tả',
    tech: ['React', 'Node.js'],
    image: '/project1.jpg',
  },
];
```

### 4. CV

Đặt file CV vào `public/cv.pdf`

### 5. Video

**Option 1:** Đặt video vào `public/intro-video.mp4`

**Option 2:** Nhúng YouTube trong `components/Video.tsx`

### 6. Social Links

Cập nhật links trong `components/Contact.tsx`

## 🎨 Tùy chỉnh Theme

### Màu sắc

Chỉnh sửa `app/globals.css`:
```css
.text-gradient {
  @apply bg-clip-text text-transparent 
         bg-gradient-to-r from-purple-400 via-pink-500 to-red-500;
}
```

### Background

Chỉnh sửa `app/page.tsx`:
```tsx
<main className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
```

## 🚀 Deployment

### Vercel (Khuyến nghị)

```bash
# Cài đặt Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Hoặc:
1. Push code lên GitHub
2. Import vào [vercel.com](https://vercel.com)
3. Deploy tự động

### Netlify

1. Push code lên GitHub
2. Import vào [netlify.com](https://netlify.com)
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`

### CI/CD với GitHub Actions

Project đã cấu hình sẵn CI/CD:

1. Push code lên GitHub
2. Workflows tự động chạy:
   - ✅ Build và test
   - ✅ Lint check
   - ✅ Deploy production
   - ✅ Lighthouse CI

**Setup chi tiết:** Xem [CI-CD-SETUP.md](CI-CD-SETUP.md)

## 📚 Tài liệu

- 📖 [HUONG_DAN.md](HUONG_DAN.md) - Hướng dẫn chi tiết
- 🚀 [DEPLOYMENT.md](DEPLOYMENT.md) - Hướng dẫn deploy
- 🔄 [CI-CD-SETUP.md](CI-CD-SETUP.md) - Setup CI/CD
- 📁 [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md) - Cấu trúc project

## 🛠️ Scripts

```bash
npm run dev          # Development server
npm run build        # Production build
npm start            # Production server
npm run lint         # Check linting
npm run lint:fix     # Auto-fix linting
npm run type-check   # TypeScript check
npm run clean        # Clean build files
```

## 🏗️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **CI/CD:** GitHub Actions
- **Deployment:** Vercel / Netlify
- **Performance:** Lighthouse CI

## 📊 Performance

**Target Lighthouse Scores:**
- ⚡ Performance: > 90
- ♿ Accessibility: > 95
- ✅ Best Practices: > 95
- 🔍 SEO: > 95

## 🎯 Features Checklist

- [x] Responsive design
- [x] Dark theme với gradient
- [x] Glass morphism effects
- [x] Smooth animations
- [x] CV download
- [x] Video integration
- [x] Contact form
- [x] Social links
- [x] CI/CD pipeline
- [x] Performance optimization
- [x] Security headers
- [x] SEO optimization

## 🔐 Security

- ✅ Security headers configured
- ✅ XSS protection
- ✅ CSRF protection
- ✅ Content Security Policy
- ✅ HTTPS only

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🤝 Đóng góp

Mọi đóng góp đều được chào đón!

1. Fork repository
2. Tạo branch mới (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Tạo Pull Request

## 📄 License

MIT License - Tự do sử dụng cho dự án cá nhân và thương mại.

## 💡 Tips

1. **Customize màu sắc** theo brand của bạn
2. **Thêm ảnh thật** vào thư mục `public/`
3. **Cập nhật metadata** trong `app/layout.tsx` cho SEO
4. **Test responsive** trên nhiều thiết bị
5. **Enable Analytics** (Google Analytics hoặc Vercel Analytics)
6. **Setup custom domain** sau khi deploy

## 🆘 Hỗ trợ

Nếu gặp vấn đề:
1. Check [HUONG_DAN.md](HUONG_DAN.md) - Troubleshooting section
2. Tạo issue trên GitHub
3. Check GitHub Actions logs nếu deployment fails

## 🎉 Hoàn thành!

Portfolio của bạn đã sẵn sàng! Customize theo ý thích và deploy lên production.

---

**Made with ❤️ using Next.js**

**Version:** 1.0.0  
**Last Updated:** January 2026

## 📞 Contact

- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourusername)
- Email: your-email@example.com

---

⭐ Nếu project này hữu ích, hãy cho một star nhé!

# 📖 Hướng dẫn Sử dụng Portfolio

## 🎯 Giới thiệu

Portfolio website này được xây dựng với Next.js 15, TypeScript và Tailwind CSS. Thiết kế sang trọng với hiệu ứng chuyên nghiệp, responsive hoàn toàn và tích hợp CI/CD.

## 🚀 Bắt đầu nhanh

### 1. Cài đặt

```bash
cd portfolio
npm install
```

### 2. Chạy Development Server

```bash
npm run dev
```

Mở trình duyệt tại: http://localhost:3000

### 3. Build Production

```bash
npm run build
npm start
```

## 📝 Tùy chỉnh Nội dung

### Thông tin Cá nhân

#### Hero Section (`components/Hero.tsx`)
```tsx
// Dòng 23: Thay đổi tên
<h1>Xin chào, tôi là [TÊN CỦA BẠN]</h1>

// Dòng 26: Thay đổi chức danh
<p>Full Stack Developer | UI/UX Designer</p>
```

#### About Section (`components/About.tsx`)
```tsx
// Dòng 12-20: Cập nhật giới thiệu về bản thân
<p>Tôi là một developer đam mê công nghệ...</p>
```

### Kỹ năng

Mở `components/Skills.tsx` và chỉnh sửa mảng `skills`:

```tsx
const skills = [
  { name: 'React', level: 90, color: 'from-blue-500 to-cyan-500' },
  { name: 'Next.js', level: 85, color: 'from-purple-500 to-pink-500' },
  // Thêm kỹ năng của bạn...
];
```

**Tham số:**
- `name`: Tên kỹ năng
- `level`: Mức độ thành thạo (0-100)
- `color`: Màu gradient (Tailwind classes)

### Dự án

Mở `components/Projects.tsx` và cập nhật mảng `projects`:

```tsx
const projects = [
  {
    title: 'Tên Dự Án',
    description: 'Mô tả ngắn gọn về dự án',
    tech: ['React', 'Node.js', 'MongoDB'],
    image: '/project1.jpg', // Đặt ảnh trong thư mục public/
  },
  // Thêm dự án khác...
];
```

### Video

#### Cách 1: Video Local

1. Đặt video vào `public/intro-video.mp4`
2. Đặt poster image vào `public/video-poster.jpg`

#### Cách 2: YouTube Embed

Mở `components/Video.tsx` và thay thế:

```tsx
<iframe
  className="w-full h-full"
  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
  title="Video giới thiệu"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>
```

### CV

1. Đặt file CV (PDF) vào `public/cv.pdf`
2. Hoặc đổi tên file trong `components/Hero.tsx`:

```tsx
const handleDownloadCV = () => {
  const link = document.createElement('a');
  link.href = '/ten-file-cv-cua-ban.pdf'; // Đổi tên ở đây
  link.download = 'CV.pdf';
  link.click();
};
```

### Social Media Links

Mở `components/Contact.tsx` và cập nhật links (dòng 60-70):

```tsx
<a href="https://github.com/USERNAME" ...>
<a href="https://linkedin.com/in/USERNAME" ...>
```

## 🎨 Tùy chỉnh Giao diện

### Thay đổi Màu sắc Theme

Mở `app/globals.css`:

```css
/* Gradient chính */
.text-gradient {
  @apply bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500;
}

/* Thay đổi màu theo ý bạn */
.text-gradient {
  @apply bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-500;
}
```

### Background Gradient

Mở `app/page.tsx` (dòng 9):

```tsx
<main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
```

Thay đổi màu:
```tsx
<main className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
```

### Glass Effect

Điều chỉnh trong `app/globals.css`:

```css
.glass-effect {
  @apply bg-white/10 backdrop-blur-lg border border-white/20;
}

/* Tăng độ mờ */
.glass-effect {
  @apply bg-white/20 backdrop-blur-xl border border-white/30;
}
```

## 📱 Responsive Design

Website đã được tối ưu cho:
- 📱 Mobile: < 768px
- 📱 Tablet: 768px - 1024px
- 💻 Desktop: > 1024px

Để tùy chỉnh breakpoints, sử dụng Tailwind classes:
- `sm:` - Small (640px+)
- `md:` - Medium (768px+)
- `lg:` - Large (1024px+)
- `xl:` - Extra Large (1280px+)

## 🔧 Scripts Hữu ích

```bash
# Development
npm run dev              # Chạy dev server
npm run build           # Build production
npm start               # Chạy production server

# Code Quality
npm run lint            # Kiểm tra lỗi
npm run lint:fix        # Tự động fix lỗi
npm run type-check      # Kiểm tra TypeScript

# Maintenance
npm run clean           # Xóa cache và build files
```

## 🎭 Hiệu ứng có sẵn

### Animation Classes

```tsx
// Float animation
<div className="animate-float">...</div>

// Glow effect
<div className="animate-glow">...</div>

// Hover scale
<div className="hover:scale-105 transition-transform duration-300">...</div>
```

### Tạo Animation mới

Thêm vào `app/globals.css`:

```css
@keyframes slide-in {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.animate-slide-in {
  animation: slide-in 0.5s ease-out;
}
```

## 📦 Thêm Tính năng mới

### Thêm Section mới

1. Tạo component trong `components/NewSection.tsx`:

```tsx
export default function NewSection() {
  return (
    <section id="new-section" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gradient">
          Tiêu đề Section
        </h2>
        {/* Nội dung của bạn */}
      </div>
    </section>
  );
}
```

2. Import vào `app/page.tsx`:

```tsx
import NewSection from '@/components/NewSection';

export default function Home() {
  return (
    <main>
      {/* ... các section khác */}
      <NewSection />
    </main>
  );
}
```

3. Thêm vào Navigation (`components/Navigation.tsx`):

```tsx
{['Trang chủ', 'Giới thiệu', 'Section Mới'].map((item, index) => (
  <li key={item}>
    <button onClick={() => scrollToSection(['hero', 'about', 'new-section'][index])}>
      {item}
    </button>
  </li>
))}
```

## 🐛 Troubleshooting

### Lỗi Build

```bash
# Xóa cache và rebuild
npm run clean
npm install
npm run build
```

### Lỗi TypeScript

```bash
# Kiểm tra lỗi
npm run type-check

# Nếu lỗi do dependencies
rm -rf node_modules package-lock.json
npm install
```

### Video không hiển thị

- Kiểm tra file video có trong `public/`
- Đảm bảo format video được hỗ trợ (MP4, WebM)
- Kiểm tra đường dẫn trong component

### CV không tải được

- Kiểm tra file `public/cv.pdf` tồn tại
- Kiểm tra tên file trong `Hero.tsx`
- Thử hard refresh (Ctrl + F5)

## 📚 Tài nguyên

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Documentation](https://react.dev)

## 💡 Tips

1. **Performance**: Sử dụng Next.js Image component cho ảnh
2. **SEO**: Cập nhật metadata trong `app/layout.tsx`
3. **Analytics**: Thêm Google Analytics hoặc Vercel Analytics
4. **Testing**: Test trên nhiều trình duyệt và thiết bị
5. **Accessibility**: Đảm bảo contrast ratio và keyboard navigation

## 🎉 Hoàn thành!

Bạn đã sẵn sàng để customize và deploy portfolio của mình. Chúc bạn thành công!

---

Nếu cần hỗ trợ, hãy tạo issue trên GitHub repository.

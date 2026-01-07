# Hướng dẫn Deploy Portfolio

## 🚀 Deploy lên Vercel (Khuyến nghị)

Vercel là nền tảng tốt nhất cho Next.js, được tạo bởi team phát triển Next.js.

### Bước 1: Chuẩn bị

1. Tạo tài khoản tại [vercel.com](https://vercel.com)
2. Cài đặt Vercel CLI (tùy chọn):
```bash
npm i -g vercel
```

### Bước 2: Deploy qua Web Interface

1. Push code lên GitHub
2. Truy cập [vercel.com/new](https://vercel.com/new)
3. Import repository của bạn
4. Vercel tự động detect Next.js và cấu hình
5. Click "Deploy"

### Bước 3: Deploy qua CLI

```bash
cd portfolio
vercel
```

Làm theo hướng dẫn trên terminal.

### Cấu hình CI/CD với Vercel

File `.github/workflows/ci-cd.yml` đã được cấu hình sẵn. Để kích hoạt:

1. Lấy Vercel Token: Settings → Tokens → Create
2. Thêm secrets vào GitHub:
   - `VERCEL_TOKEN`
   - `VERCEL_ORG_ID` (từ .vercel/project.json)
   - `VERCEL_PROJECT_ID` (từ .vercel/project.json)
3. Uncomment phần Vercel deployment trong workflow file

---

## 🌐 Deploy lên Netlify

### Bước 1: Chuẩn bị

1. Tạo tài khoản tại [netlify.com](https://netlify.com)
2. Cài đặt Netlify CLI (tùy chọn):
```bash
npm i -g netlify-cli
```

### Bước 2: Deploy qua Web Interface

1. Push code lên GitHub
2. Truy cập [app.netlify.com](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Chọn repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy"

### Bước 3: Deploy qua CLI

```bash
cd portfolio
netlify init
netlify deploy --prod
```

### Cấu hình CI/CD với Netlify

1. Lấy Auth Token: User Settings → Applications → Personal access tokens
2. Lấy Site ID: Site settings → General → Site details
3. Thêm secrets vào GitHub:
   - `NETLIFY_AUTH_TOKEN`
   - `NETLIFY_SITE_ID`
4. Uncomment phần Netlify deployment trong workflow file

---

## 🐳 Deploy với Docker

### Tạo Dockerfile

```dockerfile
FROM node:20-alpine AS base

FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]
```

### Build và Run

```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

---

## ☁️ Deploy lên các nền tảng khác

### AWS Amplify

1. Truy cập AWS Amplify Console
2. Connect repository
3. Build settings tự động detect Next.js
4. Deploy

### Railway

1. Truy cập [railway.app](https://railway.app)
2. New Project → Deploy from GitHub
3. Chọn repository
4. Railway tự động deploy

### Render

1. Truy cập [render.com](https://render.com)
2. New → Web Service
3. Connect repository
4. Build command: `npm run build`
5. Start command: `npm start`

---

## 🔧 Environment Variables

Nếu cần thêm environment variables:

### Vercel
```bash
vercel env add VARIABLE_NAME
```

### Netlify
Site settings → Environment variables → Add variable

### GitHub Actions
Repository → Settings → Secrets and variables → Actions

---

## 📊 Monitoring và Analytics

### Vercel Analytics

Thêm vào `app/layout.tsx`:
```tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### Google Analytics

1. Cài đặt: `npm install @next/third-parties`
2. Thêm vào layout:
```tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
      <GoogleAnalytics gaId="G-XXXXXXXXXX" />
    </html>
  )
}
```

---

## 🔒 Security Headers

Đã được cấu hình trong `vercel.json` và `netlify.toml`:
- X-Frame-Options
- X-Content-Type-Options
- X-XSS-Protection
- Referrer-Policy

---

## 🎯 Performance Tips

1. **Image Optimization**: Sử dụng Next.js Image component
2. **Code Splitting**: Tự động với Next.js App Router
3. **Caching**: Cấu hình trong `next.config.ts`
4. **CDN**: Vercel/Netlify tự động sử dụng CDN

---

## 📝 Checklist trước khi Deploy

- [ ] Cập nhật thông tin cá nhân trong components
- [ ] Thêm CV vào `public/cv.pdf`
- [ ] Thêm video hoặc cấu hình YouTube link
- [ ] Thêm ảnh dự án vào `public/`
- [ ] Cập nhật social media links
- [ ] Test responsive trên nhiều thiết bị
- [ ] Kiểm tra performance với Lighthouse
- [ ] Cấu hình domain tùy chỉnh (nếu có)

---

## 🆘 Troubleshooting

### Build fails
```bash
# Clear cache và rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Port already in use
```bash
# Kill process trên port 3000
npx kill-port 3000
```

### Environment variables không hoạt động
- Đảm bảo prefix `NEXT_PUBLIC_` cho client-side variables
- Restart dev server sau khi thay đổi .env

---

Chúc bạn deploy thành công! 🎉

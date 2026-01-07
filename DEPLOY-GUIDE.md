# 🚀 Hướng Dẫn Deploy CI/CD - GitHub Actions & Vercel

## 📋 Mục Lục
1. [Chuẩn Bị](#chuẩn-bị)
2. [Deploy lên Vercel](#deploy-lên-vercel)
3. [Setup GitHub Actions](#setup-github-actions)
4. [Kiểm Tra & Test](#kiểm-tra--test)
5. [Troubleshooting](#troubleshooting)

---

## 🎯 Chuẩn Bị

### 1. Tạo GitHub Repository

```bash
# Khởi tạo git (nếu chưa có)
git init

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Add tất cả files
git add .

# Commit
git commit -m "Initial commit: Portfolio with CI/CD"

# Push lên GitHub
git push -u origin main
```

### 2. Cấu Trúc Files Cần Thiết

Đảm bảo bạn có các files sau:
- ✅ `.github/workflows/ci-cd.yml` - GitHub Actions workflow
- ✅ `vercel.json` - Vercel configuration
- ✅ `.env.example` - Environment variables template
- ✅ `next.config.ts` - Next.js configuration

---

## 🌐 Deploy lên Vercel

### Bước 1: Tạo Tài Khoản Vercel

1. Truy cập [vercel.com](https://vercel.com)
2. Click **"Sign Up"**
3. Chọn **"Continue with GitHub"**
4. Authorize Vercel truy cập GitHub của bạn

### Bước 2: Import Project

1. Sau khi đăng nhập, click **"Add New..."** → **"Project"**
2. Chọn repository của bạn từ danh sách
3. Click **"Import"**

### Bước 3: Configure Project

```
Framework Preset: Next.js
Root Directory: ./portfolio (hoặc ./ nếu code ở root)
Build Command: npm run build
Output Directory: .next
Install Command: npm install
```

### Bước 4: Environment Variables (Nếu Cần)

Nếu bạn có API keys hoặc secrets:

1. Trong Vercel Dashboard → **Settings** → **Environment Variables**
2. Thêm các biến:
   ```
   NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
   # Thêm các biến khác nếu cần
   ```

### Bước 5: Deploy

1. Click **"Deploy"**
2. Đợi 2-3 phút để Vercel build và deploy
3. Bạn sẽ nhận được URL: `https://your-project.vercel.app`

### Bước 6: Custom Domain (Optional)

1. Trong Vercel Dashboard → **Settings** → **Domains**
2. Add domain của bạn
3. Cập nhật DNS records theo hướng dẫn của Vercel

---

## ⚙️ Setup GitHub Actions

### Bước 1: Tạo Vercel Token

1. Truy cập [vercel.com/account/tokens](https://vercel.com/account/tokens)
2. Click **"Create Token"**
3. Đặt tên: `GitHub Actions Token`
4. Scope: **Full Account**
5. Copy token (chỉ hiện 1 lần!)

### Bước 2: Lấy Vercel Project Info

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Link project
cd portfolio
vercel link

# Lấy Project ID và Org ID
cat .vercel/project.json
```

Bạn sẽ thấy:
```json
{
  "projectId": "prj_xxxxxxxxxxxx",
  "orgId": "team_xxxxxxxxxxxx"
}
```

### Bước 3: Add GitHub Secrets

1. Vào GitHub repository → **Settings** → **Secrets and variables** → **Actions**
2. Click **"New repository secret"**
3. Thêm 3 secrets:

```
Name: VERCEL_TOKEN
Value: [Token từ bước 1]

Name: VERCEL_ORG_ID
Value: [orgId từ .vercel/project.json]

Name: VERCEL_PROJECT_ID
Value: [projectId từ .vercel/project.json]
```

### Bước 4: Verify GitHub Actions Workflow

File `.github/workflows/ci-cd.yml` đã có sẵn với nội dung:

```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run linter
      run: npm run lint
    
    - name: Build project
      run: npm run build
    
    - name: Run tests (if available)
      run: npm test --if-present

  deploy-preview:
    needs: build-and-test
    if: github.event_name == 'pull_request'
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Deploy to Vercel (Preview)
      uses: amondnet/vercel-action@v20
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
        vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}

  deploy-production:
    needs: build-and-test
    if: github.ref == 'refs/heads/main' && github.event_name == 'push'
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Deploy to Vercel (Production)
      uses: amondnet/vercel-action@v20
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
        vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
        vercel-args: '--prod'
```

### Bước 5: Test CI/CD

```bash
# Tạo thay đổi nhỏ
echo "# Test CI/CD" >> README.md

# Commit và push
git add .
git commit -m "test: CI/CD pipeline"
git push origin main
```

---

## ✅ Kiểm Tra & Test

### 1. Kiểm Tra GitHub Actions

1. Vào GitHub repository → **Actions** tab
2. Bạn sẽ thấy workflow đang chạy
3. Click vào workflow để xem chi tiết
4. Đợi tất cả jobs hoàn thành (màu xanh ✓)

### 2. Kiểm Tra Vercel Deployment

1. Vào [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click vào project của bạn
3. Xem deployment history
4. Click **"Visit"** để xem site

### 3. Test Workflow Hoàn Chỉnh

#### Test Pull Request (Preview Deploy):
```bash
# Tạo branch mới
git checkout -b feature/test-pr

# Thay đổi code
# ... edit files ...

# Commit và push
git add .
git commit -m "feat: test feature"
git push origin feature/test-pr

# Tạo Pull Request trên GitHub
# → CI/CD sẽ tự động deploy preview
```

#### Test Production Deploy:
```bash
# Merge PR vào main
# → CI/CD sẽ tự động deploy production

# Hoặc push trực tiếp vào main
git checkout main
git merge feature/test-pr
git push origin main
```

---

## 🔧 Troubleshooting

### Lỗi: "Build failed"

**Giải pháp:**
```bash
# Test build locally trước
npm run build

# Nếu có lỗi, fix rồi commit lại
```

### Lỗi: "Vercel token invalid"

**Giải pháp:**
1. Tạo token mới tại [vercel.com/account/tokens](https://vercel.com/account/tokens)
2. Update GitHub Secret `VERCEL_TOKEN`

### Lỗi: "Project not found"

**Giải pháp:**
1. Verify `VERCEL_PROJECT_ID` và `VERCEL_ORG_ID`
2. Chạy lại `vercel link` để lấy IDs mới

### Lỗi: "npm ci failed"

**Giải pháp:**
```bash
# Xóa node_modules và package-lock.json
rm -rf node_modules package-lock.json

# Install lại
npm install

# Commit package-lock.json mới
git add package-lock.json
git commit -m "fix: update package-lock.json"
git push
```

### Site không load đúng trên Vercel

**Giải pháp:**
1. Check `next.config.ts`:
```typescript
const nextConfig = {
  output: 'standalone', // Nếu cần
  images: {
    domains: ['your-domain.com'], // Nếu dùng external images
  },
};
```

2. Check `vercel.json`:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs"
}
```

---

## 📊 Workflow Diagram

```
┌─────────────────┐
│   Push to Main  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  GitHub Actions │
│   - Lint        │
│   - Build       │
│   - Test        │
└────────┬────────┘
         │
         ▼
    ✓ Success?
         │
         ▼
┌─────────────────┐
│ Deploy to Vercel│
│   (Production)  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   Live Site! 🎉 │
└─────────────────┘
```

---

## 🎯 Best Practices

### 1. Branch Strategy
```
main (production)
  ├── develop (staging)
  └── feature/* (preview)
```

### 2. Commit Messages
```bash
feat: add new feature
fix: fix bug
docs: update documentation
style: format code
refactor: refactor code
test: add tests
chore: update dependencies
```

### 3. Environment Variables
- Không commit `.env` files
- Dùng `.env.example` làm template
- Add secrets vào Vercel Dashboard

### 4. Monitoring
- Check GitHub Actions regularly
- Monitor Vercel Analytics
- Setup error tracking (Sentry, etc.)

---

## 📚 Resources

- [Vercel Documentation](https://vercel.com/docs)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Next.js Deployment](https://nextjs.org/docs/deployment)

---

## 🎉 Hoàn Thành!

Bây giờ mỗi khi bạn push code lên GitHub:
1. ✅ GitHub Actions tự động test & build
2. ✅ Vercel tự động deploy
3. ✅ Site của bạn luôn up-to-date!

**Live URL:** `https://your-project.vercel.app`

---

Made with ❤️ by Dinh Xuan Hai

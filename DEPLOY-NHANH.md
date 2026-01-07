# 🚀 Hướng Dẫn Deploy Nhanh - 5 Phút

## ⚡ Quick Start

### Bước 1: Push Code Lên GitHub (2 phút)

```bash
# Tạo repo mới trên GitHub: https://github.com/new
# Sau đó chạy:

git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### Bước 2: Deploy Lên Vercel (2 phút)

1. Vào [vercel.com](https://vercel.com) → Sign up với GitHub
2. Click **"Add New Project"**
3. Chọn repository vừa tạo
4. Click **"Deploy"**
5. Đợi 2-3 phút → Xong! 🎉

**URL của bạn:** `https://your-project.vercel.app`

### Bước 3: Setup CI/CD với GitHub Actions (1 phút)

#### 3.1. Lấy Vercel Token
1. Vào [vercel.com/account/tokens](https://vercel.com/account/tokens)
2. Click **"Create Token"** → Copy token

#### 3.2. Lấy Project IDs
```bash
npm i -g vercel
vercel login
vercel link
cat .vercel/project.json
```

Copy `projectId` và `orgId`

#### 3.3. Add GitHub Secrets
1. Vào GitHub repo → **Settings** → **Secrets** → **Actions**
2. Add 3 secrets:
   - `VERCEL_TOKEN` = [token từ bước 3.1]
   - `VERCEL_PROJECT_ID` = [projectId từ bước 3.2]
   - `VERCEL_ORG_ID` = [orgId từ bước 3.2]

### Bước 4: Test (30 giây)

```bash
# Thay đổi gì đó
echo "# Test" >> README.md

# Push
git add .
git commit -m "test: CI/CD"
git push

# Check GitHub Actions tab → Workflow đang chạy!
```

---

## 🎯 Xong Rồi!

Từ giờ mỗi khi push code:
- ✅ GitHub Actions tự động test
- ✅ Vercel tự động deploy
- ✅ Site luôn mới nhất!

---

## 🆘 Gặp Lỗi?

### Lỗi Build
```bash
# Test local trước
npm run build

# Fix lỗi rồi push lại
```

### Lỗi Token
- Tạo token mới tại [vercel.com/account/tokens](https://vercel.com/account/tokens)
- Update GitHub Secret

### Cần Giúp Đỡ?
📖 Xem hướng dẫn chi tiết: [DEPLOY-GUIDE.md](./DEPLOY-GUIDE.md)

---

## 📱 Chia Sẻ Portfolio

Sau khi deploy xong, share link của bạn:

```
🌐 Portfolio: https://your-project.vercel.app
💼 LinkedIn: [Your LinkedIn]
📧 Email: [Your Email]
```

---

**Chúc mừng! Portfolio của bạn đã online! 🎉**

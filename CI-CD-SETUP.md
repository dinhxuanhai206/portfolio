# 🔄 Hướng dẫn Cấu hình CI/CD

## 📋 Tổng quan

Project đã được cấu hình sẵn 2 GitHub Actions workflows:

1. **CI/CD Pipeline** (`.github/workflows/ci-cd.yml`)
   - Tự động build và test
   - Deploy lên production

2. **Lighthouse CI** (`.github/workflows/lighthouse.yml`)
   - Kiểm tra performance
   - Đánh giá SEO và accessibility

## 🚀 Setup GitHub Actions

### Bước 1: Push code lên GitHub

```bash
cd portfolio

# Khởi tạo git (nếu chưa có)
git init

# Add remote repository
git remote add origin https://github.com/USERNAME/portfolio.git

# Commit và push
git add .
git commit -m "Initial commit: Portfolio website"
git push -u origin main
```

### Bước 2: Kích hoạt GitHub Actions

GitHub Actions sẽ tự động chạy khi:
- Push code lên branch `main` hoặc `master`
- Tạo Pull Request

Kiểm tra tại: `https://github.com/USERNAME/portfolio/actions`

## 🔧 Cấu hình Deploy tự động

### Option 1: Vercel (Khuyến nghị)

#### 1. Lấy Vercel Tokens

```bash
# Cài đặt Vercel CLI
npm i -g vercel

# Login và deploy lần đầu
cd portfolio
vercel

# Lấy tokens
vercel whoami
```

#### 2. Lấy Project IDs

Sau khi deploy lần đầu, check file `.vercel/project.json`:

```json
{
  "orgId": "team_xxxxxxxxxxxxx",
  "projectId": "prj_xxxxxxxxxxxxx"
}
```

#### 3. Thêm GitHub Secrets

Vào repository → Settings → Secrets and variables → Actions → New repository secret

Thêm 3 secrets:
- `VERCEL_TOKEN`: Personal Access Token từ Vercel
  - Lấy tại: https://vercel.com/account/tokens
- `VERCEL_ORG_ID`: orgId từ `.vercel/project.json`
- `VERCEL_PROJECT_ID`: projectId từ `.vercel/project.json`

#### 4. Kích hoạt Workflow

Mở `.github/workflows/ci-cd.yml` và uncomment phần Vercel:

```yaml
# Vercel deployment (uncomment and configure)
- name: Deploy to Vercel
  uses: amondnet/vercel-action@v25
  with:
    vercel-token: ${{ secrets.VERCEL_TOKEN }}
    vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
    vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
    vercel-args: '--prod'
```

Xóa dấu `#` ở đầu mỗi dòng.

#### 5. Test

```bash
git add .
git commit -m "Enable Vercel deployment"
git push
```

Check Actions tab để xem deployment progress.

---

### Option 2: Netlify

#### 1. Lấy Netlify Tokens

1. Đăng nhập Netlify: https://app.netlify.com
2. User Settings → Applications → Personal access tokens
3. Click "New access token"
4. Copy token

#### 2. Lấy Site ID

1. Deploy site lần đầu qua Netlify UI
2. Site settings → General → Site details
3. Copy "Site ID"

#### 3. Thêm GitHub Secrets

Thêm 2 secrets:
- `NETLIFY_AUTH_TOKEN`: Token từ bước 1
- `NETLIFY_SITE_ID`: Site ID từ bước 2

#### 4. Kích hoạt Workflow

Mở `.github/workflows/ci-cd.yml` và uncomment phần Netlify:

```yaml
# Netlify deployment (alternative)
- name: Deploy to Netlify
  uses: nwtgck/actions-netlify@v2
  with:
    publish-dir: './out'
    production-branch: main
    github-token: ${{ secrets.GITHUB_TOKEN }}
    deploy-message: "Deploy from GitHub Actions"
  env:
    NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
    NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

#### 5. Cập nhật next.config.ts

Thêm output static:

```typescript
const nextConfig: NextConfig = {
  output: 'export', // Thêm dòng này cho Netlify
  // ... các config khác
};
```

---

## 🧪 Lighthouse CI Setup

Workflow Lighthouse đã được cấu hình sẵn và sẽ chạy tự động khi:
- Tạo Pull Request vào branch main/master

### Xem kết quả

1. Vào Pull Request
2. Scroll xuống "Checks"
3. Click "Lighthouse CI"
4. Xem report chi tiết

### Tùy chỉnh Lighthouse

Mở `.github/workflows/lighthouse.yml`:

```yaml
- name: Run Lighthouse CI
  uses: treosh/lighthouse-ci-action@v10
  with:
    urls: |
      http://localhost:3000
      http://localhost:3000/about
    uploadArtifacts: true
    temporaryPublicStorage: true
    # Thêm URLs khác để test
```

---

## 🔐 Environment Variables trong CI/CD

### Thêm Environment Variables

#### GitHub Actions

Repository → Settings → Secrets and variables → Actions

**Secrets** (cho sensitive data):
```
NEXT_PUBLIC_API_KEY
DATABASE_URL
```

**Variables** (cho non-sensitive data):
```
NEXT_PUBLIC_SITE_URL
NEXT_PUBLIC_SITE_NAME
```

#### Sử dụng trong Workflow

```yaml
- name: Build project
  run: npm run build
  env:
    NEXT_PUBLIC_API_KEY: ${{ secrets.NEXT_PUBLIC_API_KEY }}
    NEXT_PUBLIC_SITE_URL: ${{ vars.NEXT_PUBLIC_SITE_URL }}
```

---

## 📊 Monitoring và Notifications

### Slack Notifications

Thêm vào workflow:

```yaml
- name: Slack Notification
  uses: 8398a7/action-slack@v3
  with:
    status: ${{ job.status }}
    text: 'Deployment completed!'
    webhook_url: ${{ secrets.SLACK_WEBHOOK }}
  if: always()
```

### Discord Notifications

```yaml
- name: Discord Notification
  uses: sarisia/actions-status-discord@v1
  with:
    webhook: ${{ secrets.DISCORD_WEBHOOK }}
    status: ${{ job.status }}
    title: "Portfolio Deployment"
```

---

## 🔄 Workflow Triggers

### Tùy chỉnh khi nào workflow chạy

```yaml
on:
  push:
    branches: [ main, develop ]
    paths:
      - 'app/**'
      - 'components/**'
      - 'public/**'
  pull_request:
    branches: [ main ]
  schedule:
    - cron: '0 0 * * 0'  # Chạy mỗi Chủ nhật
  workflow_dispatch:  # Cho phép chạy manual
```

---

## 🐛 Troubleshooting CI/CD

### Build fails trong GitHub Actions

**Lỗi: "Module not found"**
```yaml
# Đảm bảo install dependencies đúng cách
- name: Install dependencies
  run: npm ci  # Sử dụng 'ci' thay vì 'install'
```

**Lỗi: "Out of memory"**
```yaml
- name: Build project
  run: NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

**Lỗi: TypeScript errors**
```bash
# Local: Fix errors trước khi push
npm run type-check
npm run lint:fix
```

### Deployment fails

**Vercel timeout**
- Kiểm tra build time (max 45 phút free plan)
- Optimize dependencies

**Netlify build fails**
- Kiểm tra `output: 'export'` trong next.config.ts
- Đảm bảo không dùng server-side features

### Secrets không hoạt động

1. Kiểm tra tên secret khớp với workflow
2. Secrets phân biệt hoa thường
3. Restart workflow sau khi thêm secrets

---

## 📈 Best Practices

### 1. Branch Protection

Settings → Branches → Add rule:
- ✅ Require pull request reviews
- ✅ Require status checks to pass
- ✅ Require branches to be up to date

### 2. Caching Dependencies

Đã được cấu hình trong workflow:
```yaml
- uses: actions/setup-node@v4
  with:
    node-version: '20.x'
    cache: 'npm'  # Cache npm dependencies
```

### 3. Matrix Testing

Test trên nhiều Node versions:
```yaml
strategy:
  matrix:
    node-version: [18.x, 20.x, 22.x]
```

### 4. Artifacts

Lưu build artifacts:
```yaml
- uses: actions/upload-artifact@v4
  with:
    name: build
    path: .next/
    retention-days: 7
```

---

## 🎯 Checklist Setup CI/CD

- [ ] Push code lên GitHub
- [ ] Kiểm tra GitHub Actions đã chạy
- [ ] Setup Vercel hoặc Netlify
- [ ] Thêm deployment secrets
- [ ] Uncomment deployment workflow
- [ ] Test deployment với commit mới
- [ ] Setup branch protection
- [ ] Configure notifications (optional)
- [ ] Test Lighthouse CI với PR
- [ ] Document custom workflows

---

## 📚 Resources

- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Vercel CLI Docs](https://vercel.com/docs/cli)
- [Netlify CLI Docs](https://docs.netlify.com/cli/get-started/)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)

---

## 🎉 Hoàn thành!

CI/CD pipeline của bạn đã sẵn sàng! Mỗi lần push code:
1. ✅ Tự động build và test
2. ✅ Kiểm tra code quality
3. ✅ Deploy lên production
4. ✅ Chạy performance tests

Happy deploying! 🚀

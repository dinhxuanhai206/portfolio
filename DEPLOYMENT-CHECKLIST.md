# ✅ Deployment Checklist

## 📋 Pre-Deployment

### Code Quality
- [ ] Code đã được test local (`npm run dev`)
- [ ] Build thành công (`npm run build`)
- [ ] Không có lỗi lint (`npm run lint`)
- [ ] Tất cả links hoạt động
- [ ] Images load đúng
- [ ] CV file đã được thêm vào `public/cv.pdf`

### Content
- [ ] Thông tin cá nhân đã được cập nhật
- [ ] Email, phone, social links đúng
- [ ] Work experience đã được thêm
- [ ] Skills đã được cập nhật
- [ ] Projects đã được thêm
- [ ] About section đã được viết

### Configuration
- [ ] `next.config.ts` đã được cấu hình
- [ ] `vercel.json` đã có
- [ ] `.github/workflows/ci-cd.yml` đã có
- [ ] `.env.example` đã được tạo (nếu cần)
- [ ] `.gitignore` đã đầy đủ

---

## 🚀 GitHub Setup

### Repository
- [ ] Repository đã được tạo trên GitHub
- [ ] Code đã được push lên GitHub
- [ ] README.md đã được cập nhật
- [ ] License đã được thêm (nếu cần)

### Git Configuration
```bash
# Checklist commands
git remote -v  # Verify remote
git status     # Check status
git log --oneline -5  # Check commits
```

---

## 🌐 Vercel Deployment

### Account Setup
- [ ] Tài khoản Vercel đã được tạo
- [ ] GitHub đã được connect với Vercel
- [ ] Vercel CLI đã được cài đặt (`npm i -g vercel`)

### Project Setup
- [ ] Project đã được import vào Vercel
- [ ] Build settings đã đúng:
  - Framework: Next.js
  - Build Command: `npm run build`
  - Output Directory: `.next`
- [ ] Environment variables đã được thêm (nếu cần)

### Deployment
- [ ] First deployment thành công
- [ ] Site đã được test trên production URL
- [ ] Custom domain đã được setup (optional)
- [ ] SSL certificate đã active

### Vercel URLs
```
Production: https://your-project.vercel.app
Preview: https://your-project-git-branch.vercel.app
```

---

## ⚙️ CI/CD Setup

### Vercel Token
- [ ] Token đã được tạo tại [vercel.com/account/tokens](https://vercel.com/account/tokens)
- [ ] Token đã được copy (chỉ hiện 1 lần!)

### Project IDs
```bash
# Run these commands
vercel login
vercel link
cat .vercel/project.json
```

- [ ] `projectId` đã được copy
- [ ] `orgId` đã được copy

### GitHub Secrets
Vào: `https://github.com/YOUR_USERNAME/YOUR_REPO/settings/secrets/actions`

- [ ] `VERCEL_TOKEN` đã được thêm
- [ ] `VERCEL_PROJECT_ID` đã được thêm
- [ ] `VERCEL_ORG_ID` đã được thêm

### Workflow Test
- [ ] Push code để trigger workflow
- [ ] GitHub Actions workflow chạy thành công
- [ ] Build job pass ✅
- [ ] Deploy job pass ✅
- [ ] Site đã được deploy tự động

---

## 🧪 Testing

### Functionality
- [ ] Navigation hoạt động
- [ ] Smooth scroll hoạt động
- [ ] Theme switcher hoạt động
- [ ] Contact form hoạt động
- [ ] CV download hoạt động
- [ ] Video player hoạt động
- [ ] Mini game hoạt động
- [ ] Achievement system hoạt động

### Responsive
- [ ] Mobile (< 768px) hiển thị đúng
- [ ] Tablet (768px - 1024px) hiển thị đúng
- [ ] Desktop (> 1024px) hiển thị đúng

### Performance
- [ ] Page load < 3s
- [ ] Images được optimize
- [ ] No console errors
- [ ] Lighthouse score > 90

### Browser Compatibility
- [ ] Chrome ✅
- [ ] Firefox ✅
- [ ] Safari ✅
- [ ] Edge ✅

---

## 📊 Post-Deployment

### Monitoring
- [ ] Vercel Analytics đã được enable
- [ ] Error tracking đã được setup (optional)
- [ ] Google Analytics đã được thêm (optional)

### SEO
- [ ] Meta tags đã đầy đủ
- [ ] Open Graph tags đã có
- [ ] Sitemap đã được tạo (optional)
- [ ] robots.txt đã được thêm (optional)

### Documentation
- [ ] README.md đã được update với live URL
- [ ] Deployment guide đã được đọc
- [ ] Team members đã được thông báo (nếu có)

---

## 🎉 Launch

### Final Checks
- [ ] Production URL hoạt động: `https://your-project.vercel.app`
- [ ] All features hoạt động trên production
- [ ] No broken links
- [ ] No console errors
- [ ] Performance tốt

### Share
- [ ] Update LinkedIn với portfolio link
- [ ] Update GitHub profile
- [ ] Share với friends/colleagues
- [ ] Add to resume/CV

---

## 📝 Maintenance

### Regular Tasks
- [ ] Check GitHub Actions weekly
- [ ] Monitor Vercel deployments
- [ ] Update dependencies monthly
- [ ] Backup code regularly
- [ ] Review analytics monthly

### Updates
- [ ] Keep content up-to-date
- [ ] Add new projects
- [ ] Update skills
- [ ] Refresh design (yearly)

---

## 🆘 Troubleshooting

### Common Issues

**Build Failed:**
```bash
# Test locally
npm run build

# Check logs
# Fix errors
# Push again
```

**Deployment Failed:**
- Check Vercel logs
- Verify environment variables
- Check build settings

**Site Not Loading:**
- Check DNS settings
- Verify deployment status
- Check browser console

**CI/CD Not Working:**
- Verify GitHub Secrets
- Check workflow file
- Review Actions logs

---

## 📚 Resources

- [Vercel Documentation](https://vercel.com/docs)
- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [DEPLOY-GUIDE.md](./DEPLOY-GUIDE.md) - Chi tiết
- [DEPLOY-NHANH.md](./DEPLOY-NHANH.md) - Quick start

---

## ✅ Completion

**Date Deployed:** _______________

**Production URL:** _______________

**Status:** 
- [ ] Development
- [ ] Staging
- [ ] Production ✅

**Notes:**
```
Add any additional notes here...
```

---

**Congratulations! Your portfolio is live! 🎉**

Share it with the world:
- LinkedIn: _______________
- Twitter: _______________
- Email: _______________

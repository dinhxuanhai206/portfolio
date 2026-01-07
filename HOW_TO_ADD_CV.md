# 📄 Hướng dẫn gắn file CV vào Portfolio

## Cách 1: Đơn giản nhất (Khuyến nghị)

### Bước 1: Chuẩn bị file CV
- File CV của bạn phải là định dạng **PDF**
- Đổi tên file thành: `cv.pdf` (hoặc tên bạn muốn)

### Bước 2: Copy file vào thư mục public
```
D:\Pofolio\portfolio\public\cv.pdf
```

Đơn giản là:
1. Mở File Explorer
2. Vào thư mục: `D:\Pofolio\portfolio\public\`
3. Paste file CV của bạn vào đây
4. Đổi tên thành `cv.pdf`

### Bước 3: Xong!
- Button "Download CV" sẽ tự động hoạt động
- Khi click sẽ tải file `cv.pdf` xuống

---

## Cách 2: Nếu muốn đổi tên file CV

Nếu bạn muốn giữ tên file khác (ví dụ: `DinhXuanHai_CV.pdf`):

### Bước 1: Đặt file vào public
```
D:\Pofolio\portfolio\public\DinhXuanHai_CV.pdf
```

### Bước 2: Cập nhật code trong Hero.tsx
Mở file: `portfolio/components/Hero.tsx`

Tìm dòng:
```typescript
const handleDownloadCV = () => {
  const link = document.createElement('a');
  link.href = '/cv.pdf';  // ← Đổi tên ở đây
  link.download = 'DinhXuanHai_CV.pdf';
  link.click();
};
```

Đổi thành:
```typescript
const handleDownloadCV = () => {
  const link = document.createElement('a');
  link.href = '/DinhXuanHai_CV.pdf';  // ← Tên file trong public/
  link.download = 'DinhXuanHai_CV.pdf';  // ← Tên file khi download
  link.click();
};
```

---

## Cách 3: Link đến CV online (Google Drive, Dropbox, etc.)

Nếu CV của bạn đã upload lên Google Drive hoặc Dropbox:

### Bước 1: Lấy link public
- **Google Drive**: Share → Anyone with the link → Copy link
- **Dropbox**: Share → Create link → Copy link

### Bước 2: Cập nhật code
Mở file: `portfolio/components/Hero.tsx`

Đổi function `handleDownloadCV`:
```typescript
const handleDownloadCV = () => {
  window.open('https://drive.google.com/file/d/YOUR_FILE_ID/view', '_blank');
};
```

Hoặc nếu muốn download trực tiếp:
```typescript
const handleDownloadCV = () => {
  const link = document.createElement('a');
  link.href = 'https://your-cv-link.com/cv.pdf';
  link.download = 'DinhXuanHai_CV.pdf';
  link.target = '_blank';
  link.click();
};
```

---

## Kiểm tra CV đã hoạt động chưa

### Cách 1: Truy cập trực tiếp
Mở trình duyệt và vào:
```
http://localhost:3000/cv.pdf
```

Nếu thấy CV hiển thị → Thành công! ✅

### Cách 2: Click button "Download CV"
1. Chạy `npm run dev`
2. Mở http://localhost:3000
3. Click button "Download CV"
4. File sẽ được tải xuống

---

## Troubleshooting

### ❌ Lỗi: File không tìm thấy (404)
**Nguyên nhân:** File CV không có trong thư mục `public/`

**Giải pháp:**
1. Kiểm tra file có trong `D:\Pofolio\portfolio\public\` không
2. Kiểm tra tên file có đúng không (phân biệt hoa thường)
3. Restart dev server: Stop (Ctrl+C) → `npm run dev`

### ❌ Lỗi: Click button không có gì xảy ra
**Nguyên nhân:** Đường dẫn trong code không đúng

**Giải pháp:**
1. Mở `components/Hero.tsx`
2. Kiểm tra dòng `link.href = '/cv.pdf'`
3. Đảm bảo tên file khớp với file trong `public/`

### ❌ Lỗi: File tải về bị lỗi
**Nguyên nhân:** File CV bị corrupt hoặc không phải PDF

**Giải pháp:**
1. Kiểm tra file CV có mở được trên máy không
2. Đảm bảo file là PDF hợp lệ
3. Thử export lại CV từ Word/Google Docs

---

## Tips

### 💡 Tip 1: Tối ưu kích thước file
- Nên giữ file CV dưới 2MB
- Sử dụng công cụ nén PDF online nếu file quá lớn
- Recommended: https://www.ilovepdf.com/compress_pdf

### 💡 Tip 2: Đặt tên file chuyên nghiệp
```
✅ Good:
- DinhXuanHai_CV.pdf
- Hai_Dinh_Resume.pdf
- XuanHai_Frontend_CV.pdf

❌ Bad:
- cv.pdf
- resume_final_final_v2.pdf
- Untitled.pdf
```

### 💡 Tip 3: Cập nhật CV thường xuyên
- Khi có kinh nghiệm mới
- Khi học được skill mới
- Ít nhất 3-6 tháng/lần

### 💡 Tip 4: Có nhiều phiên bản CV
Bạn có thể có nhiều file CV cho các vị trí khác nhau:
```
public/
  ├── cv_frontend.pdf
  ├── cv_fullstack.pdf
  └── cv_general.pdf
```

Sau đó thay đổi trong code tùy theo nhu cầu.

---

## Checklist

- [ ] File CV đã ở định dạng PDF
- [ ] File CV đã copy vào thư mục `public/`
- [ ] Tên file trong code khớp với tên file thực tế
- [ ] Đã test bằng cách truy cập `http://localhost:3000/cv.pdf`
- [ ] Đã test button "Download CV" hoạt động
- [ ] File CV tải về mở được bình thường

---

## Kết luận

Cách đơn giản nhất:
1. Copy file CV vào `public/cv.pdf`
2. Xong! Button sẽ tự động hoạt động

Nếu gặp vấn đề, hãy kiểm tra lại:
- Tên file
- Đường dẫn
- Restart dev server

Good luck! 🚀

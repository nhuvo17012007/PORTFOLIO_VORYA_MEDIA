# VORYA – Content & Media Portfolio

Bộ file tĩnh (HTML/CSS/JS thuần), không cần cài đặt gì.

## Cấu trúc
```
vorya-portfolio/
├── index.html
├── style.css
├── script.js
└── assets/
    ├── avatar.png        # ảnh hero (nên tách nền hoặc nền sáng, tỉ lệ vuông)
    ├── about.jpg         # ảnh phần About (tỉ lệ 4:5)
    └── gallery/g1.jpg … g6.jpg   # ấn phẩm/thiết kế (vuông)
```
Chưa có ảnh thì trang tự hiện ô màu thay thế, không bị lỗi.

## Việc cần sửa trong index.html
1. Link Facebook / LinkedIn (đang là `href="#"`) và email `your-email@example.com`.
2. Mục **Testimonials**: thay bằng nhận xét thật (có xin phép người được trích).
3. Kiểm tra lại các con số ở Case Study / Performance nếu có cập nhật.

## Chạy thử
Mở `index.html` bằng trình duyệt, hoặc dùng VS Code → Live Server.

## Đưa lên GitHub Pages
1. Tạo repo (vd. `vorya-portfolio`), đẩy toàn bộ thư mục lên nhánh `main`.
2. Settings → Pages → Source: `main` / root → Save.
3. Link: `https://<username>.github.io/vorya-portfolio/`

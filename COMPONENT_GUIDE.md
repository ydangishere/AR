# AR Portal - Component Gallery

## 🎯 Mục đích
Simple component gallery để xem từng component riêng biệt. Click component để display full.

## 📁 Cấu trúc thư mục

```
public/assets/components/     # PNG assets cho components
src/components/ui/           # Components chính 
src/app/preview/            # Component Gallery page
```

## 🚀 Workflow đơn giản

### 1. Gửi design mockup + PNG assets
```
Bạn gửi:
- Hình design mẫu
- Các file PNG cần dùng
- Tên component
```

### 2. Component được tạo
```tsx
// src/components/ui/YourComponent.tsx
export default function YourComponent() {
  return (
    <div className="...">
      <img src="/assets/components/your-component/asset1.png" alt="..." />
      {/* Component code theo design */}
    </div>
  );
}
```

### 3. Thêm vào gallery list
```tsx
// src/app/preview/page.tsx - thêm vào components array:
{
  id: 'your-component',
  name: 'Your Component Name',
  description: 'Brief description',
  component: <YourComponent />
}
```

### 4. Xem trong gallery
- Vào `http://localhost:3001/preview`
- Click component để xem full display
- Nút "Back to List" để quay lại danh sách

## 🎨 Gallery Features

- **Component List**: Danh sách tất cả components
- **Individual Display**: Click để xem từng component riêng
- **Clean Interface**: Không gom thành website hoàn chỉnh
- **Simple Navigation**: Back/forth giữa list và component

## 💡 Lưu ý

1. **Mỗi component hiển thị riêng biệt** - không combine
2. **PNG assets** được optimize tự động
3. **Responsive** - hoạt động tốt trên mobile/desktop
4. **Fast loading** - components chỉ render khi cần

## 🌐 Links

- **Homepage**: `http://localhost:3001`
- **Gallery**: `http://localhost:3001/preview`

Ready for components! 🎨

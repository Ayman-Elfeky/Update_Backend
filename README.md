# 📘 Hero API | واجهة API لقسم Hero

## 🌐 Base URL | المسار الأساسي
```
/hero/:lang
```
- `:lang` can be `ar` (Arabic) or `en` (English) | يمكن أن تكون `ar` (عربي) أو `en` (إنجليزي)

---

## 📝 Endpoints | نقاط النهاية

### 🔹 POST `/hero/:lang` — Create new hero content | إنشاء بيانات جديدة

**Example | مثال**
```
POST /hero/en
POST /hero/ar
```

**Request Body | محتوى الطلب**
```json
{
  "title": "Welcome to our site",        // "مرحبًا بكم في موقعنا"
  "subtitle": "We are glad you're here" // "سعداء بزيارتكم"
}
```

---

### 🔹 GET `/hero/:lang` — Retrieve hero content | جلب بيانات الـ Hero

**Example | مثال**
```
GET /hero/en
GET /hero/ar
```

---

### 🔹 PUT `/hero/:lang` — Update hero content | تحديث بيانات الـ Hero

**Example | مثال**
```
PUT /hero/en
PUT /hero/ar
```

**Request Body | محتوى الطلب**
```json
{
  "title": "Updated Title",      // "عنوان محدث"
  "subtitle": "Updated subtitle" // "وصف محدث"
}
```
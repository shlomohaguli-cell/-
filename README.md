# 🏪 קניון בני ברק הדיגיטלי

מרקטפלייס דיגיטלי לחנויות בני ברק — עלות הקמה: 0 ₪

---

## 📁 מבנה הקבצים

```
bnei-brak-mall/
├── index.html        ← דף הבית + חיפוש + קטגוריות
├── store.html        ← דף חנות בודדת + מוצרים
├── cart.html         ← סל קניות מאוחד + צ'קאאוט
├── admin.html        ← פאנל ניהול לבעלי חנויות
├── css/
│   └── style.css     ← עיצוב משותף לכל הדפים
└── js/
    └── mall.js       ← לוגיקה: מאגר חנויות, סל, שבת
```

---

## 🚀 פריסה ל-GitHub Pages (חינמי לחלוטין)

### שלב 1: צור חשבון GitHub
1. היכנס ל-https://github.com
2. לחץ "Sign up" וצור חשבון חינמי

### שלב 2: צור Repository
1. לחץ על "New repository" (הכפתור הירוק)
2. **שם ה-Repository**: `bnei-brak-mall`
3. **Visibility**: Public ✓
4. לחץ "Create repository"

### שלב 3: העלה את הקבצים
**אפשרות א' — דרך הדפדפן (הכי קל):**
1. בדף ה-Repository לחץ "uploading an existing file"
2. גרור את כל הקבצים (index.html, store.html, cart.html, admin.html, css/, js/)
3. לחץ "Commit changes"

**אפשרות ב' — דרך Git:**
```bash
git init
git add .
git commit -m "קניון בני ברק — גרסה ראשונה"
git branch -M main
git remote add origin https://github.com/USERNAME/bnei-brak-mall.git
git push -u origin main
```

### שלב 4: הפעל GitHub Pages
1. היכנס ל-Settings של ה-Repository
2. גלול לחלק "Pages" (בצד שמאל)
3. תחת **Source** בחר: `main` branch, `/ (root)`
4. לחץ "Save"
5. **האתר יהיה זמין ב-:**
   `https://USERNAME.github.io/bnei-brak-mall/`

⏱️ **זמן הפעלה**: 2-5 דקות לאחר שמירה

---

## 🔧 הגדרות לאחר העלאה

### חיבור דומיין מותאם אישית (אופציונלי)
אם יש לך דומיין (כמו `kanyonbb.co.il`):
1. ב-Settings > Pages > Custom domain: הכנס את הדומיין
2. אצל ספק הדומיין שלך, הוסף רשומת DNS:
   ```
   Type: CNAME
   Name: www
   Value: USERNAME.github.io
   ```

### סליקה אמיתית — Cardcom
1. פתח חשבון ב-https://www.cardcom.solutions
2. קבל `terminal` ו-`api_name`
3. ב-`cart.html` החלף את הכפתור `placeOrder()` בקוד:
   ```javascript
   function placeOrder() {
     const total = cartTotal() + 25;
     const url = `https://secure.cardcom.solutions/Interface/LowProfile.aspx` +
       `?TerminalNumber=YOUR_TERMINAL&UserName=YOUR_USER` +
       `&APILevel=10&SumToBill=${total}&CoinID=1` +
       `&ProductName=קניון+בני+ברק&ReturnValue=${generateOrderId()}`;
     window.location.href = url;
   }
   ```

### הודעות WhatsApp — Zapier (חינמי)
1. פתח חשבון ב-https://zapier.com (100 משימות/חודש חינם)
2. צור Zap חדש:
   - **Trigger**: Webhook (URL שתכניס ב-`mall.js`)
   - **Action**: Send WhatsApp via Twilio / WhatsApp Business API
3. בפאנל ניהול > WhatsApp, הכנס את מספר הטלפון

---

## 🕯️ מנגנון שבת

מנגנון השבת עובד **אוטומטית**:
- API: `HebCal` (חינמי) — מחזיר זמני שבת לפי בני ברק
- בודק כל דקה
- סוגר כפתורי רכישה + מציג מסך שבת שלום
- נפתח אוטומטית במוצאי שבת

**בלי צורך בהגדרה נוספת.**

---

## 🖼️ מנגנון סינון תמונות (אישור ידני)

כרגע המנגנון הוא **אישור ידני** דרך פאנל הניהול (admin.html > אישור תמונות).

לאישור **אוטומטי** עם AI (בעתיד, בעלות נמוכה):
- `Google Vision API` — 1,000 תמונות/חודש חינם
- `AWS Rekognition` — 5,000 תמונות/חודש חינם
- שניהם מזהים: תמונות לא צנועות, פרצופים, חשיפת גוף

---

## 💰 סיכום עלויות — 0 ₪

| שירות | עלות |
|-------|------|
| GitHub Pages (אחסון + SSL) | **חינם** |
| HebCal API (שבת) | **חינם** |
| Zapier Free (100 webhooks/חודש) | **חינם** |
| Cardcom (עמלה) | 1.5% לעסקה בלבד |
| דומיין (אופציונלי) | ~50 ₪/שנה |

**סה"כ דמי מנוי קבועים: 0 ₪**

---

## 📞 הוספת חנות חדשה

פתח `js/mall.js` והוסף לאובייקט `STORES`:
```javascript
{
  id: 9,
  name: 'שם החנות',
  category: 'clothing-men', // clothing-men | clothing-women | toys | judaica | home | books | food | jewelry
  street: 'רחוב הדוגמה 1',
  phone: '03-5559999',
  emoji: '🎩',
  bg: '#e8eef8',
  tags: ['תג1', 'תג2'],
  rating: 5, reviews: 0,
  desc: 'תיאור החנות',
  products: [
    { id: 901, name: 'מוצר ראשון', price: 100, emoji: '📦' }
  ]
}
```

---

*נבנה עם ❤️ לקהילת בני ברק*

# ✅ Angular SSR ToDo List App

A simple and responsive ToDo List application built with Angular 18. This app supports SSR for faster load times and better SEO, along with basic task management features.

---

## Setup Instructions

### 1. Clone Repository
```bash
git clone https://github.com/Modernsitechain/todo-app-axel.git
cd todo-app-axel
```

### 2. Install Dependencies
Make sure your npm version is >18
```bash
npm i
```

### 3. Run Application (Development)
```bash
npm run dev:ssr
```

### 4. Run Application (Production)
```bash
npm run production:ssr
```

---

## ✅ Completed Features

- [x] CRUD for Todo List (Create, Update, Delete)
- [x] SEO friendly setup! (semantic, headline score 73)

<img width="262" height="176" alt="Screenshot 2025-08-05 at 11 03 44" src="https://github.com/user-attachments/assets/8ceaafc5-b2e2-41eb-b70c-b3fbe7fad10c" />

<img width="599" height="274" alt="Screenshot 2025-08-05 at 11 41 55" src="https://github.com/user-attachments/assets/42b3ff32-2ed7-4013-b625-7a9294c5b424" />



    
- [x] Well-structured folder architecture, scalable and ready for further development (reusable component)
- [x] Error Handling
- [x] Environment Setup (env, production)
- [x] Responsive App
- [x] SSR Configuration

---

## 🚧 Unfinished Features
- [x] Priority and Duedate field
---

## 💡 Improvements with More Time

- [ ] Unit Testing
- [ ] Filter for data user
- [ ] Implement more trackable data (createdAt & updatedAt), actually already there but im only using for sort without any data tracker
- [ ] Update to newest version if necessary, but for now angular 18 is enough

---

## ⏱️ Time Spent & Blockers

### ⏰ Time Spent
Approximately 8 hour total development time.

- 2 hour for application setup
    tsconfig setup for path setting, environment setting, eslint setup for better code, file structuring, implement style scss setup. application command setup
- 30 min, for searching idea
- 4 hour create all application functionality and responsive ness
- 1 hour for cleaning unused data, and improve code quality
- 30 min for create readme file.

### ⚠️ Blockers
- Local storage issue because the app run as SSR app, already fixed by using is PlatformBrowser.

---

## 👨‍💻 Author

**Axel Eldrian**  
Built using Angular, with ❤️ for learning and clean SSR setup.

---

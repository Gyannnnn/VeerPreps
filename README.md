# 🏫 VeerPreps 

**VeerPreps** is an open-source platform designed to help students of vssut burla to access and share academic resources like Previous Year Questions (PYQs) and Notes for different branches. Built with scalability and collaboration in mind.

---

## 🚀 Tech Stack

- ⚙️ **Next.js** – React framework for full-stack web apps
- 🎨 **Tailwind CSS** – Utility-first CSS framework
- 🧠 **TypeScript** – Static typing for better dev experience
- 🧬 **Prisma** – Type-safe ORM for PostgreSQL
- 🔐 **NextAuth.js** – Authentication (GitHub, Google)
- ☁️ **PostgreSQL** – Relational database

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Gyannnnn/VeerPreps.git
cd VeerPreps
```

### 2. Install Dependencies

```
npm install
```

### 3. Create .env File
Create a .env file in the root and add the following variables:
```
# PostgreSQL Database
DATABASE_URL="your-postgresql-database-url"

# Auth Secrets
AUTH_SECRET="your-auth-secret"

# GitHub Auth
AUTH_GITHUB_ID="your-github-client-id"
AUTH_GITHUB_SECRET="your-github-client-secret"

# Google Auth
AUTH_GOOGLE_ID="your-google-client-id"
AUTH_GOOGLE_SECRET="your-google-client-secret"

```

### 4. Set Up Prisma

```
npx prisma generate
npx prisma migrate dev --name init
```
### 🌍 Contributing
We welcome contributions from everyone! Whether it’s bug fixes, new features, UI improvements, or documentation – all help is appreciated.
### 📌 How to Contribute
1.Fork the repo
2.Create your feature branch (git checkout -b feature/my-feature)
3.Commit your changes (git commit -m 'Add something cool')
4.Push to the branch (git push origin feature/my-feature)
5.Create a Pull Request

### 🙌 Acknowledgements
Built with 💖 by students, for students. Special thanks to all contributors who make this project better every day.

### 🔗 Project Status
IIT Kirba | VeerPreps is currently in active development. Stay tuned for more features!











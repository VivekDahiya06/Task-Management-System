# 📝 Task Management App

A modern, full-stack Task Management application built with Next.js, React, TypeScript, Tailwind CSS, and Mongoose. Easily add, view, update, and delete your tasks with a beautiful, responsive UI!

---

## ✨ Features

- ➕ **Add Tasks**: Create new tasks with a title and description (with instant validation).
- 👀 **View Tasks**: See all your tasks in a scrollable, responsive list.
- ✏️ **Update & Delete**: Edit or remove tasks with a single click.
- ✅ **Mark as Completed**: Check off tasks as you finish them (UI only).
- 🛡️ **Form Validation**: Prevent mistakes with robust validation.
- 🗂️ **State Management**: All your tasks are managed globally for a smooth experience.
- 🎨 **Modern UI**: Built with Tailwind CSS and Radix UI for a clean look.
- 🦾 **TypeScript**: Enjoy end-to-end type safety.

---

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Zod](https://zod.dev/) (validation)
- [React Hook Form](https://react-hook-form.com/)
- [Mongoose](https://mongoosejs.com/) (MongoDB ODM)

---

## 📁 Project Structure

- `src/app/` — Main app entry, pages, and layout
- `src/components/` — Reusable UI components
- `src/store/` — Global state provider (Context API)
- `src/lib/` — Utility functions (e.g., DB connection)
- `src/schemas/` — Zod schemas for validation
- `public/` — Static assets (SVGs, etc.)

---

## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd tasks
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
yarn install
   ```
3. **Set up environment variables:**
   - Create a `.env` file in the root directory:
     ```env
     DATABASE_URL=your_mongodb_connection_string
     ```
4. **Run the development server:**
   ```bash
   npm run dev
   # or
yarn dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser and start managing your tasks! 🎉

---

## 📜 Available Scripts

- `npm run dev` — Start the development server
- `npm run build` — Build for production
- `npm start` — Start the production server
- `npm run lint` — Run ESLint to check code quality

---

## 🌍 Deployment

This app can be easily deployed on [Vercel](https://vercel.com/) or any platform that supports Next.js:

1. **Build the app:**
   ```bash
   npm run build
   ```
2. **Start the production server:**
   ```bash
   npm start
   ```

For more details, see the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying).

---

## 🤝 Contributing

Contributions are welcome! If you have ideas, find bugs, or want to help, please open an issue or submit a pull request. Let's make this app even better together! 🚀

---

## 📄 License

[MIT](LICENSE) © Your Name

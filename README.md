# 🚀 Ultimate Next.js Portfolio Template

A modern developer portfolio website built with **Next.js**, packed with smooth animations, customizable content, and seamless **Sanity CMS** integration.

Perfect for developers who want a fast, beautiful, and fully customizable site to showcase their work.

## ✨ Features

- **Clean, modern layout**: Minimal design with a focus on readability and structure.
- **Smooth, subtle animations**: Framer Motion brings pages to life without being distracting.
- **Static site, SEO-friendly**: All pages are statically generated for fast load times and better visibility.
- **Live content editing**: Connected to Sanity Studio — update data directly in production.
- **Simple config-based customization**: Easily customize page content through `/config/content` folder.
- **Built-in contact form**: Messages sent directly to your email using EmailJS.
- **Fully responsive**: Works across devices with zero extra effort.

## 🗂 Tech Stack

- **Next.js** – React framework for SSR and performance
- **Sanity.io** – Headless CMS for content management
- **Framer Motion** – Animation library for React
- **Tailwind CSS** – Utility-first CSS framework
- **EmailJS** – Email service for handling contact form messages

## 🚀 Getting Started

1. **Clone the repo**

```bash
git clone https://github.com/indiecodermm/next-portfolio.git
cd next-portfolio
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Copy the example env file and add your own config:

```bash
cp env.example .env.local
```

4. **Run the dev server**

```bash
npm run dev
```

Your app should now be running at [http://localhost:3000](http://localhost:3000)

## 🧩 Customization

All page content can be modified in the `/config/content/` folder. It includes:

Just edit the files – no need to dig into components unless you want to.

## 📝 Content Management (Sanity)

This template is integrated with [Sanity Studio](https://www.sanity.io/) for flexible content editing.

- You can manage projects, skills, and other dynamic content through the Sanity dashboard.
- The Sanity Studio is available at `/dashboard` once the project is running.
- To set it up:
  1. Create a project at [sanity.io](https://www.sanity.io/)
  2. Copy the project ID and dataset name into your `.env.local` file
  3. Run both frontend and Sanity Studio locally, or deploy them together

You can also customize the schema or extend it for additional content types as needed.

## 📬 Contact Form

The contact form uses **EmailJS** for sending messages.

- Sign up at [emailjs.com](https://www.emailjs.com/)
- Create a service, template, and public key
- Add those to your `.env.local` file

## 🧪 Deploy

Deploy anywhere Next.js is supported:

- **Vercel** (Recommended)

Make sure to set environment variables in your deployment settings.

## 🤝 Contributing

Feel free to fork, customize, or contribute. Open an issue or PR if you have suggestions or improvements.

## 📄 License

This project is released under [The Unlicense](https://unlicense.org/), which means you can use, modify, and distribute it however you want—no restrictions, no conditions.

Do whatever you like. No credit required (but appreciated).

## 💡 Credits

Thanks to all the amazing developers and designers whose work have inspired me to create this project.

---

_This template is meant to be a launchpad. Tweak it, extend it, or totally redesign it—just make it yours._

_Happy building 🚀_

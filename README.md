![Screenshot](/.github/banner.png)

# Stellar Portfolio

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/IndieCoderMM/stellar-portfolio)

A modern developer portfolio website built with [Next.js](https://nextjs.org), packed with smooth animations, customizable content, and [Sanity CMS](https://www.sanity.io) integration.

Perfect for developers who want a fast, unique, and fully customizable site to showcase their work.

## Features

- Sleek, modern layout – Clean design focused on clarity and structure.
- Subtle motion effects – Thoughtful animations add life without getting in the way.
- Optimized for SEO – Static pages, auto-generated sitemap and built-in Open Graph support via `next/og`.
- Live content editing – Change content live using integrated Sanity dashboard.
- Easy customization – Tweak site content and structure through easitly.
- Built-in contact form – Emails are delivered instantly with EmailJS integration.
- Responsive by default – Designed to look great on all screen sizes out of the box.

## Tech Stack

- Next.js – React framework for SSR and performance
- Sanity.io – Headless CMS for content management
- Motion.dev – Animation library for React
- Tailwind CSS – Utility-first CSS framework
- EmailJS – Email service for handling contact form messages

## Getting Started

1. **Clone the repo**

```bash
git clone https://github.com/indiecodermm/stellar-portfolio.git
cd stellar-portfolio
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Copy the example env file and add your own config:

```bash
cp .env.example .env.local
```

4. **Run the dev server**

```bash
npm run dev
```

Your app should now be running at [http://localhost:3000](http://localhost:3000)

5. **Open Sanity Dashboard**

Once the app is running, you can access the Sanity Studio at [http://localhost:3000/dashboard](http://localhost:3000/dashboard) to manage your content.

> [!NOTE]
> Make sure to add your data to the Sanity dataset before deploying or using the site.

## Customization

All page content can be modified in the `/config/` folder.

_No need to dig into components unless you want to._

## Content Management (Sanity)

This template is integrated with [Sanity Studio](https://www.sanity.io/) for flexible content editing.

- You can manage projects, skills, and other dynamic content through the Sanity dashboard.
- The Sanity Studio is available at `/dashboard` once the project is running.
- To set it up:
  1. Create a project at [sanity.io](https://www.sanity.io/)
  2. Copy the project ID and dataset name into your `.env.local` file
  3. Run both frontend and Sanity Studio locally, or deploy them together

You can also customize the schema or extend it for additional content types as needed.

> [!NOTE]
> If you want to change the refresh frequency, customize `contentRefreshInterval` in `/config/index.ts` to set how often the content is fetched from Sanity. _Default is 3600 seconds (1 hr)._

## Contact Form

The contact form uses **EmailJS** for sending messages.

- Sign up at [emailjs.com](https://www.emailjs.com/)
- Create a service and connect it to an email account
- Create an email template for the contact form.

<details>

<summary>Sample Email Template</summary>

```
Hello,

You’ve received a new message from your website. Here’s what they had to say:

Name: {{name}}
Email: {{email}}

Message:
{{message}}
```

</details>

- Get your EmailJS service ID, template ID, and user ID (public key)
- Add those to your `.env.local` file

## Deploy

Deploy anywhere Next.js is supported:

- **Vercel** (Recommended)

Make sure to set environment variables in your deployment settings.

## Contributing

Feel free to fork, customize, or contribute. Open an issue or PR if you have suggestions or improvements.

## License

This project is released under [The Unlicense](https://unlicense.org/), which means you can use, modify, and distribute it however you want.

Do whatever you like. No credit required (but appreciated).

## Credits

Thanks to all the amazing developers and designers whose work have inspired me to create this project.

Animattions and UI elements are from these awesome resources:

- Acternity UI – for the elegant components and design inspiration.
- Uiverse.io – for the open-source UI interactions and effects.

---

_I hope this template helps you build your own stunning portfolio site!_

_Happy building 🚀_

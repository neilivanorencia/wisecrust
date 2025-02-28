<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD041 -->
<div align="center">
  <img src="public/favicon.svg" alt="Wisecrust" height="100" />
  <h1 align="center">Wisecrust</h1>
  <p align="center">A Realm of Thought and Reflection</p>
</div>

<div align="center">
  <br />
  <img src="https://i.imgur.com/0V7dvKJ.png" alt="Wisecrust" />
  <br /><br />
  <div>
    <img
      alt="Astro"
      src="https://img.shields.io/badge/Astro-%23BC52EE?style=flat&logo=astro&logoColor=white"
    />
    <img
      alt="React"
      src="https://img.shields.io/badge/React-%230088CC?logo=react&logoColor=white"
    />
    <img
      alt="Tailwind CSS"
      src="https://img.shields.io/badge/Tailwind%20CSS-%2306B6D4?logo=tailwindcss&logoColor=white"
    />
    <img
      alt="Typescript"
      src="https://img.shields.io/badge/Typescript-%233178C6?logo=typescript&logoColor=white"
    />
  </div>
</div>
<br />

Wisecrust is a conceptual website built to explore and demystify various philosophical concepts through a highly interactive and visually-driven interface. It features a blog and a set of fictional course offerings, with content dynamically rendered from Markdown using Astro's content collections. It contains fluid animations and a unique, cohesive design language centered around geometric motifs and a dynamic color system.

## ✨ Features

- **Scroll-Driven Animations**: Implements scroll-driven animations to create parallax experience. Decorative illustrations and background elements subtly move and rotate as the user scrolls, adding depth to the layout.
- **Auto-Playing Carousel**: Features a custom-built, auto-playing carousel. The animation is fully responsive and pauses on user hover for enhanced usability.
- **Parallax Masonry Grid**: Displays recent articles in a two-column masonry layout with a parallax effect.
- **Animated Navigation Menu**: Includes a fully responsive fixed header with a custom-animated hamburger icon. The menu opens into a full-screen overlay where navigation links appear with staggered animation.
- **Dynamic Content Platform**: A dynamic content platform powers the site's articles and courses, which are managed through simple Markdown files.
- **Categorical Color-Coding**: Implements a visual tagging system to distinguish between different philosophical concepts and course types.
- **Responsive Design**: Optimized for various devices to ensure usability and aesthetic appeal on all screen sizes.

## 💻 Technology Stack

- **Astro** - A JavaScript web framework optimized for building fast, content-driven websites.
- **React** - A JavaScript library made by Facebook primarily used for building user interfaces for web applications.
- **Tailwind CSS** - A utility-first CSS framework that allows for quick and flexible styling using predefined classes.
- **Typescript** - A strongly typed programming language that builds on JavaScript by adding static types.

## 📂 Project Structure

<details>
  <summary>See project structure here</summary>

```plaintext
└── 📁.vscode
    ├── extensions.json
    ├── launch.json
    ├── settings.json
└── 📁public
    └── 📁fonts
    ├── favicon.svg
    ├── website-preview.png
└── 📁src
    └── 📁assets
        └── 📁illustrations
        └── 📁people
        ├── card.tsx
        ├── circle.tsx
        ├── hexagon.tsx
        ├── tag.tsx
    └── 📁content
        └── 📁articles
        └── 📁courses
    └── 📁layouts
        ├── layout.astro
    └── 📁pages
        └── 📁articles
            ├── [...slug].astro
            ├── index.astro
        ├── contact.astro
        ├── courses.astro
        ├── index.astro
    └── 📁sections
        ├── call-to-action.tsx
        ├── feature-cards.tsx
        ├── feature-grid.tsx
        ├── footer.tsx
        ├── header.tsx
        ├── hero.tsx
        ├── recent-posts.tsx
        ├── reflections.tsx
    └── 📁styles
        ├── fonts.css
        ├── global.css
        ├── prose.css
    └── 📁utils
        ├── post-utils.ts
    ├── content.config.ts
├── .gitignore
├── .prettierrc.mjs
├── astro.config.mjs
├── LICENSE
├── package-lock.json
├── package.json
├── README.md
├── tailwind.config.mjs
└── tsconfig.json
```

</details>

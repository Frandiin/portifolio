# 💼 Portfolio - Wellington Frandin

> Modern and responsive portfolio showcasing my journey as a Full Stack Developer, built with cutting-edge technologies and best practices.

## ✨ Features

- 🌐 **Internationalization (i18n)** - Full support for Portuguese and English with automatic language detection
- 🎨 **Modern UI/UX** - Sleek design with smooth animations powered by Framer Motion
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- ⚡ **High Performance** - Built with Vite for lightning-fast development and optimized production builds
- 🎯 **SEO Optimized** - Structured for better search engine visibility
- ♿ **Accessible** - Following WCAG guidelines for inclusive design
- 🔄 **Dynamic Content** - Expandable text components with "Read more/less" functionality
- 📊 **Analytics Ready** - Integrated with Vercel Analytics for insights

## 🚀 Tech Stack

### Frontend

- **React 19.2** - Latest version with modern hooks and features
- **TypeScript** - Type-safe development
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready animation library

### Internationalization

- **i18next** - Internationalization framework
- **react-i18next** - React integration for i18next
- **i18next-browser-languagedetector** - Automatic language detection

### UI & Icons

- **Lucide React** - Beautiful & consistent icon set
- **React Icons** - Popular icon library

### Code Quality

- **ESLint** - Code linting and quality enforcement
- **Prettier** - Code formatting with Tailwind plugin
- **TypeScript ESLint** - TypeScript-specific linting rules

## 📂 Project Structure

```
portfolio/
├── public/
│   ├── cv.pdf              # Portuguese CV
│   ├── cv_en.pdf           # English CV
│   └── [project-images]    # Project screenshots
├── src/
│   ├── components/         # React components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── ExpandableText.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   ├── RichText.tsx
│   │   └── TechStack.tsx
│   ├── constants/
│   │   └── index.ts        # Project data & constants
│   ├── locales/
│   │   ├── en.json         # English translations
│   │   └── pt.json         # Portuguese translations
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── vite.config.ts
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (v18 or higher)
- pnpm (recommended) or npm

### Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/Frandiin/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start development server**

   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Build for production**

   ```bash
   pnpm build
   # or
   npm run build
   ```

5. **Preview production build**
   ```bash
   pnpm preview
   # or
   npm run preview
   ```

## 📜 Available Scripts

| Command        | Description                                         |
| -------------- | --------------------------------------------------- |
| `pnpm dev`     | Start development server at `http://localhost:5173` |
| `pnpm build`   | Build for production (output: `dist/`)              |
| `pnpm preview` | Preview production build locally                    |
| `pnpm lint`    | Run ESLint to check code quality                    |

## 🌍 Internationalization

The portfolio supports multiple languages with automatic detection based on browser preferences. To add a new language:

1. Create a new JSON file in `src/locales/` (e.g., `es.json`)
2. Copy the structure from `en.json` or `pt.json`
3. Translate all keys
4. Import and configure in your i18n setup

### Language Toggle

Users can manually switch between languages using the language selector in the navigation bar.

## 🎨 Customization

### Update Personal Information

Edit `src/constants/index.ts` to update:

- Projects
- Experience
- Tech stack
- Contact information

### Modify Translations

Edit files in `src/locales/`:

- `pt.json` - Portuguese translations
- `en.json` - English translations

### Change Theme Colors

Modify `tailwind.config.js` to customize the color palette.

## 📊 Key Components

### ExpandableText

Intelligent text component that automatically detects overflow and shows "Read more/less" buttons:

- Configurable line clamp
- Smooth expand/collapse animations
- Responsive overflow detection

### RichText

i18n-aware component for rendering translated content with support for:

- Dynamic text interpolation
- Component composition (bold, links, etc.)
- Type-safe translation keys

### Projects

Showcase section with:

- Fixed-height tag containers for consistent alignment
- Expandable descriptions
- Live demo and GitHub links
- Responsive grid layout

## 🚀 Deployment

This project is optimized for deployment on:

- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**
- Any static hosting service

### Deploy to Vercel

```bash
pnpm build
vercel --prod
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Wellington Frandin**

- LinkedIn: [@wellington-frandin](https://www.linkedin.com/in/wellington-frandin/)
- GitHub: [@Frandiin](https://github.com/Frandiin)
- Email: wellingtonfrandin@gmail.com

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- UI inspiration from modern design trends

---

⭐ If you found this portfolio helpful, please consider giving it a star!
// Optionally, add this for stylistic rules
tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },

},
])

````

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
````

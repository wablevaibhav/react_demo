# React Demo Project: From Basic to Advanced

## 1. Project Overview

This is a modern, scalable React application built with Vite and TypeScript. It demonstrates:

- Clean architecture (feature-based structure)
- Advanced state management

---

## 2. Project Structure (Detailed)

````
src/
	App.tsx                # Main app component, sets up routes
	components/
		common/              # Common UI elements (if any)
		layout/
	features/
		analytics/           # Analytics feature (charts, summary)
		dashboard/           # Dashboard feature (balance, expense)
	shared/
		lib/                 # Shared logic/helpers (if any)
		ui/                  # Reusable UI components (Button, Card)
### Explanation of Key Folders/Files
- **features/**: Each feature is isolated (analytics, dashboard, transactions) for maintainability and scalability.
- **shared/ui/**: Contains generic UI components (Button, Card) used throughout the app.
---

## 3. Key Features (with Details)
- **Feature-based architecture**: Each domain (analytics, transactions, etc.) is self-contained.
- **TypeScript everywhere**: All components, stores, and utilities are strongly typed for safety and autocompletion.
---

## 4. Main Dependencies & Usage Examples
| Package                  | Purpose                                      | Example Usage                                  |
|--------------------------|----------------------------------------------|------------------------------------------------|
| react, react-dom         | Core React library                           | `import React from 'react'`                    |
| zustand/middleware       | State persistence                            | `persist(...), createJSONStorage()`            |
| zod                      | Schema validation                            | `const schema = z.object({...})`               |
| react-hook-form          | Form state/validation                        | `useForm({ resolver: zodResolver(schema) })`   |
---

## 5. Advanced Patterns & Code Examples
### Zustand Store with Persistence
```ts
import { create } from 'zustand';
### Form Validation with React Hook Form + Zod
```ts
import { useForm } from 'react-hook-form';
### Chart Example (Recharts)
```tsx
import { PieChart, Pie, Cell } from 'recharts';
### Tailwind Utility Example
```tsx
<button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
---

## 6. How to Run, Build, and Test
# Install dependencies
npm install

# Start development server
# Build for production (output in /dist)
npm run build

# Preview production build
# Lint code
npm run lint
````

---

## 7. Deployment (Netlify, Vercel, etc.)

- **Netlify**: Connect your repo, set build command to `npm run build`, publish directory to `dist`, and leave base directory blank.
  For React Router support, ensure `public/_redirects` contains:
  ```

  ```
- **Vercel**: Similar steps, or use `vercel` CLI.
- **GitHub Pages**: Use `gh-pages` package, set `homepage` in package.json, and deploy with `npm run deploy`.
- **Continuous Deployment**: Every push to main triggers a new build and deploy.

---

## 8. Extending and Customizing

- Add new features in `src/features/` (follow existing structure)
- Use dynamic `import()` for code splitting large pages
- Add tests in `src/testing/`

---

## 9. Author & License

- **Author:** Vaibhav Wable
- **License:** MIT (or as specified)

---

## 10. Useful Links

- [React documentation](https://react.dev/)
- [Vite documentation](https://vitejs.dev/)
- [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [Recharts](https://recharts.org/en-US/)
- [Tailwind CSS](https://tailwindcss.com/)

---

This document gives you a full overview from basic setup to advanced usage, with code examples and explanations for every major part of your project.

# React Demo Project: Basic to Advanced

## Overview

This project is a modern React application bootstrapped with Vite and TypeScript. It demonstrates best practices in component structure, state management, form handling, charting, and styling using Tailwind CSS.

---

## Project Structure

- **src/components/**: Shared and layout components (e.g., DashboardLayout)
- **src/features/**: Feature-based folders (analytics, dashboard, transactions)
- **src/pages/**: Route-level components (Dashboard, Analytics, etc.)
- **src/shared/ui/**: Reusable UI components (Button, Card)
- **src/utils/**: Utility functions (e.g., cn.ts for class merging)

---

## Key Features

- **Feature-based folder structure** for scalability
- **TypeScript** for type safety
- **Zustand** for global state management
- **React Router** for client-side routing
- **React Hook Form + Zod** for advanced form validation
- **Recharts** for data visualization (charts)
- **Framer Motion** for animations
- **Tailwind CSS** for utility-first styling
- **Persistent state** using zustand/middleware
- **Code splitting** and lazy loading possible (Vite ready)

---

## Main Dependencies & Their Purpose

| Package              | Purpose                                  |
| -------------------- | ---------------------------------------- |
| react, react-dom     | Core React library                       |
| react-router-dom     | Routing (SPA navigation)                 |
| zustand              | Lightweight state management             |
| zod                  | Schema validation (used with forms)      |
| react-hook-form      | Form state and validation                |
| @hookform/resolvers  | Integrates Zod with React Hook Form      |
| recharts             | Charting library for analytics/dashboard |
| framer-motion        | Animations and transitions               |
| lucide-react         | Icon library                             |
| date-fns             | Date utilities                           |
| uuid                 | Unique ID generation                     |
| clsx, tailwind-merge | Utility for className merging            |
| tailwindcss, postcss | Styling (utility-first CSS)              |
| typescript           | Type safety                              |
| eslint               | Linting and code quality                 |

---

## Advanced Patterns Used

- **Zustand with persist middleware**: State is saved to localStorage for persistence.
- **Form validation**: Zod schemas + React Hook Form for robust, type-safe forms.
- **Charts**: Recharts for pie/bar charts in analytics.
- **Component composition**: Shared UI components (Button, Card) for DRY code.
- **Tailwind CSS**: Utility classes for rapid, consistent styling.
- **TypeScript**: All business logic and components are strongly typed.

---

## How to Run & Build

```bash
npm install      # Install dependencies
npm run dev      # Start development server
npm run build    # Build for production (output in /dist)
```

---

## Deployment

- Ready for Netlify, Vercel, or any static host
- Add `public/_redirects` for React Router SPA support on Netlify
- Continuous deployment supported via Git integration

---

## Extending Further

- Add more features in `src/features/`
- Use dynamic import() for code splitting large pages
- Add tests in `src/testing/`
- Customize Tailwind config for design system

---

## Author & License

- Author: Vaibhav Wable
- License: MIT (or as specified)

# Project Architecture Documentation

## Overview

This project is an **Expense Tracker Application** built with a **feature-based clean architecture** using React, Vite, TypeScript, and Tailwind CSS. The architecture ensures scalability, maintainability, and clear separation of concerns, optimized for "Real-time" data interaction via local persistence.

## Core Principles

1.  **Feature-Based Organization**: Code is grouped by domain (`transactions`, `dashboard`) rather than technical type.
2.  **Clean Architecture**: Separation of UI, Business Logic (Stores), and Utility layers.
3.  **Real-Time Reactivity**: State is managed via **Zustand** with selectors optimized for instant UI updates.
4.  **Type Safety**: Full TypeScript support with **Zod** schema validation.
5.  **Modern tooling**: React Hook Form, Recharts, Framer Motion, and Tailwind CSS.

## Folder Structure

### Root Level (`src/`)

```
src/
├── features/        # Feature modules (Domain logic & UI)
├── pages/           # Route Components (Composition root)
├── shared/          # Shared utilities and UI
│   ├── ui/          # Generic Atomic Components (Card, Button)
│   └── lib/         # Generic Utilities
├── components/      # Global Layout components (DashboardLayout)
├── utils/           # Global helpers (cn)
├── App.tsx          # Router configuration
└── main.tsx         # Entry point
```

### Feature Structure (`src/features/{featureName}/`)

Each feature is self-contained:

```
features/{featureName}/
├── components/   # Feature-specific UI components
├── stores/       # Zustand Stores & State Management
├── types.ts      # Domain Interfaces
└── schemas.ts    # Zod Validation Schemas
```

## Implemented Features

### 1. Dashboard (`features/dashboard/`)

- **Responsibility**: Analytics and Overview.
- **Components**: `BalanceCard`, `ExpenseChart`.
- **Logic**: Aggregates data from `TransactionStore` for visualizations.

### 2. Transactions (`features/transactions/`)

- **Responsibility**: CRUD operations for financial records.
- **Components**: `TransactionList`, `AddTransactionForm`.
- **Store**: `useTransactionStore` (Persisted to LocalStorage).

## Routes

The application uses `react-router-dom` with the following route map:

- `/` -> **Dashboard**: Main overview.
- `/analytics` -> **Analytics**: Detailed charts (Recharts).
- `/cards` -> **Cards**: Payment method management.
- `/settings` -> **Settings**: User preferences.

## Data Flow

```
User Action (Form/Click)
      ↓
Zustand Store Action (Add/Remove)
      ↓
State Update (LocalStorage Persistence)
      ↓
Reactivity System (Subscribers notified)
      ↓
UI Re-render (BalanceCard, Charts update instantly)
```

## Adding New Features

### Using the Generator Script

We provide scripts to scaffold new features following this exact architecture:

**Windows (PowerShell):**

```powershell
.\feature.ps1
```

**Mac/Linux (Bash):**

```bash
./feature.sh
```

This will create the standard folder structure (`stores`, `components`, etc.) automatically.

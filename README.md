# Expense Tracker

A modern, "Breezy" designed Expense Tracker application built with React, TypeScript, and Vite. featuring real-time data persistence, interactive charts, and a clean architectural pattern.

## Features

- **Real-Time Dashboard**: Instantly updates your balance, income, and expenses as you add transactions.
- **Interactive Analytics**: Smooth Area Charts visualize your weekly spending flow (using Recharts).
- **Transaction Management**: Add and remove transactions with a robust form interface.
- **Data Persistence**: Data is saved to your browser's Local Storage, so you never lose your records.
- **Responsive Design**: Mobile-friendly glassmorphic UI built with Tailwind CSS.

## Tech Stack

- **Framework**: React + Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Framer Motion (Animations)
- **State Management**: Zustand (with Persistence)
- **Forms**: React Hook Form + Zod
- **Charts**: Recharts
- **Icons**: Lucide React
- **Routing**: React Router Dom

## Getting Started

### Prerequisites
- Node.js installed.

### Installation

1.  Clone the repository.
2.  Install dependencies:
    ```bash
    npm install
    ```

### Running the App

Start the development server:
```bash
npm run dev
```

### Building for Production

Create a production build:
```bash
npm run build
```

## Project Structure

This project follows a **Feature-based Clean Architecture**:

- `src/features/`: Contains domain logic (Transactions, Dashboard).
- `src/pages/`: Contains route-level pages (Dashboard, Analytics, Cards, Settings).
- `src/shared/`: Reusable UI components (Buttons, Cards).

To generate a new feature, run:
```bash
./feature.ps1  # Windows
# or
./feature.sh   # Linux/Mac
```

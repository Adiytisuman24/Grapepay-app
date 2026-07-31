# 🍇 GrapePay — Financial Super App

> **Pay. Manage. Travel. Borrow. Save. Get Rewarded.**

GrapePay is a premium **financial + payments + everyday-services super app** built with React + TypeScript on the frontend and Node.js/Express on the backend. Designed to rival Google Pay and super.money, it brings UPI payments, cashback rewards, credit health, travel booking, loans, and smart AI-driven home screens under one beautifully crafted app.

---

## ✨ Features

### 💳 Payments Engine
- **Scan & Pay** — QR scanner with animated laser and "Pay Again" contact strip
- **UPI State Machine** — `CREATED → VALIDATED → AUTHORIZED → PROCESSING → SUCCESS`
- **Double-entry Ledger** — Strict accounting for all transactions
- **Payment Processing Screen** — Dark-theme animated circular progress ring

### 🍇 Rewards Engine
- **Event-driven cashback** — Auto-calculated on every eligible payment
- **Campaign manager** — Weekend boosts, merchant-specific multipliers
- **Referral system** — Earn ₹100 per successful invite

### 💰 Money Dashboard
- **Net Worth snapshot** — Aggregated across all linked bank accounts
- **Credit Health (CIBIL)** — Animated gauge + factor breakdown + timeline
- **Loans Marketplace** — Pre-approved offers, active EMI tracker
- **Upcoming Bills Calendar** — Smart due-date alerts

### ✈️ Travel Hub
- **Flights, Trains, Bus, Hotels** — Multi-modal booking interface
- **Grape Trip Assistant** — AI-powered itinerary builder (Gemini-ready)
- **My Trips** — Upcoming trip details with cab + hotel bundling

### 🧠 Smart Home Screen
- **Server-Driven UI** — Home layout fetched from backend API
- **Context-aware modules** — Bill reminders, reward nudges, travel offers
- **Universal Search (Grape AI)** — Cross-domain intent capture

---

## 🏗️ Architecture

```
Grapepayapp/
├── src/                          # React + TypeScript frontend
│   ├── app/                      # Router & AppShell
│   ├── core/
│   │   ├── theme.ts              # Grape Design System tokens
│   │   └── widgets/              # Reusable UI components
│   └── features/
│       ├── home/                 # Server-driven home screen
│       ├── payments/             # Payment, Processing, Success
│       ├── scanner/              # QR Scanner
│       ├── money/                # Dashboard, CIBIL, Loans
│       ├── rewards/              # Cashback & referrals
│       ├── travel/               # Flights, Hotels, Trips
│       ├── recharge/             # Mobile, DTH, Bills
│       ├── activity/             # Transaction history
│       └── profile/              # Settings, Support, Security
│
└── server/                       # Node.js + Express API Gateway
    ├── index.ts                  # API Gateway (port 3001)
    └── services/
        ├── home-service.ts       # Server-driven home config
        ├── payment-service.ts    # UPI state machine
        ├── ledger-service.ts     # Double-entry accounting
        └── reward-service.ts     # Cashback & campaigns
```

---

## 🎨 Design System

Built on the **Grape Design System** with:
- **Colors** — Purple primary `#5B16D8`, semantic success/error/warning
- **Typography** — Outfit (headings) + Inter (body) from Google Fonts
- **Animations** — Slide-up, scale-in, float, confetti, pulse-ring keyframes
- **Glassmorphism** — Backdrop-filter panels for overlays
- **Dark Screens** — Scanner, Processing screen use deep `#0A0612` theme

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### 1. Install frontend dependencies
```bash
npm install
```

### 2. Start the backend API server
```bash
cd server
npm install
npm run dev
# Runs on http://localhost:3001
```

### 3. Start the frontend dev server
```bash
# From root directory
npm run dev
# Opens at http://localhost:5173
```

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/v1/home` | Server-driven home screen config |
| `POST` | `/api/v1/payments` | Initiate a UPI payment |
| `GET` | `/api/v1/transactions` | Transaction history |
| `GET` | `/api/v1/rewards/balance` | User reward balance |

---

## 📱 Screens

| Screen | Path |
|--------|------|
| Welcome | `/` |
| Login (Dialpad) | `/auth` |
| OTP Verify | `/otp` |
| Bank Setup | `/bank-setup` |
| Home | `/home` |
| Scan & Pay | `/scan` |
| Payment | `/payment` |
| Processing | `/processing` |
| Success | `/success` |
| Activity | `/activity` |
| Money | `/money` |
| Rewards | `/rewards` |
| CIBIL Score | `/cibil` |
| Loans | `/loans` |
| Travel Hub | `/travel` |
| Recharge | `/recharge` |
| Profile | `/profile` |
| Referrals | `/referrals` |
| Help & Support | `/profile/support` |

---

## 🛠️ Tech Stack

**Frontend**
- React 18 + TypeScript
- Vite (build tool)
- React Router v6
- Lucide React (icons)
- Vanilla CSS with custom design tokens

**Backend**
- Node.js + Express
- TypeScript + ts-node
- In-memory state (easily swappable to PostgreSQL)

---

## 📄 License

MIT © 2026 GrapePay

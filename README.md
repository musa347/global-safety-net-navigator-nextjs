# Global Safety Net Navigator - Frontend

Next.js frontend application for the Global Safety Net Navigator income protection information system.

## 🚀 Tech Stack

- **Next.js 14** (App Router)
- **React 18** 
- **TypeScript**
- **Tailwind CSS**
- **REST API Integration**

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Backend API running on port 8080

## 🛠️ Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=http://localhost:8080/api/v1
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
app/
├── page.tsx                 # Home page
├── scenarios/
│   └── page.tsx            # Scenario selection (API-powered)
├── result/
│   └── page.tsx            # Result display (API-powered)
├── layout.tsx              # Root layout
└── globals.css             # Global styles

lib/
├── api.ts                  # API client
└── types.ts                # TypeScript types

components/
├── Header.tsx              # Navigation header
└── Footer.tsx              # Page footer
```

## 🔌 API Integration

The frontend connects to the Spring Boot backend:

- **GET** `/api/v1/income/scenarios` - Fetch available scenarios
- **POST** `/api/v1/income/journeys` - Submit scenario selection

All API calls include:
- Error handling with retry
- Loading states
- TypeScript type safety

## 🎨 Design System

**SafetyWing Brand Colors:**
- Primary Turquoise: `#5DCCCC`
- Navy: `#2D3E50`
- Yellow: `#F5D576`
- Background: `#F8F9FA`

**Icons:** Material Symbols (Google Fonts)

## 🧪 Testing

```bash
npm run build    # Production build
npm run lint     # ESLint check
```

## 📦 Production Build

```bash
npm run build
npm start
```

## 🌐 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_API_URL` | Backend API base URL | Yes |

**Development:** `http://localhost:8080/api/v1`  
**Production:** Update with deployed backend URL

## 🔗 Related

- [Backend API](../global-safety-net-navigator-backend)
- [PRD Document](../safetywing-navigator-cleaned.md)

## 📝 Features

✅ Dynamic scenario loading from API  
✅ Real-time policy information display  
✅ Source attribution with official links  
✅ Responsive design (desktop-first)  
✅ Loading and error states  
✅ TypeScript type safety  

## 🚧 Known Limitations

- Desktop-focused (1024px minimum width)
- Single scenario (CONTRACT_CANCELLED) in MVP
- No user authentication required
- No personal data collection

## 📄 License

Educational prototype - not affiliated with SafetyWing.

---

**Status:** ✅ Ready for deployment

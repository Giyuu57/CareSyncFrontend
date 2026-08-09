# CareSync Frontend

CareSync is a healthcare web platform for medicine discovery, nearby pharmacy/hospital search, pharmacy store inventory management, and AI-assisted healthcare guidance.

This repository is the **frontend** of CareSync, built with **Next.js 15** and **React 19**.

**Live demo:** [caresync-frontend-self.vercel.app](https://caresync-frontend-self.vercel.app)

> Companion repository: [CareSyncBackend](https://github.com/Giyuu57/CareSyncBackend)

---

## Features

### Medicine Search
- Search medicines by name.
- View medicine details — usage, composition, manufacturer.
- Compare alternatives and related medicine information.

### Nearby Healthcare Facilities
- Find nearby hospitals and pharmacies on an interactive map (Leaflet).
- Search by city or current location.

### Medical Store Dashboard
- Manage store profile and inventory.
- Add, update, and remove medicines from stock.
- Track available quantities.

### AI-Powered Assistance
- Smart healthcare-related suggestions powered by Google's Gemini API.

### User-Friendly Interface
- Clean, responsive UI across desktop, tablet, and mobile.
- Simple navigation for patients, customers, and store owners.

## Tech Stack

| Category         | Technology                                      |
|-------------------|---------------------------------------------------|
| Framework         | Next.js 15 (App Router, Turbopack)                |
| UI Library        | React 19                                          |
| Language          | TypeScript                                        |
| Styling           | Tailwind CSS 4                                    |
| HTTP Client       | Axios                                             |
| Maps              | Leaflet / React-Leaflet                           |
| AI                | Google Gemini (`@google/genai`)                   |
| Analytics         | Vercel Analytics & Speed Insights                 |
| Icons             | react-icons                                       |

## Project Structure

```
CareSyncFrontend/
├── app/            # Next.js App Router — routes and pages
├── components/     # Reusable UI components
├── context/        # React context providers (e.g. auth/session state)
├── public/         # Static assets
├── styles/         # Global styles
├── utils/          # API helpers and shared utility functions
├── next.config.ts  # Next.js configuration
├── package.json    # Dependencies and scripts
└── README.md
```

## Prerequisites

- **Node.js** v18.18 or later (required by Next.js 15)
- **npm** v9 or later
- A running instance of [CareSyncBackend](https://github.com/Giyuu57/CareSyncBackend)
- A **Google Maps API key** (for map-based location features)
- A **Google Gemini API key** (for AI-powered assistance)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Giyuu57/CareSyncFrontend.git
cd CareSyncFrontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=<your-google-maps-api-key>
GEMINI_API_KEY=<your-gemini-api-key>
```

> `NEXT_PUBLIC_API_URL` must point to wherever your [CareSyncBackend](https://github.com/Giyuu57/CareSyncBackend) instance is actually running — check that repo's own `.env` for its configured `PORT` before setting this.

### 4. Run the development server

```bash
npm run dev
```

The app runs on:

```
http://localhost:4000
```

> Note: this project is configured to run on **port 4000**, not the Next.js default of 3000 — this frees up 3000 for the backend during local development.

## Available Scripts

| Command         | Description                                  |
|------------------|-----------------------------------------------|
| `npm run dev`   | Start the development server (port 4000, Turbopack) |
| `npm run build` | Create an optimized production build          |
| `npm run start` | Serve the production build (port 4000)        |
| `npm run lint`  | Run ESLint checks                             |

## Backend Integration

CareSync Frontend communicates with [CareSyncBackend](https://github.com/Giyuu57/CareSyncBackend) for:

- User authentication
- Medicine data
- Store and inventory management
- Order handling
- Location-based store search

Make sure the backend is running and reachable at the URL set in `NEXT_PUBLIC_API_URL` before using any feature that hits the API — the app will fail to load data otherwise.

## Deployment

The app is set up to deploy on [Vercel](https://vercel.com) (see the live demo link above), and is also compatible with Netlify, Render, or Firebase Hosting for static/edge deployment.

### Deploy on Vercel

1. Push your changes to GitHub.
2. Import the repository into Vercel.
3. Set `NEXT_PUBLIC_API_URL`, `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`, and `GEMINI_API_KEY` as environment variables in the Vercel project settings.
4. Deploy — Vercel will run `npm run build` automatically.

## Roadmap

- User profile management
- Online medicine ordering
- Prescription upload support
- Real-time inventory updates
- Appointment booking
- Admin dashboard
- Improved AI health assistant
- Push notifications and reminders

## Author

**Gouransh Sattavan** — [@Giyuu57](https://github.com/Giyuu57)

## License

Licensed under the [MIT License](./LICENSE).

## Disclaimer

CareSync is built for educational and project-demonstration purposes. It is not intended as a substitute for professional medical advice, diagnosis, or treatment.
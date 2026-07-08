# CareSync Frontend

CareSync is a modern healthcare web platform designed to simplify medicine discovery, nearby medical facility access, store inventory management, and healthcare assistance through a clean and responsive user interface.

This repository contains the frontend of the CareSync platform, built with **Next.js** for performance, scalability, and smooth user experience.

---

## Features

### Medicine Search

- Search medicines by name.
- View medicine details such as usage, composition, and manufacturer.
- Compare alternatives and find relevant medicine information.

### Nearby Healthcare Facilities

- Find nearby hospitals and pharmacies.
- Search facilities by city or current location.
- Interactive map-based experience for better accessibility.

### Medical Store Dashboard

- Manage store profile and inventory.
- Add, update, and remove medicines.
- Track available stock and medicine details.

### User-Friendly Interface

- Clean and modern UI.
- Fully responsive design for desktop, tablet, and mobile.
- Simple navigation for patients, customers, and store owners.

### AI-Powered Assistance

- Get smart healthcare-related suggestions.
- Improve user experience with intelligent insights.

---

## Tech Stack

- **Next.js** – React framework for frontend development
- **React.js** – Component-based UI library
- **JavaScript / TypeScript** – Application logic
- **Tailwind CSS** – Styling and responsive design
- **Axios / Fetch API** – API communication
- **Google Maps API / Map Integration** – Location-based features
- **Backend API** – Connected with CareSync backend services

---

## Project Structure

```bash
caresync-frontend/
│
├── app/                  # Next.js app routes and pages
├── components/           # Reusable UI components
├── public/               # Static assets
├── styles/               # Global styles
├── lib/                  # Utility functions and API helpers
├── hooks/                # Custom React hooks
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation
```

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/caresync-frontend.git
cd caresync-frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create Environment File

Create a `.env.local` file in the root directory and add the required environment variables:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

Replace the values according to your backend server and API keys.

### 4. Run the Development Server

```bash
npm run dev
```

The project will start on:

```bash
http://localhost:3000
```

---

## Available Scripts

```bash
npm run dev
```

Runs the app in development mode.

```bash
npm run build
```

Creates an optimized production build.

```bash
npm run start
```

Starts the production server.

```bash
npm run lint
```

Runs linting checks.

---

## Backend Integration

CareSync Frontend communicates with the CareSync Backend for:

- User authentication
- Medicine data
- Store management
- Inventory management
- Order handling
- Location-based services
- AI-powered healthcare insights

Make sure the backend server is running before using features that require API access.

---

## Deployment

The frontend can be deployed easily on platforms like:

- Vercel
- Netlify
- Render
- Firebase Hosting

### Deploy on Vercel

```bash
npm run build
```

Then connect the repository to Vercel and add the required environment variables in the Vercel dashboard.

---

## Future Improvements

- User profile management
- Online medicine ordering
- Prescription upload support
- Real-time inventory updates
- Appointment booking
- Admin dashboard
- Improved AI health assistant
- Push notifications and reminders

---

## Author

**Gouransh Sattavan**

GitHub: [@Giyuu57](https://github.com/Giyuu57)

---

## License

This project is licensed under the MIT License.

---

## Disclaimer

CareSync is built for educational and project demonstration purposes. It should not be used as a replacement for professional medical advice, diagnosis, or treatment.

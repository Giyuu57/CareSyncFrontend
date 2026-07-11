// Central place to read the backend URL, so a stray trailing slash in the
// environment variable (e.g. Vercel dashboard) can never produce a
// double-slash in request URLs (`https://host//auth/login`), which Express
// does NOT treat the same as `https://host/auth/login` and 404s on.
export const API_BASE = (process.env.NEXT_PUBLIC_BACKEND || "").replace(/\/+$/, "");

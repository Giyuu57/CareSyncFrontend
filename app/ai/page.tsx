import React from 'react';

// NOTE: This page used to call Google's Gemini API directly from the browser
// using NEXT_PUBLIC_GAPI. That exposed the API key to every visitor (anyone
// can read NEXT_PUBLIC_* values out of the shipped JS) and let them run up
// your bill. Removed until there's a backend endpoint that proxies the
// request server-side with a non-public key.
export default function AI() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6 text-blue-600 text-left">AI</h1>
      <p className="text-lg">This is a page for AI related content.</p>
      <p className="text-gray-600 italic">Page under construction. More content coming soon!</p>
    </div>
  );
}

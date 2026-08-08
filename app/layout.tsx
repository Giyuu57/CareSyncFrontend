import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// @ts-expect-error - CSS module is handled by Next.js
import "./globals.css";
import Navbar from "@/components/navbar";
import BroadcastAlerts from "@/components/BroadcastAlerts";
import MaintenanceGuard from "@/components/MaintenanceGuard";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { ToastProvider } from "@/context/ToastContext";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CareSync",
  description: "Medicinal application",
  keywords: ["medicinal", "application", "medication", "search", "care", "sync"],
  icons: {
    icon: "/logo.svg",
  }
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ToastProvider>
          <MaintenanceGuard>
            <div>
              <Navbar />
            </div>
            <BroadcastAlerts />
            
            <main className="flex flex-col items-center justify-start min-h-[calc(100vh-70px)] w-full mt-6 px-4 md:px-0">
              {children}
            </main>
          </MaintenanceGuard>
        </ToastProvider>
        <Analytics/>
        <SpeedInsights/>
        
        
      </body>
    </html>
  );
}


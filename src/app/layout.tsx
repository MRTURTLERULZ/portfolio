import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mahdi Islam - Mechanical Engineer & Developer",
  description: "Mechanical Engineering student at CCNY. CAD design, 3D printing, Unity development, and startup founder. Passionate about combining engineering principles with modern technology.",
  icons: {
    icon: [
      { url: '/images/QuickbitesLogo.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/QuickbitesLogo.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/images/QuickbitesLogo.png',
    apple: '/images/QuickbitesLogo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Keep head managed by Next's metadata system */}
      <head>
        <link rel="icon" href="/images/QuickbitesLogo.png" type="image/png" />
        <link rel="shortcut icon" href="/images/QuickbitesLogo.png" type="image/png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Load the model-viewer web component before app code runs */}
        <Script
          type="module"
          src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
          strategy="beforeInteractive"
        />
        {children}
      </body>
    </html>
  );
}

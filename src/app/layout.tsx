
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"; // Ensure Toaster is imported if needed

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Gabuzando - Desk Setup Showcase', // Updated title to include Gabuzando
  description: 'An interactive showcase of a home office desk setup.', 
  // icons: { // Favicon generation is not supported by the AI, removing for now
  //   icon: '/favicon.ico', 
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Toaster /> {/* Ensure Toaster is included if toast notifications are used */}
      </body>
    </html>
  );
}

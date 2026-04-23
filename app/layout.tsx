import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Centrovition.Ai - 360° Panorama Viewer',
  description: 'Interactive 360-degree panorama viewer with live view analytics powered by Centrovition.Ai',
  icons: {
    icon: '/image/fa - Copy.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/image/fa - Copy.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}

import './styles/globals.css';
import React from 'react';

export const metadata = {
  title: 'All For The Gains — Coaching by Dakim Stanley',
  description: 'Built by Discipline. Guided by Faith. Results that last.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

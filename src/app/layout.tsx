import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from 'next-themes';

export const metadata: Metadata = {
  title: 'Portal',
  description: 'Starter'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mujtaba Ahmed | Software & Hardware Engineer',
  description: 'Portfolio of Mujtaba Ahmed — Software & AI Engineer specializing in Backend Architecture, Go-native frameworks, and Digital Chip Design. NUST \'26.',
  keywords: ['Software Engineer', 'Backend Architecture', 'Go', 'Verilog', 'AI Engineer', 'Digital Design', 'NUST'],
  authors: [{ name: 'Mujtaba Ahmed' }],
  openGraph: {
    title: 'Mujtaba Ahmed | Software & Hardware Engineer',
    description: 'Backend Architecture • Go-native Frameworks • Digital Chip Design',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body suppressHydrationWarning className="noise-overlay grid-overlay antialiased">
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}

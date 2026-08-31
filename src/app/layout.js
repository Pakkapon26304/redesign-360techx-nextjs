import { Inter, Kanit } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import CookieConsent from '../components/CookieConsent';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const kanit = Kanit({ subsets: ['thai', 'latin'], weight: ['300', '400', '600'], variable: '--font-kanit' });

export const metadata = {
  title: '360TECHX - ระบบจัดการขนส่ง TMS อันดับ 1',
  description: 'แพลตฟอร์มบริหารจัดการงานขนส่งครบวงจร (TMS) ที่ดีที่สุดในไทย',
  icons: {
    icon: '/icon-360techx.svg',
    shortcut: '/icon-360techx.svg',
    apple: '/icon-360techx.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="th" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const savedTheme = localStorage.getItem('theme') || 'light';
              document.documentElement.setAttribute('data-theme', savedTheme);
            `,
          }}
        />
      </head>
      <body className={`tech-grid-page ${inter.variable} ${kanit.variable}`}>
        {/* Global SVG Definitions */}
        <svg width="0" height="0" style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}>
            <defs>
                <linearGradient id="primary-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop stopColor="#32ff98" offset="0%" />
                    <stop stopColor="#03665e" offset="100%" />
                </linearGradient>
            </defs>
        </svg>

        <Navbar />
        <main>{children}</main>
        <ScrollReveal />
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';
import ScrollRestoration from '@/components/ScrollRestoration';

export const metadata: Metadata = {
    title: 'KooChaeeun | Designer & UI Developer',
    description: 'Portfolio of KooChaeeun — Designer & UI Developer with 2+ years of experience.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ko">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700;800&display=swap"
                    rel="stylesheet"
                />
                {/* Pretendard — CDN */}
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
                />
            </head>
            <body>
                <ScrollRestoration />
                {children}
            </body>
        </html>
    );
}

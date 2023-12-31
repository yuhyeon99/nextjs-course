import './globals.css';
import { Inter } from 'next/font/google';
import MainHeader from '../components/layout/main-header.js';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {/* 루트 컴포넌트에 헤더 요소 추가 */}
                <MainHeader />
                {children}
            </body>
        </html>
    );
}

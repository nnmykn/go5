import '../globals.css';
import type {Metadata} from 'next';

export const metadata: Metadata = {
    title: 'Status | 🧪Go5 Lab.',
    description: '🧪We are an organization that develops a variety of web applications.',
};

type RootLayoutProps = {
    children: React.ReactNode;
};

export default function StatusLayout({children}: RootLayoutProps) {
    return (
        <html lang="ja">
        <body>{children}</body>
        </html>
    );
}

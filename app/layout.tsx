import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Simple SNS App',
  description: '学習用の簡易SNSアプリ',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}

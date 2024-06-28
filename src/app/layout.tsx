import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./reset.css";
import "./globals.css";
import Navigation from "./components/navigation";
import Head from 'next/head'
import Footer from './components/footer'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ARK | Your IT Sanctuary",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{scrollBehavior:'smooth'}}>
      <Head>
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@900&display=swap" rel="stylesheet"></link>
      </Head>
      <body className={inter.className}>
        <Navigation />
        <main className="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
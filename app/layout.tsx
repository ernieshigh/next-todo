import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { link } from "fs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const links = [
    { href: "/", label: "Home" },
    { href: "/docs", label: "Docs" },
    { href: "/todo", label: "App" },
  ];
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <nav>
            <ul className="flex item-center">
              {links.map((link) => (
                <li key={link.href} className="px-4 text-2xl">
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <div>{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}

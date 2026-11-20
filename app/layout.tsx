import type { ReactNode } from "react";
import Link from "next/link";
import "./globals.css"
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500","700"],   //added 500 for real medium // required for Roboto
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <head>
        <title>Next.js Learning Course</title>
      </head>
      <body className={roboto.className}>
        <header style={{ padding: 12, background: "skyblue" }}>My App Navbar</header>
        <nav style={{ display: "flex", gap: 12 }}>
          <Link href="/" style={{ fontWeight: 500 }}>Home Link</Link>
          {/* <Link href="/">Home</a> */}
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/products">Product</Link>
        </nav>
        {children}
        <footer style={{ padding: 12, background: "#f5f5f5" }}>My Footer</footer>
      </body>
    </html>
  )
}
import type { ReactNode } from "react";
import Link from "next/link";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <head>
        <title>Next.js Learning Course</title>
      </head>
      <body>
        <header style={{ padding: 12, background: "#f5f5f5" }}>My App Navbar</header>
        <nav style={{ display: "flex", gap: 12 }}>
          <Link href="/">Home Link</Link>
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
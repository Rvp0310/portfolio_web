import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio - RVP",
  description: "Developer Rvp0310 on GitHub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='antialiased'>
        <div className="cursor-glow">
          {children}
        </div>
      </body>
    </html>
  );
}

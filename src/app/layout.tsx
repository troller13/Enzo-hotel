import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ezio Hotel | Chișinău",
  description:
    "Ezio Hotel din Chișinău — un hotel pentru fiecare moment plin de emoție. Camere de lux, facilități moderne și un serviciu impecabil.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;600;700&family=Poppins:wght@400;500;600;700&family=Raleway:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-raleway text-[#1c1c1c] bg-white">
        {children}
      </body>
    </html>
  );
}

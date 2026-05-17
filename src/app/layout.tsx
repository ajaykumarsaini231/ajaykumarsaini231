import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ajay Kumar Saini | Portfolio",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Caveat:wght@500&display=swap"
          rel="stylesheet"
        />

        
      </head>

      <body className="font-[Poppins]">{children}</body>
    </html>
  );
}

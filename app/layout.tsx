import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RecastCoach.ai | Same you. Stronger story.",
  description: "Career coaching for displaced workers. Built for the person behind the resume.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

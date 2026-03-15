import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IEEE Communication Society",
  description:
    "Official website of the IEEE Communication Society Student Chapter at the Institute of Engineering & Management, Kolkata.",
  keywords: ["IEEE", "ComSoc", "IEM", "Communication Society", "Student Chapter"],

  icons: {
    icon: "/favicon.png",
  },

  openGraph: {
    title: "IEEE Communication Society",
    description:
      "Official website of the IEEE Communication Society Student Chapter at IEM.",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}

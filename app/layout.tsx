import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mike Benedetto | Luxury Real Estate | Vaughan, King City & GTA",
  description: "Mike Benedetto – Real Estate Sales Representative with RE/MAX Premier (The OP Team). Distinctive properties, luxury estates, and residential investments in Vaughan, Woodbridge, King City, and the GTA.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} scroll-smooth`}>
      <body className="font-sans bg-white text-slate-800 antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}

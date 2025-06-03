import type { Metadata } from "next";
import '../sass/main.scss'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { getGlobalSettings } from "@/data/loaders";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Surfcamp",
  description: "We invite you to embark on an unforgettable surfing adventure",
};

async function loader() {
  const { data } = await getGlobalSettings()
  //console.dir(data, {depth: null})
  if (!data) throw new Error('Failed to fetch global settings')
  return { header: data?.header, footer: data?.footer};
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {header, footer} = await loader()
  //console.dir(footer, {depth: null})
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header data= {header}/>
        {children}
        <Footer data={footer}/>
      </body>
    </html>
  );
}

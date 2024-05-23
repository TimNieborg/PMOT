import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";
import { cn } from "@/lib/utils";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PMOT",
  description: "PMOT webshop",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={cn("bg-gray-100", inter.className)}>
        <NextIntlClientProvider messages={messages}>
          <ClerkProvider>
            <Navbar />
            {children}
            <Footer />
            <Toaster />
          </ClerkProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

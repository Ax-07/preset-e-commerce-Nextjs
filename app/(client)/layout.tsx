import React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/src/utils/tailwind_cn";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@/src/components/themes/theme-provider";
import Header from "@/src/blocks/Header/Header";
import { globalconfig } from "@/config/global.config";
import { NavBreadcrumb } from "@/src/blocks/NavBreadcrumb/NavBreadcrumb";
import { Toaster } from "react-hot-toast";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: globalconfig.siteName,
  description: globalconfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en"
    suppressHydrationWarning={true}
     >
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          "antialiased"
        )}
        suppressHydrationWarning={true}

      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
        <SessionProvider>
            <Header />
            <main className="relative container mx-auto py-17">
              <NavBreadcrumb />
              <Toaster position="top-center" toastOptions={{ duration: 2000, style: {
                background: "#333",
                color: "#fff",
            }, }} />
              {children}
            </main>
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

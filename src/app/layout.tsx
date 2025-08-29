import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import MainLayout from "@/layout/MainLayout";
import ThemeInit from "@/layout/ThemeInit";





export const metadata: Metadata = {
  title: "GEEX",
  description: "GEEX admin dushboard",
  icons:"/assets/logo-dark-01.svg"
  
};

const peydaReg = localFont({
  src: "../../public/fonts/PeydaFaNum-Regular.woff2",

  variable: "--font-peydaReg",
  display: "swap",
});
const peydaMed = localFont({
  src: "../../public/fonts/PeydaFaNum-Medium.woff2",

  variable: "--font-peydaMed",
  display: "swap",
});
const peydaSemi = localFont({
  src: "../../public/fonts/PeydaFaNum-SemiBold.woff2",

  variable: "--font-peydaSemi",
  display: "swap",
});
const peydaBold = localFont({
  src: "../../public/fonts/PeydaFaNum-Bold.woff2",

  variable: "--font-peydaBold",
  display: "swap",
});

// const payda =
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          body-dark

          ${peydaReg.variable}
          ${peydaMed.variable}
          ${peydaSemi.variable}
          ${peydaBold.variable}
          antialiased`}
      >
        <MainLayout>
          <ThemeInit />
          {children}
        </MainLayout>
      </body>
    </html>
  );
}

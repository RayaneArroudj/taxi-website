import Footer from "@/components/footer";
import Header from "@/components/header";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "next-themes";
import localFont from "next/font/local";
import "./globals.css";

const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/Satoshi-Regular.woff2", // Chemin corrigé
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-Medium.woff2", // Chemin corrigé
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-Bold.woff2", // Chemin corrigé
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
});

export const metadata = {
  icons: {
    icon: "/icon.ico",
  },
  title: "Elite-Lyon-Taxi",
  description: "Reserver votre taxi sur Lyon et ses alentours",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={satoshi.variable}>
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Toaster position="bottom-right" />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

import Footer from "@/components/footer";
import Header from "@/components/header";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  icons: {
    icon: "/icon.ico",
  },
  title: "Elite-Lyon-Taxi",
  description: "Reserver votre taxi sur Lyon et ses alentours",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
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
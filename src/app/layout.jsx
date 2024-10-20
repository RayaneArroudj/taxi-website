import Footer from "@/components/footer";
import Header from "@/components/header";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

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
        <Header />
        {children}
        <Toaster position="bottom-right" />
        <Footer />
      </body>
    </html>
  );
}

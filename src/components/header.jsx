'use client'
import React, { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { MoonIcon, SunIcon, MenuIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { WhatsappIcon } from "@/components/socials/whatsapp-icon";

const NavItem = ({ href, children, onClick }) => (
  <Link href={href} className="text-sm font-medium transition-colors hover:text-primary" onClick={onClick}>
    {children}
  </Link>
);

export default function Header() {
  const { setTheme, theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const whatsappNumber = "+33770406123"; 
  const whatsappMessage = "Bonjour, je souhaite réserver un taxi.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const closeSheet = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.jpg" alt="logo" width={40} height={40} className="rounded-full" />
            <span className="hidden font-bold sm:inline-block">
              Elite Lyon Taxi
            </span>
          </Link>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Contacter sur WhatsApp"
            asChild
          >
            <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <WhatsappIcon className="h-5 w-5" />
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <MenuIcon className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-4">
                <NavItem href="/" onClick={closeSheet}>Accueil</NavItem>
                <NavItem href="/services" onClick={closeSheet}>Services</NavItem>
                <NavItem href="/contact" onClick={closeSheet}>Contact</NavItem>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
'use client'
import React, { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

const NavItem = ({ href, children }) => (
  <Link href={href} className="text-sm font-medium transition-colors hover:text-primary">
    {children}
  </Link>
);

export default function Header() {
  const { setTheme, theme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image src="/logo.jpg" alt="logo" width={40} height={40} className="rounded-full" />
            <span className="hidden font-bold sm:inline-block">
              Elite-Lyon-Taxi
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <NavItem href="/about">À propos</NavItem>
            <NavItem href="/services">Services</NavItem>
            <NavItem href="/contact">Contact</NavItem>
          </nav>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden">
              <MenuIcon className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
              <Image src="/logo.jpg" alt="logo" width={40} height={40} className="rounded-full" />
              <span className="font-bold">Elite-Lyon-Taxi</span>
            </Link>
            <nav className="flex flex-col space-y-4 mt-4">
              <NavItem href="/about">À propos</NavItem>
              <NavItem href="/services">Services</NavItem>
              <NavItem href="/contact">Contact</NavItem>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-1">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle theme"
              className="mr-6"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              <SunIcon className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <MoonIcon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
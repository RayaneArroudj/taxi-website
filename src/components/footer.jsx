import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
<<<<<<< HEAD
    <footer className="bg-white rounded-lg shadow bottom-4 m-4 border">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Image
              className="rounded-2xl"
              src="/logo.jpg"
              alt="logo"
              width={50}
              height={50}
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Elite Lyon Taxi
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-black-500 sm:mb-0">
            <li>
              <a href="/" className="hover:underline me-4 md:me-6">
                Réservation
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                CGV
              </a>
            </li>
            <li>
              <a
                href="/mentions-legales"
                className="hover:underline me-4 md:me-6"
              >
                Mentions Légales
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
=======
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="sm:flex-row flex-col flex justify-between">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <Link href="/" className="flex items-center space-x-3 mb-4 sm:mb-0">
              <Image
                className="rounded-lg"
                src="/logo.jpg"
                alt="Elite Lyon Taxi logo"
                width={50}
                height={50}
              />
              <span className="text-2xl font-semibold">Elite Lyon Taxi</span>
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-4">
            <div>
              <Link
                href="/services"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors "
              >
                Services
              </Link>
            </div>
            <div>
              <Link
                href="/contact"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
>>>>>>> axel
                Contact
              </Link>
            </div>
            <div>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                CGV
              </Link>
            </div>
            <div>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Mentions Légales
              </Link>
            </div>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()}{" "}
          <Link href="/" className="hover:underline">
            Elite Lyon Taxi™
          </Link>
          . Tous droits réservés.
        </div>
        <div className="text-center text-sm text-muted-foreground mt-2">
          Powered By <span className="font-bold italic">Fluxx Web Agency.</span>
        </div>
      </div>
    </footer>
  );
}

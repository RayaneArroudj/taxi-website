import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
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

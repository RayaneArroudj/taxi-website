"use client";
import Image from "next/image";
import { useState } from "react";
import { MdOutlineClose, MdOutlineMenu } from "react-icons/md";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="bg-white rounded-lg shadow m-4 border">
        <div className="w-full bg-white flex justify-between items-center px-1">
          <Image src="/logo.jpg" alt="logo" width={80} height={80} />
          <a href="/" className="font-bold">
            Elite-Lyon-Taxi
          </a>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <MdOutlineClose className="size-10" />
            ) : (
              <MdOutlineMenu className="size-10" />
            )}
          </button>
        </div>
      </nav>
      {/* Menu */}
      <div
        className={`bg-white border h-full justify-self-end fixed right-0 z-50 ${
          isOpen
            ? " w-3/6 lg:w-2/6 duration-700"
            : "translate-x-full w-3/6 duration-700"
        }`}
      >
        Sidebar
      </div>
    </header>
  );
}

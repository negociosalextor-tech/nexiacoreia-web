"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/site-config";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-900/95 backdrop-blur-md border-b border-brand-700/50">
      <div className="container mx-auto flex items-center justify-between h-16 lg:h-20 px-4">
        <Link href="/#inicio" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent flex items-center justify-center">
            <span className="text-brand-900 font-bold text-sm font-[family-name:var(--font-heading)]">
              N
            </span>
          </div>
          <span className="text-lg font-bold font-[family-name:var(--font-heading)] text-white tracking-tight">
            NexiaCore <span className="text-accent">IA</span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-accent transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contacto"
            className="px-5 py-2 bg-accent text-brand-900 font-semibold text-sm hover:bg-accent-hover transition-colors duration-200"
          >
            Agenda Consultoría
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden text-white p-2"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-brand-700/50 bg-brand-900">
          <div className="flex flex-col px-4 py-4 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-gray-300 hover:text-accent transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contacto"
              onClick={() => setOpen(false)}
              className="px-5 py-2 bg-accent text-brand-900 font-semibold text-sm text-center hover:bg-accent-hover transition-colors duration-200"
            >
              Agenda Consultoría
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

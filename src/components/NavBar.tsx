"use client";

import { calendlyUrl, navLinks } from "../constants";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./Button";

const NavBar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (link: string) => (link === "/" ? pathname === "/" : pathname.startsWith(link));

  return (
    <header
      className={`sticky top-0 z-[100] border-b transition-colors duration-300 ease-[cubic-bezier(.4,0,.2,1)] ${
        scrolled || open ? "border-ink-600 bg-ink-900" : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[82px] max-w-[1180px] items-center justify-between gap-[30px] px-5 md:px-[48px]">
        <Link href="/" className="flex items-center gap-[11px]">
          <Image
            src="/images/fav.png"
            alt="Michael Foss"
            width={36}
            height={36}
            className="h-9 w-9 rounded-full border border-amber-700 object-cover"
          />
          <span className="font-display text-[23px] font-medium tracking-[-.01em] text-paper-0">Michael Foss</span>
        </Link>

        <nav className="hidden items-center gap-[30px] lg:flex">
          {navLinks.map(({ name, link }) => {
            const active = isActive(link);
            return (
              <Link key={name} href={link} className="group relative pb-[3px] text-ui">
                <span className={`transition-colors duration-300 ${active ? "text-paper-0" : "text-paper-300 group-hover:text-paper-0"}`}>
                  {name}
                </span>
                <span
                  className={`absolute bottom-0 left-0 h-px transition-all duration-300 ease-[cubic-bezier(.4,0,.2,1)] ${
                    active ? "w-full bg-amber-400" : "w-0 bg-paper-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href={calendlyUrl} target="_blank" rel="noopener noreferrer">
            Book a call
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center lg:hidden"
        >
          <Image src="/images/menu.svg" alt="" width={20} height={20} className="h-5 w-5 invert" />
        </button>
      </div>

      {open && (
        <div className="border-t border-ink-600 bg-ink-900 px-5 py-6 lg:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map(({ name, link }) => (
              <Link key={name} href={link} className={`text-ui ${isActive(link) ? "text-amber-400" : "text-paper-200"}`}>
                {name}
              </Link>
            ))}
          </nav>
          <div className="mt-5">
            <Button href={calendlyUrl} target="_blank" rel="noopener noreferrer" full>
              Book a call
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;

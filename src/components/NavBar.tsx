"use client";

import { navLinks } from "../constants";
import { useEffect, useState } from "react";
import Link from "next/link";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])
  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <Link className="logo" href="/">
          Michael Foss
        </Link>

        <nav className="desktop">
          <ul>
            {navLinks.map(({link, name}) => (
              <li key={name} className="group">
                <Link href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link href="/contact" className="contact-btn group">
          <div className="inner" >
            <span>Contact Me</span>
          </div>
        </Link>
      </div>
    </header>
  )
}
export default NavBar

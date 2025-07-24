import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ThemeToggle from "../ThemeToggle";
import s from "./Header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleRouteChange = () => setIsMenuOpen(false);
    router.events.on("routeChangeStart", handleRouteChange);
    return () => router.events.off("routeChangeStart", handleRouteChange);
  }, [router]);

  const rightSectionClassName = `${s.rightSection} ${
    isMenuOpen ? s.menuOpen : ""
  }`;
  const burgerClassName = `${s.burger} ${isMenuOpen ? s.active : ""}`;

  return (
    <header className={s.container}>
      <div className={s.logo}>
        <Link href="/metrics">
          <img src="/sd-logo.svg" alt="SD Logo" width="32" height="32" className={s.logoImage} />
          <span className={s.logoText}>Design System Checklist</span>
        </Link>
      </div>

      <div className={rightSectionClassName}>
        <nav className={s.nav}>
          <ul className={s.menu}>
            <li className={s.item}>
              <Link 
                href="/" 
                className={router.pathname === "/" || (router.pathname !== "/about" && router.pathname !== "/share") ? s.active : ""}
                onClick={closeMenu}
              >
                Measure
              </Link>
            </li>
            <li className={s.item}>
              <Link href="/about" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li className={s.item}>
              <Link href="/share" onClick={closeMenu}>
                Share
              </Link>
            </li>
          </ul>
        </nav>
        <ThemeToggle />
      </div>

      <button className={burgerClassName} onClick={() => toggleMenu()}>
        <span className={s.line} />
        <span className={s.line} />
        <span className={s.line} />
      </button>
    </header>
  );
};

export default Header;
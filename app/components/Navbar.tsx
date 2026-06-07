"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  useEffect(() => {
    const navbar = document.getElementById("navbar");
    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobileMenu");
    const mobileClose = document.getElementById("mobileClose");

    const handleScroll = () => {
      navbar?.classList.toggle("scrolled", window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    hamburger?.addEventListener("click", () => mobileMenu?.classList.add("open"));
    mobileClose?.addEventListener("click", () => mobileMenu?.classList.remove("open"));
    mobileMenu?.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => mobileMenu?.classList.remove("open"));
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="mobile-menu" id="mobileMenu">
        <button className="mobile-close" id="mobileClose">✕</button>
        <Link href="/tentang">Tentang</Link>
        <Link href="/layanan">Layanan</Link>
        <Link href="/produk">Produk</Link>
        <Link href="/dokter">Tim Dokter</Link>
        <Link href="/kontak">Konsultasi</Link>
      </div>
      <nav id="navbar">
        <div className="nav-logo">
          <Link href="/">
            <img src="/img-0.jpg" alt="Mugia Aesthetic Clinic" />
          </Link>
        </div>
        <ul className="nav-links">
          <li><Link href="/tentang">Tentang</Link></li>
          <li><Link href="/layanan">Layanan</Link></li>
          <li><Link href="/produk">Produk</Link></li>
          <li><Link href="/dokter">Tim Dokter</Link></li>
        </ul>
        <Link href="/kontak" className="nav-cta">Konsultasi Gratis</Link>
        <button className="hamburger" id="hamburger" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </nav>
    </>
  );
}

"use client";

import { useEffect } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const products = [
  {
    id: 1,
    name: "Facial Wash Glowing",
    category: "Cleanser",
    desc: "Pembersih wajah yang lembut dengan formula brightening — membersihkan kotoran dan minyak berlebih tanpa membuat kulit kering.",
    price: "Rp 89.000",
    image: "/produk-01.jpg",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Facial Wash Acne",
    category: "Cleanser",
    desc: "Pembersih wajah khusus kulit berjerawat dengan kandungan salicylic acid — mengontrol minyak dan mencegah jerawat baru.",
    price: "Rp 89.000",
    image: "/produk-02.jpg",
    badge: null,
  },
  {
    id: 3,
    name: "Toner Glowing",
    category: "Toner",
    desc: "Toner hydrating dengan niacinamide untuk mencerahkan dan mengecilkan pori — langkah penting setelah cleansing.",
    price: "Rp 110.000",
    image: "/produk-03.jpg",
    badge: "New",
  },
  {
    id: 4,
    name: "Toner Acne",
    category: "Toner",
    desc: "Toner antibakteri dengan centella asiatica — menenangkan kulit iritasi dan mengurangi kemerahan akibat jerawat.",
    price: "Rp 110.000",
    image: "/produk-04.jpg",
    badge: null,
  },
  {
    id: 5,
    name: "Sunscreen SPF 50",
    category: "Protection",
    desc: "Sunscreen broad spectrum SPF 50 PA++++ — tekstur ringan, tidak white cast, cocok untuk pemakaian sehari-hari.",
    price: "Rp 135.000",
    image: "/produk-05.jpg",
    badge: "Best Seller",
  },
  {
    id: 6,
    name: "Night Cream",
    category: "Moisturizer",
    desc: "Krim malam dengan retinol dan peptides — meregenerasi kulit saat tidur untuk bangun dengan kulit lebih kenyal dan cerah.",
    price: "Rp 165.000",
    image: "/produk-06.jpg",
    badge: null,
  },
];

export default function ProdukPage() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="produk-page">
      <Navbar />

      {/* Hero */}
      <section className="ln-hero">
        <div className="ln-hero-inner">
          <div className="ln-hero-eyebrow reveal">Skincare Mugia</div>
          <h1 className="ln-hero-title reveal">
            <span className="ln-hero-title-line">Formulasi</span>
            <span className="ln-hero-title-line ln-hero-title-line--accent">Dokter untuk</span>
            <span className="ln-hero-title-line"><em>Rumahmu</em></span>
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="produk-intro">
        <div className="produk-intro-inner">
          <p className="reveal">
            Rangkaian skincare Mugia diformulasikan langsung oleh tim dokter estetika kami. Setiap produk tersertifikasi BPOM, bebas bahan berbahaya, dan dirancang untuk melengkapi treatment klinik.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="produk-grid-section">
        <div className="produk-grid">
          {products.map((product, i) => (
            <div key={product.id} className={`produk-card reveal ${i % 3 === 1 ? "reveal-delay-1" : i % 3 === 2 ? "reveal-delay-2" : ""}`}>
              <div className="produk-card-img">
                <img src={product.image} alt={product.name} />
                {product.badge && <div className="produk-card-badge">{product.badge}</div>}
              </div>
              <div className="produk-card-body">
                <div className="produk-card-category">{product.category}</div>
                <h3 className="produk-card-name">{product.name}</h3>
                <p className="produk-card-desc">{product.desc}</p>
                <div className="produk-card-footer">
                  <span className="produk-card-price">{product.price}</span>
                  <Link href="/#kontak" className="produk-card-btn">Tanya Stok →</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Section */}
      <section className="produk-why">
        <div className="produk-why-inner">
          <div className="produk-why-item reveal">
            <div className="produk-why-num">01</div>
            <h3 className="produk-why-title">Doctor Formulated</h3>
            <p className="produk-why-desc">Setiap produk diformulasikan oleh dokter estetika berpengalaman dengan bahan aktif yang terbukti secara klinis.</p>
          </div>
          <div className="produk-why-item reveal reveal-delay-1">
            <div className="produk-why-num">02</div>
            <h3 className="produk-why-title">BPOM Certified</h3>
            <p className="produk-why-desc">Semua produk telah terdaftar dan tersertifikasi BPOM — aman digunakan tanpa khawatir bahan berbahaya.</p>
          </div>
          <div className="produk-why-item reveal reveal-delay-2">
            <div className="produk-why-num">03</div>
            <h3 className="produk-why-title">Personalized Care</h3>
            <p className="produk-why-desc">Rangkaian produk dirancang untuk saling melengkapi — konsultasi dokter memastikan kamu mendapat kombinasi yang tepat.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta" id="kontak">
        <div className="cta-label">Mulai Perjalananmu</div>
        <h2 className="cta-title reveal">Kulitmu Layak<br />Mendapat yang <em>Terbaik</em></h2>
        <p className="cta-sub reveal reveal-delay-1">
          Konsultasi pertama gratis. Tim dokter kami siap membantu kamu menemukan program perawatan yang tepat sesuai kondisi kulitmu.
        </p>
        <div className="cta-actions reveal reveal-delay-2">
          <a href="https://wa.me/62XXXXXXXXXX?text=Halo+Mugia+Clinic,+saya+ingin+konsultasi+gratis" className="btn-white" target="_blank" rel="noopener noreferrer">Chat via WhatsApp</a>
          <a href="tel:+62XXXXXXXXXX" className="btn-outline-white">Hubungi Kami</a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

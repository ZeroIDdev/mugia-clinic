"use client";

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const products = [
  {
    id: 1,
    name: "Facial Wash Glowing",
    category: "Cleanser",
    tags: ["wajah", "cerah", "glowing", "bersih"],
    desc: "Cuci muka yang bersih tapi tetap lembut — bikin wajah cerah tanpa bikin kulit ketarik atau kering. Cocok buat daily use.",
    price: "Rp 89.000",
    image: "/produk-01.jpg",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Facial Wash Acne",
    category: "Cleanser",
    tags: ["jerawat", "minyak", "bersih"],
    desc: "Untuk kulit yang sering berjerawat — bantu kontrol minyak berlebih dan cegah jerawat datang lagi. Pakai rutin, hasilnya keliatan.",
    price: "Rp 89.000",
    image: "/produk-02.jpg",
    badge: null,
  },
  {
    id: 3,
    name: "Toner Glowing",
    category: "Toner",
    tags: ["pori", "cerah", "glowing", "melembapkan"],
    desc: "Toner yang melembapkan sekaligus mencerahkan — pori-pori jadi keliatan lebih kecil. Wajib ada di routine setelah cuci muka.",
    price: "Rp 110.000",
    image: "/produk-03.jpg",
    badge: "New",
  },
  {
    id: 4,
    name: "Toner Acne",
    category: "Toner",
    tags: ["jerawat", "sensitif", "tenang", "kemerahan"],
    desc: "Khusus kulit sensitif dan berjerawat — bikin kulit lebih tenang, kemerahan berangsur-angsur hilang. Gentle tapi efektif.",
    price: "Rp 110.000",
    image: "/produk-04.jpg",
    badge: null,
  },
  {
    id: 5,
    name: "Sunscreen SPF 50",
    category: "Protection",
    tags: ["matahari", "uv", "sehari-hari", "ringan"],
    desc: "Sunscreen yang nggak bikin wajah putih memutus — ringan, nggak lengket, dan cocok dipake setiap hari tanpa takut breakout.",
    price: "Rp 135.000",
    image: "/produk-05.jpg",
    badge: "Best Seller",
  },
  {
    id: 6,
    name: "Night Cream",
    category: "Moisturizer",
    tags: ["malam", "kenyal", "regenerasi", "tidur"],
    desc: "Biar kulit bekerja terus saat kamu tidur — bangun pagi dengan wajah yang lebih kenyal, cerah, dan fresh. Ritual malam yang worth it.",
    price: "Rp 165.000",
    image: "/produk-06.jpg",
    badge: null,
  },
];

const categories = ["Semua", "Cleanser", "Toner", "Protection", "Moisturizer"];

export default function ProdukPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesSearch =
        search === "" ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.desc.toLowerCase().includes(search.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
      const matchesCategory =
        activeCategory === "Semua" || p.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

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
            Skincare yang diformulasi langsung oleh dokter estetika — bukan sekadar produk, tapi bagian dari perawatan kulitmu. Sudah BPOM, aman, dan dirancang khusus buat kulit orang Indonesia.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="produk-grid-section">
        <div className="produk-toolbar">
          <div className="produk-search">
            <svg className="produk-search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input
              type="text"
              placeholder="Cari produk..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="produk-search-input"
            />
            {search && (
              <button className="produk-search-clear" onClick={() => setSearch("")}>✕</button>
            )}
          </div>
          <div className="produk-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`produk-filter-btn ${activeCategory === cat ? "produk-filter-btn--active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="produk-empty">
            <div className="produk-empty-icon">🔍</div>
            <p>Produk tidak ditemukan. Coba kata kunci lain.</p>
          </div>
        ) : (
        <div className="produk-grid">
          {filteredProducts.map((product, i) => (
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
        )}
      </section>

      {/* Why Section */}
      <section className="produk-why">
        <div className="produk-why-inner">
          <div className="produk-why-item reveal">
            <div className="produk-why-num">01</div>
            <h3 className="produk-why-title">Doctor Formulated</h3>
            <p className="produk-why-desc">Bukan produk abal-abal — setiap formula diracik dokter estetika yang paham betul kebutuhan kulitmu.</p>
          </div>
          <div className="produk-why-item reveal reveal-delay-1">
            <div className="produk-why-num">02</div>
            <h3 className="produk-why-title">BPOM Certified</h3>
            <p className="produk-why-desc">Sudah terdaftar BPOM, jadi nggak perlu ragu soal keamanan bahan yang kamu pakai di kulit.</p>
          </div>
          <div className="produk-why-item reveal reveal-delay-2">
            <div className="produk-why-num">03</div>
            <h3 className="produk-why-title">Personalized Care</h3>
            <p className="produk-why-desc">Produknya dirancang saling melengkapi — dan dokter kami bantu pilihkan kombinasi yang paling pas buat kondisi kulitmu.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta" id="kontak">
        <div className="cta-label">Mulai Perjalananmu</div>
        <h2 className="cta-title reveal">Kulitmu Layak<br />Mendapat yang <em>Terbaik</em></h2>
        <p className="cta-sub reveal reveal-delay-1">
          Tim dokter kami siap bantu kamu cari skincare yang beneran cocok — sesuai jenis dan masalah kulitmu.
        </p>
        <div className="cta-actions reveal reveal-delay-2">
          <a href="https://wa.me/62XXXXXXXXXX?text=Halo+Mugia+Clinic,+saya+ingin+konsultasi" className="btn-white" target="_blank" rel="noopener noreferrer">Chat via WhatsApp</a>
          <a href="tel:+62XXXXXXXXXX" className="btn-outline-white">Hubungi Kami</a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

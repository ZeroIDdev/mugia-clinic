"use client";

import { useEffect } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TentangPage() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );
    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="tt-hero">
        <div className="tt-hero-inner">
          <div className="section-eyebrow reveal">Tentang Kami</div>
          <h1 className="tt-hero-title reveal reveal-delay-1">
            <em>Cantikmu</em><br />Ceritamu
          </h1>
          <p className="tt-hero-desc reveal reveal-delay-2">
            Mengenal lebih dekat Mugia Aesthetic Clinic — klinik kecantikan yang lahir dari kepedulian untuk membantu kamu tampil percaya diri dengan kulit yang sehat dan terawat.
          </p>
        </div>
      </section>

      {/* Story / Visi */}
      <section className="tt-story">
        <div className="tt-story-grid">
          <div className="tt-story-img reveal">
            <img src="/img-2.jpg" alt="Cerita Mugia Aesthetic Clinic" />
          </div>
          <div className="tt-story-text">
            <div className="section-eyebrow reveal">Cerita Kami</div>
            <h2 className="section-title reveal reveal-delay-1">
              Dari Mimpi Sederhana<br /><em>Menjadi Klinik Estetika</em><br /><strong>Terpercaya</strong>
            </h2>
            <p className="reveal reveal-delay-2">
              Mugia Aesthetic Clinic didirikan dengan satu keyakinan sederhana: setiap orang berhak merawat diri dengan nyaman dan aman. Berawal dari sebuah mimpi kecil di Makassar, kami ingin menciptakan tempat di mana kamu bisa jadi versi terbaik dari dirimu sendiri — tanpa harus merasa terintimidasi atau bingung harus mulai dari mana.
            </p>
            <p className="reveal reveal-delay-3">
              Kami percaya bahwa perawatan kulit yang baik dimulai dari saling mendengar. Di Mugia, kamu tidak sekadar duduk di kursi treatment — kamu diajak bicara, dipahami kondisi kulitnya, lalu bareng-bareng cari solusi yang paling cocok. Karena kulitmu unik, dan cara merawatnya pun harus spesifik untuk kamu.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="tt-values">
        <div className="tt-values-header">
          <div className="section-eyebrow reveal">Nilai Kami</div>
          <h2 className="section-title reveal reveal-delay-1">
            Tiga Pilar yang<br /><em>Membimbing</em> Setiap<br /><strong>Langkah Kami</strong>
          </h2>
        </div>
        <div className="tt-values-grid">
          <div className="tt-value-card reveal">
            <div className="tt-value-num">01</div>
            <div className="tt-value-icon">✦</div>
            <h3 className="tt-value-title">Teruji & Tepat</h3>
            <p className="tt-value-desc">
              Treatment yang kami tawarkan sudah terbukti aman dan hasilnya nyata. Kami hanya pakai metode yang sudah jelas manfaatnya, jadi kamu nggak perlu ragu.
            </p>
          </div>
          <div className="tt-value-card reveal reveal-delay-1">
            <div className="tt-value-num">02</div>
            <div className="tt-value-icon">✦</div>
            <h3 className="tt-value-title">Personal</h3>
            <p className="tt-value-desc">
              Tidak ada dua kulit yang sama persis. Kami kenali dulu kulitmu sebelum kasih rekomendasi — biar treatment-nya pas dan nggak buang waktu.
            </p>
          </div>
          <div className="tt-value-card reveal reveal-delay-2">
            <div className="tt-value-num">03</div>
            <div className="tt-value-icon">✦</div>
            <h3 className="tt-value-title">Terpercaya</h3>
            <p className="tt-value-desc">
              Ditangani langsung oleh dokter yang berpengalaman dan bersertifikat di bidang estetika, jadi keamanan kulitmu jadi prioritas utama kami.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="philosophy">
        <div className="philosophy-text reveal">
          <div className="section-eyebrow">Filosofi Kami</div>
          <h2 className="section-title">
            Kecantikan yang<br /><em>Terpercaya &</em><br /><strong>Dari Hati</strong>
          </h2>
          <p>
            Mugia Aesthetic Clinic lahir dari keyakinan bahwa setiap kulit itu unik. Kami nggak mau kasih solusi yang sama untuk semua orang — setiap treatment itu beda, karena kulitmu juga beda.
          </p>
          <p>
            Ditangani langsung oleh dokter berpengalaman dengan peralatan yang sudah terstandar, kami pastikan setiap kunjungan bikin kamu merasa lebih baik dan hasilnya bisa kamu rasakan sendiri.
          </p>
          <Link href="/layanan" className="btn-primary">Lihat Semua Layanan →</Link>
          <div className="philosophy-features">
            <div className="feature-pill">Peralatan Medis Modern</div>
            <div className="feature-pill">Produk BPOM Tersertifikasi</div>
            <div className="feature-pill">Treatment Terprogram</div>
            <div className="feature-pill">Konsultasi Personal</div>
            <div className="feature-pill">Dokter Berpengalaman</div>
            <div className="feature-pill">Hasil Terbukti</div>
          </div>
        </div>
        <div className="philosophy-visual reveal reveal-delay-2">
          <div className="philosophy-label">Mugia Aesthetic Clinic</div>
          <img src="/img-2.jpg" alt="Treatment di Mugia Clinic" className="philosophy-img-main" />
          <img src="/img-3.jpg" alt="Produk Mugia Skincare" className="philosophy-img-accent" />
        </div>
      </section>

      {/* CTA */}
      <section className="cta" id="kontak">
        <div className="cta-label">Mulai Perjalananmu</div>
        <h2 className="cta-title reveal">Kulitmu Layak<br />Mendapat yang <em>Terbaik</em></h2>
        <p className="cta-sub reveal reveal-delay-1">
          Tim dokter kami siap membantu kamu menemukan program perawatan yang tepat sesuai kondisi kulitmu.
        </p>
        <div className="cta-actions reveal reveal-delay-2">
          <a href="https://wa.me/62XXXXXXXXXX?text=Halo+Mugia+Clinic,+saya+ingin+konsultasi" className="btn-white" target="_blank">Chat via WhatsApp</a>
          <a href="tel:+62XXXXXXXXXX" className="btn-outline-white">Hubungi Kami</a>
        </div>
      </section>

      <Footer />
    </>
  );
}

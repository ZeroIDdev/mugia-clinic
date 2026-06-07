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
            <em>Cantikmu</em><br />Berbasis Ilmu
          </h1>
          <p className="tt-hero-desc reveal reveal-delay-2">
            Mengenal lebih dekat Mugia Aesthetic Clinic — klinik kecantikan yang lahir dari passion untuk menghadirkan perawatan kulit yang aman, ilmiah, dan personal.
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
              Mugia Aesthetic Clinic didirikan dengan satu keyakinan: bahwa setiap individu berhak mendapatkan perawatan kulit yang tidak hanya membuat mereka terlihat cantik, tetapi juga sehat secara menyeluruh. Berawal dari sebuah visi kecil di Makassar, kami berkomitmen untuk menghadirkan standar perawatan estetika berbasis ilmu kedokteran.
            </p>
            <p className="reveal reveal-delay-3">
              Kami percaya bahwa kecantikan sejati dimulai dari pemahaman yang mendalam tentang kondisi kulit setiap pasien. Oleh karena itu, setiap langkah perawatan di Mugia dirancang secara personal — mulai dari konsultasi diagnostik hingga program treatment jangka panjang yang mengutamakan kesehatan kulit di atas segalanya.
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
            <h3 className="tt-value-title">Ilmiah</h3>
            <p className="tt-value-desc">
              Setiap treatment kami berbasis bukti medis dan didukung oleh riset ilmiah terkini. Kami hanya menggunakan metode yang terbukti aman dan efektif.
            </p>
          </div>
          <div className="tt-value-card reveal reveal-delay-1">
            <div className="tt-value-num">02</div>
            <div className="tt-value-icon">✦</div>
            <h3 className="tt-value-title">Personal</h3>
            <p className="tt-value-desc">
              Tidak ada kulit yang sama. Kami mendekati setiap pasien secara individual — memahami kebutuhan unik kulitmu sebelum merancang program perawatan.
            </p>
          </div>
          <div className="tt-value-card reveal reveal-delay-2">
            <div className="tt-value-num">03</div>
            <div className="tt-value-icon">✦</div>
            <h3 className="tt-value-title">Terpercaya</h3>
            <p className="tt-value-desc">
              Ditangani langsung oleh dokter bersertifikat dengan pengalaman luas di bidang estetika dan dermatologi, menjadikan keamanan sebagai prioritas utama.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="philosophy">
        <div className="philosophy-text reveal">
          <div className="section-eyebrow">Filosofi Kami</div>
          <h2 className="section-title">
            Kecantikan yang<br /><em>Terpercaya &</em><br /><strong>Berbasis Ilmu</strong>
          </h2>
          <p>
            Mugia Aesthetic Clinic lahir dari keyakinan bahwa setiap kulit adalah unik. Kami tidak menawarkan solusi generik — setiap treatment dirancang khusus berdasarkan kondisi kulitmu yang sesungguhnya.
          </p>
          <p>
            Dipimpin oleh tim dokter berpengalaman dan didukung peralatan medis berstandar tinggi, kami memastikan setiap kunjungan menghasilkan perubahan yang nyata dan bertahan lama.
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
          Konsultasi pertama gratis. Tim dokter kami siap membantu kamu menemukan program perawatan yang tepat sesuai kondisi kulitmu.
        </p>
        <div className="cta-actions reveal reveal-delay-2">
          <a href="https://wa.me/62XXXXXXXXXX?text=Halo+Mugia+Clinic,+saya+ingin+konsultasi+gratis" className="btn-white" target="_blank">Chat via WhatsApp</a>
          <a href="tel:+62XXXXXXXXXX" className="btn-outline-white">Hubungi Kami</a>
        </div>
      </section>

      <Footer />
    </>
  );
}

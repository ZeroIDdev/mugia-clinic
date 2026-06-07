"use client";

import { useEffect } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const doctors = [
  {
    num: "01",
    name: "Dr. Anisa Putri, Sp.DV",
    specialty: "Laser & Pigmentasi",
    experience: "5 Tahun",
    image: "/img-4.jpg",
    desc: "Dr. Anisa udah 5 tahun handle kulit pasien — mulai dari flek, noda bekas jerawat, sampai masalah warna kulit yang nggak merata. Dia jago banget pake laser buat bikin kulit lebih cerah dan bersih, hasilnya keliatan banget.",
    features: ["Laser Toning", "IPL Therapy", "Treatment Flek", "Resurfacing"],
  },
  {
    num: "02",
    name: "Dr. Rizky Amalia, Sp.DV",
    specialty: "Acne & Skin Clearing",
    experience: "3 Tahun",
    image: "/img-1.jpg",
    desc: "Kalau kulit kamu berjerawat terus-menerus, Dr. Rizky solusinya. Dia paham banget gimana cara handle jerawat dari akarnya — nggak cuma ilangin, tapi juga jaga biar nggak balik lagi. Sabar dan teliti banget sama pasiennya.",
    features: ["Treatment Jerawat", "Chemical Peeling", "Injeksi Spot", "Program Kulit Bersih"],
  },
  {
    num: "03",
    name: "Dr. Maya Sari, M.Ked",
    specialty: "Brightening & Anti-Aging",
    experience: "4 Tahun",
    image: "/img-5.jpg",
    desc: "Dr. Maya ahli bikin kulit cerah dan awet muda. Dengan perawatan yang disesuaikan sama kondisi kulit kamu — mulai dari vitamin infus, laser brightening, sampai collagen booster — kulit kamu bakal keliatan segar dan glowing alami.",
    features: ["Brightening Program", "Anti-Aging", "IV Therapy", "Collagen Booster"],
  },
];

const stats = [
  { num: "5K+", label: "Pasien" },
  { num: "100%", label: "Berlisensi" },
  { num: "4.9★", label: "Rating" },
  { num: "3+", label: "Tahun" },
];

export default function DokterPage() {
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
    <div className="dokter-page">
      <Navbar />

      {/* ─── HERO ─── */}
      <section className="ln-hero">
        <div className="ln-hero-inner">
          <div className="ln-hero-eyebrow reveal">Tim Kami</div>
          <h1 className="ln-hero-title reveal">
            <span className="ln-hero-title-line">Dokter Ahli</span>
            <span className="ln-hero-title-line ln-hero-title-line--accent">yang Peduli</span>
            <span className="ln-hero-title-line">pada <em>Kulitmu</em></span>
          </h1>
        </div>
      </section>

      {/* ─── DOCTORS ─── */}
      <section className="dk-doctors">
        {doctors.map((doc, i) => (
          <div key={doc.num} className={`dk-doctor-card ${i % 2 === 1 ? "dk-doctor-card--reverse" : ""}`}>
            <div className="dk-doctor-img">
              <div className="dk-doctor-img-inner">
                <img src={doc.image} alt={doc.name} />
              </div>
              <div className="dk-doctor-num">{doc.num}</div>
            </div>
            <div className="dk-doctor-info">
              <div className="dk-doctor-meta reveal">
                <span className="dk-doctor-exp">{doc.experience} Pengalaman</span>
              </div>
              <h2 className="dk-doctor-name reveal reveal-delay-1">{doc.name}</h2>
              <div className="dk-doctor-specialty reveal reveal-delay-1">{doc.specialty}</div>
              <p className="dk-doctor-desc reveal reveal-delay-2">{doc.desc}</p>
              <div className="dk-doctor-features reveal reveal-delay-2">
                {doc.features.map((f) => (
                  <div key={f} className="dk-feature-pill">
                    <span className="dk-feature-dot"></span>
                    {f}
                  </div>
                ))}
              </div>
              <Link href="/#kontak" className="btn-primary reveal reveal-delay-3">
                Konsultasi dengan {doc.name.split(",")[0].split(" ").pop()} <span className="dk-btn-arrow">→</span>
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* ─── STATS ─── */}
      <section className="dk-stats-section">
        <div className="dk-stats-header reveal">
          <div className="section-eyebrow">Mengapa Kami</div>
          <h2 className="section-title">Dipercaya oleh<br /><em>Ribu Pasien</em></h2>
        </div>
        <div className="dk-stats-grid">
          {stats.map((s, i) => (
            <div key={s.label} className={`dk-stat-card reveal ${i === 1 ? "reveal-delay-1" : i === 2 ? "reveal-delay-2" : i === 3 ? "reveal-delay-3" : ""}`}>
              <div className="dk-stat-num">{s.num}</div>
              <div className="dk-stat-label">{s.label}</div>
              <div className="dk-stat-line"></div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="cta" id="kontak">
        <div className="cta-label">Mulai Perjalananmu</div>
        <h2 className="cta-title reveal">Konsultasi<br />dengan <em>Dokter Kami</em></h2>
        <p className="cta-sub reveal reveal-delay-1">
          Langkah pertama buat kulit sehat. Tim dokter kami siap bantu kamu cari perawatan yang cocok sesuai kondisi kulit kamu.
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

"use client";

import { useEffect, useState, FormEvent } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const faqs = [
  {
    q: "Konsultasi dokter itu seperti apa?",
    a: "Kamu langsung ketemu dokternya, ceritakan keluhan kulitmu, dan dokter akan kasih rekomendasi treatment yang paling cocok. Semuanya disesuaikan sama kondisi kulit kamu.",
  },
  {
    q: "Berapa lama hasil treatment terlihat?",
    a: "Bervariasi ya, tergantung jenis treatment dan kondisi kulit. Biasanya mulai terlihat setelah 2–4 sesi, dan hasil optimal setelah program lengkap.",
  },
  {
    q: "Apakah treatment aman untuk semua jenis kulit?",
    a: "Aman! Setiap treatment selalu dikonsultasikan dulu sama dokter. Kami sesuaikan sama jenis kulit dan kebutuhan kamu, jadi nggak ada yang asal treatment.",
  },
  {
    q: "Gimana cara booking?",
    a: "Gampang banget, chat via WhatsApp atau datang langsung ke klinik. Tim kami bantu jadwalin waktu yang pas buat kamu.",
  },
  {
    q: "Apakah perlu rujukan dokter?",
    a: "Nggak perlu kok. Langsung aja datang atau hubungi kami. Dokter kami akan evaluasi dan kasih rekomendasi di tempat.",
  },
];

const treatmentOptions = [
  "Laser Treatment",
  "Acne Treatment",
  "Brightening",
  "Micro Needling",
  "Skincare Custom",
  "Konsultasi Dokter",
];

export default function KontakPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

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
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    reveals.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="kontak-page">
      <Navbar />

      {/* ─── HERO ─── */}
      <section className="kt-hero">
        <div className="kt-hero-inner">
          <div className="section-eyebrow reveal">Konsultasi Dokter</div>
          <h1 className="section-title reveal">
            Mulai <em>Perjalanan</em><br />
            Kulit Sehatmu
          </h1>
        </div>
      </section>

      {/* ─── CONTACT SECTION ─── */}
      <section className="kt-contact">
        <div className="kt-contact-grid">
          {/* Left: Form */}
          <div className="kt-form-wrap reveal">
            <h2 className="kt-form-title">Kirim Pesan</h2>
            <p className="kt-form-sub">Isi form di bawah ini dan tim kami akan menghubungi kamu dalam 1×24 jam.</p>
            <form className="kt-form" onSubmit={handleSubmit}>
              <div className="kt-field">
                <label htmlFor="kt-name">Nama Lengkap</label>
                <input type="text" id="kt-name" name="name" placeholder="Masukkan nama kamu" required />
              </div>
              <div className="kt-field">
                <label htmlFor="kt-contact">Email / WhatsApp</label>
                <input type="text" id="kt-contact" name="contact" placeholder="email@kamu.com atau +62 XXX XXXX XXXX" required />
              </div>
              <div className="kt-field">
                <label htmlFor="kt-treatment">Perawatan yang Diminati</label>
                <select id="kt-treatment" name="treatment" required>
                  <option value="" disabled selected>Pilih perawatan</option>
                  {treatmentOptions.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div className="kt-field">
                <label htmlFor="kt-message">Pesan</label>
                <textarea id="kt-message" name="message" placeholder="Ceritakan kebutuhan kulit kamu..." rows={4}></textarea>
              </div>
              <button type="submit" className="btn-primary kt-submit">Kirim Pesan →</button>
            </form>
          </div>

          {/* Right: Info Cards */}
          <div className="kt-info-wrap">
            <div className="kt-info-card reveal reveal-delay-1">
              <div className="kt-info-icon">wa</div>
              <div className="kt-info-label">WhatsApp</div>
              <a href="https://wa.me/62XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="kt-info-value">+62 XXX XXXX XXXX</a>
            </div>
            <div className="kt-info-card reveal reveal-delay-1">
              <div className="kt-info-icon">tel</div>
              <div className="kt-info-label">Telepon</div>
              <a href="tel:+62XXXXXXXXXX" className="kt-info-value">+62 XXX XXXX XXXX</a>
            </div>
            <div className="kt-info-card reveal reveal-delay-2">
              <div className="kt-info-icon">loc</div>
              <div className="kt-info-label">Alamat</div>
              <p className="kt-info-value">Jl. Contoh No. 123,<br />Makassar, Sulawesi Selatan</p>
            </div>
            <div className="kt-info-card reveal reveal-delay-2">
              <div className="kt-info-icon">jam</div>
              <div className="kt-info-label">Jam Operasional</div>
              <p className="kt-info-value">Senin – Sabtu<br />09.00 – 20.00 WITA</p>
            </div>
            <div className="kt-info-card reveal reveal-delay-3">
              <div className="kt-info-icon">ig</div>
              <div className="kt-info-label">Instagram</div>
              <a href="https://instagram.com/mugia.aesthetic" target="_blank" rel="noopener noreferrer" className="kt-info-value">@mugia.aesthetic</a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ SECTION ─── */}
      <section className="kt-faq">
        <div className="kt-faq-header">
          <div className="section-eyebrow reveal">FAQ</div>
          <h2 className="section-title reveal">Pertanyaan yang <em>Sering</em> Ditanyakan</h2>
        </div>
        <div className="kt-faq-list">
          {faqs.map((faq, i) => (
            <div key={i} className={`kt-faq-item reveal reveal-delay-${Math.min(i + 1, 4)} ${openFaq === i ? "kt-faq-item--open" : ""}`}>
              <button className="kt-faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <span>{faq.q}</span>
                <span className="kt-faq-icon">{openFaq === i ? "−" : "+"}</span>
              </button>
              <div className="kt-faq-a" style={{ maxHeight: openFaq === i ? "200px" : "0" }}>
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="cta">
        <div className="cta-label">Siap Memulai?</div>
        <h2 className="cta-title reveal">Kulitmu Layak<br />Mendapat yang <em>Terbaik</em></h2>
        <p className="cta-sub reveal reveal-delay-1">
          Langsung chat via WhatsApp atau kunjungi klinik kami buat mulai konsultasi.
        </p>
        <div className="cta-actions reveal reveal-delay-2">
          <a href="https://wa.me/62XXXXXXXXXX?text=Halo+Mugia+Clinic,+saya+ingin+konsultasi" className="btn-white" target="_blank" rel="noopener noreferrer">Chat via WhatsApp</a>
          <a href="tel:+62XXXXXXXXXX" className="btn-outline-white">Hubungi Kami</a>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <Footer />
    </div>
  );
}

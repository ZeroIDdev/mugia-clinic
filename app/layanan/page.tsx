"use client";

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const services = [
  {
    num: "01",
    name: "Laser & Light Therapy",
    tagline: "Kulit Bersih, Tanpa Ribet",
    category: "Laser",
    tags: ["bintik", "flek", "bekas jerawat", "pori", "kusam", "laser"],
    desc: "Treatment laser yang bisa atasi berbagai masalah kulit — dari bintik hitam, bekas jerawat, pori besar, sampe kulit kusam.",
    detail: "Kulit jadi lebih cerah dan halus tanpa harus istirahat lama. Cocok buat kamu yang mau hasil nyata tapi nggak mau ganggu aktivitas sehari-hari.",
    image: "/layanan-01.jpg",
    features: ["Pigmentasi & Bercak", "Bekas Jerawat", "Pori Besar", "Kulit Kusam"],
    duration: "45–60 min",
    sessions: "4–6 sesi",
  },
  {
    num: "02",
    name: "Acne & Skin Clearing",
    tagline: "Jerawat Hilang, Nggak Balik Lagi",
    category: "Acne",
    tags: ["jerawat", "bekas jerawat", "kulit berminyak", "acne"],
    desc: "Program jerawat yang nangani langsung ke akar masalahnya. Dokter cek dulu jenis dan penyebab jerawat kamu, terus susun perawatan yang pas.",
    detail: "Bukan cuma ilangin jerawat yang ada, tapi juga cegah biar nggak dateng lagi. Setiap program beda-beda, karena kulit orang juga beda-beda.",
    image: "/layanan-02.jpg",
    features: ["Jerawat Aktif", "Bekas Jerawat", "Chemical Peeling", "Injeksi Spot"],
    duration: "30–45 min",
    sessions: "6–8 sesi",
  },
  {
    num: "03",
    name: "Custom Brightening",
    tagline: "Cerah Merata, Glowing Alami",
    category: "Brightening",
    tags: ["cerah", "glowing", "kusam", "brightening", "mencerahkan"],
    desc: "Treatment mencerahkan yang kerjanya dari dalam kulit. Kombinasi treatment di klinik plus skincare buat dirumah yang dipersonalisasi.",
    detail: "Perpaduan IV therapy, laser, dan peel yang bekerja bareng buat balikin kilau alami kulit kamu — hasilnya gradual tapi tahan lama.",
    image: "/layanan-03.jpg",
    features: ["IV Therapy", "Brightening Laser", "Skincare Personal", "Program Jangka Panjang"],
    duration: "60–90 min",
    sessions: "4–8 sesi",
  },
  {
    num: "04",
    name: "Micro Needling & RF",
    tagline: "Kulit Kencang, Pori Mengecil",
    category: "Anti-Aging",
    tags: ["kencang", "pori", "kolagen", "penuaan", "tekstur", "rf", "anti-aging"],
    desc: "Gabungan microneedling buat stimulasi kolagen alami dan RF buat encangkan kulit dari dalam. Hasilnya kulit lebih kenyal dan tekstur rata.",
    detail: "Pori jadi lebih kecil, tekstur kulit lebih halus, dan rasanya lebih kencang. Cocok banget buat yang mulai khawatir sama tanda penuaan.",
    image: "/layanan-04.jpg",
    features: ["Stimulasi Kolagen", "Anti-Aging", "Pori Halus", "Tekstur Merata"],
    duration: "45–60 min",
    sessions: "3–5 sesi",
  },
  {
    num: "05",
    name: "Skincare Custom",
    tagline: "Skincare Dokter, Bukan Abal-abal",
    category: "Skincare",
    tags: ["skincare", "bpom", "glowing", "acne", "rumah", "produk"],
    desc: "Rangkaian skincare yang diformulasi langsung sama tim dokter. Udah bersertifikat BPOM dan dirancang buat nemenin treatment kamu.",
    detail: "Dua seri utama: Glowing Series buat kulit kusam, dan Acne Series buat kulit berjerawat. Tinggal pilih yang sesuai sama kebutuhan kulit kamu.",
    image: "/layanan-05.jpg",
    features: ["BPOM Certified", "Glowing Series", "Acne Series", "Doctor Formulated"],
    duration: "—",
    sessions: "Home Care",
  },
  {
    num: "06",
    name: "Konsultasi Dokter",
    tagline: "Kenali Kulitmu, Mulai dari Sini",
    category: "Konsultasi",
    tags: ["konsultasi", "cek kulit", "program", "dokter", "gratis"],
    desc: "Sebelum mulai treatment, dokter estetika kami akan cek kondisi kulit kamu secara detail dan buatin program perawatan yang pas.",
    detail: "Kami percaya transparansi itu penting — dokter bakal jelasin semuanya secara terbuka dan cuma rekomendasiin treatment yang emang kamu butuhin.",
    image: "/layanan-06.jpg",
    features: ["Cek Kondisi Kulit", "Program Personal", "Transparan & Jujur", "Follow-up Berkala"],
    duration: "30 min",
    sessions: "By Appointment",
  },
];

const filterTags = ["Semua", "Laser", "Acne", "Brightening", "Anti-Aging", "Skincare", "Konsultasi"];

export default function LayananPage() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("Semua");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filteredServices = useMemo(() => {
    return services.filter((s) => {
      const matchesSearch =
        search === "" ||
        s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.tagline.toLowerCase().includes(search.toLowerCase()) ||
        s.desc.toLowerCase().includes(search.toLowerCase()) ||
        s.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
      const matchesFilter =
        activeFilter === "Semua" || s.category === activeFilter;
      return matchesSearch && matchesFilter;
    });
  }, [search, activeFilter]);

  const toggleExpand = (num: string) => {
    setExpanded(expanded === num ? null : num);
  };

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
    return () => observer.disconnect();
  }, []);

  return (
    <div className="layanan-page">
      <Navbar />

      {/* ─── HERO ─── */}
      <section className="ln-hero">
        <div className="ln-hero-inner">
          <div className="ln-hero-eyebrow reveal">Layanan Kami</div>
          <h1 className="ln-hero-title reveal">
            <span className="ln-hero-title-line">Treatment yang</span>
            <span className="ln-hero-title-line ln-hero-title-line--accent">Dirancang untuk</span>
            <span className="ln-hero-title-line"><em>Kulitmu</em></span>
          </h1>
        </div>
      </section>

      {/* Search + Filter */}
      <div className="ln-search-section">
        <div className="ln-search-toolbar">
          <div className="ln-search">
            <svg className="ln-search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input
              type="text"
              placeholder="Cari treatment..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="ln-search-input"
            />
            {search && (
              <button className="ln-search-clear" onClick={() => setSearch("")}>✕</button>
            )}
          </div>
          <div className="ln-search-tags">
            {filterTags.map((tag) => (
              <button
                key={tag}
                className={`ln-search-tag ${activeFilter === tag ? "ln-search-tag--active" : ""}`}
                onClick={() => setActiveFilter(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
          <div className="ln-result-count">
            {filteredServices.length} treatment ditemukan
          </div>
        </div>
      </div>

      {/* ─── SERVICE CARDS ─── */}
      <section className="ln-cards-section">
        {filteredServices.length === 0 ? (
          <div className="ln-empty">
            <div className="ln-empty-icon">🔍</div>
            <p>Treatment tidak ditemukan. Coba kata kunci atau filter lain.</p>
          </div>
        ) : (
          <div className="ln-cards-grid">
            {filteredServices.map((service, i) => {
              const isOpen = expanded === service.num;
              return (
                <div
                  key={service.num}
                  className={`ln-card ${isOpen ? "ln-card--open" : ""} reveal ${i % 3 === 1 ? "reveal-delay-1" : i % 3 === 2 ? "reveal-delay-2" : ""}`}
                >
                  <div className="ln-card-img" onClick={() => toggleExpand(service.num)}>
                    <img src={service.image} alt={service.name} />
                    <div className="ln-card-overlay"></div>
                    <div className="ln-card-num">{service.num}</div>
                    <div className="ln-card-category">{service.category}</div>
                  </div>

                  <div className="ln-card-body">
                    <h3 className="ln-card-name" onClick={() => toggleExpand(service.num)}>
                      {service.name}
                    </h3>
                    <div className="ln-card-tagline">{service.tagline}</div>
                    <p className="ln-card-desc">{service.desc}</p>

                    <div className="ln-card-meta">
                      <div className="ln-card-meta-item">
                        <span className="ln-card-meta-label">Durasi</span>
                        <span className="ln-card-meta-value">{service.duration}</span>
                      </div>
                      <div className="ln-card-meta-item">
                        <span className="ln-card-meta-label">Rekomendasi</span>
                        <span className="ln-card-meta-value">{service.sessions}</span>
                      </div>
                    </div>

                    {/* Expanded Detail */}
                    <div className={`ln-card-detail ${isOpen ? "ln-card-detail--open" : ""}`}>
                      <p className="ln-card-detail-text">{service.detail}</p>
                      <div className="ln-card-features">
                        {service.features.map((f) => (
                          <span key={f} className="ln-card-feature">{f}</span>
                        ))}
                      </div>
                      <Link href="/kontak" className="btn-primary">
                        Konsultasi <span className="ln-btn-arrow">→</span>
                      </Link>
                    </div>

                    <button className="ln-card-toggle" onClick={() => toggleExpand(service.num)}>
                      {isOpen ? "Tutup" : "Selengkapnya"} <span className={`ln-card-toggle-arrow ${isOpen ? "ln-card-toggle-arrow--up" : ""}`}>↓</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* ─── CTA ─── */}
      <section className="cta" id="kontak">
        <div className="cta-label">Mulai Perjalananmu</div>
        <h2 className="cta-title reveal">Kulitmu Layak<br />Mendapat yang <em>Terbaik</em></h2>
        <p className="cta-sub reveal reveal-delay-1">
          Tim dokter kami siap bantu kamu temukan program perawatan yang tepat sesuai kondisi kulitmu.
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

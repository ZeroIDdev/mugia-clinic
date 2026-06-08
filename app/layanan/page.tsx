"use client";

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const services = [
  {
    num: "01",
    name: "Laser &\nLight Therapy",
    tagline: "Kulit Bersih, Tanpa Ribet",
    category: "Laser",
    tags: ["bintik", "flek", "bekas jerawat", "pori", "kusam"],
    desc: "Treatment laser yang bisa atasi berbagai masalah kulit — dari bintik hitam, bekas jerawat, pori besar, sampe kulit kusam. Semuanya ditangani pakai teknologi laser terkini yang sudah terbukti aman.",
    detail: "Kulit jadi lebih cerah dan halus tanpa harus istirahat lama. Cocok buat kamu yang mau hasil nyata tapi nggak mau ganggu aktivitas sehari-hari.",
    image: "/layanan-01.jpg",
    features: ["Pigmentasi & Bercak", "Bekas Jerawat", "Pori Besar", "Kulit Kusam"],
    duration: "45–60 min",
    sessions: "4–6 sesi",
  },
  {
    num: "02",
    name: "Acne &\nSkin Clearing",
    tagline: "Jerawat Hilang, Nggak Balik Lagi",
    category: "Acne",
    tags: ["jerawat", "bekas jerawat", "kulit berminyak"],
    desc: "Program jerawat yang nangani langsung ke akar masalahnya. Dokter akan cek dulu jenis dan penyebab jerawat kamu, terus susun perawatan yang pas — mulai dari facial treatment sampe perawatan intensif yang disesuin sama kondisi kulit kamu.",
    detail: "Bukan cuma ilangin jerawat yang ada, tapi juga cegah biar nggak dateng lagi. Setiap program beda-beda, karena kulit orang juga beda-beda.",
    image: "/layanan-02.jpg",
    features: ["Jerawat Aktif", "Bekas Jerawat", "Chemical Peeling", "Injeksi Spot"],
    duration: "30–45 min",
    sessions: "6–8 sesi",
  },
  {
    num: "03",
    name: "Custom\nBrightening",
    tagline: "Cerah Merata, Glowing Alami",
    category: "Brightening",
    tags: ["cerah", "glowing", "kusam", "brightening"],
    desc: "Treatment mencerahkan yang kerjanya dari dalam kulit, bukan cuma di permukaan. Dokter akan analisis dulu kondisi kulit kamu, terus susun kombinasi treatment di klinik plus skincare buat dirumah yang dipersonalisasi.",
    detail: "Perpaduan IV therapy, laser, dan peel yang bekerja bareng buat balikin kilau alami kulit kamu — hasilnya gradual tapi tahan lama.",
    image: "/layanan-03.jpg",
    features: ["IV Therapy", "Brightening Laser", "Skincare Personal", "Program Jangka Panjang"],
    duration: "60–90 min",
    sessions: "4–8 sesi",
  },
  {
    num: "04",
    name: "Micro Needling\n& RF",
    tagline: "Kulit Kencang, Pori Mengecil",
    category: "Anti-Aging",
    tags: ["kencang", "pori", "kolagen", "penuaan", "tekstur"],
    desc: "Treatment yang gabungin dua teknologi sekaligus — microneedling buat stimulasi kolagen alami, dan RF buatencangkan kulit dari dalam. Hasilnya kulit lebih kenyal dan tekstur rata.",
    detail: "Pori jadi lebih kecil, tekstur kulit lebih halus, dan rasanya lebih kencang. Cocok banget buat yang mulai khawatir sama tanda penuaan atau tekstur kulit nggak rata.",
    image: "/layanan-04.jpg",
    features: ["Stimulasi Kolagen", "Anti-Aging", "Pori Halus", "Tekstur Merata"],
    duration: "45–60 min",
    sessions: "3–5 sesi",
  },
  {
    num: "05",
    name: "Skincare\nCustom",
    tagline: "Skincare Dokter, Bukan Abal-abal",
    category: "Skincare",
    tags: ["skincare", "bpom", "glowing", "acne", "rumah"],
    desc: "Rangkaian skincare yang diformulasi langsung sama tim dokter estetika kami. Udah bersertifikat BPOM dan dirancang buat nemenin treatment kamu di klinik.",
    detail: "Ada dua seri utama: Glowing Series buat kulit kusam, dan Acne Series buat kulit berjerawat. Tinggal pilih yang sesuai sama kebutuhan kulit kamu.",
    image: "/layanan-05.jpg",
    features: ["BPOM Certified", "Glowing Series", "Acne Series", "Doctor Formulated"],
    duration: "—",
    sessions: "Home Care",
  },
  {
    num: "06",
    name: "Konsultasi\nDokter",
    tagline: "Kenali Kulitmu, Mulai dari Sini",
    category: "Konsultasi",
    tags: ["konsultasi", "cek kulit", "program", "dokter"],
    desc: "Sebelum mulai treatment, dokter estetika kami akan cek kondisi kulit kamu secara detail. Nanti juga dibuatin program perawatan yang emang dirancang khusus buat kulit kamu.",
    detail: "Kami percaya transparansi itu penting — dokter bakal jelasin semuanya secara terbuka dan cuma rekomendasiin treatment yang emang kamu butuhin, nggak lebih.",
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

    const handleScroll = () => {
      document.querySelectorAll<HTMLElement>(".service-detail-img img").forEach((img) => {
        const rect = img.getBoundingClientRect();
        const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * 0.08;
        img.style.transform = `translateY(${offset}px) scale(1.1)`;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
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
        </div>
      </div>

      {/* ─── SERVICES ─── */}
      {filteredServices.length === 0 ? (
        <div className="ln-empty">
          <div className="ln-empty-icon">🔍</div>
          <p>Treatment tidak ditemukan. Coba kata kunci atau filter lain.</p>
        </div>
      ) : filteredServices.map((service, i) => (
        <section key={service.num} className={`service-detail ${i % 2 === 1 ? "service-detail--reverse" : ""}`}>
          <div className="service-detail-img">
            <div className="service-detail-img-inner">
              <img src={service.image} alt={service.name.replace("\n", " ")} />
            </div>
            <div className="service-detail-img-label">{service.num}</div>
          </div>
          <div className="service-detail-content">
            <div className="service-detail-num reveal">{service.num}</div>
            <h2 className="service-detail-title reveal reveal-delay-1">
              {service.name.split("\n").map((line, j) => (
                <span key={j}>
                  {j === 1 ? <em>{line}</em> : line}
                  {j < service.name.split("\n").length - 1 && <br />}
                </span>
              ))}
            </h2>
            <div className="service-detail-tagline reveal reveal-delay-1">{service.tagline}</div>
            <p className="service-detail-desc reveal reveal-delay-2">{service.desc}</p>
            <p className="service-detail-detail reveal reveal-delay-2">{service.detail}</p>
            <div className="service-detail-features reveal reveal-delay-3">
              {service.features.map((f) => (
                <div key={f} className="ln-feature-pill">
                  <span className="ln-feature-dot"></span>
                  {f}
                </div>
              ))}
            </div>
            <div className="service-detail-info reveal reveal-delay-3">
              <div className="ln-info-item">
                <span className="ln-info-label">Durasi</span>
                <span className="ln-info-value">{service.duration}</span>
              </div>
              <div className="ln-info-item">
                <span className="ln-info-label">Rekomendasi</span>
                <span className="ln-info-value">{service.sessions}</span>
              </div>
            </div>
            <Link href="/#kontak" className="btn-primary reveal reveal-delay-4">
              Konsultasi Sekarang <span className="ln-btn-arrow">→</span>
            </Link>
          </div>
        </section>
      ))}

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

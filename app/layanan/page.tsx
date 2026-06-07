"use client";

import { useEffect } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const services = [
  {
    num: "01",
    name: "Laser &\nLight Therapy",
    tagline: "Cahaya Presisi untuk Kulit Sempurna",
    desc: "Treatment laser kami menggunakan teknologi terkini yang telah terbukti secara klinis. Setiap sesi dirancang untuk menargetkan masalah kulit spesifik — mulai dari hiperpigmentasi, bekas jerawat, pori membesar, hingga tekstur kulit yang tidak merata.",
    detail: "Hasilnya kulit lebih cerah, halus, dan sehat tanpa downtime yang lama. Teknologi terkini kami memastikan treatment yang efektif namun tetap aman untuk semua jenis kulit.",
    image: "/layanan-01.jpg",
    features: ["Pigmentasi & Bercak", "Bekas Jerawat", "Pori Besar", "Kulit Kusam"],
    duration: "45–60 min",
    sessions: "4–6 sesi",
  },
  {
    num: "02",
    name: "Acne &\nSkin Clearing",
    tagline: "Bebas Jerawat, Kulit Mulus Kembali",
    desc: "Program penanganan jerawat kami bersifat komprehensif — dimulai dengan diagnosa jenis jerawat dan penyebabnya, lalu dirancang protokol perawatan yang meliputi chemical peeling, injeksi spot treatment, serta rangkaian skincare medis.",
    detail: "Tujuannya bukan hanya menghilangkan jerawat, tapi mencegahnya datang kembali. Setiap program disesuaikan dengan tingkat keparahan dan kondisi kulit pasien.",
    image: "/layanan-02.jpg",
    features: ["Jerawat Aktif", "Bekas Jerawat", "Chemical Peeling", "Injeksi Spot"],
    duration: "30–45 min",
    sessions: "6–8 sesi",
  },
  {
    num: "03",
    name: "Custom\nBrightening",
    tagline: "Cerah dari Dalam, Bersinar dari Luar",
    desc: "Brightening treatment kami bukan sekadar mencerahkan — tapi mengembalikan kesehatan kulit dari dalam. Setiap program dimulai dengan analisis kondisi kulit, lalu dirancang kombinasi treatment klinik beserta rangkaian skincare rumahan yang dipersonalisasi.",
    detail: "Kombinasi IV therapy, laser, dan peel dirancang untuk bekerja sinergis mengembalikan radiance alami kulit kamu secara bertahap dan tahan lama.",
    image: "/layanan-03.jpg",
    features: ["IV Therapy", "Brightening Laser", "Skincare Personal", "Program Jangka Panjang"],
    duration: "60–90 min",
    sessions: "4–8 sesi",
  },
  {
    num: "04",
    name: "Micro Needling\n& RF",
    tagline: "Stimulasi Kolagen, Kulit Lebih Kencang",
    desc: "Micro Needling dengan Radio Frequency menggabungkan dua teknologi dalam satu treatment — microneedling untuk merangsang produksi kolagen alami, dan RF untuk mengencangkan kulit dari lapisan dalam.",
    detail: "Hasilnya tekstur kulit lebih halus, pori mengecil, dan kulit terasa lebih kencang dan kenyal. Treatment ini ideal untuk anti-aging dan perbaikan tekstur kulit.",
    image: "/layanan-04.jpg",
    features: ["Stimulasi Kolagen", "Anti-Aging", "Pori Halus", "Tekstur Merata"],
    duration: "45–60 min",
    sessions: "3–5 sesi",
  },
  {
    num: "05",
    name: "Skincare\nCustom",
    tagline: "Formulasi Dokter untuk Rumahmu",
    desc: "Rangkaian skincare Mugia diformulasikan langsung oleh tim dokter estetika kami. Setiap produk telah tersertifikasi BPOM dan dirancang untuk melengkapi treatment klinik.",
    detail: "Tersedia dua rangkaian utama: Glowing Series untuk kulit kusam dan Acne Series untuk kulit berjerawat — masing-masing dengan formulasi yang tepat sasaran.",
    image: "/layanan-05.jpg",
    features: ["BPOM Certified", "Glowing Series", "Acne Series", "Doctor Formulated"],
    duration: "—",
    sessions: "Home Care",
  },
  {
    num: "06",
    name: "Konsultasi\nDokter",
    tagline: "Langkah Pertama Menuju Kulit Sehat",
    desc: "Setiap perawatan dimulai dengan konsultasi mendalam. Dokter estetika kami akan menganalisis kondisi kulitmu menggunakan peralatan diagnostik modern dan merancang program perawatan yang sesuai.",
    detail: "Konsultasi pertama gratis. Kami percaya transparansi adalah kunci — dokter akan menjelaskan temuan secara terbuka dan merekomendasikan treatment yang benar-benar dibutuhkan.",
    image: "/layanan-06.jpg",
    features: ["Diagnostik Kulit", "Program Personal", "Konsultasi Gratis", "Follow-up Berkala"],
    duration: "30 min",
    sessions: "Gratis",
  },
];

export default function LayananPage() {
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

      {/* ─── SERVICES ─── */}
      {services.map((service, i) => (
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

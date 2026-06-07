"use client";

import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  useEffect(() => {
    
    // Scroll reveal
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(el => observer.observe(el));

    return () => {
      reveals.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
<>
<Navbar />

{/* Hero */}
<section className="hero">
  <div className="hero-left">
    <div className="hero-eyebrow">Aesthetic Clinic · Makassar</div>
    <h1 className="hero-title">Cantikmu,</h1>
    <h1 className="hero-title-line2"><em>Ilmiah.</em></h1>
    <p className="hero-desc">Klinik kecantikan estetika yang menggabungkan teknologi medis terkini dengan pendekatan personal — untuk kulit sehat yang bercahaya, bukan sekadar tampak cantik.</p>
    <div className="hero-actions">
      <a href="#kontak" className="btn-primary">Mulai Konsultasi</a>
      <a href="/layanan" className="btn-ghost">Lihat Layanan</a>
    </div>
    <div className="hero-stats">
      <div>
        <div className="stat-num">5K+</div>
        <div className="stat-label">Pasien Puas</div>
      </div>
      <div>
        <div className="stat-num">3</div>
        <div className="stat-label">Dokter Ahli</div>
      </div>
      <div>
        <div className="stat-num">30+</div>
        <div className="stat-label">Jenis Treatment</div>
      </div>
    </div>
  </div>
  <div className="hero-right">
    <div className="hero-img-wrap">
      <img src="/img-5.jpg" alt="Tim Dokter Mugia Aesthetic Clinic" loading="eager" />
    </div>
  </div>
  <div className="hero-badge">
    <div className="hero-badge-text">Tersertifikasi</div>
    <div className="hero-badge-main">Dokter Ahli ✦</div>
  </div>
</section>

{/* Marquee */}
<div className="marquee-band">
  <div className="marquee-inner">
    <span>Facial Treatment</span><span>Laser Toning</span><span>Skincare Personal</span><span>Acne Treatment</span><span>Brightening</span><span>Chemical Peeling</span><span>Konsultasi Dokter</span><span>Micro Needling</span><span>Facial Treatment</span><span>Laser Toning</span><span>Skincare Personal</span><span>Acne Treatment</span><span>Brightening</span><span>Chemical Peeling</span><span>Konsultasi Dokter</span><span>Micro Needling</span><span>Facial Treatment</span><span>Laser Toning</span><span>Skincare Personal</span><span>Acne Treatment</span><span>Brightening</span><span>Chemical Peeling</span><span>Konsultasi Dokter</span><span>Micro Needling</span><span>Facial Treatment</span><span>Laser Toning</span><span>Skincare Personal</span><span>Acne Treatment</span><span>Brightening</span><span>Chemical Peeling</span><span>Konsultasi Dokter</span><span>Micro Needling</span>
  </div>
</div>

{/* Philosophy / About */}
<section className="philosophy" id="tentang">
  <div className="philosophy-text reveal">
    <div className="section-eyebrow">Filosofi Kami</div>
    <h2 className="section-title">Kecantikan yang<br /><em>Terpercaya &</em><br /><strong>Berbasis Ilmu</strong></h2>
    <p>Mugia Aesthetic Clinic lahir dari keyakinan bahwa setiap kulit adalah unik. Kami tidak menawarkan solusi generik — setiap treatment dirancang khusus berdasarkan kondisi kulitmu yang sesungguhnya.</p>
    <p>Dipimpin oleh tim dokter berpengalaman dan didukung peralatan medis berstandar tinggi, kami memastikan setiap kunjungan menghasilkan perubahan yang nyata dan bertahan lama.</p>
    <a href="/layanan" className="btn-primary">Lihat Semua Layanan →</a>
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

{/* Services */}
<section className="services" id="layanan">
  <div className="services-header">
    <div>
      <div className="section-eyebrow reveal">Layanan Unggulan</div>
      <h2 className="section-title reveal reveal-delay-1">Treatment yang<br /><em>Menjawab</em> Kebutuhan<br /><strong>Kulitmu</strong></h2>
    </div>
    <p className="services-desc reveal reveal-delay-2">Dari perawatan harian hingga treatment intensif — semua dirancang oleh dokter untuk hasil yang optimal dan aman.</p>
  </div>
  <div className="services-grid">
    <div className="service-card reveal">
      <div className="service-num">01</div>
      <div className="service-name">Laser & Light Therapy</div>
      <p className="service-desc">Teknologi laser terkini untuk mengatasi hiperpigmentasi, bekas jerawat, pori besar, dan tampilan kulit kusam secara efektif dan aman.</p>
      <div className="service-arrow">→</div>
    </div>
    <div className="service-card reveal reveal-delay-1">
      <div className="service-num">02</div>
      <div className="service-name">Acne & Skin Clearing</div>
      <p className="service-desc">Protokol khusus jerawat aktif dan bekas luka — kombinasi chemical peeling, injeksi, dan skincare medis yang terbukti secara klinis.</p>
      <div className="service-arrow">→</div>
    </div>
    <div className="service-card reveal reveal-delay-2">
      <div className="service-num">03</div>
      <div className="service-name">Custom Brightening</div>
      <p className="service-desc">Program mencerahkan kulit yang dipersonalisasi — dari produk skincare home-care hingga treatment klinik yang saling melengkapi.</p>
      <div className="service-arrow">→</div>
    </div>
    <div className="service-card reveal">
      <div className="service-num">04</div>
      <div className="service-name">Micro Needling & RF</div>
      <p className="service-desc">Stimulasi kolagen alami untuk kulit yang lebih kencang, pori halus, dan tekstur merata tanpa prosedur invasif.</p>
      <div className="service-arrow">→</div>
    </div>
    <div className="service-card reveal reveal-delay-1">
      <div className="service-num">05</div>
      <div className="service-name">Skincare Custom</div>
      <p className="service-desc">Produk skincare Mugia yang diformulasikan oleh dokter — tersedia rangkaian Glowing dan Acne sesuai kondisi kulitmu.</p>
      <div className="service-arrow">→</div>
    </div>
    <div className="service-card reveal reveal-delay-2">
      <div className="service-num">06</div>
      <div className="service-name">Konsultasi Dokter</div>
      <p className="service-desc">Sesi konsultasi mendalam dengan dokter estetika kami — diagnosa kondisi kulit, rekomendasi treatment, dan program perawatan jangka panjang.</p>
      <div className="service-arrow">→</div>
    </div>
  </div>
</section>

{/* Products */}
<section className="products" id="produk">
  <div className="products-content">
    <div className="section-eyebrow reveal">Skincare Mugia</div>
    <h2 className="section-title reveal reveal-delay-1">Formulasi<br /><em>Dokter,</em><br /><strong>Untuk Rumahmu</strong></h2>
    <p className="reveal reveal-delay-2">Rangkaian skincare Mugia dirancang oleh dokter estetika kami — tersertifikasi BPOM, bebas bahan berbahaya, dan efektif untuk berbagai kondisi kulit.</p>
    <div className="products-grid reveal reveal-delay-3">
      <div className="product-tag">Facial Wash Glowing</div>
      <div className="product-tag">Facial Wash Acne</div>
      <div className="product-tag">Toner Glowing</div>
      <div className="product-tag">Toner Acne</div>
      <div className="product-tag">Sunscreen SPF</div>
      <div className="product-tag">Night Cream</div>
    </div>
    <br />
    <a href="#kontak" className="btn-white" style={{ marginTop: "1.5rem", display: "inline-block" }}>Dapatkan Sekarang →</a>
  </div>
  <div className="products-visual">
    <img src="/img-4.jpg" alt="Produk Skincare Mugia" />
    <div className="products-overlay"></div>
  </div>
</section>

{/* Team */}
<section className="team" id="dokter">
  <div className="team-header">
    <div className="section-eyebrow reveal" style={{ justifyContent: "center" }}>Tim Dokter</div>
    <h2 className="section-title reveal reveal-delay-1" style={{ margin: "0 auto 1rem" }}>
      Ditangani Langsung<br />oleh <em>Dokter Ahli</em>
    </h2>
    <p className="reveal reveal-delay-2">Tim dokter kami berpengalaman di bidang estetika dan dermatologi — siap memberikan penanganan terbaik dengan pendekatan yang hangat dan personal.</p>
  </div>
  <div className="team-visual reveal reveal-delay-1">
    <img src="/img-1.jpg" alt="Tim Mugia Aesthetic Clinic" />
  </div>
  <div className="team-certs">
    <div className="cert-item reveal">
      <div className="cert-num">5K+</div>
      <div className="cert-label">Pasien Tertangani</div>
    </div>
    <div className="cert-item reveal reveal-delay-1">
      <div className="cert-num">100%</div>
      <div className="cert-label">Dokter Berlisensi</div>
    </div>
    <div className="cert-item reveal reveal-delay-2">
      <div className="cert-num">4.9★</div>
      <div className="cert-label">Rating Kepuasan</div>
    </div>
    <div className="cert-item reveal reveal-delay-3">
      <div className="cert-num">3+</div>
      <div className="cert-label">Tahun Pengalaman</div>
    </div>
  </div>
</section>

{/* Testimonials */}
<section className="testimonials">
  <div className="testimonials-header">
    <div className="section-eyebrow reveal">Testimoni Nyata</div>
    <h2 className="section-title reveal reveal-delay-1">Cerita dari Mereka<br />yang <em>Sudah Merasakan</em></h2>
  </div>
  <div className="testimonials-grid">
    <div className="testi-card reveal">
      <div className="testi-stars">★★★★★</div>
      <p className="testi-text">Setelah 2 bulan rutin treatment laser dan pakai skincare Mugia, jerawat saya berkurang drastis. Dokternya sabar banget jelasin kondisi kulit saya. Highly recommend!</p>
      <div className="testi-author">
        <div className="testi-avatar">A</div>
        <div>
          <div className="testi-name">Aulia R.</div>
          <div className="testi-treatment">Acne Treatment · Laser</div>
        </div>
      </div>
    </div>
    <div className="testi-card reveal reveal-delay-1">
      <div className="testi-stars">★★★★★</div>
      <p className="testi-text">Pertama kali cobain chemical peeling di sini, hasilnya luar biasa! Kulit langsung cerah dan teksturnya jauh lebih halus. Kliniknya bersih dan nyaman, stafnya ramah.</p>
      <div className="testi-author">
        <div className="testi-avatar">F</div>
        <div>
          <div className="testi-name">Fitri N.</div>
          <div className="testi-treatment">Chemical Peeling</div>
        </div>
      </div>
    </div>
    <div className="testi-card reveal reveal-delay-2">
      <div className="testi-stars">★★★★★</div>
      <p className="testi-text">Sudah 6 bulan jadi pasien Mugia. Dokternya profesional dan jujur soal kondisi kulit. Produk skincarenya juga cocok banget, tidak bikin iritasi. Pokoknya gak mau pindah!</p>
      <div className="testi-author">
        <div className="testi-avatar">S</div>
        <div>
          <div className="testi-name">Sari W.</div>
          <div className="testi-treatment">Brightening · Skincare</div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* CTA */}
<section className="cta" id="kontak">
  <div className="cta-label">Mulai Perjalananmu</div>
  <h2 className="cta-title reveal">Kulitmu Layak<br />Mendapat yang <em>Terbaik</em></h2>
  <p className="cta-sub reveal reveal-delay-1">Konsultasi pertama gratis. Tim dokter kami siap membantu kamu menemukan program perawatan yang tepat sesuai kondisi kulitmu.</p>
  <div className="cta-actions reveal reveal-delay-2">
    <a href="https://wa.me/62XXXXXXXXXX?text=Halo+Mugia+Clinic,+saya+ingin+konsultasi+gratis" className="btn-white" target="_blank">Chat via WhatsApp</a>
    <a href="tel:+62XXXXXXXXXX" className="btn-outline-white">Hubungi Kami</a>
  </div>
</section>

<Footer />
</>
  );
}

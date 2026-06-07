import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <img src="/img-6.jpg" alt="Mugia Aesthetic Clinic" />
          <p>Klinik kecantikan estetika dengan pendekatan medis terpercaya — membantu kamu mencapai kulit sehat yang bercahaya secara ilmiah dan aman.</p>
          <div className="footer-social">
            <a href="#" className="social-btn">ig</a>
            <a href="#" className="social-btn">tk</a>
            <a href="#" className="social-btn">wa</a>
          </div>
        </div>
        <div className="footer-col">
          <h4>Layanan</h4>
          <ul>
            <li><Link href="/layanan">Laser Treatment</Link></li>
            <li><Link href="/layanan">Acne Treatment</Link></li>
            <li><Link href="/layanan">Brightening</Link></li>
            <li><Link href="/layanan">Micro Needling</Link></li>
            <li><Link href="/kontak">Konsultasi</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Produk</h4>
          <ul>
            <li><Link href="/produk">Skincare Glowing</Link></li>
            <li><Link href="/produk">Skincare Acne</Link></li>
            <li><Link href="/produk">Sunscreen</Link></li>
            <li><Link href="/produk">Night Cream</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Kunjungi Kami</h4>
          <ul>
            <li><a href="#">Makassar, Sulawesi Selatan</a></li>
            <li><a href="#">Senin – Sabtu</a></li>
            <li><a href="#">09.00 – 20.00 WITA</a></li>
            <li><a href="#">@mugia.aesthetic</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 Mugia Aesthetic Clinic. All rights reserved.</span>
        <span>Made with ✦ for beautiful skin · <a href="#">Privacy Policy</a></span>
      </div>
    </footer>
  );
}

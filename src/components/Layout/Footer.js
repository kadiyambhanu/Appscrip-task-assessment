export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* BE THE FIRST TO KNOW */}
        <div className="footer-section">
          <h3 className="footer-heading">BE THE FIRST TO KNOW</h3>
          <p className="footer-text">Sign up for updates from mettä muse.</p>
          <form className="subscribe-form">
            <input type="email" placeholder="Enter your e-mail" className="email-input" required />
            <button type="submit" className="subscribe-btn">SUBSCRIBE</button>
          </form>
        </div>

        {/* mettä muse */}
        <div className="footer-section">
          <h3 className="footer-heading">mettä muse</h3>
          <ul className="footer-links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Stories</a></li>
            <li><a href="#">Artisans</a></li>
            <li><a href="#">Boutiques</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">EU Compliances Docs</a></li>
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-section">
          <h3 className="footer-heading">QUICK LINKS</h3>
          <ul className="footer-links">
            <li><a href="#">Orders & Shipping</a></li>
            <li><a href="#">Join/Login as a Seller</a></li>
            <li><a href="#">Payment & Pricing</a></li>
            <li><a href="#">Return & Refunds</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* CONTACT US */}
        <div className="footer-section">
          <h3 className="footer-heading">CONTACT US</h3>
          <ul className="footer-links">
            <li><a href="tel:+442211336360">+44 221 133 6360</a></li>
            <li><a href="mailto:customercare@mettamuse.com">customercare@mettamuse.com</a></li>
          </ul>
        </div>

        {/* CURRENCY */}
        <div className="footer-section">
          <h3 className="footer-heading">CURRENCY</h3>
          <div className="currency-info">
            <span className="currency-flag">🇺🇸</span>
            <span className="currency-text">USD</span>
          </div>
          <p className="currency-note">Transactions will be converted to Euros</p>
        </div>

        {/* FOLLOW US */}
        <div className="footer-section">
          <h3 className="footer-heading">FOLLOW US</h3>
          <div className="social-icons">
            <a href="#" className="social-icon" aria-label="Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" className="social-icon" aria-label="LinkedIn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="payment-section">
        <h3 className="payment-heading">mettä muse ACCEPTS</h3>
        <div className="payment-logos">
          <div className="payment-logo">Google Pay</div>
          <div className="payment-logo">Mastercard</div>
          <div className="payment-logo">PayPal</div>
          <div className="payment-logo">American Express</div>
          <div className="payment-logo">Apple Pay</div>
          <div className="payment-logo">Visa</div>
        </div>
      </div>

      {/* Copyright */}
      <div className="copyright">
        <p>Copyright © 2003 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
}


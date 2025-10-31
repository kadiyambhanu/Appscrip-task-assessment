export default function Navigation() {
  return (
    <nav className="main-navbar">
      {/* Top Header Row */}
      <div className="top-header-row">
        <div className="nav-left">
          <div className="nav-item celtic-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 2 L12 22 M2 12 L22 12 M6 6 L18 18 M18 6 L6 18"></path>
              <circle cx="12" cy="12" r="4"></circle>
            </svg>
          </div>
        </div>
        
        <div className="nav-center">
          <div className="logo-text">LOGO</div>
        </div>
        
        <div className="nav-right">
          <div className="icons-group">
            <div className="icon-item search">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </div>
            <div className="icon-item heart">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </div>
            <div className="icon-item bag">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
            </div>
            <div className="icon-item user">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
          </div>
          <div className="lang-dropdown">
            <span className="lang-text">ENG</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9L1 4h10z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Links Row */}
      <div className="bottom-nav-row">
        <div className="nav-links-container">
          <a href="#" className="nav-link">SHOP</a>
          <a href="#" className="nav-link">SKILLS</a>
          <a href="#" className="nav-link">STORIES</a>
          <a href="#" className="nav-link">ABOUT</a>
          <a href="#" className="nav-link">CONTACT US</a>
        </div>
      </div>

      {/* Light Blue Bottom Line */}
      <div className="blue-line"></div>
    </nav>
  );
}


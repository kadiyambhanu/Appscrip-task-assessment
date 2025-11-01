import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { getAllProducts } from '../lib/api';
import Header from '../components/Header';
import Footer from '../components/Layout/Footer';
import FilterSidebar from '../components/Filters/FilterSidebar';
import ProductGrid from '../components/Product/ProductGrid';

const SORT_OPTIONS = {
  RECOMMENDED: 'recommended',
  NEWEST_FIRST: 'newest',
  POPULAR: 'popular',
  PRICE_HIGH_LOW: 'price-high',
  PRICE_LOW_HIGH: 'price-low'
};

export default function Home() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOption, setSortOption] = useState(SORT_OPTIONS.RECOMMENDED);
  const [isCustomizable, setIsCustomizable] = useState(false);
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [likedProducts, setLikedProducts] = useState(new Set());
  const sortDropdownRef = useRef(null);

  // Load liked products from localStorage on mount
  useEffect(() => {
    try {
      const savedLikes = localStorage.getItem('likedProducts');
      if (savedLikes) {
        setLikedProducts(new Set(JSON.parse(savedLikes)));
      }
    } catch (err) {
      console.error('Error loading liked products:', err);
    }
  }, []);

  // Save liked products to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('likedProducts', JSON.stringify(Array.from(likedProducts)));
    } catch (err) {
      console.error('Error saving liked products:', err);
    }
  }, [likedProducts]);

  // Close sort menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (sortDropdownRef.current && !sortDropdownRef.current.contains(event.target)) {
        setShowSortMenu(false);
      }
    }

    if (showSortMenu) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [showSortMenu]);

  // Fetch products on component mount
  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const data = await getAllProducts();
        setProducts(data);
        setFilteredProducts(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to load products. Please try again later.');
        setProducts([]);
        setFilteredProducts([]);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  // Apply filters and sorting when state changes
  useEffect(() => {
    let filtered = [...products];

    // Apply customizable filter
    if (isCustomizable) {
      // For demo purposes, randomly mark some products as customizable
      // In a real app, this would come from the API
      filtered = filtered.filter((_, index) => index % 2 === 0);
    }

    // Apply sorting
    switch (sortOption) {
      case SORT_OPTIONS.NEWEST_FIRST:
        filtered.sort((a, b) => b.id - a.id);
        break;
      case SORT_OPTIONS.POPULAR:
        filtered.sort((a, b) => (b.rating?.rate || 0) - (a.rating?.rate || 0));
        break;
      case SORT_OPTIONS.PRICE_HIGH_LOW:
        filtered.sort((a, b) => (b.price || 0) - (a.price || 0));
        break;
      case SORT_OPTIONS.PRICE_LOW_HIGH:
        filtered.sort((a, b) => (a.price || 0) - (b.price || 0));
        break;
      case SORT_OPTIONS.RECOMMENDED:
      default:
        // Keep original order for recommended
        break;
    }

    setFilteredProducts(filtered);
  }, [products, sortOption, isCustomizable]);

  const handleSortChange = (option) => {
    setSortOption(option);
    setShowSortMenu(false);
  };

  const handleCustomizableChange = (checked) => {
    setIsCustomizable(checked);
  };

  const handleToggleLike = (productId) => {
    setLikedProducts((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
  };

  const productCount = filteredProducts.length;
  const siteName = 'mettä muse';
  const pageTitle = 'Discover Our Products - E-Commerce Store | mettä muse';
  const pageDescription = 'Explore our curated collection of unique products. Shop quality items with customization options. Sign up for updates and discover artisan-crafted goods.';

  // Schema.org structured data
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteName,
    "url": "https://mettamuse.com",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+44-221-133-6360",
      "contactType": "customer service",
      "email": "customercare@mettamuse.com"
    },
    "sameAs": [
      "https://www.instagram.com/mettamuse",
      "https://www.linkedin.com/company/mettamuse"
    ]
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Product Listings",
    "description": "Browse our collection of products",
    "numberOfItems": filteredProducts.length,
    "itemListElement": filteredProducts.slice(0, 9).map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": product.title || "Product",
        "image": product.image || "",
        "description": product.description || "",
        "sku": product.id?.toString() || "",
        "offers": {
          "@type": "Offer",
          "price": product.price || 0,
          "priceCurrency": "USD",
          "availability": product.rating?.count > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
          "url": `https://mettamuse.com/products/${product.id || index}`
        },
        ...(product.rating && {
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": product.rating.rate || 0,
            "reviewCount": product.rating.count || 0
          }
        })
      }
    })).filter(item => item.item.name && item.item.name !== "Product")
  };

  const getSortLabel = (option) => {
    const labels = {
      [SORT_OPTIONS.RECOMMENDED]: 'RECOMMENDED',
      [SORT_OPTIONS.NEWEST_FIRST]: 'NEWEST FIRST',
      [SORT_OPTIONS.POPULAR]: 'POPULAR',
      [SORT_OPTIONS.PRICE_HIGH_LOW]: 'PRICE : HIGH TO LOW',
      [SORT_OPTIONS.PRICE_LOW_HIGH]: 'PRICE : LOW TO HIGH'
    };
    return labels[option] || 'RECOMMENDED';
  };

  return (
    <>
      <Helmet>
        {/* SEO Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="e-commerce, products, shopping, artisan goods, customizable products, mettä muse" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content={siteName} />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mettamuse.com/" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:site_name" content={siteName} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://mettamuse.com/" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="/twitter-image.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://mettamuse.com/" />
        
        {/* Schema.org Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>
      </Helmet>

      <Header />

      <main className="main-content">
        {/* Promotional Banner */}
        <section className="promo-banner">
          <h1 className="promo-heading">DISCOVER OUR PRODUCTS</h1>
          <p className="promo-text">
            Explore our curated collection of unique and artisan-crafted products. 
            Each item is carefully selected to bring quality and style to your everyday life. 
            Sign in or create an account to view pricing and customize your shopping experience.
          </p>
        </section>

        {/* Product Listing Section */}
        <section className="product-listing-section">
          {/* Left Sidebar Filters */}
          <FilterSidebar 
            itemCount={productCount} 
            isCustomizable={isCustomizable}
            onCustomizableChange={handleCustomizableChange}
          />

          {/* Right Main Product Area */}
          <div className="products-main">
            <div className="products-header">
              <span className="new-product-label">NEW PRODUCT</span>
              <div className="sort-dropdown" ref={sortDropdownRef} data-open={showSortMenu}>
                <button 
                  className="sort-dropdown-btn" 
                  type="button"
                  onClick={() => setShowSortMenu(!showSortMenu)}
                  aria-expanded={showSortMenu}
                  aria-haspopup="true"
                >
                  <span>{getSortLabel(sortOption)}</span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9L1 4h10z"/>
                  </svg>
                </button>
                {showSortMenu && (
                  <div className="sort-dropdown-menu" role="menu">
                    {Object.values(SORT_OPTIONS).map((option) => (
                      <div 
                        key={option}
                        className={`sort-option ${sortOption === option ? 'selected' : ''}`}
                        onClick={() => handleSortChange(option)}
                        role="menuitem"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            handleSortChange(option);
                          }
                        }}
                      >
                        <span>{getSortLabel(option)}</span>
                        {sortOption === option && (
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <h2 className="sr-only">Product Listings</h2>
            
            {loading && (
              <div style={{ padding: '2rem', textAlign: 'center' }}>
                <p>Loading products...</p>
              </div>
            )}
            
            {error && (
              <div style={{ padding: '2rem', textAlign: 'center', color: 'red' }}>
                <p>{error}</p>
              </div>
            )}
            
            {!loading && !error && (
              <ProductGrid 
                products={filteredProducts.slice(0, 9)} 
                likedProducts={likedProducts}
                onToggleLike={handleToggleLike}
              />
            )}
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }
      `}</style>
    </>
  );
}

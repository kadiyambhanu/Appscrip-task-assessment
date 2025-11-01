import { formatPrice } from '../../lib/api';

export default function ProductCard({ product, isFavorited = false, onToggleLike }) {
  const productImage = product.image || `https://via.placeholder.com/300x400/f5f5f5/666666?text=${encodeURIComponent(product.title || 'Product')}`;
  const isOutOfStock = product.rating?.count === 0;
  const productTitle = product.title || 'PRODUCT NAME';

  const handleHeartClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onToggleLike) {
      onToggleLike();
    }
  };

  return (
    <article className="product-card" itemScope itemType="https://schema.org/Product">
      <div className="product-image">
        <img
          src={productImage}
          alt={productTitle}
          loading="lazy"
          itemProp="image"
        />
        {isOutOfStock && (
          <span className="out-of-stock" aria-label="Out of stock">OUT OF STOCK</span>
        )}
      </div>
      <div className="product-info">
        <h3 className="product-name" itemProp="name">{productTitle}</h3>
        <p className="product-price" itemProp="offers" itemScope itemType="https://schema.org/Offer">
          {product.price ? (
            <>
              <span itemProp="price" content={product.price} />
              <span itemProp="priceCurrency" content="USD" />
              {formatPrice(product.price)}
            </>
          ) : (
            'Sign in or Create an account to see pricing'
          )}
        </p>
        <button 
          className="product-heart" 
          type="button"
          onClick={handleHeartClick}
          aria-label={isFavorited ? "Remove from favorites" : "Add to favorites"}
          aria-pressed={isFavorited}
        >
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill={isFavorited ? "#ff0000" : "none"} 
            stroke={isFavorited ? "#ff0000" : "#999"} 
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
      </div>
    </article>
  );
}


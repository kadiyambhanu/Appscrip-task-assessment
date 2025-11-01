import ProductCard from './ProductCard';

export default function ProductGrid({ products = [], likedProducts = new Set(), onToggleLike }) {
  return (
    <div className="products-grid">
      {products.map((product, index) => {
        const productId = product.id || index;
        const isLiked = likedProducts.has(productId);
        
        return (
          <ProductCard 
            key={productId} 
            product={product}
            isFavorited={isLiked}
            onToggleLike={() => onToggleLike && onToggleLike(productId)}
          />
        );
      })}
    </div>
  );
}


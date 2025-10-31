import ProductCard from './ProductCard';

export default function ProductGrid({ products = [] }) {
  return (
    <div className="products-grid">
      {products.map((product, index) => (
        <ProductCard 
          key={product.id || index} 
          product={product}
          isFavorited={index === 2} // Third product is favorited as per design
        />
      ))}
    </div>
  );
}


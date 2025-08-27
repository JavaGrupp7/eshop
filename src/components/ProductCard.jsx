export function ProductCard({ product, onClick }) {
  return (
    <article>
      <img src={product.thumbnail} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <button onClick={onClick}>Learn More</button>
    </article>
  );
}

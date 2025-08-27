import { useEffect, useState } from "react";
import { apiGetProductById } from "../api/products";

export function ProductPage({ pageData }) {
  // En state för att hålla koll på produkt information som vi hämtar från API
  const [product, setProduct] = useState(null);

  // pageData kommer att innehålla ett produkt id
  // Använd det id:t för att anropa API:et och hämta information
  // om specifik produkt (som vi tryckte på tidigare)
  // Vi vill endast hämta informationen en gång och därför ligger koden i en
  // useEffect
  useEffect(() => {
    apiGetProductById(pageData.productId).then(setProduct);
  }, []);

  // product börjar på null, vilket innebär att den inte hunnit anropa API:et än
  // därför returnerar vi "Loading product" så länge
  if (product === null) {
    return <div>Loading product...</div>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </div>
  );
}

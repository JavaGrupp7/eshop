import { useEffect, useState } from "react";
import { apiGetProductById } from "../api/products";

const COLORS = ["#dc9ff6", "#a3af9f", "#75d4e8"];

export function ProductPage({ pageData, cart, setCart }) {
  // En state för att hålla koll på produkt information som vi hämtar från API
  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState(null);
  const [tagSelect, setTagSelect] = useState("");
  const [colorSelect, setColorSelect] = useState(COLORS[0]);

  // pageData kommer att innehålla ett produkt id
  // Använd det id:t för att anropa API:et och hämta information
  // om specifik produkt (som vi tryckte på tidigare)
  // Vi vill endast hämta informationen en gång och därför ligger koden i en
  // useEffect
  useEffect(() => {
    apiGetProductById(pageData.productId).then((product) => {
      setProduct(product);
      setTagSelect(product.tags[0]); // sätt default värde till tags
      // Nedanför kan göras som alternativ till useEffect med dependency till product
      // setActiveImage(product.images[0]);
    });
  }, []);

  useEffect(() => {
    if (product !== null) {
      setActiveImage(product.images[0]);
    }
  }, [product]);

  const saveToBasket = () => {
    console.log(product);
    console.log(tagSelect);
    console.log(colorSelect);

    console.log(cart);

    const cartItem = {
      product: {product},
      tagSelect: {tagSelect},
      color: {colorSelect}
    }

    if (cart == undefined) {
      let newCart = [];
      newCart.push(cartItem);

      setCart(newCart);
      return;
    }

    let newCart = cart;
    newCart.push(cartItem);
    setCart(newCart);
  }

  // product börjar på null, vilket innebär att den inte hunnit anropa API:et än
  // därför returnerar vi "Loading product" så länge
  if (product === null) {
    return <div>Loading product...</div>;
  }

  return (
    <div>
      <section>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
      </section>

      {activeImage && (
        <section>
          <img width="500px" src={activeImage} />
          <div>
            {product.images.map((image) => (
              <button key={image} onClick={() => setActiveImage(image)}>
                <img src={image} width="100px" />
              </button>
            ))}
          </div>
        </section>
      )}

      <section>
        <select
          value={tagSelect}
          onChange={(event) => setTagSelect(event.target.value)}
        >
          {product.tags.map((tag) => (
            <option key={tag} value={tag}>{tag}</option>
          ))}
        </select>

        <div>
          {COLORS.map((color) => (
            <button key={color}
              onClick={() => setColorSelect(color)}
              style={{
                backgroundColor: color,
                width: "50px",
                height: "50px",
                borderRadius: "50%",
              }}  
            >
              {color === colorSelect && "✓"}
            </button>
          ))}
        </div>

        <button onClick={() => saveToBasket()}>Add to basket</button>
      </section>
    </div>
  );
}

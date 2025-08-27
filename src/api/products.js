// Autentisering kan hanteras på olika sätt (om det vore aktuellt):
// let AUTH_TOKEN = "fhr8743hf478r032hf8450h2f";
// sessionStorage
// localStorage
// Cookies

/*
export async function apiUploadImage() {
  fetch("service", {
    headers: {
      Authorization: localStorage.getItem("AUTH_TOKEN"),
    },
  });
}
*/

// En funktion för att hämta alla produkter från DummyJSON
export async function apiGetProducts() {
  // Anropa API och vänta ut svaret
  const response = await fetch("https://dummyjson.com/products");

  // Omvandla från JSON till JavaScript objekt
  const products = await response.json();

  return products.products;
}

// En funktion för att hämta en specifik produkter från DummyJSON
export async function apiGetProductById(productId) {
  // Anropa API och vänta ut svaret
  const response = await fetch("https://dummyjson.com/products/" + productId);

  // Omvandla från JSON till JavaScript objekt
  const product = await response.json();

  return product;
}

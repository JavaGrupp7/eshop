import { useState } from "react";
import "./App.css";
import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";
import { HomePage } from "./pages/HomePage";
import { ShopPage } from "./pages/ShopPage";
import { ProductPage } from "./pages/ProductPage";

// Konstanter för att skilja på sidor och enkelt hantera dem
export const HOME_PAGE = "home";
export const SHOP_PAGE = "shop";
export const PRODUCT_PAGE = "product";

function App() {
  // En state för att hålla koll på vilken sida som är "aktiv" (manuell routing)
  const [page, setPage] = useState(SHOP_PAGE);
  // En state för att hålla koll på sido-specifik relevant data (som e.g. vilken produkt vi har tryckt på (id))
  const [pageData, setPageData] = useState(null);

  // En funktion för att ändra aktiv sida
  const changePage = (page) => {
    // Anropa state funktion för att ändra sida
    setPage(page);
  };

  // Variabel som bestämmer vilken page-komponent som skall visas, eller 404 om inget hittades
  let content = <div>404 Not Found</div>;
  if (page === HOME_PAGE) {
    // Skicka med funktioner och data för att ändra sida och sidodata
    content = (
      <HomePage
        changePage={changePage}
        pageData={pageData}
        setPageData={setPageData}
      />
    );
  } else if (page === SHOP_PAGE) {
    content = (
      <ShopPage
        changePage={changePage}
        pageData={pageData}
        setPageData={setPageData}
      />
    );
  } else if (page === PRODUCT_PAGE) {
    content = (
      <ProductPage
        changePage={changePage}
        pageData={pageData}
        setPageData={setPageData}
      />
    );
  }

  return (
    <div id="app">
      <Nav changePage={changePage} />
      <main>{content}</main>
      <Footer />
    </div>
  );
}

export default App;

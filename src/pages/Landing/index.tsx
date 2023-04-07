import { useEffect, useState } from "react";
import { Product, fetchProducts } from "../../utils/api";
import { Link } from "react-router-dom";

import "./Landing.scss";

const Landing = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts().then((products) => setProducts(products));
  }, []);

  return (
    <>
      <h1 className="title">Accueil</h1>
      <div className="products">
        {products.map((product, key) => (
          <div key={key}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>{product.price} €</p>
          </div>
        ))}
      </div>
      <Link to="/publish">Ajouter une annonce</Link>
    </>
  );
};

export default Landing;

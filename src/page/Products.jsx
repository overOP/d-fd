import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../store/cartStore";
import { Link } from "react-router";
import { ClipLoader } from "react-spinners";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const addToCart = useCart((state) => state.addToCart);

  // Change this value to use different APIs
  const apiToUse = "dummyjson"; // "fakestore", "dummyjson", "escuela"

  const fetchProducts = () => {
    let apiUrl = "";
    switch (apiToUse) {
      case "fakestore":
        apiUrl = "https://fakestoreapi.com/products";
        break;
      case "dummyjson":
        apiUrl = "https://dummyjson.com/products";
        break;
      case "escuela":
        apiUrl = "https://api.escuelajs.co/api/v1/products";
        break;
      default:
        apiUrl = "https://fakestoreapi.com/products";
    }

    axios
      .get(apiUrl)
      .then((response) => {
        // Handle different API responses
        let data = [];
        if (apiToUse === "dummyjson") {
          data = response.data.products;
        } else {
          data = response.data;
        }
        setProducts(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch products.");
        setIsLoading(false);
        console.log(err);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (isLoading) {
    return <div className="flex items-center justify-center mt-[30%]"><ClipLoader color={"#008000"} size={40} /></div>;
  }

  if (error) {
    return <div className="text-center text-red-500 mt-[30%]">Error: {error.message}</div>;
  }

  return (
    <main className="flex items-center justify-center min-h-screen p-4">
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-amber-50">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
        {products.map((product) => {
          // handle fields depending on API
          let id = product.id;
          let title = product.title;
          let price = product.price;
          let description = product.description;
          let image = "";

          if (apiToUse === "fakestore") {
            image = product.image;
          } else if (apiToUse === "dummyjson") {
            image = product.thumbnail;
          } else if (apiToUse === "escuela") {
            image = product.images[0];
          }

          return (
            <div
              key={id}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between bg-amber-50"
            >
              <Link to={`/product/${id}`} className="flex-grow">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-48 object-contain mb-4"
                />
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <p className="text-gray-700 mb-2">${price.toFixed(2)}</p>
                <p className="text-gray-600 text-sm line-clamp-3">{description}</p>
              </Link>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  addToCart({
                    id,
                    name: title,
                    price,
                    img: image,
                  });
                }}
                className="mt-4 w-full bg-orange-500 text-white font-semibold py-2 rounded-lg hover:bg-orange-600 transition duration-300"
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
    </main>
  );
};

export default Products;

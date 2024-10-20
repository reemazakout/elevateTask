import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import CardSkeleton from "./CardSkelton";
import Card from "./Card";

export default function ProductList() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    const options = {
      method: "GET",
      url: "https://fakestoreapi.com/products?limit=10",
    };
    try {
      const response = await axios(options);
      setProduct(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  }

  return (
    <>
      {product && product.length === 0 ? (
        <div className="p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(10).keys()].map((item) => (
            <CardSkeleton key={item} />
          ))}
        </div>
      ) : (
        <div className="p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {product.map((item) => (
            <Card key={item.id} items={item} />
          ))}
        </div>
      )}
    </>
  );
}

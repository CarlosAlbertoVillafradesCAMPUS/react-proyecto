import { useEffect, useState } from "react";

const useGetProducts = (API) => {
    const [products, setProducts] = useState([]);

    const fetchApi = async () => {
      await fetch(API)
        .then((response) => response.json())
        .then((data) => setProducts(data));
    };
  
    useEffect(() => {
      fetchApi();
    }, []);

	return products;
};

export default useGetProducts;
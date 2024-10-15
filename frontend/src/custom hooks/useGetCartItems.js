import { useEffect, useState } from "react";
import useGetUserData from "./useGetUserData";
import { useSelector } from "react-redux";

const useGetCartItems = () => {
  const isLogin = useSelector((store) => store.header.isUserLogin);
  const [cartLength, setCartLength] = useState(null);
  const [cartData, setCartData] = useState([]);

  const { userId } = useGetUserData();

  useEffect(() => {
    if (isLogin && userId) {
    }
    fetchData();
  }, [isLogin, userId]);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:4500/api/cart/${userId}`);
      if (!response) {
        throw new Error("Failed to fetch cart Detail");
      }

      const data = await response.json();
      setCartData(data);
      setCartLength(data?.products?.length || null);
    } catch (error) {
      console.log("cart api error >>>>>", error);
    }
  };
  return { cartLength, cartData };
};

export default useGetCartItems;

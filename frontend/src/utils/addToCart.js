const addToCart = async ({ userId, productId, quantity }) => {
  const response = await fetch("http://localhost:4500/api/cart/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

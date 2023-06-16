const products = [
  {
    id: 1,
    title: "Iphone",
    price: "350k",
  },
  {
    id: 2,
    title: "samsung",
    price: "300k",
  },
  {
    id: 3,
    title: "oppo",
    price: "250k",
  },
  {
    id: 4,
    title: "vivo",
    price: "100k",
  },
];

const getAllProducts = (req, res) => {
  res.status(200).json({
    success: true,
    message: "products",
    result: products,
  });
};

const getProductById = (req, res) => {
  const id = Number(req.params.id);

  const currentProduct = products.filter((product) => product.id === id);
  // console.log(id);
  res.status(200).json({
    success: true,
    message: "products",
    results: currentProduct,
  });
};

export default {
  getAllProducts,
  getProductById,
};

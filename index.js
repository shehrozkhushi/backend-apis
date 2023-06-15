import express from "express";

const app = express();

const port = 5000;

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

const users = [
  {
    id: 1,
    name: "Shehroz",
    email: "shehroz@gmai.com",
    city: "Lahore",
  },
  {
    id: 2,
    name: "Atif",
    email: "atif@gmai.com",
    city: "Kasur",
  },
  {
    id: 3,
    name: "Usama",
    email: "usama@gmai.com",
    city: "Patoki",
  },
  {
    id: 4,
    name: "Areeb",
    email: "areeb@gmai.com",
    city: "Raiwind",
  },
];

app.get("/", (req, res) => {
  res.status(201).json({
    success: true,
    message: "Hello Worls",
  });
});

app.get("/product", (req, res) => {
  res.status(200).json({
    success: true,
    message: "products",
    result: products,
  });
});

app.post("/product/:id", (req, res) => {
  const id = Number(req.params.id);

  const currentProduct = products.filter((product) => product.id === id);
  // console.log(id);
  res.status(200).json({
    success: true,
    message: "products",
    results: currentProduct,
  });
});

app.get("/users", (req, res) => {
  if (users.length > 0) {
    res.status(200).json({
      success: true,
      message: "All Users",
      result: users,
    });
  } else {
    res.status(404).json({
      success: false,
      message: "No users found",
      result: users,
    });
  }
});

app.get("/users/:name", (req, res) => {
  const name = req.params.name;

  const currentUsers = users.filter((user) => user.name === name);
  console.log(currentUsers);

  if (currentUsers.length > 0) {
    res.status(200).json({
      success: true,
      message: "User found",
      result: currentUsers,
    });
  } else {
    res.status(404).json({
      success: false,
      message: "User not found",
      result: currentUsers,
    });
  }
});

app.listen(port, () => {
  console.log(`server is running on port: http://localhost:${port}`);
});

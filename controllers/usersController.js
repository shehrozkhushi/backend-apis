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

const getAllUser = (req, res) => {
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
};

const getUserByName = (req, res) => {
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
};

export default {
  getAllUser,
  getUserByName,
};

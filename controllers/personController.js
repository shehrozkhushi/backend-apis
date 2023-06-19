let persons = [
  {
    id: 1,
    name: "Areeb",
    gender: 20,
    email: "areeb@gmai.com",
    phone: 929839283298,
    city: "Raiwind",
    country: "Pakistan",
  },
  {
    id: 2,
    name: "Shehroz",
    gender: 21,
    email: "shehroz@gmai.com",
    phone: 929832633267,
    city: "Lahore",
    country: "Pakistan",
  },
  {
    id: 3,
    name: "Usama",
    gender: 24,
    email: "usama@gmai.com",
    phone: 929839434324,
    city: "Sialkot",
    country: "Pakistan",
  },
  {
    id: 4,
    name: "Atif",
    gender: 18,
    email: "atifali@gmai.com",
    phone: 923112123298,
    city: "Karachi",
    country: "Pakistan",
  },
];
const createPerson = (req, res) => {
  let newPerson = req.body;

  newPerson.id = persons[persons.length - 1].id + 1;

  persons.push(newPerson);

  console.log(persons);

  res.status(201).json({
    success: true,
    message: "person created",
    result: persons,
  });
};
const deletePerson = (req, res) => {
  const cid = req.params.id;
  persons = persons.filter(p=>p.id!=cid);
  // return id;
  res.status(200).json({
    success: true,
    message: "person deleted",
    result: persons,
  });
};

export default {
  createPerson,
  deletePerson
};

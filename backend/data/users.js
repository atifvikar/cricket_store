import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "aatifvikarkhan@gmail.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: true,
  },
  {
    name: "Aatif Khan",
    email: "atifvikarkhan@gmail.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: false,
  },
  {
    name: "Sania Khalil",
    email: "sania.khurshid1992@gmail.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: false,
  },
];

export default users;

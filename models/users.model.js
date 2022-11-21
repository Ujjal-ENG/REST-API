const { v4: uuidv4 } = require("uuid");

const users = [
  {
    id: uuidv4(),
    username: "Ujjal Kumar Roy",
    email: "lallala@gmail.com",
  },
  {
    id: uuidv4(),
    username: "Saurav Das",
    email: "saruaav@gmail.com",
  },
  {
    id: uuidv4(),
    username: "Shimul Das",
    email: "kkakka@gmail.com",
  },
];

module.exports = users;

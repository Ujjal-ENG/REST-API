let users = require("../models/users.model");
const { v4: uuidv4 } = require("uuid");
const { entries } = require("lodash");

//get users
const getAllUsers = (req, res) => {
  res.status(200).json(users);
};

//create users
const createUsers = (req, res) => {
  const { username, email } = req.body;
  const newUser = {
    id: uuidv4(),
    username: username,
    email: email,
  };
  users.push(newUser);
  res.status(201).json(users);
};

//update user

const updateUser = (req, res) => {
  const userid = req.params.id;
  const { username, email } = req.body;
  users
    .filter((user) => user.id === userid)
    .map((selectedUser) => {
      selectedUser.username = username;
      selectedUser.email = email;
    });
  res.status(200).json(users);
};

//delete user

const deleteUser = (req, res) => {
  const userid = req.params.id;
  const filteredData = users.filter((user) => user.id !== userid);
  res.status(200).json(filteredData);
};

module.exports = { getAllUsers, createUsers, updateUser, deleteUser };

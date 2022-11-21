const {
  getAllUsers,
  createUsers,
  updateUser,
  deleteUser,
} = require("../controllers/users.controllers");

const router = require("express").Router();

router.get("/", getAllUsers);

router.post("/", createUsers);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;

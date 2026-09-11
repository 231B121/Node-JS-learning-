const express = require("express");
const {
  handleGetAllUsers,
  handlegetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateUser 
} = require("../controllers/user");

const router = express.Router();

router.get("/").get(handleGetAllUsers).post(handleCreateUser);

router
  .route("/:id")
  .get(handlegetUserById) 
  .patch(handleUpdateUserById) 
  .delete(handleDeleteUserById) 

module.exports = router;
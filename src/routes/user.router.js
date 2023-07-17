const {
  getAll,
  create,
  getOne,
  remove,
  update,
  verifyCode,
  login,
  getUserLogged,
} = require("../controllers/user.controllers");
const express = require("express");
const verifyJWT = require("../utils/verifyJWT");

const userRouter = express.Router();

userRouter.route("/").get(verifyJWT, getAll).post(create);

userRouter.route("/verify/:code").get(verifyCode);

userRouter.route("/login").post(login);

userRouter.route("/me").get(verifyJWT, getUserLogged);

userRouter
  .route("/:id")
  .get(verifyJWT, getOne)
  .delete(verifyJWT, remove)
  .put(verifyJWT, update);

module.exports = userRouter;

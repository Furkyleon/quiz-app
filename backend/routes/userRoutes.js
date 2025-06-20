const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const userController = require("../controllers/userController");

router.post("/register", userController.create);
router.post("/login", userController.login);
router.get("/profile", auth, userController.profile);
router.get("/", auth, userController.list);
router.get("/:id", auth, userController.show);
router.put("/:id", auth, userController.update);
router.delete("/delete/:id", auth, userController.remove);
router.post("/logout", auth, userController.logout);

module.exports = router;

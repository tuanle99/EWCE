const router = require("express").Router();
const managerController = require("../../controllers/managerController");

router.route("/").get(managerController.findAll).post(managerController.create);

router.route("/auth").get(managerController.authenticate);

router.route("/login").post(managerController.login);

router.route("/logout").post(managerController.logout);

router.route("/:id").get(managerController.findById);

module.exports = router;

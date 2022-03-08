const router = require("express").Router();
const binController = require("../../controllers/binController");

router.route("/").get(binController.findAll).post(binController.create);

router
  .route("/:id")
  .get(binController.findById)
  .put(binController.update)
  .delete(binController.remove);

module.exports = router;

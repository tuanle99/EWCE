const router = require("express").Router();
const consumerController = require("../../controllers/consumerController");

router
  .route("/")
  .get(consumerController.findAll)
  .post(consumerController.create);

router
  .route("/:id")
  .get(consumerController.findById)
  .put(consumerController.update)
  .delete(consumerController.remove);

module.exports = router;

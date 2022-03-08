const router = require("express").Router();
const collectorController = require("../../controllers/collectorController");

router
  .route("/")
  .get(collectorController.findAll)
  .post(collectorController.create);

router
  .route("/:id")
  .get(collectorController.findById)
  .put(collectorController.update)
  .delete(collectorController.remove);

module.exports = router;

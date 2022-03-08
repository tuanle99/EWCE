const router = require("express").Router();
const coordinatorController = require("../../controllers/coordinatorController");

router
  .route("/")
  .get(coordinatorController.findAll)
  .post(coordinatorController.create);

router
  .route("/:id")
  .get(coordinatorController.findById)
  .put(coordinatorController.update)
  .delete(coordinatorController.remove);

module.exports = router;

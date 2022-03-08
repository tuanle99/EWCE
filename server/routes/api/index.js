const router = require("express").Router();
const coordinatorRoutes = require("./coordinator");
const consumerRoutes = require("./consumer");
const binRoutes = require("./bin");
const collectorRoutes = require("./collector");

// Post routes
router.use("/coordinator", coordinatorRoutes);
router.use("/consumer", consumerRoutes);
router.use("/bin", binRoutes);
router.use("/collector", collectorRoutes);

module.exports = router;

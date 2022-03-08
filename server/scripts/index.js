const seedBin = require("./seedBin");
const seedCollector = require("./seedCollector");
const seedConsumer = require("./seedConsumer");
const seedCoordinator = require("./seedCoordinator");

const seedDatabase = async () => {
  const coordinatorSeed = await seedCoordinator();

  const binSeed = await seedBin();

  const collectorSeed = await seedCollector();

  const consumerSeed = await seedConsumer();

  process.exit(0);
};

seedDatabase();

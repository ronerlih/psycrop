const router = require("express").Router();
// const bookRoutes = require("./books");
// const userRoutes = require("./user");
const workerRoutes = require("./worker");
const testsRoutes = require("./tests");
// const redisClient = require('../../scripts/redis');

// console.log(redisClient)
// /api/book routes
// router.use("/books", bookRoutes);

// /api/user routes
// router.use("/user", userRoutes);

// /api/worker routes
router.use("/worker", workerRoutes);

// /api/tests routes
router.use("/tests", testsRoutes);

module.exports = router;

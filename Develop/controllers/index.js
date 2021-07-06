const router = require('express').Router();
const checkAuthorization = require('../utils/authorization');
const apiRoutes = require('./api');
const homeRoutes = require("./homeRoutes");
const postRoutes = require("./blogPostRoutes");
const dashboardRoutes = require("./dashboardRoutes");

router.use('/api', apiRoutes);

module.exports = router;




router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/post", postRoutes);
router.use("/dashboard", checkAuthorization, dashboardRoutes);

module.exports = router;
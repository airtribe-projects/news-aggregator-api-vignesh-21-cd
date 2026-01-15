const express = require("express");
const authMiddleware = require("../middleware/auth.middleware");
const {
    getPreferences,
    updatePreferences
} = require("../controllers/preferences.controller");

const router = express.Router();

router.get('/preferences', authMiddleware, getPreferences);
router.put('/preferences', authMiddleware, updatePreferences);


module.exports = router;

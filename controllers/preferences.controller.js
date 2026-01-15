const preferences = require("../data/preferences");

function getPreferences(req, res) {
    const userId = req.user.id;

    res.status(200).json({
        preferences: preferences[userId] || []
    });
}

function updatePreferences(req, res) {
    const userId = req.user.id;
    const { preferences: newPreferences } = req.body;

    preferences[userId] = newPreferences;

    res.status(200).json({
        preferences: preferences[userId]
    });
}

module.exports = {
    getPreferences,
    updatePreferences
};

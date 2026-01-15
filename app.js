require("dotenv").config();
const express = require('express');
const authRoutes = require("./routes/auth.route");
const protectedRoutes = require("./routes/protected.routes")
const preferencesRoutes = require("./routes/preferences.routes");
const newsRoutes = require("./routes/news.routes");
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/users", authRoutes);
app.use("/api", protectedRoutes);
app.use("/users", preferencesRoutes);
app.use("/", newsRoutes);


app.listen(port, (err) => {
    if (err) {
        return console.log('Something bad happened', err);
    }
    console.log(`Server is listening on ${port}`);
});



module.exports = app;
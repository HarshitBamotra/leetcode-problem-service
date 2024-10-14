const dotenv = require("dotenv");
dotenv.config();

module.exports = {
    PORT: process.env.PORT || 3000,
    DB_URL: process.env.DB_URL,
    LOG_DB_URL: process.env.LOG_DB_URL,
};


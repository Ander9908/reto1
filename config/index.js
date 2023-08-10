if(process.env.MODO_ENV !== "production"){

    require("dotenv").config();

}

module.exports = {
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI,
    MONGO_ATLAS_API_KEY: process.env.MONGO_ATLAS_API_KEY
}
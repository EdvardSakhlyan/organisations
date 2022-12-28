const {DB, USER, PASSWORD, HOST, dialect , pool } = require("../config/db.config").module;
const {Sequelize , DataTypes} = require("sequelize");

const sequelize = new Sequelize(
    DB,
    USER,
    PASSWORD,
    {
        host: HOST,
        dialect,
        operatorsAliases: false,
        pool
    }
)

sequelize.authenticate()
    .then(() => console.log("connected..."))
    .catch(err => console.log(err.message || "connect faild"))

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.organisations = require("./organisation.model.js")(sequelize , Sequelize)

db.sequelize.sync({force: false})
    .then(() => console.log("re-sync done"))


module.exports = db

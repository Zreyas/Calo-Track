module.exports = {
    HOST: "postgres://sgrmjsny:x0CKkt1QNTGan18O3-e-oS_WviGu_Ln1@jelani.db.elephantsql.com/sgrmjsny",
    USER: "sgrmjsny",
    PASSWORD: "x0CKkt1QNTGan18O3-e-oS_WviGu_Ln1",
    DB: "calo",
    dialect: "mysqorg.hibernate.dialect.PostgreSQLDialectl",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
const config = {
  db: {
    /* don't expose password or any sensitive info, done only for demo */
    host: "localhost",
    user: "root",
    password: "Hill@123",
    database: "ecommerce",
  },
  listPerPage: 10,
};

module.exports = config;

const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
  const { host, database, user, password } = parse(env("DATABASE_URL"));
  const port = env.int('DATABASE_PORT', 5432);
  return {
    connection: {
      client: "postgres",
      connection: {
        host,
        port,
        database,
        user,
        password
      },
      debug: false,
    },
  };
};

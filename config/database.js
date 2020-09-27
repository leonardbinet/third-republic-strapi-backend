module.exports = ({ env }) => ({
  // in development environment use local sqllite
  defaultConnection: env("NODE_ENV", "development"),
  connections: {
    development: {
      connector: "bookshelf",
      settings: {
        client: "sqlite",
        filename: env("DATABASE_FILENAME", ".tmp/data.db"),
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
  // in production use remote postgres
  production: {
    connector: "bookshelf",
    settings: {
      client: "postgres",
      host: `/cloudsql/${env("INSTANCE_CONNECTION_NAME")}`,
      database: env("DATABASE_NAME"),
      username: env("DATABASE_USERNAME"),
      password: env("DATABASE_PASSWORD"),
    },
    options: {},
  },
});

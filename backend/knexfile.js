module.exports = {
  client: 'pg',
  connection: process.env.DATABASE_URL || {
    user: 'forte',
    password: 'password',
    database: 'juke_jam',
  },
};

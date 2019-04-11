require("dotenv").config();

const server = require("./api/server.js");

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n** server up on port ${port} **\n`));

// Setting up PG on Heroku
//  * Head to Heroku
//  * Set up new application
//  * Sync from GitHub
//  * Resources > Add-ons > Heroku Postgres
// 	 * Automatically adds config variable in settings
//  * Change Knex configuration
// 	 * Add production key using new DB
// 		 * client: pg
// 		 * connection: DATABASE_URL || localPG {host, database, user, password}
// 		 * same migrations & seeds as before
//  * Change dbEnv in dbConfig
// 	 * DB_ENV || 'production'
//  * Commit & push changes
//  * Set DB_ENV config variable on Heroku
//  * Run migrations on Heroku
// 	 * `npx heroku run knex migrate:latest -a <application>`

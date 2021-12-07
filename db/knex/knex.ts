import knex from 'knex'

import knexConfig from '../knexfile'

// ToDo: take environment from env and make the connection a string instead
//  process.env.ENVIRONMENT as string ||
const environment = 'development'
const config = knexConfig[environment];
export default knex(config);
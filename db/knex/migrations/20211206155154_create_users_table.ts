import { Knex } from "knex";
// ToDo: take table names from enum
export const up  = async (knex: Knex): Promise<void> => {
    await knex.schema.createTable('users', (table) => {
        table.increments('id');
        table.string('email').notNullable();
        table.string('password').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
}


export const down  = async (knex: Knex): Promise<void> => {
    await knex.schema.dropTable('users');
}

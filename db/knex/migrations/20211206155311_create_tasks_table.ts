import { Knex } from "knex";

export const up  = async (knex: Knex): Promise<void> => {
    await knex.schema.createTable('tasks', function(table) {
        table.increments('id');
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.boolean('is_complete').notNullable().defaultTo(false);
        table.integer('user_id').references('id').inTable('users');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
}


export const down  = async (knex: Knex): Promise<void> => {
    await knex.schema.dropTable('tasks');
}

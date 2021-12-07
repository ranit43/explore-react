import { Knex } from "knex";

interface User {
  id?: number;
  email: string;
  password: string;
}

const generateFakeUsers = () => {
  const users: User[] = [
    {
      id: 1,
      email: "nigel@email.com",
      password: "dorwssap",
    },
    {
      id: 2,
      email: "nakaz@email.com",
      password: "password1",
    },
    {
      id: 3,
      email: "jaywon@email.com",
      password: "password123",
    },
  ];

  return users;
};

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("tasks").del();

  // Inserts seed entries
  await knex("users").insert([
    ...generateFakeUsers(),
  ]);

  await knex("tasks").insert([
    {
      title: "Vaccuum the floors",
      description: "Vaccum the living room and all bedroom",
      is_complete: false,
      user_id: 2,
    },
    {
      title: "Clean the car",
      description: "Wash, wax and vacuum the car",
      is_complete: false,
      user_id: 1,
    },
    {
      title: "Buy groceries",
      description: "Milk, bread, cheese, eggs, flour",
      is_complete: true,
      user_id: 3,
    },
  ]);
}

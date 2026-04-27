import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  await knex("products").del();

  await knex("products").insert([
    { name: "Isca de frango", price: 20 },
    { name: "Bolinho de Açúcar", price: 43.83 },
    { name: "Porção de batata frita", price: 30.33 },
    { name: "Suco de graviola 500ml", price: 12 },
    { name: "Caldo de palmito", price: 33 },
    { name: "Fatia de bolo", price: 3 },
  ]);
}

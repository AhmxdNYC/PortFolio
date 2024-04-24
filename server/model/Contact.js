const knex = require("./knex")

class Contact {
  static async create({ name, email, message }) {
    try {
      const insertedRows = await knex("contacts")
        .insert({
          name,
          email,
          message,
        })
        .returning("*")
      return insertedRows[0]
    } catch (error) {
      throw new Error(`Failed to create contact: ${error}`)
    }
  }

  static async list() {
    // Get all
    const { rows } = await knex.raw(`
      SELECT * FROM contacts;
    `)

    return rows
  }

  static async find(id) {
    // Get one
    const { rows } = await knex.raw(
      `
      SELECT * FROM contacts
      WHERE id=?
    `,
      [id]
    )

    return rows[0]
  }

  static async editName(id, newName) {
    // Update
    const { rows } = await knex.raw(
      `
      UPDATE contacts
      SET name=?
      WHERE id=?
      RETURNING *;
    `,
      [newName, id]
    )

    return rows[0]
  }

  static async delete(id) {
    // Delete
    const { rows } = await knex.raw(
      `
      DELETE FROM contacts
      WHERE id=?
      RETURNING *;
    `,
      [id]
    )

    return rows
  }
}

module.exports = Contact

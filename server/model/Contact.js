const knex = require("./knex")

/* 
This class provides an interface for managing Fellow data. 
Instances of this class can't do much really. They just store data.

The class itself provides static methods for CRUD actions on 
the collection of fellows.
*/
class Contact {
  static async create({ name, email, message }) {
    const { rows } = await knex.raw(
      `
      INSERT INTO contacts (name, email, message)
      VALUES (?, ?, ?)
      RETURNING *
    `,
      [name, email, message] // Ensure these values are passed to the method
    )

    return rows[0]
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

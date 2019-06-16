/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class PostSchema extends Schema {
  up() {
    this.create('posts', (table) => {
      table.increments();
      table.timestamps();
      table.string('author');
      table.string('place');
      table.string('description');
      table.string('hashtags');
      table.string('image');
      table.integer('likes').defaultTo(0);
    });
  }

  down() {
    this.drop('posts');
  }
}

module.exports = PostSchema;

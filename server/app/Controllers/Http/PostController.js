/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Post = use('App/Models/Post');
const Helpers = use('Helpers');

/**
 * Resourceful controller for interacting with posts
 */
class PostController {
  /**
   * Show a list of all posts.
   * GET posts
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index() {
    const data = await Post.all();
    return data;
  }
  /**
   * Create/save a new post.
   * POST posts
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const data = request.only([
      'author',
      'place',
      'description',
      'hashtags',
      'likes'
    ]);
    const profilePic = await request.file('image', {
      types: ['image'],
      size: '10mb'
    });

    console.log(profilePic);
    await profilePic.move(Helpers.tmpPath('uploads'), {
      name: `${Date.now()}.png`,
      overwrite: true
    });
    if (!profilePic.moved()) {
      console.log(profilePic.error());
    } else {
      console.log(`file moved as ${profilePic.fileName}`);
    }
    data.image = profilePic.fileName;
    const post = await Post.create({ ...data });

    return post;
  }

  /**
   * Display a single post.
   * GET posts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {}

  /**
   * Update post details.
   * PUT or PATCH posts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {}

  /**
   * Delete a post with id.
   * DELETE posts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {}
}

module.exports = PostController;

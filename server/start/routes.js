/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route');
const Helpers = use('Helpers');

Route.post('/register', 'AuthController.register');
Route.post('/authenticate', 'AuthController.authenticate');

Route.resource('/post', 'PostController')
  .apiOnly()
  .except('update');

Route.get('/images/:imageName', ({ params, response }) => {
  response.attachment(Helpers.tmpPath(`uploads/${params.imageName}`));
});

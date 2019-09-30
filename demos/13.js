// demos/13.js
const Koa = require('koa');
const route = require('koa-route');
const app = new Koa();

const redirect = ctx => {
  ctx.response.redirect('/');
};

const main = ctx => {
  ctx.response.body = 'Hello World';
};

app.use(route.get('/', main));
app.use(route.get('/redirect', redirect));

app.use(main);
app.listen(3000, () => {
  console.log(`http://localhost:3000/`);
  console.log(`http://localhost:3000/redirect`);
});
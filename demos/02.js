// demos/02.js
const Koa = require('koa');
const app = new Koa();

const main = ctx => {
  ctx.response.body = 'Hello World';
};

app.use(main);
app.listen(3000, () => {
  console.log(`http://localhost:3000/`);
});
// demos/01.js
const Koa = require('koa');
const app = new Koa();

app.listen(3000, () => {
  console.log(`http://localhost:3000/`);
});
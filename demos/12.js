// demos/12.js
const Koa = require('koa');
const app = new Koa();
const path = require('path');
const serve = require('koa-static');

const main = serve(path.join(__dirname));

app.use(main);
app.listen(3000, () => {
  console.log(`http://localhost:3000/12.js`);
});
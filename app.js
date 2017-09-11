let Koa = require('koa');

let app = new Koa();

let send = require('koa-send')

app.use(async (ctx) => {
  await send(ctx, ctx.path, { root: './resource' });
});

app.listen(3005);
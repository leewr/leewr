module.exports = () => {
  return async function notFoundHandler(ctx, next) {
    await next();
    if (ctx.status === 404 && !ctx.body) {
      if (ctx.acceptJSON) {
        ctx.body = { error: 'Not Found' };
      } else {
        ctx.body = '<h1>Page Not Found</h1>';
      }
    }
    if (ctx.status === 301 || ctx.status === 304 || ctx.status === 401) {
      ctx.body = {
        status: 200,
        success: false,
        message: ctx.message
      }
      ctx.status = 200
    }
    console.log(ctx.body)
  };
};
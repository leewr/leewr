module.exports = limit => {
  return async function createUserLimit(ctx, next) {
    console.log(1)
    next()
  }
}
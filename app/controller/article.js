module.exports = {
  async getArticle(ctx, id, service) {
    const current_user = ctx.locals.current_user
    const topic = await service.topic.getArticleById(id)
    const author = await service.user.getUserInfo(topic.authorId)
    const addView = await service.topic.addView(id)
    let isFollowed
    let isLiked
    if (current_user) {
      isFollowed = await service.user.getFollowStatus(
        topic.authorId,
        current_user
      )
      isLiked = await service.user.getLikeStatus(id, current_user)
    }
    if (topic) {
      await ctx.render('/topic/view.tpl', {
        data: topic,
        author: author,
        isFollowed: isFollowed,
        isLiked: isLiked
      })
    } else {
      ctx.status = 404
    }
  }
}

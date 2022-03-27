const service = require('../service/comment.service.js');

class CommentController {
    async create(ctx,next) {
        const {momentId,content} = ctx.request.body;
        const {id} = ctx.user;
        // ctx.body = 'xixi';
        const result = await service.create(momentId,content,id);
        ctx.body = result;
    }

    async reply(ctx,next) {
        const {momentId,content,commentId} = ctx.request.body;
        const {id} = ctx.user;
        const result = await service.reply(momentId,content,commentId,id);
        ctx.body = result;
    }

    async update(ctx,next) {
        const {commentId} = ctx.params;
        const {content} = ctx.request.body;

        const res = await service.update(commentId,content);
        ctx.body = res;
    }

    async remove (ctx,next) {
        const {commentId} = ctx.params;
        const res = await service.remove(commentId);
        ctx.body = res;
    }

    async list (ctx,next) {
        const {momentId} =ctx.query;
        const result = await service.getCommentsById(momentId);
        ctx.body = result;
    }
}

module.exports = new CommentController();
const fs = require('fs');

const fileService = require('../service/file.service');
const momentService = require('../service/moment.service');
const {PICTURE_PATH} = require('../constant/file-path');

class MomentController {
    async create(ctx,next) {

        //获取数据(user_id,content)
        const userId = ctx.user.id;
        const {content} = ctx.request.body;
        console.log(userId,content,222);
        const res = await momentService.create(userId,content);

        ctx.body = res;
    }

    async detail (ctx,next) {
        const {momentId} = ctx.params;

        const res = await momentService.getMomentById(momentId);
        ctx.body = res;
    }

    async list (ctx,next) {
        const {offset,size} = ctx.query;

        const res = await momentService.getList(offset,size);
        ctx.body = res;
    }


    async update(ctx,next) {
        const {momentId} = ctx.params;
        const {content} = ctx.request.body;
        // const {id} = ctx.user;
        // ctx.body = `${momentId},xixi`;

        const res = await momentService.update(content,momentId);
        ctx.body = res;
    }

    async remove(ctx,next) {
        const {momentId} = ctx.params;

        const result = momentService.remove(momentId);
        ctx.body = result;
    }

    async addLabel(ctx,next) {
        const {labels} = ctx;
        const {momentId} = ctx.params;
        console.log(labels,momentId,111);

        //添加所有标签
        for(let label of labels) {
            const isExist = await momentService.hasLabel(momentId,label.id);
            if(!isExist) {
                const result = await momentService.addLabel(momentId,label.id);
            }
        }


        ctx.body = '给动态添加标签成功';
    }

    async fileInfo(ctx,next) {
        let {filename} = ctx.params;
        const fileInfo = await fileService.getFileByFilename(filename);
        const {type} = ctx.query;
        const types = ['small','middle','large'];
        if(types.includes(type)) {
            filename = filename + '-' + type;
        }

        ctx.response.set('content-type',fileInfo.mimetype);
        ctx.body = fs.createReadStream(`${PICTURE_PATH}/${filename}`);
    }
}

module.exports = new MomentController();
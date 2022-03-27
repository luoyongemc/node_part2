const fs = require('fs');

const service = require('../service/user.service');
const fileService = require('../service/file.service');
const {AVATAR_PATH} = require('../constant/file-path');


class UserController {
    async create(ctx,next){
        const user = ctx.request.body;
        const res = await service.create(user);

        ctx.body = res;
    }

    async avatarInfo(ctx,next) {
        const {userId} = ctx.params;
        const avatarInfo = await fileService.getAvatarByUserId(userId);

        //返回头像
        ctx.response.set('content-type',avatarInfo.mimetype);
        ctx.body = fs.createReadStream(`${AVATAR_PATH}/${avatarInfo.filename}`);
    }
}

module.exports = new UserController();
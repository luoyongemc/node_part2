const fileService = require('../service/file.service');
const userService = require('../service/user.service');
const {AVATAR_PATH} = require('../constant/file-path');
const {APP_HOST,APP_PORT} = require('../app/config');

class FileController {
    async saveAvatarInfo(ctx,next) {
        const {filename,mimetype,size} = ctx.req.file;
        const {id} = ctx.user;

        const result = await fileService.createAvatar(filename,mimetype,size,id);

        //将图片地址保存到users表中
        const avatarUrl = `${APP_HOST}:${APP_PORT}/users/${id}/avatar`;
        await userService.updateAvatarUrlById(avatarUrl,id);

        ctx.body = '用户上传头像成功';
    }

    async savePictureInfo(ctx,next) {
        const files = ctx.req.files;
        const {id} = ctx.user;
        const {momentId} = ctx.query;

        //将所有的文件信息保存到数据库中
        for(let file of files) {
            const {filename,mimetype,size} = file;
            await fileService.createFile(filename,mimetype,size,id,momentId);
        }

        ctx.body = '动态配图上传成功';
    }
}

module.exports = new FileController();
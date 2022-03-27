const connection = require('../app/database');

class CommentService {
    async create(momentId,content,id) {
        const statement = `INSERT INTO comment (moment_id,content,user_id) VALUES (?,?,?)`;
        const [result] = await connection.execute(statement,[momentId,content,id]);
        return result;
    }

    async reply(momentId,content,commentId,id) {
        console.log(momentId,content,commentId,id,111);
        const statement = `INSERT INTO comment (moment_id,content,user_id,comment_id) VALUES (?,?,?,?)`;
        const [result] = await connection.execute(statement,[momentId,content,id,commentId]);
        return result;
    }

    async update(commentId,content) {
        const statement = `UPDATE comment SET content = ? WHERE id = ?`;
        const [result] = await connection.execute(statement,[content,commentId]);
        return result;
    }

    async remove(commentId) {
        const statement = `DELETE FROM comment WHERE id = ?`;
        const [result] = await connection.execute(statement,[commentId]);
        return result;
    }

    async getCommentsById(momentId) {
        const statement = `
                            SELECT 
                                c.id,c.content,c.comment_id commentId,
                                JSON_OBJECT('id',u.id,'name',u.name) author
                            FROM comment c 
                            LEFT JOIN users u on u.id = c.user_id
                            WHERE moment_id = ?;
                            `;
        const [result] = await connection.execute(statement,[momentId]);
        return result;
    }
}

module.exports = new CommentService();
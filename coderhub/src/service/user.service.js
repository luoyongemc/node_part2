const connection = require('../app/database');

class UserService {
    async create(user) {
        console.log(user);
        const {name,password} = user;
        const statement = `INSERT INTO users (name,password) VALUES (?,?);`;

        const res = await connection.execute(statement,[name,password]);

        return res[0];
    }

    async getUserByName(name) {
        const statement = `SELECT * FROM users WHERE name = ?`;
        const res = await connection.execute(statement,[name]);
        return res[0];
    }

    async updateAvatarUrlById(avatarUrl,userId) {
        const statement = `UPDATE users SET avatar_url = ? WHERE id = ?`;
        const [result] = await connection.execute(statement,[avatarUrl,userId]);
        return result;
    }
}

module.exports = new UserService();
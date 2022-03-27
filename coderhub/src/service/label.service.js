const connection = require('../app/database');

class LabelService {
    async create (labelName) {
        try {
            const statement = `INSERT INTO label (name) VALUES (?)`;
            const [result] = await connection.execute(statement,[labelName]);
            return result;
        } catch (error) {
            // throw new Error(error);
            console.log(error);
        }
    }

    async getLableByName(name) {
        const statement = `SELECT * FROM label WHERE name = ?`;
        const [result] = await connection.execute(statement,[name]);
        return result[0];
    }

    async list(limit,offset) {
        const statement = `SELECT * FROM label LIMIT ?,?`;
        const [result] = await connection.execute(statement,[offset,limit]);
        return result;
    }
}

module.exports = new LabelService();
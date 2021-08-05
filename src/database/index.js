import Sequelize from 'sequelize';
import User from '../app/models/Users';
import databaseConfig from '../app/config/database';

const models = [User];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = Sequelize(databaseConfig);

        models
            .map( model => model.init(this.connection))
            .map( model => model.associate && model.associate(this.connection.models))
    }
}

export default new Database();
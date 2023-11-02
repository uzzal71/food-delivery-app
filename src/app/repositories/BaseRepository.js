import { Model, Transaction } from "sequelize";
import { IBaseRepository } from '../interfaces/IBaseRepository';

export class BaseRepository extends IBaseRepository {
    constructor(Model) {
        this.model = Model;
    }

    async create(item, transaction) {
        const createdItem = await this.model.create(item, { transaction: transaction });
        return createdItem.toJSON();
    }

    async bulkCreate(item, transaction) {
        return await this.model.bulkCreate(item, { transaction: transaction });
    }

    async findAll() {
        const results = await this.model.findAll();
        return results.map((result) => result.toJSON());
    }

    async findAllWithPagination(pageNo, perPage, relations, conditions, hasRelations, req) {
        // Implementation here
    }

    async findOne(id) {
        const result = await this.model.findOne({ where: { id } });
        return result;
    }

    async update(id, item, transaction) {
        const [rowsUpdated] = await this.model.update(item, {
            where: { id },
            returning: true,
            transaction,
        });

        if (rowsUpdated === 0) {
            return false;
        }

        return true;
    }

    async delete(id, transaction) {
        const result = await this.model.destroy({
            where: { id },
            transaction,
        });

        return result > 0;
    }
}


// Define the IBaseRepository interface
export class IBaseRepository {
    create(item, transaction) {}
    findAll() {}
    findOne(id) {}
    update(id, item, transaction) {}
    delete(id, transaction) {}
}

// Define the TBaseRepository type
export const TBaseRepository = IBaseRepository;

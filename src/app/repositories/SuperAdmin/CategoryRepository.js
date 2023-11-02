import { BaseRepository } from '../BaseRepository';
const CarBrand = require('@Models/CarBrand');
const Media = require('@Models/Media');

class CarBrandRepository extends BaseRepository {
    constructor() {
        super(CarBrand);
    }

    async getCarBrandById(id) {
        const result = await this.model.findOne({
            where: { id },
            include: [{ model: Media, required: false, attributes: ['id', 'file_path'] }]
        });
        return result;
    }
}

export default CarBrandRepository;

import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize';

const Category = sequelize.define('Category', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    parent_id: {type: DataTypes.SMALLINT, allowNull: true, defaultValue: 0},
    name: {type: DataTypes.STRING(100), allowNull: false,},
    slug: {type: DataTypes.STRING(100), allowNull: false,},
    service_category_id: {type: DataTypes.SMALLINT, allowNull: true},
    index: {type: DataTypes.SMALLINT, allowNull: true},
  },
  {
    tableName: 'categories',
    timestamps: true,
  },
);

export default Category;

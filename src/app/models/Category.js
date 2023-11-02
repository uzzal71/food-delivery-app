// Category model
import {DataTypes} from 'sequelize';
import sequelize from '../../config/sequelize';
import Media from './Media';

const Category = sequelize.define('Category', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    // flag: {type: DataTypes.INTEGER, allowNull: true, defaultValue: 0},
    parent_id: {type: DataTypes.SMALLINT, allowNull: true, defaultValue: 0},
    name: {type: DataTypes.STRING, allowNull: false, length: 50},
    service_category_id: {type: DataTypes.SMALLINT, allowNull: true},
    index: {type: DataTypes.SMALLINT, allowNull: true},
    slug: {type: DataTypes.STRING, allowNull: false, length: 50},
  },
  {
    tableName: 'categories',
    timestamps: true,
  },
);

Category.hasMany(Media, {
  foreignKey: {name: 'mediaableId', allowNull: true},
  constraints: false,
  scope: {
    mediaableType: 'Category'
  }
});

Media.belongsTo(Category, {
  foreignKey: 'mediaableId',
  constraints: false
});

export default Category;

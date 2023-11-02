import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize';

const Media = sequelize.define(
    'Media',
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        parent_id: { type: DataTypes.SMALLINT, allowNull: true, defaultValue: 0 },
        user_id: { type: DataTypes.STRING(50), allowNull: true },
        mediaableId: { type: DataTypes.INTEGER, allowNull: true },
        mediaableType: { type: DataTypes.STRING, allowNull: true },
        key: { type: DataTypes.STRING(20), allowNull: false },
        fileType: { type: DataTypes.STRING(20), allowNull: true, defaultValue: 'image' },
        fileExtension: { type: DataTypes.STRING(10), allowNull: false },
        filePath: { type: DataTypes.STRING, allowNull: false },
    },
    {
        tableName: 'medias',
        timestamps: true,
    },

);


export default Media;

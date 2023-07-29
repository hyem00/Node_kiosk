import { Model, DataTypes } from "sequelize";
import sequelize from "../sequelize";

class Option extends Model {}

Option.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    extra_price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shot_price: {
      type: DataTypes.INTEGER,
    },
    hot: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    modelName: "Option",
    underscored: true,
    timestamps: true,
  }
);

export default Option;

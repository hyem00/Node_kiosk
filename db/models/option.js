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
      type: DataTypes.INTEGER,
    },
    shot_price: {
      type: DataTypes.INTEGER,
    },
    hot: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
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

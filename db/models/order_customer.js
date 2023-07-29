import { Model, DataTypes } from "sequelize";
import sequelize from "../sequelize";

class Order_customer extends Model {}

Order_customer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    state: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: "Order_customer",
    underscored: true,
    timestamps: true,
  }
);

export default Order_customer;

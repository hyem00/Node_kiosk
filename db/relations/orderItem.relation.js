import Item from "../models/item";
import OrderItem from "../models/item";

export default () => {
  OrderItem.belongsTo(Item, {
    targetKey: "id",
    foreignKey: "item_id",
  });
};

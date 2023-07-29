import Item from "../models/item";
import OrderItem from "../models/order_item";

export default () => {
  Item.hasMany(OrderItem, {
    sourceKey: "id",
    foreignKey: "item_id",
  });
};

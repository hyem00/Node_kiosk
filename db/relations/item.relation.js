import Item from "../models/item";
import OrderItem from "../models/order_item";
import Item_order_customer from "../models/item_order_customer";
export default () => {
  Item.hasMany(OrderItem, {
    sourceKey: "id",
    foreignKey: "item_id",
  });
  Item.hasMany(Item_order_customer, {
    sourceKey: "id",
    foreignKey: "item_id",
  });
};

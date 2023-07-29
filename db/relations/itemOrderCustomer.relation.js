import Item_order_customer from "../models/item_order_customer";
import Order_customer from "../models/order_customer";
import Item from "../models/item";

export default () => {
  Item_order_customer.belongsTo(Item, {
    targetKey: "id",
    foreignKey: "item_id",
  });
  Item_order_customer.hasMany(Order_customer, {
    sourceKey: "id",
    foreignKey: "order_customer_id",
  });
};

import { Option, Order_customer, Item_order_customer, Item } from "../db";

class OrderRepository {
  getType = async (id) => {
    const result = await Item.findOne(id);
    return result.option_id;
  };
  create = async (extra_price, shot_price, hot) => {
    return await Option.create({ extra_price }, { shot_price }, { hot });
  };

  delete = async (id) => {
    return Option.destroy({ where: { id } });
  };
}

export default OrderRepository;

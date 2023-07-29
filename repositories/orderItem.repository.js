import { Order_item } from "../db";
import { Item } from "../db";

class OrserItemRepository {
  create = async (item_id) => {
    return await Order_item.create({ item_id });
  };

  getState = async (id) => {
    const orderItem = await Order_item.findOne({ where: { id } });
    return orderItem.state;
  };

  getItemAmount = async (id) => {
    const result = await Item.findOne({
      attributes: ["amount"],
      include: [
        {
          model: Order_item,
          where: { id: id },
          attributes: [],
        },
      ],
    });
    return result.amount;
  };
  getItemOrderAmount = async (id) => {
    const getItemOrderAmount = await Order_item.findOne({ where: { id } });
    return getItemOrderAmount.amount;
  };

  upAmount = async (id, state, getItemOrderAmount) => {
    const at = await Order_item.update(
      { amount: getItemOrderAmount + 1 },
      { state },
      { where: { id } }
    );
    return at;
  };

  downAmount = async (id, state, getItemOrderAmount) => {
    const at = await Order_item.update(
      { amount: getItemOrderAmount - 1, state },
      { where: { id } }
    );
    return at;
  };
  update = async (id, state) => {
    return await Order_item.update({ state }, { where: { id } });
  };
}

export default OrserItemRepository;

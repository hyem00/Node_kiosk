import { Order_customer, Item_order_customer } from "../db";

class OrderRepository {
  orderCustomerCreate = async (id) => {
    return await Order_customer.create({ id });
  };
  itemOrderCustomerCreate = async (
    item_id,
    order_customer_id,
    amount,
    option
    //나중에 토탈 price
  ) => {
    return await Item_order_customer.create(
      item_id,
      order_customer_id,
      amount,
      option
      //나중에 토탈 price
    );
  };
  getState = async (id) => {
    const getState = await Order_customer.findByPk(id);
    return getState.state;
  };

  updateOrderCustomer = async (id) => {
    return await Order_customer.update({ state: true }, { where: { id } });
  };

  delete = async (id) => {
    await Order_customer.destroy({ where: { id } });
    await Item_order_customer.destroy({ where: { id } });
  };
}

export default OrderRepository;

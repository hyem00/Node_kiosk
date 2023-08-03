import { OrderRepository } from "../repositories";

class OrderService {
  _orderRepo = new OrderRepository();

  create = async (id, order) => {
    const itemOrderCustomer = {};
    try {
      const orderCustomer = await this._orderRepo.orderCustomerCreate(id);
      let totalprice = 0;
      for (let i = 0; i < order.length; i++) {
        const item_id = order[i].item_id;
        const amount = order[i].amount;
        const option = order[i].option;

        const order_customer_id = orderCustomer.id;

        itemOrderCustomer = await this._orderRepo.itemOrderCustomerCreate(
          item_id,
          order_customer_id,
          amount,
          option
          //나중에 토탈 price
        );
      }
      return {
        code: 200,
        message: "주문이 완료되었습니다",
        data: itemOrderCustomer,
      };
    } catch (error) {
      console.log("order service에서 문제 났습니다!", error);
    }
  };

  update = async (id) => {
    getState = await this._orderRepo.getState(id);
    // 질문 1번
    if (getState === false) {
      // state true로 변경
      await this._orderRepo.updateOrderCustomer(id);
      // amount -1 해주기
      await this._orderRepo.minusAmount();
      return {
        code: 400,
        message: "주문이 완료되었습니다",
      };
    } else {
      return {
        code: 200,
        message: "이미 완료된 주문입니다.",
        data: itemOrderCustomer,
      };
    }
  };
  delete = async (id) => {
    getState = await this._orderRepo.getState(id);

    if (getState === true) {
      return {
        code: 400,
        message: "완료된 주문은 취소할 수 없습니다",
      };
    }
    return {
      code: 200,
      message: "주문이 삭제되었습니다",
      data: await this._orderRepo.delete(id),
    };
  };
}

export default OrderService;

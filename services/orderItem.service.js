import { OrderItemRepository } from "../repositories";

class OrderItemService {
  _orderItemRepo = new OrderItemRepository();

  create = async (item_id) => {
    return {
      code: 200,
      message: "상품이 발주되었습니다",
      data: await this._orderItemRepo.create(item_id),
    };
  };

  update = async (id, state) => {
    const getState = await this._orderItemRepo.getState(id);
    const getItemAmount = await this._orderItemRepo.getItemAmount(id);
    const getItemOrderAmount = await this._orderItemRepo.getItemOrderAmount(id);
    console.log(getState, getItemAmount, getItemOrderAmount);

    if (getState === 1 && state === 3) {
      return {
        code: 200,
        message: "Pending → Completed 성공 !",
        data: await this._orderItemRepo.upAmount(id, state, getItemOrderAmount),
      };
    }
    if (getState === 2 && getItemAmount <= getItemOrderAmount) {
      return {
        code: 400,
        message: "현재 수량이 발주 수량보다 적어 발주 취소가 불가능합니다",
      };
    }

    if (getState === 2 && getItemAmount > getItemOrderAmount) {
      return {
        code: 200,
        message: "Completed → Canceled or Pending or Ordered 성공 !",
        data: await this._orderItemRepo.downAmount(
          id,
          state,
          getItemOrderAmount
        ),
      };
    }
    return {
      code: 200,
      message: "발주 상태가 수정되었습니다",
      data: await this._orderItemRepo.update(id, state),
    };
  };
}

export default OrderItemService;

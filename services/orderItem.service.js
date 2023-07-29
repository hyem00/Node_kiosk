import { OrderItemRepository } from "../repositories";
const { sequelize } = require("sequelize");
// 월요일 아침에 트랜잭션 질문하기
// repository에서 트랜잭션 하는법은 아는데 서비스에서 할 줄 모르겠다.
// 여러 레포를 쓸때 블록 단계로 처리하려면 서비스에서 넣는게 더 좋은 코드 일 것 같아서 ,,, 아니면 레포에 ,,
// if 문 안에다가 트랜잭션을 어떻게 넣어야 할까
//

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
    try {
      const getState = await this._orderItemRepo.getState(id);
      const getItemAmount = await this._orderItemRepo.getItemAmount(id);
      const getItemOrderAmount = await this._orderItemRepo.getItemOrderAmount(
        id
      );
      console.log(getState, getItemAmount, getItemOrderAmount);
      // const transaction = await sequelize.transaction();
      if (getState === 1 && state === 3) {
        return {
          code: 200,
          message: "Pending → Completed 성공 !",
          data: await this._orderItemRepo.upAmount(
            id,
            state,
            getItemOrderAmount
          ),
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
      // await transaction.commit();
      return {
        code: 200,
        message: "발주 상태가 수정되었습니다",
        data: await this._orderItemRepo.update(id, state),
      };
    } catch (e) {
      // await transaction.rollback();
      console.log(e);
      return {
        code: 400,
        message: "발주 상태 수정에 실패하였습니다 롤백 !",
      };
    }
  };
}

export default OrderItemService;

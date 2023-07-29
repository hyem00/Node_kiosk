import { OrderItemService } from "../services";

class OrderItemController {
  _orderItemService = new OrderItemService();

  create = async (req, res, next) => {
    try {
      const { item_id } = req.params;

      const { code, message, data } = await this._orderItemService.create(
        item_id
      );

      res
        .status(code)
        .json({ ...(message && { message }), ...(data && { data }) });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: "상품을 발주하던 중 문제가 발생하였습니다" });
    }
  };

  update = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { state } = req.body;
      const { code, message, data } = await this._orderItemService.update(
        id,
        state
      );
      res
        .status(code)
        .json({ ...(message && { message }), ...(data && { data }) });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: "상품을 발주하던 중 문제가 발생하였습니다" });
    }
  };
}

export default OrderItemController;

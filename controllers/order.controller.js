import { OrderService } from "../services";

class OrderController {
  _orderService = new OrderService();

  create = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { order } = req.body;
      const { code, data, message } = await this._orderService.create(
        id,
        order
      );

      res
        .status(code)
        .json({ ...(message && { message }), ...(data && { data }) });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: "상품을 주문하던 중 문제가 발생하였습니다" });
    }
  };

  update = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { code, data, message } = await this._orderService.update(id);
      res
        .status(code)
        .json({ ...(message && { message }), ...(data && { data }) });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: "상품 상태를 변경하던 중 문제가 발생하였습니다" });
    }
  };
}

export default OrderController;

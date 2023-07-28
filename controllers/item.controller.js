import { ItemService } from "../services";

class ItemController {
  // _ (언더스코어) 쓰는 이유 : 외부에서 직접적으로 접근하지 않도록 프라이빗 변수라고 표시해주는것
  //                         : 변수명에 특별한 의미를 부여하거나 , 이미 사용중인 변수명과의 충돌을 피하려고
  _itemService = new ItemService();

  create = async (req, res) => {
    try {
      const { name, price, type, test } = req.body;

      const { code, data, message } = await this._itemService.create({
        name,
        price,
        type,
      });

      // (data && { data }): data 변수가 존재하면 { data } 객체를 생성하고, 아니면 빈 객체 {}를 생성
      // {data} = {data:data}
      // data와 message 모두 존재하면, 응답으로 { data: data, message: message } 알지?
      // ... : 스프레드 문법 , 가변인자 , 쉽게는 배열을 확장할때 쓰임(추가하거나 추출하거나)
      res
        .status(code)
        .json({ ...(message && { message }), ...(data && { data }) });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: "상품을 추가하던 중 문제가 발생하였습니다" });
    }
  };

  read = async (req, res, next) => {
    try {
      const { code, data, message } = await this._itemService.read();

      res
        .status(code)
        .json({ ...(message && { message }), ...(data && { data }) });
    } catch (error) {
      console.log(error);
      res
        .status(code)
        .json({ message: "전체상품을 조회하던 중 문제가 발생하였습니다" });
    }
  };
  typeRead = async (req, res, next) => {
    try {
      const { code, data, message } = await this._itemService.typeRead();
      res
        .status(code)
        .json({ ...(message && { message }), ...(data && { data }) });
    } catch (error) {
      console.log(error);
      res
        .status(code)
        .json({ message: "타입별 상품을 조회하던 중 문제가 발생하였습니다" });
    }
  };

  getAmount = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { code, message, data } = await this._itemService.getAmount(id);

      res
        .status(code)
        .json({ ...(message && { message }), ...(data && { data }) });
    } catch (error) {
      console.log(error);
      res
        .status(code)
        .json({ message: "상품을 삭제하던 중 문제가 생겼습니다" });
    }
  };
  requestion = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { requestion } = req.body;
      const { code, message, data } = await this._itemService.requestion({
        id,
        requestion,
      });

      res
        .status(code)
        .json({ ...(message && { message }), ...(data && { data }) });
    } catch (error) {
      console.log(error);
      res
        .status(code)
        .json({ message: "상품을 삭제하던 중 문제가 생겼습니다" });
    }
  };
  update = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { name, price } = req.body;
      const { code, message, data } = await this._itemService.update({
        id,
        name,
        price,
      });

      res
        .status(code)
        .json({ ...(message && { message }), ...(data && { data }) });
    } catch (error) {
      console.log(error);
      res
        .status(code)
        .json({ message: "상품을 수정하던 중 문제가 생겼습니다" });
    }
  };
}

export default ItemController;

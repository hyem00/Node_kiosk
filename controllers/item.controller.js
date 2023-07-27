import { ItemService } from "../services";

class ItemController {
  // _ (언더스코어) 쓰는 이유 : 외부에서 직접적으로 접근하지 않도록 프라이빗 변수라고 표시해주는것
  //                         : 변수명에 특별한 의미를 부여하거나 , 이미 사용중인 변수명과의 충돌을 피하려고
  _itemService = new ItemService();

  create = async (req, res) => {
    try {
      const { name, price, type } = req.body;

      const { code, data, message } = await this._itemService.create({
        name,
        price,
        type,
      });

      // (data && { data }): data 변수가 존재하면 { data } 객체를 생성하고, 아니면 빈 객체 {}를 생성
      // {data} = {data:data}
      // data와 message 모두 존재하면, 응답으로 { data: data, message: message }
      // ... : 스프레드 문법 , 가변인자 , 쉽게 배열을 확장할때 쓰임
      res
        .status(code)
        .json({ ...(data && { data }), ...(message && { message }) });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };
}

export default ItemController;

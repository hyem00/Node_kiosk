import { ItemRepository } from "../repositories";

class ItemService {
  _itemRepo = new ItemRepository();

  // name,price,type 을 item 에 받아줘서 사용
  create = async (item) => {
    if (!item.name) {
      return {
        code: 400,
        message: "이름을 입력해주세요",
      };
    }
    // || = or
    if (!item.price || item.price < 0) {
      return {
        code: 400,
        message: "올바른 가격을 입력해주세요",
      };
    }

    const itemTypeArray = { coffee: "coffee", juice: "juice", food: "food" };
    if (!itemTypeArray.includes(item.type)) {
      return {
        code: 400,
        message: "올바른 타입을 지정해주세요",
      };
    }
    return {
      code: 200,
      data: await this._itemRepo.create(item),
    };
  };
}

export default ItemService;

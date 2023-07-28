import { ItemRepository } from "../repositories";

class ItemService {
  _itemRepo = new ItemRepository();
  itemTypeArray = ["coffee", "juice", "food"];

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

    if (!itemTypeArray.includes(item.type)) {
      return {
        code: 400,
        message: "올바른 타입을 지정해주세요",
      };
    }
    return {
      code: 200,
      message: "상품이 추가되었습니다",
      data: await this._itemRepo.create(item),
    };
  };

  read = async () => {
    return {
      code: 200,
      message: "전체상품이 조회되었습니다",
      data: await this._itemRepo.read(),
    };
  };
  typeRead = async () => {
    return {
      code: 200,
      message: "타입별 상품이 조회되었습니다",
      data: await this._itemRepo.typeRead(),
    };
  };

  getAmount = async (id) => {
    const getAmount = await this._itemRepo.getAmount(id);

    if (getAmount === 0) {
      return {
        code: 200,
        message: "상품이 삭제되었습니다",
        data: await this._itemRepo.delete(id),
      };
    }

    return {
      code: 200,
      message: "현재 수량이 남아 있습니다. 삭제하시겠습니까 ?",
    };
  };
  requestion = async (item) => {
    if (item.requestion === "예") {
      return {
        code: 200,
        message: "상품이 삭제되었습니다",
        data: await this._itemRepo.delete(item.id),
      };
    }
    if (item.requestion === "아니요") {
      return {
        code: 200,
        message: "상품이 삭제되지 않았습니다",
      };
    }
    if (!item.requestion) {
      return {
        code: 400,
        message: "대답을 입력해주세요",
      };
    }
    return {
      code: 400,
      message: "대답이 비정상적인 입력입니다",
    };
  };

  update = async (item) => {
    if (!item.name) {
      return {
        code: 400,
        message: "이름을 입력해주세요",
      };
    }
    if (!item.price || item.price < 0) {
      return {
        code: 400,
        message: "알맞은 가격을 입력해주세요",
      };
    }
    return {
      code: 200,
      message: "수정이 완료되었습니다",
      data: await this._itemRepo.update(item),
    };
  };
}

export default ItemService;

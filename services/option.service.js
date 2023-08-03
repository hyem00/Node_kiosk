import { OptionRepository } from "../repositories";

class OptionService {
  _optionRepo = new OptionRepository();
  create = async (extra_price, shot_price, hot) => {
    console.log("@@@@@@", extra_price, shot_price, hot);
    if (extra_price < 0 || shot_price < 0) {
      return {
        code: 400,
        message: "선택 불가능한 옵션입니다",
      };
    }
    //타입 가져오기
    // const getType = await this._optionRepo.getType(id);
    return {
      code: 200,
      message: "옵션이 성공적으로 추가되었습니다",
      data: await this._optionRepo.create(extra_price, shot_price, hot),
    };
  };

  delete = async (id) => {
    await this._optionRepo.delete(id);
    return {
      code: 200,
      message: "옵션이 성공적으로 삭제되었습니다",
    };
  };
}

export default OptionService;

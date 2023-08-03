import { OptionService } from "../services";

class OptionController {
  _optionService = new OptionService();

  // 타입마다의 옵션 지정
  create = async (req, res) => {
    try {
      const { extra_price, shot_price, hot } = req.body;
      const { code, data, message } = await this._optionService.create(
        extra_price,
        shot_price,
        hot
      );

      res
        .status(code)
        .json({ ...(message && { message }), ...(data && { data }) });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: "옵션을 추가하던 중 문제가 발생하였습니다" });
    }
  };

  delete = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { code, data, message } = await this._optionService.delete(id);

      res
        .status(code)
        .json({ ...(message && { message }), ...(data && { data }) });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: "옵션을 삭제하던 중 문제가 발생하였습니다" });
    }
  };
}

export default OptionController;

import { Router } from "express";
import { OptionController } from "../controllers";

const router = Router();

const optionController = new OptionController();

//옵션 추가
router.post("/item/:id", optionController.create);
//옵션 수정
// router.patch("/option/:id", optionController.update);
//옵션 삭제
router.delete("/option/:id", optionController.delete);

export default router;

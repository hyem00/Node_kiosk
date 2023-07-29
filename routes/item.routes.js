import { Router } from "express";
import { ItemController } from "../controllers";

const router = Router();

const itemController = new ItemController();

// 기존 방식이랑 똑같음. 위에 require만 다른거임
// 상품추가
router.post("/", itemController.create);
// 전체 상품 조회
router.get("/", itemController.read);
// 타입별 상품 조회
router.get("/type", itemController.typeRead);
// 상품 삭제하기 전 상품수량 확인 (1차)
router.delete("/:id", itemController.getAmount);
// 상품 삭제 확인 (2차)
router.delete("/:id/requestion", itemController.requestion);
//상품 수정
router.patch("/:id", itemController.update);

export default router;

// 부분수정 : patch , 전체 수정(+없으면 생성) :put

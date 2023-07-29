import { Router } from "express";
import { OrderItemController } from "../controllers";

const router = Router();

const orderItemController = new OrderItemController();

// 상품 발주
router.post("/:item_id", orderItemController.create);

// 발주 상태 수정
router.patch("/:id", orderItemController.update);

export default router;

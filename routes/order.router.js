import { Router } from "express";
import { OrderController } from "../controllers";

const router = Router();

const orderController = new OrderController();

// 상품 주문
router.post("/item/:id", orderController.create);

// 상태 변경
router.post("/orderCustomer/:id", orderController.update);

export default router;

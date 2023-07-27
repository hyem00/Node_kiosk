import { Router } from "express";
// import { ItemController } from "../controller";

const router = Router();

const itemController = new ItemController();

// 원래 이름 지어줬던거를 create 로 해서 명확히 했을뿐임
router.post("/", itemController.create);

export default router;

import express from "express";
import ItemRoute from "./item.routes";
import OrderItemRoute from "./orderItem.routes";
import OrderRoute from "./order.router";
import OptionRoute from "./option.routes";

const router = express.Router();

router.use("/item", ItemRoute);
// 사장님 발주
router.use("/master", OrderItemRoute);
// 고객 주문
router.use("/customer", OrderRoute);
// 사장님 옵션
router.use("/option", OptionRoute);
module.exports = router;

import express from "express";
import ItemRoute from "./item.routes";
import OrderItemRoute from "./orderItem.routes";

const router = express.Router();

router.use("/item", ItemRoute);
router.use("/orderItem", OrderItemRoute);
module.exports = router;

import sequelize from "./sequelize";
import Item from "./models/item";
import Order_item from "./models/order_item";
import Order_customer from "./models/order_customer";
import Item_order_customer from "./models/item_order_customer";
import Option from "./models/option";
import relations from "./relations";

Object.values(relations).forEach((relationsFunction) => {
  relationsFunction();
});
//relations 객체는 데이터베이스 모델 간의 관계를 설정하는 함수들이 담겨있음
// relations 폴더 안에 내용들을 다 가져와서
// 테이블들 간의 관계를 정의하고, Sequelize 모델에 관계를 맺도록 설정

export {
  sequelize,
  Item,
  Order_item,
  Order_customer,
  Item_order_customer,
  Option,
};

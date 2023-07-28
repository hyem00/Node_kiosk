import { Item } from "../db";

class ItemRepository {
  create = async (item) => {
    return Item.create(item);
  };

  read = async () => {
    return Item.findAll();
  };

  typeRead = async () => {
    return Item.findAll({ order: ["type"] });
  };

  getAmount = async (id) => {
    const item = Item.findOne({ id });
    return item.amount;
  };

  delete = async (id) => {
    return Item.destroy({ where: { id } });
  };
  update = async (item) => {
    return Item.update(
      { name: item.name, price: item.price },
      { where: { id: item.id } }
    );
  };
}

export default ItemRepository;

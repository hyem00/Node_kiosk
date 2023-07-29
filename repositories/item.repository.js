import { Item } from "../db";

class ItemRepository {
  create = async (item) => {
    return await Item.create(item);
  };

  read = async () => {
    return await Item.findAll();
  };

  typeRead = async () => {
    return await Item.findAll({ order: ["type"] });
  };

  getAmount = async (id) => {
    const item = Item.findOne({ id });
    return await item.amount;
  };

  delete = async (id) => {
    return await Item.destroy({ where: { id } });
  };
  update = async (item) => {
    return await Item.update(
      { name: item.name, price: item.price },
      { where: { id: item.id } }
    );
  };
}

export default ItemRepository;

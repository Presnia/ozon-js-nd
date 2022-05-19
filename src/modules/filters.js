export const searchFilter = (goods, value) => {
  console.log(goods);
  return goods.filter((goodsItem) => goodsItem.title.includes(value));
};

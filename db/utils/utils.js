module.exports = {
  makeRefObj: (list, key, value) => {
    return list.reduce((refObj, currObj) => {
      refObj[currObj[key]] = currObj[value];
      return refObj;
    }, {});
  },
  formatProducts: (products, categoryIdRef, shoeTypeIdRef) =>
    products.map((product) => {
      const formattedProduct = { ...product };
      formattedProduct.category_id = categoryIdRef[product.category];
      formattedProduct.shoetype_id = shoeTypeIdRef[product.shoetype];
      delete formattedProduct.category;
      delete formattedProduct.shoetype;
      return formattedProduct;
    }),
};

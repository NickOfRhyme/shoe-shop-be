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
  formatOrders: (orders, userIdRef) =>
    orders.map((order) => {
      const formattedOrder = { ...order };
      formattedOrder.user_id = userIdRef[order.second_name];
      delete formattedOrder.second_name;
      return formattedOrder;
    }),
  formatOrderItems: (orderItems, productIdRef, orderIdRef) =>
    orderItems.map((orderItem) => {
      const formattedOrderItem = { ...orderItem };
      formattedOrderItem.order_id = orderIdRef[orderItem.total_price_pence];
      formattedOrderItem.product_id = productIdRef[orderItem.product_name];
      delete formattedOrderItem.total_price_pence;
      delete formattedOrderItem.product_name;
      return formattedOrderItem;
    }),
};

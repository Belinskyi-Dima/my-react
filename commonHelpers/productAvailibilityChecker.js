const Product = require("../models/Product");
 
module.exports = async orderProducts => {
  try {
    const productsAvailibilityDetails = await orderProducts.reduce(
      async (resultPromise, orderItem) => {
        const result = await resultPromise;
        const dbProduct = await Product.findOne({ _id: orderItem.product._id });
        const orderedQuantity = orderItem.cartQuantity; 
        const realQuantity = dbProduct.quantity;  

        const realQuantityBySize = dbProduct.sizes; 
        const orderedQuantityBySize = orderItem.sizes; 

        console.log(orderItem); 

        function available(a, b) {
          let res; 
          a.forEach(i => {
              res = b.find(j => i.name === j.name && i.quantity <= j.quantity)
              if (res) {
                  return true
              }
          })
          return res ? true : false 
        }

        result.push({
          productId: dbProduct._id,
          itemNo: dbProduct.itemNo,
          orderedQuantity,
          realQuantity,
          diff: realQuantity - orderedQuantity,
          available: available(orderedQuantityBySize, realQuantityBySize), 
        });

        return result;
      },
      Promise.resolve([])
    );

    const unavailableProductIds = productsAvailibilityDetails
      .filter(item => !item.available)
      .map(item => item.productId);

    const unavailableProducts = await Product.find({
      _id: { $in: unavailableProductIds }
    });

    return {
      productsAvailibilityStatus: productsAvailibilityDetails.every(
        product => product.available
      ),
      productsAvailibilityDetails,
      unavailableProducts
    };
  } catch (err) {
    return {
      message: `Error happened on server: "${err}" `
    };
  }
};

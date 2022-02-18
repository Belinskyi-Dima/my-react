const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartSchema = new Schema(
  {
    customerId: {
      type: Schema.Types.ObjectId,
      ref: "customers",
      required: true
    },
    products: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "products"
        },
        //
        size: {
          type: String,
        },
        //
        cartQuantity: {
          type: Number
        }, 
        sizes: [
          {
            name: {
              type: String
            },
            quantity: {
              type: Number
            },
          },
        ]
      }
    ],
    date: {
      type: Date,
      default: Date.now
    }
  },
  { strict: false }
);

module.exports = Cart = mongoose.model("cart", CartSchema, "cart");

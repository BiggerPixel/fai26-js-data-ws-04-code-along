const cartItems = [
  {
    product: {
      name: "Trådlösa hörlurar",
      brand: "North Sound",
      price: 299,
      image:
        "https://images.unsplash.com/photo-1545127398-14699f92334b?w=600&auto=format&fit=crop&q=60",
    },
    quantity: 2,
  },
  {
    product: {
      name: "Mekaniskt tangentbord",
      brand: "Key Works",
      price: 849,
      image:
        "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=600&auto=format&fit=crop&q=60",
    },
    quantity: 1,
  },
  {
    product: {
      name: "USB-C-hubb",
      brand: "Port Lab",
      price: 399,
      image:
        "https://plus.unsplash.com/premium_photo-1764113096548-11270b5febed?w=600&auto=format&fit=crop&q=60",
    },
    quantity: 1,
  },
  // {
  //   product: {
  //     name: "Trådlös mus",
  //     brand: "Glide",
  //     price: 249,
  //     image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&auto=format&fit=crop&q=60",
  //   },
  // },
];

const calculateLineTotal = (item) => {
  return item.product.price * item.quantity;
};

// Sammanfattningen är redan klar.
let orderTotal = 0;

cartItems.forEach((item) => {
  orderTotal = orderTotal + calculateLineTotal(item);
});

document.querySelector("#order-total").textContent = `${orderTotal} kr`;

// CampusEats task list
 const tasks = [
    "Design the menu screen before sep 30" ,
    "Build the orders API before sep 27" ,
    "Add user login before sep 25" ,
 ];

 console.log('CampusEats has ${tasks.length} open tasks ');


 // AFTER — clear names, no magic numbers, no secrets
const VIP_DISCOUNT = 0.1;

function calculateTotal(price, quantity, customerType) {
  if (price < 0 || quantity < 0) {
    throw new Error("price and quantity must be >= 0");
  }
  const subtotal = price * quantity;
  return customerType === "vip"
    ? subtotal * (1 - VIP_DISCOUNT)
    : subtotal;
}

// API keys should be retrieved from environment variables (e.g., process.env.API_KEY)
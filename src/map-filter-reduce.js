import inventory, { categories } from './Inventory';


// ==========================================================
// Reduce inventory to count number of items in each category
function countCategory(items, category) {
  return items.reduce((total, item) => {
    return item.category === category ? total += 1 : total;
  }, 0);
}

categories.forEach((cat) => {
  console.log(cat, countCategory(inventory, cat));
});

// ==========================================================
// Filter inventory on category

function filterOnCategory(items, category) {
  return items.filter(item => item.category === category);
}

categories.forEach((cat) => {
  console.log(cat, filterOnCategory(inventory, cat));
});

// ==========================================================
// Map inventory from object to string of name and price

function mapInventoryToString(items) {
  return items.map(item => `${item.name} $${item.price}`);
}

mapInventoryToString(inventory).forEach((item) => {
  console.log(item);
});

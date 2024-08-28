const sampleData = {
  categories: [
    { id: 1, name: "Dresses", description: "All types of dresses" },
    { id: 2, name: "Pants", description: "Jeans, trousers, and other bottoms" },
    { id: 3, name: "Tops", description: "T-shirts, blouses, and other tops" },
    { id: 4, name: "Accessories", description: "Belts, scarves, and other accessories" },
  ],
  products: [
    { id: 1, name: "Summer Dress", description: "Light and airy summer dress", category_id: 1, size: "M", color: "Blue", price: 59.99, quantity: 20, reorder_point: 5, image_url: "summer_dress.jpg" },
    { id: 2, name: "Denim Jeans", description: "Classic blue denim jeans", category_id: 2, size: "32", color: "Blue", price: 79.99, quantity: 30, reorder_point: 10, image_url: "denim_jeans.jpg" },
    { id: 3, name: "Cotton T-Shirt", description: "Basic white cotton t-shirt", category_id: 3, size: "L", color: "White", price: 19.99, quantity: 50, reorder_point: 15, image_url: "cotton_tshirt.jpg" },
    { id: 4, name: "Leather Belt", description: "Classic brown leather belt", category_id: 4, size: "One Size", color: "Brown", price: 29.99, quantity: 25, reorder_point: 8, image_url: "leather_belt.jpg" },
  ],
  sales: [
    { id: 1, date: "2023-06-01 10:30:00", total_amount: 139.98 },
    { id: 2, date: "2023-06-02 14:45:00", total_amount: 79.99 },
    { id: 3, date: "2023-06-03 11:15:00", total_amount: 109.98 },
  ],
  saleItems: [
    { id: 1, sale_id: 1, product_id: 1, quantity: 2, price: 59.99 },
    { id: 2, sale_id: 1, product_id: 3, quantity: 1, price: 19.99 },
    { id: 3, sale_id: 2, product_id: 2, quantity: 1, price: 79.99 },
    { id: 4, sale_id: 3, product_id: 1, quantity: 1, price: 59.99 },
    { id: 5, sale_id: 3, product_id: 4, quantity: 1, price: 29.99 },
    { id: 6, sale_id: 3, product_id: 3, quantity: 1, price: 19.99 },
  ],
  backups: [
    { id: 1, date: "2023-06-01 23:00:00", file_name: "backup_20230601.zip", status: "Completed" },
    { id: 2, date: "2023-06-02 23:00:00", file_name: "backup_20230602.zip", status: "Completed" },
    { id: 3, date: "2023-06-03 23:00:00", file_name: "backup_20230603.zip", status: "Completed" },
  ],
  settings: [
    { id: 1, key: "notification_enabled", value: "true" },
    { id: 2, key: "theme", value: "light" },
    { id: 3, key: "currency", value: "USD" },
  ]
};

export default sampleData;
